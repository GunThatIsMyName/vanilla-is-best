export const paintDom = (className,content="")=>{
    return (
        `<div class="${className}" >
            ${content}
        </div>`
    )
}