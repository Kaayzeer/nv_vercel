import React, {useState} from "react";

//react hook form
import { useForm, SubmitHandler } from "react-hook-form";

//hooks
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogin } from "../../hooks/useLogin";

//firebase imports
import { auth } from "../../firebase/firebaseSetup";

type Props = {
  isFind: Boolean;
  isLogin: Boolean;
  type: "offer" | "buy" | "sell";
  onFetched: (id : number) => void;
};

interface IFormInput {
  firstname: string;
  surname: string;
  phone: number;
  email: string;
  password: string;
}

export default function Form({ isFind, isLogin, type, onFetched}: Props) {
  const { login } = useLogin();
  const { user } = useAuthContext();
  const { register, handleSubmit } = useForm<IFormInput>();
  const [error, setError] = useState<String>("");

  const onSubmit: SubmitHandler<IFormInput> = async (data : any) => {
    let fetched_id : number = -1;

    const headers: any = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    // Add to header
    if (user) {
      await auth.currentUser?.getIdToken().then(async (token: string) => {
        headers["authorization"] = `Bearer  ${token}`;
      });
    }
    //send to db
    await fetch(
      `http://localhost:5001/next-venture/europe-west1/api/public/${type}`,
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify({...data,
        domain: "asd.com"}),
      }
    )
      .then(res => res.json())
      .then((data) => {
        console.log(data)
        if(!data.success)
          setError(data.message.details.join("\n"))
        fetched_id = data.id
      })
      .catch((err) => console.log(err));

    isLogin && login("niko@test.com", "123456");
    onFetched(fetched_id)
  };

  return (
    <>
      {
        (error) && (
          <>
            {error}
          </>
        )
      }
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

      {isLogin && (
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
                <div className="col-span-6">
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="password"
                  >
                    Lösenord
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      required: true,
                      maxLength: 20,
                    })}
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
