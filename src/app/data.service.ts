import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }


getHolidayInYear(country,year){
  let queryParams = new HttpParams();
  queryParams = queryParams.append('key',"167b2c18-4188-457f-9dbd-9134f4a8597c")
  queryParams = queryParams.append('country',country)
  queryParams = queryParams.append('year',year)
  return this.http.get('https://holidayapi.com/v1/holidays',{
    params: queryParams
  })
}

getHolidayDate(country,year,month,date){
  let queryParams = new HttpParams();
  queryParams = queryParams.append('key',"167b2c18-4188-457f-9dbd-9134f4a8597c")
  queryParams = queryParams.append('country',country)
  queryParams = queryParams.append('year',year)
  queryParams = queryParams.append('month',month)
  queryParams = queryParams.append('date',date)
  return this.http.get('https://holidayapi.com/v1/holidays',{
    params: queryParams
  })
}


}