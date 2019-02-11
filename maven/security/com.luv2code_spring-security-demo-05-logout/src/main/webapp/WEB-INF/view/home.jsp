<%@taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<html>
    <title>
        luv2code Company Home Page
    </title>
    <body>
        <h2>luv2code Company Home Page</h2>
        <hr/>
        <p>
            Welcome to the luv2code company home page
        </p>
        <!-- log out form -->
        <form:form action="${pageContext.request.contextPath}/logout" method="POST" >
            <input type="submit" value="Logout"/>
        </form:form>

    </body>
</html>
