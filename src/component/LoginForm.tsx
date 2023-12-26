import { ChangeEvent, FormEvent, useState } from "react";
import FormInput from "./UI/FormInput";
import CustomButton from "./UI/CustomButton";

const LoginForm = () => {
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim()) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="w-[450px] h-[450px] border rounded-lg dark:bg-gray-800 dark:border-gray-600 bg-white ">
          <div className="text-3xl text-black m-8 font-bold text-left dark:text-gray-200">
            Sign in
          </div>
          <div className="flex flex-col justify-center align-middle items-center ">
            <div className="mb-8">
              <FormInput
                value={name}
                name={name}
                placeholder="Your email"
                type="email"
                htmlFor="email"
                label="Your Email"
                onChange={handleChange}
              />
            </div>

            <div className="mb-8">
              <FormInput
                value={name}
                name={name}
                placeholder="Your password"
                type="password"
                htmlFor="password"
                label="Password"
                onChange={handleChange}
              />
            </div>
          </div>
          {error && <p className="text-red-500"> cannot be empty </p>}

          <CustomButton title="Log in" />
        </div>
      </form>
    </>
  );
};

export default LoginForm;
