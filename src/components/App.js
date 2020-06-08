import React, {useState, useEffect} from 'react';
import '../App.css';
import {Route, Link} from 'react-router-dom'
import Result from './Result'
import About from './About'
import Home from './Home'
import SurveyForm from './SurveyForm'

const App =(props)=>{

  const [title, setTitle] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3002/api')
    .then(res => res.json())
    .then(data => setTitle(data.title))}
    , []
  );

  return (
  <>
    {title ? <h1>{title}</h1> : <h1>Something is wrong</h1>}
    <hr/>
    <ul>
      <li><Link to='/' id='linkto'>홈으로</Link></li>
      <li><Link to='/About' id='linkto'>소개</Link></li>
      <li><Link to='/SurveyForm' id='linkto'>설문하기</Link></li>
      <li><Link to='/Result' id='linkto'>결과보기</Link></li>
    </ul>

    {/* 버튼에 onClick걸어주면 onClick에서 함수로 이동해서 db연결 가능하지 않나?? */}
    {/* 제출과 결과보기를 분리해주자 */}
    {/* 여기에 if문으로 조건걸면 Route를 어디로해줄지 결정 가능할거같은데 */}





    <hr/>
    <Route path={'/'} component={Home} exact/> 
    <Route path={'/Result'} component={Result}/> 
    <Route path={'/About'} component={About}/> 
    <Route path={'/SurveyForm'} component={SurveyForm}/> 
  </>
  );
};

export default App;
