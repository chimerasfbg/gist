import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Posts from "./components/posts";
import Pagination from "./components/pagination";
// import { Octokit } from "@octokit/rest";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(30);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const res = await axios.get("https://api.github.com/gists/public");

      setPosts(res.data);
      setLoading(false);
    };

    fetchPost();
  }, []);

  // .map((post) => console.log(post)

  console.log(posts.map((post) => console.log(post.files)));

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="app">
      <h1 className="text-primary mb-3">Task Data</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postPerPage={postPerPage}
        paginate={paginate}
        totalPosts={posts.length}
      />
    </div>
  );
}

export default App;
