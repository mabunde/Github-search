export class Repository {
    constructor(
        public name:string,
        public description:string,
        public forks_count:number,
        public html_url:string,
        public created_at:Date
    ){}
}
