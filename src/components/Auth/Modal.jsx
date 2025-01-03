// src/components/Modal.jsx
import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-3/4 h-3/4 flex rounded-lg overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default Modal;
