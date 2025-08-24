import React from "react";

const Tag = () => {
  return (
    <div class="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
      <div class="bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer">
        react
      </div>

      <div class="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer">
        redux
      </div>
    </div>
  );
};

export default Tag;
