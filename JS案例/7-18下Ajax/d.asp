<%
    response.charset="UTF-8"
    response.write "hello "&request("user")
    response.write "from"&request("city")
    sex=request("sex")
    if sex="famale" then
     response.write "MS"
     else
     response.write "Mr"
     end if
   response.write "password"&request("password")&"please rememer it<br />"
    response.write "fav is"&request("Fav1")&","&request("Fav2")&","&request("Fav3")&"<br />"

%>