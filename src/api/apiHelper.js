import { authenticateUser } from "./auth";
import makeHeaders from "./header";

const cohortName = "2211-ftb-et-web-ft";
const apiUrl = `https://strangers-things.herokuapp.com/api/${cohortName}`;

export async function registerUser(user) {
  return authenticateUser(user.name, user.password, "register");
}

export async function logIn(user) {
  return authenticateUser(user.name, user.password, "login");
}

export async function fetchAllPostsWithAuth(userToken) {
  try {
    const response = await fetch(`${apiUrl}/posts/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    });

    const result = await response.json();

    if (result.error) throw result.error;

    return result.data.posts;
  } catch (error) {
    console.error(
      "There was an issue fetching the posts (with authorization) from the API.",
      error
    );
  }
}

export async function fetchAllPosts() {
  try {
    const response = await fetch(`${apiUrl}/posts/`);
    const result = await response.json();

    if (result.error) throw result.error;

    return result.data.posts;
  } catch (error) {
    console.error("There was an issue fetching the posts from the API.", error);
  }
}

export async function fetchSinglePost(postId) {
  try {
    const response = await fetch(`${apiUrl}/posts/`);
    const result = await response.json();

    if (result.error) throw result.error;

    const posts = result.data.posts;

    const filteredResult = posts.filter((x) => x._id === postId);

    return filteredResult;
  } catch (error) {
    console.error("There was an issue fetching the post from the API.", error);
  }
}

export async function createPost(post) {
  try {
    const userToken = window.localStorage.getItem("strange-token");
    if (!userToken) {
      const error = new Error('User not logged in.');
      throw error;
    }
    const response = await fetch(`${apiUrl}/posts/`, {
      method: "POST",
      headers: makeHeaders(userToken),
      body: JSON.stringify({ post }),
    });

    const result = await response.json();

    if (result.error) throw result.error;

    return result.data.post;
  } catch (error) {
    console.error(`There was an issue creating the post.`, error);
  }
}

export async function deletePost(id, userToken) {
  try {
    const response = await fetch(`${apiUrl}/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    });

    const result = await response.json();

    if (result.error) throw result.error;

    return result;
  } catch (error) {
    console.error("There was an issue deleting the post from the API.", error);
  }
}

export async function fetchUserData(userToken) {
  try {
    const response = await fetch(`${apiUrl}/users/me/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    });

    const result = await response.json();

    if (result.error) throw result.error;

    return result.data;
  } catch (error) {
    console.error(
      "There was an issue fetching the user data from the API.",
      error
    );
  }
}

export async function createMessage(postId, userToken, message) {
  try {
    const response = await fetch(`${apiUrl}/posts/${postId}/messages/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
      body: JSON.stringify(message),
    });

    const result = await response.json();

    if (result.error) throw result.error;

    return result.data;
  } catch (error) {
    console.error(`There was an issue creating the message.`, error);
  }
}
