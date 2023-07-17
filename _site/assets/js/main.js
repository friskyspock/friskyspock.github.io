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
    pagebreak: { mode: 'avoid-all' },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'legal', orientation: 'portrait' }
  };
  html2pdf().set(opt).from(element).save();
};

// function makejson() {
//   console.log({{ site.data.resume | jsonify }});
// };