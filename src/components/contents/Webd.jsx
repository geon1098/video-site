import React from 'react'

import { webdText } from '../../data/webd'
import { Link } from 'react-router-dom'


const Webd = () => {
  return (
    <section id='webd'>
            <h2>원하시는 회사에 가서 분양을 마구마구 하세요!!</h2>
            <div className='video__inner'>
                {webdText.map((video, key) => (
                    <div className="video" key={key}>
                        <div className="video__thumb play__icon">
                            <Link to={`/video/${video.videoId}`}>
                                <img src={video.img} alt={video.title} />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
  )
}

export default Webd