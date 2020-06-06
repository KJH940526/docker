import React from 'react';
const data = {
    veloport : {
      name : '김민준',
      description : '리액트를 좋아하는 개발자'
    },
    gildong : {
      name : '홍길동',
      description : '고전 소설 홍길동의 주인공'
    }
  };
  
  const Profile = ({match})=>{
    
    const {username} = match.params; // username이라는 이름으로 객체의 key를 비구조화 할당했다. params가 하나라서 가능하다.
    const profile = data[username];
    // 객체를 profile에 넣었으므로
     
    

    if(!profile){ return <div>존재하지 않는 사용자입니다</div> }

    return (
      <div>
        <h3>
          {username}({profile.name})
        </h3>
        <p>{profile.description}</p>
      </div>
    );
  }

  export default Profile;