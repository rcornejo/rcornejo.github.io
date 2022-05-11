export class Publication {
    
    constructor(public authors:string, public citation_id:string, public cited_by:CitedBy, public link:string,
        public publication:string, public title:string, public year:number) {  
        
    }
}
export class CitedBy{
    constructor(public value:number, public link:string){}
}