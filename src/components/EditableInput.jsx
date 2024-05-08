import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import ButtonIcon from "./ButtonIcon";
import { mdiPencil } from "@mdi/js";

const EditableInput = ({ className, img='', value, ...props }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [val, setVal] = useState(() => {
    const storedValue = localStorage.getItem(className);
    return storedValue !== null ? storedValue : value;
  });

  const inputRef = useRef(null);

  function turnOnEditMode() {
    setIsEditMode(true);
    inputRef.current.focus();
  }

  function setValue(e) {
    e.preventDefault();
    setVal(e.target.value)
  }

  useEffect(() => {
    localStorage.setItem(className, val);
  }, [className, val]); 

  function storeValue() {
    localStorage.setItem(className, val);
    setIsEditMode(false);
  }

  return (
    <div className="wrapper">
      <span>
      <textarea
          className={className}
          ref={inputRef}
          type="text"
          value={val}
          readOnly={!isEditMode}
          onClick={turnOnEditMode}
          onChange={setValue}
          onBlur={storeValue}
          {...props}
        ></textarea>
      </span>
      
      {img && (
        <span className="imgSpan">{img}</span>
      )}

      {!isEditMode && (
        <ButtonIcon
          onClick={turnOnEditMode}
          path={mdiPencil}
          size={0.65}
          color="gray"
        />
      )}
    </div>
  );
};

EditableInput.protoTypes = {
  value: PropTypes.string,
};

export default EditableInput;
