import { ChangeEvent } from "react";

type FormInputProps = {
  htmlFor: string;
  type: "text" | "number" | "email" | "password";
  label: string;
  value: string | number;
  name: string;
  placeholder: string;
  error?: boolean;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const FormInput = ({
  label,
  type,
  htmlFor,
  placeholder,
  name,
  onChange,
}: FormInputProps) => {
  return (
    <>
      <div className="flex flex-col justify-center items-start align-middle">
        <label className="text-black mb-2 dark:text-gray-200" htmlFor={htmlFor}>
          {label}
        </label>
        <input
          type={type}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          className="h-11 w-[300px] text-black p-2 bg-slate-50 border dark:bg-slate-500 border-gray-200 rounded-md"
        />
      </div>
    </>
  );
};

export default FormInput;
