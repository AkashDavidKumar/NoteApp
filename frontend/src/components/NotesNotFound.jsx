import { NotebookIcon } from "lucide-react";
import { Link } from "react-router-dom";

const NotesNotFound = () => {
  return (
    <div className="text-center text-gr ay-400 py-20">
      <NotebookIcon className="size-12 mx-auto mb-4 text-gray-500" />
      <h2 className="text-2xl font-semibold mb-2">No Notes Found</h2>
        <p className="text-gray-500 mb-6">You haven't created any notes yet. </p>
        <Link to="/create" className="btn btn-primary">
          Create Your First Note
        </Link>
    </div>
  );
}

export default NotesNotFound;