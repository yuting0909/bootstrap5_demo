// form validation
(function () {
  'use strict';
  var forms = document.querySelectorAll('.needs-validation');
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      'submit',
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      },
      false
    );
  });
})();

// tooltips
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

// mobile bottomButton scroll event
const mobileBottomBtn = document.querySelector('#mobileBottomBtn');
const donationForm = document.querySelector('#donation-form');

window.addEventListener('scroll', () => {
  // 贊助表單中心點位置
  const formPosition = donationForm.offsetTop + donationForm.offsetHeight / 2;
  // 視窗底部座標
  const currentBottom = window.scrollY + window.innerHeight;

  // 當滑動至贊助表單中心點位置時，按鈕消失
  if (currentBottom > formPosition) {
    mobileBottomBtn.style.display = 'none';
  } else {
    mobileBottomBtn.style.display = 'block';
  }
  // let scrollY = window.scrollY;
  // let bodyHight = document.body.offsetHeight;
  // // 當滑至網頁最底部時，按鈕消失
  // if (bodyHight - scrollY <= window.innerHeight) {
  //   mobileBottomBtn.style.display = 'none';
  // } else {
  //   mobileBottomBtn.style.display = 'block';
  // }
});
