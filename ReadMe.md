
File to run the server --> index.js

localhost --> 3000

Also note that you need to copy auth-token and put it in the header manually as it does not do that automatically (auth-token is initialized in login method)

Also note that the attendance system is based on only 30 days but every method related to the attendance works





REGISTER-----------------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------Make sure you login first-------------------------------------------------------------------------------------
request parameters:
Functionality:  Register a new User 
Route:         /register
Request type:  POST
Parameters: Add all user details
Request body:  {  
   "Email":"yasser@gmail.com",
    "name":"yasser",
    "type":"HR",
    "salary":"100000",
    "faculty":"Engineering",
    "department":"IET",
    "gender":"male",
    "officelocation":"c4.200",
    "firstTime":0,
    "courses":["maths","cs1","cs2"],
    "dayoff":"Monday"
}

Example of how to call the route: http://localhost:3000/register


- HR only who can register
- if the user is HR the faculty and courses are set as empty strings by default
- you must register by Email one time
-Location must be correct from the db
-Instructor only who can add a Coordinator
 
-------------------------------------------------------------------------------------------------------------------------------------------------------------


LOGIN--------------------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------Make sure you login first-------------------------------------------------------------------------------------
request parameters:
Functionality:Login by your Email and your password
Route:         /login
Request type:  POST
Parameters:  1) Login by your "Email" ,2)"password" (by default "12345") and  3)if its your first time to login add a "newpassword"
Request body:  if its your first time { "Email":"yasser@gmail.com",
                                        "password":"12345",
                                        "newpassword":"alo"
                                      }
               if not  { "Email":"yasser@gmail.com",
                        "password":"alo",              
                        }
Example of how to call the route: http://localhost:3000/login

request body:
Functionality: register as a HR
Route: http://localhost:3000/register
Request type: POST

- if you are the Email is not registered will send " not found"
 
-------------------------------------------------------------------------------------------------------------------------------------------------------------



VIEWPROFILE--------------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------Make sure you login first-------------------------------------------------------------------------------------
request parameters:
Functionality:  view the profile of the logged in user
Route:         /profile
Request type:  GET
Parameters:  no paramter used just click send
Request body: 
    
Example of how to call the route:http:  http://localhost:3000/profile

request body:
Functionality: Login as a HR
Route: http://localhost:3000/login
Request type: POST
Request body: { "Email" : "miro@gmail.com", "password": "alo", "newpassword": "alo"}
 
-------------------------------------------------------------------------------------------------------------------------------------------------------------



HR can update profile of a user in the system ---------------you have to login first as a HR------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


Functionality:
                HR can update profile of a user in the system
Route: 
                /updateProfile

Request type: 
                POST
Parameters:
                -Email of user (mandatory)
                -department to be updated
                -faculty to be updated;
                -salary to be updated;
                -ID to be updated;
                -name to be updated
RequestBody: 
                {"Email":"zeina@gmail.com","name":"zuzi","department":"IET","faculty":"Engineering","salary":"10000000"}

Example of how to call the route:

                /updateProfile
Functionality:
                login as HR
Request type: 
                POST 
Request body: 
                {"Email":"miro@gmail.com","password":"alo"}






HR can delete a user in the system ---------------you have to login first as a HR------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


Functionality:
                HR can delete user in the system
Route: 
                /deleteUser

Request type: 
                POST
Parameters:
                -Email of user (mandatory)
                
RequestBody: 
                {"Email":"zeina@gmail.com"}

Example of how to call the route:

                /deleteUser
Functionality:
                login as HR
Request type: 
                POST 
Request body: 
                {"Email":"miro@gmail.com","password":"alo"}
-------------------------------------------------------------------------------------------------------------------------------------------------------------

ADDLOCATION-------------------------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------Make sure you login first-------------------------------------------------------------------------------------
request parameters:
Functionality: Add Location IN the DB by HR
Route:         /AddLocation
Request type:  POST
Parameters:  1) "roomName" "as a "String" ,2) "Capacity" of the room as a number ,3)  "Count" of people in the room as a number , 4) "type" of the room as a String
Request body: {  "roomName":"c3.205",
                 "Capacity":"20",
                 "Count":"5",
                  "type":"Room"
            }
Example of how to call the route: http://localhost:3000/AddLocation

request body:
Functionality: Login as a HR
Route: http://localhost:3000/login
Request type: POST
Request body: { "Email" : "miro@gmail.com", "password": "alo", "newpassword": "alo"}

 -no location can be added more than one time by the "roomName"
------------------------------------------------------------------------------------------------------------------------------------------------------------------------

UPDATELOCATION----------------------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------Make sure you login first-------------------------------------------------------------------------------------
request parameters:
Functionality: Update Location IN the DB by HR
Route:        /updateLocation
Request type:  POST
Parameters:  1)Find by the "id" in the db ,2) update "roomName" "as a "String" ,3) or/and "Capacity" of the room as a number ,4) or/and  "Count" of people in the room as a number , 4) or/and "type" of the room as a String
Request body: { "id":"5fe46af131549e50208b2709",
                "roomName":"c4.200",
                "Capacity":"20",
                "Count":"5",
                "type":"Room"
            }
Example of how to call the route: http://localhost:3000/updateLocation

request body:
Functionality: Login as a HR
Route: http://localhost:3000/login
Request type: POST
Request body: { "Email" : "miro@gmail.com", "password": "12345", "newpassword": "alo"} if first time to login if the second time to login Enter { "Email" : "miro@gmail.com", "password": "alo"}

 -if Location is not in the db will respond "not found"
------------------------------------------------------------------------------------------------------------------------------------------------------------------------

DELETELOCATION----------------------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------Make sure you login first-------------------------------------------------------------------------------------
request parameters:
Functionality: Delete Location IN the DB by HR
Route:        /DeleteLocation
Request type:  DELETE
Parameters:  1) Find the room you want to delete by the "roomName" in the db 
Request body: { "roomName":"c3.204"  
              }
                
Example of how to call the route:http://localhost:3000/DeleteLocation

request body:
Functionality: Login as a HR
Route: http://localhost:3000/login
Request type: POST
Request body: { "Email" : "miro@gmail.com", "password": "12345", "newpassword": "alo"} if first time to login if the second time to login Enter { "Email" : "miro@gmail.com", "password": "alo"}

 -if Location is not in the db will respond "not found"
------------------------------------------------------------------------------------------------------------------------------------------------------------------------

ADDFACULTY----------------------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------Make sure you login first-------------------------------------------------------------------------------------
request parameters:
Functionality: Add faculty IN the DB by HR
Route:        /AddFaculty
Request type:  POST
Parameters:  ADD faculty by Adding in the db 1) facultyName as a String 2) Departments in Faculty as an array of Strings 
Request body: { "facultyName":"BI",
             "departmentsInFaculties":["A","B","C"]
              }
                
Example of how to call the route:http://localhost:3000/AddFaculty

request body:
Functionality: Login as a HR
Route: http://localhost:3000/login
Request type: POST
Request body: { "Email" : "miro@gmail.com", "password": "12345", "newpassword": "alo"} if first time to login if the second time to login Enter { "Email" : "miro@gmail.com", "password": "alo"}

 -if faculty is already in the db will respond "this faculty already created"
------------------------------------------------------------------------------------------------------------------------------------------------------------------------

