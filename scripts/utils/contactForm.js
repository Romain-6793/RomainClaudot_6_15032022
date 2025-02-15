
const sendButton = document.querySelectorAll(".send_button");
const modalbg = document.getElementById("contact_modal");
const modalbg2 = document.getElementById("confirm_modal");
const close1 = document.querySelectorAll(".close");
const close2 = document.querySelectorAll(".close2");
const modalButton = document.querySelectorAll(".contact_button");

document.querySelector(".close").focus();


modalButton.forEach((button) => button.addEventListener("click", displayModal));
sendButton.forEach((button) => button.addEventListener("click", launchSubmit));
close1.forEach((button) => button.addEventListener("click", closeModal));
close2.forEach((button) => button.addEventListener("click", () => {
    document.forms[0].reset();
    closeModal2();
}))

let rightFirstName;
let rightLastName;
let rightMail;
let rightMessage;

function displayModal() {
    const modal = document.getElementById("contact_modal");
    const gallery = document.querySelector(".gallery_section")
    const photoButton = document.querySelector(".photo_button")
    const likingButton = document.querySelector(".liking_button")
    modal.style.display = "block";
    document.querySelector(".close").focus();
    modal.setAttribute("aria-hidden", "false")
    gallery.setAttribute("aria-hidden", "true")
    photoButton.setAttribute("aria-hidden", "true")
    likingButton.setAttribute("aria-hidden", "true")
    photoButton.removeAttribute("tabindex")
    likingButton.removeAttribute("tabindex")


    const likesPopup = document.getElementById("likes_popup");
    likesPopup.style.display = "none";
    const customSelect = document.querySelector(".custom-select");
    customSelect.style.opacity = 0.9;

}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    const gallery = document.querySelector(".gallery_section")
    const photoButton = document.querySelector(".photo_button")
    const likingButton = document.querySelector(".liking_button")
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true")
    document.removeEventListener("keyup", onKeyboard)
    const likesPopup = document.getElementById("likes_popup");
    likesPopup.style.display = "block";
    const customSelect = document.querySelector(".custom-select");
    customSelect.style.opacity = 1;
    gallery.setAttribute("aria-hidden", "false")
    photoButton.setAttribute("aria-hidden", "false")
    likingButton.setAttribute("aria-hidden", "false")
    photoButton.setAttribute("tabindex", "0")
    likingButton.setAttribute("tabindex", "0")
}

function closeModal2() {
    const modal = document.getElementById("confirm_modal");
    const gallery = document.querySelector(".gallery_section")
    const photoButton = document.querySelector(".photo_button")
    const likingButton = document.querySelector(".liking_button")
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true")
    const likesPopup = document.getElementById("likes_popup");
    likesPopup.style.display = "block";
    const customSelect = document.querySelector(".custom-select");
    customSelect.style.opacity = 1;
    gallery.setAttribute("aria-hidden", "false")
    photoButton.setAttribute("aria-hidden", "false")
    likingButton.setAttribute("aria-hidden", "false")
    photoButton.setAttribute("tabindex", "0")
    likingButton.setAttribute("tabindex", "0")
}

function isMyFirstNameTrue(myFirstName) {
    if ((myFirstName.length >= 2) && (!myFirstName.match(/^[\d]+$/))) {
        rightFirstName = true;
        document.getElementById("formData1").setAttribute("data-error", "false");
        document.getElementById("formData1").setAttribute("data-error-visible", "false");
    } else {
        rightFirstName = false;
        document.getElementById("formData1").setAttribute("data-error", "Veuillez saisir un prénom valide");
        document.getElementById("formData1").setAttribute("data-error-visible", "true");
    }

}

function isMyLastNameTrue(myLastName) {
    if ((myLastName.length >= 2) && (!myLastName.match(/^[\d]+$/))) {
        rightLastName = true;
        document.getElementById("formData2").setAttribute("data-error", "false");
        document.getElementById("formData2").setAttribute("data-error-visible", "false");
    } else {
        rightLastName = false;
        document.getElementById("formData2").setAttribute("data-error", "Veuillez saisir un nom valide");
        document.getElementById("formData2").setAttribute("data-error-visible", "true");
    }
}

function isMailTrue(myMail) {
    if (myMail.match(/^[a-zA-Z0-9_+.]+@[a-zA-Z0-9]+.[a-z]+$/)) {
        rightMail = true;
        document.getElementById("formData3").setAttribute("data-error", "false");
        document.getElementById("formData3").setAttribute("data-error-visible", "false");
    } else {
        rightMail = false;
        document.getElementById("formData3").setAttribute("data-error", "Veuillez saisir une adresse e-mail valide");
        document.getElementById("formData3").setAttribute("data-error-visible", "true");
    }

}

function isMyMessageCorrect(myMessage) {
    if (myMessage.length >= 2) {
        rightMessage = true;
        document.getElementById("formData4").setAttribute("data-error", "false");
        document.getElementById("formData4").setAttribute("data-error-visible", "false");
    } else {
        rightMessage = false;
        document.getElementById("formData4").setAttribute("data-error", "Votre message doit contenir au moins deux caractères");
        document.getElementById("formData4").setAttribute("data-error-visible", "true");
    }

}


function launchSubmit(e) {
    e.preventDefault();
    const firstNameData = document.querySelector(".firstname").value;
    isMyFirstNameTrue(firstNameData);
    const lastNameData = document.querySelector(".lastname").value;
    isMyLastNameTrue(lastNameData);
    const mailData = document.querySelector(".mailadress").value;
    isMailTrue(mailData);
    const messageData = document.querySelector(".input_message").value;
    isMyMessageCorrect(messageData);

    if ((rightFirstName) && (rightLastName) && (rightMail) && (rightMessage)) {
        console.log("prénom:", firstNameData, "nom:", lastNameData, "adresse mail:", mailData, "message:", messageData)
        modalbg.style.display = "none";
        modalbg.setAttribute("aria-hidden", "true")
        modalbg2.style.display = "block";
        document.querySelector(".close2").focus();
        modalbg2.setAttribute("aria-hidden", "false")

    }

}

function onKeyboard(e) {
    if (e.key === "Escape") {
        closeModal()
    }

}

function onKeyboard2(e) {
    if (e.key === "Escape") {
        closeModal2()
    }

}

function watchFocus(e) {
    resetFocusModal.addEventListener("keyup", resetFocus)
    if (e.key === "Tabulation") {
        resetFocus()
    }
}

function watchFocus2(e) {
    resetFocusModal2.addEventListener("keyup", resetFocus2)
    if (e.key === "Tabulation") {
        resetFocus2()
    }
}

function resetFocus() {
    document.querySelector(".close").focus();
}

function resetFocus2() {
    document.querySelector(".close2").focus();
}


document.addEventListener("keyup", onKeyboard)
document.addEventListener("keyup", onKeyboard2)
document.addEventListener("keyup", watchFocus)
document.addEventListener("keyup", watchFocus2)

const resetFocusModal = document.querySelector(".resetFocus_modal")
const resetFocusModal2 = document.querySelector(".resetFocus_modal2")
