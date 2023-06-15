import { FiSearch } from "react-icons/fi"

const SearchForm = () => {
  return (
    <div className="flex justify-center border-b">
      <div className="relative w-full p-4">
        <FiSearch className="absolute left-7 top-7 text-gray-400" />
        <input
          type="text"
          className="w-full h-10 px-3 pl-10 text-base placeholder-gray-400 border rounded-xl bg-gray-100 focus:shadow-outline"
          placeholder="シェフやレシピを検索"
        />
      </div>
    </div>
  )
}

export default SearchForm