UPDATEFACULTY----------------------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------Make sure you login first-------------------------------------------------------------------------------------
request parameters:
Functionality: Update faculty IN the DB by HR
Route:        /UpdateFaculty
Request type:  POST
Parameters:  1)Find by the "id" in the db ,2) update "facultyName" "as a "String" ,3) or/and "departmentsInFaculties" as an array of Strings f
Request body: {  "id":"5fe47a73bb735077e882ba6f",
                 "facultyName":"Engineering",
                "departmentsInFaculties":["MET","IET","Production","Mecha"]
              }
Example of how to call the route: http://localhost:3000/UpdateFaculty

request body:
Functionality: Login as a HR
Route: http://localhost:3000/login
Request type: POST
Request body: { "Email" : "miro@gmail.com", "password": "12345", "newpassword": "alo"} if first time to login if the second time to login Enter { "Email" : "miro@gmail.com", "password": "alo"}

 -if faculty is not in the db will respond "not found"
------------------------------------------------------------------------------------------------------------------------------------------------------------------------

DELETEFACULTY----------------------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------Make sure you login first-------------------------------------------------------------------------------------
request parameters:
Functionality: Delete Faculty From the DB by HR
Route:        /deleteFaculty
Request type:  DELETE
Parameters:  1) Find the faculty you want to delete by the "facultyName" in the db 
Request body: {  "facultyName":"pharmacy"
             }
                
Example of how to call the route:http://localhost:3000/deleteFaculty

request body:
Functionality: Login as a HR
Route: http://localhost:3000/login
Request type: POST
Request body: { "Email" : "miro@gmail.com", "password": "12345", "newpassword": "alo"} if first time to login if the second time to login Enter { "Email" : "miro@gmail.com", "password": "alo"}

 -if faculty is not in the db will respond "not found"
------------------------------------------------------------------------------------------------------------------------------------------------------------------------

ADDDEPARTMENT----------------------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------Make sure you login first-------------------------------------------------------------------------------------
request parameters:
Functionality: Add department IN the DB UNDER a Faculty by HR
Route:        /addDepartments
Request type:  POST
Parameters:  ADD Department by Adding in the db 1)"DepartmentName" as a String 2) "FacultyName" as a String  3)"id" of the faculty from the facualty db
Request body: {"DepartmentName" :"graphics",
               "FacultyName":"AppliedArts",
               "id":"5fe47a9bbb735077e882ba71" (this id you must get it from the faculty applied arts in the db)
}
                
Example of how to call the route:http://localhost:3000/addDepartments

request body:
Functionality: Login as a HR
Route: http://localhost:3000/login
Request type: POST
Request body: { "Email" : "miro@gmail.com", "password": "12345", "newpassword": "alo"} if first time to login if the second time to login Enter { "Email" : "miro@gmail.com", "password": "alo"}

 -if department is already in the db will respond "this department already created"
 - if faculty is not in the id also will say faculty not found
------------------------------------------------------------------------------------------------------------------------------------------------------------------------

UPDATEDEPARTMENT--------------------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------Make sure you login first-------------------------------------------------------------------------------------
request parameters:
Functionality: Update department IN the DB by HR
Route:        /UpdateDepartment
Request type:  POST
Parameters:   1)Find by the "id" in the db ,2) update "DepartmentName" "as a "String" ,3) or/and "FacultyName" as an Strings 
Request body: { "id":"5fe489e9a86ab151d098e352",
                "DepartmentName": "MET",
                "FacultyName":"ENGINEERING"
              }
Example of how to call the route: http://localhost:3000/UpdateDepartment

request body:
Functionality: Login as a HR
Route: http://localhost:3000/login
Request type: POST
Request body: { "Email" : "miro@gmail.com", "password": "12345", "newpassword": "alo"} if first time to login if the second time to login Enter { "Email" : "miro@gmail.com", "password": "alo"}

 -if department is not in the db will respond "not found"
------------------------------------------------------------------------------------------------------------------------------------------------------------------------

DELETEdepartment--------------------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------Make sure you login first-------------------------------------------------------------------------------------
request parameters:
Functionality: Delete department From the DB by HR
Route:        /deleteDepartement
Request type:  DELETE
Parameters:   1) Find the department you want to delete by the "DepartmentName" in the db 
Request body: { "DepartmentName":"graphics"
              }
                
Example of how to call the route:http://localhost:3000/deleteDepartement

request body:
Functionality: Login as a HR
Route: http://localhost:3000/login
Request type: POST
Request body: { "Email" : "miro@gmail.com", "password": "12345", "newpassword": "alo"} if first time to login if the second time to login Enter { "Email" : "miro@gmail.com", "password": "alo"}

 -if department is not in the db will respond "not found"
------------------------------------------------------------------------------------------------------------------------------------------------------------------------


ADDcourse----------------------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------Make sure you login first-------------------------------------------------------------------------------------
request parameters:
Functionality: Add course IN the DB UNDER a departments by HR
Route:        /Addcourses
Request type:  POST
Parameters:  ADD courses by Adding in the db 1)"courseName" as a String 2) "DepartmentName" as a String  3)"id" of the department from the facualty db 
                                             4)"CourseInstructor" as a String and always created as empty string as only instructor can add/update/delete it
Request body: {"courseName":"acl",
              "DepartmentName":"MET",
               "CourseInstructor":"fhgdkj",
              "id":"5fe48b34a6bff361684bc95c"
}
                
Example of how to call the route:http://localhost:3000/Addcourses

request body:
Functionality: Login as a HR
Route: http://localhost:3000/login
Request type: POST
Request body: { "Email" : "miro@gmail.com", "password": "12345", "newpassword": "alo"} if first time to login if the second time to login Enter { "Email" : "miro@gmail.com", "password": "alo"}

 -if course is already in the db will respond "this department already created"
 -if the course's department is not in the id will say " department not found" 
------------------------------------------------------------------------------------------------------------------------------------------------------------------------

UPDATEDCOURSE--------------------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------Make sure you login first-------------------------------------------------------------------------------------
request parameters:
Functionality: Update course IN the DB by HR
Route:        /updateCourse
Request type:  POST
Parameters:   1)Find by the "id" in the db of the course you want to delete ,2) update "courseName" "as a "String" ,3) or/and update "DepartmentName" as an Strings ,
              4)or/and  update "Departmentid" as String
Request body: { "id":"5fe49f1828cbab3640f0f91e",
               "courseName":"analysis",
              "DepartmentName": "Engineering",
            "Departmentid":"5fddd8eb272c7477c0213dcf"
             }
Example of how to call the route: http://localhost:3000/updateCourse

request body:
Functionality: Login as a HR
Route: http://localhost:3000/login
Request type: POST
Request body: { "Email" : "miro@gmail.com", "password": "12345", "newpassword": "alo"} if first time to login if the second time to login Enter { "Email" : "miro@gmail.com", "password": "alo"}

 -if department is not in the db will respond "not found"
------------------------------------------------------------------------------------------------------------------------------------------------------------------------

DELETECourse--------------------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------Make sure you login first-------------------------------------------------------------------------------------
request parameters:
Functionality: Delete course From the DB by HR
Route:        /deleteCourse
Request type:  DELETE
Parameters:   1) Find the course you want to delete by the "courseName" in the db 
Request body: {"courseName":"cs" 
                }
                
Example of how to call the route:http://localhost:3000/deleteCourse

