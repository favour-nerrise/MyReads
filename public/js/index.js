jQuery(function($) {
    'use strict';

    //Responsive Nav
    $('li.dropdown').find('.fa-angle-down').each(function() {
        $(this).on('click', function() {
            if ($(window).width() < 768) {
                $(this).parent().next().slideToggle();
            }
            return false;
        });
    });

    //Fit Vids
    if ($('#video-container').length) {
        $("#video-container").fitVids();
    }

    //Initiat WOW JS
    new WOW().init();

    // portfolio filter
    $(window).load(function() {

        $('.main-slider').addClass('animate-in');
        $('.preloader').remove();
        //End Preloader

        if ($('.masonery_area').length) {
            $('.masonery_area').masonry(); //Masonry
        }

        var $portfolio_selectors = $('.portfolio-filter >li>a');

        if ($portfolio_selectors.length) {

            var $portfolio = $('.portfolio-items');
            $portfolio.isotope({
                itemSelector: '.portfolio-item',
                layoutMode: 'fitRows'
            });

            $portfolio_selectors.on('click', function() {
                $portfolio_selectors.removeClass('active');
                $(this).addClass('active');
                var selector = $(this).attr('data-filter');
                return false;
            });
        }

    });


    $('.timer').each(count);

    function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
    }

    // Search
    $('.fa-search').on('click', function() {
        $('.field-toggle').fadeToggle(200);
    });

    // Contact form
    var form = $('#main-contact-form');
    form.submit(function(event) {
        event.preventDefault();
        var form_status = $('<div class="form_status"></div>');
        $.ajax({
            url: $(this).attr('action'),
            beforeSend: function() {
                form.prepend(form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn());
            }
        }).done(function(data) {
            form_status.html('<p class="text-success">Thank you for contact us. As early as possible  we will contact you</p>').delay(3000).fadeOut();
        });
    });

    // Progress Bar
    $.each($('div.progress-bar'), function() {
        $(this).css('width', $(this).attr('data-transition') + '%');
    });

    if ($('#gmap').length) {
        var map;

        map = new GMaps({
            el: '#gmap',
            lat: 43.04446,
            lng: -76.130791,
            scrollwheel: false,
            zoom: 16,
            zoomControl: false,
            panControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            overviewMapControl: false,
            clickable: false
        });

        map.addMarker({
            lat: 43.04446,
            lng: -76.130791,
            animation: google.maps.Animation.DROP,
            verticalAlign: 'bottom',
            horizontalAlign: 'center',
            backgroundColor: '#3e8bff',
        });
    }

});

$(function() {
    // Calling Login Form
    $("#login_form").click(function() {
        $(".social_login").hide();
        $(".user_login").show();
        $("#myModalLabel").text('LOG IN');
        return false;
    });

    // Calling Register Form
    $("#signup_form").click(function() {
        $(".social_login").hide();
        $(".user_register").show();
        $("#myModalLabel").text('REGISTER');
        return false;
    });

    // Going back to Social Forms
    $(".back_btn").click(function() {
        $(".user_login").hide();
        $(".user_register").hide();
        $(".social_login").show();
        $("#myModalLabel").text('LOG IN');
        return false;
    });
})

