

export default function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-14">
        <img className="h-16 rounded-full border p-[2px]" src="https://img.theweek.in/content/dam/week/news/entertainment/images/2019/4/25/Johnny-Depp-dating.jpg" alt="user-image"></img>
        <div className="flex-1 ml-4">
            <h2 className="font-bold">codewithcalvin</h2>
            <h3 className="text-sm text-gray-400">Welcome to instagram</h3>
        </div>
        <button className="font-semibold text-blue-400 text-sm">Sign out</button>
    </div>
  )
}
