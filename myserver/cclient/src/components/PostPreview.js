import "../styles/post.css"
import { Link } from "react-router-dom";

export default function Post({ post }) {
    return (
        <>
            <div class="post">
                <Link class="link" to='/posts/posts:id'>
                    <img class="postImg" src="https://www.candorblog.com/wp-content/uploads/2017/05/travel-022.jpg" alt="Blogpost Image"></img>
                    <div class="postInfo">
                        <span class="postTitle">{post.title}</span>
                        <hr/>
                        <span class="postDate">{post.publishedDate}</span>
                        <p class="postDesc">{post.description}</p>
                    </div>
                </Link>
            </div>
        </>
    );
}
