const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(Key) {
  //   write your code here
	for(let key in sampleObject){
		if(key === Key){
			return true ;
		}
	}
	return false ;
}

// Do not change the code below

const key = prompt("Enter Key.");
alert(hasKey(key));
