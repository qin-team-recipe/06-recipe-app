const chefs = [
  {
    id: 1,
    name: '山田シェフ',
    href: '#',
    imageUrl:
      'img/topScreen/chef/sample.jpg',
  },
  {
    id: 2,
    name: '山田シェフ',
    href: '#',
    imageUrl:
      'img/topScreen/chef/sample.jpg',
  },
  {
    id: 2,
    name: '山田シェフ',
    href: '#',
    imageUrl:
      'img/topScreen/chef/sample.jpg',
  },
  {
    id: 2,
    name: '山田シェフ',
    href: '#',
    imageUrl:
      'img/topScreen/chef/sample.jpg',
  },
  {
    id: 2,
    name: '山田シェフ',
    href: '#',
    imageUrl:
      'img/topScreen/chef/sample.jpg',
  },
]

const FeaturedChefs = () => {
  return (
    <div className="pt-5 pl-5">
      <h2 className="font-bold text-xl pb-3">注目のシェフ</h2>
      <div className="overflow-x-auto no-scrollbar whitespace-nowrap w-full gap-8">
        {chefs.map((chef) => (
          <a href={chef.href}>
            <article
              key={chef.id}
              className="relative isolate p-4 h-[280px] w-[200px] inline-flex mr-4 rounded-2xl overflow-hidden"
            >
              <img src={chef.imageUrl} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-700 via-gray-300/10" />
              <h3 className="text-lg font-semibold leading-6 text-white absolute bottom-4">{chef.name}</h3>
            </article>
          </a>
        ))}
      </div>
    </div>
  )
}

export default FeaturedChefs
