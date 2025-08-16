import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import * as apiClient from "../api-client";
import { UseAppContext } from "../contexts/AppContext";
import {  useNavigate } from "react-router-dom";
export type SignInFormData = {
  email: string;
  password: string;
};
const SignIn = () => {
  const { showToast } = UseAppContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>();
const navigate=useNavigate()
  const mutation = useMutation(apiClient.signIn, {
    onSuccess: async () => {
      showToast({ message: "Sign in Succesful!", type: "SUCCESS" });
     navigate("/")
    },
    onError: () => {
     showToast({
        message:"Invalid Credentails",type:"ERROR"
     })
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });
  return (
    <form className="flex flex-col gap-5" onSubmit={onSubmit}>
      <h1 className="text03xl font-bold">Signin</h1>

      <label
        htmlFor="firstName"
        className="text-gray-700 text-sm font-bold flex-1"
      >
        Email
        <input
          className="border rounded w-full py-1 px-2 font-normal"
          type="email"
          {...register("email", { required: "This field is required" })}
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
      </label>

      <label
        htmlFor="firstName"
        className="text-gray-700 text-sm font-bold flex-1"
      >
        Passowrd
        <input
          className="border rounded w-full py-1 px-2 font-normal"
          type="password"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 6,
              message: "Password must be 6 character or more",
            },
          })}
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
      </label>
      <span>
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 text-xl"
        >
          Login{" "}
        </button>
      </span>
    </form>
  );
};

export default SignIn;
