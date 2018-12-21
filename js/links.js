
// Card modal
// Get the modal
var modal = document.getElementById('myModal');
// Get the button that opens the modal
var btn = document.getElementById("info");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




// Share modal
var share = document.getElementById('shareModal');
var sharebtn = document.getElementById("share");
var close = document.getElementsByClassName("close")[1];

sharebtn.onclick = function() {
  share.style.display = "block";
}
close.onclick = function() {
  share.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == share) {
    share.style.display = "none";
  }
}



    var links=new Array()
    links[0]="greetings"
    links[1]="butter-half"
    links[2]="sixth-street"
    links[3]="hi"
    links[4]="love"

    var classIndex = 0;
/*
    function changeBackgroundR() {

        // Grab the element
        var main = $("#body");
        var sub = $(".text-blocks");

        console.log("current class:" + links[classIndex]);

        // If this isn't the first time, remove the previous class
        if (classIndex >= 0) {
            main.css("opacity","0").delay(300).queue(function (next) { 
           		main.removeClass(links[classIndex]);
           		console.log("class removed:" + links[classIndex]); // WHY IS THIS THE NEXT CLASS??????????????????????????
           		next();
           	});

           	sub.find("." + links[classIndex]).css("opacity", "0");

        }

        // Update the index, wrapping around when we reach the end of the array
        classIndex = (classIndex + 1) % links.length;

        // Add the new class
        main.delay(500).queue(function (next) { 
           		$(this).addClass(links[classIndex]);
           		$(this).css("opacity", "1");
           		next();
           	});

        sub.find("." + links[classIndex]).delay(500).queue(function (next) { 
           		$(this).css("opacity", "1");
           		next();
           	});  
        }
*/


    function changeBackgroundR() {

        // Grab the element
        var main = $("#body");
        var sub = $(".text-blocks")


        // If this isn't the first time, remove the previous class
        if (classIndex >= 0) {
            main.removeClass(links[classIndex]);
            sub.find("." + links[classIndex]).css("opacity", "0");

        }
		
        // Update the index, wrapping around when we reach the end of the array
        //classIndex = (classIndex - 1) % links.length;
        classIndex = ((classIndex - 1) % links.length + links.length) % links.length;


        // Add the new class
        main.addClass(links[classIndex]);
        sub.find("." + links[classIndex]).css("opacity", "1"); 


    }



    function changeBackgroundL() {

        // Grab the element
        var main = $("#body");
        var sub = $(".text-blocks")


        // If this isn't the first time, remove the previous class
        if (classIndex >= 0) {
            main.removeClass(links[classIndex]);
            sub.find("." + links[classIndex]).css("opacity", "0");

        }
		
        // Update the index, wrapping around when we reach the end of the array
        //classIndex = (classIndex - 1) % links.length;
        classIndex = ((classIndex - 1) % links.length + links.length) % links.length;


        // Add the new class
        main.addClass(links[classIndex]);
        sub.find("." + links[classIndex]).css("opacity", "1"); 


    }




$("#right").click(function(e){
	changeBackgroundR();
});


$("#left").click(function(e){
    changeBackgroundL();

});