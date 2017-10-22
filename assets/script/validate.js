$(document).ready(function() {
  $('#signupform').validate({
    rules: {
      zip: {
        required: true,
        digits: true,
        minlength: 5
      },
      country: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      confirmemail: {
        required: true,
        email: true,
        equalTo: '#email'
      },
      password: {
        required: true,
        minlength: 8
      },
      confirmpass: {
        required: true,
        equalTo: '#password'
      }
    },
    messages: {
      zip: {
        required: 'Please enter your zip code',
        digits: 'Your zip code should only contain numbers',
        minlength: 'Your zip should include 5 digits'
      },
      country: {
        required: 'Please enter your country'
      },
      email: {
        required: 'Please enter a email address',
        email: 'Please enter a valid email address'
      },
      confirmemail: {
        required: 'Please confirm your email address',
        equalTo: 'Does not match email entered above'
      },
      password: {
        required: 'A password is required',
        minlength: 'Your password must be at least 8 characters long'
      },
      confirmpass: {
        required: 'Please confirm your password',
        equalTo: 'Your passwords do not match'
      }
    }
  });
});