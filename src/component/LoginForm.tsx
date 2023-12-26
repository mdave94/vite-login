import { ChangeEvent, useState } from "react";
import FormInput from "./UI/FormInput";

const LoginForm = () => {
  const [name, setName] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <>
      <form>
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
        </div>
      </form>
    </>
  );
};

export default LoginForm;
