import { Injectable } from "@angular/core";
import {Httpclient} from ".angular/commom/http";
import { book } from "./model/book";


Injectable ()

export class bookservice
{
private url=

httpoptions- {
    Headers: new Httpheaders({'content-type': 'aplication/json'})
}

constructor(private http:HttpClient)


getBook(){

    return this.http.get(this.url)
}

}