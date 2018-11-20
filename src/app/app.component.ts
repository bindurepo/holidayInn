import { Component } from '@angular/core';
import { DataService} from './data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'holidayIn';
  Year = 2017;
  dat: string[] = [];
  country
  month
  sdate
  response


  countries = ["AU","CA","CH","DE","FR","IE","IN","IT","SG","US"]

  constructor(
    private data: DataService
  ){}

  onclickCountry(con){
    this.country = con
    this.data.getHolidayInYear(con,this.Year).subscribe(res =>{
      const holidays = res['holidays']
      this.dat = Object.keys(holidays)
    });
  }
onclickDate(d){
  const arr=d.split('-')
  this.sdate=arr[arr.length-1]
  this.month=arr[arr.length-2]
  this.data.getHolidayDate(this.country,this.Year,this.month,this.sdate).subscribe(res =>{
    this.response=res['holidays'].filter((value)=>{return value.date.slice(8,10)==this.sdate})
  })
}
}
