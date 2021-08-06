export interface dateInterface {
   date:string,
   month: number | string,
   day:string,
   year:string
}

// enum with Month name/ Abrev / # of days
// must account for leap years at later point
enum __Months {
   "January/Jan/31" = 1,
   "February/Feb/28",
   "March/Mar/31",
   "April/April/30",
   "May/May/31",
   "June/June/30",
   "July/July/31",
   "August/Aug/31",
   "September/Sept/30",
   "October/Oct/31",
   "November/Nov/30",
   "December/Dec/31"
}

export const createDate = (): dateInterface => {
   const __Date = new Date()
   const month = __Date.getMonth() + 1
   const day = JSON.stringify(__Date.getDate())
   const year = JSON.stringify(__Date.getFullYear())
   const date = month + " / " + day + " / " + year
   return {date, month, day, year}
}

export interface formattedMonthInterface {
   numberOfDays: number,
   name: string,
   abrev: string,
}

export const formatedMonthObj = (month: number | string):formattedMonthInterface => {
   let mydata: string[]
   if (typeof month === "number") {
      mydata = __Months[month].split("/")
   } else {
      mydata = month.split("/")
   }
   let [name, abrev, numberOfDays] = mydata
      return {
         numberOfDays: Number(numberOfDays),
         name,
         abrev,
      }
}
