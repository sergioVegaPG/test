const fetchPosts = async () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json());
}

export default async function Page() {
    const posts: any[] = await fetchPosts();
    return (
        <section>
            {posts.slice(0, 5).map(post =>
                <article key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </article>
            )}
        </section>
    )
}