import React, { useState } from "react";

type Props = {};

export default function index({}: Props) {
  const [search, setSearch] = useState<string>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    window.location.href = `https://brandalready.com/search/q/${search}`;
  };

  return (
    <form method="POST" onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <input type="submit" value="Search" />
    </form>
  );
}
