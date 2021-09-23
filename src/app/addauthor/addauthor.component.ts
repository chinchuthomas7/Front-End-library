import { Component, OnInit } from '@angular/core';
import { AuthorService} from '../author.service';
import { Router } from '@angular/router';
import { AuthorModel } from '../authors/author.model';
@Component({
  selector: 'app-addauthor',
  templateUrl: './addauthor.component.html',
  styleUrls: ['./addauthor.component.css']
})
export class AddauthorComponent implements OnInit {
  title:string="ADD AUTHOR"

  constructor(private authorService:AuthorService,private router:Router) { }

  authorItem = new AuthorModel(null,null,null,null)

  ngOnInit(): void {
  }
  AddAuthor(){
    this.authorService.newAuthor(this.authorItem);
    console.log("called");
    alert("success");
    this.router.navigate(['/authors'])
  }

}
