function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "royalrumblebxr89@gmail.com",
        Password : "Bimlesh@4321",
        To : 'bimleshkrbxr89@gmail.com.com',
        From : document.querySelector("#email").value,
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    ); 
}