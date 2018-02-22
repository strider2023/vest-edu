export class LoanInfo {
    id: number;
    loanId: string;
    amount: number;
    startDate: string;
    endDate: string;
    status: string;

    constructor(data: any) {
        this.id = data.id;
        this.loanId = data.loanId;
        this.amount = data.amount;
        this.startDate = data.startDate;
        this.endDate = data.endDate;
        this.status = data.status;
     }
}
