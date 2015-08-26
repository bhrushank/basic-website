function validate_required(field,alerttxt)
{
with (field)
{
if (value==null||value=="")
  {alert(alerttxt);return false;}
else {return true}
}
}

function validate_email(field,alerttxt)
{
with (field)
{
apos=value.indexOf("@");
dotpos=value.lastIndexOf(".");
if (apos<1||dotpos-apos<2) 
  {alert(alerttxt);return false;}
else {return true;}
}
}

function validate_form(thisform)
{
with (thisform)
{
if (validate_required(name,"Please fill in your name.")==false)
  {name.focus();return false;}
if (validate_required(email,"Please fill in your email address.")==false)
  {email.focus();return false;}  
if (validate_email(email,"The email address you have entered doesn't appear to be valid. It should look like username@domain.com")==false)
  {email.focus();return false;}
}
alert("Thank you");
}