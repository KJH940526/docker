import React, {useEffect, useState} from 'react';

const Result = () => {

    const [count, setCount] = useState({})
    useEffect(() => {
        fetch('http://localhost:3002/api/result')
        .then(res => res.json())
        .then(data => setCount(data.count))}
        , []
      );

    return (
        <div>
           <h1>결과페이지</h1>
           <h2>남자, 호랑이 : {count.Male1}</h2>
           <h2>남자, 코끼리 : {count.Male2}</h2>
           <h2>여자, 호랑이 : {count.Female1}</h2>
           <h2>여자, 코끼리 : {count.Female2}</h2>
        </div>
    );
};

export default Result;