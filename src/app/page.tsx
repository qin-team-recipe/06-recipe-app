import Sidebar from '@/components/Sidebar/Sidebar'
import TopScreen from '@/components/TopScreen/TopScreen'

const Home = () => {
  return (
    <div className="flex justify-center h-screen max-w-4xl m-auto">
      <Sidebar />
      <TopScreen />
    </div>
  )
}

export default Home