request body:
Functionality: Login as a HR
Route: http://localhost:3000/login
Request type: POST
Request body: { "Email" : "miro@gmail.com", "password": "12345", "newpassword": "alo"} if first time to login if the second time to login Enter { "Email" : "miro@gmail.com", "password": "alo"}

 -if department is not in the db will respond "not found"
------------------------------------------------------------------------------------------------------------------------------------------------------------------------

ADDandUpdateInstructor--------------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------Make sure you login first-------------------------------------------------------------------------------------
request parameters:
Functionality: add and update instructors From the DB by the HOD
Route:        /AddUpdateInstructor
Request type:  POST
Parameters:   1) find the course you want to update its instructor by the id of the course in the db  2) enter the "CourseInstructor" name to add or to update the    name  as course instructor's name is by default an empty String
Request body: { "id":"5fe4a0331ae2177ef89fb506",
                "CourseInstructor":"Yasser"
            }
                
Example of how to call the route:http://localhost:3000/AddUpdateInstructor
request body:
Functionality: Login as a HOD
Route: http://localhost:3000/login
Request type: POST
Request body: { "Email" : "ess@gmail.com", "password": "12345", "newpassword": "alo"} if first time to login if the second time to login Enter { "Email" : "miro@gmail.com", "password": "alo"}

 -if course is not in the db will respond "course not found"
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

DeleteInstructor--------------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------Make sure you login first-------------------------------------------------------------------------------------
request parameters:
Functionality: delete instructors From the DB by the HOD
Route:        /deleteinstructor
Request type:  DELETE
Parameters:   1) find the course you want to update its instructor by the id of the course in the db  2) enter the "CourseInstructor" name to add or to update the    name  as course instructor's name is by default an empty String
Request body: { "id":"5fe49f1828cbab3640f0f91e"
               }
                
Example of how to call the route:http://localhost:3000/deleteinstructor
request body:
Functionality: Login as a HOD
Route: http://localhost:3000/login
Request type: POST
Request body: { "Email" : "ess@gmail.com", "password": "12345", "newpassword": "alo"} if first time to login if the second time to login Enter { "Email" : "miro@gmail.com", "password": "alo"}

 -if course is not in the db will respond "course not found"
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------


VIEWSTAFFforHod--------------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------Make sure you login first-------------------------------------------------------------------------------------
request parameters:
Functionality: view all HOD staff by his department 
Route:        /ViewStaffByDepartment
Request type:  GET
Parameters:   1) view all the staff of HOD by using his "department"
Request body: { "department":"MET"  
                 }
                
Example of how to call the route:http://localhost:3000/ViewStaffByDepartment
request body:
Functionality: Login as a HOD
Route: http://localhost:3000/login
Request type: POST
Request body: { "Email" : "ess@gmail.com", "password": "12345", "newpassword": "alo"} if first time to login if the second time to login Enter { "Email" : "miro@gmail.com", "password": "alo"}

 -if department is not in the db will respond "department not found"

response:
Functionality: get all staff details
Route: /ViewStaffByDepartment
Request type: GET
Response: Array of users . Example of a single user: {  "courses": [],
        "_id": "5fe325b40fceee3318eed51d",
        "Email": "Slim@gmail.com",
        "name": "slim",
        "ID": "AC1",
        "type": "HOD",
        "password": "$2a$12$8Qf4gBIzHd8qFu3obQxgbeYVsycfg9DRB4DwUgxOK4v5E/aS.05AC",
        "salary": 100000,
        "faculty": "Engineering",
        "department": "MET",
        "gender": "male",
        "officelocation": "c7.3",
        "firstTime": 0,
        "dayoff": "monday"
}

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------


VIEWDAYOFFBYHOD--------------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------Make sure you login first-------------------------------------------------------------------------------------
request parameters:
Functionality: view Day off of any member in his department's staff by the HOD  
Route:        /ViewStaffdayoff
Request type:  GET
Parameters:   1) view all the staff's day off by HOD by using his "department"
Request body: { "department":"MET"  
                 }
                
Example of how to call the route:http://localhost:3000/ViewStaffdayoff
request body:
Functionality: Login as a HOD
Route: http://localhost:3000/login
Request type: POST
Request body: { "Email" : "ess@gmail.com", "password": "12345", "newpassword": "alo"} if first time to login if the second time to login Enter { "Email" : "miro@gmail.com", "password": "alo"}

 -if department is not in the db will respond "department not found"

response:
Functionality: get day off
Route: /ViewStaffdayoff
Request type: GET
Response: staff's Day off .ex  :  Day OFF: monday

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

VIEWTeachingassignment--------------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------Make sure you login first-------------------------------------------------------------------------------------
request parameters:
Functionality:View teaching assignments (which staff members teach which slots) of course offered by
              his department.
Route:        /viewTeachingAssignments
Request type:  GET
Parameters:   1) Enter the "Email" of the staff member you want to check his slots
Request body: { "Email":"zeina@gmail.com"
               }
                
Example of how to call the route :http://localhost:3000/viewTeachingAssignments
request body:
Functionality: Login as a HOD
Route: http://localhost:3000/login
Request type: POST
Request body: { "Email" : "ess@gmail.com", "password": "12345", "newpassword": "alo"} if first time to login if the second time to login Enter { "Email" : "miro@gmail.com", "password": "alo"}

 -if the staff member is teaching in another department  will say "Not in your department"

response:
Functionality: get all staff members slots 
Route: /viewTeachingAssignments
Request type: GET
Response: staff's Day off .ex  : {
    _id: 5fe4eef9e1d24837d46a5f8c,
    Email: 'zeina@gmail.com',
    day: 'saturday',
    no: 2,
    time: '10:00',
    location: 'c1.01',
    course: 'acl',
    __v: 0
  },

---------------------------------------------------------------------------------------------------------------------------------------------------------------------

VIEWcoursecoverage--------------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------Make sure you login first-------------------------------------------------------------------------------------
request parameters:
Functionality: view course coverage  (no of slots for course)/(no of academic members of type TA and the HOD's  department)*100
Route:        /viewCoverage
Request type:  GET
Parameters:   1) Enter "type" of the user you want to check which is TA 2) department name 3) course name to check the slots
Request body: { "type":"TA",
                "department":"MET",
                "course":"acl"
                }
                
Example of how to call the route :http://localhost:3000/viewCoverage
request body:
Functionality: Login as a HOD
Route: http://localhost:3000/login
Request type: POST
Request body: { "Email" : "ess@gmail.com", "password": "12345", "newpassword": "alo"} if first time to login if the second time to login Enter { "Email" : "miro@gmail.com", "password": "alo"}

 -if any thing entered wrong  will print Coverage=NaN%
 - done only by HOD

response:
Functionality: get the coverage value
Route: /viewTeachingAssignments
Request type: GET
Response: coverage  : ex Coverage=66.66666666666666%

---------------------------------------------------------------------------------------------------------------------------------------------------------------------


viewCoverageOfAssignedCourse'-------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------Make sure you login first-------------------------------------------------------------------------------------
request parameters:
Functionality: view course coverage  (no of slots for course)/(no of academic members of the same course and department)*100
Route:        /viewCoverageOfAssignedCourse'
Request type:  GET
Parameters:   1) Enter his "type" which is  Instructor 2) enter his course name to check the slots
Request body: { "type":"Instructor",
                "course":"acl"
             } 
                
