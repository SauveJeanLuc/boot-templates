import React from 'react';
import ReactDom from 'react-dom';
//CSS
import './index.css';
//variables
const templates = [
  {
    id: 1,
    author: "SAUVÉ Jean-Luc",
    title: "Library MIS REST",
    img: "https://jooinn.com/images/library-37.jpg",
  },
  {
    id: 2,
    author: "SAUVÉ Jean-Luc",
    title: "School MIS REST",
    img: "https://static.toiimg.com/thumb/msid-81604332,width-1200,height-900,resizemode-4/.jpg",
  },
  {
    id:3,
    author: "SAUVÉ Jean-Luc",
    title: "Attendance MIS REST",
    img: "https://static.toiimg.com/thumb/msid-81604332,width-1200,height-900,resizemode-4/.jpg",
  },
];


function TemplateList() {
  return (
    <section className="templatelist">
        {templates.map((template)=>{
          const {img, title, author} = template;
          return(
            <Template key={template.id} {...template}></Template>
          )
        })}
    </section>
  );
};



const Template = (props) =>{
  const {img, title, author } = props;

  return (
    <article className="template">
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
    
    </article>
  ); 
}

ReactDom.render(<TemplateList/>, document.getElementById('root'));
