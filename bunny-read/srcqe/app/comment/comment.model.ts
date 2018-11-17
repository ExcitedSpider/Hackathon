export class CommentModel{

    name:string;
    comment:string;
    datetime:string;
    url:String;

    constructor(name:string,comment:string,datetime:string){
        this.name = name;
        this.comment = comment;
        this.datetime = datetime;
    }
}
