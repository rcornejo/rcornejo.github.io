import { Publication } from "./publication.model"

class BookChapter extends Publication{

    constructor(title:string, year:number, authors:string[], doi:string, public bookTitle:string,public isbn:string) {
        super(title,year,authors,doi);
    }
}