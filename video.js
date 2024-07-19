// JavaScript for Video Modal

document.addEventListener('DOMContentLoaded', function () {
    // Video Modal
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

    // Content Modal
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

//******************************************************* */
//******************************************************* */
//******************************************************* */
//******************************************************* */

// JavaScript for Content Modal

document.addEventListener('DOMContentLoaded', function () {
    var contentModal = document.getElementById("contentModal");
    var viewElement = document.querySelector(".view-xkK51z");
    var contentClose = document.getElementById("contentClose");
    var contentFrame = document.getElementById("contentFrame");

    // Function to open the content modal
    viewElement.onclick = function() {
        contentFrame.src = "video.html"; // Set the source of the iframe to the desired page
        contentModal.style.display = "flex";
    }

    // Event listener to close the content modal
    contentClose.onclick = function() {
        contentModal.style.display = "none";
        contentFrame.src = ""; // Clear the iframe source to stop loading content when closed
    }

    // Close the modal when clicking outside the modal content
    window.onclick = function(event) {
        if (event.target === contentModal) {
            contentModal.style.display = "none";
            contentFrame.src = ""; // Clear the iframe source
        }
    }
});


// JavaScript for Audio Content Modal

document.addEventListener('DOMContentLoaded', function () {
    var audioContentModal = document.getElementById("audioContentModal");
    var openAudioContentModalButton = document.querySelector(".view-1Alani");
    var audioContentClose = document.getElementById("audioContentClose");
    var audioContentFrame = document.getElementById("audioContentFrame");

    // Function to open the audio content modal
    openAudioContentModalButton.onclick = function() {
        audioContentFrame.src = "audio.html"; // Set the source of the iframe to the desired page
        audioContentModal.style.display = "flex";
    }

    // Event listener to close the audio content modal
    audioContentClose.onclick = function() {
        audioContentModal.style.display = "none";
        audioContentFrame.src = ""; // Clear the iframe source to stop loading content when closed
    }

    // Close the modal when clicking outside the modal content
    window.onclick = function(event) {
        if (event.target === audioContentModal) {
            audioContentModal.style.display = "none";
            audioContentFrame.src = ""; // Clear the iframe source
        }
    }
});


// JavaScript for WhatsApp Messages Content Modal

document.addEventListener('DOMContentLoaded', function () {
    var whatsappContentModal = document.getElementById("whatsappContentModal");
    var openWhatsappContentModalButton = document.querySelector(".view-CiQliD");
    var whatsappContentClose = document.getElementById("whatsappContentClose");
    var whatsappContentFrame = document.getElementById("whatsappContentFrame");

    // Function to open the WhatsApp content modal
    openWhatsappContentModalButton.onclick = function() {
        whatsappContentFrame.src = "whatsapp.html"; // Set the source of the iframe to the desired page
        whatsappContentModal.style.display = "flex";
    }

    // Event listener to close the WhatsApp content modal
    whatsappContentClose.onclick = function() {
        whatsappContentModal.style.display = "none";
        whatsappContentFrame.src = ""; // Clear the iframe source to stop loading content when closed
    }

    // Close the modal when clicking outside the modal content
    window.onclick = function(event) {
        if (event.target === whatsappContentModal) {
            whatsappContentModal.style.display = "none";
            whatsappContentFrame.src = ""; // Clear the iframe source
        }
    }
});





