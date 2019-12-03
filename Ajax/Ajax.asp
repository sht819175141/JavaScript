<%@ LANGUAGE="VBSCRIPT" CODEPAGE="65001" %>
<% 
	a=request("mz")
	if a="admin"  then
		response.write "1"
	else 
		response.write "0"
	end if
%>