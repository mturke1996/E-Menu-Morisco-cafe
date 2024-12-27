<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // إعداد البريد
    $to = "mohturke96@gmail.com"; // ضع بريدك هنا
    $subject = "رسالة جديدة من نموذج التواصل";
    $body = "الاسم: $name\n\nالبريد الإلكتروني: $email\n\nالرسالة:\n$message";
    $headers = "From: $email\r\n";

    // إرسال البريد
    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('تم إرسال رسالتك بنجاح!'); window.location.href = 'index.html';</script>";
    } else {
        echo "<script>alert('حدث خطأ أثناء إرسال الرسالة. حاول مرة أخرى لاحقًا.'); window.location.href = 'index.html';</script>";
    }
} else {
    header("Location: index.html");
    exit();
}
?>
