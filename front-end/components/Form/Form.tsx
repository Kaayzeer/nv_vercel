import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {
  isFind: Boolean;
};

interface IFormInput {
  firstName: string;
  lastName: string;
  age: number;
}

export default function Form({ isFind }: Props) {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  return (
    <>
      {isFind && (
        <>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("firstName", { required: true, maxLength: 20 })}
            />
            <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
            <input type="number" {...register("age", { min: 18, max: 99 })} />
            <input type="submit" />
          </form>
        </>
      )}
    </>
  );
}
