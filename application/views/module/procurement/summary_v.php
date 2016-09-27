<div id="dashboard" class="col-md-12">
				
	<div class="col-md-12">
		
		<div class="custom_breadcrumb col-md-12">
			<div class="">
				<nav class="">
					<a class="custom_breadcrumb-item" href="#"><i class="fa fa-home" aria-hidden="true"></i></a>
					<span><i class="fa fa-angle-right breadcrumb_divider" aria-hidden="true"></i></span>
					<a class="custom_breadcrumb-item" href="#">Viaduct</a>
					<span><i class="fa fa-angle-right breadcrumb_divider" aria-hidden="true"></i></span>
					<span class="custom_breadcrumb-item active">Summary</span>
				</nav>
			</div>
			<div class="title">
				Summary
			</div>
		</div>
		
		<div class="col-md-9 plate_portlet">
			<div class="row">
				
				<?php include 'portlet/portlet_summary_v.html' ?>
				
			</div>
		</div>
		
		<div class="col-md-3 plate_issue">
			<div class="row">
				
				<?php include 'portlet/portlet_issue.html' ?>
				<?php include 'portlet/portlet_mitigation.html' ?>
				
			</div>
		</div>
		
	</div>
	
</div>