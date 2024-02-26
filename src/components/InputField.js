import React, { useState } from "react";

const InputField = ({ label, type }) => {
  const [showInput, setShowInput] = useState(false);
  return (
    <div className="p-4 bg-gray-50 rounded-md mb-2 flex flex-col relative h-14">
      <input
        type={type}
        id="email/phone"
        placeholder={label}
        className="outline-none text-[black] border-none focus:outline-none bg-transparent absolute p-4 inset-0"
      />
    </div>
  );
};

export default InputField;
