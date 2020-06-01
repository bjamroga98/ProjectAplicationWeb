export default class contact {
     _email: string;
     _name: string;
	 _message: string;

	 constructor(email: string, name: string, message: string) {
        this._email = email;
        this._name = name;
		this._message = message;

	}

	 Contact() : HTMLElement {
		let p : HTMLElement = document.createElement("p");
        p.innerHTML = this._email;
        p.onclick = () => this.messageList();
		p.setAttribute("class", "item");
		return p;
	}

	 messageList() : void {
		let messageList = document.getElementById("message-list");
		let messages = this._message.split(",");
		
		messageList.innerHTML = "";
		for (let message of messages) {
			if(message === "") { continue }; 
			let p = document.createElement("p");
			p.innerHTML = message;
			p.setAttribute("class", "item");
			messageList.appendChild(p);
		}

		
    }
}

