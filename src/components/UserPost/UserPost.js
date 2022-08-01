import { useState } from "react";
import axios from "axios";
import "./UserPost.css";

export default function UserPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [thumbnail, setThumbnail] = useState("string");
  const [imageName, setImageName] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const accessToken = localStorage.getItem("accessToken");
    axios
      .post(
        `${process.env.REACT_APP_HOST}/board/create`,
        {
          title,
          content,
          imageName,
          thumbnail,
        },
        {
          headers: {
            "X-ACCESS-TOKEN": accessToken,
          },
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <div className="post-container">
      <h1 className="post-header">Post</h1>
      <form
        className="post-form"
        action="/"
        method="post"
        onSubmit={handleSubmit}
      >
        <div className="post-input-container">
          <input
            className="post-data post-data-title"
            type="text"
            placeholder="title"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="post-data"
            name="content"
            rows="20"
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="post-file-container">
            <input
              id="post-upload-name"
              value="첨부파일"
              placeholder="첨부파일"
              readOnly
            />
            <label htmlFor="file">파일 찾기</label>
            <input
              type="file"
              name="file"
              id="file"
              onChange={(e) => {
                document.querySelector("#post-upload-name").value =
                  e.target.value;
                setImageName(e.target.value);
              }}
            />
          </div>
        </div>
        <button type="submit" className="post-submit">
          Upload
        </button>
      </form>
    </div>
  );
}
