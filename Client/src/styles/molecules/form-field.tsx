import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import { Label, InputText, TextArea } from "styles/atoms";
import { color } from "styles/const";

const RequiredText = styled.span`
  color: ${color.error};
`;

type IternalFormFieldProps = {
  id?: string;
  label?: string;
  required?: boolean;
  error?: string[] | string | null;
  helper?: string;
  style?: React.CSSProperties;
};

const FormField = ({
  id,
  label,
  required,
  children,
  style
}: PropsWithChildren<IternalFormFieldProps>) => (
  <div style={style}>
    {label ? (
      <Label htmlFor={id}>
        {label} {required ? <RequiredText>*</RequiredText> : null}
      </Label>
    ) : required ? (
      <RequiredText>*</RequiredText>
    ) : null}
    {children}
  </div>
);

export type TextFieldProps = {
  id?: string;
  label?: string;
  required?: boolean;
  type?: "text" | "email";
  onChange: (any) => void;
  placeholder?: string;
};

export const TextField = ({
  id,
  label,
  required,
  onChange,
  type,
  placeholder
}: TextFieldProps) => (
  <FormField label={label} id={id} required={required}>
    <InputText
      id={id}
      type={type || "text"}
      onChange={onChange}
      placeholder={placeholder}
    />
  </FormField>
);

export const TextAreaField = ({
  id,
  label,
  required,
  onChange,
  placeholder
}: TextFieldProps) => (
  <FormField label={label} id={id} required={required}>
    <TextArea id={id} onChange={onChange} placeholder={placeholder || ""} />
  </FormField>
);