//Handles the sign in button press.
function toggleSignIn() {
     if (firebase.auth().currentUser) {
       // [START signout]
       firebase.auth().signOut();
       // [END signout]
     } else {
       var email = document.getElementById('email').value;
       var password = document.getElementById('password').value;

       if (email.length < 4) {
         alert('Please enter a valid email address.');
         return;
       }
      //  if (password.length < 4) {
      //    alert('Please enter a valid password.');
      //    return;
      //  }
       // Sign in with email and pass.
       // [START authwithemail]
       firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
         // Handle Errors here.
         var errorCode = error.code;
         var errorMessage = error.message;
         // [START_EXCLUDE]
         if (errorCode === 'auth/wrong-password') {
           alert('Invalid password.');
         } else {
           alert(errorMessage);
         }
         console.log(error);
         document.getElementById('login').disabled = false;
         // [END_EXCLUDE]
       });
       // [END authwithemail]
     }
     document.getElementById('login').disabled = true;
   }
   /**
    * Handles the sign up button press.
    */
   function handleSignUp() {
     var email = document.getElementById('email').value;
     var password = document.getElementById('password').value;
     var firstName = document.getElementById('firstName').value;
     var lastName = document.getElementById('lastName').value;

     if (firstName == null || firstName == "") {
       alert("First Name can't be blank");
       return;
     }
     if (lastName == null || lastName == "") {
       alert("Last Name can't be blank");
       return;
     }
    //  if (email.length < 4) {
    //    alert('Please enter a valid email address.');
    //    return;
    //  }
    //  if (password.length < 4) {
    //    alert('Please enter a valid password.');
    //    return;
    //  }
     // Sign in with email and pass.
     // [START createwithemail]
     firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
       // Handle Errors here.
       var errorCode = error.code;
       var errorMessage = error.message;
       // [START_EXCLUDE]
      //  if (errorCode == 'auth/invalid-email') {
      //    alert('Please enter a valid email address.');
      //  } else {
      //    alert(errorMessage);
      //  }
      //  if (errorCode == 'auth/weak-password') {
      //    alert('The password is too weak.');
      //  } else {
      //    alert(errorMessage);
      //  }
       console.log(error);
       // [END_EXCLUDE]
     });
     // [END createwithemail]
   }
   /**
    * Sends an email verification to the user.
    */
   function sendEmailVerification() {
     // [START sendemailverification]
     firebase.auth().currentUser.sendEmailVerification().then(function() {
       // Email Verification sent!
       // [START_EXCLUDE]
       alert('Email Verification Sent!');
       // [END_EXCLUDE]
     });
     // [END sendemailverification]
   }
   function sendPasswordReset() {
     var email = document.getElementById('email').value;
     // [START sendpasswordemail]
     firebase.auth().sendPasswordResetEmail(email).then(function() {
       // Password Reset Email Sent!
       // [START_EXCLUDE]
       alert('Password Reset Email Sent!');
       // [END_EXCLUDE]
     }).catch(function(error) {
       // Handle Errors here.
       var errorCode = error.code;
       var errorMessage = error.message;
       // [START_EXCLUDE]
       if (errorCode == 'auth/invalid-email') {
         alert(errorMessage);
       } else if (errorCode == 'auth/user-not-found') {
         alert(errorMessage);
       }
       console.log(error);
       // [END_EXCLUDE]
     });
     // [END sendpasswordemail];
   }
   /**
    * initApp handles setting up UI event listeners and registering Firebase auth listeners:
    *  - firebase.auth().onAuthStateChanged: This listener is called when the user is signed in or
    *    out, and that is where we update the UI.
    */
   function initApp() {
     // Listening for auth state changes.
     // [START authstatelistener]
     firebase.auth().onAuthStateChanged(function(user) {
       // [START_EXCLUDE silent]
      //  ############### document.getElementById('quickstart-verify-email').disabled = true; #############Í
       // [END_EXCLUDE]
       if (user) {
         // User is signed in.
         var displayName = user.displayName;
         var email = user.email;
         var emailVerified = user.emailVerified;
         var photoURL = user.photoURL;
         var isAnonymous = user.isAnonymous;
         var uid = user.uid;
         var providerData = user.providerData;
         // [START_EXCLUDE silent]
         document.getElementById('quickstart-sign-in-status').textContent = 'Signed in';
        //  document.getElementById('quickstart-sign-in').textContent = 'Sign out';
         document.getElementById('quickstart-account-details').textContent = JSON.stringify(user, null, '  ');
        //  if (!emailVerified) {
        //    document.getElementById('quickstart-verify-email').disabled = false;
        //  }
         // [END_EXCLUDE]
       } else {
         // User is signed out.
         // [START_EXCLUDE silent]
         document.getElementById('quickstart-sign-in-status').textContent = 'Signed out';
        //  document.getElementById('quickstart-sign-in').textContent = 'Sign in';
         document.getElementById('quickstart-account-details').textContent = 'null';
         // [END_EXCLUDE]
       }
       // [START_EXCLUDE silent]
      //  document.getElementById('quickstart-sign-in').disabled = false;
       // [END_EXCLUDE]
     });
     // [END authstatelistener]
     document.getElementById('login').addEventListener('click', toggleSignIn, false);
     document.getElementById('signup').addEventListener('click', handleSignUp, false);
    //  document.getElementById('quickstart-verify-email').addEventListener('click', sendEmailVerification, false);
    //  document.getElementById('quickstart-password-reset').addEventListener('click', sendPasswordReset, false);
   }
   window.onload = function() {
     initApp();
   };

// // function validate() {
// //     var firstName = document.getElementById('firstName').value;
// //     var lastName = document.getElementById('lastName').value;
// //     var email = document.getElementById('email').value;
// //     var password = document.getElementById('password').value;
// //     var confirmpassword = document.getElementById('confirmpassword').value;
// //     var atpos = email.indexOf("@");
// //     var dotpos = email.lastIndexOf(".");
// //
// //     if (firstName == null || firstName == "") {
// //         alert("First Name can't be blank");
// //         return false;
// //     }
// //     if (lastName == null || lastName == "") {
// //         alert("Last Name can't be blank");
// //         return false;
// //     }
// //     // if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
// //     //     alert("Not a valid e-mail address");
// //     //     return false;
// //     // }
// //     if (password !== confirmpassword || !password) {
// //         alert("Password does not match! Please give correct password");
// //         return false;
// //     } else {
// //         document.getElementById('login_form').submit();
// //         alert("Form Submitted Successfully...");
// //     }
// // }
// // if(password.length <6) {
// //   alert("Password must be at least 6 characters long.");
// //   return false;
