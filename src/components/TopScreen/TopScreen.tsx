import React from 'react'
import { FiSearch } from 'react-icons/fi' // FontAwesomeの検索アイコンをインポートします


const TopScreen: React.FC = () => {
  // ここにTopScreenのコードを書く
  return (
    <div className="w-3/4 sm:border-r sm:border-l max-w-[600px]">
      {/* 検索フォーム */}
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
      {/* 注目のシェフ */}
      {/* 話題のレシピ */}
      {/* シェフ */}
    </div>
  )
}

export default TopScreen
