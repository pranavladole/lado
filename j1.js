


function validate()
{

	
	
	var fname1 = document.getElementById("fname").value;
	var lname2 = document.getElementById("lname").value;
	var contact = document.getElementById("contact").value;
	var email = document.getElementById("email").value;

	if(fname1=="" && lname2=="" && contact=="" && email=="")
	{
		let sp=document.getElementById("span1");
		let sp2=document.getElementById("span2");
		let sp3=document.getElementById("span3");
		let sp4=document.getElementById("span4");



		sp.innerHTML="Required";
		sp2.innerHTML="Required";
		sp3.innerHTML="Required";
		sp4.innerHTML="Required";


		sp.style.color="red";
		sp2.style.color="red";
		sp3.style.color="red";
		sp4.style.color="red";
	

				return false;
	}

	


	else if(lname2=="" && contact=="" && email=="")
						{
							let sp2=document.getElementById("span2");
							sp2.innerHTML="Required";
							sp2.style.color="red";

							let sp3=document.getElementById("span3");
							sp3.innerHTML="Required";
							sp3.style.color="red";

							let sp4=document.getElementById("span4");
							sp4.innerHTML="Required";
							sp4.style.color="red";

							return false;
						}


		else if( contact=="" && email=="")
						{
							let sp3=document.getElementById("span3");
							sp3.innerHTML="Required";
							sp3.style.color="red";

							let sp4=document.getElementById("span4");
							sp4.innerHTML="Required";
							sp4.style.color="red";

							return false;
						}



			else if(email=="")
						{
							let sp4=document.getElementById("span4");
							sp4.innerHTML="Required";
							sp4.style.color="red";

							return false;
						}



	else
	{
		return true;
	}
	
		




}







