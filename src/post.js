class Post{

  static all= []
  static featureContainer= document.querySelector("#feature-container")

  constructor({id, author, authorId, likes, popularity, reads, tags}){
    this.id= id
    this.author= author
    this.authorId= authorId
    this.likes= likes
    this.popularity= popularity
    this.reads= reads
    this.tags= tags

    this.main= document.createElement('div')
    this.main.id= `post-${this.id}`
    this.details= document.createElement('div')
    this.details.id= `post-${this.id}-details`
    this.main.appendChild(this.details)

    Post.all.push(this)
  }

  renderDetails(){
    this.details.innerHTML= `
    <p>Author: <span>${this.author}</span></p>
    <p>Likes: <span>${this.likes}</span></p>
    <p>Popularity: <span>${this.popularity}</span></p>
    <p>Reads: <span>${this.reads}</span></p>
    <p>Tags: <span>
      ${this.tags} </span></p>
    <p>______________________________</p>
    `
  }

  static renderAllPosts(){
    Post.all.forEach((post) => {
      post.renderDetails()
      Post.featureContainer.appendChild(post.main)
    })
  }

  static sortPosts(e){
    e.preventDefault(e);

    Post.featureContainer.textContent=" "
    const sortEntry= document.querySelector("#sort-entry").value
    const sortOrder= document.querySelector("#sort-order").value
    console.log(sortEntry)
    console.log(sortOrder)
    let posts = Post.all
    let sortedPosts = evaluate(posts, sortEntry, sortOrder)
    sortedPosts.forEach((post) => {
      post.renderDetails()
      Post.featureContainer.appendChild(post.main)
    })
  }
}

function evaluate(posts, sortEntry, sortOrder){

  function asc( a, b ) {
    if ( a[sortEntry] < b[sortEntry] ){
      return -1;
    }
    if ( a[sortEntry] > b[sortEntry] ){
      return 1;
    }
    return 0;
  }

   function desc( a, b ) {
    if ( a[sortEntry] > b[sortEntry] ){
      return -1;
    }
    if ( a[sortEntry] < b[sortEntry] ){
      return 1;
    }
    return 0;
  }

  if (sortOrder == "asc") {
    posts.sort(asc);
  }
  else if (sortOrder == "desc") {
    posts.sort(desc)
  }
  return posts
}
