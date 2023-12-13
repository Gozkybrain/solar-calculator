<?php 
// Include config file
session_start();
require_once "config.php";
 
// Define variables and initialize with empty values
$nameErr = $emailErr = "";
$name = $email = $address = $mobile = $total_load = "";
$inverter_rating = $battery_size = $battery_number = $backup_time = $price = "";
 
// Processing form data when form is submitted
if($_SERVER["REQUEST_METHOD"] == "POST"){
 
    // Validate user name
    if(empty($_POST["fullname"])){
        $nameErr = "Please enter your name.";
    } else{
        $name = $_POST["fullname"];
    }
    
    // Validate email address
    if(empty($_POST["email"])){
        $emailErr = "Please enter your email address.";     
    } else{
        $email = $_POST["email"];
    }

    $address = $_POST["address"];
    $mobile = $_POST["mobile"];
    $totalLoad = $_POST["total_load"];
    $invRating = $_POST["inverter_rating"];
    $batSize = $_POST["battery_size"];
    $batNum = $_POST["battery_number"];
    $backupTime = $_POST["backup_time"];
    
    // Check input errors before sending email
    if(empty($nameErr) && empty($emailErr) ){
         // Prepare an insert statement
         $sql = "INSERT INTO customers (name, email, address, mobile, price, totalLoad, invRating, batSize, batNum, backupTime, createdAt) 
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
         
         if($stmt = mysqli_prepare($conn, $sql)){
             // Bind variables to the prepared statement as parameters
             mysqli_stmt_bind_param($stmt, "ssssssssss", $param_name, $param_email, $param_address, $param_mobile, 
                $param_totalLoad, $param_invRating, $param_batSize, $param_batNum, $param_backupTime, $param_createdAt);
             
             // Set parameters
             $param_name = $name;
             $param_email = $email;
             $param_address = $address;
             $param_mobile = $mobile;
             $param_totalLoad = $totalLoad;
             $param_invRating = $invRating;
             $param_batSize = $batSize;
             $param_batNum = $batNum;
             $param_backupTime = $backupTime;
             $param_createdAt = date('d-m-y h:i:s');
             
             // Attempt to execute the prepared statement
             if(mysqli_stmt_execute($stmt)){
                // Close statement
                mysqli_stmt_close($stmt);
                // Close connection
                mysqli_close($conn);
                // Records created successfully. Send an Email
                $receiver = $email;
                $subject = "Solar Audit Log";
                $body = "Hi, $name. This is the details of your solar audit." ."\n". "Total Load: $totalLoad" ."\n". 
                "Suggested Inverter Rating: $invRating" ."\n". "Battery Size: $batSize" ."\n". 
                "Suggested Number of Batteries: $batNum" ."\n".
                "Estimated Backup Time: $backupTime ";
                $sender = "From: contact@soutechventures.com";
                if(mail($receiver, $subject, $body, $sender)){
                    $_SESSION['flash'] = 'Email sent successfully';
                    header("location: index.php");
                }else{
                    $_SESSION['flash'] = 'Email sending failed';
                    header("location: index.php");
                }
             } else{
                // Close statement
                mysqli_stmt_close($stmt);
                // Close connection
                mysqli_close($conn);
               $_SESSION['flash'] = 'Failed to commit to the database';
               header("location: index.php");
             }
         }
          
     }
     
}


?>