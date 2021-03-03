function sendMail(params) {
    var tempParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    emailjs.send('service_jfjh98l', 'template_xojtjxm', tempParams)
        .then(function (res) {
            console.log("sucess", res.status);
            document.getElementById("submit").reset();
            alert('Su  mensaje ha sido enviado, le contestaremos en breve')
        })
}


// recaptcha 
function submitUserForm() {
    var response = grecaptcha.getResponse();
    console.log(response.length);
    if (response.length == 0) {
        document.getElementById('g-recaptcha-error').innerHTML = '<span style="color:red;">This field is required.</span>';
        return false;
    }
    return true;
}

function verifyCaptcha() {
    console.log('verificado');
    document.getElementById('g-recaptcha-error').innerHTML = '';
}