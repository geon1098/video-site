import React from 'react'
import { CiAlarmOn } from "react-icons/ci";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

const Header = () => {
  return (
    <header id='header' role='banner'>
     <h1 className='header__logo'>
        <a href='/'>
            <em aria-hidden='true'></em>
            <span>webs<br />utube</span>
        </a>
     </h1>
     <nav className='header__menu'>
        <ul className='menu'>
            <li>
                <a href='/'><CiAlarmOn />홈</a>
            </li>
            <li>
                <a href='/today'><CiAlarmOn />추천영상</a>
            </li>
            <li>
                <a href='/developer'><CiAlarmOn />개발자</a>
            </li>
            <li>
                <a href='/webd'><CiAlarmOn />웹디</a>
            </li>
            <li>
                <a href='/website'><CiAlarmOn />웹표준 사이트</a>
            </li>
            <li>
                <a href='/port'><CiAlarmOn />웹표준 사이트</a>
            </li>
            <li>
                <a href='/youtube'><CiAlarmOn /> 유튜브 클론 사이트</a>
            </li>
        </ul>
        <ul className='keyword'>
        <li>
            <a href='/search/webstoryboy'>webstoryboy</a>
        </li>
        <li>
            <a href='/search/html'>HTML</a>
        </li>
        <li>
            <a href='/search/css'>CSS</a>
        </li>
        <li>
            <a href='/search/javascript'>JavaScript</a>
        </li>
        <li>
            <a href='/search/react.js'>React.js</a>
        </li>
        <li>
            <a href='/search/vue.js'>Vue.js</a>
        </li>
        <li>
            <a href='/search/next.js'>Next.js</a>
        </li>
        <li>
            <a href='/search/node.js'>Node.js</a>
        </li>
        <li>
            <a href='/search/sql'>SQL</a>
        </li>
        <li>
            <a href='/search/React Portfolio'>portfolio</a>
        </li>
        <li>
            <a href='/search/NewJeans'>music</a>
        </li>
        </ul>
     </nav>
     <div className='header__sns'>
        <ul>
        <li>
            <a href='https://codepen.io/webstoryboy' rel='noopener noreferrer'>
                <AiFillGithub />
            </a>
        </li>
        <li>
            <a href='https://codepen.io/webstoryboy' rel='noopener noreferrer'>
                <AiOutlineCodepen />
            </a>
        </li>
        <li>
            <a href='https://codepen.io/webstoryboy' rel='noopener noreferrer'>
                <AiFillYoutube />
            </a>
        </li>
        </ul>
     </div>
    </header>
  )
}

export default Header