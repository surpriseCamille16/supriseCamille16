// set up text to print, each item in array is new line
var aText = new Array(
"Dear Baby Camille,",
" ",
"First of all, gusto kong sabihin sayo na mahal na mahal kita!",
" ", 
"Ikaw ang nagbigay ng kulay sa buhay ko.",
"Alam kong marami na tayong pinagdaanan and that's what makes us strong.",
" ", 
"Pasensya ka na sakin kung madami akong flaws.",
"I'm trying my best para malook past mo yung mga yun.",
" ",
"Alam kong marami tayong trials pero lagi mong tatandaan na love na love kita.",
"Kahit anong mangyare andito lang ako.",
"Hinding hindi kita iiwan.",
" ",
"Sana nagustuhan mo tong simpleng surprise ko sayo.",
"Ulit, mahal na mahal kita and I hope we'll be happy for the rest of our lives.",
" ",
'"I saw that you were perfect, and so I loved you. Then I saw that you were not perfect and I loved you even more." -Angelita Lim',
" ",
"Yours truly,",
"Baby Shark"
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
 
function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 500);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}