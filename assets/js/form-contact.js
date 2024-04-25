// const form = document.getElementById("contactme");

    // form.addEventListener("submit", onFormSubmit);
    // function onFormSubmit(event) {
    //   alert('form submittato');
    //   // location.location.replace('file:///Users/giomea/Desktop/Portfolio_Giorgia_Mea/thankyou.html');
    // }




    $('#contactme').on('submit', function (event) {
      event.preventDefault(); // prevent reload

      var formData = new FormData(this);
      formData.append('service_id', 'service_65p6x8a');
      formData.append('template_id', 'template_o0ckjpf');
      formData.append('user_id', '2Gm0SWiOve6FfaR-Q');
      
console.log(formData);


      $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
        type: 'POST',
        data: formData,
        contentType: false, // auto-detection
        processData: false // no need to parse formData to string
      }).done(function () {
        alert('La mail è stata correttamente inviata!');
       // window.location.replace('file:///Users/giomea/Desktop/Portfolio_Giorgia_Mea/thankyou.html');
      }).fail(function (error) {
        alert('Oops... ' + JSON.stringify(error));
      });
    });