Example of how to call the route :http://localhost:3000/viewCoverageOfAssignedCourse'
request body:
Functionality: Login as a Instructor
Route: http://localhost:3000/login
Request type: POST
Request body: { "Email" : "yasser@gmail.com", "password": "12345", "newpassword": "alo"} if first time to login if the second time to login Enter { "Email" : "yasser@gmail.com", "password": "alo"}

 -if any thing entered wrong  will print Coverage=NaN%
- done only by an Instructor
response:
Functionality: get the coverage value
Route: /viewTeachingAssignments
Request type: GET
Response: coverage  : ex Coverage=200%%

---------------------------------------------------------------------------------------------------------------------------------------------------------------------

viewAssignedSlots-------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------Make sure you login first-------------------------------------------------------------------------------------
request parameters:
Functionality:  view assigned slot for the instructor
Route:        /viewAssignedSlots
Request type:  GET
Parameters:   1) Enter the instuctors "Email" to get the slots assigned for him

Request body: { "Email":"yasser@gmail.com"
              }
Example of how to call the route :http://localhost:3000/viewAssignedSlots

request body:
Functionality: Login as a Instructor
Route: http://localhost:3000/login
Request type: POST
Request body: { "Email" : "yasser@gmail.com", "password": "12345", "newpassword": "alo"} if first time to login if the second time to login Enter { "Email" : "yasser@gmail.com", "password": "alo"}

 -if you entered wronge instructor Email it will send NOT FOUND
- done only by an Instructor
response:
Functionality: get the instructors slot
Route: /viewAssignedSlots
Request type: GET
Response: coverage  : ex {
        "_id": "5fe502a1895b5e253c4e1c16",
        "Email": "yasser@gmail.com",
        "day": "wednesday",
        "no": 2,
        "available": 0,
        "time": "10:00",
        "location": "c7.203",
        "course": "CA",
        "__v": 0
    }

---------------------------------------------------------------------------------------------------------------------------------------------------------------------


ViewAllStaffForInstructor-------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------Make sure you login first-------------------------------------------------------------------------------------
request parameters:
Functionality:  view all staff for the instructor
Route:       /ViewAllStaffForInstructor
Request type:  GET
Parameters:   1) Enter the instuctors "department" to get all his staff members

Request body: { "department":"MET"
 
                }
Example of how to call the route :http://localhost:3000/ViewAllStaffForInstructor

request body:
Functionality: Login as a Instructor
Route: http://localhost:3000/login
Request type: POST
Request body: { "Email" : "yasser@gmail.com", "password": "12345", "newpassword": "alo"} if first time to login if the second time to login Enter { "Email" : "yasser@gmail.com", "password": "alo"}

 --if you entered wronge department it will send department not found
-- done only by an Instructor
response:
Functionality: get the instructors slot
Route: /viewAssignedSlots
Request type: GET
Response: coverage  : ex {
        "courses": [],
        "_id": "5fe325b40fceee3318eed51d",
        "Email": "Slim@gmail.com",
        "name": "slim",
        "ID": "AC1",
        "type": "HOD",
        "password": "$2a$12$U2PdE6YJKg0fAvlYFj2avuhsCULZvm2Y3BIb50iNrPWg7ObuZ5nKK",
        "salary": 100000,
        "faculty": "Engineering",
        "department": "MET",
        "gender": "male",
        "officelocation": "c7.3",
        "firstTime": 1,
        "dayoff": "monday",
        "attendance": [
            {
                "_id": "5fe325b70fceee3318eed53d",
                "date": "12/23/2020",
                "minsspent": 0
            },
            {
                "_id": "5fe325b70fceee3318eed53e",
                "date": "12/24/2020",
                "minsspent": 0
            },
            {
                "_id": "5fe325b70fceee3318eed53f",
                "date": "12/25/2020",
                "minsspent": 0
            },
            {
                "_id": "5fe325b70fceee3318eed540",
                "date": "12/26/2020",
                "minsspent": 0
            },
            {
                "_id": "5fe325b70fceee3318eed541",
                "date": "12/27/2020",
                "minsspent": 0
            },
            {
                "_id": "5fe325b70fceee3318eed542",
                "date": "12/28/2020",
                "minsspent": 0
            },
            {
                "_id": "5fe325b70fceee3318eed543",
                "date": "12/29/2020",
                "minsspent": 0
            }

---------------------------------------------------------------------------------------------------------------------------------------------------------------------


AssignUpdateDeleteTA-------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------Make sure you login first-------------------------------------------------------------------------------------
request parameters:
Functionality:  assign or delete or update TA in a specific slot
Route:      /AssignUpdateDeleteTA
Request type:  POST
Parameters:   1) enter "time" of the slote you want 2) enter "no" which is the name of the slot 1 is first 2 is second,... etc 
              3) enter the day  4) enter the email of the TA you want to assign or update and if you want to delete enter an empty String " ":

Request body: { "time":"3:45",
                "no":5,
                "day":"wednesday",
                "Email":"yasso"
}
Example of how to call the route :http://localhost:3000/AssignUpdateDeleteTA

request body:
Functionality: Login as a Instructor
Route: http://localhost:3000/login
Request type: POST
Request body: { "Email" : "yasser@gmail.com", "password": "12345", "newpassword": "alo"} if first time to login if the second time to login Enter { "Email" : "yasser@gmail.com", "password": "alo"}

 -if you entered wronge slot info it will send unavailable slot
 - done only by an Instructor
---------------------------------------------------------------------------------------------------------------------------------------------------------------------


AssignCoordinator-------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------Make sure you login first-------------------------------------------------------------------------------------
request parameters:
Functionality:  assign or delete or update TA in a specific slot
Route:      /AssignCoordinator
Request type:  POST
Parameters:   1) Enter the "Email" of the user you want to assign as an coordinator
Request body: { "Email":"ess@gmail.com"
              }
Example of how to call the route :http://localhost:3000/AssignCoordinator

request body:
Functionality: Login as a Instructor
Route: http://localhost:3000/login
Request type: POST
Request body: { "Email" : "yasser@gmail.com", "password": "12345", "newpassword": "alo"} if first time to login if the second time to login Enter { "Email" : "yasser@gmail.com", "password": "alo"}

 - if you entered wronge user info it will send user not found
 - done only by an Instructor
---------------------------------------------------------------------------------------------------------------------------------------------------------------------

zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz


Create Slot--------------------------------------------------------------------
---------------------you have to login as a Coordinator------------------------
Functionality:
                Creating a new slot for a specific TA in the Database
Route:          /createSlot
Request type:   POST
Parameters:
                -day is the day in the week of the slot
                -no is the number of the slot we are creating.
                -time is the timing of the slot
                -location is the location(room) where the slot will be taught.
                -course is the course that will be taught in the slot.
RequestBody:
        {"day":"monday","no":1,"time":"8:15","location":"c7.201","course":"CA"}
Example of how to call the route: 
        /createSlot
Functionality: 
        login as a course coordinator
Request type: 
        POST 
Request body: 
        { “Email” :“abdo@gmail.com”, “password:”alo”} 

View slot-------------------------------------------------------------------------------------------------------
-------------------You have to login as a TA first--------------------------------------------------------------
Functionality:
        TA viewing their assigned slots
Route: 
        /viewSlot
Request type: 
        GET
Parameters:- 
        Email is the email of the TA we are creating the slot for
RequestBody:
        {}
Example of how to call the route: 
        /viewSlot
Functionality: 
        login as a TA beforehand.
Request type: 
        POST 
Request body: 
        { “Email” :“zeina@gmail.com”, “password”:”alo”} 
