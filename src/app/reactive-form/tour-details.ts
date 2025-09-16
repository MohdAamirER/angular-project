import { UserDetails } from "./user-details";
export interface TourDetails{
    users:UserDetails[],
    from:string,
    to:string,
    distance:string,
    journeyDate:Date,
    fare:number,
    pnrNumer:string,
    seatNumber:string
}