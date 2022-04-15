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
        <p id="demo7"></p>
        <p id="demo8"></p>
        <script>
            let str="Hi my name is Vandana";
            document.getElementById("demo").innerHTML=str.indexOf("vandana");
            document.getElementById("demo1").innerHTML=str.length;    
            document.getElementById("demo2").innerHTML=str.slice(3,10);
            document.getElementById("demo3").innerHTML=str.replace("vandana","saraswathi");
            document.getElementById("demo4").innerHTML=str.toLowerCase();
            let a ="Hello";
            let b ="Welcome to JS";
            let c =a.concat(" ",b);
            document.getElementById("demo5").innerHTML = c;
            let d = "5";
            document.getElementById("demo6").innerHTML = d.padStart(6,"0");
            document.getElementById("demo7").innerHTML =str.match("ame");
            document.getElementById("demo8").innerHTML =str.search("name");

        </script>
    </body>
</html>

