/* ////////////////////////////////   Loading Screen   //////////////////////////////// */

// This event listener waits for the entire page to load
window.addEventListener('load', function () {
    // Minimum time (in milliseconds) to show the loading screen (1 second)
    const minLoadingTime = 1000;

    // After the minimum loading time, hide the loading screen and show the page content
    setTimeout(function () {
        // Hide the loading screen by setting its display property to 'none'
        document.getElementById('loading-screen').style.display = 'none';
        // Show the page content by setting its display property to 'block'
        document.getElementById('page-content').style.display = 'block';
    }, minLoadingTime);
});

/* ################################   Loading Screen End   ################################ */

/* ////////////////////////////////   Navbar Animation Onscroll   //////////////////////////////// */

// This event listener handles the navbar animation on scroll
document.addEventListener('DOMContentLoaded', function() {
    // Get the navbar element
    const navbar = document.querySelector('.navbar');

    // Add a scroll event listener to the window
    window.addEventListener('scroll', function() {
          // Check if the user has scrolled more than 50 pixels
        if (window.scrollY > 50) { // Adjust this value to control when the effect starts
              navbar.classList.add('scrolled'); // Add a class to trigger the animation
        } else {
              navbar.classList.remove('scrolled'); // Remove the class to stop the animation
        }
    });
});

/* ################################   Navbar Animation Onscroll End   ################################ */

/* ////////////////////////////////   Language Dropdown Menu   //////////////////////////////// */

// JavaScript to handle dropdown toggle
document.addEventListener('DOMContentLoaded', function() {
    // Get the dropdown button element
    var dropdownToggle = document.getElementById('langDropdownBtn');
    // Add a click event listener to the dropdown button
    dropdownToggle.addEventListener('click', function() {
        // Get the dropdown menu that follows the button in the DOM
        var dropdownMenu = dropdownToggle.nextElementSibling;
        // Check if the dropdown is currently open
        var isOpen = dropdownToggle.getAttribute('aria-expanded') === 'true';

        // Toggle the 'aria-expanded' attribute to reflect the current state
        dropdownToggle.setAttribute('aria-expanded', !isOpen);

        // Show or hide the dropdown menu based on the current state
        if (!isOpen) {
            dropdownMenu.classList.add('show'); // Show the dropdown menu
        } else {
            dropdownMenu.classList.remove('show'); // Hide the dropdown menu
        }
    });

    // Close the dropdown menu if clicking outside of it
    document.addEventListener('click', function(event) {
        // Check if the click was outside the dropdown button and menu
        if (!dropdownToggle.contains(event.target)) {
            dropdownToggle.setAttribute('aria-expanded', 'false'); // Close the dropdown
            dropdownToggle.nextElementSibling.classList.remove('show'); // Hide the dropdown menu
        }
    });
});

/* ################################   Language Dropdown Menu End   ################################ */

/* ////////////////////////////////   Language Switching   //////////////////////////////// */

