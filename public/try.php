<?php
session_start();
require '../model/Model.php';
require '../model/User.php';
require '../model/Contact.php';
require '../model/Msg.php';
require '../model/File.php';
require '../model/Router.php';
Rout::getFreinds();

print_r(Rout::getFreinds()[0][0]);



?>