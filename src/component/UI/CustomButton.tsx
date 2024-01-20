type CustomButtonProps = {
  title: string;

  disabled?: boolean;
};

const CustomButton = ({ title, disabled }: CustomButtonProps) => {
  return (
    <>
      <button
        disabled={disabled}
        className={`w-full ${
          disabled && `disabled:opacity-40`
        } text-white font-bold bg-blue-500 p-2 rounded-md hover:bg-blue-600`}
      >
        {title}
      </button>
    </>
  );
};

export default CustomButton;
