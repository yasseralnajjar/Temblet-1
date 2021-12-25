// check If There's Local Storage Color Option
let mainColors = localStorage.getItem("color-option");

if (mainColors !== null) {

    // console.log("اللون اللي في اللوكل استوريج هو");
    // console.log(localStorage.getItem("color-option"));
    document.documentElement.style.setProperty('--main-color', mainColors);

    // Remove Active Class From All Colors List Item
    document.querySelectorAll(".color-list li").forEach(element => {
        element.classList.remove("active");

        // Add Active Class On Element With Data-color === Local Storage Itme
        if (element.dataset.color === mainColors) {

            element.classList.add("active");

        }
    });
}

// Random Background Option
let backgroundOption = true;

//Variable To Control The Background Interval
let backgroundInterval;

// // check If There's Local Storage Random Background Option
// let backgroundLocalItem = localStorage.getItem("background-option");

// //check If Random Background Local Storage  Is Not Empty

// if (backgroundLocalItem !== null) {


//     if (backgroundLocalItem === 'true') {

//         backgroundLocalItem = true;
//     } else {
//         backgroundLocalItem = false;
//     }

//     console.log(backgroundLocalItem);


// };







// Toggle Spin Class On Icon
document.querySelector(".toogle-settengs .control").onclick = function() {

    // Toggle Class Fa-spin For Rotation on Self
    this.classList.toggle("fa-spin");


    // Toggle Calss  Open Main Settengs Box
    document.querySelector(".settengs-box").classList.toggle("open");
}

// Switch Colors
const colorLi = document.querySelectorAll(".color-list li");

// Loop On All List Items
colorLi.forEach(li => {
    // Click On Every List Items
    li.addEventListener("click", (e) => {
        console.log(e.target.dataset.color);
        // Set Color On Root
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

        // Set color On Local Storage 
        localStorage.setItem("color-option", e.target.dataset.color);

        // // Remove Active Class From All Childrens
        // e.target.parentElement.querySelectorAll(".active").forEach(element => {
        //     element.classList.remove("active");
        // });
        // //Add Active Class On Self
        // e.target.classList.add("active");
        handileActive(e)
    });
});



// Switch Random Background Option
const randomBackEl = document.querySelectorAll(".random-backgrounds span");

// Loop On All Span
randomBackEl.forEach(span => {

    // Click On Every Span
    span.addEventListener("click", (e) => {

        // // Remove Active Class From All Childrens
        // e.target.parentElement.querySelectorAll(".active").forEach(element => {

        //     element.classList.remove("active");

        // });
        // //Add Active Class On Self
        // e.target.classList.add("active");
        handileActive(e)




        if (e.target.dataset.background === "yes") {

            backgroundOption = true;
            randomizeImg();


        } else {

            backgroundOption = false;

            clearInterval(backgroundInterval);
        }
    });
});



//Select Landnige Page Element
let lindingPage = document.querySelector(".landing-page");

// Get Array Of Img
let imgsArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"];


//Function To Randomize Option
function randomizeImg() {
    if (backgroundOption === true) {

        // Get Random Number
        backgroundInterval = setInterval(() => {
            let ranNumber = Math.floor(Math.random() * imgsArray.length);

            // Change Background Image Url
            lindingPage.style.backgroundImage = 'url("imges/' + imgsArray[ranNumber] + '")';

        }, 2000);

    }
}
randomizeImg();



// Select Skills Selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function() {

    // Skills Offset Top
    let skillsOffsetTop = ourSkills.offsetTop;

    // Skills Outer Height
    let skillsOuterHeight = ourSkills.offsetHeight;

    // Window Height
    let windowHeight = this.innerHeight;

    // Window ScrollTop
    let windowScrollTop = this.pageYOffset;

    if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {

        let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

        allSkills.forEach(skill => {

            skill.style.width = skill.dataset.progress;

        });

    }

};

