import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    //initialize services
    const db = getFirestore();

    //collection ref
    const colRef = collection(db, "posts");

    //get collection data
    getDocs(colRef).then((snapshot) => {
      const posts = snapshot.docs.map((doc) => {
        const data = doc.data();
        data["id"] = doc.id;

        return data;
      });

      setPosts(posts); //setting the state to products
    });
  }, []);

  return (
    <div className="home">
      <h1>Tech Blog</h1>
      <div id="blog-by">Akshay</div>
      {posts.map((post, index) => (
        <div className="post" key={`post-${index}`}>
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>
          <p>{post.subTitle}</p>
        </div>
      ))}
    </div>
  );
};
export default Home;
