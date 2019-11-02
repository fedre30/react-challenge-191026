import React from "react";

type TextInputProps = {
  id?: string;
  placeholder?: string;
  onChange?: () => void;
  withLabel?: boolean;
  label?: string;
};

export const TextInput = ({
  id,
  placeholder,
  onChange,
  withLabel = false,
  label
}: TextInputProps) => (
  <>
    {withLabel && <label htmlFor={id}>{label}</label>}
    <input id={id} type="text" placeholder={placeholder} onChange={onChange} />
  </>
);
