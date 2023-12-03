<?php
if($_SERVER['REQUEST_METHOD'] === 'POST') {
    var_dump($_POST['name']);
}
echo 'Hello ' . htmlspecialchars($_POST["name"]) . '!';
?>
