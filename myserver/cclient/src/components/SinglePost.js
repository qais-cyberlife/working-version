import "../styles/singlePost.css";
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_POST } from '../queries/postQueries';
import AuthorInfo from "./AuthorInfo";


export default function SinglePost() {
    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_POST, { variables: { id } });

    if (error) return <p>Something went wrong</p>;

    return (
        <>
            {!loading && !error && (
                <div class="singlePost">
                    <div class="singlePostWrapper">
                        <img class="singlePostImg" src="https://www.candorblog.com/wp-content/uploads/2017/05/travel-022.jpg" alt="Blogpost Image"></img>
                        <h1 class="singlePostTitle">
                            {data.post.title}
                            <div class="singlePostIcons">
                                <i id="editIcon" class="far fa-edit"></i>
                                <i id="deleteIcon" class="far fa-trash-alt"></i>
                            </div>
                        </h1>
                        <div class="singlePostInfo">
                            <span class="singlePostAuthor">Author: <AuthorInfo author={data.post.author}/></span>
                            <span class="singlePostDate">{data.post.publishedDate}</span>
                        </div>
                        <p class="singlePostDesc">
                        {data.post.description}
                        </p>
                    </div>
                </div>
            )}
        </>
    )
}