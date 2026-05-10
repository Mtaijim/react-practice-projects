import React from "react";

const Upload = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Upload Video</h1>

      <form className="space-y-4 max-w-md">
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Title of video"
            className="border p-4 w-full"
          />
          <textarea placeholder="description" className="border p-2 w-full" />
          <input type="file" className="bg-gary-500" />
        </div>
        <button className="bg-red-500 text-white px-4 py-2 rounded">
          Upload
        </button>
      </form>
    </div>
  );
};

export default Upload;
