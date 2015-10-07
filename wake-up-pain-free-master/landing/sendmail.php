<?php

	/*
		REQUIRES
			pear
			pear mail

		INSTALL - on Ubuntu 14.04
			sudo apt-get install pear
			sudo pear install -a mail
	*/

	require_once "Mail.php";

	$name = $_POST['name'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$about = $_POST['about'];

	$from = 'aaron.dnd@gmail.com';
	$to = 'klasschiropractic@mailinator.com';
	$subject = "[NOREPLY] New contact " . $name . " from landing page";
	$body = "Name: " . $name . "  |  Email: " . $email . "  |  Phone: " . $phone "	|	About: " . $about;

	$headers = array(
	'From' => $from,
	'To' => $to,
	'Subject' => $subject
	);

	$smtp = Mail::factory('smtp', array(
	    'host' => 'ssl://smtp.gmail.com',
	    'port' => '465',
	    'auth' => true,
	    'username' => 'aaron.dnd@gmail.com',
	    'password' => 'm3ll0y3ll0'
	));

	$mail = $smtp->send($to, $headers, $body);

	if (PEAR::isError($mail)) {
		echo('There was a problem handling your request, please try again');
		http_response_code(500);		
	} else {
		echo('Message received, thanks!');
	}

?>