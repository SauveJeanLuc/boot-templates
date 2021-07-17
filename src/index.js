import React from 'react';
import ReactDom from 'react-dom';

function TemplateList() {
  return (
    <section>
      <Template />
      <Template />
      <Template />
      <Template />
      <Template />
    </section>
  );
};

const Template = () =>{
  return (
  <article>
    <Image/>
    <Title/>
    <Author/>
  </article>
  );
}
const Image = () => (
  <img src="https://jooinn.com/images/library-37.jpg" width="300px" alt="" />
);

const Title = () => <h1>Library MIS REST</h1>

const Author = () => <h4>SAUVÉ Jean-Luc</h4>;
ReactDom.render(<TemplateList/>, document.getElementById('root'));
