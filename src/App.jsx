import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { initializeApp } from "firebase/app";
import NavBar from "./NavBar";
import Home from "./Home";
import PostDetail from "./PostDetail";
import CreatePost from "./CreatePost";
import NotFound from "./NotFound";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route index element={<Home />}></Route>
      <Route path="post/:postId" element={<PostDetail />}></Route>
      <Route path="create-post" element={<CreatePost />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Route>
  )
);

function App() {


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

  return (
    <>
      <div className="container">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  );
}

export default App;
