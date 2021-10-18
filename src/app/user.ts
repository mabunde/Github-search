export class User {
    constructor(
        public login: string,
        public avatar_url: any,
        public name:string,
        public followers: number,
        public following: number,
        public public_repos: number,
        public created_at:Date,
        public bio:string,
        public html_url:string,
        public updated_at:Date
       ){}
  

}
