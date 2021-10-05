import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Details.css'

function Details({ id, visibility }) {

    const [todoId, setTodoId] = useState('');

    const getOneTodo = async (id) => {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)

        setTodoId(data)
        console.log(todoId, 'ideal todo')
    };

    useEffect(() => {
        getOneTodo(id)
    }, [id])

    return (


        <div className='rightSide'>
            {
                visibility &&

                <div className='detailsContainer'>
                    <h3>User Details</h3>
                    <table  >
                        <tr >
                            <th >ToDo ID</th>
                            <td>{todoId.id}</td>
                        </tr>
                        <tr>
                            <th>ToDo Title</th>
                            <td>title not specified in api</td>
                        </tr>
                        <tr>
                            <th>User ID</th>
                            <td>user id not specified</td>
                        </tr>
                        <tr>
                            <th>Name</th>
                            <td>{todoId.name}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>{todoId.email}</td>
                        </tr>
                    </table>
                </div>
            }


        </div>

    );
}

export default Details;