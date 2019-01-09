<%@taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
    <head>
        <title>Student Confirmation</title>
    </head>
    <body>
        The student is confirmed: ${student.firstName} ${student.lastName}
        <br/>
        Country: ${student.country}
        <br/>
        Favorite language: ${student.favoriteLanguage}
        <br/>
        Operating systems:
        <ul>
            <c:forEach var="item" items="${student.operatingSystems}">
                <li>${item}</li>
            </c:forEach>
        </ul>
    </body>
</html>
