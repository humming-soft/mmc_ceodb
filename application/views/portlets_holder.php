<!-- to use scroller : class="col-md-12 scroll_set_1" -->
<?php include 'templates/portlet_header.php' ?>
<title>CEODB L2</title>
<div id="wrapper" class="">
    <div id="loading_pad" class="loading_pad loading_pad_gohide">
    	<span>
    		<p>Loading</p>
    		<img src="../assets/img/loading.gif">
    	</span>
    </div>
    <div id="wrapper_landing_page">
        <!-- header -->
        <div id="header">
            <?php include 'module/header_menu.php' ?>
        </div>
        <!-- -- -->
        <!-- content -->
        <div id="content">
            <div id="dashboard" class="col-md-12">
                <div class="col-md-12">
                    <div class="">
                        <nav class="">
                            <a class="custom_breadcrumb-item" style="outline: 0; padding: 0 5px; font-size: .9em;" href="<?php echo $this->config->base_url(); ?>dashboard"><i class="fa fa-home" aria-hidden="true"></i></a>
                            <span><i class="fa fa-angle-right breadcrumb_divider" style="padding: 0 3px;" aria-hidden="true"></i></span>
                            <a class="custom_breadcrumb-item" style="outline: 0; padding: 0 5px; font-size: .9em;" href="#">Phase 1</a>
                            <span><i class="fa fa-angle-right breadcrumb_divider" style="padding: 0 3px;" aria-hidden="true"></i></span>
                            <span class="custom_breadcrumb-item active" style="padding: 0 5px; font-size: .9em;">V 201</span>
                        </nav>
                    </div>
                    <div class="title" style="color: #fff; padding: 0 7px 5px; font-size: 1.5em; border-bottom: 1px solid #335;">
                        V 201
                    </div>
                </div>

                <div class="col-md-12 plate_portlet plr0">
<!--                    <div class="row">-->
                        <div id="portlet_container" style="width: 100%"></div>
<!--                    </div>-->
                </div>
            </div>

        </div>
        </div>
        <!-- -- -->
    </div>
<?php include 'templates/default_footer.php' ?>