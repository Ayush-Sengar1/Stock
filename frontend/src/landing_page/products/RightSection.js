import React from "react";

export default function RightSection({ image, title, content, link1, link2 }) {
  return (
    <div className="container align-items-center my-4 py-5">
      <div className="row align-items-center ">
        <div className="col-5 px-4" >
          <h1 className=" mb-5">{title}</h1>
          <p className="fs-5 mb-5">{content}</p>
          <a href="">{link1}</a>
          <a className="mx-5 px-1" href="">
            {link2}
          </a>
        </div>
        <div className="col-7 px-5">
          <img src={image} />
        </div>
      </div>
    </div>
  );
}
