import React from "react";
import ReactDom from "react-dom";
//CSS
import "./index.css";

import {templates} from './templates'
import Template from './Template'

function TemplateList() {
  return (
    <section className="templatelist">
      {templates.map((template) => {
        const { img, title, author } = template;
        return <Template key={template.id} {...template}></Template>;
      })}
    </section>
  );
}


ReactDom.render(<TemplateList />, document.getElementById("root"));
