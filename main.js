document.addEventListener('DOMContentLoaded',function() {
    const nameElement = document.querySelector("#name");
    const userName = document.querySelector("#user");
    const avatarName = document.querySelector("#avatar");
    const reposElement = document.querySelector("#repos");
    const followersElement = document.querySelector("#followers");
    const followingElement = document.querySelector("#following");
    const linkElement = document.querySelector("#link");

        fetch('https://api.github.com/users/gustavo-kzqs')
        .then(function(res){
            return res.json();
        })
        .then(function(json){
            nameElement.innerText = json.name;
            userName.innerText = json.login;
            avatarName.src = json.avatar_url;
            followersElement.innerText = json.followers;
            followingElement.innerText = json.following;
            reposElement.innerText = json.public_repos;
            linkElement.href = json.html_url;
        }) 
         .catch(function(erro){
             alert("Ocorreu um erro, tente novamente.");
         })

    
    })

//     fetch('https://api.github.com/users/MartinsDev23')
//   .then(function(json){
//     atribui os valores as vairaveis criadas acima
//   })
//   .catch(function(erro) {
//     mostra o erro
//   })
                
