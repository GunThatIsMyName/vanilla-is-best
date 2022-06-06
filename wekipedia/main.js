import { getDomElement } from "./utils/getDom.js"
import { getWikiData } from "./utils/getWiki.js";
import { paintDom } from "./utils/paintDom.js";

const form = getDomElement(".form");
const formInput = getDomElement(".form-input");
const results = getDomElement(".results");

const handleSubmit=(e)=>{
    e.preventDefault();
    const {value} = formInput;

    if(!value){
        const content = paintDom("error","please enter valid value")
        results.innerHTML=content;
        return;
    };

    getWikiData(value)

}


form.addEventListener("submit",handleSubmit);
