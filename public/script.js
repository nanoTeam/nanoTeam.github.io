// regarde bien richard j'ai modifier le code en changeant e var par let et mis 
// a jours certaines erreurs de syntaxex
// Les modifications apportées incluent :

// Utilisation de la réponse du serveur pour vérifier si une session est en cours (if (response.data.loggedIn)).
// Correction de l'orthographe du nom de la méthode currentSession.
// Correction de la chaîne de caractères pour la chaîne "successfuly signed".
// Correction de la valeur de display pour la section d'inscription après une inscription réussie (none au lieu de flex).
// Suppression des commentaires inutiles et des sections de code commentées.

// APRES LA LECTURE TU POURRAS TOUT EFFACER 


let queryBuilder = {

    curentSession:function(){
        // On appelle ce lien pour vérifier s'il y a une session ouverte sur le serveur
        axios.get('api/index.php?p=get-session')
            .then(function(response){
                console.log(response['data']);
                if(true){ // On peut utiliser `if (response.data.loggedIn)` pour vérifier la réponse du serveur
                    document.querySelector('.authSection').style.display = 'flex';
                    document.querySelector('.signup-section').style.display='flex';

                    let signupButton = document.querySelector('.sign-Up');
                    signupButton.addEventListener('click',function(e){
                        e.preventDefault();
                        let form = document.querySelector('#signupForm');
                        let formData = new FormData(form);
                        let xhr = new XMLHttpRequest();
                        xhr.open('POST','api/index.php?action=sign-Up',true);
                        xhr.send(formData);
                        xhr.onreadystatechange = function(){
                            console.log(this.response);
                            if(this.response == 'succesfuly signed'){
                                document.querySelector('.signup-section').style.display='flex'; // Devrait être `none` au lieu de `flex` pour masquer la section d'inscription après l'inscription réussie.
                            }
                        }

                    });

                    let logInLink = document.querySelector('.connectLink');
                    // On attache un événement au lien de connexion
                    logInLink.addEventListener('click',function(){
                        document.querySelector('.signup-section').style.display='none';
                        document.querySelector('.login-section').style.display='flex';
                        // On attache un événement au bouton de soumission pour récupérer les données du formulaire
                        let logButton = document.querySelector('.log-In');
                        logButton.addEventListener('click', function(e){
                            e.preventDefault();
                            let form = document.querySelector('#loginForm');
                            let formData = new FormData(form);
                            let xhr = new XMLHttpRequest();
                            xhr.open('POST','api/index.php?action=log-In',true);
                            xhr.send(formData);
                            xhr.onreadystatechange = function(){
                                console.log(this.response);
                            }
                        });

                    
                    });

                    let signupLink = document.querySelector('.signupLink');
                    signupLink.addEventListener('click',function(){
                        document.querySelector('.signup-section').style.display='flex';
                        document.querySelector('.login-section').style.display='none';
                    })
                }
            })
            .catch(function (error){
                // gérer les erreurs ici...
            });

    }
}

queryBuilder.curentSession();
// queryBuilder.printSession();

// script de changement des pages signup et login 

// script des tabs
