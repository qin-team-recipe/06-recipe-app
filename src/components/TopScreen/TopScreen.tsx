import React from 'react'
import Chef from './Chef'
import FeaturedChefs from './FeaturedChefs'
import SearchForm from './SearchForm'
import TrendingRecipes from './TrendingRecipes'


const TopScreen: React.FC = () => {
  return (
    <div className="w-3/4 sm:border-r sm:border-l max-w-[600px]">
      {/* 検索フォーム */}
      < SearchForm />
      <div className=''>
        {/* 注目のシェフ */}
        <FeaturedChefs />
        {/* 話題のレシピ */}
        <TrendingRecipes />
        {/* シェフ */}
        <Chef />
      </div>
    </div>
  )
}

export default TopScreen
