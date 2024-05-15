<?php 
require_once("../conexao.php");
$tabela = 'usuarios';

$postjson = json_decode(file_get_contents('php://input'), true);

$id = @$postjson['regID'];
$nome = @$postjson['userName'];
$senha = @$postjson['userPassword'];
$email = @$postjson['userEmail'];
$tipo_user = @$postjson['userType'];

//validar email
$query = $pdo->query("SELECT * FROM $tabela where email_usuario = '$email'");
$res = $query->fetchAll(PDO::FETCH_ASSOC);
$total_reg = @count($res);
if($total_reg > 0 and $res[0]['id_usuario'] != $id){
	$result = json_encode(array('mensagem'=>'Email já Cadastrado, escolha Outro!', 'success'=>false));
	echo $result;	
	exit();
}

if($id == "" || $id == "0"){
	$res = $pdo->prepare("INSERT INTO $tabela SET nome_usuario = :nome_usuario, email_usuario = :email_usuario, senha_usuario = :senha_usuario, tipo_usuario = :tipo_usuario");	
}else{
	$res = $pdo->prepare("UPDATE $tabela SET nome_usuario = :nome_usuario, email_usuario = :email_usuario, senha_usuario = :senha_usuario, tipo_usuario = :tipo_usuario where id_usuario = '$id'");
}


$res->bindValue(":nome_usuario", "$nome");
$res->bindValue(":senha_usuario", "$senha");
$res->bindValue(":email_usuario", "$email");
$res->bindValue(":tipo_usuario", "$tipo_user");

$res->execute();


$result = json_encode(array('mensagem'=>'Salvo com sucesso!', 'success'=>true));

echo $result;

?>