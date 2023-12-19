

<?php
     $fullname=$_POST["fullname"];
     $uname=$_POST["username"];
     $email=$_POST["email"];
     $phonenumber=$_POST["phonenumber"];
     $password=$_POST["password"];
     $confirmpassword=$_POST["confirmpassword"];
     $gender=$_POST["gender"];


    $dsn="mysql:dbname=contact";
    $username="root";
    $password="";
    $conn=new PDO($dsn,$username,$password);
    $strquery="insert into register values(:fullname,:username,:email,:phonenumber,:password,:confirmpassword,:gender)";
     $st=$conn->prepare($strquery);
        $st->bindValue(":fullname",$fullname,PDO::PARAM_STR);
        $st->bindValue(":username",$uname,PDO::PARAM_STR);
        $st->bindValue(":email",$email,PDO::PARAM_STR);
        $st->bindValue(":phonenumber",$phonenumber,PDO::PARAM_INT);
        $st->bindValue(":password",$password,PDO::PARAM_STR);
        $st->bindValue(":confirmpassword",$confirmpassword,PDO::PARAM_STR);
        $st->bindValue(":gender",$gender,PDO::PARAM_STR);
        $st->execute();
     echo "Sucessfully inserted";
     echo "<br>";
     echo "<br>";
    ?>