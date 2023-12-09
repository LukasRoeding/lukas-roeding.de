<?php
header("Access-Control-Allow-Origin: http://http://127.0.0.1:5500");
include 'sql.php';

if($_SERVER['REQUEST_METHOD'] === 'POST') {
    echo 'Hello ' . htmlspecialchars($_POST["name"]) . '!';
}
?>
