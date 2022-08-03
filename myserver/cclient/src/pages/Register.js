import "../styles/register.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useMutation } from "@apollo/client";
import { ADD_AUTHOR } from "../mutations/authorMutation";
import { GET_AUTHORS } from '../queries/authorQueries';


export default function Register () {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [addAuthor] = useMutation(ADD_AUTHOR, {
        variables: { name, username, password},
        update(cache, { data: { addAuthor } }) {
            const { authors } = cache.readQuery({ query: GET_AUTHORS });

            cache.writeQuery({
                query: GET_AUTHORS,
                data: { authors: [...authors, addAuthor] },
            });
        }
    });

    const onSubmit = (e) => {
        e.preventDefault();
        
        if (name === '' || username === '' || password === '') {
            return alert('Please fill in all fields!');
        }

        addAuthor(name, username, password);

        setName('');
        setUsername('');
        setPassword('');
    };

    return (
        <>
            <div class="register">
                <form onSubmit={onSubmit} class="registerForm">
                    <span class="registerTitle">Register</span>
                    <label class="registerLabel">Name</label>
                    <input id="name" value={name} onChange={(e) => setName(e.target.value)} class="registerInput" type="text" placeholder="Name"/>
                    <label class="registerLabel">Username</label>
                    <input id="username" value={username} onChange={(e) => setUsername(e.target.value)} class="registerInput" type="text" placeholder="Username"/>
                    <label class="registerLabel">Password</label>
                    <input id="password" value={password} onChange={(e) => setPassword(e.target.value)} class="registerInput" type="password" placeholder="Password"/>
                    <button class="registerButton"><Link class="link" to='/write'>Register</Link></button>
                </form>
                <button class="registerLoginButton"><Link class="link" to='/login'>Login</Link></button>
            </div>
        </>
    )
}