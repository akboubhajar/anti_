// JavaScript for Video Modal

document.addEventListener('DOMContentLoaded', function () {
    var videoModal = document.getElementById("videoModal");
    var openVideoModalButton = document.getElementById("openVideoModal");
    var videoClose = document.getElementById("videoClose");
    var video = document.getElementById("myVideo");

    openVideoModalButton.onclick = function() {
        videoModal.style.display = "flex";
    }

    videoClose.onclick = function() {
        if (!video.paused) {
            video.pause();
        }
        videoModal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target === videoModal) {
            videoModal.style.display = "none";
        }
    }

    video.addEventListener('ended', function () {
        videoModal.style.display = 'none';
    });

    var contentModal = document.getElementById("contentModal");
    var openContentModalButton = document.getElementById("openContentModal");
    var contentClose = document.getElementById("contentClose");

    openContentModalButton.onclick = function() {
        contentModal.style.display = "flex";
    }

    contentClose.onclick = function() {
        contentModal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target === contentModal) {
            contentModal.style.display = "none";
        }
    }
});

// JavaScript for Content Modal

document.addEventListener('DOMContentLoaded', function () {
    var contentModal = document.getElementById("contentModal");
    var viewElement = document.querySelector(".view-xkK51z");
    var contentClose = document.getElementById("contentClose");
    var contentFrame = document.getElementById("contentFrame");

    viewElement.onclick = function() {
        contentFrame.src = "video.html"; 
        contentModal.style.display = "flex";
    }

    contentClose.onclick = function() {
        contentModal.style.display = "none";
        contentFrame.src = ""; 
    }

    window.onclick = function(event) {
        if (event.target === contentModal) {
            contentModal.style.display = "none";
            contentFrame.src = "";
        }
    }
});


// JavaScript for Audio Content Modal

document.addEventListener('DOMContentLoaded', function () {
    var audioContentModal = document.getElementById("audioContentModal");
    var openAudioContentModalButton = document.querySelector(".view-1Alani");
    var audioContentClose = document.getElementById("audioContentClose");
    var audioContentFrame = document.getElementById("audioContentFrame");

    
    openAudioContentModalButton.onclick = function() {
        audioContentFrame.src = "audio.html"; 
        audioContentModal.style.display = "flex";
    }

    audioContentClose.onclick = function() {
        audioContentModal.style.display = "none";
        audioContentFrame.src = ""; 
    }

    window.onclick = function(event) {
        if (event.target === audioContentModal) {
            audioContentModal.style.display = "none";
            audioContentFrame.src = ""; 
        }
    }
});


// JavaScript for Whatsapp Content Modal

document.addEventListener('DOMContentLoaded', function () {
    var whatsappContentModal = document.getElementById("whatsappContentModal");
    var openWhatsappContentModalButton = document.querySelector(".view-CiQliD");
    var whatsappContentClose = document.getElementById("whatsappContentClose");
    var whatsappContentFrame = document.getElementById("whatsappContentFrame");

    openWhatsappContentModalButton.onclick = function() {
        whatsappContentFrame.src = "whatsapp.html"; 
        whatsappContentModal.style.display = "flex";
    }

    whatsappContentClose.onclick = function() {
        whatsappContentModal.style.display = "none";
        whatsappContentFrame.src = ""; 
    }

    window.onclick = function(event) {
        if (event.target === whatsappContentModal) {
            whatsappContentModal.style.display = "none";
            whatsappContentFrame.src = ""; 
        }
    }
});





