
import { Component, signal,ElementRef,ViewChild } from '@angular/core';
import { ServiceFiles } from '../services/servicesFiles';
import { File } from '../models/file';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angularjuegos');

  //@ViewChild("cajafile") cajafile!:ElementRef;
  //,{Filename:ElementRef,FileContent:ElementRef}
  public string64!:string;
  public nombre!:string;

  constructor(private _service:ServiceFiles){}
  

  onFileSelected(event: any) {
    const file = event.target.files[0];
    
    const reader = new FileReader();
    reader.onload = () => {
      this.nombre=file.name;
      this.string64=(reader.result as string).split(",")[1];
    };
    reader.readAsDataURL(file);
  }

  subirForm():void{
    //let FileContent= this.cajafile.nativeElement.files;  
    //console.log(FileContent.name)
    var file= new File(this.nombre,this.string64);
    console.log(this.nombre+" "+this.string64)
    this._service.insertFile(file).subscribe(response=>{
      console.log("INSERTADO!"+response)
    });
  }


}
