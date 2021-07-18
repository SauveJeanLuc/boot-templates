import React from "react";

const Api = ({ img, title, author }) => {
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("hello world");
  };

  const complexExample = (author) => {
    console.log(author);
  };
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
        alt="API representation"
        className="intro__img"
      />
      <h1>{title}</h1>
      <h4
        style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}
      >
        {author}
      </h4>
      <button type="button" onClick={clickHandler}>
        Reference example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        More complex example
      </button>
    </article>
  );
};

export default Api