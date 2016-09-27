<!--<link media="screen, print" href=--><?php //echo $this->config->base_url(); ?><!--assets/css/stylesheets.css rel=stylesheet type=text/css />-->
<!--<link media="screen, print" rel="stylesheet" href="--><?php //echo $this->config->base_url(); ?><!--assets/css/slippry.css">-->
<link media="screen, print" rel="stylesheet" href="<?php echo $this->config->base_url(); ?>assets/css/jquery.gridster.css">
<!--<link media="screen, print" rel="stylesheet" href="--><?php //echo $this->config->base_url(); ?><!--assets/css/custom.css">-->
<link media="screen, print" rel="stylesheet" href="<?php echo $this->config->base_url(); ?>assets/css/font-awesome-animation.min.css" rel="stylesheet" type="text/css" />
<link rel="stylesheet" type="text/css" href="<?php echo $this->config->base_url(); ?>assets/mmc/css/_sn.css">
<script>
    var permission = <?php echo json_encode($permission); ?>;
    var pages = <?php echo json_encode($menu); ?>;
</script>
<script type=text/javascript src=<?php echo $this->config->base_url(); ?>assets/js/plugins/jquery/jquery-migrate.min.js></script>
<script type=text/javascript src=<?php echo $this->config->base_url(); ?>assets/js/plugins/jquery/globalize.js></script>
<!--<script type=text/javascript src=--><?php //echo $this->config->base_url(); ?><!--assets/js/js.js></script>-->
<script type=text/javascript src=<?php echo $this->config->base_url(); ?>assets/js/settings.js></script>
<script type=text/javascript src=<?php echo $this->config->base_url(); ?>assets/js/plugins/knob/jquery.knob.js></script>

<script type=text/javascript src=<?php echo $this->config->base_url(); ?>assets/js/jquery.gridster.js></script>
<script type=text/javascript src=<?php echo $this->config->base_url(); ?>assets/js/history.min.js></script>
<script type=text/javascript src=<?php echo $this->config->base_url(); ?>assets/js/underscore-min.js></script>
<script type=text/javascript src=<?php echo $this->config->base_url(); ?>assets/js/backbone-min.js></script>

<script type=text/javascript src=<?php echo $this->config->base_url(); ?>assets/js/menuzord.js></script>
<script type=text/javascript src=<?php echo $this->config->base_url(); ?>assets/js/gridster-bootstrap.js></script>
<script type=text/javascript src=<?php echo $this->config->base_url(); ?>assets/plugin/wb-popover/jquery.webui-popover.min.js></script>
<script type=text/javascript src=<?php echo $this->config->base_url(); ?>assets/js/mpxd.js></script>

<script type=text/javascript src=<?php echo $this->config->base_url(); ?>assets/js/ilyas.js></script>
<script type=text/javascript src=<?php echo $this->config->base_url(); ?>assets/js/zul.js></script>
<script type=text/javascript src=<?php echo $this->config->base_url(); ?>assets/js/_sn.js></script>

<script type=text/javascript src=<?php echo $this->config->base_url(); ?>assets/js/tinybox.js></script>

<script src="<?php echo $this->config->base_url(); ?>assets/js/leaflet-src.js"></script>
<script src="<?php echo $this->config->base_url(); ?>assets/js/leaflet.awesome-markers.js"></script>
<script src="<?php echo $this->config->base_url(); ?>assets/js/leaflet-knn.js"></script>
<script src="<?php echo $this->config->base_url(); ?>assets/js/jquery.panzoom.min.js"></script>

<script src="<?php echo $this->config->base_url(); ?>assets/js/js.cookie-2.1.0.min.js"></script>
<script type="text/javascript" src="<?php echo $this->config->base_url(); ?>assets/plugin/moment/moment.min.js"></script>
<!-- Gallery src-->
<link media="screen, print" href="<?php echo $this->config->base_url(); ?>assets/plugin/nano-gallery2/css/nanogallery.min.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="<?php echo $this->config->base_url(); ?>assets/plugin/nano-gallery2/jquery.nanogallery.min.js"></script>

<!--Picasa slider-->
<link media="screen, print" href="<?php echo $this->config->base_url(); ?>assets/plugin/picasa-slider/jquery.googleslides.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="<?php echo $this->config->base_url(); ?>assets/plugin/picasa-slider/jquery.googleslides.js"></script>

<!--jsImage slider-->
<script src="<?php echo $this->config->base_url(); ?>assets/js/plugins/jsImageSlider/js-image-slider.js"></script>

<script type="text/javascript">

