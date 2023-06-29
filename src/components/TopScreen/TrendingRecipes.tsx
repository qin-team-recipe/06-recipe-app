
const recipes = [
  {
    id: 1,
    name: 'トマトとルッコラのマルゲリータピザトマトとルッコラのマルゲリータピザ',
    description: 'ウルトラハイパー超すごいレシピです',
    href: '#',
    imageUrl:
      'img/topScreen/chef/sample.jpg',
  },
  {
    id: 2,
    name: 'トマトとルッコラのマルゲリータピザトマトとルッコラのマルゲリータピザ',
    description: 'ウルトラハイパー超すごいレシピです',
    href: '#',
    imageUrl:
      'img/topScreen/chef/sample.jpg',
  },
  {
    id: 2,
    name: 'トマトとルッコラのマルゲリータピザトマトとルッコラのマルゲリータピザ',
    description: 'ウルトラハイパー超すごいレシピです',
    href: '#',
    imageUrl:
      'img/topScreen/chef/sample.jpg',
  },
  {
    id: 2,
    name: 'トマトとルッコラのマルゲリータピザトマトとルッコラのマルゲリータピザ',
    description: 'ウルトラハイパー超すごいレシピです',
    href: '#',
    imageUrl:
      'img/topScreen/chef/sample.jpg',
  },
  {
    id: 2,
    name: 'トマトとルッコラのマルゲリータピザトマトとルッコラのマルゲリータピザ',
    description: 'ウルトラハイパー超すごいレシピです',
    href: '#',
    imageUrl:
      'img/topScreen/chef/sample.jpg',
  },
]

const TrendingRecipes = () => {
  return (
    <div className="pt-5">
      <h2 className="font-bold text-lg pb-3 pl-3">話題のレシピ</h2>
      <div className="overflow-x-auto whitespace-nowrap w-full gap-8 no-scrollbar">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="ml-3 max-w-[160px] inline-block overflow-hidden">
            <a href={recipe.href}>
              <article className="relative isolate p-4 h-[160px] w-[160px]">
                <img src={recipe.imageUrl} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover rounded-2xl" />
              </article>
            </a>
            <span className="mt-1 line-clamp-2 text-left text-sm font-bold bg-opacity-50 whitespace-normal">{recipe.name}</span>
            <p className="line-clamp-1 text-gray-10 bg-white text-[10px] whitespace-normal">{recipe.description}</p>
          </div>
        ))}
      </div>
    </div>

  )
}

export default TrendingRecipes
