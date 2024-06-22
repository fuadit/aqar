function generateCaptcha() {
  var captcha = "";
  var possible = "0123456789";

  for (var i = 0; i < 6; i++) {
    captcha += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return captcha;
}

function generateNewCaptcha() {
  var captchaCode = document.getElementById("captchaCode");
  var captchaInput = document.getElementById("captcha");
  var newCaptcha = generateCaptcha();

  captchaCode.textContent = newCaptcha;
  captchaInput.value = "";
}

let the_prop_detail = "";
let the_prop_price = "";

function showForm() {
  const radios = document.querySelectorAll('input[name="the_prop"]');
  let isChecked = false;
  for (const radio of radios) {
    if (radio.checked) {
      isChecked = true;
      const selectedValue = radio.value;
      the_prop_detail = document.getElementById('prop_detil' + selectedValue).innerHTML;
      the_prop_price = document.getElementById('prop_price' + selectedValue).innerHTML;
    }
  }

  if (!isChecked) {
    alert("يرجى تحديد عقار");
  } else {
    var form = document.getElementById("bookingForm");
    form.style.display = "block";
  }
}

function validateForm() {
  var captchaInput = document.getElementById("captcha").value;
  var captchaCode = document.getElementById("captchaCode").textContent;

  if (captchaInput === captchaCode) {
    alert("تم اختيار \n" +  the_prop_detail + "\n" + the_prop_price +"\n")
  } else {
    alert("رمز Captcha غير صحيح!");
  }
}

const showDetailsButtons = document.querySelectorAll('a[id^="showDetails"]');
const detailsElements = document.querySelectorAll('div[id^="details"]');

showDetailsButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    detailsElements.forEach((element, i) => {
      if (i === index) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    });
  });
});