document.addEventListener('DOMContentLoaded', function() {
    // Get all language toggle buttons
    const langToggleButtons = document.querySelectorAll('.header__lang_box a');

    // Define translations for different elements in English and Arabic
    const textElements = {
        'page-title': {
            'en': 'Shaghaf',
            'ar': 'شغف'
        },
        'nav-About': {
            'en': 'About',
            'ar': 'عن'
        },
        'nav-Stats': {
            'en': 'Stats',
            'ar': 'إحصائيات'
        },
        'nav-Stations': {
            'en': 'Stations',
            'ar': 'المحطات'
        },
        'nav-Information': {
            'en': 'Information',
            'ar': 'المعلومات'
        },
        'nav-Content': {
            'en': 'Content',
            'ar': 'المحتوى'
        },
        'nav-Login': {
            'en': 'Login',
            'ar': 'تسجيل الدخول'
        },
        'nav-lang-span': {
            'en': 'EN',
            'ar': 'AR'
        },
        'about-header': {
            'en': 'Embark on your journey to discover your passion',
            'ar': 'انطلق في رحلتك لاكتشاف شغفك '
        },
        'about-paragraph': {
            'en': 'The Passion Journey provides you with the opportunity to learn about the steps and means that enable you to discover your passion and identify the most prominent inclinations and abilities associated with it, the mechanisms for developing it, the areas for investing it, and how to maintain it',
            'ar': 'رحلة الشغف توفر لك فرصة التعرّف علي الخطوات و الوسائل التي تمكنك من اكتشاف شغفك وتحديد أبرز الميول و القدرات المرتبطة به و آليات تطويره و مواطن استثماره و كيفية صيانته  '
        },
        'Stats-paragraph-1': {
            'en': 'User of the Passion Detection Scale',
            'ar': 'مستخدم لمقياس اكتشاف الشغف '
        },
        'Stats-paragraph-2': {
            'en': 'Supportive application tool',
            'ar': 'أداة تطبيقية داعمة'
        },
        'Stats-paragraph-3': {
            'en': 'Training and Development Minute',
            'ar': 'دقيقة تأهيلية و تطويرية'
        },
        'stations-header': {
            'en': 'Journey stations',
            'ar': 'محطات الرحلة '
        },
        'card-header-1': {
            'en': 'Discover passion',
            'ar': 'اكتشاف الشغف '
        },
        'card-paragraph-1': {
            'en': 'It helps you identify passion and its activities and identify the most prominent inclinations and abilities',
            'ar': 'تساعدك علي تحديد الشغف و أنشطته و تحديد أبرز الميول و الاقتدارات'
        },
        'card-header-2': {
            'en': 'Develop passion',
            'ar': 'تطوير الشغف'
        },
        'card-paragraph-2': {
            'en': 'It provides you with guidance that enables you to draw a life plan that is consistent with your inclinations and passions',
            'ar': 'تقدّم لك إرشادات تمكّنك من رسم خطة حياة منسجمة مع الميول و الشغف '
        },
        'card-header-3': {
            'en': 'Investing in passion',
            'ar': 'استثمار الشغف '
        },
        'card-paragraph-3': {
            'en': 'It provides you with the most important areas in which passion can be invested and released in life',
            'ar': 'تزودك بأهم المجالات التي يمكن استثمار الشغف وإطلاقه في الحياة '
        },
        'card-header-4': {
            'en': 'Maintaining passion',
            'ar': 'صيانة الشغف '
        },
        'card-paragraph-4': {
            'en': 'Supporting trends by maintaining and preserving passion and making a great impact through it',
            'ar': 'دعم التوجهات من خلال صيانة الشغف و حفظه و صناعة أثر عظيم من خلاله'
        },
        'card-button-1': {
            'en': 'Visit the station',
            'ar': 'زيارة المحطة '
        },
        'card-button-2': {
            'en': 'Visit the station',
            'ar': 'زيارة المحطة '
        },
        'card-button-3': {
            'en': 'Visit the station',
            'ar': 'زيارة المحطة '
        },
        'card-button-4': {
            'en': 'Visit the station',
            'ar': 'زيارة المحطة '
        },
        'Info-header': {
            'en': 'Journey Information',
            'ar': 'معلومات عن الرحلة '
        },
        'Info-header-1': {
            'en': 'Registration status',
            'ar': 'حالة التسجيل '
        },
        'Info-paragraph-1': {
            'en': 'available',
            'ar': 'متاح'
        },
        'Info-header-2': {
            'en': 'Start of the journey',
            'ar': 'بدء الرحلة'
        },
        'Info-header-3': {
            'en': 'End of the journey ',
            'ar': 'انتهاء الرحلة '
        },
        'Info-header-4': {
            'en': 'journey mechanism',
            'ar': 'آلية الرحلة'
        },
        'Info-paragraph-2': {
            'en': 'Autonomous – asynchronous',
            'ar': 'ذاتية – غير متزامنة'
        },
        'Info-header-5': {
            'en': 'Estimated duration of videos and activities',
            'ar': 'المدة المقدرة للفيديوهات و الأنشطة'
        },
        'Info-paragraph-3': {
            'en': '8 hours',
            'ar': 'ساعات 8'
        },
        'Info-header-6': {
            'en': 'Language',
            'ar': 'اللغة'
        },
        'Info-paragraph-4': {
            'en': 'Arabic',
            'ar': 'العربية'
        },
        'Content-header': {
            'en': 'The educational journey Includes',
            'ar': 'تشمل الرحلة التعليمية'
        },
        'Content-item-1': {
            'en': 'Educational videos',
            'ar': 'الفيديوهات التعليمية '
        },
        'Content-item-2': {
            'en': 'Scientific standards',
            'ar': 'الماقييس العلمية '
        },
        'Content-item-3': {
            'en': 'Supporting application tools',
            'ar': 'الأدوات التطبيقية الداعمة'
        },
        'Content-item-4': {
            'en': 'Questions and interactive activities',
            'ar': 'الأسئلة و الأنشطة التفاعلية'
        },
        'Content-item-5': {
            'en': 'Enriching knowledge resources',
            'ar': 'المصادر المعرفية الإثرائية '
        },
        'Footer-slogan': {
            'en': 'One of the initiatives of the Basamah Community Service Program “Motqan”',
            'ar': 'إحدى مبادرات برنامج باسمح لخدمة المجتمع "متقن"'
        },
    };

    // Function to update the text content for each element based on the selected language
    function setLanguage(lang) {
        for (const [id, translations] of Object.entries(textElements)) {
            const element = document.getElementById(id);
            if (element) {
                // Set the text content based on the selected language
                element.textContent = translations[lang];
            }
        }

        // Apply RTL (right-to-left) direction if Arabic is selected
        document.body.classList.toggle('rtl', lang === 'ar');
    }

    // Add click event listeners to each language toggle button
    langToggleButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior

            // Determine the selected language based on the button text
            const lang = this.querySelector('span').textContent.trim() === 'AR' ? 'ar' : 'en';
            setLanguage(lang); // Update the language
        });
    });
});

