import { useState } from "react";
function Search() {
  const [searchValue, setSearchValue] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form className="flex gap-x-2 mt-20" onSubmit={submitHandler}>
      <input
        className="rounded-lg px-2 py-2 w-72 bg-zinc-200 text-black focus:outline-none"
        type="search"
        name="search"
        placeholder="Search title"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <button className="text-2xl bg-blue-700 rounded-lg p-1" type="submit">
        🔍
      </button>
    </form>
  );
}

export default Search;
