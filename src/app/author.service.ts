import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http:HttpClient) { }

  // server_address:string = '/api';

  getAuthor(id:any){
    // return this.http.get("http://localhost:8000/authors/"+id);

    return this.http.get("/api/"+id);
  }

  getAuthors(){
    // return this.http.get("http://localhost:8000/authors")
      return this.http.get("/api/authors")
  }

  newAuthor(item:any){
    // return this.http.post("http://localhost:8000/addauthor",{"author":item})
    return this.http.post("/api/addauthor",{"author":item})
    .subscribe(data=>{
      console.log(data)
    })
  }

  
  deleteAuthor(id:any)
  {

    // return this.http.delete("http://localhost:8000/removeauthor/"+id)
    return this.http.delete("/api/removeauthor/"+id)

  }

  editAuthor(author:any){
    console.log('client Update')
    // return this.http.put("http://localhost:8000/updateauthor",author)
    return this.http.put("/api/updateauthor",author)
    .subscribe(data=>{
      console.log(data)
    })
  }

}
