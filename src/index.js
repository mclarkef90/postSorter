// document.addEventListener('DOMContentLoaded', () => {
//   const endPoint = 'https://api.hatchways.io/assessment/blog/posts?tag=tech';
//   fetch(endPoint)
//     .then(res => res.json())
//     .then(json => console.log(json));
// });

const searchBar= document.querySelector("#search-container")

searchBar.addEventListener("submit", BlogAdapter.getPosts)
