import { url } from "./endPoint.js";
import { getDomElement } from "./getDom.js";
import { paintDom } from "./paintDom.js";
import { renderWikiData } from "./renderWiki.js";

const results = getDomElement(".results");

export const getWikiData=async(value)=>{
    results.innerHTML=paintDom("loading");
    try{
        const response = await fetch(`${url}${value}`);
        const data = await response.json();
        const resultsData = data.query.search;

        if(resultsData.length<1){
            return results.innerHTML = paintDom("error","No Matched Your Search Keyword");
        }

        renderWikiData(resultsData);

    }catch(error){
        results.innerHTML=paintDom("error","There was an Error please check again")
        throw new Error(error);
    }
}

