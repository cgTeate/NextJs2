import React from 'react'
import { EllipsisHorizontalIcon} from "@heroicons/react/24/solid"
import { HeartIcon, ChatBubbleOvalLeftEllipsisIcon, BookmarkIcon} from "@heroicons/react/24/outline"

export default function Post({img,userImg,caption,username,id}) {
  return (
    <div className="bg-white my-7 border rounded-md">   
      {/* Post Header */}

      <div className="flex items-center p-5">
          <img className="h-12 rounded-full object-cover border p-1 mr-3" src={userImg} alt={username} />
          <p className="font-bold flex-1">{username}</p>
          <EllipsisHorizontalIcon className="h-5"/>
      </div>
      {/* Post Image */}

      <img className="object-cover w-full" src={img} alt="" />     

      {/* Post Buttons */}
      <div className="">
          <div className="">
              <HeartIcon className="btn"/>
              <ChatBubbleOvalLeftEllipsisIcon className="btn"/>
          </div>
          <BookmarkIcon className="btn"/>
      </div>

    </div>
  )
}
