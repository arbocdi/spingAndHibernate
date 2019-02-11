<%@taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
    <head>
        <title>Custom Login Page</title>
        <style>
            .failed{
                color:red;
            }
        </style>
    </head>
    <body>
        <h3>My custom login page</h3>
        <form:form action="${pageContext.request.contextPath}/authenticateTheUser" method="POST" >
            <!--if login unsucessful spring security will redirect user back to login form and add ?error parameter -->
            <c:if test="${param.error != null}">
                <i class="failed"> Sorry! You entered invalid username or password.</i>
            </c:if>
            <!-- using predefined field names -->
            <p>
                User name: <input type="text" name="username"/>
            </p>
            <p>
                Password: <input type="password" name="password"/>
            </p>
            <input type="submit" value="Login"/>
        </form:form>
    </body>
</html>