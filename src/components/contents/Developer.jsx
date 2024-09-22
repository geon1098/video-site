//유튜브 구독 채널 모음
import React from 'react'

import { developerText } from '../../data/developer';
import { Link } from 'react-router-dom';

const Developer = () => {
  return (
    <section id='developer'>
      <div className="developer__inner overflow">
        {developerText.map((developer, key) => (
          <div className="developer" key={key}>
              <div className="developer__img play__icon">
                <Link to={`/channel/${developer.channelId}`}>
                  <img src={developer.img} alt={developer.name} />
                </Link>
              </div>
              <div className="developer__info">
                <Link to={`/channel/${developer.channelId}`}>
                  {developer.name}
                </Link>
              </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Developer