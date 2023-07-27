export class IncomeSalary {
    id:number;
    firstName:String;
    lastName:String;
    basicSalary:number;
    attendance:number;
    otherDeductions:number;
    bonus:number


    constructor(
        id: number,
        firstName: string,
        lastName: string,
        basicSalary: number,
        attendance: number,
        otherDeductions: number,
        bonus:number
      ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.basicSalary = basicSalary;
        this.attendance = attendance;
        this.otherDeductions = otherDeductions;
        this.bonus = bonus;
      }
}


