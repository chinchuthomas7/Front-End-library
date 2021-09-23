import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {


  item={
    bookName:'',
   bookAuthor :'',
    genre:'',
    imageUrl:''
    
  }

  constructor(private http:HttpClient) { }

  getBook(id:any){
    return this.http.get("/api/books/"+id);
  }

  getBooks(){
    return this.http.get("/api/books")
  }

editBook(book:any){
  console.log('client update')
  return this.http.put("/api/updatebook",book)
  .subscribe(data=>{
    console.log(data)
  })
}

deleteBook(id:any){
  return this.http.delete("/api/removebook/"+id)
}


  newBook(item:any){
    return this.http.post("/api/addbook",{"book":item})
    .subscribe(data=>{

      console.log(data)
    })

    
  
    
  }

  
}
