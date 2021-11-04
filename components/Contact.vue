<template>
	<section id="contact" class="pfblock" style="background: #ffffff;">
		<div class="container">
			<div class="row">

				<div class="col-sm-6 col-sm-offset-3">

					<div class="pfblock-header">
						<h2 class="pfblock-title">Пишите</h2>
						<div class="img-section"><img src="assets/images/tools/mail-section.png" alt="Пишите" title="Пишите" /></div>
						<div class="pfblock-subtitle">
							Кратко опишите вашу задачу. Я обязательно свяжусь с вами.
						</div>
					</div>

				</div>

			</div>

			<div class="row">

				<div class="col-sm-6 col-sm-offset-3">

					<form id="contact-form" role="form">
						<input type="hidden" id="c_template_id" name="c_template_id" value="0" />
						<input type="hidden" id="c_template_url" name="c_template_url" value="" />
						<div class="ajax-hidden">
							<div class="form-group wow fadeInUp">
								<label class="sr-only" htmlFor="c_name">Имя</label>
								<input type="text" id="c_name" class="form-control" name="c_name" placeholder="Имя" />
							</div>

							<div class="form-group wow fadeInUp" data-wow-delay=".1s">
								<label class="sr-only" htmlFor="c_email">Email</label>
								<input type="email" id="c_email" class="form-control" name="c_email" placeholder="E-mail" />
							</div>

							<div class="form-group wow fadeInUp" data-wow-delay=".2s">
								<textarea class="form-control" id="c_message" name="c_message" rows="7" placeholder="Ваше сообщение"></textarea>
							</div>

							<button type="submit" class="btn btn-lg btn-block wow fadeInUp" data-wow-delay=".3s">Отправить сообщение</button>
						</div>
						<div class="ajax-response" style="margin-top: 15px; color: green;"></div>
					</form>

				</div>

			</div>
		</div>
	</section>
</template>
