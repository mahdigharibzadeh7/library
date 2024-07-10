function Search() {
  return (
    <div className="flex gap-x-2 mt-20 ">
      <input
        type="search"
        name="search"
        placeholder="Search title"
        className="rounded-lg px-2 py-2 w-72 bg-zinc-200 text-black focus:outline-none"
      />
      <button className="text-2xl bg-blue-700 rounded-lg p-1">🔍</button>
    </div>
  );
}

export default Search;
