var length = 6;                //the total number of images
var current = 0;               //the current slide number

var slide_tray = new Array();  //an array to hold the uploaded images

var dtdescs = new Array();
dtdescs[0] = "Boot"
dtdescs[1] = "Desktop";
dtdescs[2] = "Dash";
dtdescs[3] = "Unity";
dtdescs[4] = "Ubuntu Software Center";
dtdescs[5] = "Keyboard Shortcuts";

function load_slide(place,file) {
   slide_tray[place] = new Image();
   slide_tray[place].src = file;
   }
   
//This loop is executed when the page is uploaded to initialise the image array
for (i=0; i<length;  i++)
{
   var file_name = "ubuntu" + i + ".jpg";	//Generate current iamge file name
   load_slide(i, file_name);
}

//Load next image
function goforward() {
  current = current + 1;
  if( current == slide_tray.length ) {
     current = 0;
  }
  document.slide.src=slide_tray[current].src; //update current image
  PN.innerHTML = dtdescs[current];
}

//Load previous image
function gobackward() {
  current = current - 1;
  if( current < 0 ) {
     current = slide_tray.length-1;
  }
  document.slide.src=slide_tray[current].src;  //update current image
  PN.innerHTML = dtdescs[current];
}