import React, { useState } from 'react'
import ClassCard from '../components/ClassCard'

const classes = [
  { id: 1, title: 'HTML', category: "퍼블리싱" },
  { id: 2, title: 'CSS', category: "퍼블리싱" },
  { id: 3, title: 'JS', category: "프론트" },
  { id: 4, title: 'REACT', category: "프론트" },
  { id: 5, title: 'PHOTOSHOP', category: "디자인" },
  { id: 6, title: 'ILLUSTRATOR', category: "디자인" },
  { id: 7, title: 'VUE', category: "프론트" },
  { id: 8, title: 'NODE', category: "프론트" }
]
export default function ClassPage() {
  const [category, setCategory] = useState('전체')
  const [selectedTitle, setSelectedTitle] = useState('')

  /* 필터링 */
  const filtered =
    category === "전체" //1.조건: 선택된 카테고리가 '전체' 인가
      ? classes //2.true이면 원본 데이터 전체를 보여줘
      : classes.filter(item => item.category === category); //3. fasle(전체가 아니면)이면 item의 카테고리만 따로 빼서 filtered 변수에 저장
  return (
    <section className="sec-classpage">
      <div className="inner">
        <h2>강의 목록</h2>
        <p className="sub-title">카테고리 버튼을 클릭해서 듣고 싶은 강의를 찾아보세요.</p>
        <div className="tab-menu">
          <button onClick={() => setCategory('전체')}>전체</button>
          <button onClick={() => setCategory('퍼블리싱')}>퍼블리싱</button>
          <button onClick={() => setCategory('프론트')}>프론트</button>
          <button onClick={() => setCategory('디자인')}>디자인</button>
        </div>

        <p className="selected-text">
          <strong>선택한 카테고리 : {category}</strong>
        </p>
        <ul className="card-list">
          {
            filtered.map(item => (
              <li key={item.id}>
                <ClassCard item={item} onSelected={setSelectedTitle}/>
              </li>
            ))}
        </ul>

        <div className="section-box">
          <h3>선택한 강의</h3>
          <p>
            {selectedTitle ? `${selectedTitle} 강의를 선택했습니다.` : '아직 선택한 강의가 없습니다.'}
          </p>
        </div>
      </div>
    </section>
  )
}
