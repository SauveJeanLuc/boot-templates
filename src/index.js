import React from "react";
import ReactDom from "react-dom";
//CSS
import "./index.css";

import { templates } from './templates'
// import Template from './Template'
import Api from './Api'
function TemplateList() {
  return (
    <section className="templatelist">
      {templates.map((template, index) => {
        // return <Template key={template.id} {...template}></Template>;
        return <Api key={template.id} {...template}></Api>;
      })} 
    </section>
  );
}


ReactDom.render(<TemplateList />, document.getElementById("root"));
