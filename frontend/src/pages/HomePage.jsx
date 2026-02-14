import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import api from "../lib/axios";
import NavBar from "../components/NavBar";
import RateLimitedUI from "../components/RateLimitedUI";
import NoteCard from "../components/NoteCard";
import NotesNotFound from "../components/NotesNotFound";

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get("/notes");
        setNotes(res.data);
        setIsRateLimited(false);
      } catch (error) {
        if (error.response?.status === 429) {
          setIsRateLimited(true);
          return;
        }
        toast.error("Failed to fetch notes");
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen bg-transparent">
      <NavBar />

      {isRateLimited ? (
        <RateLimitedUI />
      ) : (
        <div className="max-w-7xl mx-auto p-4 mt-6">
          {loading && (
            <div className="text-center text-white py-10">Loading...</div>
          )}

          {notes.length ===0 && !isRateLimited && <NotesNotFound />}

          {!loading && notes.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {notes.map((note) => (
                <NoteCard key={note._id} note={note} setNotes={setNotes} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HomePage;
