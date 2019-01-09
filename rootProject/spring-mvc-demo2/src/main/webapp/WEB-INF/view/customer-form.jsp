<%@taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
<!--form with validation-->
<html>
    <head>
        <title>Customer Registratilon Form</title>
        <style>
            .error{
                color: red
            }
        </style>
    </head>
    <body>
        <form:form action="processForm" modelAttribute="customer">
            First name: <form:input path="firstName"/>
            <br/><br/>
            Last name(*): <form:input path="lastName"/>
            <form:errors path="lastName" cssClass="error"/>
            <br/><br/>
            Free passes(*): <form:input path="freePasses"/>
            <form:errors path="freePasses" cssClass="error"/>
            <br/><br/>
            <!--regexp validation-->
            Postal code: <form:input path="postalCode"/>
            <form:errors path="postalCode" cssClass="error"/>
            <br/><br/>
            <!--custom validated field-->
            Course code: <form:input path="courseCode"/>
            <form:errors path="courseCode" cssClass="error"/>
            <br/><br/>
            <input type="submit" value="Submit"/>
        </form:form>
    </body>
</html>
