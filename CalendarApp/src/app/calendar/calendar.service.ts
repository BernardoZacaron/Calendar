import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class RecipeService{
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

    getMonth(index: number){
        return this.months[index];
    }
}