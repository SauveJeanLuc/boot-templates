import React from 'react';
import ReactDom from 'react-dom';
//CSS
import './index.css';
//variables
const firstBook = {
  author: "SAUVÉ Jean-Luc",
  title: "Library MIS REST",
  img: "https://jooinn.com/images/library-37.jpg"
}

const secondBook = {
  author: "SAUVÉ Jean-Luc",
  title: "School MIS REST",
  img: "https://static.toiimg.com/thumb/msid-81604332,width-1200,height-900,resizemode-4/.jpg"
}
function TemplateList() {
  return (
    <section className="templatelist">
      <Template author={firstBook.author} title={firstBook.title} img={firstBook.img} />
      <Template
        author={secondBook.author}
        title={secondBook.title} 
        img={secondBook.img}
      />
    </section>
  );
};



const Template = (props) =>{
  console.log(props);
  return (
    <article className="template">
      <img
        src={props.img}
        width="300px"
        alt="API representation"
        className="intro__img"
      />
      <h1>{props.title}</h1>
      <h4
        style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}
      >
        {props.author}
      </h4>
    </article>
  );
}

ReactDom.render(<TemplateList/>, document.getElementById('root'));
