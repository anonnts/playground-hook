import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(<TodoList />,
    document.getElementById('root'));

function TodoList() {
    const [text, setText] = useState('')
    const [list, addList] = useState([])

    const handleSetText = e => {
        setText(e.target.value)
    }

    const handleAddList = () => {
        if (text !== '') {
            addList([...list, { text: text }])
            setText('')
        }
    }

    return (
        <div className="container box">

            <SetList handleSetText={handleSetText} text={text} />
            <ShowList list={list} />
            <AddList handleAddList={handleAddList} />
        </div>
    )
}

function SetList({ handleSetText, text }) {
    const [placeholder, setPlaceHolder] = useState('Loading...')
    useEffect(() => {
        setTimeout(() => {
            setPlaceHolder('Please add todo-list in this field')
        }, 1000)
    })
    return (
        <input
            className="input"
            value={text}
            type="text"
            onChange={handleSetText}
            placeholder={placeholder}></input>
    )
}

function AddList({ handleAddList }) {
    return <button onClick={handleAddList} className="button">Add List</button>

}

function ShowList({ list }) {
    return (
        <ul className="todo-list">
            <ol type="1">
                {
                    list.map((object, index) => (
                        <li key={index}>
                            {object.text}
                        </li>
                    ))}
            </ol>
        </ul>
    )
}