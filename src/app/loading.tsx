// ローディング
const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="p-6">ローディング中...</div>
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-indigo-300 border-t-transparent" />
    </div>
  )
}

export default Loading
