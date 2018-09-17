$(function(){
   $('#contact-form button[type=submit]').click(sendForm); 
});

function sendForm(ev) {
    const form  = document.getElementsByTagName('form')[0];
    if (form.checkValidity()) {
        ev.preventDefault();
        $.ajax({
            url: "https://formcarry.com/s/r1j9GEfcM", 
            method: "POST",
            data: {
                name: $('#name').val(),
                email: $('#email').val(),
                tel: $('#telephone').val(),
                subject:$('#subject').val(),
                message: $('#message').val()
            },
            dataType: "json"
        })
         .done( () => $('#sendmessage').addClass("show") )
         .fail( () => $('#errormessage').addClass("show") ); 
    }
}
