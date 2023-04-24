import Link from "next/link";
import { useState } from "react";

export default function CommentsPage() {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const fetchComments = async () => {
    const res = await fetch("/api/comments");
    const data = await res.json();
    setComments(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (comment.length === 0 || name.length === 0) {
      return alert("komen/nama tidak boleh kosong");
    }
    const res = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ name, comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setComments([...comments, data]);
    setName("");
    setComment("");
  };

  const deleteComment = async (id) => {
    const res = await fetch(`/api/comments/${id}`, {
      method: "DELETE",
    });
    const { newComment } = await res.json();

    setComments(newComment);
  };

  return (
    <>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "10%",
          gap: "1rem",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">
          Name:
          <input
            id="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label htmlFor="comment">
          Comment:
          <input
            id="comment"
            type="text"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          />
        </label>
        <button type="submit">Submit comment</button>
      </form>
      <button
        onClick={fetchComments}
        style={{ margin: "1rem", padding: "4px" }}
      >
        Load comments
      </button>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id} style={{ marginTop: "1rem" }}>
            <h2>{comment.name}</h2>
            <Link href={`/comments/${comment.id}`}>
              <h3>
                {comment.id}, {comment.text}
              </h3>
            </Link>
            <button
              style={{ padding: "2px" }}
              onClick={() => deleteComment(comment.id)}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
