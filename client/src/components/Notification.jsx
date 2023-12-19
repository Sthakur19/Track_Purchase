import React from 'react';

function Notification({ message, onClose }) {
  return (
    <div className="fixed top-16 w-auto right-4 h-12 mt-4 mr-4 bg-gray-500 text-white p-4 rounded-md shadow-md">
      <p className="text-sm float-left mr-4 ">{message}</p>
      <button
        className=" px-3 py-1 relative -top-1  text-sm bg-white text-green-500 rounded-md hover:bg-green-100 focus:outline-none focus:ring focus:border-green-300"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
}

export default Notification;
