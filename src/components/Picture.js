import React from 'react'

const Picture = ({data}) => {
  return (
    <div className='picture'>
        <p>{data.photograher}</p>
        <div className='imgContainer'>

            <img src={data.src.large} alt="" />
        </div>
        <p>download img here <a target="_blank"  href={data.src.large}>click me</a>

        </p>
    </div>
  )
}

export default Picture