Response:
        [
    {
        "_id": "5fe46b2017001c3194614df3",
        "Email": "zeina@gmail.com",
        "day": "saturday",
        "no": 1,
        "time": "8:15",
        "location": "c7.201",
        "course": "CA",
        "__v": 0
    }
]

update slot-----------------------------------------------------------------------------------------------------
---------------you have to login as a coordinator first---------------------------------------------------------

Functionality:
        Updating an existing slot for a specific TA in the database.
Route: 
        /updateSlot
Request type: 
        POST
Parameters:

        (Enter in the fields the details of the slot you are looking for that you want to update)
            -Email is the email of the TA we are creating the slot for
            -day is the day in the week of the slot
            -no is the number of the slot we are creating.
            (Enter in the fields you want to update)
                    -newday is the new day in the week of the slot that you are trying to update.
            -newno is the new number of the slot that you are trying to update
                    -newtime is the new timing of the slot that you are trying to update
            -newlocation is the new location(room) where the slot will be taught that you are trying to update
            -newcourse is the new course name that will be taught in the slot that you are trying to update


RequestBody:
        {"Email":"zeina@gmail.com","day":"saturday","no":1,"newday":"monday","newno":2,"newcourse":"acl","newtime":"10:00","newlocation":"c1.01"
        }
Example of how to call the route: 
        /updateSlot
Functionality:
        login as a course coordinator
Request type: 
        POST 
Request body: 
        { “Email” :“abdo@gmail”, “password”:”alo”} 




Delete slot-----------------------------------------------------------------------------------------------------
---------------you have to login as a coordinator first---------------------------------------------------------

Functionality:
        Deleting an existing slot for a specific TA in the database.
Route: 
        /deleteSlot
Request type: 
        DELETE
Parameters:

        (Enter in the fields the details of the slot you are looking for that you want to delete)
        - Email is the email of the TA we are creating the slot for
        -day is the day in the week of the slot
        -no is the number of the slot we are creating.
        
RequestBody:
        {"Email":"zeina@gmail.com","day":"monday","no":2}


Example of how to call the route: 
        /deleteSlot
Functionality:
        login as a course coordinator
Request type: 
        POST 
Request body: 
        { “Email” :“abdo@gmail”, “password”:”alo”} 


View Available slots-----------------------------------------------------------------------------------------------------------
---------------you have to login as a TA first------------------------------------------------------------------


Functionality:
                The TA can view the available slots created by the course coordinator for the TAs to choose from to teach
Route: 
                /viewAvailableSlots
Request type: 
                GET
Parameters:
                Enter the name of the course you are looking for its available slots
RequestBody:
                 {"course":"CA"}

Example of how to call the route: 
                 /viewAvailableSlots
Functionality:
                 login as a TA
Request type: 
                POST 
Request body: 
                 { “Email” :“zeina@gmail.com”, “password”:”alo”} 

Response:       
                                [
                {
                        "_id": "5fe501cdb8a25c0d50a79e94",
                        "day": "tuesday",
                        "no": 2,
                        "available": 1,
                        "time": "10:00",
                        "location": "c7.203",
                        "course": "CA",
                        "__v": 0
                }
                ]




Send slot linking request---------------------------------------------------------------------------------------------------------
---------------you have to login as a TA first------------------------------------------------------------------

Functionality:
                The TA can send a request to the course coordinator with the details of one of the previously viewed available slots where this request indicates the desire of the TA to teach this slot.
Route: 
                /sendslotlinkingrequest

Request type: 
                POST
Parameters:
                -the email of the course coordinator responsible for the course desired to be taught in the slot
                -the day of the slot
                -the slot number
                -the course desired to be taught in the slot
RequestBody:
                {"CourseCoordinatorEmail":"abdo@gmail.com","day":"thursday","slot":"2","course":"CA"}
Example of how to call the route: 
                /sendslotlinkingrequest
Functionality:
                login as a TA
Request type: 
                POST 
Request body: 
                { “Email” :“zeina@gmail.com”, “password”:”alo”} 





view slot linking requests--------------------------------------------------------------------------------------------------------
---------------you have to login as a course coordinator first-----------------------------------------------------------------------------------------------------------




Functionality:
As a course coordinator, they should be to view the slot linking requests sent to them
Route: 
         /viewslotlinkingrequest


Request type: 
        GET
Parameters:
RequestBody:
Example of how to call the route: 
         /viewslotlinkingrequest
Functionality:
        login as a TA
Request type: 
        POST 
Request body: 
        { “Email” :“zeina@gmail.com”, “password”:”alo”} 

Response:
[
    {
        "_id": "5fe50d169eb57724cc965b3c",
        "Email": "zeina@gmail.com",
        "CourseCoordinatorEmail": "abdo@gmail.com",
        "day": "tuesday",
        "slot": 2,
        "course": "CA",
        "accepted": 0,
        "status": "pending",
        "__v": 0
    },
    {
        "_id": "5fe50d6f9eb57724cc965b3d",
        "Email": "zeina@gmail.com",
        "CourseCoordinatorEmail": "abdo@gmail.com",
        "day": "wednesday",
        "slot": 2,
        "course": "CA",
        "accepted": 0,
        "status": "pending",
        "__v": 0
    },
    {
        "_id": "5fe50f2abf611403d4a7364a",
        "Email": "zeina@gmail.com",
        "CourseCoordinatorEmail": "abdo@gmail.com",
        "day": "thursday",
        "slot": 2,
        "course": "CA",
        "accepted": 0,
        "status": "pending",
        "__v": 0
    }
]


accept slot linking requests--------------------------------------------------------------------------------------------------------
---------------you have to login as a course coordinator first-----------------------------------------------------------------------------------------------------------

Functionality:
                Accept as a course coordinator a slot linking request sent by a TA, if the slot is available (available bit =1)and not previously chosen by another TA, the slot linking request is not on the TA's day off and the coordinator accepts the request.The slot will be assigned automatically to the TA, and the TA will be notified else the TA will only be notified that the request is rejected. The status is changed to "accepted" or "rejected" from "pending" upon rejection or accepting.
Route: 
                /acceptslotlinkingrequest
Request type: 
                POST
Parameters:
                -id of the slot linking request the Coordinator wish to accept or reject
                -accepted bit where it is entered as 1 if the Coordinator accepts and 0 if the Coordinator rejects.
                

RequestBody:
                {"id":"5fe50f2abf611403d4a7364a","accepted":1}


Example of how to call the route: 
                /acceptslotlinkingrequest
Functionality:
                login as a course coordinator   
Request type: 
                POST 
Request body: 
                { “Email” :“abdo@gmail”, “password”:”alo”} 



submit day off request--------------------------------------------------------------------------------------------------------
---------------you have to login as a  TA first-----------------------------------------------------------------------------------------------------------
Functionality:
                As a TA, they should be able to submit a request to the head of the department to change their day off.
Route: 
                /submitdayoffrequest
Request type: 
                POST
Parameters:
                -The email of the head of their department
                -The day they wish to change their day off to.
                -A brief reason why they want to change their day off to that day.
                

RequestBody:
                {"headOfDepartementEmail":"Slim@gmail.com","requestedDayOff":"wednesday","reasonOfrequest":"I do yoga on wednesdays"}

Example of how to call the route:
                  /submitdayoffrequest

Functionality:
                login as a TA
Request type: 
                POST 
Request body: 
                { “Email” :“zeina@gmail”, “password”:”alo”} 


