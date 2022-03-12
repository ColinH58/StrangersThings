export const getPosts = async () => {
    const url = 'https://strangers-things.herokuapp.com/api/2112-FTW-ET-WEB-PT/posts';
    const response = await fetch(url)
    const json = await response.json()
    return json;
};

export const createNewPost = async (newPost) => {
    const url = 'https://strangers-things.herokuapp.com/api/2112-FTW-ET-WEB-PT/posts';
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
    });

    const json = await response.json();
    return json;
};

export const updatePost = async (postToUpdate) => {
    const url = 'https://strangers-things.herokuapp.com/api/2112-FTW-ET-WEB-PT/posts';
    const response = await fetch(url, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postToUpdate)
    });

    const json = await response.json();
    return json;
};

export const deletePost = async (postId) => {
    const url = `https://strangers-things.herokuapp.com/api/2112-FTW-ET-WEB-PT/posts/${postId}`;
    const response = await fetch(url, {
        method: "DELETE"
    });

    const json = await response.json();
    return json;
};