import React from 'react';
import ReactDom from 'react-dom';

function TemplateList() {
  return (
    <section>
      <Template/>
    </section>
  )
};

const Template = () =>{
  return <article>
    <Image></Image>
  </article>
}
const Image = () => (
  <img src="https://jooinn.com/images/library-37.jpg" width="300px" alt="" />
);
ReactDom.render(<TemplateList/>, document.getElementById('root'));
