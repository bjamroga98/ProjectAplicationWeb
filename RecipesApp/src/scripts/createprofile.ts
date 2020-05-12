class createprofile{
    name: string;
    email: string;
    password: string;
    loginbutton: void;

    constructor(){
        this.loginbutton = (<HTMLInputElement>document.getElementById('buttonlogin')).addEventListener('click',this.getData)
    }

    private Register(): void{
        
    }
    private getData=()=>{
        this.name = (<HTMLInputElement>document.getElementById("Nameid")).value;
        this.email = (<HTMLInputElement>document.getElementById("Email")).value;
        this.password = (<HTMLInputElement>document.getElementById("Password")).value;
        this.Register();
    }

}

