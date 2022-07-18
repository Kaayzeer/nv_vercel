import React, { useState } from "react";

type Props = {};

export default function Market({}: Props) {
  const [search, setSearch] = useState<string>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(search);
    fetch(`https://brandalready.com/search/q/${search}`).then((res) =>
      console.log(res)
    );
  };

  return (
    <></>
    /*  <form method="POST" onSubmit={handleSubmit}>
      <input
        className="mt-1 py-4 w-full md:max-w-md bg-sign-in-input-bg  sm:text-sm gray-300 rounded-lg border-0"
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <input type="submit" value="Search" />
    </form> */
  );
}
