import xss from "xss-filters";

let ui = {
  renderPosts(posts) {
    let elements = posts.map( (post) => {
      let {title, lastReply} = post;
      // the previous line is the same as doing the following:
      // let title = post.title;
      // let lastReply = post.lastReply;
      return articleTemplate(title, lastReply);
    });

    let target = document.querySelector(".container");
    target.innerHTML = elements.join('');
  }
}

function articleTemplate(title, lastReply) {
  let safeTitle = xss.inHTMLData(title);
  let safeLastReply = xss.inHTMLData(lastReply);

  let template = `<article class='post'>
                    <h2 class='post-title'>
                      ${safeTitle}
                    </h2>
                    <p class='post-meta'>
                      last reply on ${safeLastReply}
                    </p>
                  </article>`
  return template;
}

export default ui;
