export interface limitType{
    content: string;
    limit: number;
    dot: boolean
}



export function limitCount({ content, limit, dot }: limitType){
    const words = content.trim().split(/\s+/);
    if (words.length > limit) {
        return words.slice(0, limit).join(" ") + (dot ? " ..." : "");
    } else {
        return content;
    }
}
