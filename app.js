//
//
//

function contact(event) {
    event.preventDefault();
    var hideElements = document.getElementsByClassName("hide");
  
    var loading = document.querySelector(".modal__overlay--loading");
    var success = document.querySelector(".modal__overlay--success");
  
    // var hideElements = document.getElementsByClassName("hide");
  
    loading.classList.add("modal__overlay--visible");
  
    for (var i = 0; i < hideElements.length; i++) {
      hideElements[i].style.display = "none";
    }
  
    emailjs
      .sendForm(
        "service_6p22tpd",
        "template_rrosfjr",
        event.target,
        "vjPbQBxuwuYwq5kLv"
      )
      .then(() => {
        loading.classList.remove("modal__overlay--visible");
        document.querySelector(".modal__overlay--success").style.display = "flex";
        document.querySelector(".fa-times").style.color = "#16262e";
      })
      .catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
          "The email service is temoporarily unavailable. Please contact me directly on abdorruhman.abdelwahed@gmail.com"
        );
      });
  }
  
  let isModalOpen = false;
  function toggleModalOn() {
    if (isModalOpen) {
      isModalOpen = false;
      return document.body.classList.remove("modal__open");
    }
    isModalOpen = true;
    document.body.classList += " modal__open";
  }
  
  function normalAtClose() {
    var hideElements = document.getElementsByClassName("hide");
  
    document.querySelector(".modal__overlay--success").style.display = "none"
    for (var i = 0; i < hideElements.length; i++) {
      hideElements[i].style.display = "block";
    }
    document.querySelector(".fa-times").style.color = "#d6eeff";
  }
  
  function toggleTheme() {
    document.getElementById("body").classList.toggle("dark");
  }
  
  function toggleArabic() {
    document.getElementById("arabic__secondary").classList.toggle("arabic__toggle");
  }
  function toggleEnglish()  {
    document.getElementById("english__secondary").classList.toggle("english__toggle");
  }