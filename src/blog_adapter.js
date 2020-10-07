class BlogAdapter  {

static getPosts(e){
      e.preventDefault();
      const topicEntry= document.querySelector("#topic-entry").value
      // const sortEntry= document.querySelector("#sort-entry").value
      // const orderEntry= document.querySelector("#sort-order").value

      console.log(topicEntry)
      
      BlogAdapter.fetchandMakePosts(topicEntry)
        .then(Post.renderAllPosts)
    }


static fetchandMakePosts(topicEntry){

    return fetch(`https://api.hatchways.io/assessment/blog/posts?tag=${topicEntry}`)
    .then(res => res.json())
    .then(obj => {
      console.log(obj.posts)
      let posts= obj.posts
      return posts.forEach(function(post){
        return new Post(post)
      })
    })
    .catch(error => {
    console.log(error);
    return error;
  })
}
}
