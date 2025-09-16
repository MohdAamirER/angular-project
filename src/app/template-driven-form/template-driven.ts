import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero',
  templateUrl: './template-driven.html',
  styleUrls: ['./template-driven.css']
})
export class HeroComponent implements OnInit {
  submitted?:boolean=false;
  powers:string[]=["super flexible","Iron Man","Thunder God","Captain America","Black Widow","Spider Man"]
  hero:Hero={
    id:1,
    name:'Aamir',
    power:this.powers[2],
    description:'Asgardian Thor can destroy everything'
  }
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
  console.log("submitted method called");
  this.submitted=true;
  }
  handle(){
    alert("HIIIIIIIIIIIIIIIIIIIII");
  }
  newHero(){}

}
