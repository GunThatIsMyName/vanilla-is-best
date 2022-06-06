import {page_url} from './api.js';
import getElement from './getElement.js';

const results = getElement('.results');

const displayData = (data) => {
  const info = data
    .map((item) => {
      const {title, pageid, snippet} = item;
      const content = `
    <a href=${page_url}${pageid} target="_blank>
      <h4>${title}</h4>
      <p>
        ${snippet}
      </p>
    </a>
    `;
      return content;
    })
    .join('');

  results.innerHTML = `  <div class="articles">${info}</div>`;
};

export default displayData;
