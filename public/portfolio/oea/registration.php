<?php


print("<!doctype html>
<html class=\"no-js\" lang=\"en\">
<head>
<meta charset=\"utf-8\" />
<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />
<title>Ontario Equestrian Association | Registration</title>
<link rel=\"stylesheet\" href=\"css/foundation.css\" />
<link rel=\"stylesheet\" href=\"css/main.css\" />
<link href=\"http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700\" rel=\"stylesheet\" type=\"text/css\" />
<style type=\"text/css\">
.contentBox h6 {
margin-top: 5px;
margin-bottom: 16px;
font-size: 1.6rem;
font-weight: 400;
color: #4B5455;
}
.contentBox fieldset p {
margin-top: 6px;
margin-bottom: 0px;
font-size: .8rem;
color: #4B5455;
font-weight: 300;
}
</style>
<script src=\"js/modernizr.js\">


</script>
</head>
<body>

<div class=\"row\">
<div class=\"large-7 large-centered columns\">
<div class=\"contentBox\">
<form method=\"post\" action=\"register.html\">

<h1>Event Registration</h1>
<div class=\"diagDivider\">&nbsp;</div>
<h5>OEA Finals</h5>

<p><b>Date:</b> March 22, 2014<br>
<b>Location:</b> <br>  
London Riding Center,<br>
6699 Baily Road<br>
London, ON, Canada</p>  

<p><b>Organizer:</b> Jane Charlobious<br>
<b>Email:</b> jane.charlobious@lrc.com</p>
<br>

<fieldset>
<legend>Rider Information</legend>

<p>First Name :</p>
<h6>$name_first</h6>
<p>Last Name :</p>
<h6>$name_last</h6>

<p>Address :</p>
<h6>$address</h6>
<p>City :</p>
<h6>$city</h6>

<p>Province :</p>
<h6>$province</h6>


<p>Postal Code :</p>
<h6>$postal_code</h6>

<p>Gender :</p>
<h6>$gender</h6>


<p>Age :</p>
<h6>$age</h6>


<p>CEA Licence Number :</p>
<h6>$number_licence</h6>

</fieldset>


<fieldset>
<legend>Horse Information</legend>

<p>Name :</p>
<h6>$horse_name</h6>


<p>Gender :</p>
<h6>$horse_gender</h6>


<p>Age :</p>
<h6>$horse_age</h6>


</fieldset>

<input type=\"submit\" name=\"submit\" id=\"submit\" value=\"Return\" class=\"small orangeBtn button myButton\">
</form>
</div>
</div>
</div>



<script src=\"js/jquery.js\"></script>
<script src=\"js/foundation.min.js\"></script>
<script src=\"js/foundation/foundation.orbit.js\"></script>

</body>
</html>
");


?>