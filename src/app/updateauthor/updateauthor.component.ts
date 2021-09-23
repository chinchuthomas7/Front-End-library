import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-updateauthor',
  templateUrl: './updateauthor.component.html',
  styleUrls: ['./updateauthor.component.css']
})
export class UpdateauthorComponent implements OnInit {

  title:string="Edit Author"

  authorItem={
    authorName:'',
    authorBook:'',
    genre:'',
    imageUrl:''
  }

  constructor(private router:Router,private authorService:AuthorService) { }

  ngOnInit(): void {

    let authorId = localStorage.getItem("editauthorId");
    this.authorService.getAuthor(authorId).subscribe((data)=>{
      this.authorItem=JSON.parse(JSON.stringify(data));
  })
  }
  editAuthor(){
    this.authorService.editAuthor(this.authorItem);
    alert("Success");
    this.router.navigate(['authors'])
  }

}
