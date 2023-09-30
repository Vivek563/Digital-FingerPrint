import React from 'react'

function NavBar() {
  return (
    <>
    
<nav style={{backgroundColor:"#121212"}} class="bg-white border-gray-200">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/" class="flex items-center">
        <img src="https://img.icons8.com/3d-fluency/94/fingerprint.png" class="h-8 mr-3" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Digital FingerPrint</span>
    </a>
  
    
        <button className='flex items-center space-x-6   text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>
            Github<img width="24" height="24" src="https://img.icons8.com/3d-fluency/94/link.png" alt="link"/>
        </button>
      </div>
</nav>

    </>
  )
}

export default NavBar
