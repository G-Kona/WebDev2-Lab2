<main id="main">
    <div class="wrap">
        <form id="mainForm" name="mainForm">
            <h2>Your Feedback</h2>
            <div class="mainForm__bar"></div>
            <p>We would like your feedback to improve our website.</p>
            <p>What is your rating of this page?</p>

            <!-- RATING -->
            <div id="mainForm__ratingsBlock">
                <img id="ratingBlock__rating1" class="ratingsBlock__star" title="star icon" alt="1 Star"
                     src="images/starBlank.png">
                <img id="ratingBlock__rating2" class="ratingsBlock__star" title="star icon" alt="2 Star"
                     src="images/starBlank.png">
                <img id="ratingBlock__rating3" class="ratingsBlock__star" title="star icon" alt="3 Star"
                     src="images/starBlank.png">
                <img id="ratingBlock__rating4" class="ratingsBlock__star" title="star icon" alt="4 Star"
                     src="images/starBlank.png">
                <img id="ratingBlock__rating5" class="ratingsBlock__star" title="star icon" alt="5 Star"
                     src="images/starBlank.png">
            </div>

            <div class="mainForm__bar"></div>

            <!-- INPUT FIELDS -->
            <div id="mainForm__inputFields">
                <div id="inputFields__topBlock">
                    <!-- NAME -->
                    <label id="mainForm__lbl_fName" class="inputFields__label">First Name</label>
                    <input id="inputFields__txt_fName" class="inputFields__input" type="text">
                    <label id="mainForm__error_fName" class="inputFields__error"></label>
                    <!-- AGE -->
                    <label id="mainForm__lbl_lName" class="inputFields__label">Last Name</label>
                    <input id="inputFields__txt_lName" class="inputFields__input" type="text">
                    <label id="mainForm__error_lName" class="inputFields__error"></label>
                    <!-- EMAIL -->
                    <label id="mainForm__lbl_email" class="inputFields__label">Email Address</label>
                    <input id="inputFields__txt_email" class="inputFields__input" type="text">
                    <label id="mainForm__error_email" class="inputFields__error"></label>
                    <!-- CATEGORY -->
                    <label id="mainForm__lbl_category" class="inputFields__label">Type of feedback</label>
                    <select id="mainForm__rad_category" class="inputFields__input">
                        <option>General</option>
                        <option>Suggestion</option>
                        <option>Compliment</option>
                    </select>
                </div>
                <div id="inputFields__bottomBlock">
                    <!-- COMMENT -->
                    <label id="mainForm__lbl_comment" class="inputFields__label">Comment</label>
                    <textarea id="inputFields__txt_comment" class="inputFields__input"></textarea>
                    <input id="inputFields__submit" type="submit">
                </div>
            </div>
        </form>
        <div id="processForm" class="hide">
            <h2>Thank you!</h2>
            <div class="mainForm__bar"></div>
            <p>We appreciate your feedback.</p>
            <div id="proccessForm_feedback">
            </div>
        </div>
    </div>
</main>