import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { auth } from "../../firebaseSetup";
import { useLogin } from "../../hooks/useLogin";

type Props = {
  isFind: Boolean;
};

interface IFormInput {
  firstname: string;
  surname: string;
  phone: number;
  email: string;
}

export default function Form({ isFind }: Props) {
  const { login } = useLogin();
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    // fetch("http://localhost:5001/next-venture/europe-west1/api/public/offer", {
    //   method: "POST",
    //   headers: {
    //     /* 'authorization': "Bearer " + token, */
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((data) => console.log(data))
    //   .catch((err) => console.log(err));
    login("niko@test.com", "123456");
  };
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
                    htmlFor="firstname"
                  >
                    Förnamn
                  </label>
                  <input
                    type="text"
                    {...register("firstname", {
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
                    htmlFor="surname"
                  >
                    Efternamn
                  </label>
                  <input
                    type="text"
                    {...register("surname", {
                      required: true,
                      maxLength: 20,
                    })}
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
                    {...register("phone", {
                      required: true,
                      minLength: 10,
                      maxLength: 15,
                    })}
                    className="block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2"
                  />
                </div>
                <div className="col-span-6 ">
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="email"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    className="block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2"
                  />
                </div>
                <button className="block w-full" type="submit" value="Skicka">
                  Skicka
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}
