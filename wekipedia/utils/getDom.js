export const getDomElement=(select)=>{
    const element = document.querySelector(select);
    if(!element){
        throw new Error(`No element ${select} check out!`)
    };
    
    return element
}