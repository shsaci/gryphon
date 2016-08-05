// var jq = require('./jquery')
// $(document).ready(function(){
//
//   $("button").click(myFunction)
//
//   function myFunction(){
//     var a = $(this).text()
//     console.log(a)
//     return a
//   }
// })

// module.exports = val

function myFunction(genre) {
  var a = document.getElementById(genre).innerHTML;
  console.log(a);
  return a
}
