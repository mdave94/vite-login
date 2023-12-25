type FormInputProps = {
  label: string;
  htmlFor: string;
};

const FormInput = ({ label, htmlFor }: FormInputProps) => {
  return (
    <>
      <div className="flex flex-col justify-center align-middle">
        <label className="text-black mb-2" htmlFor={htmlFor}>
          {label}
        </label>
        <input className="h-11 text-black p-2 bg-slate-50 border border-gray-200 w-3/4 rounded-md" />
      </div>
    </>
  );
};

export default FormInput;