//create Popup With The img
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {
    img.addEventListener("click", (e) => {

        // create overLay Element
        let overLay = document.createElement("div");

        // Add Class Name With overLay
        overLay.className = "Popup-overLay";

        // Append To The Body
        document.body.appendChild(overLay);

        // Create Popup Box
        let popupBox = document.createElement("div");
        // Add Class Name With Popup Box
        popupBox.className = "popup-box";

        //  Head Text 
        if (img.alt !== null) {
            // Create Headding
            let imgHeadding = document.createElement("h2");
            // Add Class Name With  imgHeadding
            imgHeadding.className = "img-headding";

            // Create textNode From Headding
            let textHead = document.createTextNode(img.alt);
            // Append Text Head To img Hedding
            imgHeadding.appendChild(textHead);
            popupBox.appendChild(imgHeadding);
        }
        // Create img
        let popupImg = document.createElement("img");
        popupImg.src = img.src;

        // Add img To Popup Box 
        popupBox.appendChild(popupImg);

        // Add Popup Box To Body
        document.body.appendChild(popupBox);

        // Create Close Button 
        let closeButton = document.createElement("span");

        // Add Class Name To closeButton
        closeButton.className = "close-button";

        // create TextNode To Close Button
        let closeButtonText = document.createTextNode("X");

        // Append Close Button Text To Close Button
        closeButton.appendChild(closeButtonText);

        // Append  Close Button To popupBox

        popupBox.appendChild(closeButton);

    })
})

document.addEventListener("click", function(e) {
    if (e.target.className == "close-button") {
        // Remove The Current Popup
        e.target.parentNode.remove();

        // Remove OverLay
        document.querySelector(".Popup-overLay").remove();
    }

})


// Select All Bullets

let allBullets = document.querySelectorAll(".nav-bullets .bullet");
// allBullets.forEach(bullet => {
//     bullet.addEventListener("click", function(e) {
//         document.querySelector(e.target.dataset.section).scrollIntoView({

//             behavior: 'smooth'
//         })
//     })
// });

let allLinks = document.querySelectorAll(".links a");
// allLinks.forEach(link => {
//     link.addEventListener("click", function(e) {
//         e.preventDefault();
//         document.querySelector(e.target.dataset.section).scrollIntoView({

//             behavior: 'smooth'
//         })
//     })
// });


function scrollAnyWhare(elements) {
    elements.forEach(ele => {
        ele.addEventListener("click", function(e) {
            e.preventDefault();

            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: 'smooth'
            })
        })
    });
}
scrollAnyWhare(allLinks);
scrollAnyWhare(allBullets);

// Handile Active State
function handileActive(ev) {
    // Remove Active Class From All Childrens
    ev.target.parentElement.querySelectorAll(".active").forEach(element => {
        element.classList.remove("active");
    });
    //Add Active Class On Self
    ev.target.classList.add("active");
}

let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletLocalItem = localStorage.getItem("bullets_option");

if (bulletLocalItem !== null) {
    bulletsSpan.forEach(span => {
        span.classList.remove("active");
    })
    if (bulletLocalItem === 'block') {
        document.querySelector(".bullets-option .yes").classList.add("active");
        bulletsContainer.style.display = "block";
    } else {
        bulletsContainer.style.display = "none";
        document.querySelector(".bullets-option .no").classList.add("active");
    }
}

bulletsSpan.forEach(span => {

    span.addEventListener("click", (e) => {

        if (span.dataset.display === 'show') {

            bulletsContainer.style.display = "block";

            localStorage.setItem("bullets_option", 'block')

        } else {

            bulletsContainer.style.display = "none";
            localStorage.setItem("bullets_option", 'none')
        }
        handileActive(e)
    })
})

// Reset Button
document.querySelector(".reset-options").onclick = function() {

    // localStorage.clear();  // هتمسح اي حاجه مخزنه في الموقع 

    localStorage.removeItem("color-option");
    localStorage.removeItem("bullets_option");

    // Reload Window
    window.location.reload();
}

let toggleBtn = document.querySelector(".toggle-menu");

let theLinks = document.querySelector(".links");

toggleBtn.onclick = function(e) {

    // Stop Propagation
    e.stopPropagation();

    // Toggle Class "menu-active" on Button
    this.classList.toggle("menu-active");

    // Toggle Class "open" on Links
    theLinks.classList.toggle("open");

}

// Click AnyWhere OutSide Menu And Toggle Button

document.addEventListener("click", (e) => {

    if (e.target !== toggleBtn) {

        // Check If Menu Is Opened
        if (theLinks.classList.contains("open")) {
            // Toggle Class "menu-active" on Button
            toggleBtn.classList.toggle("menu-active");

            // Toggle Class "open" on Links
            theLinks.classList.toggle("open");
        }
    }
})

theLinks.onclick = function(e) {
    e.stopPropagation();
}