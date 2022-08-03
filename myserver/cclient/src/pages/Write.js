import "../styles/write.css" 
import { useState } from 'react';
import { useMutation, useQuery } from "@apollo/client";
import { ADD_POST } from "../mutations/postMutation";
import { GET_POSTS } from '../queries/postQueries';



export default function Write(){
    const [title, setTitle] = useState('');
    const [publishedDate, setPublishedDate] = useState('');
    const [description, setDescription] = useState('');

    const [addPost] = useMutation(ADD_POST, {
        variables: { title, publishedDate, description },
        update(cache, { data: { addPost } }) {
            const { posts } = cache.readQuery({ query: GET_POSTS });

            cache.writeQuery({
                query: GET_POSTS,
                data: { posts: [...posts, addPost] },
            });
        }
    });

    const onSubmit = (e) => {
        e.preventDefault();
        
        if (title === '' || publishedDate === '' || description === '') {
            return alert('Please fill in all fields!');
        }

        addPost(title, publishedDate, description);

        setTitle('');
        setPublishedDate('');
        setDescription('');
    };


    return (
        <>
            <div class="write">
            <img class="postImg" src="https://www.candorblog.com/wp-content/uploads/2017/05/travel-022.jpg" alt="Blogpost Image"></img>
                <form onSubmit={onSubmit} class="writeForm">
                    <div class="writeFormGroup">
                        <label htmlFor="fileInput">
                            <i class="writeIcon fas fa-plus"></i>
                        </label>
                        <input type="file" id="fileInput"></input>
                        <input id="title" value={title} onChange={(e) => setTitle(e.target.value)} class="writeInput" type="text" placeholder="Title" autoFocus={true}></input>
                    </div>
                    <div class="writeFormGroup">
                        <input id="publishedDate" value={publishedDate} onChange={(e) => setPublishedDate(e.target.value)} type="date"></input>
                        <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} class="writeInput writeText" placeholder="Share your journey..." type="text" ></textarea>
                    </div>
                    <button class="writeButton">Publish</button>
                </form>
            </div>
        </>
    )
}