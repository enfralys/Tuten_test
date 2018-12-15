import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Angular-crud';
  empleados = [
    { 'name': 'leo' , position:'manager'},
    { 'name': 'Juan' , position:'Programador'},
    { 'name': 'Francisco' , position:'manager'}
  ];
model:any ;


addEmployee():void{

}

deteleEmployee():void{

}

editEmployee():void{

}
updateEmployee():void{}
}
