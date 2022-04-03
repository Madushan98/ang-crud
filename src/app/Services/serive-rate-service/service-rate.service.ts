import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ServiceRateService {



  constructor(private  http:HttpClient) {

  }

  listServiceRates(){
    return this.http.get(environment.baseUrls.RATE + "rate" )
  }

  postServiceRate(data: any){
    return this.http.post<any>(environment.baseUrls.RATE+ "rate",data);
  }

  getServiceRate(id: string){
    return this.http.get<any>(environment.baseUrls.RATE+ "rate/" + id,);
  }

  deleteServiceRate(id: string){
    return this.http.delete(environment.baseUrls.RATE+"rate/"+ id);
  }

  updateServiceRate(id: string, params: any) {
    return this.http.put(environment.baseUrls.RATE+"rate/" + id, params);
  }

}
