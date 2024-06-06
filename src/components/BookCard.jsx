import React, { useState } from "react";

const BookCard = ({ book, showAddButton, addToBookshelf }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToBookshelf = () => {
    addToBookshelf(book);
    setIsAdded(true);
  };

  return (
    <div className="w-64 h-96 p-4 rounded-lg border-2 border-gray-300 space-y-4 flex flex-col justify-between">
      <div className="h-3/4 bg-gray-200 flex items-center justify-center rounded-lg">
        <div className="flex justify-center items-center h-32">
          <img
            src={`http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
            alt="cover"
            className="object-cover h-full rounded-lg"
          />
        </div>
      </div>
      <div className="h-1/2 flex items-center">
        <div>
          <div className="mb-4">
            <h2 className="font-normal text-xs">Book Title</h2>
            <h3 className="text-sm font-semibold max-h-[3em] overflow-hidden overflow-ellipsis">
              {book.title}
            </h3>
          </div>

          <div className="flex mb-2">
            <h2 className="font-normal text-xs mr-1">Edition Count:</h2>
            <h3 className="text-xs font-semibold">{book.edition_count}</h3>
          </div>
        </div>
      </div>
      {showAddButton && (
        <button
          className="rounded-lg w-full bg-blue-500 text-center px-4 py-2 text-white"
          onClick={handleAddToBookshelf}
        >
          {isAdded ? "Added" : "Add to Bookshelf"}
        </button>
      )}
    </div>
  );
};

export default BookCard;
