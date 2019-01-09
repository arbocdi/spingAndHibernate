<%@taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
<!DOCTYPE html>
<html>
    <head>
        <title>Student registration form</title>
    </head>
    <body>
        <form:form action="processForm" modelAttribute="student">
            First Name: <form:input path="firstName"/>
            <br/>
            Last Name: <form:input path="lastName"/>
            <br/>
            Country:
            <!--drop-down list-->
            <form:select path="country">
                <form:option value="Russia" label="Russia"/>
                <!--getting options from java-class map-->
                <form:options items="${countryOptions}"/>
            </form:select> 
            <br/>
            Favorite Language:
            C# <form:radiobutton path="favoriteLanguage" value="C#"/>
            PHP <form:radiobutton path="favoriteLanguage" value="PHP"/>
            Ruby <form:radiobutton path="favoriteLanguage" value="Ruby"/>
            <!--getting data from java map-->
            <form:radiobuttons path="favoriteLanguage" items="${student.favoriteLanguageOptions}"/>
            <br/>
            Operating Systems:
            Linux <form:checkbox path="operatingSystems" value="Linux"/>
            Mac OS <form:checkbox path="operatingSystems" value="Mac OS"/>
            MS Windows <form:checkbox path="operatingSystems" value="MS Windows"/>

            <br/>
            <input type="submit" value="Submit"/>
        </form:form>
    </body>
</html>

