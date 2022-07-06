import React, { useState } from "react";

type Props = {};

export default function SearchWlm({}: Props) {
  const [search, setSearch] = useState<string>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    window.location.href = `https://brandalready.com/search/q/${search}`;
  };

  return (
    <form method="POST" onSubmit={handleSubmit}>
      <input
        className="mt-1 py-4 w-full md:max-w-md bg-sign-in-input-bg  sm:text-sm gray-300 rounded-lg border-0"
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <input type="submit" value="Search" />
    </form>
  );
}
