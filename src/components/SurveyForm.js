import React, {useState} from 'react';



const SurveyForm = () => {
    const [data, setData] = useState({
        gender : '',
        animal : ''
    })
    const [result, setResult] =useState(null);
    
    function handleSubmit(e) {
        e.preventDefault();
        const g = e.target.gender.value
        const a = e.target.animal.value
        //event 속성을 직접적으로 비동기 함수에 적용할 때 발생하는 에러가 발생한다.
        setData(()=>({gender : g, animal : a}),
            console.log('저장됨')
        )

        fetch(
            'http://localhost:3002/api/input',
            {
                method: 'POST',
                body: JSON.stringify({gender : g, animal : a}),
                headers:{ 'Content-Type': 'application/json' }
            })
        .then(res => res.json())//리턴된 res중 res.json을 다시리턴
        .then(data => setResult(data.result)) //리턴시킨json을 인수로해서 setResult에 넣는것
    }

    return (
        <div>
           <form onSubmit={handleSubmit}>
                <label>남자<input type='radio' name='gender' value='남자'/></label>
                <label>여자<input type='radio' name='gender' value='여자'/></label><br/>
                <label>호랑이<input type='radio' name='animal' value='호랑이'/></label>
                <label>코끼리<input type='radio' name='animal' value='코끼리'/></label><br/>
                <button type='submit'>제출</button>
           </form>
            {data.gender!=='' ? "당신이 선택한 것은 : "+data.gender+', '+data.animal: null}<br/>
            {result===0 ? "정상 제출" : (result===null ? null: '제출실패')}
        </div>
    );
};
export default SurveyForm;