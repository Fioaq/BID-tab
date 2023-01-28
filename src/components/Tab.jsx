import React, {useState} from 'react';
import './Tab.module.css';

const Tab = props => {
    const {tab}= props;
    const [content, setContent] = useState("")

    const onClickHandler= (value) => setContent(value);
    return (
        <div>
            {tab.map((item, idx) => (
                <button key={idx} onClick={e => onClickHandler(item.content)}>{item.name}</button>))}
            <p>{content}</p>
        </div>
    );
}

export default Tab;