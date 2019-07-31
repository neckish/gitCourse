<?php
//INIT SECURE PHP HEADERS
header("Cache-Control: no-cache, no-store, must-revalidate");
header("Pragma: no-cache"); 
header("Expires: 0");
header("X-XSS-Protection: 1; mode=block");
header("X-Content-Type-Options: nosniff");
header("Strict-Transport-Security: max-age=31536000");
header("Referrer-Policy: origin");
header("Expect-CT: max-age=7776000, enforce");
header('X-Frame-Options: Deny');
ini_set('memory_limit', '4024M');
ini_set("session.cookie_httponly", "True");
ini_set("session.cookie_secure", 1);
//INIT SECURE PHP HEADERS
if($_POST)
{
session_start();
session_regenerate_id(true);
$idioma = strip_tags(trim(base64_decode($_REQUEST['id'])));
$_SESSION['flag_idioma'] = $idioma;
}
else
{
echo "Forbidden";
}
?>