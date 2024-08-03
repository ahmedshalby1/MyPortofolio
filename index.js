document.addEventListener('DOMContentLoaded', function () {
    let projectonelink = document.querySelector(".projectonelink");
    let projecttwolink = document.querySelector(".projecttwolink");
    let projectthreelink = document.querySelector(".projectthreelink");
    let projectfourlink = document.querySelector(".projectfourlink");
    let projectfivelink = document.querySelector(".projectfivelink");
    let projectsixlink = document.querySelector(".projectsixlink");
    let hire = document.querySelector(".hire");
    let talk = document.querySelector(".talk");
    let content = document.getElementById("content");

    projectonelink.onclick = function () {
        window.location.href = "https://ahmedshalby1.github.io/fa/";
    }
    projecttwolink.onclick = function () {
        window.location.href = "https://ahmedshalby1.github.io/glassmorphism-website/";
    }
    projectthreelink.onclick = function () {
        window.location.href = "https://ahmedshalby1.github.io/landing-page/";
    }
    projectfourlink.onclick = function () {
        window.location.href = "https://ahmedshalby1.github.io/Simplewebsite/";
    }
    projectfivelink.onclick = function () {
        window.location.href = "https://ahmedshalby1.github.io/calculator/";
    }
    projectsixlink.onclick = function () {
        window.location.href = "https://ahmedshalby1.github.io/shoes-store/";
    }
    hire.onclick = function () {
        window.location.href = "https://www.upwork.com/freelancers/~01a71a754611ad6082";
    }
    talk.onclick = function () {
        let newDiv = document.createElement('div');
        newDiv.innerHTML = '01026368063';
        newDiv.style.color = 'white';
        newDiv.style.padding = '10px';
        newDiv.style.marginTop = '10px';
        newDiv.style.fontSize = '30px';
      newDiv.style.position = "absolute";
      newDiv.style.top =  "-131%";
      newDiv.style.left =  "-94%";
        content.appendChild(newDiv);
    }
});

  