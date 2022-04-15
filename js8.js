<!DOCTYPE html>
<html> 
    <body>
        <p id="demo"></p>
        <p id="demo1"></p>
        <p id="demo2"></p>
        <p id="demo3"></p>
        <p id="demo4"></p>
        <p id="demo5"></p>
        <p id="demo6"></p>
       
        <script>
            const student=["vandana","saraswathi","niiharika","ajay"];
            document.getElementById("demo").innerHTML=student.toString();
            document.getElementById("demo1").innerHTML=student.sort();
            document.getElementById("demo2").innerHTML=student.pop();
            document.getElementById("demo3").innerHTML=student.push("shifali");
            document.getElementById("demo4").innerHTML=student.length;
            document.getElementById("demo5").innerHTML=student.indexOf("vandana");
            document.getElementById("demo6").innerHTML=student.join();
            

        </script>
    </body>
</html>
