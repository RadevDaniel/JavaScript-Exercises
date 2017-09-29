class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;

        this._id = this.createElement();
        this.online = false;
    }

    get online(){
        return this._online;
    }
    set online(value){
        this._online = value;
        this.isOnline();
    }

    isOnline(){
        if(this.online){
            this._id.find('.title').addClass('online');
        }else{
            this._id.find('.title').removeClass('online');
        }
    }

    createElement() {
        let article = $('<article>');
        let info = $('<div class="info">')
                    .append($(`<span>&phone; ${this.phone}</span>`))
                    .append($(`<span>&#9993; ${this.email}</span>`))
                    .css('display', 'none');
        let title = $('<div class="title">').text(this.firstName + ' ' + this.lastName);
            title.append($('<button>&#8505;</button>').click(() => $(info).toggle()));

        article.append(title);
        article.append(info);

        return article;
    }

    render(id) {
        $(`#${id}`).append(this._id)

    }
}