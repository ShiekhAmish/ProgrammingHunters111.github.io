<?php

$name = $_POST['name'];
$email = $_POST['email'];
$comment = $_POST['comment'];

$conn = new mysqli('localhost','root','','project_blog');
if($conn->connect_error)
{
	die('Connection Failed: '.$conn->connect_error);
	
}

else
{
	$stmt = $conn->prepare("insert into comment(name,email,comment) values (?,?,?)");
	$stmt->bind_param("sss",$name,$email,$comment);
	$stmt->execute();
	echo "Comment Successfully Added...";
	$stmt->close();
	$conn->close();
}
?>