view day off request--------------------------------------------------------------------------------------------------------
---------------you have to login as an HOD first -----------------------------------------------------------------------------------------------------------

Functionality:
                As an HOD, they should be able to view all the day off requests submitted to them
Route: 
                /viewdayoffrequests
Request type: 
                GET
Parameters:
                

RequestBody:

Example of how to call the route:
                  /viewdayoffrequests

Functionality:
                login as an HOD
Request type: 
                POST 
Request body: 
                {"Email":"Slim@gmail.com","password":"alo"}
Response:
                                [
                {
                        "_id": "5fe5ba656f51b44a98a049e8",
                        "Email": "zeina@gmail.com",
                        "headOfDepartementEmail": "Slim@gmail.com",
                        "requestedDayOff": "wednesday",
                        "reasonOfrequest": "I do yoga on wednesdays",
                        "accepted": 0,
                        "status": "pending",
                        "__v": 0
                }
                ]

accept day off request--------------------------------------------------------------------------------------------------------
---------------you have to login as an HOD first -----------------------------------------------------------------------------------------------------------


Functionality:
                As an HOD, they should be able to accept or reject a day off request submitted to them
Route: 
                /acceptdayoffrequests
Request type: 
                POST
Parameters:
                -id of the day request the Head of department is trying to accept or reject
                -Accepted bit which is entered as 0 if the HOD rejects and entered as 1 if the HOD accepts
                -Brief reason of rejection in case of rejection.


RequestBody:        
                {"id":"5fe5ba656f51b44a98a049e8","accepted":0,"reasonOfRejection":"I do yoga on        wednesdays get yourself another day"}

Example of how to call the route:
                /acceptdayoffrequests

Functionality:
                login as an HOD
Request type: 
                POST 
Request body: 
                {"Email":"Slim@gmail.com","password":"alo"}



view my notifications --------------------------------------------------------------------------------------------------------
---------------you have to login first as TA-----------------------------------------------------------------------------------------------------------

Functionality:
                As a TA , they should be able to view notifications about updates about their submitted requests
Route: 
                /viewmynotification
Request type: 
                GET
Parameters:
RequestBody:        
Example of how to call the route:
                /viewmynotification

Functionality:
                login as a TA
Request type: 
                POST 
Request body: 
                {"Email":"zeina@gmail.com","password":"alo"}
Response:
                                [
                {
                        "_id": "5fe5be59a5d6ee404c4156de",
                        "Email": "zeina@gmail.com",
                        "Message": "your request to change your day off has been accepted by the head of the departement",
                        "headOfDepartementEmail": "Slim@gmail.com",
                        "__v": 0
                },
                {
                        "_id": "5fe5be6da5d6ee404c4156df",
                        "Email": "zeina@gmail.com",
                        "Message": "your request to change your day off has been rejected by the head of the departement",
                        "headOfDepartementEmail": "Slim@gmail.com",
                        "reasonOfRejection": "I do yoga on wednesdays get yourself another day",
                        "__v": 0
                }
                ]



view slot linking request status--------------------------------------------------------------------------------------------------------
---------------you have to login first as TA-----------------------------------------------------------------------------------------------------------


Functionality:
                As a TA, they should be able to view the status of their submitted slot linking request
Route: 
                /viewslotlinkingstatus
Request type: 
                GET
Parameters:     
                -The course taught in the slot submitted previously in the slot linking request
                -The slot of the day submitted previously in the slot linking request
                -The day of the week submitted previously in the slot linking request

RequestBody:      

                {"course":"CA","slot":2,"day":"monday"}  

Example of how to call the route:

                 /viewslotlinkingstatus


Functionality:
                login as a TA
Request type: 
                POST 
Request body: 
                {"Email":"zeina@gmail.com","password":"alo"}
Response:
                rejected


view day off request status--------------------------------------------------------------------------------------------------------
---------------you have to login first as TA-----------------------------------------------------------------------------------------------------------


Functionality:
                As a TA, they should be able to view the status of their submitted day off requests.
Route: 
                /viewdayoffrequeststatus
Request type: 
                GET
Parameters:
                -The day they submitted previously in submit day off request
RequestBody:        

                {"requestedDayOff":"wednesday"}
Example of how to call the route:
                /viewdayoffrequeststatus

Functionality:
                login as a TA
Request type: 
                POST 
Request body: 
                {"Email":"zeina@gmail.com","password":"alo"}
Response:
                rejected



send replacement request --------------------------------------------------------------------------------------------------------
---------------you have to login first as TA-----------------------------------------------------------------------------------------------------------


Functionality:
                As a TA, they should be able to send a replacement request to another TA to replace them in teaching a specific slot.
Route: 
                /sendReplacementRequest
Request type: 
                POST
Parameters:
                -The email of the TA replacing them
                -date of the replacement day
                -the slot in the day of the replacement slot
                -The course taught in the replacement
                -The location where the slot will be taught
                -The timing of the slot 
RequestBody:        

                {"replacingTAEmail":"leila@gmail.com","date":"12/25/2020","slot":"3","course":"CA","location":"c7.209","time":"11:45"}

Example of how to call the route:
                /sendReplacementRequest


Functionality:
                login as a TA
Request type: 
                POST 
Request body: 
                {"Email":"zeina@gmail.com","password":"alo"}




view replacement requests sent to me --------------------------------------------------------------------------------------------------------
---------------you have to login first as TA-----------------------------------------------------------------------------------------------------------


Functionality:
                As a TA, they should be able to view replacement requests sent to them.
Route: 
                /viewReplacementRequests

Request type: 
                GET
Parameters:
RequestBody:        
Example of how to call the route:
                /viewReplacementRequests
Functionality:
                login as a TA
Request type: 
                POST 
Request body: 
                {"Email":"leila@gmail.com","password":"alo"}
Response:
                                [
                {
                        "_id": "5fe5cfa3a5d6ee404c4156e0",
                        "Email": "zeina@gmail.com",
                        "replacingTAEmail": "leila@gmail.com",
                        "date": "12/25/2020",
                        "slot": 3,
                        "course": "CA",
                        "time": "11:45",
                        "location": "c7.209",
                        "accepted": 0,
                        "status": "pending",
                        "__v": 0
                }
                ]


view replacement requests sent to me by ID --------------------------------------------------------------------------------------------------------
---------------you have to login first as TA-----------------------------------------------------------------------------------------------------------


Functionality:
                As a TA, they should be able to view replacement requests sent to them by ID to be able either accept replacing the sending TA or rejecting their request.
Route: 
                /viewReplacementRequestbyID

Request type: 
                POST
Parameters:
                -id of the specific replacement request they wish to view
                -accepted bit which is entered as 0 if they wish to reject the TA's replacement request of entered as 1 if they want to accept the request.

RequestBody:     
                {"id":"5fe26aa1dd8d901eace7fff6","accepted":1}   


Example of how to call the route:
                /viewReplacementRequestsbyID
Functionality:
                login as a TA
Request type: 
                POST 
Request body: 
                {"Email":"leila@gmail.com","password":"alo"}
Response:
                replacement request has been accepted successfully please contact HOD now!                


Forwarding replacement request to the head of the department------------------------------------------------------------------------------------------------------
---------------you have to login first asTA -----------------------------------------------------------------------------------------------------------


Functionality:
                As a TA, they should be able to forward replacement requests to the head of their department either the request is accepted or rejected by the replacement TA
