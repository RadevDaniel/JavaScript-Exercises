class Contact{
    constructor(firstName, lastName, phone, email){
        this.firstName = firstName;
        this.lastName = lastName;//
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

    createElement(){
        //Creating Elements
        let article = $('<article>');
        let title = $('<div>')
            .addClass('title');
        let info = $('<div class="info">')
            .css('display', 'none');
        let spanPhone = $('<span>')
            .html('&phone;')
            .text(this.phone);
        let spanEmail = $('<span>')
            .html('&#9993;')
            .text(this.email);
        let button = $('<button>')
            .html('&#8505;')
            .click(() => $(info).toggle(this));

        //AppendingElements
        title.text(this.firstName + ' ' + this.lastName);
        title.append(button);

        info.append(spanPhone);
        info.append(spanEmail);

        article.append(title);
        article.append(info);

        return article;
    }
    render(id){
        $(`#${id}`).append(this._id);
    }

}