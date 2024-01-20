import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import FormInput from "./UI/FormInput";
import CustomButton from "./UI/CustomButton";
import { emailIsOk, passwordIsOk } from "../Helpers/helperfunctions";

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isEmpty, setIsEmpty] = useState<boolean>(true);

  useEffect(() => {
    setIsEmpty(false);
    if (!emailIsOk(email) || !passwordIsOk(password)) setIsEmpty(true);
  }, [email, password]);

  const setEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const setPasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
                value={email}
                name={email}
                placeholder="Your email"
                type="email"
                htmlFor="email"
                label="Your Email"
                onChange={setEmailHandler}
              />
            </div>

            <div className="mb-8">
              <FormInput
                value={password}
                name={password}
                placeholder="Your password"
                type="password"
                htmlFor="password"
                label="Password"
                onChange={setPasswordHandler}
              />
            </div>
            <div className="w-[300px]">
              <CustomButton disabled={isEmpty} title="Log in" />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
