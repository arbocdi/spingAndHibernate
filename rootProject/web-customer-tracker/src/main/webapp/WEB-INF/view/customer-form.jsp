<%@taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
<!DOCTYPE html>
<html>
    <head>
        <title>Save Customer</title>
        <style>
            .error{
                color: red
            }
        </style>
        <link  type="text/css" rel="stylesheet" 
               href="${pageContext.request.contextPath}/resources/css/style.css"/>
        <link  type="text/css" rel="stylesheet" 
               href="${pageContext.request.contextPath}/resources/css/add-customer-style.css"/>

    </head>
    <body>
        <div id="wrapper">
            <div id="header">
                <h2>CRM - Customer Relationship Manager</h2>
            </div>
            <div id="container">
                <h3>Save Customer</h3>
                <form:form action="saveCustomer" modelAttribute="customer" method="POST">
                    <!-- hidden form field that holds the id -->
                    <form:hidden path="id"/>
                    <table>
                        <tbody>
                            <tr>
                                <td><label>First Name:</label></td>
                                <td><form:input path="firstName"/></td>
                            </tr>
                            <tr>
                                <td><label>Last Name:</label></td>
                                <td><form:input path="lastName"/></td>
                            </tr>
                            <tr>
                                <td><label>Email:</label></td>
                                <td><form:input path="email"/></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><input type="submit" value="Save" class="save"/></td>
                            </tr>
                        </tbody>
                    </table>
                </form:form>
                <div style="clear:both;"></div>
                <p>
                    <a href="${pageContext.request.contextPath}/customer/list">Back to List</a>
                </p>
            </div>
        </div>

    </body>
</html>
