const loadCommentsBtnElement = document.getElementById("load-comments-btn");
const commentsSectionElement = document.getElementById("comments");
const commentsFormElement = document.querySelector("#comments-form form");
const commentTitleElement = document.getElementById("title");
const commentTextElement = document.getElementById("text");

function createCommentsList(comments) {
  const commentListElement = document.createElement("ol");
  for (const comment of comments) {
    const commentElement = document.createElement("li");
    commentElement.innerHTML = `
    <article class="comment-item">
  <h2>${comment.title}</h2>
  <p>${comment.text}</p>
</article>
    `;
    commentListElement.appendChild(commentElement);
  }
  return commentListElement;
}

async function fetchCommentsForPost() {
  const postId = loadCommentsBtnElement.dataset.postid;
  const response = await fetch(`/posts/${postId}/comments`);
  const responseData = await response.json();
  
  const commentsListElement = createCommentsList(responseData);

  commentsSectionElement.innerHTML = "";
  commentsSectionElement.appendChild(commentsListElement);
}

async function saveComment(event) {
  event.preventDefault();

  const enteredTitle = commentTitleElement.value;
  const enteredText = commentTextElement.value;

  const comment = {title: enteredTitle, text: enteredText};
  
  const postId = commentsFormElement.dataset.postid;

  fetch(`/posts/${postId}/comments`, {
    method: "POST",
    body: JSON.stringify(comment),
    headers: {
      "Content-Type": "application/json"
    }
  });
}

loadCommentsBtnElement.addEventListener("click", fetchCommentsForPost);
commentsFormElement.addEventListener("submit", saveComment);
