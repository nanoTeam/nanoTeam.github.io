
var queryBulder = {
    
    
    curentSession:function(){
        // On appel ce lien pour verifier si il ya une session ouvert sur serveur
        // axios.get('api/index.php?p=get-session')
        //     .then(function(response){
        //         console.log(response['data']);
                if(true){
                    // document.querySelector('.authSection').style.display = 'flex';
                    // document.querySelector('.signup-section').style.display='flex';

                    var signupButton = document.querySelector('.sign-Up');
                    signupButton.addEventListener('click',function(e){
                        e.preventDefault();
                        var form = document.querySelector('#signupForm');
                        var formData = new FormData(form);
                        var xhr = new XMLHttpRequest();
                            xhr.open('POST','api/index.php?action=sign-Up',true);
                            xhr.send(formData);
                            xhr.onreadystatechange = function(){
                                console.log(this.response);
                                if(this.response == 'succesfuly signed'){
                                    document.querySelector('.signup-section').style.display='flex';

                                }
                            }

                    });


                    var logInLink = document.querySelector('.connectLink');
                    //on attache un evenement au lien de connection
                    logInLink.addEventListener('click',function(){
                        document.querySelector('.signup-section').style.display='none';
                        document.querySelector('.login-section').style.display='flex';
                        //On attache un evenement au boutton submite pour recuperer les donnees de formulaires 
                        var logButton = document.querySelector('.log-In');
                        logButton.addEventListener('click', function(e){
                            e.preventDefault();
                            var form = document.querySelector('#loginForm');
                            var formData = new FormData(form);
                            //console.log([...formData]);
                            // axios.post('api/index.php?action=log-In',formData)
                            //     .then(function(response){
                            //         console.log(response['header']);
                            //     })
                            //     .catch(function(error){
                            //         // gérer les erreurs ici...
                            //     })
                            var xhr = new XMLHttpRequest();
                            xhr.open('POST','api/index.php?action=log-In',true);
                            xhr.send(formData);
                            xhr.onreadystatechange = function(){
                                console.log(this.response);
                            }
                        });

                    
                    });



                    var signupLink = document.querySelector('.signupLink');
                    signupLink.addEventListener('click',function(){
                        document.querySelector('.signup-section').style.display='flex';
                        document.querySelector('.login-section').style.display='none';
                    })
                }
            // })
            // .catch(function (error){
            //     // gérer les erreurs ici...
            // });

    }
    
    


}

queryBulder.curentSession();
// queryBulder.printSession();






// script de changement des pages signup et login 

// script de changement des pages signup et login 
// script des tabs 

// script des tabs 