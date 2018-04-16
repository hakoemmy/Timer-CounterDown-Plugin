<!doctype html>
<html lang = "en">
<head>
<meta charset="utf-8">
<title>Timer/CounterPlugin Jquery Plugin</title>
<link rel="stylesheet" type="text/css" href="css/styling.css"/>
</head>
<body>
   <div id="countdown">
       <h3>Deadline:</h3>
      <span class="days">00</span> Days
      <span class="hours">00</span> hours
      <span class="minutes">00</span> minutes
      <span class="seconds">00</span> seconds


   </div><br/><br/>

<script type="text/javascript" src="js/jquery-pure.js"></script>
<script type="text/Javascript" src="js/plugin.js"></script>
<script type="text/javascript" src="js/use.js"></script>
<footer id="footer"><?php $period = date('Y');?>
 &copy <?php echo "2018-".$period." by H.E, The Software Developer, AllRights Reserved"; ?>
</footer>
</body>
</html>