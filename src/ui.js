let ui = {
  renderPosts(posts) {
    let elements = posts.map( (post) => {
      return articleTemplate;
    });

    let target = document.querySelector(".container");
    target.innerHTML = elements.join('');
  }
}

let articleTemplate = `<article class='post'>
                          <h2 class='post-title'>
                            In hybrid moments, give me a moment
                          </h2>
                          <p class='post-meta'>
                            last reply on July 15, 1997
                          </p>
                        </article>`

export default ui;
