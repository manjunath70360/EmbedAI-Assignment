import React, { useState } from 'react';
import Select from 'react-select';

import { MdKeyboardArrowDown } from "react-icons/md";
import { IoEarthOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { PiPencilSimpleLineLight } from "react-icons/pi";

import "./index.css"

const CreateBox = () =>{

    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const [input4, setInput4] = useState('');

    const options = [
        { value: 'public', label: <><IoEarthOutline /> Public</> },
        { value: 'private', label: <><CiLock /> Private</> }
      ];



    const handleChangeInput1 = (event) => {
        const inputValue = event.target.value;
        if (inputValue.length <= 20) {
          setInput1(inputValue);
        }
      };

      const handleChangeInput2 = (event) => {
        const inputValue = event.target.value;
        if (inputValue.length <= 50) {
          setInput2(inputValue);
        }
      };
      const handleChangeInput3 = (event) => {
        const inputValue = event.target.value;
        if (inputValue.length <= 500) {
          setInput3(inputValue);
        }
      };
      const handleChangeInput4 = (event) => {
        const inputValue = event.target.value;
        if (inputValue.length <= 2048) {
          setInput4(inputValue);
        }
      };


    return(
        <div className="createbox-container">
            <div className="img-editor">
            <div className='empty-img'/>
            <button type='button' className='pencil'><PiPencilSimpleLineLight /></button>
            </div>
            <div className="side-name-input">
                <h3 className='side-name-1'>Character name</h3>
                <input className="input1"  onChange={handleChangeInput1} type="text" value={input1} placeholder="e.g. Albert Einstein"/>
                <p className='count'>{input1.length}/20</p>
            </div>

            <div className="side-name-input">
                <h3 className='side-name'>Tagline</h3>
                <input className="input1"  onChange={handleChangeInput2} type="text" value={input2} placeholder="Add a short tagline of your Character"/>
                <p className='count'>{input2.length}/50</p>
            </div>

            <div className="side-name-input">
                <h3 className='side-name'>Character name</h3>
                <textarea cols={155} rows={12} className="input3"  onChange={handleChangeInput3} type="text" value={input3} placeholder="How would your Character describe themselves?"/>
                <p className='count'>{input3.length}/500</p>
            </div>

            <div className="side-name-input">
                <h3 className='side-name'>Character name</h3>
                <textarea cols={155} rows={12} className="input4"  onChange={handleChangeInput4} type="text" value={input4} placeholder="e.g. Hello, I am Albert. Ask me anything about my scientific contributions."/>
                <p className='count'>{input4.length}/2048</p>
            </div>
            <h3 className='side-name-options'>More options <MdKeyboardArrowDown size={15}/></h3>
            <h3 className='side-name-1'>Visibility</h3>
            <Select
                className="select"
                options={options}
                defaultValue={options[0]}
                />

        </div>
    )
}

export default CreateBox