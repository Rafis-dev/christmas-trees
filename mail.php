<!doctype html>
<html>
<head>
   <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
   <meta name="viewport" content="width=device-width" />
   <meta http-equiv="refresh" content="5;URL=./" />
   <title>Отправка сообщения...</title>


</head>
<style type="text/css">    
body{background:radial-gradient(black 15%,transparent 16%) 0 0,radial-gradient(black 15%,transparent 16%) 8px 8px,radial-gradient(rgba(255,255,255,.1) 15%,transparent 20%) 0 1px,radial-gradient(rgba(255,255,255,.1) 15%,transparent 20%) 8px 9px;background-color:#282828;background-size:16px 16px;color:#fff;margin:0}

div{border:11px outset;display:block;font-family:arial;font-stretch:semi-condensed;font-size:25px;border-color:#4CAF50;background:#ece8c0;padding:15px;border-radius:15px;color:#584e4e;width:80%;min-width:260px;max-width:500px;margin:0 auto;text-align:center}

div.error{border:11px outset;display:block;font-family:arial;font-stretch:semi-condensed;font-size:25px;border-color:#de2113;background:#ece8c0;padding:15px;border-radius:15px;color:#584e4e;width:100%;min-width:260px;max-width:500px;margin:0 auto;text-align:center}

.button{background:#116314;border:3px solid #044006;border-radius:5px;color:#f0ffff;text-decoration:none;text-transform:uppercase;font-size:20px;font-family:inherit;letter-spacing:3px;font-weight:700;padding:7px 15px}

.button:hover{background:#f3b300;border:3px solid #e08500}

div#SLG_balloon_obj{display:none!important}
h3{font-size:30px}
</style>

<body>
 
<?php
   $back = "<p><a class=\"button\" href=\"javascript: history.back()\">Вернуться назад</a></p>";
 
   if(!empty($_POST['phone']) 
   ){   
      $headers = "MIME-Version: 1.0" . "\r\n";
      $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
      $headers .= 'From: zakaz@' . $_SERVER['HTTP_HOST'] . "\r\n";
      $site = trim(strip_tags($_SERVER['HTTP_REFERER']));
      $name = trim(strip_tags($_POST['name']));
      $phone = trim(strip_tags($_POST['phone']));
      $email = trim(strip_tags($_POST['email']));
      $tree = trim(strip_tags($_POST['tree']));
      $height = trim(strip_tags($_POST['height']));
      $cost = trim(strip_tags($_POST['cost']));
      $address = trim(strip_tags($_POST['address']));
      
      
 
      mail('mail@lp-base.pro', 'Заявка с сайта ' .$site, 
      '<br /> <strong>Имя:</strong> '.$name.
      '<br /> <strong>Телефон:</strong> '.$phone.
      '<br /> <strong>Email:</strong> '.$email.
      '<br /> <strong>Модель:</strong> '.$tree.
      '<br /> <strong>Высота:</strong> '.$height.
      '<br /> <strong>Цена:</strong> '.$cost.
      '<br /> <strong>Адрес:</strong> '.$address.
      '<br /> <strong>Сайт:</strong> '.$site,
      $headers);
 
      echo "<br /><center><div><h3>Ваша заявка успешно отправлена!</h3><Br> Мы свяжемся с Вами 
      ближайшее время.<Br><Br> Через 5 секунд Вы вернетесь <Br> на Главную страницу $back </div></center>";
 
      exit;
   } 
   else {
      echo "<br /><center><div class='error'><strong>Для отправки сообщения заполните все поля!</strong><Br> $back </div></center>";
      exit;
   }
?>
</body>
</html>