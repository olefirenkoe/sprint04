import React from 'react';

class Input extends React.Component {
    render(){
        return(
                <>
                    <input type='text' placeholder='add new item' id='input'/>
                    <button onClick={add}>+</button>
                </>
            )
    } 
}

export default Input;

function add(){
    let value = document.getElementById('input').value;
    if (value === '' ||value === ' '){
        return;
    }else{
        let toDo = document.createElement('div');
        toDo.innerHTML = `<label for="${value}">${value}</label><input type="checkbox" id="${value}"/>`;
        document.getElementById('list').appendChild(toDo);
        document.getElementById('input').value='';
    }
    console.log(document.getElementById('input').value);
}