/* ################################   Language Switching End   ################################ */

/* ////////////////////////////////   Section Transformation   //////////////////////////////// */

// Initialize the AOS (Animate On Scroll) library with specified settings
AOS.init({
    // Settings that can be overridden on per-element basis, by data-aos-* attributes:

    // Offset in pixels from the original trigger point for the animation ( any value  )
    offset: 120,
    // Delay in milliseconds for the animation to start ( values from 0 to 3000, with step 50ms )
    delay: 0,
    // Duration of the animation in milliseconds ( values from 0 to 3000, with step 50ms )
    duration: 900,
    // Easing function for the animation ( default value : ease )
    easing: 'ease',
    // Whether the animation should happen only once while scrolling down ( values : true or false )
    once: false,
    // Whether elements should animate out while scrolling past them ( values : true or false )
    mirror: false,
    // Position of the element regarding to the window to trigger the animation ( values : 'startdirection-enddirection' )
    anchorPlacement: 'top-bottom',
});

/* ################################   Section Transformation End   ################################ */

/* ////////////////////////////////   Increasing Numbers   //////////////////////////////// */

// Function to animate numbers from a starting value to an ending value
function animateNumbers(targetIds, endValues, start = 0, duration = 2000) {
    if (targetIds.length !== endValues.length) {
        console.error('Target IDs and end values arrays must have the same length.');
        return;
    }

    // Iterate over each target ID and its corresponding end value
    targetIds.forEach((targetId, index) => {
        const element = document.getElementById(targetId);
        const end = endValues[index];
        const range = end - start;
        let startTime = null;

        // Function to perform the animation
        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const progressPercentage = Math.min(progress / duration, 1); // Clamp to 1 (100%)

            // Calculate the current number to display
            const currentNumber = Math.floor(start + progressPercentage * range);
            element.textContent = currentNumber;

            if (progress < duration) {
                // Continue animation until duration is reached
                requestAnimationFrame(step);
            } else {
                // Ensure the final number is set
                element.textContent = end;
            }
        }

        // Start the animation
        requestAnimationFrame(step);
    });
}

// Function to setup number animations when the element is in view
function setupNumberAnimations(targetIds, endValues, start = 0, duration = 2000) {
    const observerOptions = {
        root: null, // Use the viewport
        rootMargin: '0px',
        threshold: 0.5 // Trigger when 50% of the element is visible
    };

    // Function to handle intersection changes
    function handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Start animation when the element is in view
                animateNumbers(targetIds, endValues, start, duration);
                // We don't unobserve the element, so the animation will restart each time it's visible
            }
        });
    }

    // Create an IntersectionObserver to monitor when elements are in view
    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observe each target element
    targetIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            observer.observe(element);
        }
    });
}

// Call the function to setup the number animations with specified target IDs and end values
const targetIds = ['number1', 'number2', 'number3'];
const endValues = [12000, 14, 480];
setupNumberAnimations(targetIds, endValues, 0, 2000); // Adjust the duration as needed

/* ################################   Increasing Numbers End   ################################ */