window.onload = function () {

    //FORM Variables
    var txt_fName = document.querySelector("#inputFields__txt_fName");
    var txt_lName = document.querySelector("#inputFields__txt_lName");
    var txt_email = document.querySelector("#inputFields__txt_email");
    var rad_category = document.querySelector("#mainForm__rad_category");
    var txt_comment = document.querySelector("#inputFields__txt_comment");

    var error_fName = document.querySelector("#mainForm__error_fName");
    var error_lName = document.querySelector("#mainForm__error_lName");
    var error_email = document.querySelector("#mainForm__error_email");

    var feedback = document.querySelector("#proccessForm_feedback");

    var valid = true;
    var valid_fNameEmpty = false;
    var valid_fNameNaN = false;
    var valid_lNameEmpty = false;
    var valid_lNameNaN = false;
    var valid_email = false;

    //RATING Variables
    var stars = document.querySelectorAll(".ratingsBlock__star");
    var rating = 0;

    var mainForm = document.querySelector("#mainForm");
    var processForm = document.querySelector("#processForm");

    // - - - - - FORM SUBMIT - - - - -
    document.forms.mainForm.onsubmit = function () {
        if (validation()) {
            mainForm.style.display = "none";
            processForm.style.display = "block";
            feedback.innerHTML = "<p>Name: " + txt_fName.value + " " + txt_lName.value + "</p>\n";
            feedback.innerHTML += "<p>Email: " + txt_email.value + "</p>\n";
            feedback.innerHTML += "<p>Type of Feedback: " + rad_category.value + "</p>\n";
            feedback.innerHTML += "<p>Comment: " + txt_comment.value + "</p>";
            feedback.innerHTML += "<p>Rating: " + rating + "/5</p>";
        }
        return false;
    };

    function validation() {
        clearErrors();
        clearValids();
        // CHECK - FIRST NAME - EMPTY
        if (empty(txt_fName.value.trim())) {
            valid = false;
            valid_fNameEmpty = true;
        }
        // CHECK - FIRST NAME - NOT STRING
        else if (!isNaN(txt_fName.value)) {
            valid = false;
            valid_fNameNaN = true;
        }
        // CHECK - LAST NAME - EMPTY
        if (empty(txt_lName.value.trim())) {
            valid = false;
            valid_lNameEmpty = true;
        }
        // CHECK - LAST NAME - NOT STRING
        else if (!isNaN(txt_lName.value)) {
            valid = false;
            valid_lNameNaN = true;
        }
        // CHECK - EMAIL - VALID EMAIL
        if (!validEmail(txt_email.value.trim())) {
            valid = false;
            valid_email = true;
        }

        if (!valid) {
            if (valid_fNameEmpty) {
                error_fName.innerHTML = "Please provide your first name";
            }
            if (valid_fNameNaN) {
                error_fName.innerHTML = "Please provide a valid first name";
            }
            if (valid_lNameEmpty) {
                error_lName.innerHTML = "Please provide your last name";
            }
            if (valid_lNameNaN) {
                error_lName.innerHTML = "Please provide a valid last name";
            }
            if (valid_email) {
                error_email.innerHTML = "Please provide a valid email address";
            }
            return false;
        }
        else {
            return true;
        }
    };

    function empty(par) {
        if (par === "" || par === null) {
            return true;
        }
        else {
            return false;
        }
    };

    function validEmail(par) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(par)) {
            return true;
        }
        else {
            return false;
        }
    }

    function clearErrors() {
        error_fName.innerHTML = "";
        error_lName.innerHTML = "";
        error_email.innerHTML = "";
    }

    function clearValids() {
        valid = true;
        valid_fNameEmpty = false;
        valid_fNameNaN = false;
        valid_lNameEmpty = false;
        valid_lNameNaN = false;
        valid_email = false;
    }

    // - - - - - RATING EVENT LISTENERS - - - - -

    //RATING MOUSE OVER
    stars[0].addEventListener('mouseover', function () {
        clearStars();
        showStars(0);
    });
    stars[1].addEventListener('mouseover', function () {
        clearStars();
        showStars(1);
    });
    stars[2].addEventListener('mouseover', function () {
        clearStars();
        showStars(2);
    });
    stars[3].addEventListener('mouseover', function () {
        clearStars();
        showStars(3);
    });
    stars[4].addEventListener('mouseover', function () {
        clearStars();
        showStars(4);
    });

    //RATING MOUSE OUT
    stars[0].addEventListener('mouseout', function () {
        adjustStars();
    });
    stars[1].addEventListener('mouseout', function () {
        adjustStars();
    });
    stars[2].addEventListener('mouseout', function () {
        adjustStars();
    });
    stars[3].addEventListener('mouseout', function () {
        adjustStars();
    });
    stars[4].addEventListener('mouseout', function () {
        adjustStars();
    });

    //RATING SELECTION
    stars[0].addEventListener('click', function () {
        rating = 1;
        adjustStars();
    });
    stars[1].addEventListener('click', function () {
        rating = 2;
        adjustStars();
    });
    stars[2].addEventListener('click', function () {
        rating = 3;
        adjustStars();
    });
    stars[3].addEventListener('click', function () {
        rating = 4;
        adjustStars();
    });
    stars[4].addEventListener('click', function () {
        rating = 5;
        adjustStars();
    });


    // - - - - - STAR FUNCTIONS - - - - -
    //SHOWS STARS
    function showStars(num) {
        if (num === 0) {
            stars[0].src = "images/star.png";
        }
        else if (num === 1) {
            stars[0].src = "images/star.png";
            stars[1].src = "images/star.png";
        }
        else if (num === 2) {
            stars[0].src = "images/star.png";
            stars[1].src = "images/star.png";
            stars[2].src = "images/star.png";
        }
        else if (num === 3) {
            stars[0].src = "images/star.png";
            stars[1].src = "images/star.png";
            stars[2].src = "images/star.png";
            stars[3].src = "images/star.png";
        }
        else if (num === 4) {
            stars[0].src = "images/star.png";
            stars[1].src = "images/star.png";
            stars[2].src = "images/star.png";
            stars[3].src = "images/star.png";
            stars[4].src = "images/star.png";
        }
    }

    //CLEAR STARS
    function clearStars() {
        stars[0].src = "images/starBlank.png";
        stars[1].src = "images/starBlank.png";
        stars[2].src = "images/starBlank.png";
        stars[3].src = "images/starBlank.png";
        stars[4].src = "images/starBlank.png";
    }

    //HIDES STARS
    function adjustStars() {
        clearStars();

        if (rating === 1) {
            showStars(0);
        }
        else if (rating === 2) {
            showStars(1);
        }
        else if (rating === 3) {
            showStars(2);
        }
        else if (rating === 4) {
            showStars(3);
        }
        else if (rating === 5) {
            showStars(4);
        }
    }
};