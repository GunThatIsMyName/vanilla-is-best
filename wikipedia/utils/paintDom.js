const paintDom = (name, content = '') => {
  const tag = `<div class=${name}>${content}</div>`;
  return tag;
};

export default paintDom;
