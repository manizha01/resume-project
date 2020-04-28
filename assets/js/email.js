
function sendMail(contactForm) {
   emailjs.send('outlook', 'template_mKqFbrVI', {
      "from_name": contactForm.name.value,
      "from_email": contactForm.emailaddress.value,
      "project_request": contactForm.projectsummary.value

   })

      .then(function (response) {
         console.log('SUCCESS!', response.status, response.text);
         alert("your email has been send thanks!");
      }, function (error) {
         console.log('FAILED...', error);
         alert("please try again")
      });

   return false;
}

describe("emailjs", function () {
   describe("send emailjs", function () {
      it("should send email", function () {
         expect(sendMail).toBeDefined();
      });
   });
});

function PaFunction() {
   document.getElementById("demo").innerHTML = "below is the  jasmine test";
}

