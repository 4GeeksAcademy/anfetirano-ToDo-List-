import React from "react";

const Checkbox = (props) => {
  const {
    onChange,
    data: { id, description, done }
  } = props;

  return (
    <div className="form-check todo new.item">
      <input
        className="form-check-input"
        type="checkbox"
        id={id}
        checked={done}
        onChange={onChange}
      />
      <label className="form-check-label to__text" htmlFor={id}>
        {description}
      </label>
    </div>
  );
};

export default Checkbox;