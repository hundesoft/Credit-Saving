<?php
require 'DbConn.php';//including database
//basic CRUD operation

//Read operation for registration(GET method)
$registration = [];

$sql = ' SELECT * FROM registration';

if($result = mysqli_query($dbcon,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $registration[$i]['id']    = $row['id'];
    $registration[$i]['fname'] = $row['fname'];
    $registration[$i]['mname'] = $row['mname'];
    $registration[$i]['lname'] = $row['lname'];
    $registration[$i]['maritalStatus'] = $row['maritalStatus'];

    $registration[$i]['houseNo']    = $row['houseNo'];
    $registration[$i]['educationLevel'] = $row['educationLevel'];
    $registration[$i]['workRoom'] = $row['workRoom'];
    $registration[$i]['department'] = $row['department'];
    $registration[$i]['phone'] = $row['phone'];
    $registration[$i]['addres'] = $row['addres'];
    $registration[$i]['city']    = $row['city'];
    $registration[$i]['kebele'] = $row['kebele'];
    $registration[$i]['birthdate'] = $row['birthdate'];
    $registration[$i]['rank'] = $row['rank'];
    $registration[$i]['gender']    = $row['gender'];
    $registration[$i]['accountNo'] = $row['accountNo'];
    $i++;
  }

  echo json_encode($registration);
}
else
{
  http_response_code(404);
}

//create operation for registration form(POST method)

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);

  // Sanitize.
  $fname = mysqli_real_escape_string($dbcon, trim($request->fname));
  $mname = mysqli_real_escape_string($dbcon, trim($request->mname));
  $lname = mysqli_real_escape_string($dbcon, trim($request->lname));
  $maritalStatus = mysqli_real_escape_string($dbcon, trim($request->maritalStatus));
  $houseNo = mysqli_real_escape_string($dbcon, trim($request->houseNo));
  $educationLevel = mysqli_real_escape_string($dbcon, trim($request->educationLevel));
  $workRoom = mysqli_real_escape_string($dbcon, trim($request->workRoom));
  $department = mysqli_real_escape_string($dbcon, trim($request->department));
  $phone = mysqli_real_escape_string($dbcon, trim($request->phone));
  $addres = mysqli_real_escape_string($dbcon, trim($request->addres));
  $city = mysqli_real_escape_string($dbcon, trim($request->city));
  $kebele = mysqli_real_escape_string($dbcon, trim($request->addres));
  $birthdate = mysqli_real_escape_string($dbcon, trim($request->birthdate));
  $rank = mysqli_real_escape_string($dbcon, trim($request->rank));
  $gender = mysqli_real_escape_string($dbcon, trim($request->gender));
  $accountNo	 = mysqli_real_escape_string($dbcon, trim($request->accountNo	));
  // Create.
  $sql = "INSERT INTO `registration`(`id`,`fname`,`mname`,`lname`,`maritalStatus`,`houseNo`,`educationLevel`,`workRoom`,`department`,`phone	`,`addres`,`city`,`kebele`,`birthdate`,`rank`,`gender`,`accountNo`) 
  VALUES ('{$id}','{$fname}','{$mname}','{$lname}','{$maritalStatus}','{$houseNo}','{$educationLevel}','{$workRoom}','{$department}','{$phone}','{$addres}','{$city}','{$kebele}','{$birthdate}','{$rank}','{$gender}','{$accountNo}')";

  if(mysqli_query($dbcon,$sql))
  {
    http_response_code(201);
    $registration = [
      'id'=>$id,
      'fname' => $fname,
      'mname' => $mname,
      'lname' => $lname,
      'maritalStatus' =>$maritalStatus,
      'houseNo' =>$houseNo,
      'educationLevel' =>$educationLevel,
      'workRoom' =>$workRoom,
      'department' =>$department,
      'phone' =>$phone,
      'addres' =>$addres,
      'city' =>$city,
      'kebele' =>$kebele,
      'birthdate' =>$birthdate,
      'rank' =>$rank,
      'gender' =>$gender,
      'accountNo' =>$accountNo

    ];
    echo json_encode($registration);
  }
  else
  {
    http_response_code(422);
  }
}

//update operation for registration form(PUT method)

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);
  // Validate.
  
  // Sanitize.
  $id    = mysqli_real_escape_string($dbcon, (int)$request->id);
  $fname = mysqli_real_escape_string($dbcon, trim($request->fname));
  $mname = mysqli_real_escape_string($dbcon, trim($request->mname));
  $lname = mysqli_real_escape_string($dbcon, trim($request->lname));
  $maritalStatus = mysqli_real_escape_string($dbcon, trim($request->maritalStatus));
  $houseNo = mysqli_real_escape_string($dbcon, trim($request->houseNo));
  $educationLevel = mysqli_real_escape_string($dbcon, trim($request->educationLevel));
  $workRoom = mysqli_real_escape_string($dbcon, trim($request->workRoom));
  $department = mysqli_real_escape_string($dbcon, trim($request->department));
  $phone = mysqli_real_escape_string($dbcon, trim($request->phone));
  $addres = mysqli_real_escape_string($dbcon, trim($request->addres));
  $city = mysqli_real_escape_string($dbcon, trim($request->city));
  $kebele = mysqli_real_escape_string($dbcon, trim($request->kebele));
  $birthdate = mysqli_real_escape_string($dbcon, trim($request->birthdate));
  $rank	 = mysqli_real_escape_string($dbcon, trim($request->rank	));
  $gender = mysqli_real_escape_string($dbcon, trim($request->gender));
  $accountNo = mysqli_real_escape_string($dbcon, trim($request->accountNo));

  // Update.
  $sql = "UPDATE `registration` SET `id`='$id',`fname`='$fname',`mname`='$mname',`lname`='$lname',`maritalStatus`='$maritalStatus',`houseNo`='$houseNo', WHERE `id` = '{$id}' LIMIT 1";

  if(mysqli_query($dbcon, $sql))
  {
    http_response_code(204);
  }
  else
  {
    return http_response_code(422);
  }  
}

//delete operation for registration form(delete method)

?>


