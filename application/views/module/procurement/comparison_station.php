<div id="dashboard" class="col-md-12">
				
	<div class="col-md-12">
		
		<div class="custom_breadcrumb col-md-12">
			<div class="">
				<nav class="">
					<a class="custom_breadcrumb-item" href="#"><i class="fa fa-home" aria-hidden="true"></i></a>
					<span><i class="fa fa-angle-right breadcrumb_divider" aria-hidden="true"></i></span>
					<a class="custom_breadcrumb-item" href="#">Phase 1</a>
					<span><i class="fa fa-angle-right breadcrumb_divider" aria-hidden="true"></i></span>
					<a class="custom_breadcrumb-item" href="#">Summary</a>
					<span><i class="fa fa-angle-right breadcrumb_divider" aria-hidden="true"></i></span>
					<span class="custom_breadcrumb-item active">Comparison</span>
				</nav>
			</div>
			<div class="title">
				Comparison
			</div>
		</div>
		
		<div class="col-md-12 plate_portlet">
			<div class="row">
				
				<div class="col-md-9">
					<div class="row">
						
						<!-- -- -->
						<?php include 'portlet/portlet_comparison.html'; ?>
						<!-- -- -->
						
						<!-- -- -->
						<?php include 'portlet/portlet_comparison.html'; ?>
						<!-- -- -->
						
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
		
	</div>
	
</div>