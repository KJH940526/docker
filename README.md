## 리액트 설문 완성파일입니다.
현재 setState부분 비동기함수문제로 데이터를 편법으로 보내는 문제가 있습니다.
(fetch할때 변수로 저장한 g를 이용함)
그것만 제외하면 일단 실행에 문제는 없으며, 설문결과로 바로 이동하지 않는것만 제외하면 완성되었습니다.
설문결과로 바로 이동시키거나, css구현만 하면 마무리 될 것 같습니다.

## AWS 업로드시 유의사항
1) localhost를 aws 아이피에 맞게 수정해주어야 합니다 (fetch함수부분)
2) setProxy는 작동하지 않습니다
3) 서버에 올리고 실행시 오류가 납니다. (node_modules를 삭제하고 npm install로 재설치합니다)
4) pm2로 백그라운드로 실행해야 
