import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playgame',
  templateUrl: './playgame.component.html',
  styleUrls: ['./playgame.component.css']
})
export class PlaygameComponent implements OnInit {
  isLoading : true;
  constructor() { }
  public rows:boolean[] = [];
  public rowsSecond:boolean[] = [];
  resultGame: string="";
  countClick:number =0;
  ngOnInit(): void {
    this.fullFirstarr();
    this.fullSecondarr();
  }
  clickTd(event: number){
    this.rows[event]= true;
    //alert(this.rows[event] +"  "+event);
     this.secondPlayer(event);
    this.countClick++;
  }
  secondPlayer(index:number){
   
     var btRet= true;
     if(this.countClick===4){
       return;
      }
    while(btRet){
      var id = Math.floor(Math.random() * 9);
     // alert(id);
      if(!this.rowsSecond[id] && index !=id  && !this.rows[id] && id<9){
        this.rowsSecond[id]= true;
        return;
      }
    }
  }
checkResult(){
  var finGame =(this.checkFirstArr()==5);
  if(finGame){
    if(this.checkWinner()){
      this.resultGame="Крестики выиграли";
    }
    if(this.checkSecodWinner()){
      this.resultGame=(this.resultGame? this.resultGame +" и  "+ "Нолики  выиграли":"Нолики  выиграли");
    }
    if(!this.resultGame){
      this.resultGame ="Никто не выиграл";
    }
  }
}
fullFirstarr(){
  for (let i = 0; i < 9; i++){
    this.rows[i]=false;
  }
}
fullSecondarr(){
  for (let i = 0; i < 9; i++){
    this.rowsSecond[i]=false;
  }
}
  checkEndGame(): boolean{
  var i=0;
   while(i<10){
    if(this.rows[i] === false){
     return false;
    }
    i= i+1;
   }
   while(i<10){
    if(this.rowsSecond[i] === false){
     return false;
    }
    i= i+1;
   }
    return true;
  }
  checkWinner(): boolean{
    var i: number =0, addInt:number=0;
    var btRes= false;
    //по строкам
    while(addInt<=6){
      if(this.rows[addInt] && this.rows[addInt+1] && this.rows[addInt+2]){
        return true;
      }
        addInt=addInt +3;
    }
    
    for(let i=0; i<3; i++){
      if(this.rows[i] && this.rows[i+3] && this.rows[i+6]){
        return true;
      }
    }
    if(this.rows[0] && this.rows[4] && this.rows[8]){
      return true;
    }
    if(this.rows[2] && this.rows[4] && this.rows[6]){
      return true;
    }
    return false;
  }
  checkSecodWinner(): boolean{
    var i: number =0, addInt:number=0;
    var btRes= false;
    //по строкам
    while(addInt<=6){
      if(this.rowsSecond[addInt] && this.rowsSecond[addInt+1] && this.rowsSecond[addInt+2]){
        return true;
      }
        addInt=addInt +3;
    }
    
    for(let i=0; i<3; i++){
      if(this.rowsSecond[i] && this.rowsSecond[i+3] && this.rowsSecond[i+6]){
        return true;
      }
    }
    if(this.rowsSecond[0] && this.rowsSecond[4] && this.rowsSecond[8]){
      return true;
    }
    if(this.rowsSecond[2] && this.rowsSecond[4] && this.rowsSecond[6]){
      return true;
    }
    return false;
  }
  checkFirstArr(): number{
    var count=0;
    for (let i = 0; i < 9; i++){
      if(this.rows[i]){
        count++;
      }
    }
    return count;
  }
}
