type FormInputProps = {
  text: string;
  onClick: any;
};

const FormInput = ({ text, onClick }: FormInputProps) => {
  return (
    <>
      <div className="border-2" onClick={onclick}>
        {text}
      </div>
    </>
  );
};

export default FormInput;
