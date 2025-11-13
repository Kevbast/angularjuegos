import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../environments/environment.development";
import { File } from "../models/file";

@Injectable()
export class ServiceFiles{
    constructor(private _http:HttpClient){}

    insertFile(file:File):Observable<any>{
        console.log("ARCHIVO EN SERVICE: "+file);
        let request="api/testingfiles";
        let apiUrl=environment.apiFiles + request;

        return this._http.post(apiUrl,file);
    }

}