class QueryBulder{
    seion;

    constructor(method='GET'){
        this.xhr = new XMLHttpRequest();
        this.method = method;
        this.async = true;
        
    }

    comitPages(){
        let authSection = document.querySelector('.authSection');
        let chatPage = document.querySelector('.chatPage');
        let loginPage = document.querySelector('.login-section');
        let signupPage = document.querySelector('.signup-section');
        let connectLink = document.querySelector('.connectLink');
        let signupLink = document.querySelector('.signupLink');
        let tabs = document.querySelectorAll('.tab');
        let bl;
        

        this.xhr.onreadystatechange = function(){
            if(this.readyState == 4 && this.status ==200){
                bl='vraie';
               if(this.response == "no existing session"){
                authSection.style.display = 'fex';
                chatPage.style.display = 'none';
                connectLink.addEventListener('click',() =>{
                    signupPage.style.display = 'none';
                    loginPage.style.display = 'flex';
                })
                signupLink.addEventListener('click',() =>{
                    loginPage.style.display = 'none';
                    signupPage.style.display = 'flex';
                })
            
                authSection.style.display = "flex";
                chatPage.style.display = "none"
               }
            }
            
        }
        this.xhr.open(this.method,'../api/index.php?p=get-session',this.async);
        this.xhr.send();
        console.log(bl);
   
    }

}

var query = new QueryBulder('GET');
query.comitPages();