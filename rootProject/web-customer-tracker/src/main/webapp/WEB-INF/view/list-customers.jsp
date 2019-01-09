<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
    <head>
        <title>List Customers</title>
        <link  type="text/css" rel="stylesheet" 
               href="${pageContext.request.contextPath}/resources/css/style.css"/>
    </head>
    <body>
        <div id="wrapper">
            <div id="header">
                <h2>CRM - Customer Relationship Manager</h2>
            </div>
            <div id="container">
                <div id="content">
                    <!--add customer button -->
                    <!--calling controller method showFormForAdd-->
                    <input type="button" value="Add Customer" 
                           onclick="window.location.href = 'showFormForAdd';return false;"
                           class="add-button"
                           />
                    <!--searching customers-->
                    <form action="search" method="POST">
                        Search customer: <input type="text" name="theSearchName" value="${param.theSearchName}" />
                        <input type="submit" value="Search" class="add-button" />
                    </form>
                    <!--list customers-->
                    <table>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Emali</th>
                            <th>Action</th>
                        </tr>
                        <c:forEach var="customer" items="${customers}">
                            <!-- creating upate&delete link with customerId as param-->
                            <c:url var="updateLink" value="/customer/showFormForUpdate">
                                <c:param name = "customerId" value="${customer.id}"/>
                            </c:url>
                            <c:url var="deleteLink" value="/customer/delete">
                                <c:param name = "customerId" value="${customer.id}"/>
                            </c:url>
                            <tr>
                                <td>${customer.firstName}</td>
                                <td>${customer.lastName}</td>
                                <td>${customer.email}</td>
                                <!-- using updateLink,deleteLink described before -->
                                <td>
                                    <a href="${updateLink}">Update</a>
                                    |
                                    <a href="${deleteLink}" onclick="if (!confirm('Are u shure u want to delete this customer?'))
                                                return false">Delete</a>
                                </td>
                            </tr>
                        </c:forEach>
                    </table>    
                </div>
            </div>
        </div>
    </body>
</html>