Route: 
                /ForwardReplacementReqtoHOD

Request type: 
                POST
Parameters:
                -id of the specific replacement request they wish to forward
                -Email of the head of department
RequestBody:     
                {"id":"5fe5cfa3a5d6ee404c4156e0","HeadOfDepartmentEmail":"Slim@gmail.com"}


Example of how to call the route:
                /ForwardReplacementReqtoHOD
Functionality:
                login as a TA
Request type: 
                POST 
Request body: 
                {"Email":"zeina@gmail.com","password":"alo"}
Response:
                replacement request has been forwarded to HOD successfully


Viewing replacement requests forwarded to HOD ------------------------------------------------------------------------------------------------------
---------------you have to login first as a HOD -----------------------------------------------------------------------------------------------------------


Functionality:
                As a HOD, they should be able to view all the replacement request that have been forwarded to them.
Route: 
                /ViewReplacementRequestsAsHOD

Request type: 
                GET
Parameters:
RequestBody: 
Example of how to call the route:
                /ViewReplacementRequestsAsHOD
Functionality:
                login as a HOD
Request type: 
                POST 
Request body: 
                {"Email":"Slim@gmail.com","password":"alo"}
Response:
                                [
                {
                        "_id": "5fe5cfa3a5d6ee404c4156e0",
                        "Email": "zeina@gmail.com",
                        "replacingTAEmail": "leila@gmail.com",
                        "date": "12/25/2020",
                        "slot": 3,
                        "course": "CA",
                        "time": "11:45",
                        "location": "c7.209",
                        "accepted": 1,
                        "status": "accepted by switching TA , HOD pending",
                        "__v": 0,
                        "HeadOfDepartmentEmail": "Slim@gmail.com",
                        "verifiedByHOD": 0
                }
                ]


HOD verifying replacement requests forwarded to them ------------------------------------------------------------------------------------------------------
---------------you have to login first as a HOD -----------------------------------------------------------------------------------------------------------


Functionality:
                As a HOD, they should be able to view all the replacement request that have been forwarded to them by ID and verifying them(finalizing either accepting or rejecting).
Route: 
                /HODReplacementRequestsVerify

Request type: 
                POST
Parameters:
                -id of the request they wish to either finally accept or reject.
                -accepted bit that is entered as 1 if accepted or 0 if rejected.
RequestBody: 
                {"id":"5fe5cfa3a5d6ee404c4156e0","verifiedByHOD":1}


Example of how to call the route:
                /HODReplacementRequestsVerify
Functionality:
                login as a HOD
Request type: 
                POST 
Request body: 
                {"Email":"Slim@gmail.com","password":"alo"}



TA viewing all accepted requests of all types that he submitted---------------you have to login first as a TA ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


Functionality:
                As a TA, they should be able to view all the accepted requests they have previously submitted.
Route: 
                /viewAcceptedRequests

Request type: 
                GET
Parameters:
RequestBody: 
Example of how to call the route:
                /viewAcceptedRequests
Functionality:
                login as a TA
Request type: 
                POST 
Request body: 
                {"Email":"zeina@gmail.com","password":"alo"}
Response:
                                {
                _id: 5fe524ae8e87f31a74e33fb2,
                Email: 'zeina@gmail.com',
                CourseCoordinatorEmail: 'abdo@gmail.com',
                day: 'wednesday',
                slot: 5,
                course: 'acl',
                accepted: 1,
                status: 'accepted',
                __v: 0
                }


TA viewing all pending requests of all types that he submitted---------------you have to login first as a TA ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


Functionality:
                As a TA, they should be able to view all the still pending requests they have previously submitted.

Route: 
                /viewPendingRequests

Request type: 
                GET
Parameters:
RequestBody: 
Example of how to call the route:
                /viewPendingRequests
Functionality:
                login as a TA
Request type: 
                POST 
Request body: 
                {"Email":"zeina@gmail.com","password":"alo"}
Response:
                                {
                _id: 5fe524ae8e87f31a74e33fb2,
                Email: 'zeina@gmail.com',
                CourseCoordinatorEmail: 'abdo@gmail.com',
                day: 'wednesday',
                slot: 5,
                course: 'acl',
                accepted: 1,
                status: 'pending',
                __v: 0
                }

TA viewing all rejected requests of all types that he submitted---------------you have to login first as a TA ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


Functionality:
                As a TA, they should be able to view all the rejected requests they have previously submitted.

Route: 
                /viewRejectedRequests

Request type: 
                GET
Parameters:
RequestBody: 
Example of how to call the route:
                /viewRejectedRequests
Functionality:
                login as a TA
Request type: 
                POST 
Request body: 
                {"Email":"zeina@gmail.com","password":"alo"}
Response:
                                        {
                _id: 5fe5ba656f51b44a98a049e8,
                Email: 'zeina@gmail.com',
                headOfDepartementEmail: 'Slim@gmail.com',
                requestedDayOff: 'wednesday',
                reasonOfrequest: 'I do yoga on wednesdays',
                accepted: 0,
                status: 'rejected',
                __v: 0,
                reasonOfRejection: 'I do yoga on wednesdays get yourself another day'
                }




TA can cancel a pending slotlinking request ---------------you have to login first as a TA ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


Functionality:
                TA can cancel a pending slotlinking request
Route: 
                /cancelPendingSlotLinkingRequest

Request type: 
                DELETE
Parameters:
                -id of the slot linking request you wish to cancel
RequestBody: 
                {"id":"5fe50d6f9eb57724cc965b3d"}

Example of how to call the route:
                /cancelPendingSlotLinkingRequest
Functionality:
                login as a TA
Request type: 
                POST 
Request body: 
                {"Email":"zeina@gmail.com","password":"alo"}

TA can cancel a pending dayoff request ---------------you have to login first as a TA ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


Functionality:
                TA can cancel a pending dayoff request
Route: 
                /cancelPendingDayOffRequest

Request type: 
                DELETE
Parameters:
                -id of the dayoff request you wish to cancel
RequestBody: 
                {"id":"5fe5ba656f51b44a98a049e8"}                
Example of how to call the route:
                /cancelPendingDayOffRequest
Functionality:
                login as a TA
Request type: 
                POST 
Request body: 
                {"Email":"zeina@gmail.com","password":"alo"}



TA can cancel an upcoming replacement request ---------------you have to login first as a TA ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


Functionality:
                TA can cancel an upcoming replacement request
Route: 
                /cancelUpcomingReplacementRequest

Request type: 
                DELETE
Parameters:
                -id of the upcoming replacement request you wish to cancel
RequestBody: 
                {"id":"5fe5cfa3a5d6ee404c4156e0"}

Example of how to call the route:

                /cancelUpcomingReplacementRequest
Functionality:
                login as a TA
Request type: 
                POST 
Request body: 
                {"Email":"zeina@gmail.com","password":"alo"}



-----------------------------------------------------------------------------------------------------------------------------------------------------------





app.get(/attendance)
	//You need to be logged in first 
	Functionality: get all attendance records of the currently logged in user
	Route: /attendance
	Request type: GET
	Parameters: - 
	Example of how to call the route: /attendance 
	Response Example:  an array of attendance records will be shown. This is an example record for date 12/23/2020 and it shows the minutes spent in that day


			  {
        			"_id": "5fe325b70fceee3318eed53d",
        			"date": "12/23/2020",
        			"minsspent": 0
    			   }


