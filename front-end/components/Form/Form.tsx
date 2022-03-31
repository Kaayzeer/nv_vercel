import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {
  isFind: Boolean;
};

interface IFormInput {
  firstName: string;
  lastName: string;
  phone: number;
  password: string;
}

export default function Form({ isFind }: Props) {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  return (
    <>
      {isFind && (
        <>
          <div className="b py-16 bg-gray-50 px-4 sm:px-6 h-screen w-screen flex justify-center items-center">
            <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-6 gap-6"
              >
                <div className="col-span-6 ">
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="firstName"
                  >
                    Förnamn
                  </label>
                  <input
                    type="text"
                    {...register("firstName", {
                      required: true,
                      maxLength: 20,
                    })}
                    autoComplete="given-name"
                    className="block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2"
                  />
                </div>
                <div className="col-span-6">
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="lastName"
                  >
                    Efternamn
                  </label>
                  <input
                    type="text"
                    {...register("lastName", { pattern: /^[A-Za-z]+$/i })}
                    autoComplete="family-name"
                    className="block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2"
                  />
                </div>
                <div className="col-span-6 ">
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="phone"
                  >
                    Telefonnummer
                  </label>
                  <input
                    type="number"
                    {...register("phone", { min: 18, max: 99 })}
                    className="block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2"
                  />
                </div>
                <div className="col-span-6 ">
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="password"
                  >
                    Lösenord
                  </label>
                  <input
                    type="text"
                    {...register("password", { min: 18, max: 99 })}
                    className="block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2"
                  />
                </div>
                <input type="submit" />
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}
