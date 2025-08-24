import SearchIcon from "../../assets/search.svg";

const Search = () => {
  return (
    <div class="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
      <form>
        <input
          class="outline-none border-none mr-2"
          type="search"
          name="search"
          placeholder="Search"
        />
      </form>
      <img class="inline h-4 cursor-pointer" src={SearchIcon} alt="Search" />
    </div>
  );
};

export default Search;
