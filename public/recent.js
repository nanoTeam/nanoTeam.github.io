// ICI J'UTIISE DES OBJETS JS POUR GENERER DES CONVERSATIONS DYNAMIQUEMENT
// AVEC CE MOYEN ON POURRA FACILEMMENT INTEGRER DU JSON 
let mainList = document.querySelector(".conv-list")
let convDiv = document.querySelector(".conv-box");
let convElement = [
    {
    img:"/public/libs/img/pic.png",
    name:"kabeya",
    time:"14:30",
    msgNum:1,
    recentMsg:"Bonjour bro"
    },
    {
    img:"/public/profile/1.jpg",
    name:"jeanne",
    time:"14:55",
    msgNum:2,
    recentMsg:"la semaine prochaine pour notre reunion"
    },
    {
    img:"/public/profile/6.jpg",
    name:"jordan",
    time:"16:30",
    msgNum:6,
    recentMsg:"Ta pote rebecca"
    },
    {
    img:"/public/profile/2.jpg",
    name:"elisabeth",
    time:"16:30",
    msgNum:1,
    recentMsg:"Ta pote rebecca"
    },
    {
    img:"/public/profile/3.jpg",
    name:"joannah",
    time:"16:30",
    msgNum:10,
    recentMsg:"Ta pote rebecca"
    },
    {
    img:"/public/profile/4.jpg",
    name:"paulin",
    time:"16:30",
    msgNum:"✔" ,
    recentMsg:"Ta pote rebecca"
    },
    {
    img:"/public/profile/5.jpg",
    name:"SK GANG🤑" ,
    time:"16:30",
    msgNum:6,
    recentMsg:"Ta pote rebecca"
    },
    {
    img:"/public/profile/2.jpg",
    name:"jordan",
    time:"16:30",
    msgNum:6,
    recentMsg:"Ta pote rebecca"
    },
    {
    img:"/public/profile/6.jpg",
    name:"jordan",
    time:"16:30",
    msgNum:6,
    recentMsg:"Ta pote rebecca"
    },
];
convElement.forEach((conversation)=>{
    let li = document.createElement("li");
    li.innerHTML = `
    <div class="conv-item">
        <div class="left">
            <div class="img">
                <img src="${conversation.img}" alt="${conversation.name}'s profile picture" />
            </div>
            <div class="textes">
            <h4>${conversation.name}</h4>
            <p>${conversation.recentMsg}</p>
            </div>
        </div>
        <div class="right">
        <h5>${conversation.time}</h5>
        <p>${conversation.msgNum}</p>
        </div>
    </div>
    `;
    mainList.append(li)
})
