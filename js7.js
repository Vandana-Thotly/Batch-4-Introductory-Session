<!DOCTYPE html>
<html>
    
    <body>
        <h2>Vandana Brief Profile</h2>
        <p id="demo"></p>
        <p id="demo1"></p>
        <p id="demo2"></p>
        <script>
            //const name=["vandana","saraswathi","niharika"]
            //document.getElementById("demo").innerHTML=name[1];
            const student={
                name:"vandana",
                lname:"Thotly",
                grade:"A"
            };
            
            document.getElementById("demo").innerHTML=student.name+student.lname+"studying in final year with a grade "+student.grade;
            const student1={
                name1:"Niharika",
                lname1:"Thotly",
                grade1:"A"
            };
            document.getElementById("demo1").innerHTML=student1.name1+student1.lname1+"studying in first year with a grade "+student1.grade1;
            const student2={
                name2:"saraswathi",
                lname2:"Thotly",
                grade2:"A"
            };
            document.getElementById("demo2").innerHTML=student2.name2+student2.lname2+"studying in first year with a grade "+student2.grade2;
        </script>
    </body>
</html>
