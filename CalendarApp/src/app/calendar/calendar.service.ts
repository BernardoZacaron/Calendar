import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class CalendarService{
    private days: number[];

    private months = [
        0, //index=0
        this.insertDays(31), //index=1, month=1, january
        this.insertDays(28),
        this.insertDays(31),
        this.insertDays(30),
        this.insertDays(31),
        this.insertDays(30),
        this.insertDays(31),
        this.insertDays(31),
        this.insertDays(30),
        this.insertDays(31),
        this.insertDays(30),
        this.insertDays(31),
    ];

    private insertDays(monthSize: number): number[]{
        for(let d=1; d<= monthSize; d++){
            this.days.push(d);
        }
        return this.days;
    }

    getMonths(){
        return this.months;
    }

    getMonthNumber(month: string){
        switch(month){
            case "jan":
                return 1;
            case "feb":
                return 2;
            case "mar":
                return 3;
            case "apr":
                return 4;
            case "may":
                return 5;
            case "jun":
                return 6;
            case "jul":
                return 7;
            case "aug":
                return 8;
            case "sep":
                return 9;
            case "oct":
                return 10;
            case "nov":
                return 11;
            case "dec":
                return 12;
        }
    }

    getMonthDays(index: number){
        return this.months[index];
    }
}