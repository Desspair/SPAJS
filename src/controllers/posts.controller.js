import viewPosts from "../views/posts.html";

const getPost = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await response.json();
};

export default async () => {
  const viewElement = document.createElement("div");
  viewElement.innerHTML = viewPosts;
  viewElement.classList.add("container", "mt-4");

  let viewPostsApi = viewElement.querySelector("#posts");
  let spanPost = viewElement.querySelector("#spanPost");
  console.log(spanPost);

  const post = await getPost();
  spanPost.innerHTML = post.length;

  post.forEach((post) => {
    viewPostsApi.innerHTML += `
    <li class="list-group-item">
    <h5 class="text-secondary">${post.title}</h5>
    <p>${post.body}</p>
    </li>
    `;

    //console.log(post);
  });

  return viewElement;
};
