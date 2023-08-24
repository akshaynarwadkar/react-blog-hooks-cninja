import { useState } from "react";

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
} from "firebase/firestore";
import { useEffect } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyC_WSp8b5kk4L70PjJmp4TcKu2Qzj-AZqY",
  authDomain: "react-hooks-blog-cninja.firebaseapp.com",
  projectId: "react-hooks-blog-cninja",
  storageBucket: "react-hooks-blog-cninja.appspot.com",
  messagingSenderId: "440240373961",
  appId: "1:440240373961:web:198695d12d75857f678d18",
};

//initialize FireBase app
initializeApp(firebaseConfig);

//initialize services
const db = getFirestore();

//collection ref
const colRef = collection(db, "posts");

const CreatePost = () => {
  const [title, setTitle] = useState();
  const [subTitle, setSubTitle] = useState();
  const [content, setContent] = useState();

  function handleSubmit(e) {
    e.preventDefault();

    addDoc(colRef, {
      title,
      subTitle,
      content,
      createdAt: new Date(),
    });
  }

  return (
    <div className="create-post">
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Title</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="form-field">
          <label>Sub Title</label>
          <input
            value={subTitle}
            onChange={(e) => setSubTitle(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <button className="create-post-btn">Create Post</button>
      </form>
    </div>
  );
};
export default CreatePost;
