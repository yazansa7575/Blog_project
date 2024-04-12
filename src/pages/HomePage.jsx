import React, { useEffect, useState } from "react";
import Post from "../component/post";
import axios from "axios";
import { Urlaxios } from "../constant";

const homePage = () => {
  const [catigoryData, setCatigoryData] = useState();
  const [postsData, setPostsData] = useState();

  useEffect(() => {
    axios(`${Urlaxios}/CatigoryRouts/getAllCatigory`)
      .then((res) => {
        setCatigoryData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios(`${Urlaxios}/postRouts/getAllPosts?pageNumber=1`)
      .then((res) => {
        setPostsData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div
        className="header w-100"
        style={{
          height: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            backgroundColor: "#efefef",
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          welcome to Blog{" "}
        </h1>
      </div>
      <div className="posts container my-5 ">
        <h3
          style={{ width: "max-content" }}
          className="title border-bottom border-2 border-dark "
        >
          Latest Posts
        </h3>
        <div className="row my-3">
          <div className="posts col-md-8 col-sm-12 d-inline-block d-flex flex-column gap-4">
            {postsData?.length > 0 ? postsData.map((e,index)=>{
              return (<div key={index}><Post data={e}/></div>)
            }) : "no posts found "}
          </div>
          <div className="catigry col-md-4 col-sm-12  ">
            <h3 className="cat">Categories</h3>
            <div className="catigorylist d-flex align-items-center justify-content-center flex-column gap-3 my-3">
              {catigoryData?.length > 0
                ? catigoryData.map((e, index) => {
                    return (
                      <button
                        key={index}
                        style={{
                          border: "none",
                          fontSize: "18px",
                          backgroundColor: "#c2743e",
                          padding: "5px 15px 5px 15px ",
                          borderRadius: "20px",
                          color: "#fff",
                          width: "100%",
                        }}
                      >
                        {e.title}
                      </button>
                    );
                  })
                : "no data"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default homePage;
