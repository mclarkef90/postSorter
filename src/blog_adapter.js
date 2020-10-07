class BlogAdapter  {

static getPosts(e){
      e.preventDefault();
      const topicEntry= document.querySelector("#topic-entry").value
      const sortEntry= document.querySelector("#sort-entry").value
      const orderEntry= document.querySelector("#sort-order").value

      console.log(topicEntry)
      console.log(sortEntry)
      console.log(orderEntry)
      BlogAdapter.fetchandMakePosts(topicEntry, sortEntry, orderEntry)
        .then(Post.renderAllPosts)
    }


static fetchandMakePosts(topicEntry, sortEntry, orderEntry){
    // console.log(`https://api.hatchways.io/assessment/blog/posts?tags=${topicEntry}&sortBy=${sortEntry}&direction=${orderEntry}`)

    return fetch(`https://cors-anywhere.herokuapp.com/https://api.hatchways.io/assessment/solution/posts?tags=${topicEntry}&sortBy=${sortEntry}&direction=${orderEntry}`)
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
