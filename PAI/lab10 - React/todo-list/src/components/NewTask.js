import React, { useState, useRef, useEffect } from 'react'

const NewTask = ({ add }) => {

    const [text, setText] = useState("")
    const [id, setId] = useState(4)
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    }, [])


    const onClick = (e) => {
        e.preventDefault()
        if (text !== "") {
            add({ id, title: text, completed: false })
            setText("")
            setId(id + 1)
        }
        inputRef.current.focus()

    }

    return (
        <div className='add-div'>
            <form className='add-task-form' onSubmit={onClick}>
                <input ref={inputRef} type="text" id="new-task" className="new-task" value={text} onChange={(e) => setText(e.target.value)} />

                <button variant='outlined' type="submit" className="add">Add</button>
            </form>
        </div>

    )
}

export default NewTask

