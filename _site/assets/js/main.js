// window.addEventListener('load', (event) => {
//     console.log("Page loaded.");
//   });+
function makepdf() {
  var element = document.getElementById("toprint");
  var opt = {
    margin:       0,
    filename:     'myfile.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    enableLinks:  true,
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
  };
  html2pdf().set(opt).from(element).save();
};