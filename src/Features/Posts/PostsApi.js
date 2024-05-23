export const getPostsData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')

    return response.json();
}
