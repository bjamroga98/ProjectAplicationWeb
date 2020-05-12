class createprofile {
    constructor() {
        this.getData = () => {
            this.name = document.getElementById("Nameid").value;
            this.email = document.getElementById("Email").value;
            this.password = document.getElementById("Password").value;
            this.Register();
        };
        this.loginbutton = document.getElementById('buttonlogin').addEventListener('click', this.getData);
    }
    Register() {
    }
}
//# sourceMappingURL=createprofile.js.map