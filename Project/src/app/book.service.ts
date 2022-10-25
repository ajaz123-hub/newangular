import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Book } from './book';
import { Buybook } from './buybook';
import { User } from './user';

const API_URL = 'http://localhost:8081/api/v1/digitalbooks/books';
const LoginApi='http://localhost:8082/api/v1/digitalbooks/author/signup';
const Login="http://localhost:8082/api/v1/digitalbooks/author/login";
const Authenticate='http://localhost:8082/api/v1/digitalbooks/author/authenticate'
@Injectable({
  providedIn: 'root',
})
export class BookService {
 
  public token: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(public client: HttpClient) {}
  
  getBooks(): Observable<Book[]>{
    return this.client.get<Book[]>(API_URL);
  }
  //  login(user: User) {
  //  return this.client.post(Login, user);
  // }

  /*login(user: User) {

    const header = new HttpHeaders().set('Authorization',  "Bearer "+localStorage.getItem("token"));

    return this.client.post(Login, user,{headers: header}
  );
  }*/

  authenticate(credentials:any){

    console.log(Login + JSON.stringify(credentials));

    return this.client.post<any>(Login,credentials)

  }

  loginUser(token:string){

    localStorage.setItem("token", token);

    return true;

  }
   
  register(user :User) :Observable<any>{
    console.log(user,JSON.stringify(user));
    return this.client.post(LoginApi,user);
    
  }
  getAuthors(data:any){
    return this.client.post<User[]>(Login,User);
  }
  createBook(book : Book) : Observable<any>
  {
     
      return this.client.post("http://localhost:8081/api/v1/digitalbooks/books/createbook",book);
  }
  updatebook(book : Book) : Observable<any>

  {

   //const  url=);

      return this.client.put("http://localhost:8081/api/v1/digitalbooks/books/update",book);

  }

  buyBook(book:Buybook) : Observable<any>
   {
     
       return this.client.post("http://localhost:8081/api/v1/digitalbooks/books/buy",book);
   }

   refund(bookId: string, emailId: string) : Observable<any>

   {

    const  url="http://localhost:8081/api/v1/digitalbooks/books/readers/"+emailId + "/books/" +"/refund";

       return this.client.get(url);

   }
   purchased(emailId: string) : Observable<any>

   {

    const  url="http://localhost:8081/api/v1/digitalbooks/books/readers/"+emailId + "/books/"+"/email";

       return this.client.get(url);

   }
   purchasedId(emailId: string,bookId:string) : Observable<any>

   {

    const  url="http://localhost:8081/api/v1/digitalbooks/books/readers/"+emailId + "/books/"+bookId;

       return this.client.get(url);

   }
   searchBook(category: string, authorName: string, price: number, publisher: string):Observable<any> {

    return this.client.get("http://localhost:8081/api/v1/digitalbooks/books/search",

    {

      params:{

        category:category,

        authorName:authorName,

        price:price,

        publisher:publisher

      },

     

    });

}
GetToken(data:any) : Observable<any>
  {    

      return this.client.post(Authenticate,data);

  }

  

}



