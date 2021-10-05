import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './List.css';

function List({ handleTodo }) {

    const [todos, setTodos] = useState([]);
    const [search, setSearch] = useState('');
    const [backedTodos, setBackedTodos] = useState([]);

    const getTodos = async () => {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos')
        setTodos(data)
        setBackedTodos(data)
    }



    useEffect(() => {
        getTodos();

    }, [])

    const handleSearch = (e) => {
        setSearch(e);
        const filtered = todos.filter((item) => {

            return search === item.title;
        })

        if (filtered.length > 0) {
            setTodos(filtered)
        } else {
            setTodos(backedTodos)
        }

        // console.log(filtered.length)

    }
    // console.log(todos)

    const handleDesending = () => {
        const desended = [];
        todos.map((item) => desended.unshift(item));
        // console.log(desended, 'sorted')
        setTodos(desended);
    }

    return (
        <div>
            <div className='searchBox'>
                <h3 className='header'>Todos</h3>
                <input type="text" placeholder="Search..." value={search} onChange={(e) => handleSearch(e.target.value)} />
                <button onClick={handleDesending}>Sort Desending</button>
            </div>
            <table >
                <tr className="tableRow">
                    <th>ToDo ID</th>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                {
                    todos &&
                    todos.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.completed.toString()}</td>
                                <td>
                                    <button onClick={() => handleTodo(item.id)}>
                                        View user
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }

            </table>
        </div>
    );
}

export default List;