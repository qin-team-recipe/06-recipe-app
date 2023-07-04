import Link from "next/link"

const chefs = [
  {
    id: 1,
    name: '山田シェフ',
    imageUrl:
      'img/topScreen/chef/sample.jpg',
  },
  {
    id: 2,
    name: '山田シェフ',
    imageUrl:
      'img/topScreen/chef/sample.jpg',
  },
  {
    id: 3,
    name: '山田シェフ',
    imageUrl:
      'img/topScreen/chef/sample.jpg',
  },
  {
    id: 4,
    name: '山田シェフ',
    imageUrl:
      'img/topScreen/chef/sample.jpg',
  },
  {
    id: 5,
    name: '山田シェフ',
    imageUrl:
      'img/topScreen/chef/sample.jpg',
  },
]

const FeaturedChefs = () => {
  return (
    <div className="pt-5">
      <h2 className="font-bold text-lg pb-3 pl-3">注目のシェフ</h2>
      <div className="overflow-x-auto whitespace-nowrap w-full gap-8 no-scrollbar">
        {chefs.map((chef) => (
          <Link key={chef.id} href={`/chef/${chef.id}`}>
            <li className="relative isolate ml-3 p-4 h-[210px] w-[150px] inline-flex rounded-2xl overflow-hidden">
              <img src={chef.imageUrl} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-12 via-gray-3/10" />
              <h3 className="text-md font-semibold leading-6 text-[#fff] absolute bottom-3">{chef.name}</h3>
            </li>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default FeaturedChefs
