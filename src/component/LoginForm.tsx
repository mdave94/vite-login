import FormInput from "./UI/FormInput";

const LoginForm = () => {
  return (
    <>
      <div className="w-[450px] h-[450px] border rounded-lg dark:bg-gray-800 dark:border-gray-600 bg-white ">
        <div className="text-3xl text-black m-8 font-bold text-left dark:text-gray-200">
          Sign in
        </div>
        <div className="mb-8">
          <FormInput htmlFor="email" label="Your Email" />
        </div>
        <div className="mb-8">
          <FormInput htmlFor="password" label="Password" />
        </div>
      </div>
    </>
  );
};

export default LoginForm;
