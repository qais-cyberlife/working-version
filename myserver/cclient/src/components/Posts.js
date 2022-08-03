import "../styles/posts.css"
import PostPreview from "./PostPreview"
import { useQuery } from "@apollo/client"
import { GET_POSTS } from "../queries/postQueries"


export default function Posts(){
    const { loading, error, data } = useQuery (GET_POSTS)

    if (error) return <p>Something went wrong</p>

    return (
        <>
          {!loading && !error && (
                <div class="posts">
                    {data.posts.map(post => (
                        <PostPreview key={post.title} post={post} />
                    ))}
                </div>
            )}
        </>
    )
};

