class Contact{
    constructor(firstName, lastName, phone, email){
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
    isOnline() {
        if (this.online) {
            this._id.find('.title').addClass('online');
        } else {
            this._id.find('.title').removeClass('online');
        }
    }

    createElement(){
        let article = $('<article>');
        let title = $('<div class="title">').text(this.firstName + ' ' + this.lastName)
                    .append('<button>&#8505;</button>').click(() =>$(info).toggle());
        let info = $('<div class="info">').hide();
        let spanPhone = $(`<span>&phone; ${this.phone}</span>`).appendTo(info);
        let spanEmail = $(`<span>&#9993; ${this.email}</span>`).appendTo(info);
        article.append(title);
        article.append(info);

        return article;
    }

    render(id){
        $(`#${id}`).append(this._id);
    }
}