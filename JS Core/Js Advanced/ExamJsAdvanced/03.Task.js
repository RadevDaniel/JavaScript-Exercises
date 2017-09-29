class Task{
    constructor(title, deadline){
        this.title = title;
        this.deadline = deadline;

        this.status = 'Open';
    };
    get deadline(){
        return this._deadline;
    }
    set deadline(value){
        if(value < Date.now){
            throw new Error("The deadline can't be in the past!");
        }
        else{
            this._deadline = value;
        }
    }

    get isOverdue(){
        if(this.status === 'Complete'){
            return false;
        }
        else{
            return this.deadline < Date.now();
        }
    }
    toString(){
       let icon = '\u2731';
        if(this.status === 'Complete'){
            icon = '\u2714';
        }else if(this.isOverdue){
            icon = '\u26A0'
        }else if(this.status === 'In Progress'){
            icon = '\u219D';
        }

        return `[${icon}] ${this.title}` + (this.status !== 'Complete' ? (this.isOverdue ? '(Overdue)' : ` (deadline: ${this.deadline})`) : '');
    }


}

let date = new Date();
date.setDate(date.getDate());
let task = new Task('dakata', date);
console.log(task.toString());