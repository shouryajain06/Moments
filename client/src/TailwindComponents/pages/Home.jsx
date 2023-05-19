import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../actions/posts";
import CardComponent from "../CardComponent";
import Header from "../Header";
import Profile from "../Profile";

const Home = () => {
  //   const classes = useStyles();
  const dispatch = useDispatch();

  const [currentId, setCurrentId] = useState(null);
  
  
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, setCurrentId]);

  const posts = useSelector((state) => state.posts);

  return (
    <div className="grid grid-cols-[1fr_3fr] bg-white">
          <div className="">
        <Profile />
      </div>
      <div>
        <Header />
        <div className="bg-[#fafcfe] p-5 grid grid-cols-3 gap-6">
          {posts.map((p, idx) => (
            <CardComponent key={idx} post={p} currentId={currentId} setCurrentId={setCurrentId} />
          ))}
        </div>
      </div>
  
    </div>
  );
};

export default Home;
