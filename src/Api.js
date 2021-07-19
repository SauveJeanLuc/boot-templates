import React from "react";

const Api = ({ img, title, author, repo, profile }) => {
  return (
    <article
      className="template"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img
        src={img}
        width="300px"
        height="250px"
        alt="API representation"
        className="intro__img"
      />
      <h1 className="link10">
        <a href={repo}>{title}</a>
      </h1>
      <h4
        style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}
        className="link5"
      >
        <a href={profile}>{author}</a>
      </h4>
    </article>
  );
};

export default Api