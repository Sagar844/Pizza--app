import React from 'react'

const Download = () => {
    const Link = "https://cdn.discordapp.com/attachments/1001168177952211054/1021250820454482040/55555.PNG"
  return (
    <div>
      <a className='bg-red-600 text-white px-8 rounded-md'target="_blank" href={Link} download>DOWNLOAD</a>
    </div>
  )
}

export default Download
