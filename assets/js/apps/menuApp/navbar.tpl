<nav id="mtoNav" role="navigation" class="navbar navbar-inverse navbar-fixed-top">
	<div class="navbar-header">
		<button type="button" data-target="#navbarCollapse" data-toggle="collapse" class="navbar-toggle">
			<span class="sr-only">Toggle navigation</span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
		</button>
		<a href="" class="navbar-brand navbar-logged-in"><img src="assets/img/mto_green.png"/></a>
	</div>
	<div id="navbarCollapse" class="collapse navbar-collapse">
		<ul id="miffNavbar" class="nav navbar-nav">
			<li id="miffLoginNav" class="hidden"><a id = "miffLoginA" href="">Login</a></li>
			<li id = "miffUserNav" class="dropdown">
				<!-- set the 'subMenu' attribute to 'true' for subMenus.  hack code in app will prevent collapse -->
				<a id="userNavA" subMenu='true' data-toggle="dropdown" class="dropdown-toggle" href="#"><%-username%><b class="caret"></b></a>
				<ul role="menu" class="dropdown-menu">
					<li><a id="userLogoff" href="">Logoff</a></li>
				</ul>                
			</li>
			<li id = "festYear" class="dropdown">
				<!-- set the 'subMenu' attribute to 'true' for subMenus.  hack code in app will prevent collapse -->
				<a id="yearSelect" subMenu="true" data-toggle="dropdown" class="dropdown-toggle" href="">Year<b class="caret"></b></a>
				<ul role="menu" class="dropdown-menu">
					<li><a id="y2015" class="mYearSelect" fyear="2015" data-toggle="collapse" data-target="#navbar" href="">2015</a></li>
					<li><a id="y2016" class="mYearSelect" fyear="2016" href="">2016</a></li>
					<li><a id="y2017" class="mYearSelect" fyear="2017" href="">2017</a></li>
					<li><a id="y2018" class="mYearSelect" fyear="2018" href="">2018</a></li>
					<li><a id="y2019" class="mYearSelect" fyear="2019" href="">2019</a></li>
					<li><a id="y2020" class="mYearSelect" fyear="2020" href="">2020</a></li>
				</ul>                
			</li>
			<li id="adminToggleLi" ><a id="adminToggleA" href="">Admin Panel</a></li>
		</ul>
		
	</div>
</nav>