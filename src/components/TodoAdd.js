import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import Button from "../helpers/Button";
import Input from "../helpers/Input";
import { todoAddAction } from "../reducer/actions"
import "../style/style.css"


function TodoAdd(props) {
    const [content, setContent] = useState("")
    const dispatch = useDispatch();

    return (
        <div className="todoAdd">
            <div className="todoAdd-button-input">
                <Input image="https://icon-library.com/images/to-do-icon/to-do-icon-18.jpg" placeholder="To do" onChange={(e) => setContent(e.target.value)} />
                <Button onClick={() => dispatch(props.todoAddAction(content))}>ADD</Button>
            </div>
        </div>
    );
}

const mapActionToProps = () => (
    { todoAddAction }
)

export default connect(mapActionToProps)(TodoAdd);
