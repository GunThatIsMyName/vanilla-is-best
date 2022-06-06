import { getDomElement } from "./getDom.js";

const page_url = 'http://en.wikipedia.org/?curid=';
const results = getDomElement(".results");

const articleModel =(item)=>{
    const {pageid,title,snippet}=item;
    const model=`
        <a href="${page_url}${pageid}" target="_blank" >
            <h4>${title}</h4>
            <p>${snippet}</p>
        </a>
    `
    return model;
} 

export const renderWikiData=(list)=>{
    const listModel = list.map(item=>{
        return articleModel(item)
    }).join("")


    results.innerHTML = `<div class="articles">${listModel}</div>`
}