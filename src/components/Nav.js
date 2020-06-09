import React from "react";
import Result from './Result'
import About from './About'
import Home from './Home'
import SurveyForm from './SurveyForm'
import {Route, Link} from 'react-router-dom'
import '../Nav.css'
const Nav = () => {
  const handleClick = (e)=>{
    e.preventDefault();
    menu.current.classList.toggle('active')
    icons.current.classList.toggle('active')
  }
  const menu = React.createRef()
  const icons =React.createRef()

  return (
    <>
    {/* <i className="fab fa-codepen"> <i class="far fa-circle"></i> <i class="fas fa-circle-notch"></i>*/}
      <nav className="navbar">
        <div className="navbar__logo">
        <Link to='/'><i className="fab fa-codepen"></i> JYK </Link>
        </div>
{/* 아래 애들을 다 Link 태그로 바꿔주고 css다시 적용해야한다. */}
        <ul className="navbar__menu" ref={menu}>
          <li> <Link to='/'>Home</Link> </li>
          <li> <Link to='/About'>About</Link> </li>
          <li> <Link to='/SurveyForm'>Survey</Link> </li>
          <li> <Link to='/Result'>Result</Link> </li>
        </ul>
        <ul className="navbar__icons" ref={icons}>
          <li>
            <a href="https://jyk-record.tistory.com/" target="_blank" rel="noopener noreferrer"><i className="fas fa-bold"></i></a>
          </li>
          <li>
            <a href="https://twitter.com/explore" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          </li>
          <li>
            <a href="https://www.instagram.com/?hl=ko" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>     
          </li>
        </ul>
        <a href="/#" className="navbar__toggleBtn" onClick={handleClick}  ><i className="fas fa-bars"></i></a>
      </nav>
      <div className="body">
        <div className="body__route">
          <Route path={'/'} component={Home} exact/> 
          <Route path={'/Result'} component={Result}/> 
          <Route path={'/About'} component={About}/> 
          <Route path={'/SurveyForm'}  component={SurveyForm}/> 
        </div>
      </div>
      
      
    </>
  );
};

export default Nav;