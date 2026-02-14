import React from "react";

const RateLimitedUI = () => {
  return (
    <div className="flex items-center justify-center mt-10">
      <div className="bg-green-900/40 border border-green-500 text-green-200 p-6 rounded-lg w-[90%] max-w-2xl">
        <h2 className="text-xl font-bold mb-2">
          ⚡ Rate Limit Reached
        </h2>
        <p>
          You've made too many requests in a short period. Please wait a
          moment and try again.
        </p>
      </div>
    </div>
  );
};

export default RateLimitedUI;
