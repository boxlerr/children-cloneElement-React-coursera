import * as React from "react";
import "./styles.css";

export const RadioGroup = ({ onChange, selected, children }) => {
  // Use React.Children.map and React.cloneElement to clone the children
  // and pass the correct props to each RadioOption
  const RadioOptions = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;

    // Determina si la opción de radio debe estar seleccionada
    const isChecked = child.props.value === selected;

    // Clona el hijo con las props `checked` y `onChange`
    return React.cloneElement(child, {
      checked: isChecked,
      onChange: () => onChange(child.props.value),
    });
  });

  return <div className="RadioGroup">{RadioOptions}</div>;
};

export const RadioOption = ({ value, checked, onChange, children }) => {
  // Hook up the onChange handler to call the onChange prop passed to RadioGroup
  // Also, make sure to pass the correct checked prop to the input element
  return (
    <div className="RadioOption">
      <input
        id={value}
        type="radio"
        name="radio-group" // Agrupamos las opciones para permitir solo una selección
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={value}>{children}</label>
    </div>
  );
};
