export class User {
    constructor(public avatar_url: any,
        public name:string,
        public login: string,
        public followers_url: number,
        public following_url: number,
        public repos_url: string,
        public public_repos: string,
        public bio:string,
        public created_at:Date,
        public updated_at:Date
       ){}
  

}
