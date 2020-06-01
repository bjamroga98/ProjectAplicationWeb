var contact = /** @class */ (function () {
    function contact(email,name, message) {
        this._email = email;
        this._name = name;
        this._message = message;
        
    }
    contact.prototype.Contact = function () {
        var _this = this;
        var p = document.createElement("p");
        p.innerHTML = this._email;
        p.onclick = function () { return _this.messageList(); };
        p.setAttribute("class", "item");
        return p;
    };
    
    contact.prototype.messageList = function () {
        var messageList = document.getElementById("message-list");
        var messages = this._message.split(",");
        messageList.innerHTML = "";
        for (var _i = 0, message_1 = messages; _i < message_1.length; _i++) {
            var message = message_1[_i];
            if (message === "") {
                continue;
            }
            ;
            var p = document.createElement("p");
            p.innerHTML = message;
            p.setAttribute("class", "item");
            messageList.appendChild(p);
        }
        
    };
    return contact;
    
   
}());
var contacts = /** @class */ (function () {
    function contacts() {
        
        this.local = function (contact) {
            localStorage.setItem("contact", JSON.stringify(contact));
        };
        document.getElementById("send").addEventListener("click", this.sendContact.bind(this));
        this._contacts = [];
        this.LocalStorage();
        this.view(true);
    }
    
    contacts.prototype.sendContact = function (e) {
        e.preventDefault();
        var emailElem = document.getElementById("email");
        let nameElem = document.getElementById("name");
        var messageElem = document.getElementById("message");
        var contacte = new contact(emailElem.value,nameElem.value, messageElem.value);
        this._contacts.push(contacte);
        this.local(this._contacts);
        this.view(false, contacte);
        emailElem.value = "";
        nameElem.value="";
        messageElem.value = "";
    };
    contacts.prototype.LocalStorage = function () {
        var local = localStorage.getItem("contact");
        local = JSON.parse(local);
        if (!local) {
            return;
        }
        for (var _i = 0, local_1 = local; _i < local_1.length; _i++) {
            var contacte = local_1[_i];
            this._contacts.push(new contact(contacte._email,contacte._name, contacte._message));
        }
    };
    contacts.prototype.view = function (initial, contacte) {
        var table = document.getElementById("email-list");
        if (initial) {
            for (var _i = 0, _a = this._contacts; _i < _a.length; _i++) {
                var contacte_1 = _a[_i];
                table.appendChild(contacte_1.Contact());
            }
        }
        else {
            table.appendChild(contacte.Contact());
        }
    };
    return contacts;
}());
 new contacts();