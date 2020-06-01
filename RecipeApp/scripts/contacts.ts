import contact from "./contact";
class contacts {

	 _contacts: contact[];

	constructor() {
		document.getElementById("send").addEventListener("click", this.sendContact.bind(this));
		this._contacts = [];
		this.LocalStorage();
		this.view(true);
	}

	 sendContact(e : Event) {
		e.preventDefault();
        let emailElem: any = document.getElementById("email");
        let nameElem: any = document.getElementById("name");
		let messageElem: any = document.getElementById("message");
		let contacte: contact= new contact(emailElem.value,nameElem.value, messageElem.value);

		this._contacts.push(contacte);
		this.local(this._contacts);
		this.view(false, contacte);

        emailElem.value = "";
        nameElem.value="";
		messageElem.value = "";
		
	}
	 LocalStorage() {
		let local: any = localStorage.getItem("contact");
		local = JSON.parse(local);

		if( !local ) { return; }

		for(let contacte of local){
			this._contacts.push(new contact(contacte._email,contacte._name, contacte._message));
		}
	}

	 local = (contact: contact[]) : void => {
		localStorage.setItem( "contact", JSON.stringify(contact));
	}

	
	 view(initial: boolean, contacte?: contact) {
		let table : HTMLElement = document.getElementById("email-list");
		if(initial){
			for(let contacte of this._contacts)
				table.appendChild(contacte.Contact());
		} else {
			table.appendChild(contacte.Contact());
		}
	}
}

 new contacts();