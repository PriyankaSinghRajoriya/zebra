import React, { useState } from 'react'


export default function Todo() {
    const [data, setData] = useState('');
    const [allData, setAllData] = useState([]);
    const [toggleButton, setToggleButton] = useState(true);
    const [editData, setEditData] = useState('')

    const handleClick = () => {
        if (!data) {
            alert("Pls Fill the Data...")
        } else if (data && !toggleButton) {
            
            setAllData(
                allData.map((elem) => {
                    if (elem.id === editData) {
                        return { ...elem, name: data }
                    }
                    return elem;
                })
            )
            setToggleButton(true);
            setData('');
            setEditData(null)
        }
        else {
            const resolveData = { id: new Date().getTime().toString(), name: data }
            setAllData([...allData, resolveData]);
            setData('');
        }
    }

    // -------------Delete perform here----------


    const handleDelete = (id) => {
        // console.log(id)
        const updateData = allData.filter((elem) => {
            return (
                elem.id !== id
            )
        })
        setAllData(updateData);
    }

    // -------------edit perform here----------


    const handleEdit = (id) => {
        console.log(id)
        const newDataEdit = allData.find((elem) => {
            return (
                elem.id === id
            )
        })
        // setToggleButton(false);
        // setData(newDataEdit.name);
        // setEditData(id)
    }
    return (
        <>
            <div className="main">
                <h1>Todo app</h1>
                <div className="container">

                    <input type="'text'" value={data} onChange={(e) => setData(e.target.value)} />

                    {
                        toggleButton ? <button onClick={handleClick}> Add User </button> :
                            <button onClick={handleClick}> Edit User </button>
                    }
                    {/* <button onClick={handleClick}> Add User </button> */}
                </div>

                <div className="displayData">
                    {
                        allData.map((elem) => {
                            return (
                                <div className="getData" key={elem.id}>
                                    <h3>{elem.name}</h3>
                                    <button onClick={() => handleEdit(elem.id)}>Edit</button>
                                    <button onClick={() => handleDelete(elem.id)}>Delete</button>


                                </div>)
                        })
                    }

                </div>
            </div>
        </>
    )
}
