import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';
  toshow="0"
  curvalue=''
 
  darkMode = false;
  display(value:any){
    this.curvalue =this.curvalue +value
    this.toshow =this.curvalue
  }
  calculate(){
    this.toshow=eval(this.curvalue)
    this.curvalue=this.toshow
  }
  clr(){
    this.toshow='0';
    this.curvalue="";
  }
  del(){
    this.curvalue=this.curvalue.slice(0,-1)
  
    this.toshow=this.curvalue
    if(this.toshow==""){
      this.toshow='0'
      
    
    }

  }
  toggleDarkMode() {
    this.darkMode = !this.darkMode;
  }
  

}

