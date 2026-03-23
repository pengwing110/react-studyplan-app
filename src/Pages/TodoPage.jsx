import React from 'react'
import { useState } from 'react'
import TodoItem from '../components/TodoItem'

export default function TodoPage() {
  /* 값을 저장하는 변수, 값을 업데이트해주는 함수 */
  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState([
    { id: 1, text: '리액트 실습' },
    { id: 2, text: '컴포넌트 실습' }
  ])

  //할 일 추가함수
  function addTodo() {
    //user가 아무것도 입력하지 않은 경우 return 구문으로 종료
    //trim 메소드는 앞 뒤 공백 제거
    if (inputValue.trim === '') return

    //객체를 하나 만듦
    const newTodo = {
      id: Date.now(), //현재 시간(ms)을 숫자로 반환
      text: inputValue
    }

    /* 리액트는 기존 배열을 직접 수정하지 않고 새 배열을 만들어서 수정하므로 이때 spread구문을 쓴다. */
    setTodos([...todos, newTodo]);
    setInputValue('') //리셋해주는 작업
  }

  //삭제 함수
  function removeTodo(id) {
    const newTodos = todos.filter(todo => todo.id !== id) //내가 선택한게 2번이라면 2번이 아닌애들만 newTodos에 저장. 필터는 원하는 조건에 해당하는 애들을 새로운 배열로 만들어줌. 뿌리는거 아님!! 만들어주기만!!
    setTodos(newTodos)
  }
  return (
    <section className="sec-todopage">
      <div className="inner">
        <h2>할 일 목록</h2>
        <div className="input-row">
          <input type="text" placeholder='할 일을 입력하세요' value={inputValue} onChange={(e) => setInputValue(e.target.value)} /> {/* e.target.value현재 커서가 들어가있는 입력창 이 setInputValue에 의해서 업데이트 된다*/}
          <button onClick={addTodo}>추가</button>
        </div>
        <ul className="todo-list">
          {
            todos.map((todo) => (
              /* 
              todo = {id:1, text='리액트 실습'}
               todo = {id:2, text='컴포넌트 실습'}
              */
              <TodoItem key={todo.id} todo={todo} onRemove={removeTodo} />
            ))
          }
        </ul>
      </div>
    </section>
  )
}
