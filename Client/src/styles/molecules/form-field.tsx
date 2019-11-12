import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import { Label, InputText } from "styles/atoms";
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
};

const FormField = ({
  id,
  label,
  required,
  children
}: PropsWithChildren<IternalFormFieldProps>) => (
  <>
    {label ? (
      <Label htmlFor={id}>
        {label} {required ? <RequiredText>*</RequiredText> : null}
      </Label>
    ) : required ? (
      <RequiredText>*</RequiredText>
    ) : null}
    {children}
  </>
);

export type TextFieldProps = {
  id?: string;
  label?: string;
  required?: boolean;
  type?: "text" | "email";

  onChange?: (any) => void;
  placeholder?: string;
};

export const TextField = ({
  id,
  label,
  required,
  onChange,
  type
}: TextFieldProps) => (
  <FormField label={label} id={id} required={required}>
    <InputText id={id} type={type || "text"} onChange={onChange} />
  </FormField>
);
