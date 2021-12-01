<template>
	<header class="header">

		<nav class="navbar navbar-custom" role="navigation">

			<div class="container">

				<div class="navbar-header">
					<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#custom-collapse">
						<span class="sr-only">Дополнительная навигация</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<NuxtLink class="navbar-brand" style="font-family: Raleway400, sans-serif;" to="/">Сергей Запольский</NuxtLink>
				</div>

				<div id="custom-collapse" class="collapse navbar-collapse">
					<ul class="nav navbar-nav navbar-right">
						<li><NuxtLink to="/">Начало</NuxtLink></li>
						<li><NuxtLink to="/">Услуги</NuxtLink></li>
            <li><NuxtLink to="/">Работы</NuxtLink></li>
            <li><NuxtLink to="/">Навыки</NuxtLink></li>
						<li><a href="#template">Шаблоны</a></li>
						<li><NuxtLink to="/template/blog/rtr">Контакты</NuxtLink></li>
					</ul>
				</div>

			</div><!-- .container -->

		</nav>

	</header>
</template>