//    Highcharts.theme = {
//        colors: ["#2b908f", "#90ee7e", "#f45b5b", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee",
//            "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
//        chart: {
//            style: {
//                fontFamily: "'Unica One', sans-serif"
//            },
//            plotBorderColor: '#606063'
//        },
//        title: {
//            style: {
//                color: '#E0E0E3',
//                textTransform: 'uppercase',
//                fontSize: '20px'
//            }
//        },
//        subtitle: {
//            style: {
//                color: '#E0E0E3',
//                textTransform: 'uppercase'
//            }
//        },
//        xAxis: {
//            gridLineColor: '#707073',
//            labels: {
//                style: {
//                    color: '#E0E0E3'
//                }
//            },
//            lineColor: '#707073',
//            minorGridLineColor: '#505053',
//            tickColor: '#707073',
//            title: {
//                style: {
//                    color: '#A0A0A3'
//
//                }
//            }
//        },
//        yAxis: {
//            gridLineColor: '#707073',
//            labels: {
//                style: {
//                    color: '#E0E0E3'
//                }
//            },
//            lineColor: '#707073',
//            minorGridLineColor: '#505053',
//            tickColor: '#707073',
//            tickWidth: 1,
//            title: {
//                style: {
//                    color: '#A0A0A3'
//                }
//            }
//        },
//        tooltip: {
//            backgroundColor: 'rgba(0, 0, 0, 0.85)',
//            style: {
//                color: '#F0F0F0'
//            }
//        },
//        plotOptions: {
//            series: {
//                dataLabels: {
//                    color: '#B0B0B3'
//                },
//                marker: {
//                    lineColor: '#333'
//                }
//            },
//            boxplot: {
//                fillColor: '#505053'
//            },
//            candlestick: {
//                lineColor: 'white'
//            },
//            errorbar: {
//                color: 'white'
//            }
//        },
//        legend: {
//            itemStyle: {
//                color: '#E0E0E3'
//            },
//            itemHoverStyle: {
//                color: '#FFF'
//            },
//            itemHiddenStyle: {
//                color: '#606063'
//            }
//        },
//        credits: {
//            style: {
//                color: '#666'
//            }
//        },
//        labels: {
//            style: {
//                color: '#707073'
//            }
//        },
//        drilldown: {
//            activeAxisLabelStyle: {
//                color: '#F0F0F3'
//            },
//            activeDataLabelStyle: {
//                color: '#F0F0F3'
//            }
//        },
//        navigation: {
//            buttonOptions: {
//                symbolStroke: '#DDDDDD',
//                theme: {
//                    fill: '#505053'
//                }
//            }
//        },
//        // scroll charts
//        rangeSelector: {
//            buttonTheme: {
//                fill: '#505053',
//                stroke: '#000000',
//                style: {
//                    color: '#CCC'
//                },
//                states: {
//                    hover: {
//                        fill: '#707073',
//                        stroke: '#000000',
//                        style: {
//                            color: 'white'
//                        }
//                    },
//                    select: {
//                        fill: '#000003',
//                        stroke: '#000000',
//                        style: {
//                            color: 'white'
//                        }
//                    }
//                }
//            },
//            inputBoxBorderColor: '#505053',
//            inputStyle: {
//                backgroundColor: '#333',
//                color: 'silver'
//            },
//            labelStyle: {
//                color: 'silver'
//            }
//        },
//        navigator: {
//            handles: {
//                backgroundColor: '#666',
//                borderColor: '#AAA'
//            },
//            outlineColor: '#CCC',
//            maskFill: 'rgba(255,255,255,0.1)',
//            series: {
//                color: '#7798BF',
//                lineColor: '#A6C7ED'
//            },
//            xAxis: {
//                gridLineColor: '#505053'
//            }
//        },
//        scrollbar: {
//            barBackgroundColor: '#808083',
//            barBorderColor: '#808083',
//            buttonArrowColor: '#CCC',
//            buttonBackgroundColor: '#606063',
//            buttonBorderColor: '#606063',
//            rifleColor: '#FFF',
//            trackBackgroundColor: '#404043',
//            trackBorderColor: '#404043'
//        },
//        // special colors for some of the
//        legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
//        background2: '#505053',
//        dataLabelsColor: '#B0B0B3',
//        textColor: '#C0C0C0',
//        contrastTextColor: '#F0F0F3',
//        maskColor: 'rgba(255,255,255,0.3)'
//    };

    // Apply the theme
//    Highcharts.setOptions(Highcharts.theme);
    baseURL = <?php echo json_encode($this->config->base_url()); ?>;
    function prettyDate(d) {
        var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var date = (typeof d == "undefined") ? new Date() : new Date(d);
        str = "{0} {1} {2}";
        return str.format(date.getDate(), monthNames[date.getMonth()], date.getFullYear());
    }
    $(function() {

        /* 0 = widescreen, 1 = <1366 */

        screenWidth = $(document).width();
        screenType = 0;
        if (screenWidth <= 1500)
            screenType = 1;
        if (screenWidth <= 1280)
            screenType = 2;

        $('#sidebar-toggle').on('click', function() {
            toggleSidebar();
        });
        setTimeout(function() {
            $(window).trigger('resize');
        }, 5000);

//        generateSideMenu(pages);
        //sideMenu();
        loadPage(getRoute(), true);
        //new mlPushMenu(document.getElementById('mp-menu'), document.getElementById('trigger'));


//        $('#date_placeholder').html("Today: <b>" + prettyDate() + "</b>");
    });

    function resizeListener() {
        //var $g = $('.gridster ul');
        //$g.animate({'width':$g.parent('.gridster').width()})
    }

    $(window).resize(resizeListener);
</script>
