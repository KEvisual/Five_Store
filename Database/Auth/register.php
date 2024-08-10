<?php
// Muhamad Raafi Auliya Azzakhry (10123376) 
require '../connection.php';

$email = $_POST['email'];
$password = $_POST['password'];
$nama = $_POST['nama'];
$noHp = $_POST['noHp'];

$response = array();

try {
    $sql = "INSERT INTO daftar_akun (email, password, nama, nomorTelephone) VALUES (:email, :password, :nama, :noHp)";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':password', $password);
    $stmt->bindParam(':nama', $nama);
    $stmt->bindParam(':noHp', $noHp);
    $stmt->execute();

    $response["message"] = "Data berhasil dimasukkan";
} catch (PDOException $e) {
    $response["error"] = $e->getMessage();
}

echo json_encode($response);
?>
