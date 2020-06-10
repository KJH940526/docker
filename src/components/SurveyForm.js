import React, {useState} from 'react';
import '../../src/SurveyForm.css';
let g = null, a = null;

const SurveyForm = () => {
    const [data, setData] = useState({ gender : '', animal : '' })
    const [result, setResult] =useState(null);
    
    function handleSubmit(e) {
        e.preventDefault();
        g = e.target.gender.value
        a = e.target.animal.value
        //event 속성을 직접적으로 비동기 함수에 적용할 때 발생하는 에러가 발생한다.
        setData(()=>({gender : g, animal : a}))

        fetch('http://3.21.105.37:3002/api/input',
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
               <h2>
                   <label>남자<input type='radio' name='gender' value='남자'/></label>
                    <label>여자<input type='radio' name='gender' value='여자'/></label>
                </h2>
                <h2>
                    <label>호랑이<input type='radio' name='animal' value='호랑이'/></label>
                    <label>코끼리<input type='radio' name='animal' value='코끼리'/></label>
                </h2>
                {result ===null ? <p><button type='submit'>제출</button></p> : null}     
           </form>
           <h3>{data.gender!=='' ? "당신이 선택한 것은 : "+data.gender+', '+data.animal: null}</h3>
           <h3>{result===0 ? "제출완료" : (result===null ? null: '제출실패' )}</h3>
        </div>
    );
};
export default SurveyForm;