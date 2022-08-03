
export default function AuthorRow({ author }) {

    return (
        <>
            <tr>
                <td>{ author.name }</td>
                <td>{ author.username }</td>
            </tr>
        </>
    );
}
