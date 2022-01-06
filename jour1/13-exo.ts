function padLeft(padding: number | string, unite: string): string {
    if(typeof padding === "string"){
        return padding + " " + unite ;
    }    
    if(typeof padding === "number"){
        return unite; 
    }
}

padLeft(2 , "px")
 
padLeft("2" , "px")