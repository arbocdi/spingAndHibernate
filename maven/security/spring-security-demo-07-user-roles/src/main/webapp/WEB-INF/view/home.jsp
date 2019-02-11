<%@taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@taglib prefix="security" uri="http://www.springframework.org/security/tags" %>

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
        <hr>
        <p> 
            <security:authorize access="hasRole('MANAGER')">
            <!--managers -->
            <a href="${pageContext.request.contextPath}/leaders">Lidership Meeting</a>
            (Only for managers)
            <br>
            </security:authorize>
            <security:authorize access="hasRole('ADMIN')">
            <!--admins-->
            <a href="${pageContext.request.contextPath}/systems">IT Systems Meeting</a>
            (Only for admins)
            </security:authorize>
        </p>
        <hr>
        <!-- show username and role-->
        User: <security:authentication property="principal.username"/>
        <br><br>
        Role(s): <security:authentication property="principal.authorities"/>
        <hr>
        <!-- log out form -->
        <form:form action="${pageContext.request.contextPath}/logout" method="POST" >
            <input type="submit" value="Logout"/>
        </form:form>

    </body>
</html>
