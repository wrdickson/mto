<?php 
    session_start();
    define('BASE_URL', "http://localhost/mto/");
    define('BASE_ROOT', "mto");
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<title>MyTrail.org</title>
    <!--
    NOTE: because of the routing from maps/:id, we need to use absolute urls!
    -->  
    <link rel="stylesheet" href="<?php echo BASE_URL?>assets/css/application.css">
    <link rel="stylesheet" href="<?php echo BASE_URL?>assets/js/vendor/node_modules/bootstrap/dist/css/bootstrap.css">
    <link rel="stylesheet" href="<?php echo BASE_URL?>assets/js/vendor/node_modules/bootstrap/dist/css/bootstrap-theme.min.css"> 
  

 
  </head>
  <body>
	<div id='navbar'>navbar</div>

            <div class="container-fluid mainContent">
                <div class="row">
                    <div class="col-md-3 col-sm-4 " id="leftCol" >
                        <div id="filmListView">
							filmListView
							<div id="sidebar1"></div>
                        </div>    
                    </div>
					<!-- change to col-md-9 for production -->
                    <div class="col-md-9 col-sm-8 " id="workslate">
                        <div  id="workslateContent">
							<div id="v1">v1</div>
							<div id="v2">v2</div>
                        </div>
                    </div>
                </div>
            </div>
			<div id="spinnerWrapper">
				<div id="spinner">
				</div>
			</div>
           
			<div id="dialogRegion"></div>
            
            <script data-main="<?php echo BASE_URL?>assets/js/require_main.js" src="<?php echo BASE_URL?>assets/js/vendor/node_modules/requirejs/require.js"></script>
       
 	 <!--   
            <script src="<?php echo BASE_URL?>assets/js/build/compiled.js"></script>
       -->     
   </body>
</html>
