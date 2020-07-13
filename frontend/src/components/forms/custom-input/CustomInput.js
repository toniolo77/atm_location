import React from 'react';

const CustomInput = (props) => {

    return (
        <div className="form-group">
            <label htmlFor={props.name}>{props.label}</label>
            <input name={props.name} value={props.valor} type={props.type} onChange={props.changeForm} className="form-control" id={props.name} placeholder={props.label} required/>
        </div>
    );

}

export default CustomInput;