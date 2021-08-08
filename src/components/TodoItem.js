import React, { useEffect, useState } from 'react';
import "../style/style.css"
import Button from '../helpers/Button';
import { todoDeleteAction } from '../reducer/actions';
import { connect, useDispatch } from 'react-redux';

function TodoItem(props) {
    const [content, setContent] = useState(props.content)
    const [editable, setEditable] = useState(false)
    const [done, setDone] = useState(props.done)
    const [doneImg, setDoneImg] = useState("https://i.pinimg.com/originals/d0/17/47/d01747c4285afa4e7a6e8656c9cd60cb.png")
    const [doneStyle, setDoneStyle] = useState({ "textDecoration": "" })
    const dispatch = useDispatch();


    function editableChange() {
        editable ? setEditable(false) : setEditable(true);
    }

    function doneChange() {
        done ? setDone(false) : setDone(true);
    }


    useEffect(() => {
        done ? setDoneImg("https://uxwing.com/wp-content/themes/uxwing/download/48-checkmark-cross/done.png") : setDoneImg("https://i.pinimg.com/originals/d0/17/47/d01747c4285afa4e7a6e8656c9cd60cb.png");
        done ? setDoneStyle({ "textDecoration": "line-through" }) : setDoneStyle({ "textDecoration": "" });
    }, [done]);

    return (

        <div className="todo-wrap">
            <div className="todo-border">
                <img src={doneImg} height="14px" className="todo-image" onClick={() => doneChange()} />
                <input className="todo-input" placeholder={props.placeholder} type={props.type} disabled={!editable} style={doneStyle} value={content} onChange={(e) => setContent(e.target.value)} />
                <Button image="https://uxwing.com/wp-content/themes/uxwing/download/03-editing-user-action/edit-round.png" onClick={() => editableChange()} />
                <Button image="https://icon-library.com/images/img_275374_45338.png" onClick={() => dispatch(props.todoDeleteAction(props.id))} />
            </div>

        </div>
    );
}

const mapActionToProps = () => (
    { todoDeleteAction }
)

export default connect(mapActionToProps)(TodoItem);