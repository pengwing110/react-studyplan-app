# React + Vite

## React Study Plan App
**리액트**로 만든 *스터디 플랜 앱*입니다. filter/sort/map/find 메소드로 데이터를 정렬하고, 조건에 맞는 필터 기능을 포함하고 있습니다. 

아이템을 js에 저장하고 `fetch 구문`으로 목록처럼 보여지도록 했습니다.

### 설치된 라이브러리
- react-router-dom -> 페이지 연결
- react-swiper -> 스와이퍼 
- react-tabs -> 탭기능
- react-styled-componenets -> 스타일컴포넌트

#### 과정 추가 버튼 함수 
```
function addTodo() {
    if (inputValue.trim === '') return

    const newTodo = {
      id: Date.now(), 
      text: inputValue
    }

    setTodos([...todos, newTodo]);
    setInputValue('') //리셋해주는 작업
  }
  ```

  #### 배포
  > github의 정적인 배포 환경에서 리액트의 동적 환경이 충돌되는 문제로 배포과정의 불필요한 코드들을 추가하는 부분은 vercel로 배포하면서 해결을 했다.

  ---
  배포된 주소는 [studyplan App](https://react-studyplan-app.vercel.app/) 입니다.
  
  #### 썸네일
  ![studyplan App](./public/images/study-plan-thumnail.png)