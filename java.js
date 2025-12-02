// Function to handle the "Registration form" button click
function Form() {
    // Define the URL for the Google Form
    var formUrl = 'https://forms.gle/Ne55AAnqrTPNCJJt9';
    
    // Open the URL in a new browser tab/window
    window.open(formUrl, '_blank');
}

// Function to go back to the main page (assuming web.html is your main page)
function ima() {
     window.location.href ='index.html';
}

// Function to go to the second page (assuming web2.html is the registration process page)
function page2() {
     window.location.href ='web2.html';
}
function page3() {
     window.location.href ='web3.html';

}
document.addEventListener('DOMContentLoaded', () => {

    // ------------------------------------------------
    // Animation Logic using Intersection Observer
    // ------------------------------------------------

    // Select all elements that we want to animate (sections of content)
    const sectionsToAnimate = document.querySelectorAll(
        '.main-title-section, .image-section, .explanation-section, .action-buttons-section, .social-media-buttons'
    );

    // Options for the Intersection Observer
    const observerOptions = {
        root: null, // observe within the viewport
        rootMargin: '0px',
        threshold: 0.1 // animation triggers when 10% of the element is visible
    };

    // The function that runs when an observed element intersects the viewport
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // If the element is visible, add the 'fade-in' class
                entry.target.classList.add('fade-in');
                // Stop observing the element once it has appeared
                observer.unobserve(entry.target);
            }
        });
    };

    // Create the Intersection Observer instance
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Start observing all selected sections
    sectionsToAnimate.forEach(section => {
        observer.observe(section);
        // Add an initial class to keep elements hidden before they are observed
        section.classList.add('fade-hidden');
    });


    // ------------------------------------------------
    // Placeholder functions for the button clicks
    // ------------------------------------------------

    // These functions need to be global (attached to window) 
    // to be accessible from the inline onclick attributes in your HTML
    window.page2 = function() {
         window.location.href ='web2.html';
    };

    window.page3 = function() {
         window.location.href ='web3.html';
    };
});


