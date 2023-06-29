import React from 'react'
import Chef from './Chef'
import FeaturedChefs from './FeaturedChefs'
import SearchForm from './SearchForm'
import TrendingRecipes from './TrendingRecipes'


const TopScreen: React.FC = () => {
  return (
    <>
      <SearchForm />
      <FeaturedChefs />
      <TrendingRecipes />
      <Chef />
    </>
  )
}

export default TopScreen
