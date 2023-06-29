const SearchForm = () => {
  return (
    <div className="flex justify-center border-b border-gray-5">
      <div className="relative w-full px-3 py-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-5 top-5 text-gray-400 icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
          <path d="M21 21l-6 -6" />
        </svg>
        <input
          type="text"
          className="w-full h-10 px-3 pl-10 text-base placeholder-gray-10 rounded-xl bg-gray-3 focus:shadow-outline"
          placeholder="シェフやレシピを検索"
        />
      </div>
    </div>
  )
}

export default SearchForm
