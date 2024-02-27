import React from "react";

const InputField = ({
  name,
  type,
  value,
  placeholder,
  handleChange,
  errorMessage,
}) => {
  return (
    <React.Fragment>
      <div className="p-4 bg-gray-50 rounded-md mb-2 flex flex-col relative h-14">
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={(e) => handleChange(e)}
          className="outline-none text-[black] border-none focus:outline-none bg-transparent absolute p-4 inset-0"
        />
      </div>
      {errorMessage && (
        <span className="text-red-700 font-semibold mb-2">{errorMessage}</span>
      )}
    </React.Fragment>
  );
};

export default InputField;
