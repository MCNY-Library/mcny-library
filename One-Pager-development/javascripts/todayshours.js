// Today's Library Hours v.1 (March 30, 2011)
// Grand Valley State University Library Labs, 2011
// by Matthew Reidsma, reidsmam@gvsu.edu
// 
// Released under the GPL: http://www.gnu.org/licenses/gpl.html
//

// Configuration:
// ------------------------------------------------------------------

// Enter the time your library opens, starting with Sunday. If your library is closed,
// enter "X" for the time. In the following example, the library is closed on Sunday 
// and opens at 9am Monday through Friday. On Saturday, the library opens at 1:30pm. 
// The script will print whatever format you decide to use in these variables. Make 
// sure to leave the quotes!
//
// EXAMPLE:
//
// var open=["X","9:00am","9:00am","9:00am","9:00am","9:00am","1:30pm"];

	var open2=["X","9:00am","9:00am","9:00am","9:00am","9:00am","8:00am"]; // Edit this line 
	
	var openInterSession1=["X","9:00am","9:00am","9:00am","9:00am","9:00am","X"];
	
	var openInterSession2=["X","X","9:00am","9:00am","9:00am","9:00am","8:00am"];
// Enter the time your library closes, starting with Sunday. If your library is 
// closed, enter "X" for the time.

	var close=["X","10:00pm","10:00pm","10:00pm","10:00pm","8:00pm","7:00pm"]; // Edit this line
	
	var closeInterSession1=["X","10:00pm","10:00pm","5:00pm","5:00pm","5:00pm","X"];
	
	var closeInterSession2=["X","5:00pm","5:00pm","5:00pm","5:00pm","5:00pm","X"];
	
	var closeInterSession3=["X","X","5:00pm","5:00pm","10:00pm","8:00pm","7:00pm"]
				
// Do not edit below this line
// -------------------------------------------------------------------
		
	var currentTime = new Date()
	var day = currentTime.getDay()

	
		var intersessionDate= currentTime.getDate();
	
	if (intersessionDate >=1 && intersessionDate <=3) {
	var openTime = openInterSession1[day];
	var closeTime = closeInterSession2[day];
	createHours(openTime,closeTime);
	}
		
	if (intersessionDate >=4 && intersessionDate <=10) {
	var openTime = openInterSession2[day];
	var closeTime = closeInterSession3[day];
	createHours(openTime,closeTime);
	}
	
	if (intersessionDate >=11 && intersessionDate <=20) {
		var openTime = open2[day];
	var closeTime = close[day];
	createHours(openTime,closeTime);
	}
	
	if (intersessionDate >=21 && intersessionDate <=27) {
	var openTime = openInterSession1[day];
	var closeTime = closeInterSession1[day];
	createHours(openTime,closeTime);
	}
	
	if (intersessionDate >=28 && intersessionDate <=31) {
	var openTime = openInterSession1[day];
	var closeTime = closeInterSession2[day];
	createHours(openTime,closeTime);
	}
	
		

	
	function createHours(openTime, closeTime) 
	{ // Build the hours string
		if(openTime == "X") {
			var libhours = "Closed";
			document.write(libhours);
		} else {
			var libhours = "<strong>Open:</strong> " + openTime + " &#8211; " + closeTime;
			document.write(libhours);
		}
	}
