import React from 'react';
import ReactDom from 'react-dom';
//CSS
import './index.css';
//variables
const author = "SAUVÉ Jean-Luc";
const title = "Library MIS REST";

function TemplateList() {
  return (
    <section className="templatelist">
      <Template />
    </section>
  );
};



const Template = () =>{

  return (
    <article className="template">
      <img
        src="https://jooinn.com/images/library-37.jpg"
        width="300px"
        alt=""
        className="intro__img"
      />
      <h1>{title}</h1>
      <h4
        style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}
      >
        {author}
      </h4>
    </article>
  );
}

ReactDom.render(<TemplateList/>, document.getElementById('root'));
