<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Process the data, e.g., send an email or save to a database
    // For debugging, you can echo the values
    echo "Name: $name, Email: $email, Message: $message";
} else {
    echo "Invalid request method.";
}
?>
