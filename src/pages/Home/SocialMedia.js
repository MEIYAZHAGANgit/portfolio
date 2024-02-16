import React from 'react'

function SocialMedia() {
  return (
    <div className=" fixed left-0 bottom-0 px-10 sm:static">
   <div className="flex flex-col items-center">
   <div className="flex flex-col gap-4 sm:flex-row">
   <a href=" "><i class="ri-facebook-box-fill text-gray-400 "></i></a>
   <i class="ri-mail-line text-gray-400 text-xl"></i>
   <a href="https://www.instagram.com/twinheart__mei?igsh=MWY5OGdjbTA2cDZzbQ=="><i class="ri-instagram-line text-gray-400 text-xl"></i></a>
  <a href="https://www.linkedin.com/in/meiyazhagan-p-205277288/ "><i class="ri-linkedin-box-fill text-gray-400 text-xl"></i></a> 
  <a href="https://github.com/MEIYAZHAGANgit"><i class="ri-github-line text-gray-400 text-xl"></i></a>

   </div>
   <div className="w-[1px] h-52 bg-[#125f63]  sm:hidden">

   </div>
   </div>
    </div>
  )
}

export default SocialMedia;