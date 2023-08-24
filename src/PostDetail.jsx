import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc,collection } from "firebase/firestore";
import { useEffect, useState } from "react";

const PostDetail = () => {
  const [post, setPost] = useState({});

  const { postId } = useParams();

  const db = getFirestore();

  //collection ref
//   const colRef = collection(db, "posts");

  useEffect(() => {
    const postRef = doc(db, "posts", postId);
    getDoc(postRef)
      .then((docSnapshot) => {
        console.log(docSnapshot.data());
        setPost(docSnapshot.data());
      })
      .catch((error) => {
        console.error("Error fetching post:", error);
      });
  }, []);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};
export default PostDetail;