app.get(/missingdays)
	//You need to be logged in first 
	Functionality: get all the days you were abscent in except your days off
	Route: /missingdays
	Request type: GET
	Parameters: - 
	Example of how to call the route: /missingdays 
	Response Example: The response is shown in the terminal in this form:
			
			  12/23/2020
			  Abscent
			
			  12/25/2020
			  Abscent


app.get(/missinghours)
	//You need to be logged in first 
	Functionality: Displays all the missing hours for everyday in your attendance system based on the hours of your sign in and sign out
	Route: /missinghours
	Request type: GET
	Parameters: - 
	Example of how to call the route: /missinghours
	Response Example: The response is shown in the terminal in this form:

			  12/23/2020
			  missing hours: 8 missing minutes :24
			
			  12/24/2020
			  missing hours: 5 missing minutes :10



app.post(/signin)
	//You need to be logged in first 
	Functionality: Simulates user signing into the campus
	Route: /signin
	Request type: POST
	Parameters: Email is used to simulate swiping the card when signing into campus (alternatively many other attributes from user could have been used) (This function doesn't require any password verification but uses token auth)
		{"Email":"x@gmail.com"}
	Example of how to call the route: /signin 
	Response Example: Signin successful + {signintime}


app.post(/signout)
	//You need to be signed in first  (app.post/signin)
	Functionality: Simulates user signing out of the campus and it also adds records to the attendance system
	Route: /signout
	Request type: POST
	Parameters: Email is used to simulate swiping the card when signing out of the  campus (alternatively many other attributes from user could have been used) (This function doesn't require any password verification but uses token auth)
			{"Email":"x@gmail.com"}
	Example of how to call the route: /signout
	Response Example: Signout successful + {signouttime}

app.post(/manualsigninout)
	//You need to be logged in as an HR Staff Member first 
	Functionality: Allows HR staff member to manually add sign in and sign out times for any other user except themselves and add them into the attendance records of that user
	Route: /manualsigninout
	Request type: POST
	Parameters: The Email of the user you want to edit as an HR Staff member ({Email: "x@y.com"})
	Example of how to call the route: /manualsigninout
	Response Example: Updated Successfuly (if all conditions are satisfied correctly)

app.post(/accessAttendance)
	//You need to be logged in as an HR Staff Member first 
	Functionality: Allows HR staff member to view attendance records of any other staff member
	Route: /accessAttendance
	Request type: POST
	Parameters: The Email of the user that you want to access their records and the month you wanna view in the attendance records (December : "12" , Jan: "1" and so on) ({Email: "x@y.com" , "month: "12"})
	Example of how to call the route: /accessAttendance
	Response Example: an array of attendance records will be shown. This is an example record for date 12/23/2020 and it shows the minutes spent in that day


			  {
        			"_id": "5fe325b70fceee3318eed53d",
        			"date": "12/23/2020",
        			"minsspent": 0
    			   }


app.post(/accessMissingDays)
	//You need to be logged in as an HR Staff Member first
	Functionality: get all the days you were abscent in except your days off
	Route: /accessMissingDays
	Request type: POST
	Parameters: The Email of the user that you want to access their records ({Email: "x@y.com"})
	Example of how to call the route: /accessMissingDays
	Response Example: The response is shown in the terminal in this form:
			
			  12/23/2020
			  Abscent
			
			  12/25/2020
			  Abscent


app.post(/accessMissingHours)
	//You need to be logged in as an HR Staff Member first
	Functionality: Displays all the missing hours for everyday in your attendance system based on the hours of your sign in and sign out
	Route: /accessMissingHours
	Request type: POST
	Parameters: The Email of the user that you want to access their records ({Email: "x@y.com"})
	Example of how to call the route: /accessMissingHours
	Response Example: The response is shown in the terminal in this form:

			  12/23/2020
			  missing hours: 8 missing minutes :24
			
			  12/24/2020
			  missing hours: 5 missing minutes :10

app.post(/updateSalary)
	//You need to be logged in as an HR Staff Member first
	Functionality: Allows HR user to update salary based on attendance ( this is useless bec this is automatically called at the end of the month)
	Route: /updateSalary
	Request type: POST
	Parameters: The Email of the user that you want to update their salary({Email: "x@y.com"})
	Example of how to call the route: /updateSalary
	Response Example: Salary Updated Successfuly


app.post(/sendLeaveRequest)
	//You need to be logged in first
	Functionality: Sends a leave request to the correct HOD/Staff Member/Both based on the type and the paramters given (Stores Leaves in database)
	Route: /sendLeaveRequest
	Request type: POST
	Parameters: Paramaters passed to this function will be different based on the leave type but here i will mention them all to make it easier
		    ({Email: "x@y.com"}
		     {replacementStaffEmail: "x@y.com"}
		     {type: "leave type"}
		     {startDate: "mm/dd/yyyy"}
		     {endDate: "mm/dd/yyyy"}
		     {courseName: "c"}
		     {replacementDay: "z"}
		     {replacementStaffMember: "x"}
		     {document: "d"}
		     )
	Example of how to call the route: /sendLeaveRequest
	Response Example: leave sent successfuly


app.get(/viewLeaveRequests)
	//You need to be logged in as an HOD first
	Functionality: As an HOD view all incoming leave requests from staff members
	Route: /viewLeaveRequests
	Request type: GET
	Parameters: -
	Example of how to call the route: /viewLeaveRequests
	Response Example:

		{
        		"_id": "5fe5f5156e400642b0f8e38a",
        		"Email": "zeina@gmail.com",
        		"ID": "AC1",
        		"type": "Sick",
        		"startDate": "12/24/2020",
       		 	"endDate": "12/24/2020",
       		 	"departmentName": "MET",
        		"submissionDate": "25",
        		"document": "Very Sick",
        		"HODemail": "Slim@gmail.com",
        		"__v": 0
    		}


app.get(/viewReplacementRequests)
	//You need to be logged in as a Staff Member first
	Functionality: As an Staff member, view all incoming replacement requests from others staff members
	Route: /viewReplacementRequests
	Request type: GET
	Parameters: -
	Example of how to call the route: /viewReplacementRequests
	Response Example:

{
        		"_id": "5fe5f5156e400642b0f8e38a",
        		"Email": "zeina@gmail.com",
        		"ID": "AC1",
        		"type": "Annual",
        		"startDate": "12/24/2020",
       		 	"endDate": "12/24/2020",
       		 	"departmentName": "MET",
        		"submissionDate": "12/20/2020",
        		"document": "",
			replacementDay":"12/26/2020",
			"replacementStaffMember":"leila ",
			"replacementStaffEmail":"leila@gmail.com",
        		"HODemail": "Slim@gmail.com",
        		"__v": 0
    		}


app.post(/leaveRequestResponse)
	//You need to be logged in as a HOD first
	Functionality: As an HOD, reply to any incoming requests from staff members
	Route: /leaveRequestResponse
	Request type: POST
	Parameters: Email of the staff member you want to respond to their request {"Email":"x@gmail.com"}
	Example of how to call the route: /leaveRequestResponse
	Response Example: -



app.post(/replacementRequestResponse)
	//You need to be logged in as a Staff Member first
	Functionality: As an Staff member, reply to any incoming replacement requests from others staff members
	Route: /replacementReplacementRequests
	Request type: POST
	Parameters: Email of the staff member you want to respond to their request {"Email":"x@gmail.com"}
	Example of how to call the route: /replacementRequestResponse
	Response Example: -

