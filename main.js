$(document).ready(function(){
    const endpoint = "https://api.github.com/users/gustavo-kzqs";
    const elementName = document.querySelector('#name');
    const userName = document.querySelector('#user');
    const avatarName = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

        $.ajax(endpoint).done(function(resposta){
            console.log(resposta)
            elementName.innerText = resposta.name
            userName.innerText = `${resposta.login}`
            avatarName.src = resposta.avatar_url
            reposElement.innerText = resposta.public_repos
            followersElement.innerText = resposta.followers
            followingElement.innerText = resposta.following
            linkElement.href = resposta.html_url

        })

        // fetch('https://api.github.com/users/gustavo-kzqs')
        //         .then(function(resposta){
        //                 return resposta.json();
        //         })
        //         .then(function(json){
        //             elementName.innerText = json.name;
        //             userName.innerText = json.login;
        //             avatarName.src = json.avatar_url;
        //             followingElement.innerText = json.following;
        //             followersElement.innerText = json.followers;
        //             reposElement.innerText = json.public_repos;
        //             linkElement.href = json.html_url;
                })
