<?php
require 'DbConn.php';//including database
//basic CRUD operation

//Read operation for mesenabecha(GET method)
$mesenabecha = [];

$sql = ' SELECT * FROM mesenabecha';

if($result = mysqli_query($dbcon,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $mesenabecha[$i]['day']    = $row['day'];
    $mesenabecha[$i]['letterNumber'] = $row['letterNumber'];
    $mesenabecha[$i]['applicantFname'] = $row['applicantFname'];
    $mesenabecha[$i]['applicantMname'] = $row['applicantMname'];
    $mesenabecha[$i]['applicantLname'] = $row['applicantLname'];
    $mesenabecha[$i]['fp'] = $row['fp'];
    $mesenabecha[$i]['sector'] = $row['sector'];
    $mesenabecha[$i]['department'] = $row['department'];
    $mesenabecha[$i]['address'] = $row['address'];
    $mesenabecha[$i]['sub_city'] = $row['sub_city'];
    $mesenabecha[$i]['wereda'] = $row['wereda'];
    $mesenabecha[$i]['phone'] = $row['phone'];
    $mesenabecha[$i]['payrollNumber'] = $row['payrollNumber'];
    $mesenabecha[$i]['applicantGender'] = $row['applicantGender'];
    $mesenabecha[$i]['saving'] = $row['saving'];
    $mesenabecha[$i]['total'] = $row['total'];
    $mesenabecha[$i]['startedSaving'] = $row['startedSaving'];
    $mesenabecha[$i]['reasonWithdraFromMembership'] = $row['reasonWithdraFromMembership'];
    $i++;
  }

  echo json_encode($mesenabecha);
}
else
{
  http_response_code(404);
}

//create operation for mesenabecha form(POST method)

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);

  // Sanitize.
  $day = mysqli_real_escape_string($dbcon, trim($request->day));
  $letterNumber = mysqli_real_escape_string($dbcon, trim($request->letterNumber));
  $applicantFname = mysqli_real_escape_string($dbcon, trim($request->applicantFname));
  $applicantMname  = mysqli_real_escape_string($dbcon, trim($request->applicantMname ));
  $applicantLname = mysqli_real_escape_string($dbcon, trim($request->applicantLname));
  $fp = mysqli_real_escape_string($dbcon, trim($request->fp));
  $sector = mysqli_real_escape_string($dbcon, trim($request->sector));
  $department	 = mysqli_real_escape_string($dbcon, trim($request->department	));
  $address = mysqli_real_escape_string($dbcon, trim($request->address));
  $sub_city = mysqli_real_escape_string($dbcon, trim($request->sub_city));
  $wereda = mysqli_real_escape_string($dbcon, trim($request->wereda));
  $phone = mysqli_real_escape_string($dbcon, trim($request->phone));
  $payrollNumber = mysqli_real_escape_string($dbcon, trim($request->payrollNumber));
  $applicantGender = mysqli_real_escape_string($dbcon, trim($request->applicantGender));
  $saving = mysqli_real_escape_string($dbcon, trim($request->saving));
  $total = mysqli_real_escape_string($dbcon, trim($request->total));
  $startedSaving = mysqli_real_escape_string($dbcon, trim($request->startedSaving));
  $reasonWithdraFromMembership = mysqli_real_escape_string($dbcon, trim($request->reasonWithdraFromMembership));
  // Create.
  $sql = "INSERT INTO `mesenabecha`(`day`,`letterNumber`,`applicantFname`,`applicantMname`,`applicantLname`,`fp`,`sector`,`department`,`address`,`sub_city`,`wereda`,`phone`,`payrollNumber`,`applicantGender`,`saving`,`total`,`startedSaving`,`reasonWithdraFromMembership`) 
  VALUES ('{$day}','{$letterNumber}','{$applicantFname}','{$applicantMname}','{$applicantLname}','{$fp}','{$sector}','{$department}','{$address}','{$sub_city}','{$wereda}','{$phone}','{$payrollNumber}','{$applicantGender}','{$saving}','{$total}','{$startedSaving}','{$reasonWithdraFromMembership}')";

  if(mysqli_query($dbcon,$sql))
  {
    http_response_code(201);
    $registration = [
      'day' => $day,
      'letterNumber' => $letterNumber,
      'applicantFname' => $applicantFname,
      'applicantMname ' =>$applicantMname ,
      'applicantLname' => $applicantLname,
      'fp' => $fp,
      'sector' => $sector,
      'department' => $department,
      'address' => $address,
      'sub_city' => $sub_city,
      'wereda' => $wereda,
      'phone' => $phone,
      'payrollNumber' => $payrollNumber,
      'applicantGender' => $applicantGender,
      'saving' => $saving,
      'total' => $total,
      'startedSaving' => $startedSaving,
      'reasonWithdraFromMembership' => $reasonWithdraFromMembership,
      
    ];
    echo json_encode($mesenabecha);
  }
  else
  {
    http_response_code(422);
  }
}

//update operation for mesenabecha form(PUT method)

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);
  // Validate.
  if ((int)$request->id < 1 || trim($request->number) == '' || (float)$request->id < 0) {
    return http_response_code(400);
  }
  // Sanitize.
  $day = mysqli_real_escape_string($dbcon, trim($request->day));
  $letterNumber = mysqli_real_escape_string($dbcon, trim($request->letterNumber));
  $applicantFname = mysqli_real_escape_string($dbcon, trim($request->applicantFname));
  $applicantMname  = mysqli_real_escape_string($dbcon, trim($request->applicantMname ));
  $applicantLname = mysqli_real_escape_string($dbcon, trim($request->applicantLname));
  $fp = mysqli_real_escape_string($dbcon, trim($request->fp));
  $sector = mysqli_real_escape_string($dbcon, trim($request->sector));
  $department	 = mysqli_real_escape_string($dbcon, trim($request->department	));
  $address = mysqli_real_escape_string($dbcon, trim($request->address));
  $sub_city = mysqli_real_escape_string($dbcon, trim($request->sub_city));
  $wereda = mysqli_real_escape_string($dbcon, trim($request->wereda));
  $phone = mysqli_real_escape_string($dbcon, trim($request->phone));
  $payrollNumber = mysqli_real_escape_string($dbcon, trim($request->payrollNumber));
  $applicantGender = mysqli_real_escape_string($dbcon, trim($request->applicantGender));
  $saving = mysqli_real_escape_string($dbcon, trim($request->saving));
  $total = mysqli_real_escape_string($dbcon, trim($request->total));
  $startedSaving = mysqli_real_escape_string($dbcon, trim($request->startedSaving));
  $reasonWithdraFromMembership = mysqli_real_escape_string($dbcon, trim($request->reasonWithdraFromMembership));




  // Update.
  $sql = "UPDATE `mesenabecha` SET `letterNumber`='$letterNumber',`applicantFname`='$applicantFname',`applicantMname`='$applicantMname',`applicantLname`='$applicantLname',`fp`='$fp',`sector`='$sector',`department`='$department',`address`='$address',`sub_city`='$sub_city',`wereda`='$wereda',`phone`='$phone',`payrollNumber`='$payrollNumber',`applicantGender`='$applicantGender',`saving`='$saving',`total`='$total',`startedSaving`='$startedSaving',`reasonWithdraFromMembership`='$reasonWithdraFromMembership' WHERE `day` = '{$day}' LIMIT 1";

  if(mysqli_query($dbcon, $sql))
  {
    http_response_code(204);
  }
  else
  {
    return http_response_code(422);
  }  
}

//delete operation for mesenabecha form(delete method)

?>


