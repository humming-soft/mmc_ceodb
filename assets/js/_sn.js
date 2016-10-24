/*Created : Sebin Thomas
For     : Backbone Constructors, Views and the associated functions
Date    : 14/07/2016*/

mpxd.constructors.kpi = function(data) {
    var el = "#portlet_" + data.id;
    return new mpxd.modules.viaducts.kpi({data: data, el: el});
}
mpxd.constructors.kpi_viaducts = function(data) {
    var el = "#portlet_" + data.id;
    return new mpxd.modules.viaducts.kpi_viaducts({data: data, el: el});
}
mpxd.constructors.viaduct_pier_view = function(data) {
    var el = "#portlet_" + data.id;
    return new mpxd.modules.piers.viaduct_pier_view({data: data, el: el});
}
mpxd.constructors.viaducts_compare = function(data) {
    var el = "#portlet_" + data.id;
    return new mpxd.modules.viaducts.compare({data: data, el: el});
}
mpxd.modules.piers = {}
mpxd.modules.viaducts = {}
mpxd.modules.piers.viaduct_pier_view = Backbone.View.extend({
    initialize: function (options) {
        this.data = options.data;
        this.render();
    },render: function () {
        var that = this;
        var html = mpxd.getTemplate(that.data.type);
        template = _.template(html, {data: that.data});
        that.$el.html(template);
        that.$el.find('.portlet_content').css({"height":(that.$el.find('.content').parent().parent().parent().height())-40});
        that.$el.find('.portlet_content').mCustomScrollbar({theme:"dark-3"});


        var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
        $.getJSON( flickerAPI, {
                tags: "fox,red,snow,wildlife",
                tagmode: "all",
                format: "json"
            })
            .done(function( data ) {
                $.each( data.items, function( i, item ) {
                    console.log(item);
                    $( "<imga>" ).attr( "src", item.media.m ).appendTo( "#pier_plate_v201" );
                    if ( i === 300 ) {
                        return false;
                    }
                });
            });



        var t_pier_x = [
            {
                "pier_id":"SB01","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"","pier_layout":"1","pier_type":"p12","span_type":"s1",
                "pier_pile_1":"100","pier_pile_2":"","pier_pilecap_1":"100","pier_pilecap_2":"","pier_pier_1":"100","pier_pier_2":"","pier_pierhead_1":"50","pier_pierhead_2":"","pier_pierhead_3":"",
                "span1":"0","span2":"","span3":"","span4":"","parapet1":"0","parapet2":"","parapet3":"",
                "p_progress":"0"
            },{
                "pier_id":"SB02","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"","pier_layout":"1","pier_type":"p12","span_type":"s1",
                "pier_pile_1":"100","pier_pile_2":"","pier_pilecap_1":"100","pier_pilecap_2":"","pier_pier_1":"100","pier_pier_2":"","pier_pierhead_1":"50","pier_pierhead_2":"","pier_pierhead_3":"",
                "span1":"0","span2":"","span3":"","span4":"","parapet1":"0","parapet2":"","parapet3":"",
                "p_progress":"0"
            },{
                "pier_id":"SB03","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"","pier_layout":"1","pier_type":"p12","span_type":"s1",
                "pier_pile_1":"100","pier_pile_2":"","pier_pilecap_1":"100","pier_pilecap_2":"","pier_pier_1":"100","pier_pier_2":"","pier_pierhead_1":"100","pier_pierhead_2":"","pier_pierhead_3":"",
                "span1":"0","span2":"","span3":"","span4":"","parapet1":"0","parapet2":"","parapet3":"",
                "p_progress":"0"
            },{
                "pier_id":"SB04","pier_north_id":"","pier_south_id":"","pier_marker_a":"Special Crossing","pier_marker_b":"2","pier_layout":"1","pier_type":"p14","span_type":"sx",
                "pier_pile_1":"100","pier_pile_2":"","pier_pilecap_1":"100","pier_pilecap_2":"","pier_pier_1":"100","pier_pier_2":"","pier_pierhead_1":"100","pier_pierhead_2":"","pier_pierhead_3":"",
                "span1":"","span2":"","span3":"","span4":"50","parapet1":"","parapet2":"","parapet3":"",
                "p_progress":"0"
            },{
                "pier_id":"SB05","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"2","pier_layout":"1","pier_type":"p14","span_type":"sx",
                "pier_pile_1":"100","pier_pile_2":"","pier_pilecap_1":"100","pier_pilecap_2":"","pier_pier_1":"100","pier_pier_2":"","pier_pierhead_1":"100","pier_pierhead_2":"","pier_pierhead_3":"",
                "span1":"","span2":"","span3":"","span4":"100","parapet1":"","parapet2":"","parapet3":"",
                "p_progress":"0"
            },{
                "pier_id":"SB06","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"2","pier_layout":"1","pier_type":"p12","span_type":"sx",
                "pier_pile_1":"100","pier_pile_2":"","pier_pilecap_1":"100","pier_pilecap_2":"","pier_pier_1":"100","pier_pier_2":"","pier_pierhead_1":"100","pier_pierhead_2":"","pier_pierhead_3":"",
                "span1":"","span2":"","span3":"","span4":"100","parapet1":"","parapet2":"","parapet3":"",
                "p_progress":"0"
            },{
                "pier_id":"SB07","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"2","pier_layout":"1","pier_type":"p12","span_type":"sx",
                "pier_pile_1":"100","pier_pile_2":"","pier_pilecap_1":"100","pier_pilecap_2":"","pier_pier_1":"100","pier_pier_2":"","pier_pierhead_1":"100","pier_pierhead_2":"","pier_pierhead_3":"",
                "span1":"","span2":"","span3":"","span4":"100","parapet1":"","parapet2":"","parapet3":"",
                "p_progress":"0"
            },{
                "pier_id":"SB08","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"","pier_layout":"1","pier_type":"p32","span_type":"s1",
                "pier_pile_1":"100","pier_pile_2":"","pier_pilecap_1":"100","pier_pilecap_2":"","pier_pier_1":"100","pier_pier_2":"","pier_pierhead_1":"100","pier_pierhead_2":"","pier_pierhead_3":"",
                "span1":"100","span2":"","span3":"","span4":"","parapet1":"100","parapet2":"","parapet3":"",
                "p_progress":"0"
            },{
                "pier_id":"SB09","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"","pier_layout":"1","pier_type":"p32","span_type":"s2",
                "pier_pile_1":"100","pier_pile_2":"","pier_pilecap_1":"100","pier_pilecap_2":"","pier_pier_1":"100","pier_pier_2":"","pier_pierhead_1":"100","pier_pierhead_2":"","pier_pierhead_3":"",
                "span1":"100","span2":"","span3":"100","span4":"","parapet1":"100","parapet2":"","parapet3":"100",
                "p_progress":"0"
            },{
                "pier_id":"SB10","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"","pier_layout":"1","pier_type":"p32","span_type":"s2",
                "pier_pile_1":"100","pier_pile_2":"","pier_pilecap_1":"100","pier_pilecap_2":"","pier_pier_1":"100","pier_pier_2":"","pier_pierhead_1":"100","pier_pierhead_2":"","pier_pierhead_3":"",
                "span1":"100","span2":"","span3":"100","span4":"","parapet1":"100","parapet2":"","parapet3":"100",
                "p_progress":"0"
            },{
                "pier_id":"SB11","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"","pier_layout":"1","pier_type":"p32","span_type":"s2",
                "pier_pile_1":"100","pier_pile_2":"","pier_pilecap_1":"100","pier_pilecap_2":"","pier_pier_1":"100","pier_pier_2":"","pier_pierhead_1":"100","pier_pierhead_2":"","pier_pierhead_3":"",
                "span1":"100","span2":"","span3":"50","span4":"","parapet1":"100","parapet2":"","parapet3":"0",
                "p_progress":"0"
            },{
                "pier_id":"SB12","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"","pier_layout":"1","pier_type":"p32","span_type":"s2",
                "pier_pile_1":"100","pier_pile_2":"","pier_pilecap_1":"100","pier_pilecap_2":"","pier_pier_1":"100","pier_pier_2":"","pier_pierhead_1":"100","pier_pierhead_2":"","pier_pierhead_3":"",
                "span1":"100","span2":"","span3":"50","span4":"","parapet1":"100","parapet2":"","parapet3":"0",
                "p_progress":"0"
            },{
                "pier_id":"SB13","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"","pier_layout":"1","pier_type":"p32","span_type":"s2",
                "pier_pile_1":"0","pier_pile_2":"","pier_pilecap_1":"0","pier_pilecap_2":"","pier_pier_1":"0","pier_pier_2":"","pier_pierhead_1":"0","pier_pierhead_2":"","pier_pierhead_3":"",
                "span1":"0","span2":"","span3":"0","span4":"","parapet1":"0","parapet2":"","parapet3":"0",
                "p_progress":"1"
            },{
                "pier_id":"SB14","pier_north_id":"SBN14","pier_south_id":"SBS14","pier_marker_a":"","pier_marker_b":"","pier_layout":"1","pier_type":"p8211","span_type":"s2",
                "pier_pile_1":"100","pier_pile_2":"100","pier_pilecap_1":"100","pier_pilecap_2":"100","pier_pier_1":"100","pier_pier_2":"50","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"",
                "span1":"0","span2":"","span3":"0","span4":"","parapet1":"0","parapet2":"","parapet3":"0",
                "p_progress":"1"
            },{
                "pier_id":"SB15","pier_north_id":"SBN15","pier_south_id":"SBS15","pier_marker_a":"","pier_marker_b":"","pier_layout":"1","pier_type":"p8211","span_type":"s2",
                "pier_pile_1":"100","pier_pile_2":"100","pier_pilecap_1":"100","pier_pilecap_2":"100","pier_pier_1":"100","pier_pier_2":"100","pier_pierhead_1":"100","pier_pierhead_2":"100","pier_pierhead_3":"",
                "span1":"100","span2":"","span3":"0","span4":"","parapet1":"50","parapet2":"","parapet3":"0",
                "p_progress":"0"
            },{
                "pier_id":"SB16","pier_north_id":"SBN16","pier_south_id":"SBS16","pier_marker_a":"","pier_marker_b":"","pier_layout":"1","pier_type":"p8211","span_type":"s2",
                "pier_pile_1":"100","pier_pile_2":"100","pier_pilecap_1":"100","pier_pilecap_2":"100","pier_pier_1":"100","pier_pier_2":"100","pier_pierhead_1":"100","pier_pierhead_2":"100","pier_pierhead_3":"",
                "span1":"100","span2":"","span3":"100","span4":"","parapet1":"100","parapet2":"","parapet3":"100",
                "p_progress":"0"
            },{
                "pier_id":"DD01","pier_north_id":"DDN01","pier_south_id":"DDS01","pier_marker_a":"Damansara Damai Station (Island Platform)","pier_marker_b":"1","pier_layout":"1","pier_type":"p7x","span_type":"s2",
                "pier_pile_1":"100","pier_pile_2":"100","pier_pilecap_1":"100","pier_pilecap_2":"100","pier_pier_1":"100","pier_pier_2":"100","pier_pierhead_1":"","pier_pierhead_2":"","pier_pierhead_3":"100",
                "span1":"100","span2":"","span3":"100","span4":"","parapet1":"100","parapet2":"","parapet3":"100",
                "p_progress":"0"
            },{
                "pier_id":"DD02","pier_north_id":"DDN02","pier_south_id":"DDS02","pier_marker_a":"","pier_marker_b":"1","pier_layout":"1","pier_type":"p7x","span_type":"s2",
                "pier_pile_1":"100","pier_pile_2":"100","pier_pilecap_1":"100","pier_pilecap_2":"100","pier_pier_1":"100","pier_pier_2":"100","pier_pierhead_1":"","pier_pierhead_2":"","pier_pierhead_3":"100",
                "span1":"100","span2":"","span3":"100","span4":"","parapet1":"100","parapet2":"","parapet3":"100",
                "p_progress":"0"
            },{
                "pier_id":"DD03","pier_north_id":"DDN03","pier_south_id":"DDS03","pier_marker_a":"","pier_marker_b":"1","pier_layout":"1","pier_type":"p7x","span_type":"s2",
                "pier_pile_1":"100","pier_pile_2":"100","pier_pilecap_1":"100","pier_pilecap_2":"100","pier_pier_1":"100","pier_pier_2":"100","pier_pierhead_1":"","pier_pierhead_2":"","pier_pierhead_3":"100",
                "span1":"100","span2":"","span3":"100","span4":"","parapet1":"100","parapet2":"","parapet3":"100",
                "p_progress":"0"
            },{
                "pier_id":"DD04","pier_north_id":"DDN04","pier_south_id":"DDS04","pier_marker_a":"","pier_marker_b":"1","pier_layout":"1","pier_type":"p7x","span_type":"s2",
                "pier_pile_1":"100","pier_pile_2":"100","pier_pilecap_1":"100","pier_pilecap_2":"100","pier_pier_1":"100","pier_pier_2":"100","pier_pierhead_1":"","pier_pierhead_2":"","pier_pierhead_3":"100",
                "span1":"100","span2":"","span3":"100","span4":"","parapet1":"100","parapet2":"","parapet3":"100",
                "p_progress":"0"
            },{
                "pier_id":"DD05","pier_north_id":"DDN05","pier_south_id":"DDS05","pier_marker_a":"","pier_marker_b":"1","pier_layout":"1","pier_type":"p7x","span_type":"s2",
                "pier_pile_1":"100","pier_pile_2":"100","pier_pilecap_1":"100","pier_pilecap_2":"100","pier_pier_1":"100","pier_pier_2":"100","pier_pierhead_1":"","pier_pierhead_2":"","pier_pierhead_3":"100",
                "span1":"100","span2":"","span3":"100","span4":"","parapet1":"100","parapet2":"","parapet3":"100",
                "p_progress":"0"
            },{
                "pier_id":"DD06","pier_north_id":"DDN06","pier_south_id":"DDS06","pier_marker_a":"","pier_marker_b":"","pier_layout":"1","pier_type":"p8211","span_type":"s2",
                "pier_pile_1":"100","pier_pile_2":"100","pier_pilecap_1":"100","pier_pilecap_2":"100","pier_pier_1":"100","pier_pier_2":"100","pier_pierhead_1":"100","pier_pierhead_2":"100","pier_pierhead_3":"",
                "span1":"100","span2":"","span3":"100","span4":"","parapet1":"100","parapet2":"","parapet3":"100",
                "p_progress":"0"
            },{
                "pier_id":"DD07","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"","pier_layout":"1","pier_type":"p32","span_type":"s2",
                "pier_pile_1":"100","pier_pile_2":"","pier_pilecap_1":"100","pier_pilecap_2":"","pier_pier_1":"100","pier_pier_2":"","pier_pierhead_1":"100","pier_pierhead_2":"","pier_pierhead_3":"",
                "span1":"100","span2":"","span3":"100","span4":"","parapet1":"50","parapet2":"","parapet3":"100",
                "p_progress":"0"
            },{
                "pier_id":"DD08","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"","pier_layout":"1","pier_type":"p32","span_type":"s2",
                "pier_pile_1":"100","pier_pile_2":"","pier_pilecap_1":"100","pier_pilecap_2":"","pier_pier_1":"100","pier_pier_2":"","pier_pierhead_1":"100","pier_pierhead_2":"","pier_pierhead_3":"",
                "span1":"50","span2":"","span3":"100","span4":"","parapet1":"0","parapet2":"","parapet3":"50",
                "p_progress":"0"
            },{
                "pier_id":"DD09","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"","pier_layout":"1","pier_type":"p32","span_type":"s2",
                "pier_pile_1":"100","pier_pile_2":"","pier_pilecap_1":"100","pier_pilecap_2":"","pier_pier_1":"100","pier_pier_2":"","pier_pierhead_1":"50","pier_pierhead_2":"","pier_pierhead_3":"",
                "span1":"0","span2":"","span3":"0","span4":"","parapet1":"0","parapet2":"","parapet3":"0",
                "p_progress":"0"
            },{
                "pier_id":"DD10","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"","pier_layout":"1","pier_type":"p33","span_type":"s2",
                "pier_pile_1":"100","pier_pile_2":"","pier_pilecap_1":"100","pier_pilecap_2":"","pier_pier_1":"50","pier_pier_2":"","pier_pierhead_1":"0","pier_pierhead_2":"","pier_pierhead_3":"",
                "span1":"0","span2":"","span3":"0","span4":"","parapet1":"0","parapet2":"","parapet3":"0",
                "p_progress":"1"
            },{
                "pier_id":"DD11","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"","pier_layout":"1","pier_type":"p24","span_type":"s2",
                "pier_pile_1":"100","pier_pile_2":"","pier_pilecap_1":"100","pier_pilecap_2":"","pier_pier_1":"50","pier_pier_2":"","pier_pierhead_1":"0","pier_pierhead_2":"","pier_pierhead_3":"",
                "span1":"0","span2":"","span3":"0","span4":"","parapet1":"0","parapet2":"","parapet3":"0",
                "p_progress":"1"
            },{
                "pier_id":"DD12","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"","pier_layout":"1","pier_type":"p12","span_type":"s2",
                "pier_pile_1":"100","pier_pile_2":"","pier_pilecap_1":"100","pier_pilecap_2":"","pier_pier_1":"100","pier_pier_2":"","pier_pierhead_1":"100","pier_pierhead_2":"","pier_pierhead_3":"",
                "span1":"0","span2":"","span3":"0","span4":"","parapet1":"0","parapet2":"","parapet3":"0",
                "p_progress":"1"
            },{
                "pier_id":"DD13","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"","pier_layout":"1","pier_type":"p12","span_type":"s1",
                "pier_pile_1":"100","pier_pile_2":"","pier_pilecap_1":"100","pier_pilecap_2":"","pier_pier_1":"100","pier_pier_2":"","pier_pierhead_1":"100","pier_pierhead_2":"","pier_pierhead_3":"",
                "span1":"50","span2":"","span3":"","span4":"","parapet1":"0","parapet2":"","parapet3":"",
                "p_progress":"1"
            },{
                "pier_id":"DD14","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"","pier_layout":"1","pier_type":"p12","span_type":"s1",
                "pier_pile_1":"100","pier_pile_2":"","pier_pilecap_1":"100","pier_pilecap_2":"","pier_pier_1":"100","pier_pier_2":"","pier_pierhead_1":"100","pier_pierhead_2":"","pier_pierhead_3":"",
                "span1":"100","span2":"","span3":"","span4":"","parapet1":"100","parapet2":"","parapet3":"",
                "p_progress":"0"
            },{
                "pier_id":"DD15","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"","pier_layout":"1","pier_type":"p12","span_type":"s1",
                "pier_pile_1":"100","pier_pile_2":"","pier_pilecap_1":"100","pier_pilecap_2":"","pier_pier_1":"100","pier_pier_2":"","pier_pierhead_1":"100","pier_pierhead_2":"","pier_pierhead_3":"",
                "span1":"100","span2":"","span3":"","span4":"","parapet1":"100","parapet2":"","parapet3":"",
                "p_progress":"0"
            },{
                "pier_id":"DD16","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"","pier_layout":"1","pier_type":"p12","span_type":"s1",
                "pier_pile_1":"100","pier_pile_2":"","pier_pilecap_1":"100","pier_pilecap_2":"","pier_pier_1":"100","pier_pier_2":"","pier_pierhead_1":"100","pier_pierhead_2":"","pier_pierhead_3":"",
                "span1":"100","span2":"","span3":"","span4":"","parapet1":"100","parapet2":"","parapet3":"",
                "p_progress":"0"
            },{
                "pier_id":"DD17","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"","pier_layout":"1","pier_type":"p12","span_type":"s1",
                "pier_pile_1":"100","pier_pile_2":"","pier_pilecap_1":"100","pier_pilecap_2":"","pier_pier_1":"100","pier_pier_2":"","pier_pierhead_1":"100","pier_pierhead_2":"","pier_pierhead_3":"",
                "span1":"100","span2":"","span3":"","span4":"","parapet1":"100","parapet2":"","parapet3":"",
                "p_progress":"0"
            },{
                "pier_id":"DD18","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"","pier_layout":"1","pier_type":"p12","span_type":"s1",
                "pier_pile_1":"100","pier_pile_2":"","pier_pilecap_1":"100","pier_pilecap_2":"","pier_pier_1":"100","pier_pier_2":"","pier_pierhead_1":"100","pier_pierhead_2":"","pier_pierhead_3":"",
                "span1":"100","span2":"","span3":"","span4":"","parapet1":"100","parapet2":"","parapet3":"",
                "p_progress":"0"
            },{
                "pier_id":"DD19","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"","pier_layout":"1","pier_type":"p12","span_type":"s1",
                "pier_pile_1":"100","pier_pile_2":"","pier_pilecap_1":"100","pier_pilecap_2":"","pier_pier_1":"100","pier_pier_2":"","pier_pierhead_1":"100","pier_pierhead_2":"","pier_pierhead_3":"",
                "span1":"100","span2":"","span3":"","span4":"","parapet1":"100","parapet2":"","parapet3":"",
                "p_progress":"0"
            },{
                "pier_id":"DD20","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"","pier_layout":"1","pier_type":"p12","span_type":"s1",
                "pier_pile_1":"100","pier_pile_2":"","pier_pilecap_1":"100","pier_pilecap_2":"","pier_pier_1":"100","pier_pier_2":"","pier_pierhead_1":"100","pier_pierhead_2":"","pier_pierhead_3":"",
                "span1":"100","span2":"","span3":"","span4":"","parapet1":"100","parapet2":"","parapet3":"",
                "p_progress":"0"
            },{
                "pier_id":"DD21","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"","pier_layout":"1","pier_type":"p12","span_type":"s1",
                "pier_pile_1":"100","pier_pile_2":"","pier_pilecap_1":"100","pier_pilecap_2":"","pier_pier_1":"100","pier_pier_2":"","pier_pierhead_1":"100","pier_pierhead_2":"","pier_pierhead_3":"",
                "span1":"100","span2":"","span3":"","span4":"","parapet1":"100","parapet2":"","parapet3":"",
                "p_progress":"0"
            },{
                "pier_id":"DD22","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"","pier_layout":"1","pier_type":"p12","span_type":"s1",
                "pier_pile_1":"100","pier_pile_2":"","pier_pilecap_1":"100","pier_pilecap_2":"","pier_pier_1":"100","pier_pier_2":"","pier_pierhead_1":"100","pier_pierhead_2":"","pier_pierhead_3":"",
                "span1":"100","span2":"","span3":"","span4":"","parapet1":"100","parapet2":"","parapet3":"",
                "p_progress":"0"
            }
        ];

        var t_pier____TEMP_DISABLED = [
            {"pier_id":"TST11","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"","pier_pile_2":"","pier_pilecap_1":"","pier_pilecap_2":"","pier_pier_1":"","pier_pier_2":"","pier_pierhead_1":"","pier_pierhead_2":"","pier_pierhead_3":"","span1":"10","span2":"","span3":"","span4":"","parapet1":"10","parapet2":"","parapet3":"","parapet1":"10","parapet2":"","parapet3":""},
            {"pier_id":"TST12","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s2","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"-10","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"50","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"10","span2":"0","span3":"0","span4":"0","parapet1":"10","parapet2":"","parapet3":""},
            {"pier_id":"TST13","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"1","pier_layout":"1","pier_type":"p13","span_type":"s3","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"50","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"10","span2":"0","span3":"0","span4":"0","parapet1":"10","parapet2":"","parapet3":""},
            {"pier_id":"TST14","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"1","pier_layout":"1","pier_type":"p14","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"50","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"100","span2":"0","span3":"0","span4":"0","parapet1":"10","parapet2":"","parapet3":""},
            {"pier_id":"TST15","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"0","pier_layout":"1","pier_type":"p1x","span_type":"sx","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"10","span2":"0","span3":"0","span4":"0","parapet1":"10","parapet2":"","parapet3":""},

            {"pier_id":"TST21","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"0","pier_layout":"1","pier_type":"p21","span_type":"s1","pier_pile_1":"","pier_pile_2":"","pier_pilecap_1":"","pier_pilecap_2":"","pier_pier_1":"","pier_pier_2":"","pier_pierhead_1":"","pier_pierhead_2":"","pier_pierhead_3":"","span1":"10","span2":"","span3":"","span4":"","parapet1":"10","parapet2":"","parapet3":""},
            {"pier_id":"TST22","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"0","pier_layout":"1","pier_type":"p22","span_type":"s2","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"-10","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"50","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"10","span2":"0","span3":"0","span4":"0","parapet1":"10","parapet2":"","parapet3":""},
            {"pier_id":"TST23","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"1","pier_layout":"1","pier_type":"p23","span_type":"s3","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"50","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"10","span2":"0","span3":"0","span4":"0","parapet1":"10","parapet2":"","parapet3":""},
            {"pier_id":"TST24","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"1","pier_layout":"1","pier_type":"p24","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"50","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"10","span2":"0","span3":"0","span4":"0","parapet1":"10","parapet2":"","parapet3":""},
            {"pier_id":"TST25","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"0","pier_layout":"1","pier_type":"p2x","span_type":"sx","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"10","span2":"0","span3":"0","span4":"0","parapet1":"10","parapet2":"","parapet3":""},

            {"pier_id":"TST31","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"0","pier_layout":"1","pier_type":"p31","span_type":"s1","pier_pile_1":"","pier_pile_2":"","pier_pilecap_1":"","pier_pilecap_2":"","pier_pier_1":"","pier_pier_2":"","pier_pierhead_1":"","pier_pierhead_2":"","pier_pierhead_3":"","span1":"10","span2":"","span3":"","span4":"","parapet1":"10","parapet2":"","parapet3":""},
            {"pier_id":"TST32","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s2","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"-10","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"50","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"10","span2":"0","span3":"0","span4":"0","parapet1":"10","parapet2":"","parapet3":""},
            {"pier_id":"TST33","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"1","pier_layout":"1","pier_type":"p33","span_type":"s3","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"50","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"10","span2":"0","span3":"0","span4":"0","parapet1":"10","parapet2":"","parapet3":""},
            {"pier_id":"TST34","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"1","pier_layout":"1","pier_type":"p34","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"50","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"10","span2":"0","span3":"0","span4":"0","parapet1":"10","parapet2":"","parapet3":""},
            {"pier_id":"TST35","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"0","pier_layout":"1","pier_type":"p3x","span_type":"sx","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"10","span2":"0","span3":"0","span4":"0","parapet1":"10","parapet2":"","parapet3":""},

            {"pier_id":"TST41","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"0","pier_layout":"1","pier_type":"p41","span_type":"s1","pier_pile_1":"","pier_pile_2":"","pier_pilecap_1":"","pier_pilecap_2":"","pier_pier_1":"","pier_pier_2":"","pier_pierhead_1":"","pier_pierhead_2":"","pier_pierhead_3":"","span1":"10","span2":"","span3":"","span4":"","parapet1":"10","parapet2":"","parapet3":""},
            {"pier_id":"TST42","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"0","pier_layout":"1","pier_type":"p42","span_type":"s2","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"-10","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"50","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"10","span2":"0","span3":"0","span4":"0","parapet1":"10","parapet2":"","parapet3":""},
            {"pier_id":"TST43","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"1","pier_layout":"1","pier_type":"p43","span_type":"s3","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"50","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"10","span2":"0","span3":"0","span4":"0","parapet1":"10","parapet2":"","parapet3":""},
            {"pier_id":"TST44","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"1","pier_layout":"1","pier_type":"p44","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"50","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"10","span2":"0","span3":"0","span4":"0","parapet1":"10","parapet2":"","parapet3":""},
            {"pier_id":"TST45","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"0","pier_layout":"1","pier_type":"p4x","span_type":"sx","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"10","span2":"0","span3":"0","span4":"0","parapet1":"10","parapet2":"","parapet3":""},

            {"pier_id":"TST51","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"0","pier_layout":"1","pier_type":"p51","span_type":"s1","pier_pile_1":"","pier_pile_2":"","pier_pilecap_1":"","pier_pilecap_2":"","pier_pier_1":"","pier_pier_2":"","pier_pierhead_1":"","pier_pierhead_2":"","pier_pierhead_3":"","span1":"10","span2":"","span3":"","span4":"","parapet1":"10","parapet2":"","parapet3":""},
            {"pier_id":"TST52","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"0","pier_layout":"1","pier_type":"p52","span_type":"s2","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"-10","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"50","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"10","span2":"0","span3":"0","span4":"0","parapet1":"10","parapet2":"","parapet3":""},
            {"pier_id":"TST53","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"1","pier_layout":"1","pier_type":"p53","span_type":"s3","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"50","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"10","span2":"0","span3":"0","span4":"0","parapet1":"10","parapet2":"","parapet3":""},
            {"pier_id":"TST54","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"1","pier_layout":"1","pier_type":"p54","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"50","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"10","span2":"0","span3":"0","span4":"0","parapet1":"10","parapet2":"","parapet3":""},
            {"pier_id":"TST55","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"0","pier_layout":"1","pier_type":"p5x","span_type":"sx","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"10","span2":"0","span3":"0","span4":"0","parapet1":"10","parapet2":"","parapet3":""},

            {"pier_id":"TST61","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"0","pier_layout":"1","pier_type":"p6x","span_type":"s1","pier_pile_1":"","pier_pile_2":"","pier_pilecap_1":"","pier_pilecap_2":"","pier_pier_1":"","pier_pier_2":"","pier_pierhead_1":"","pier_pierhead_2":"","pier_pierhead_3":"","span1":"10","span2":"","span3":"","span4":"","parapet1":"10","parapet2":"","parapet3":""},
            {"pier_id":"TST62","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"0","pier_layout":"1","pier_type":"p6x","span_type":"s2","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"-10","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"50","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"10","span2":"0","span3":"0","span4":"0","parapet1":"10","parapet2":"","parapet3":""},
            {"pier_id":"TST63","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"1","pier_layout":"1","pier_type":"p6x","span_type":"s3","pier_pile_1":"100","pier_pile_2":"100","pier_pilecap_1":"100","pier_pilecap_2":"100","pier_pier_1":"50","pier_pier_2":"50","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"10","span2":"0","span3":"0","span4":"0","parapet1":"10","parapet2":"","parapet3":""},
            {"pier_id":"TST64","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"1","pier_layout":"1","pier_type":"p6x","span_type":"s1","pier_pile_1":"100","pier_pile_2":"100","pier_pilecap_1":"100","pier_pilecap_2":"100","pier_pier_1":"100","pier_pier_2":"100","pier_pierhead_1":"","pier_pierhead_2":"","pier_pierhead_3":"50","span1":"10","span2":"0","span3":"0","span4":"0","parapet1":"10","parapet2":"","parapet3":""},
            {"pier_id":"TST65","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"0","pier_layout":"1","pier_type":"p6x","span_type":"sx","pier_pile_1":"100","pier_pile_2":"100","pier_pilecap_1":"100","pier_pilecap_2":"100","pier_pier_1":"100","pier_pier_2":"100","pier_pierhead_1":"100","pier_pierhead_2":"100","pier_pierhead_3":"100","span1":"10","span2":"0","span3":"0","span4":"0","parapet1":"10","parapet2":"","parapet3":""},

            {"pier_id":"TST71","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"0","pier_layout":"1","pier_type":"p7x","span_type":"s1","pier_pile_1":"","pier_pile_2":"","pier_pilecap_1":"","pier_pilecap_2":"","pier_pier_1":"","pier_pier_2":"","pier_pierhead_1":"","pier_pierhead_2":"","pier_pierhead_3":"","span1":"10","span2":"","span3":"","span4":"","parapet1":"10","parapet2":"","parapet3":""},
            {"pier_id":"TST72","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"0","pier_layout":"1","pier_type":"p7x","span_type":"s2","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"-10","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"50","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"10","span2":"0","span3":"0","span4":"0","parapet1":"10","parapet2":"","parapet3":""},
            {"pier_id":"TST73","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"1","pier_layout":"1","pier_type":"p7x","span_type":"s3","pier_pile_1":"100","pier_pile_2":"100","pier_pilecap_1":"100","pier_pilecap_2":"100","pier_pier_1":"50","pier_pier_2":"50","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"10","span2":"0","span3":"0","span4":"0","parapet1":"10","parapet2":"","parapet3":""},
            {"pier_id":"TST74","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"1","pier_layout":"1","pier_type":"p7x","span_type":"s1","pier_pile_1":"100","pier_pile_2":"100","pier_pilecap_1":"100","pier_pilecap_2":"100","pier_pier_1":"100","pier_pier_2":"100","pier_pierhead_1":"","pier_pierhead_2":"","pier_pierhead_3":"50","span1":"10","span2":"0","span3":"0","span4":"0","parapet1":"10","parapet2":"","parapet3":""},
            {"pier_id":"TST75","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"0","pier_layout":"1","pier_type":"p7x","span_type":"sx","pier_pile_1":"100","pier_pile_2":"100","pier_pilecap_1":"100","pier_pilecap_2":"100","pier_pier_1":"100","pier_pier_2":"100","pier_pierhead_1":"100","pier_pierhead_2":"100","pier_pierhead_3":"100","span1":"10","span2":"0","span3":"0","span4":"0","parapet1":"10","parapet2":"","parapet3":""},

            {"pier_id":"TST81","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"0","pier_layout":"1","pier_type":"p8111","span_type":"s1","pier_pile_1":"","pier_pile_2":"","pier_pilecap_1":"","pier_pilecap_2":"","pier_pier_1":"","pier_pier_2":"","pier_pierhead_1":"","pier_pierhead_2":"","pier_pierhead_3":"","span1":"10","span2":"","span3":"","span4":"","parapet1":"10","parapet2":"","parapet3":""},
            {"pier_id":"TST82","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"0","pier_layout":"1","pier_type":"p8111","span_type":"s2","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"-10","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"50","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"10","span2":"0","span3":"0","span4":"0","parapet1":"10","parapet2":"","parapet3":""},
            {"pier_id":"TST83","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"1","pier_layout":"1","pier_type":"p8111","span_type":"s3","pier_pile_1":"100","pier_pile_2":"100","pier_pilecap_1":"100","pier_pilecap_2":"100","pier_pier_1":"50","pier_pier_2":"50","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"10","span2":"0","span3":"0","span4":"0","parapet1":"10","parapet2":"","parapet3":""},
            {"pier_id":"TST84","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"1","pier_layout":"1","pier_type":"p8111","span_type":"s1","pier_pile_1":"100","pier_pile_2":"100","pier_pilecap_1":"100","pier_pilecap_2":"100","pier_pier_1":"100","pier_pier_2":"100","pier_pierhead_1":"","pier_pierhead_2":"","pier_pierhead_3":"50","span1":"10","span2":"0","span3":"0","span4":"0","parapet1":"10","parapet2":"","parapet3":""},
            {"pier_id":"TST85","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"0","pier_layout":"1","pier_type":"p8111","span_type":"sx","pier_pile_1":"100","pier_pile_2":"100","pier_pilecap_1":"100","pier_pilecap_2":"100","pier_pier_1":"100","pier_pier_2":"100","pier_pierhead_1":"100","pier_pierhead_2":"100","pier_pierhead_3":"100","span1":"10","span2":"0","span3":"0","span4":"0","parapet1":"10","parapet2":"","parapet3":""}
        ];

        var t_pier_closed = [

            {"pier_id":"p1x","pier_north_id":"","pier_south_id":"","pier_marker_a":"x = number of pile (after divided by 2)","pier_marker_b":"2","pier_layout":"1","pier_type":"p1x","span_type":"sx","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"10","span2":"0","span3":"0","span4":"0","parapet1":"10","parapet2":"","parapet3":""},

            {"pier_id":"p2x","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"0","pier_layout":"1","pier_type":"p2x","span_type":"sx","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"10","span2":"0","span3":"0","span4":"0","parapet1":"10","parapet2":"","parapet3":""},

            {"pier_id":"p3x","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"0","pier_layout":"1","pier_type":"p3x","span_type":"sx","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"10","span2":"0","span3":"0","span4":"0","parapet1":"10","parapet2":"","parapet3":""},

            {"pier_id":"p4x","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"0","pier_layout":"1","pier_type":"p4x","span_type":"sx","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"10","span2":"0","span3":"0","span4":"0","parapet1":"10","parapet2":"","parapet3":""},

            {"pier_id":"p5x","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"0","pier_layout":"1","pier_type":"p5x","span_type":"sx","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"10","span2":"0","span3":"0","span4":"0","parapet1":"10","parapet2":"","parapet3":""},

            {"pier_id":"p6x","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"0","pier_layout":"1","pier_type":"p6x","span_type":"sx","pier_pile_1":"100","pier_pile_2":"100","pier_pilecap_1":"100","pier_pilecap_2":"100","pier_pier_1":"100","pier_pier_2":"100","pier_pierhead_1":"100","pier_pierhead_2":"100","pier_pierhead_3":"100","span1":"10","span2":"0","span3":"0","span4":"0","parapet1":"10","parapet2":"","parapet3":""},

            {"pier_id":"p7x","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"0","pier_layout":"1","pier_type":"p7x","span_type":"sx","pier_pile_1":"100","pier_pile_2":"100","pier_pilecap_1":"100","pier_pilecap_2":"100","pier_pier_1":"100","pier_pier_2":"100","pier_pierhead_1":"100","pier_pierhead_2":"100","pier_pierhead_3":"100","span1":"10","span2":"0","span3":"0","span4":"0","parapet1":"10","parapet2":"","parapet3":""},

            {"pier_id":"p8x11","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"0","pier_layout":"1","pier_type":"p8211","span_type":"sx","pier_pile_1":"100","pier_pile_2":"100","pier_pilecap_1":"100","pier_pilecap_2":"100","pier_pier_1":"100","pier_pier_2":"100","pier_pierhead_1":"100","pier_pierhead_2":"100","pier_pierhead_3":"100","span1":"10","span2":"0","span3":"0","span4":"0","parapet1":"10","parapet2":"","parapet3":""},

            {"pier_id":"p8x21","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"0","pier_layout":"1","pier_type":"p8221","span_type":"sx","pier_pile_1":"100","pier_pile_2":"100","pier_pilecap_1":"100","pier_pilecap_2":"100","pier_pier_1":"100","pier_pier_2":"100","pier_pierhead_1":"100","pier_pierhead_2":"100","pier_pierhead_3":"100","span1":"10","span2":"0","span3":"0","span4":"0","parapet1":"10","parapet2":"","parapet3":""},

            {"pier_id":"p8x12","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"0","pier_layout":"1","pier_type":"p8212","span_type":"sx","pier_pile_1":"100","pier_pile_2":"100","pier_pilecap_1":"100","pier_pilecap_2":"100","pier_pier_1":"100","pier_pier_2":"100","pier_pierhead_1":"100","pier_pierhead_2":"100","pier_pierhead_3":"100","span1":"10","span2":"0","span3":"0","span4":"0","parapet1":"10","parapet2":"","parapet3":""}
        ];


        var t_pier = [
            {"pier_v":"v201","pier_id":"SB01","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"1"},
            {"pier_v":"v201","pier_id":"SB02","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"1"},
            {"pier_v":"v201","pier_id":"SB03","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SB04","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"Special Crossing","pier_marker_b":"2","pier_layout":"1","pier_type":"p14","span_type":"sx","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SB05","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"2","pier_layout":"1","pier_type":"p14","span_type":"sx","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SB06","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"2","pier_layout":"1","pier_type":"p12","span_type":"sx","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SB07","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"2","pier_layout":"1","pier_type":"p12","span_type":"sx","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SB08","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SB09","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s2","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SB10","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s2","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SB11","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s2","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SB12","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s2","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SB13","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s2","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SB14","pier_north_id":"SBN14","pier_south_id":"SBS14","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p8211","span_type":"s2","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SB15","pier_north_id":"SBN15","pier_south_id":"SBS15","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p8211","span_type":"s2","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SB16","pier_north_id":"SBN16","pier_south_id":"SBS16","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p8211","span_type":"s2","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD01","pier_north_id":"DDN01","pier_south_id":"DDS01","pier_marker_a":"Damansara Damai Station (Island Platform)","pier_marker_b":"1","pier_layout":"1","pier_type":"p7x","span_type":"s2","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD02","pier_north_id":"DDN02","pier_south_id":"DDS02","pier_marker_a":"0","pier_marker_b":"1","pier_layout":"1","pier_type":"p7x","span_type":"s2","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD03","pier_north_id":"DDN03","pier_south_id":"DDS03","pier_marker_a":"0","pier_marker_b":"1","pier_layout":"1","pier_type":"p7x","span_type":"s2","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD04","pier_north_id":"DDN04","pier_south_id":"DDS04","pier_marker_a":"0","pier_marker_b":"1","pier_layout":"1","pier_type":"p7x","span_type":"s2","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD05","pier_north_id":"DDN05","pier_south_id":"DDS05","pier_marker_a":"0","pier_marker_b":"1","pier_layout":"1","pier_type":"p7x","span_type":"s2","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD06","pier_north_id":"DDN06","pier_south_id":"DDS06","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p8211","span_type":"s2","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD07","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s2","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD08","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s2","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD09","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s2","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD10","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p33","span_type":"s2","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD11","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p24","span_type":"s2","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD12","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s2","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD13","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD14","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD15","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD16","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD17","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD18","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD19","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD20","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD21","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD22","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD23","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD24","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD25","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD26","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD27","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD28","pier_north_id":"DDN28","pier_south_id":"DDS28","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p6x","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD29","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD30","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p22","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD31","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p22","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD32","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD33","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD34","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD35","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD36","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD37","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD38","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD39","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"Special Crossing","pier_marker_b":"2","pier_layout":"1","pier_type":"p12","span_type":"sx","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD40","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"2","pier_layout":"1","pier_type":"p12","span_type":"sx","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD41","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"2","pier_layout":"1","pier_type":"p12","span_type":"sx","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD42","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"sx","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD43","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p33","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD44","pier_north_id":"DDN44","pier_south_id":"DDS44","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p6x","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD45","pier_north_id":"DDN45","pier_south_id":"DDS45","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p6x","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD46","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p33","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD47","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p33","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD48","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p33","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW01","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"Sri Damansara West Station (Island Platform)","pier_marker_b":"1","pier_layout":"1","pier_type":"p32","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW02","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"1","pier_layout":"1","pier_type":"p32","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW03","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"1","pier_layout":"1","pier_type":"p32","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW04","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"1","pier_layout":"1","pier_type":"p32","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW05","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"1","pier_layout":"1","pier_type":"p32","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW06","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW07","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p33","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW08","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p33","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW09","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW10","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW11","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"0","pier_type":"0","span_type":"0","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW12","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"0","pier_type":"0","span_type":"0","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW13","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW14","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW15","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW16","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW17","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW18","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW19","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW20","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW21","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW22","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW23","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW24","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW25","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW26","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW27","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW28","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p22","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW29","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p22","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW30","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW31","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW32","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW33","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW34","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW35","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"Special Crossing","pier_marker_b":"2","pier_layout":"1","pier_type":"p12","span_type":"sx","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW36","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"2","pier_layout":"1","pier_type":"p12","span_type":"sx","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW37","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"2","pier_layout":"1","pier_type":"p12","span_type":"sx","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW38","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW39","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW40","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW41","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDE01","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"Sri Damansara East Station (Side Platform)","pier_marker_b":"1","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDE02","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"1","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDE03","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"1","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDE04","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"1","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDE05","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDE06","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDE07","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDE08","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDE09","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p22","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDE10","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDE11","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDE12","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDE13","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"12 nos. Single Pier Near Syabas Water Tanks (RCD Method)","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDE14","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDE15","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDE16","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDE17","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDE18","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDE19","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDE20","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDE21","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDE22","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDE23","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDE24","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDE25","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"0","pier_id":"0","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"0","pier_type":"0","span_type":"0","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"0","pier_id":"0","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"0","pier_type":"0","span_type":"0","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"0","pier_id":"0","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"0","pier_type":"0","span_type":"0","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"0","pier_id":"0","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"0","pier_type":"0","span_type":"0","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"0","pier_id":"0","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"0","pier_type":"0","span_type":"0","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"0","pier_id":"0","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"0","pier_type":"0","span_type":"0","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"0","pier_id":"0","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"0","pier_type":"0","span_type":"0","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"0","pier_id":"0","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"0","pier_type":"0","span_type":"0","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"0","pier_id":"0","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"0","pier_type":"0","span_type":"0","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"0","pier_id":"0","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"0","pier_type":"0","span_type":"0","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"0","pier_id":"0","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"0","pier_type":"0","span_type":"0","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"0","pier_id":"0","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"0","pier_type":"0","span_type":"0","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"0","pier_id":"0","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"0","pier_type":"0","span_type":"0","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"0","pier_id":"0","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"0","pier_type":"0","span_type":"0","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"0","pier_id":"0","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"0","pier_type":"0","span_type":"0","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"0","pier_id":"0","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"0","pier_type":"0","span_type":"0","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"0","pier_id":"0","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"0","pier_type":"0","span_type":"0","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"0","pier_id":"0","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"0","pier_type":"0","span_type":"0","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"0","pier_id":"0","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"0","pier_type":"0","span_type":"0","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"}
        ];

        for (i = 0; i < t_pier.length; i++) {
            var b = t_pier[i];
            p_pv = b.pier_v;
            p_pid = b.pier_id;
            p_nid = b.pier_north_id;
            p_sid = b.pier_south_id;
            p_maa = b.pier_marker_a;
            p_mab = b.pier_marker_b;
            p_la = b.pier_layout;
            p_pt = b.pier_type;
            p_st = b.span_type;
            p_a1 = b.pier_pile_1;
            p_a2 = b.pier_pile_2;
            p_b1 = b.pier_pilecap_1;
            p_b2 = b.pier_pilecap_2;
            p_c1 = b.pier_pier_1;
            p_c2 = b.pier_pier_2;
            p_d1 = b.pier_pierhead_1;
            p_d2 = b.pier_pierhead_2;
            p_d3 = b.pier_pierhead_3;
            p_s1 = b.span1;
            p_s2 = b.span2;
            p_s3 = b.span3;
            p_sx = b.span4;
            p_p1 = b.parapet1;
            p_p2 = b.parapet2;
            p_p3 = b.parapet3;
            p_pp = b.p_progress;

            color_0 = "none";
            color_1 = "#888899";
            color_2 = "#ff5500";
            color_3 = "#00ff00";

            p_hl0 = "highlight_null";
            p_hl1 = "highlight_normal";
            p_hl2 = "highlight_notice";
            p_hl3 = "highlight_alert";
            p_hl4 = "highlight_critical";

            // pier_pile_1
            // pier_pile_2
            if (p_a1 < 0) {color_p_a1 = color_0; p_a1_hl_trigger = 4;}
            else if (p_a1 == 0) {color_p_a1 = color_1; p_a1_hl_trigger = 3;}
            else if (p_a1 < 100) {color_p_a1 = color_2; p_a1_hl_trigger = 2;}
            else if (p_a1 == 100) {color_p_a1 = color_3; p_a1_hl_trigger = 1;}
            else if (p_a1 == '') {p_a1_hl_trigger = 0;}
            else {color_p_a1 = color_0; p_a1_hl_trigger = 4;};

            if (p_a2 < 0) {color_p_a2 = color_0; p_a2_hl_trigger = 4;}
            else if (p_a2 == 0) {color_p_a2 = color_1; p_a2_hl_trigger = 3;}
            else if (p_a2 < 100) {color_p_a2 = color_2; p_a2_hl_trigger = 2;}
            else if (p_a2 == 100) {color_p_a2 = color_3; p_a2_hl_trigger = 1;}
            else if (p_a2 == '') {p_a2_hl_trigger = 0;}
            else {color_p_a2 = color_0; p_a2_hl_trigger = 4;};

            // pier_pilecap_1
            // pier_pilecap_2
            if (p_b1 < 0) {color_p_b1 = color_0; p_b1_hl_trigger = 4;}
            else if (p_b1 == 0) {color_p_b1 = color_1; p_b1_hl_trigger = 3;}
            else if (p_b1 < 100) {color_p_b1 = color_2; p_b1_hl_trigger = 2;}
            else if (p_b1 == 100) {color_p_b1 = color_3; p_b1_hl_trigger = 1;}
            else if (p_b1 == '') {p_b1_hl_trigger = 0;}
            else {color_p_b1 = color_0; p_b1_hl_trigger = 4;};

            if (p_b2 < 0) {color_p_b2 = color_0; p_b2_hl_trigger = 4;}
            else if (p_b2 == 0) {color_p_b2 = color_1; p_b2_hl_trigger = 3;}
            else if (p_b2 < 100) {color_p_b2 = color_2; p_b2_hl_trigger = 2;}
            else if (p_b2 == 100) {color_p_b2 = color_3; p_b2_hl_trigger = 1;}
            else if (p_b2 == '') {p_b2_hl_trigger = 0;}
            else {color_p_b2 = color_0; p_b2_hl_trigger = 4;};

            // pier_pier_1
            // pier_pier_2
            if (p_c1 < 0) {color_p_c1 = color_0; p_c1_hl_trigger = 4;}
            else if (p_c1 == 0) {color_p_c1 = color_1; p_c1_hl_trigger = 3;}
            else if (p_c1 < 100) {color_p_c1 = color_2; p_c1_hl_trigger = 2;}
            else if (p_c1 == 100) {color_p_c1 = color_3; p_c1_hl_trigger = 1;}
            else if (p_c1 == '') {p_c1_hl_trigger = 0;}
            else {color_p_c1 = color_0; p_c1_hl_trigger = 4;};

            if (p_c2 < 0) {color_p_c2 = color_0; p_c2_hl_trigger = 4;}
            else if (p_c2 == 0) {color_p_c2 = color_1; p_c2_hl_trigger = 3;}
            else if (p_c2 < 100) {color_p_c2 = color_2; p_c2_hl_trigger = 2;}
            else if (p_c2 == 100) {color_p_c2 = color_3; p_c2_hl_trigger = 1;}
            else if (p_c2 == '') {p_c2_hl_trigger = 0;}
            else {color_p_c2 = color_0; p_c2_hl_trigger = 4;};

            // pier_pierhead_1
            // pier_pierhead_2
            // pier_pierhead_3 (shared)
            if (p_d1 < 0) {color_p_d1 = color_0; p_d1_hl_trigger = 4;}
            else if (p_d1 == 0) {color_p_d1 = color_1; p_d1_hl_trigger = 3;}
            else if (p_d1 < 100) {color_p_d1 = color_2; p_d1_hl_trigger = 2;}
            else if (p_d1 == 100) {color_p_d1 = color_3; p_d1_hl_trigger = 1;}
            else if (p_d1 == '') {p_d1_hl_trigger = 0;}
            else {color_p_d1 = color_0; p_d1_hl_trigger = 4;};

            if (p_d2 < 0) {color_p_d2 = color_0; p_d2_hl_trigger = 4;}
            else if (p_d2 == 0) {color_p_d2 = color_1; p_d2_hl_trigger = 3;}
            else if (p_d2 < 100) {color_p_d2 = color_2; p_d2_hl_trigger = 2;}
            else if (p_d2 == 100) {color_p_d2 = color_3; p_d2_hl_trigger = 1;}
            else if (p_d2 == '') {p_d2_hl_trigger = 0;}
            else {color_p_d2 = color_0; p_d2_hl_trigger = 4;};

            if (p_d3 < 0) {color_p_d3 = color_0; p_d3_hl_trigger = 4;}
            else if (p_d3 == 0) {color_p_d3 = color_1; p_d3_hl_trigger = 3;}
            else if (p_d3 < 100) {color_p_d3 = color_2; p_d3_hl_trigger = 2;}
            else if (p_d3 == 100) {color_p_d3 = color_3; p_d3_hl_trigger = 1;}
            else if (p_d3 == '') {p_d3_hl_trigger = 0;}
            else {color_p_d3 = color_0; p_d3_hl_trigger = 4;};

            // span1
            // span2
            // span3
            // spanx
            if (p_s1 < 0) {color_p_s1 = color_0; p_s1_hl_trigger = 4;}
            else if (p_s1 == 0) {color_p_s1 = color_1; p_s1_hl_trigger = 3;}
            else if (p_s1 < 100) {color_p_s1 = color_2; p_s1_hl_trigger = 2;}
            else if (p_s1 == 100) {color_p_s1 = color_3; p_s1_hl_trigger = 1;}
            else if (p_s1 == '') {p_s1_hl_trigger = 0;}
            else {color_p_s1 = color_0; p_s1_hl_trigger = 4;};

            if (p_s2 < 0) {color_p_s2 = color_0; p_s2_hl_trigger = 4;}
            else if (p_s2 == 0) {color_p_s2 = color_1; p_s2_hl_trigger = 3;}
            else if (p_s2 < 100) {color_p_s2 = color_2; p_s2_hl_trigger = 2;}
            else if (p_s2 == 100) {color_p_s2 = color_3; p_s2_hl_trigger = 1;}
            else if (p_s2 == '') {p_s2_hl_trigger = 0;}
            else {color_p_s2 = color_0; p_s2_hl_trigger = 4;};

            if (p_s3 < 0) {color_p_s3 = color_0; p_s3_hl_trigger = 4;}
            else if (p_s3 == 0) {color_p_s3 = color_1; p_s3_hl_trigger = 3;}
            else if (p_s3 < 100) {color_p_s3 = color_2; p_s3_hl_trigger = 2;}
            else if (p_s3 == 100) {color_p_s3 = color_3; p_s3_hl_trigger = 1;}
            else if (p_s3 == '') {p_s3_hl_trigger = 0;}
            else {color_p_s3 = color_0; p_s3_hl_trigger = 4;};

            if (p_sx < 0) {color_p_sx = color_0; p_sx_hl_trigger = 4;}
            else if (p_sx == 0) {color_p_sx = color_1; p_sx_hl_trigger = 3;}
            else if (p_sx < 100) {color_p_sx = color_2; p_sx_hl_trigger = 2;}
            else if (p_sx == 100) {color_p_sx = color_3; p_sx_hl_trigger = 1;}
            else if (p_sx == '') {p_sx_hl_trigger = 0;}
            else {color_p_sx = color_0; p_sx_hl_trigger = 4;};

            // parapet1
            // parapet2
            // parapet3
            if (p_p1 < 0) {color_p_p1 = color_0; p_p1_hl_trigger = 4;}
            else if (p_p1 == 0) {color_p_p1 = color_1; p_p1_hl_trigger = 3;}
            else if (p_p1 < 100) {color_p_p1 = color_2; p_p1_hl_trigger = 2;}
            else if (p_p1 == 100) {color_p_p1 = color_3; p_p1_hl_trigger = 1;}
            else if (p_p1 == '') {p_p1_hl_trigger = 0;}
            else {color_p_p1 = color_0; p_p1_hl_trigger = 4;};

            if (p_p2 < 0) {color_p_p2 = color_0; p_p2_hl_trigger = 4;}
            else if (p_p2 == 0) {color_p_p2 = color_1; p_p2_hl_trigger = 3;}
            else if (p_p2 < 100) {color_p_p2 = color_2; p_p2_hl_trigger = 2;}
            else if (p_p2 == 100) {color_p_p2 = color_3; p_p2_hl_trigger = 1;}
            else if (p_p2 == '') {p_p2_hl_trigger = 0;}
            else {color_p_p2 = color_0; p_p2_hl_trigger = 4;};

            if (p_p3 < 0) {color_p_p3 = color_0; p_p3_hl_trigger = 4;}
            else if (p_p3 == 0) {color_p_p3 = color_1; p_p3_hl_trigger = 3;}
            else if (p_p3 < 100) {color_p_p3 = color_2; p_p3_hl_trigger = 2;}
            else if (p_p3 == 100) {color_p_p3 = color_3; p_p3_hl_trigger = 1;}
            else if (p_p3 == '') {p_p3_hl_trigger = 0;}
            else {color_p_p3 = color_0; p_p3_hl_trigger = 4;};

            // pier highlights
            if (p_pp == 0) {
                p_highlight = p_hl1;
            } else if (p_pp == 1) {
                p_highlight = p_hl4;
            } else {
                p_highlight = p_hl1;
            };

            // pier_layout
            if (p_la == 1) {
                $('div.pier_plate').append('<div id="pier_id_'+p_pid+'" class="pier_block pier_block_type_a"><div class="marker_a"><span class="content"></span></div><div class="marker_b"><span class="content"></span></div><div class="span"><span class="content"></span></div><div class="pier"><span class="content"></span></div><div class="pier_id"></div><div class="marker_d"><span class="content"><button id="btn_pier_id_'+p_pid+'" type="button" class="btn btn-primary btn-xs">Details</button></span></div><span class="'+p_highlight+'"></span></div>');
                /* pier layout a"*/
            } else {
                /* something else"*/
            };

            // pier_marker_a
            // pier_marker_b
            if (p_mab == 0) {
                /* no marker_a, marker_b"*/
            } else if (p_mab == 1) {
                if (p_maa != 0) {
                    $('div#pier_id_'+p_pid+' div.marker_a span.content').removeClass().addClass('content station_title').append(p_maa);
                };
                $('div#pier_id_'+p_pid+' div.marker_b span.content').removeClass().addClass('content station');
                /* got station"*/
            } else if (p_mab == 2) {
                if (p_maa != 0) {
                    $('div#pier_id_'+p_pid+' div.marker_a span.content').removeClass().addClass('content special_span_title').append(p_maa);
                };
                $('div#pier_id_'+p_pid+' div.marker_b span.content').removeClass().addClass('content special_span');
                /* got special span"*/
            } else {
                /* something else"*/
            };

            // pier_id
            // pier_north_id
            // pier_south_id
            if (p_nid == "" || p_sid == "" || p_nid == 0 || p_sid == 0) {
                /* use single label, ignore p_nid & p_sid"*/
                $('div#pier_id_'+p_pid+' div.pier_id').append('<span class="content single"><span class="name1"><span class="id_plate">'+p_pid+'</span></span></span>');
            } else {
                $('div#pier_id_'+p_pid+' div.pier_id').append('<span class="content twin"><span class="name2"><span class="id_plate">'+p_sid+'</span></span><span class="name1"><span class="id_plate">'+p_nid+'</span></span></span>');
                /* use twin label, ignore pier_id"*/
            };

            // $('div#pier_id_'+p_pid+' .pier span.content').load('../assets/svg/d1/pier_a1b1c1d1.svg');

            switch(p_pt){

                case "p11":
                    // console.log('pier_a2b1c1d1.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer" sodipodi:insensitive="true"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'" d="m 114.22734,110.43311 0,-5.53973 3.38539,0 3.3854,0 0,5.53973 0,5.53974 -3.3854,0 -3.38539,0 z" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'" d="m 108.19804,101.50753 0,-2.667274 9.48936,0 9.48937,0 0,2.667274 0,2.66729 -9.48937,0 -9.48936,0 z" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'" d="m 112.91752,88.275926 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_d1+'" d="m 111.73272,72.680093 -1.23742,-5.026806 1.11138,0 1.11139,0 0,-1.333635 0,-1.333648 1.94917,0 1.94917,0 0,1.333648 0,1.333635 1.07716,0 1.07718,0 0,-1.333635 0,-1.333648 1.94916,0 1.94917,0 0,1.333648 0,1.333635 1.11653,0 1.11653,0 -0.54216,2.179993 c -0.29817,1.19899 -0.8535,3.461057 -1.23405,5.026808 l -0.6919,2.846808 -4.73194,0 -4.73192,0 z" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;
                case "p12":
                    // console.log('pier_a2b1c1d1.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer" sodipodi:insensitive="true"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'" d="m 108.19813,110.40624 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 15.28557,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'" d="m 108.19804,101.50753 0,-2.667274 9.48936,0 9.48937,0 0,2.667274 0,2.66729 -9.48937,0 -9.48936,0 z" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'" d="m 112.91752,88.275926 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_d1+'" d="m 111.73272,72.680093 -1.23742,-5.026806 1.11138,0 1.11139,0 0,-1.333635 0,-1.333648 1.94917,0 1.94917,0 0,1.333648 0,1.333635 1.07716,0 1.07718,0 0,-1.333635 0,-1.333648 1.94916,0 1.94917,0 0,1.333648 0,1.333635 1.11653,0 1.11653,0 -0.54216,2.179993 c -0.29817,1.19899 -0.8535,3.461057 -1.23405,5.026808 l -0.6919,2.846808 -4.73194,0 -4.73192,0 z" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;
                case "p13":
                    // console.log('pier_a3b1c1d1.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer" sodipodi:insensitive="true"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'" d="m 108.20774,110.40206 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 7.69407,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 7.5915,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'" d="m 108.19804,101.50753 0,-2.667274 9.48936,0 9.48937,0 0,2.667274 0,2.66729 -9.48937,0 -9.48936,0 z" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'" d="m 112.91752,88.275926 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_d1+'" d="m 111.73272,72.680093 -1.23742,-5.026806 1.11138,0 1.11139,0 0,-1.333635 0,-1.333648 1.94917,0 1.94917,0 0,1.333648 0,1.333635 1.07716,0 1.07718,0 0,-1.333635 0,-1.333648 1.94916,0 1.94917,0 0,1.333648 0,1.333635 1.11653,0 1.11653,0 -0.54216,2.179993 c -0.29817,1.19899 -0.8535,3.461057 -1.23405,5.026808 l -0.6919,2.846808 -4.73194,0 -4.73192,0 z" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;
                case "p14":
                    // console.log('pier_a4b1c1d1.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer" sodipodi:insensitive="true"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'" d="m 108.207,110.39764 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 5.23198,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 5.12939,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 4.92421,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'" d="m 108.19804,101.50753 0,-2.667274 9.48936,0 9.48937,0 0,2.667274 0,2.66729 -9.48937,0 -9.48936,0 z" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'" d="m 112.91752,88.275926 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_d1+'" d="m 111.73272,72.680093 -1.23742,-5.026806 1.11138,0 1.11139,0 0,-1.333635 0,-1.333648 1.94917,0 1.94917,0 0,1.333648 0,1.333635 1.07716,0 1.07718,0 0,-1.333635 0,-1.333648 1.94916,0 1.94917,0 0,1.333648 0,1.333635 1.11653,0 1.11653,0 -0.54216,2.179993 c -0.29817,1.19899 -0.8535,3.461057 -1.23405,5.026808 l -0.6919,2.846808 -4.73194,0 -4.73192,0 z" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;
                case "p1x":
                    // console.log('pier_axb1c1d1.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer" sodipodi:insensitive="true"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'" d="m 113.43898,110.39764 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 5.12939,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'" d="m 108.19804,101.50753 0,-2.667274 9.48936,0 9.48937,0 0,2.667274 0,2.66729 -9.48937,0 -9.48936,0 z" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'" d="m 112.91752,88.275926 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_d1+'" d="m 111.73272,72.680093 -1.23742,-5.026806 1.11138,0 1.11139,0 0,-1.333635 0,-1.333648 1.94917,0 1.94917,0 0,1.333648 0,1.333635 1.07716,0 1.07718,0 0,-1.333635 0,-1.333648 1.94916,0 1.94917,0 0,1.333648 0,1.333635 1.11653,0 1.11653,0 -0.54216,2.179993 c -0.29817,1.19899 -0.8535,3.461057 -1.23405,5.026808 l -0.6919,2.846808 -4.73194,0 -4.73192,0 z" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;

                case "p21":
                    // console.log('pier_a1b1c1d2.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer" sodipodi:insensitive="true"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'" d="m 121.47734,110.43311 0,-5.53973 3.38539,0 3.3854,0 0,5.53973 0,5.53974 -3.3854,0 -3.38539,0 z" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'" d="m 115.44804,101.50753 0,-2.667274 9.48936,0 9.48937,0 0,2.667274 0,2.66729 -9.48937,0 -9.48936,0 z" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'" d="m 120.16752,88.275926 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_d1+'" d="m 116.48175,75.78599 c -2.00304,-1.04923 -3.67543,-1.9383 -3.71644,-1.97567 -0.0411,-0.0375 -0.213,-1.24394 -0.38217,-2.68121 -0.16918,-1.43728 -0.33466,-2.80944 -0.36772,-3.04923 l -0.0601,-0.436 0.51922,0 0.51922,0 0,-1.33364 0,-1.33364 1.94917,0 1.94917,0 0,1.33364 0,1.33364 1.07717,0 1.07717,0 0,-1.33364 0,-1.33364 1.94916,0 1.94917,0 0,1.33364 0,1.33364 3.3341,0 3.3341,0 0,5.02681 0,5.02679 -4.74467,-9.1e-4 -4.74469,-9.1e-4 -3.64187,-1.90769 z" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;
                case "p22":
                    // console.log('pier_a2b1c1d2.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer" sodipodi:insensitive="true"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'" d="m 115.35628,110.40624 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 15.28557,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'" d="m 115.44804,101.50753 0,-2.667274 9.48936,0 9.48937,0 0,2.667274 0,2.66729 -9.48937,0 -9.48936,0 z" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'" d="m 120.16752,88.275926 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_d1+'" d="m 116.48175,75.78599 c -2.00304,-1.04923 -3.67543,-1.9383 -3.71644,-1.97567 -0.0411,-0.0375 -0.213,-1.24394 -0.38217,-2.68121 -0.16918,-1.43728 -0.33466,-2.80944 -0.36772,-3.04923 l -0.0601,-0.436 0.51922,0 0.51922,0 0,-1.33364 0,-1.33364 1.94917,0 1.94917,0 0,1.33364 0,1.33364 1.07717,0 1.07717,0 0,-1.33364 0,-1.33364 1.94916,0 1.94917,0 0,1.33364 0,1.33364 3.3341,0 3.3341,0 0,5.02681 0,5.02679 -4.74467,-9.1e-4 -4.74469,-9.1e-4 -3.64187,-1.90769 z" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;
                case "p23":
                    // console.log('pier_a3b1c1d2.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer" sodipodi:insensitive="true"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'" d="m 115.36767,110.40206 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 7.69407,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 7.5915,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'" d="m 115.44804,101.50753 0,-2.667274 9.48936,0 9.48937,0 0,2.667274 0,2.66729 -9.48937,0 -9.48936,0 z" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'" d="m 120.16752,88.275926 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_d1+'" d="m 116.48175,75.78599 c -2.00304,-1.04923 -3.67543,-1.9383 -3.71644,-1.97567 -0.0411,-0.0375 -0.213,-1.24394 -0.38217,-2.68121 -0.16918,-1.43728 -0.33466,-2.80944 -0.36772,-3.04923 l -0.0601,-0.436 0.51922,0 0.51922,0 0,-1.33364 0,-1.33364 1.94917,0 1.94917,0 0,1.33364 0,1.33364 1.07717,0 1.07717,0 0,-1.33364 0,-1.33364 1.94916,0 1.94917,0 0,1.33364 0,1.33364 3.3341,0 3.3341,0 0,5.02681 0,5.02679 -4.74467,-9.1e-4 -4.74469,-9.1e-4 -3.64187,-1.90769 z" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;
                case "p24":
                    // console.log('pier_a4b1c1d2.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer" sodipodi:insensitive="true"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'" d="m 115.36693,110.39764 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 5.23198,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 5.12939,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 4.92421,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'" d="m 115.44804,101.50753 0,-2.667274 9.48936,0 9.48937,0 0,2.667274 0,2.66729 -9.48937,0 -9.48936,0 z" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'" d="m 120.16752,88.275926 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_d1+'" d="m 116.48175,75.78599 c -2.00304,-1.04923 -3.67543,-1.9383 -3.71644,-1.97567 -0.0411,-0.0375 -0.213,-1.24394 -0.38217,-2.68121 -0.16918,-1.43728 -0.33466,-2.80944 -0.36772,-3.04923 l -0.0601,-0.436 0.51922,0 0.51922,0 0,-1.33364 0,-1.33364 1.94917,0 1.94917,0 0,1.33364 0,1.33364 1.07717,0 1.07717,0 0,-1.33364 0,-1.33364 1.94916,0 1.94917,0 0,1.33364 0,1.33364 3.3341,0 3.3341,0 0,5.02681 0,5.02679 -4.74467,-9.1e-4 -4.74469,-9.1e-4 -3.64187,-1.90769 z" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;
                case "p2x":
                    // console.log('pier_axb1c1d2.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer" sodipodi:insensitive="true"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'" d="m 120.59891,110.39764 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 5.12939,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'" d="m 115.44804,101.50753 0,-2.667274 9.48936,0 9.48937,0 0,2.667274 0,2.66729 -9.48937,0 -9.48936,0 z" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'" d="m 120.16752,88.275926 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_d1+'" d="m 116.48175,75.78599 c -2.00304,-1.04923 -3.67543,-1.9383 -3.71644,-1.97567 -0.0411,-0.0375 -0.213,-1.24394 -0.38217,-2.68121 -0.16918,-1.43728 -0.33466,-2.80944 -0.36772,-3.04923 l -0.0601,-0.436 0.51922,0 0.51922,0 0,-1.33364 0,-1.33364 1.94917,0 1.94917,0 0,1.33364 0,1.33364 1.07717,0 1.07717,0 0,-1.33364 0,-1.33364 1.94916,0 1.94917,0 0,1.33364 0,1.33364 3.3341,0 3.3341,0 0,5.02681 0,5.02679 -4.74467,-9.1e-4 -4.74469,-9.1e-4 -3.64187,-1.90769 z" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;

                case "p31":
                    // console.log('pier_a1b1c1d3.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer" sodipodi:insensitive="true"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'" d="m 114.01917,110.43311 0,-5.53973 3.38539,0 3.3854,0 0,5.53973 0,5.53974 -3.3854,0 -3.38539,0 z" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'" d="m 107.98987,101.50753 0,-2.667274 9.48936,0 9.48937,0 0,2.667274 0,2.66729 -9.48937,0 -9.48936,0 z" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'" d="m 112.70935,88.275926 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_d1+'" d="m 112.66592,77.694648 c -0.0286,-0.0286 -2.51858,-0.89366 -5.53315,-1.92225 l -5.48103,-1.87012 -1.52789,-0.0546 -1.527906,-0.0544 -0.75467,-2.14359 -0.75466,-2.14356 0.56981,-1.0623 0.5698,-1.0623 1.738415,0 1.738391,0 0,-1.33364 0,-1.33363 1.94917,0 1.94917,0 0,1.33363 0,1.33364 1.07717,0 1.07717,0 0,-1.33364 0,-1.33363 1.94917,0 1.94916,0 0,1.33363 0,1.33364 5.79621,0 5.79621,0 0,-1.33364 0,-1.33363 1.94916,0 1.94917,0 0,1.33363 0,1.33364 1.07717,0 1.07718,0 0,-1.33364 0,-1.33363 1.94916,0 1.94917,0 0,1.33363 0,1.33364 1.73841,0 1.73841,0 0.56981,1.0623 0.5698,1.0623 -0.75467,2.14356 -0.75467,2.14359 -1.52789,0.0544 -1.5279,0.0546 -5.48845,1.89466 -5.48844,1.89463 -4.77693,0.0276 c -2.62731,0.0154 -4.80037,0.005 -4.82903,-0.0245 z" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;
                case "p32":
                    // console.log('pier_a2b1c1d3.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer" sodipodi:insensitive="true"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'" d="m 109.02366,110.40624 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 15.28557,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'" d="m 107.98987,101.50753 0,-2.667274 9.48936,0 9.48937,0 0,2.667274 0,2.66729 -9.48937,0 -9.48936,0 z" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'" d="m 112.70935,88.275926 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_d1+'" d="m 112.66592,77.694648 c -0.0286,-0.0286 -2.51858,-0.89366 -5.53315,-1.92225 l -5.48103,-1.87012 -1.52789,-0.0546 -1.527906,-0.0544 -0.75467,-2.14359 -0.75466,-2.14356 0.56981,-1.0623 0.5698,-1.0623 1.738415,0 1.738391,0 0,-1.33364 0,-1.33363 1.94917,0 1.94917,0 0,1.33363 0,1.33364 1.07717,0 1.07717,0 0,-1.33364 0,-1.33363 1.94917,0 1.94916,0 0,1.33363 0,1.33364 5.79621,0 5.79621,0 0,-1.33364 0,-1.33363 1.94916,0 1.94917,0 0,1.33363 0,1.33364 1.07717,0 1.07718,0 0,-1.33364 0,-1.33363 1.94916,0 1.94917,0 0,1.33363 0,1.33364 1.73841,0 1.73841,0 0.56981,1.0623 0.5698,1.0623 -0.75467,2.14356 -0.75467,2.14359 -1.52789,0.0544 -1.5279,0.0546 -5.48845,1.89466 -5.48844,1.89463 -4.77693,0.0276 c -2.62731,0.0154 -4.80037,0.005 -4.82903,-0.0245 z" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;
                case "p33":
                    // console.log('pier_a3b1c1d3.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer" sodipodi:insensitive="true"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'" d="m 107.94658,110.40206 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 7.69407,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 7.5915,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'" d="m 107.98987,101.50753 0,-2.667274 9.48936,0 9.48937,0 0,2.667274 0,2.66729 -9.48937,0 -9.48936,0 z" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'" d="m 112.70935,88.275926 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_d1+'" d="m 112.66592,77.694648 c -0.0286,-0.0286 -2.51858,-0.89366 -5.53315,-1.92225 l -5.48103,-1.87012 -1.52789,-0.0546 -1.527906,-0.0544 -0.75467,-2.14359 -0.75466,-2.14356 0.56981,-1.0623 0.5698,-1.0623 1.738415,0 1.738391,0 0,-1.33364 0,-1.33363 1.94917,0 1.94917,0 0,1.33363 0,1.33364 1.07717,0 1.07717,0 0,-1.33364 0,-1.33363 1.94917,0 1.94916,0 0,1.33363 0,1.33364 5.79621,0 5.79621,0 0,-1.33364 0,-1.33363 1.94916,0 1.94917,0 0,1.33363 0,1.33364 1.07717,0 1.07718,0 0,-1.33364 0,-1.33363 1.94916,0 1.94917,0 0,1.33363 0,1.33364 1.73841,0 1.73841,0 0.56981,1.0623 0.5698,1.0623 -0.75467,2.14356 -0.75467,2.14359 -1.52789,0.0544 -1.5279,0.0546 -5.48845,1.89466 -5.48844,1.89463 -4.77693,0.0276 c -2.62731,0.0154 -4.80037,0.005 -4.82903,-0.0245 z" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;
                case "p34":
                    // console.log('pier_a4b1c1d3.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer" sodipodi:insensitive="true"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'" d="m 107.9739,110.39764 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 5.23198,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 5.12939,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 4.92421,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'" d="m 107.98987,101.50753 0,-2.667274 9.48936,0 9.48937,0 0,2.667274 0,2.66729 -9.48937,0 -9.48936,0 z" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'" d="m 112.70935,88.275926 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_d1+'" d="m 112.66592,77.694648 c -0.0286,-0.0286 -2.51858,-0.89366 -5.53315,-1.92225 l -5.48103,-1.87012 -1.52789,-0.0546 -1.527906,-0.0544 -0.75467,-2.14359 -0.75466,-2.14356 0.56981,-1.0623 0.5698,-1.0623 1.738415,0 1.738391,0 0,-1.33364 0,-1.33363 1.94917,0 1.94917,0 0,1.33363 0,1.33364 1.07717,0 1.07717,0 0,-1.33364 0,-1.33363 1.94917,0 1.94916,0 0,1.33363 0,1.33364 5.79621,0 5.79621,0 0,-1.33364 0,-1.33363 1.94916,0 1.94917,0 0,1.33363 0,1.33364 1.07717,0 1.07718,0 0,-1.33364 0,-1.33363 1.94916,0 1.94917,0 0,1.33363 0,1.33364 1.73841,0 1.73841,0 0.56981,1.0623 0.5698,1.0623 -0.75467,2.14356 -0.75467,2.14359 -1.52789,0.0544 -1.5279,0.0546 -5.48845,1.89466 -5.48844,1.89463 -4.77693,0.0276 c -2.62731,0.0154 -4.80037,0.005 -4.82903,-0.0245 z" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;
                case "p3x":
                    // console.log('pier_axb1c1d3.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer" sodipodi:insensitive="true"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'" d="m 113.20955,110.39764 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 5.12939,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'" d="m 107.98987,101.50753 0,-2.667274 9.48936,0 9.48937,0 0,2.667274 0,2.66729 -9.48937,0 -9.48936,0 z" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'" d="m 112.70935,88.275926 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_d1+'" d="m 112.66592,77.694648 c -0.0286,-0.0286 -2.51858,-0.89366 -5.53315,-1.92225 l -5.48103,-1.87012 -1.52789,-0.0546 -1.527906,-0.0544 -0.75467,-2.14359 -0.75466,-2.14356 0.56981,-1.0623 0.5698,-1.0623 1.738415,0 1.738391,0 0,-1.33364 0,-1.33363 1.94917,0 1.94917,0 0,1.33363 0,1.33364 1.07717,0 1.07717,0 0,-1.33364 0,-1.33363 1.94917,0 1.94916,0 0,1.33363 0,1.33364 5.79621,0 5.79621,0 0,-1.33364 0,-1.33363 1.94916,0 1.94917,0 0,1.33363 0,1.33364 1.07717,0 1.07718,0 0,-1.33364 0,-1.33363 1.94916,0 1.94917,0 0,1.33363 0,1.33364 1.73841,0 1.73841,0 0.56981,1.0623 0.5698,1.0623 -0.75467,2.14356 -0.75467,2.14359 -1.52789,0.0544 -1.5279,0.0546 -5.48845,1.89466 -5.48844,1.89463 -4.77693,0.0276 c -2.62731,0.0154 -4.80037,0.005 -4.82903,-0.0245 z" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;

                case "p41":
                    // console.log('pier_a1b1c1d4.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer" sodipodi:insensitive="true"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'" d="m 114.54198,119.44872 0,-5.53973 3.38539,0 3.3854,0 0,5.53973 0,5.53974 -3.3854,0 -3.38539,0 z" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'" d="m 108.51268,110.52314 0,-2.66727 9.48936,0 9.48937,0 0,2.66727 0,2.66729 -9.48937,0 -9.48936,0 z" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'" d="m 113.2292,102.0865 0,-4.95029 4.77033,-4.7695 4.77032,-4.7695 0,9.71977 0,9.71979 -4.77032,0 -4.77033,0 z" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_d1+'" d="m 101.69291,92.824685 0,-4.97551 4.75742,0 4.75741,0 11.60533,-11.64749 11.60534,-11.6475 0,5.05641 0,5.05638 -11.56694,11.56662 -11.56693,11.56659 -4.79581,0 -4.79582,0 z m 12.05408,-16.8757 11.38688,-11.38725 4.30869,0 4.30868,0 -11.38689,11.38725 -11.38689,11.38724 -4.30869,0 -4.30869,0 z" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;
                case "p42":
                    // console.log('pier_a2b1c1d4.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer" sodipodi:insensitive="true"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'" d="m 108.52724,119.42656 0,-5.53973 1.84657,0 1.84659,0 0,5.53973 0,5.53974 -1.84659,0 -1.84657,0 z m 15.28556,0 0,-5.53973 1.84658,0 1.84659,0 0,5.53973 0,5.53974 -1.84659,0 -1.84658,0 z" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'" d="m 108.51268,110.52314 0,-2.66727 9.48936,0 9.48937,0 0,2.66727 0,2.66729 -9.48937,0 -9.48936,0 z" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'" d="m 113.2292,102.0865 0,-4.95029 4.77033,-4.7695 4.77032,-4.7695 0,9.71977 0,9.71979 -4.77032,0 -4.77033,0 z" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_d1+'" d="m 101.69291,92.824685 0,-4.97551 4.75742,0 4.75741,0 11.60533,-11.64749 11.60534,-11.6475 0,5.05641 0,5.05638 -11.56694,11.56662 -11.56693,11.56659 -4.79581,0 -4.79582,0 z m 12.05408,-16.8757 11.38688,-11.38725 4.30869,0 4.30868,0 -11.38689,11.38725 -11.38689,11.38724 -4.30869,0 -4.30869,0 z" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;
                case "p43":
                    // console.log('pier_a3b1c1d4.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer" sodipodi:insensitive="true"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'" d="m 108.52136,119.42976 0,-5.53973 1.84657,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84657,0 z m 7.69407,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 7.5915,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'" d="m 108.51268,110.52314 0,-2.66727 9.48936,0 9.48937,0 0,2.66727 0,2.66729 -9.48937,0 -9.48936,0 z" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'" d="m 113.2292,102.0865 0,-4.95029 4.77033,-4.7695 4.77032,-4.7695 0,9.71977 0,9.71979 -4.77032,0 -4.77033,0 z" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_d1+'" d="m 101.69291,92.824685 0,-4.97551 4.75742,0 4.75741,0 11.60533,-11.64749 11.60534,-11.6475 0,5.05641 0,5.05638 -11.56694,11.56662 -11.56693,11.56659 -4.79581,0 -4.79582,0 z m 12.05408,-16.8757 11.38688,-11.38725 4.30869,0 4.30868,0 -11.38689,11.38725 -11.38689,11.38724 -4.30869,0 -4.30869,0 z" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;
                case "p44":
                    // console.log('pier_a4b1c1d4.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer" sodipodi:insensitive="true"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'" d="m 108.512,119.41713 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 5.23198,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 5.12939,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 4.92421,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'" d="m 108.51268,110.52314 0,-2.66727 9.48936,0 9.48937,0 0,2.66727 0,2.66729 -9.48937,0 -9.48936,0 z" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'" d="m 113.2292,102.0865 0,-4.95029 4.77033,-4.7695 4.77032,-4.7695 0,9.71977 0,9.71979 -4.77032,0 -4.77033,0 z" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_d1+'" d="m 101.69291,92.824685 0,-4.97551 4.75742,0 4.75741,0 11.60533,-11.64749 11.60534,-11.6475 0,5.05641 0,5.05638 -11.56694,11.56662 -11.56693,11.56659 -4.79581,0 -4.79582,0 z m 12.05408,-16.8757 11.38688,-11.38725 4.30869,0 4.30868,0 -11.38689,11.38725 -11.38689,11.38724 -4.30869,0 -4.30869,0 z" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;
                case "p4x":
                    // console.log('pier_axb1c1d4.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer" sodipodi:insensitive="true"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'" d="m 113.74398,119.41713 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 5.12939,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'" d="m 108.51268,110.52314 0,-2.66727 9.48936,0 9.48937,0 0,2.66727 0,2.66729 -9.48937,0 -9.48936,0 z" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'" d="m 113.2292,102.0865 0,-4.95029 4.77033,-4.7695 4.77032,-4.7695 0,9.71977 0,9.71979 -4.77032,0 -4.77033,0 z" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_d1+'" d="m 101.69291,92.824685 0,-4.97551 4.75742,0 4.75741,0 11.60533,-11.64749 11.60534,-11.6475 0,5.05641 0,5.05638 -11.56694,11.56662 -11.56693,11.56659 -4.79581,0 -4.79582,0 z m 12.05408,-16.8757 11.38688,-11.38725 4.30869,0 4.30868,0 -11.38689,11.38725 -11.38689,11.38724 -4.30869,0 -4.30869,0 z" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;

                case "p51":
                    // console.log('pier_a1b1c1d5.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer" sodipodi:insensitive="true"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'" d="m 114.48857,132.83955 0,-5.53973 3.38539,0 3.3854,0 0,5.53973 0,5.53974 -3.3854,0 -3.38539,0 z" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'" d="m 108.45927,123.91397 0,-2.66727 9.48936,0 9.48937,0 0,2.66727 0,2.66729 -9.48937,0 -9.48936,0 z" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'" d="m 113.17579,115.47733 0,-4.95029 4.77033,-4.7695 4.77032,-4.7695 0,9.71977 0,9.71979 -4.77032,0 -4.77033,0 z" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_d1+'" d="m 101.64056,106.22329 0,-4.97551 4.75741,0 4.75741,0 11.60533,-11.647481 11.60534,-11.647503 0,5.056413 0,5.05638 -11.56694,11.566616 -11.56694,11.566585 -4.79581,0 -4.7958,0 z m -1.19053,-10.823001 -1.237432,-5.02679 1.111392,0 1.1114,0 0,-1.33365 0,-1.33364 1.94917,0 1.94916,0 0,1.33364 0,1.33365 1.07718,0 1.07717,0 0,-1.33365 0,-1.33364 1.94917,0 1.94916,0 0,1.33364 0,1.33365 1.11652,0 1.11653,0 -0.54215,2.17998 c -0.29819,1.19899 -0.8535,3.46107 -1.23405,5.0268 l -0.69192,2.846821 -4.73192,0 -4.73193,0 z m 11.50351,4.00091 c 0.0398,-0.19746 0.52806,-2.27489 1.08496,-4.61645 0.55688,-2.34156 1.0365,-4.35894 1.06581,-4.48306 0.0494,-0.20916 0.0118,-0.22794 -0.51277,-0.25648 l -0.56605,-0.0307 6.02965,-6.02818 6.02965,-6.028153 4.28179,0.0268 4.2818,0.0268 -10.88363,10.874293 c -9.4241,9.416 -10.87392,10.826136 -10.81121,10.51523 z m 11.68132,-27.185773 -1.23743,-5.0268 1.1114,0 1.11139,0 0,-1.33365 0,-1.33363 1.94916,0 1.94917,0 0,1.33363 0,1.33365 1.07717,0 1.07717,0 0,-1.33365 0,-1.33363 1.94917,0 1.94916,0 0,1.33363 0,1.33365 1.11653,0 1.11653,0 -0.54214,2.17999 c -0.29819,1.19901 -0.85351,3.46104 -1.23406,5.0268 l -0.69191,2.84681 -4.73194,0 -4.73192,0 z" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;
                case "p52":
                    // console.log('pier_a2b1c1d5.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer" sodipodi:insensitive="true"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'" d="m 108.444,132.80957 0,-5.53973 1.84657,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84657,0 z m 15.28556,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'" d="m 108.45927,123.91397 0,-2.66727 9.48936,0 9.48937,0 0,2.66727 0,2.66729 -9.48937,0 -9.48936,0 z" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'" d="m 113.17579,115.47733 0,-4.95029 4.77033,-4.7695 4.77032,-4.7695 0,9.71977 0,9.71979 -4.77032,0 -4.77033,0 z" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_d1+'" d="m 101.64056,106.22329 0,-4.97551 4.75741,0 4.75741,0 11.60533,-11.647481 11.60534,-11.647503 0,5.056413 0,5.05638 -11.56694,11.566616 -11.56694,11.566585 -4.79581,0 -4.7958,0 z m -1.19053,-10.823001 -1.237432,-5.02679 1.111392,0 1.1114,0 0,-1.33365 0,-1.33364 1.94917,0 1.94916,0 0,1.33364 0,1.33365 1.07718,0 1.07717,0 0,-1.33365 0,-1.33364 1.94917,0 1.94916,0 0,1.33364 0,1.33365 1.11652,0 1.11653,0 -0.54215,2.17998 c -0.29819,1.19899 -0.8535,3.46107 -1.23405,5.0268 l -0.69192,2.846821 -4.73192,0 -4.73193,0 z m 11.50351,4.00091 c 0.0398,-0.19746 0.52806,-2.27489 1.08496,-4.61645 0.55688,-2.34156 1.0365,-4.35894 1.06581,-4.48306 0.0494,-0.20916 0.0118,-0.22794 -0.51277,-0.25648 l -0.56605,-0.0307 6.02965,-6.02818 6.02965,-6.028153 4.28179,0.0268 4.2818,0.0268 -10.88363,10.874293 c -9.4241,9.416 -10.87392,10.826136 -10.81121,10.51523 z m 11.68132,-27.185773 -1.23743,-5.0268 1.1114,0 1.11139,0 0,-1.33365 0,-1.33363 1.94916,0 1.94917,0 0,1.33363 0,1.33365 1.07717,0 1.07717,0 0,-1.33365 0,-1.33363 1.94917,0 1.94916,0 0,1.33363 0,1.33365 1.11653,0 1.11653,0 -0.54214,2.17999 c -0.29819,1.19901 -0.85351,3.46104 -1.23406,5.0268 l -0.69191,2.84681 -4.73194,0 -4.73192,0 z" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;
                case "p53":
                    // console.log('pier_a3b1c1d5.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer" sodipodi:insensitive="true"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'" d="m 108.44028,132.78506 0,-5.53973 1.84657,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84657,0 z m 7.69407,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 7.59149,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'" d="m 108.45927,123.91397 0,-2.66727 9.48936,0 9.48937,0 0,2.66727 0,2.66729 -9.48937,0 -9.48936,0 z" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'" d="m 113.17579,115.47733 0,-4.95029 4.77033,-4.7695 4.77032,-4.7695 0,9.71977 0,9.71979 -4.77032,0 -4.77033,0 z" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_d1+'" d="m 101.64056,106.22329 0,-4.97551 4.75741,0 4.75741,0 11.60533,-11.647481 11.60534,-11.647503 0,5.056413 0,5.05638 -11.56694,11.566616 -11.56694,11.566585 -4.79581,0 -4.7958,0 z m -1.19053,-10.823001 -1.237432,-5.02679 1.111392,0 1.1114,0 0,-1.33365 0,-1.33364 1.94917,0 1.94916,0 0,1.33364 0,1.33365 1.07718,0 1.07717,0 0,-1.33365 0,-1.33364 1.94917,0 1.94916,0 0,1.33364 0,1.33365 1.11652,0 1.11653,0 -0.54215,2.17998 c -0.29819,1.19899 -0.8535,3.46107 -1.23405,5.0268 l -0.69192,2.846821 -4.73192,0 -4.73193,0 z m 11.50351,4.00091 c 0.0398,-0.19746 0.52806,-2.27489 1.08496,-4.61645 0.55688,-2.34156 1.0365,-4.35894 1.06581,-4.48306 0.0494,-0.20916 0.0118,-0.22794 -0.51277,-0.25648 l -0.56605,-0.0307 6.02965,-6.02818 6.02965,-6.028153 4.28179,0.0268 4.2818,0.0268 -10.88363,10.874293 c -9.4241,9.416 -10.87392,10.826136 -10.81121,10.51523 z m 11.68132,-27.185773 -1.23743,-5.0268 1.1114,0 1.11139,0 0,-1.33365 0,-1.33363 1.94916,0 1.94917,0 0,1.33363 0,1.33365 1.07717,0 1.07717,0 0,-1.33365 0,-1.33363 1.94917,0 1.94916,0 0,1.33363 0,1.33365 1.11653,0 1.11653,0 -0.54214,2.17999 c -0.29819,1.19901 -0.85351,3.46104 -1.23406,5.0268 l -0.69191,2.84681 -4.73194,0 -4.73192,0 z" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;
                case "p54":
                    // console.log('pier_a4b1c1d5.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer" sodipodi:insensitive="true"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'" d="m 108.43892,132.78396 0,-5.53972 1.84658,0 1.84658,0 0,5.53972 0,5.53974 -1.84658,0 -1.84658,0 z m 5.23198,0 0,-5.53972 1.84658,0 1.84658,0 0,5.53972 0,5.53974 -1.84658,0 -1.84658,0 z m 5.12939,0 0,-5.53972 1.84658,0 1.84658,0 0,5.53972 0,5.53974 -1.84658,0 -1.84658,0 z m 4.92421,0 0,-5.53972 1.84658,0 1.84658,0 0,5.53972 0,5.53974 -1.84658,0 -1.84658,0 z" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'" d="m 108.45927,123.91397 0,-2.66727 9.48936,0 9.48937,0 0,2.66727 0,2.66729 -9.48937,0 -9.48936,0 z" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'" d="m 113.17579,115.47733 0,-4.95029 4.77033,-4.7695 4.77032,-4.7695 0,9.71977 0,9.71979 -4.77032,0 -4.77033,0 z" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_d1+'" d="m 101.64056,106.22329 0,-4.97551 4.75741,0 4.75741,0 11.60533,-11.647481 11.60534,-11.647503 0,5.056413 0,5.05638 -11.56694,11.566616 -11.56694,11.566585 -4.79581,0 -4.7958,0 z m -1.19053,-10.823001 -1.237432,-5.02679 1.111392,0 1.1114,0 0,-1.33365 0,-1.33364 1.94917,0 1.94916,0 0,1.33364 0,1.33365 1.07718,0 1.07717,0 0,-1.33365 0,-1.33364 1.94917,0 1.94916,0 0,1.33364 0,1.33365 1.11652,0 1.11653,0 -0.54215,2.17998 c -0.29819,1.19899 -0.8535,3.46107 -1.23405,5.0268 l -0.69192,2.846821 -4.73192,0 -4.73193,0 z m 11.50351,4.00091 c 0.0398,-0.19746 0.52806,-2.27489 1.08496,-4.61645 0.55688,-2.34156 1.0365,-4.35894 1.06581,-4.48306 0.0494,-0.20916 0.0118,-0.22794 -0.51277,-0.25648 l -0.56605,-0.0307 6.02965,-6.02818 6.02965,-6.028153 4.28179,0.0268 4.2818,0.0268 -10.88363,10.874293 c -9.4241,9.416 -10.87392,10.826136 -10.81121,10.51523 z m 11.68132,-27.185773 -1.23743,-5.0268 1.1114,0 1.11139,0 0,-1.33365 0,-1.33363 1.94916,0 1.94917,0 0,1.33363 0,1.33365 1.07717,0 1.07717,0 0,-1.33365 0,-1.33363 1.94917,0 1.94916,0 0,1.33363 0,1.33365 1.11653,0 1.11653,0 -0.54214,2.17999 c -0.29819,1.19901 -0.85351,3.46104 -1.23406,5.0268 l -0.69191,2.84681 -4.73194,0 -4.73192,0 z" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;
                case "p5x":
                    // console.log('pier_axb1c1d5.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer" sodipodi:insensitive="true"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'" d="m 113.6709,132.78396 0,-5.53972 1.84658,0 1.84658,0 0,5.53972 0,5.53974 -1.84658,0 -1.84658,0 z m 5.12939,0 0,-5.53972 1.84658,0 1.84658,0 0,5.53972 0,5.53974 -1.84658,0 -1.84658,0 z" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'" d="m 108.45927,123.91397 0,-2.66727 9.48936,0 9.48937,0 0,2.66727 0,2.66729 -9.48937,0 -9.48936,0 z" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'" d="m 113.17579,115.47733 0,-4.95029 4.77033,-4.7695 4.77032,-4.7695 0,9.71977 0,9.71979 -4.77032,0 -4.77033,0 z" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_d1+'" d="m 101.64056,106.22329 0,-4.97551 4.75741,0 4.75741,0 11.60533,-11.647481 11.60534,-11.647503 0,5.056413 0,5.05638 -11.56694,11.566616 -11.56694,11.566585 -4.79581,0 -4.7958,0 z m -1.19053,-10.823001 -1.237432,-5.02679 1.111392,0 1.1114,0 0,-1.33365 0,-1.33364 1.94917,0 1.94916,0 0,1.33364 0,1.33365 1.07718,0 1.07717,0 0,-1.33365 0,-1.33364 1.94917,0 1.94916,0 0,1.33364 0,1.33365 1.11652,0 1.11653,0 -0.54215,2.17998 c -0.29819,1.19899 -0.8535,3.46107 -1.23405,5.0268 l -0.69192,2.846821 -4.73192,0 -4.73193,0 z m 11.50351,4.00091 c 0.0398,-0.19746 0.52806,-2.27489 1.08496,-4.61645 0.55688,-2.34156 1.0365,-4.35894 1.06581,-4.48306 0.0494,-0.20916 0.0118,-0.22794 -0.51277,-0.25648 l -0.56605,-0.0307 6.02965,-6.02818 6.02965,-6.028153 4.28179,0.0268 4.2818,0.0268 -10.88363,10.874293 c -9.4241,9.416 -10.87392,10.826136 -10.81121,10.51523 z m 11.68132,-27.185773 -1.23743,-5.0268 1.1114,0 1.11139,0 0,-1.33365 0,-1.33363 1.94916,0 1.94917,0 0,1.33363 0,1.33365 1.07717,0 1.07717,0 0,-1.33365 0,-1.33363 1.94917,0 1.94916,0 0,1.33363 0,1.33365 1.11653,0 1.11653,0 -0.54214,2.17999 c -0.29819,1.19901 -0.85351,3.46104 -1.23406,5.0268 l -0.69191,2.84681 -4.73194,0 -4.73192,0 z" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;

                case "p6x":
                    // console.log('pier_a2b2c2d6.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="cccccccccccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'" d="m 99.215138,130.31788 0,-5.53975 1.846572,0 1.84658,0 0,5.53975 0,5.53975 -1.84658,0 -1.846572,0 z m 15.285572,0 0,-5.53975 1.84658,0 1.84658,0 0,5.53975 0,5.53975 -1.84658,0 -1.84658,0 z" id="path7" /> <path sodipodi:nodetypes="cccccccccccccccccc" inkscape:connector-curvature="0" class="b_pile" style="fill:'+color_p_a2+'" d="m 122.38744,107.33842 0,-5.53974 1.84659,0 1.84657,0 0,5.53974 0,5.53974 -1.84657,0 -1.84659,0 z m 15.28558,0 0,-5.53974 1.84657,0 1.84658,0 0,5.53974 0,5.53974 -1.84658,0 -1.84657,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'" d="m 99.212598,121.39516 0,-2.66728 9.489372,0 9.48936,0 0,2.66728 0,2.66727 -9.48936,0 -9.489372,0 z" id="path11" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pilecap" style="fill:'+color_p_b2+'" d="m 122.37771,98.400894 0,-2.66728 9.48937,0 9.48936,0 0,2.66728 0,2.667296 -9.48936,0 -9.48937,0 z" id="path13" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'" d="m 103.91761,108.15196 0,-9.745846 4.77034,0 4.77033,0 0,9.745846 0,9.74584 -4.77033,0 -4.77034,0 z" id="path15" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pier" style="fill:'+color_p_c2+'" d="m 127.12182,89.976064 0,-4.950268 4.77032,-4.76951 4.77033,-4.7695 0,9.71977 0,9.719788 -4.77033,0 -4.77032,0 z" id="path17" /> <path sodipodi:nodetypes="cccccccccccccccccccccccccccccccccsscccccscccccccsccccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="c_pierhead" style="fill:'+color_p_d3+'" d="m 103.92616,92.820694 0,-4.9755 4.75741,0 4.75741,0 11.60533,-11.647507 11.60534,-11.64748 0,5.0564 0,5.05639 -11.56694,11.56661 -11.56694,11.566587 -4.79581,0 -4.7958,0 z m 12.05407,-16.875687 11.38688,-11.38724 4.30869,0 4.30868,0 -11.38688,11.38724 -11.3869,11.387257 -4.30869,0 -4.30868,0 z" id="path19" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;

                case "p7x":
                    // console.log('pier_a2b2c2d7.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="cccccccccccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'" d="m 99.215138,143.56788 0,-5.53975 1.846572,0 1.84658,0 0,5.53975 0,5.53975 -1.84658,0 -1.846572,0 z m 15.285572,0 0,-5.53975 1.84658,0 1.84658,0 0,5.53975 0,5.53975 -1.84658,0 -1.84658,0 z" id="path7" /> <path sodipodi:nodetypes="cccccccccccccccccc" inkscape:connector-curvature="0" class="b_pile" style="fill:'+color_p_a2+'" d="m 122.38744,120.58842 0,-5.53974 1.84659,0 1.84657,0 0,5.53974 0,5.53974 -1.84657,0 -1.84659,0 z m 15.28558,0 0,-5.53974 1.84657,0 1.84658,0 0,5.53974 0,5.53974 -1.84658,0 -1.84657,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'" d="m 99.212598,134.64516 0,-2.66728 9.489372,0 9.48936,0 0,2.66728 0,2.66727 -9.48936,0 -9.489372,0 z" id="path11" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pilecap" style="fill:'+color_p_b2+'" d="m 122.37771,111.65089 0,-2.66728 9.48937,0 9.48936,0 0,2.66728 0,2.6673 -9.48936,0 -9.48937,0 z" id="path13" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'" d="m 103.91761,121.40196 0,-9.74585 4.77034,0 4.77033,0 0,9.74585 0,9.74584 -4.77033,0 -4.77034,0 z" id="path15" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pier" style="fill:'+color_p_c2+'" d="m 127.12182,103.22606 0,-4.950264 4.77032,-4.76951 4.77033,-4.7695 0,9.71977 0,9.719784 -4.77033,0 -4.77032,0 z" id="path17" /> <path sodipodi:nodetypes="cccccccccccccccccccccccccccccccccsscccccscccccccsccccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="c_pierhead" style="fill:'+color_p_d3+'" d="m 103.92156,106.07189 0,-4.97551 4.75741,0 4.75741,0 11.60533,-11.647489 11.60534,-11.6475 0,5.05641 0,5.05638 -11.56694,11.56662 -11.56694,11.566589 -4.79581,0 -4.7958,0 z m -1.19053,-10.823009 -1.23743,-5.02679 1.11139,0 1.1114,0 0,-1.33365 0,-1.33364 1.94917,0 1.94916,0 0,1.33364 0,1.33365 1.07718,0 1.07717,0 0,-1.33365 0,-1.33364 1.94917,0 1.94916,0 0,1.33364 0,1.33365 1.11652,0 1.11653,0 -0.54215,2.17998 c -0.29819,1.19899 -0.8535,3.46107 -1.23405,5.0268 l -0.69192,2.846819 -4.73192,0 -4.73193,0 z m 11.50351,4.00091 c 0.0398,-0.19746 0.52806,-2.27489 1.08496,-4.61645 0.55688,-2.34156 1.0365,-4.35894 1.06581,-4.48306 0.0494,-0.20916 0.0118,-0.22794 -0.51277,-0.25648 l -0.56605,-0.0307 6.02965,-6.02818 6.02965,-6.02815 4.28179,0.0268 4.2818,0.0268 -10.88363,10.87429 c -9.4241,9.416 -10.87392,10.82614 -10.81121,10.51523 z m 11.68132,-27.18577 -1.23743,-5.0268 1.1114,0 1.11139,0 0,-1.33365 0,-1.33363 1.94916,0 1.94917,0 0,1.33363 0,1.33365 1.07717,0 1.07717,0 0,-1.33365 0,-1.33363 1.94917,0 1.94916,0 0,1.33363 0,1.33365 1.11653,0 1.11653,0 -0.54214,2.17999 c -0.29819,1.19901 -0.85351,3.46104 -1.23406,5.0268 l -0.69191,2.84681 -4.73194,0 -4.73192,0 z" id="path19" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;

                case "p8111":
                    // console.log('pier_a11b2c2d811.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'" d="m 105.2419,132.99141 0,-5.53973 3.38539,0 3.3854,0 0,5.53973 0,5.53974 -3.3854,0 -3.38539,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'" d="m 99.212598,124.06583 0,-2.66727 9.489362,0 9.48937,0 0,2.66727 0,2.66729 -9.48937,0 -9.489362,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'" d="m 103.93208,110.83423 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" id="path11" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_d1+'" d="m 102.74728,95.238391 -1.23742,-5.0268 1.11138,0 1.11139,0 0,-1.333629 0,-1.333648 1.94917,0 1.94917,0 0,1.333648 0,1.333629 1.07716,0 1.07718,0 0,-1.333629 0,-1.333648 1.94916,0 1.94917,0 0,1.333648 0,1.333629 1.11653,0 1.11653,0 -0.54216,2.17999 c -0.29817,1.19899 -0.8535,3.46106 -1.23405,5.02681 l -0.6919,2.846809 -4.73194,0 -4.73192,0 z" id="path13" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pile" style="fill:'+color_p_a2+'" d="m 127.7184,109.81305 0,-5.53973 3.38539,0 3.3854,0 0,5.53973 0,5.53974 -3.3854,0 -3.38539,0 z" id="path15" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pilecap" style="fill:'+color_p_b2+'" d="m 121.6891,100.88747 0,-2.66727 9.48936,0 9.48937,0 0,2.66727 0,2.66729 -9.48937,0 -9.48936,0 z" id="path17" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pier" style="fill:'+color_p_c2+'" d="m 126.40858,87.65587 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" id="path19" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="b_pierhead" style="fill:'+color_p_d2+'" d="m 125.22378,72.060031 -1.23742,-5.0268 1.11138,0 1.11139,0 0,-1.333629 0,-1.333648 1.94917,0 1.94917,0 0,1.333648 0,1.333629 1.07716,0 1.07718,0 0,-1.333629 0,-1.333648 1.94916,0 1.94917,0 0,1.333648 0,1.333629 1.11653,0 1.11653,0 -0.54216,2.17999 c -0.29817,1.19899 -0.8535,3.46106 -1.23405,5.02681 l -0.6919,2.846809 -4.73194,0 -4.73192,0 z" id="path21" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;
                case "p8112":
                    // console.log('pier_a11b2c2d812.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'" d="m 105.2419,132.99141 0,-5.53973 3.38539,0 3.3854,0 0,5.53973 0,5.53974 -3.3854,0 -3.38539,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'" d="m 99.212598,124.06583 0,-2.66727 9.489362,0 9.48937,0 0,2.66727 0,2.66729 -9.48937,0 -9.489362,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'" d="m 103.93208,110.83423 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" id="path11" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_d1+'" d="m 102.74728,95.238391 -1.23742,-5.0268 1.11138,0 1.11139,0 0,-1.333629 0,-1.333648 1.94917,0 1.94917,0 0,1.333648 0,1.333629 1.07716,0 1.07718,0 0,-1.333629 0,-1.333648 1.94916,0 1.94917,0 0,1.333648 0,1.333629 1.11653,0 1.11653,0 -0.54216,2.17999 c -0.29817,1.19899 -0.8535,3.46106 -1.23405,5.02681 l -0.6919,2.846809 -4.73194,0 -4.73192,0 z" id="path13" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pile" style="fill:'+color_p_a2+'" d="m 129.66293,109.81305 0,-5.53973 3.38539,0 3.3854,0 0,5.53973 0,5.53974 -3.3854,0 -3.38539,0 z" id="path15" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pilecap" style="fill:'+color_p_b2+'" d="m 123.63363,100.88747 0,-2.66727 9.48936,0 9.48937,0 0,2.66727 0,2.66729 -9.48937,0 -9.48936,0 z" id="path17" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pier" style="fill:'+color_p_c2+'" d="m 128.35311,87.65587 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" id="path19" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="b_pierhead" style="fill:'+color_p_d2+'" d="m 124.73272,75.164602 c -2.00304,-1.04923 -3.67543,-1.9383 -3.71644,-1.97567 -0.0411,-0.0375 -0.213,-1.24394 -0.38217,-2.68121 -0.16918,-1.43728 -0.33466,-2.80944 -0.36772,-3.04923 l -0.0601,-0.436 0.51922,0 0.51922,0 0,-1.33364 0,-1.33364 1.94917,0 1.94917,0 0,1.33364 0,1.33364 1.07717,0 1.07717,0 0,-1.33364 0,-1.33364 1.94916,0 1.94917,0 0,1.33364 0,1.33364 3.3341,0 3.3341,0 0,5.02681 0,5.02679 -4.74467,-9.1e-4 -4.74469,-9.1e-4 -3.64187,-1.90769 z" id="path21" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;
                case "p8121":
                    // console.log('pier_a11b2c2d821.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'" d="m 108.66925,132.99053 0,-5.53973 3.38539,0 3.3854,0 0,5.53973 0,5.53974 -3.3854,0 -3.38539,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'" d="m 102.63994,124.06495 0,-2.66728 9.48937,0 9.48938,0 0,2.66728 0,2.66729 -9.48938,0 -9.48937,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'" d="m 107.35942,110.83334 0,-9.74585 4.77033,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77033,0 z" id="path11" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_d1+'" d="m 103.73903,98.342058 c -2.00304,-1.04923 -3.67543,-1.9383 -3.71644,-1.97567 -0.0411,-0.0375 -0.213002,-1.24394 -0.382172,-2.68121 -0.16918,-1.43728 -0.33466,-2.80944 -0.36772,-3.04923 l -0.0601,-0.436 0.51922,0 0.519222,0 0,-1.33364 0,-1.33364 1.94917,0 1.94917,0 0,1.33364 0,1.33364 1.07717,0 1.07717,0 0,-1.33364 0,-1.33364 1.94917,0 1.94917,0 0,1.33364 0,1.33364 3.3341,0 3.3341,0 0,5.02681 0,5.026802 -4.74467,-9.1e-4 -4.7447,-9.1e-4 -3.64187,-1.907702 z" id="path13" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pile" style="fill:'+color_p_a2+'" d="m 127.67178,109.81223 0,-5.53973 3.38539,0 3.3854,0 0,5.53973 0,5.53974 -3.3854,0 -3.38539,0 z" id="path15" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pilecap" style="fill:'+color_p_b2+'" d="m 121.64248,100.88665 0,-2.667277 9.48936,0 9.48937,0 0,2.667277 0,2.66729 -9.48937,0 -9.48936,0 z" id="path17" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pier" style="fill:'+color_p_c2+'" d="m 126.36196,87.655043 0,-9.745848 4.77032,0 4.77034,0 0,9.745848 0,9.74583 -4.77034,0 -4.77032,0 z" id="path19" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="b_pierhead" style="fill:'+color_p_d2+'" d="m 125.17716,72.059206 -1.23742,-5.0268 1.11138,0 1.11139,0 0,-1.333629 0,-1.333648 1.94917,0 1.94917,0 0,1.333648 0,1.333629 1.07716,0 1.07718,0 0,-1.333629 0,-1.333648 1.94916,0 1.94917,0 0,1.333648 0,1.333629 1.11653,0 1.11653,0 -0.54216,2.17999 c -0.29817,1.19899 -0.8535,3.46106 -1.23405,5.02681 l -0.6919,2.846809 -4.73194,0 -4.73192,0 z" id="path21" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;
                case "p8211":
                    // console.log('pier_a22b2c2d811.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'" d="m 99.212598,132.96191 0,-5.53973 1.846572,0 1.84659,0 0,5.53973 0,5.53975 -1.84659,0 -1.846572,0 z m 15.285562,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53975 -1.84658,0 -1.84658,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'" d="m 99.234378,124.06583 0,-2.66727 9.489362,0 9.48937,0 0,2.66727 0,2.66729 -9.48937,0 -9.489362,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'" d="m 103.95386,110.83423 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" id="path11" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_d1+'" d="m 102.76906,95.238391 -1.23742,-5.0268 1.11138,0 1.11139,0 0,-1.333629 0,-1.333648 1.94917,0 1.94917,0 0,1.333648 0,1.333629 1.07716,0 1.07718,0 0,-1.333629 0,-1.333648 1.94916,0 1.94917,0 0,1.333648 0,1.333629 1.11653,0 1.11653,0 -0.54216,2.17999 c -0.29817,1.19899 -0.8535,3.46106 -1.23405,5.02681 l -0.6919,2.846809 -4.73194,0 -4.73192,0 z" id="path13" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pile" style="fill:'+color_p_a2+'" d="m 121.6948,109.79938 0,-5.53973 1.84657,0 1.84659,0 0,5.53973 0,5.53974 -1.84659,0 -1.84657,0 z m 15.28556,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" id="path15" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pilecap" style="fill:'+color_p_b2+'" d="m 121.71088,100.88747 0,-2.66727 9.48936,0 9.48937,0 0,2.66727 0,2.66729 -9.48937,0 -9.48936,0 z" id="path17" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pier" style="fill:'+color_p_c2+'" d="m 126.43036,87.65587 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" id="path19" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="b_pierhead" style="fill:'+color_p_d2+'" d="m 125.24556,72.060031 -1.23742,-5.0268 1.11138,0 1.11139,0 0,-1.333629 0,-1.333648 1.94917,0 1.94917,0 0,1.333648 0,1.333629 1.07716,0 1.07718,0 0,-1.333629 0,-1.333648 1.94916,0 1.94917,0 0,1.333648 0,1.333629 1.11653,0 1.11653,0 -0.54216,2.17999 c -0.29817,1.19899 -0.8535,3.46106 -1.23405,5.02681 l -0.6919,2.846809 -4.73194,0 -4.73192,0 z" id="path21" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;
                case "p8212":
                    // console.log('pier_a22b2c2d812.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'" d="m 99.220468,132.96728 0,-5.53973 1.846572,0 1.84659,0 0,5.53973 0,5.53974 -1.84659,0 -1.846572,0 z m 15.285562,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'" d="m 99.212598,124.06583 0,-2.66727 9.489362,0 9.48937,0 0,2.66727 0,2.66729 -9.48937,0 -9.489362,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'" d="m 103.93208,110.83423 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" id="path11" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_d1+'" d="m 102.74728,95.238391 -1.23742,-5.0268 1.11138,0 1.11139,0 0,-1.333629 0,-1.333648 1.94917,0 1.94917,0 0,1.333648 0,1.333629 1.07716,0 1.07718,0 0,-1.333629 0,-1.333648 1.94916,0 1.94917,0 0,1.333648 0,1.333629 1.11653,0 1.11653,0 -0.54216,2.17999 c -0.29817,1.19899 -0.8535,3.46106 -1.23405,5.02681 l -0.6919,2.846809 -4.73194,0 -4.73192,0 z" id="path13" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pile" style="fill:'+color_p_a2+'" d="m 123.62512,109.80475 0,-5.53973 1.84657,0 1.84659,0 0,5.53973 0,5.53974 -1.84659,0 -1.84657,0 z m 15.28556,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" id="path15" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pilecap" style="fill:'+color_p_b2+'" d="m 123.63363,100.88747 0,-2.66727 9.48936,0 9.48937,0 0,2.66727 0,2.66729 -9.48937,0 -9.48936,0 z" id="path17" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pier" style="fill:'+color_p_c2+'" d="m 128.35311,87.65587 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" id="path19" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="b_pierhead" style="fill:'+color_p_d2+'" d="m 124.73272,75.164602 c -2.00304,-1.04923 -3.67543,-1.9383 -3.71644,-1.97567 -0.0411,-0.0375 -0.213,-1.24394 -0.38217,-2.68121 -0.16918,-1.43728 -0.33466,-2.80944 -0.36772,-3.04923 l -0.0601,-0.436 0.51922,0 0.51922,0 0,-1.33364 0,-1.33364 1.94917,0 1.94917,0 0,1.33364 0,1.33364 1.07717,0 1.07717,0 0,-1.33364 0,-1.33364 1.94916,0 1.94917,0 0,1.33364 0,1.33364 3.3341,0 3.3341,0 0,5.02681 0,5.02679 -4.74467,-9.1e-4 -4.74469,-9.1e-4 -3.64187,-1.90769 z" id="path21" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;
                case "p8221":
                    // console.log('pier_a22b2c2d821.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'" d="m 102.64634,132.97789 0,-5.53973 1.84657,0 1.84659,0 0,5.53973 0,5.53974 -1.84659,0 -1.84657,0 z m 15.28556,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'" d="m 102.63994,124.06495 0,-2.66728 9.48937,0 9.48938,0 0,2.66728 0,2.66729 -9.48938,0 -9.48937,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'" d="m 107.35942,110.83334 0,-9.74585 4.77033,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77033,0 z" id="path11" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_d1+'" d="m 103.73903,98.342058 c -2.00304,-1.04923 -3.67543,-1.9383 -3.71644,-1.97567 -0.0411,-0.0375 -0.213002,-1.24394 -0.382172,-2.68121 -0.16918,-1.43728 -0.33466,-2.80944 -0.36772,-3.04923 l -0.0601,-0.436 0.51922,0 0.519222,0 0,-1.33364 0,-1.33364 1.94917,0 1.94917,0 0,1.33364 0,1.33364 1.07717,0 1.07717,0 0,-1.33364 0,-1.33364 1.94917,0 1.94917,0 0,1.33364 0,1.33364 3.3341,0 3.3341,0 0,5.02681 0,5.026802 -4.74467,-9.1e-4 -4.7447,-9.1e-4 -3.64187,-1.907702 z" id="path13" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pile" style="fill:'+color_p_a2+'" d="m 121.68139,109.81536 0,-5.53973 1.84657,0 1.84659,0 0,5.53973 0,5.53974 -1.84659,0 -1.84657,0 z m 15.28556,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" id="path15" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pilecap" style="fill:'+color_p_b2+'" d="m 121.64248,100.88665 0,-2.667277 9.48936,0 9.48937,0 0,2.667277 0,2.66729 -9.48937,0 -9.48936,0 z" id="path17" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pier" style="fill:'+color_p_c2+'" d="m 126.36196,87.655043 0,-9.745848 4.77032,0 4.77034,0 0,9.745848 0,9.74583 -4.77034,0 -4.77032,0 z" id="path19" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="b_pierhead" style="fill:'+color_p_d2+'" d="m 125.17716,72.059206 -1.23742,-5.0268 1.11138,0 1.11139,0 0,-1.333629 0,-1.333648 1.94917,0 1.94917,0 0,1.333648 0,1.333629 1.07716,0 1.07718,0 0,-1.333629 0,-1.333648 1.94916,0 1.94917,0 0,1.333648 0,1.333629 1.11653,0 1.11653,0 -0.54216,2.17999 c -0.29817,1.19899 -0.8535,3.46106 -1.23405,5.02681 l -0.6919,2.846809 -4.73194,0 -4.73192,0 z" id="path21" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;
            };


            // span_type
            switch(p_st){

                case "s1":
                    $('div#pier_id_'+p_pid+' .span span.content').append('<svg viewBox="0 0 150 39.500001" width="150" height="39.5"> <g inkscape:label="span 3" inkscape:groupmode="layer" id="g4158" transform="translate(0,-1012.8621)" style="display:inline"> <path inkscape:connector-curvature="0" class="a_span" style="fill:'+color_p_s1+'" d="m 0.180591,1045.39 0,6.3559 115.677959,0 0,-6.3559 z" id="path7" /> <path inkscape:connector-curvature="0" class="a_parapet" style="fill:'+color_p_p1+'" d="m 0,1041.3959 0,2.5857 116.03914,0 0,-2.5857 z" id="path9" /> </g> </svg>');
                    break;

                case "s2":
                    $('div#pier_id_'+p_pid+' .span span.content').append('<svg viewBox="0 0 150 39.500001" width="150" height="39.5"> <g inkscape:label="span 3" inkscape:groupmode="layer" id="g4158" transform="translate(0,-1012.8621)" style="display:inline"> <path inkscape:connector-curvature="0" class="a_span" style="fill:'+color_p_s1+'" d="m 0.304926,1045.39 0,6.3559 115.677964,0 0,-6.3559 z" id="path7" /> <path inkscape:connector-curvature="0" class="a_parapet" style="fill:'+color_p_p1+'" d="m 0.124335,1041.3959 0,2.5857 116.039145,0 0,-2.5857 z" id="path9" /> </g> <g transform="translate(0,-1012.8621)" id="g4152" inkscape:groupmode="layer" inkscape:label="span 2" style="display:inline"> <path inkscape:connector-curvature="0" class="b_span" style="fill:'+color_p_s3+'" d="m 0.180591,1031.3782 0,6.3559 115.677979,0 0,-6.3559 z" id="path12" /> <path inkscape:connector-curvature="0" class="b_parapet" style="fill:'+color_p_p3+'" d="m 0,1027.3841 0,2.5857 116.03916,0 0,-2.5857 z" id="path14" /> </g> </svg>');
                    break;

                case "s3":
                    $('div#pier_id_'+p_pid+' .span span.content').append('<svg viewBox="0 0 150 39.500001" width="150" height="39.5"> <g inkscape:label="span 3" inkscape:groupmode="layer" id="g4158" transform="translate(0,-1012.8621)" style="display:inline"> <path inkscape:connector-curvature="0" class="a_span" style="fill:'+color_p_s1+'" d="m 0.50075,1045.39 0,6.3559 115.67797,0 0,-6.3559 z" id="path7" /> <path inkscape:connector-curvature="0" class="a_parapet" style="fill:'+color_p_p1+'" d="m 0.320159,1041.3959 0,2.5857 116.039151,0 0,-2.5857 z" id="path9" /> </g> <g transform="translate(0,-1012.8621)" id="g4152" inkscape:groupmode="layer" inkscape:label="span 2" style="display:inline"> <path inkscape:connector-curvature="0" class="b_span" style="fill:'+color_p_s2+'" d="m 0.376415,1031.3782 0,6.3559 115.677985,0 0,-6.3559 z" id="path12" /> <path inkscape:connector-curvature="0" class="b_parapet" style="fill:'+color_p_p2+'" d="m 0.195824,1027.3841 0,2.5857 116.039166,0 0,-2.5857 z" id="path14" /> </g> <g inkscape:label="span 1" inkscape:groupmode="layer" id="layer1" transform="translate(0,-1012.8621)" style="display:inline"> <path inkscape:connector-curvature="0" class="c_span" style="fill:'+color_p_s3+'" d="m 0.180591,1017.3622 0,6.3559 115.677979,0 0,-6.3559 z" id="path17" /> <path inkscape:connector-curvature="0" class="c_parapet" style="fill:'+color_p_p3+'" d="m 0,1013.3681 0,2.5857 116.03916,0 0,-2.5857 z" id="path19" /> </g> </svg>');
                    break;

                case "sx":
                    $('div#pier_id_'+p_pid+' .span span.content').append('<svg viewBox="0 0 150 39.500001" width="150" height="39.5"> <g inkscape:label="span 3" inkscape:groupmode="layer" id="g4158" transform="translate(0,-1012.8621)" style="display:inline"> <path inkscape:connector-curvature="0" class="x_span" style="fill:'+color_p_sx+'" d="m 0,1039.9094 0,11.6603 115.32557,0 0,-11.6603 z" id="path7" /> </g> </svg>');
                    break;
            };


            console.log('###################################')
        }
    }
});
mpxd.modules.viaducts.kpi = Backbone.View.extend({
    initialize: function (options) {
        this.data = options.data;
        this.render();
    }, render: function () {
        var that = this;
        var html = mpxd.getTemplate(that.data.type);
        template = _.template(html, {data: that.data});
        that.$el.html(template);
        that.$el.find('.portlet_content').css({"height":(that.$el.find('.content').parent().parent().parent().height())-40});
        that.$el.find('.portlet_content').mCustomScrollbar({theme:"dark-3"});
       for(var i=0;i<4;i++) {

          var actual = parseInt(parseInt((typeof this.data.data[i]['actual']=="undefined")?0:this.data.data[i]['actual'])/parseInt((typeof this.data.data[i]['baseline']=="undefined")?1:this.data.data[i]['baseline'])*100);
          var target = parseInt(parseInt((typeof this.data.data[i]['target']=="undefined")?0:this.data.data[i]['target'])/parseInt((typeof this.data.data[i]['baseline']=="undefined")?1:this.data.data[i]['baseline'])*100);
           that.$el.find('#chart_'+i).highcharts({
               chart: {
                   plotBackgroundColor: null,
                   plotBorderWidth: 0,
                   plotShadow: false,
                   margin: [0, 0, 0, 0],
                   spacingTop: 0,
                   spacingBottom: 0,
                   spacingLeft: 0,
                   spacingRight: 0,
                   height: 200
               },
               title: {
                   text: actual + '%',
                   style: {
                       color: '#9EDD2E',
                       fontSize: '150%',
                       fontWeight: 'bold'
                   },
                   align: 'center',
                   verticalAlign: 'middle',
                   y: 10
               },
               tooltip: {
                   pointFormat: '{point.percentage:.1f}%</b>'
               },
               plotOptions: {
                   pie: {
                       dataLabels: {
                           enabled: false,
                           distance: -50,

                           style: {
                               fontWeight: 'bold',
                               color: 'white',
                               textShadow: '0px 1px 2px black'
                           }
                       },
                       startAngle: 0,
                       endAngle: 360,
                       center: ['50%', '50%'],
                       size: '100%'
                   }
               },
               series: [{
                   type: 'pie',
                   size: '60%',
                   innerSize: '85%',
                   style: {
                       color: 'white'
                   },
                   data: [
                       {
                           name: 'Completed',
                           y: actual,//Inner
                           color: '#fc0'
                       },
                       {
                           name: 'Remaining',
                           y: (100-actual),//inner
                           color: 'rgba(0,0,0,0.2)'
                       },
                   ]
               },{
                   type: 'pie',
                   size: '80%',
                   innerSize:  '85%',
                   data: [
                       {
                           name: 'Completed',
                           y: target,//outer
                           color: '#0d6ee2'
                       },
                       {
                           name: 'Remaining',
                           y: (100-target),//outer
                           color: 'rgba(0,0,0,0.2)'
                       },
                   ]
               }],
               credits: {
                   enabled: false
               },
           });
           that.$el.find('#p'+i).text(this.data.data[i]['type']);
       }
    }
});
mpxd.modules.viaducts.kpi_viaducts = Backbone.View.extend({
    initialize: function (options) {
        this.data = options.data;
        this.render();
    }, render: function () {
        var that = this;
        var html = mpxd.getTemplate(that.data.type);
        template = _.template(html, {data: that.data});
        that.$el.html(template);
        $('#header_datetime:visible').hide();
        that.$el.find('#bar-line-chart').highcharts({
            chart: {
                zoomType: 'xy',
                backgroundColor: '#222'
            },
            colors: ['#91e8e1', '#90ed7d'],

            title: {
                text: '',
                x: -20 //center
            },
            xAxis: [{
                categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
                labels: {
                    // rotation: 270,
                    //step: 3,
                    style: {
                        color: '#ffd461',
                        font: '11px Trebuchet MS, Verdana, sans-serif'
                    }
                }
            }],
            yAxis: [{ // Primary yAxis
                labels: {
                    style: {
                        color: '#ffd461',
                        font: '11px Trebuchet MS, Verdana, sans-serif'
                    }
                },
                title: {
                    text: '%',
                    style: {
                        color: '#ffd461',
                        font: '11px Trebuchet MS, Verdana, sans-serif'
                    }
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#333'
                }],
                gridLineColor: '#333',
                min: 0
            },{ // Secondary yAxis
                title: {
                    text: '',
                    style: {
                        color: '#ffd461',
                        font: '11px Trebuchet MS, Verdana, sans-serif'
                    }
                },
                min: 0,
                labels: {
                    format: '{value} %',
                    style: {
                        color: '#ffd461',
                        font: '11px Trebuchet MS, Verdana, sans-serif',
                        display: 'none'
                    }
                },
                opposite: true
            }],
            tooltip: {
                shared: true
            },
            // plotOptions: {
            //     bar: {
            //         dataLabels: {
            //             enabled: true
            //         }
            //     }
            // },
            series: [
                {
                    name: 'suff1',
                    type: 'column',
                    yAxis: 1,
                    data: [20, 25, 10,30,80, 20, 25, 10,10],
                    tooltip: {
                        valueSuffix: ' %'
                    }
                },
                {
                    name: 'NS',
                    type: 'line',
                    data: [21,30,40,30],
                    color: '#fb2b20',
                    tooltip: {
                        valueSuffix: '%'
                    }
                },
                {
                    name: 'NS2',
                    type: 'line',
                    data: [24,50,43,34,78, 40,65,77,90,75,84,95],
                    color: '#20d1fb',
                    tooltip: {
                        valueSuffix: '%'
                    }
                },
                {
                    name: 'NS3',
                    type: 'line',
                    data: [10,20,30,40,50, 65,75,84,95,85,94,98],
                    tooltip: {
                        valueSuffix: '%'
                    }
                }],
            legend: {
                enabled: false,
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            credits: {
                enabled: false
            }
        });
    }
});
mpxd.modules.viaducts.compare = Backbone.View.extend({
    initialize: function (options) {
        this.data = options.data;
        this.render();
    }, render: function () {
        var that = this;
        var html = mpxd.getTemplate(that.data.type);
        template = _.template(html, {data: that.data});
        that.$el.html(template);
        that.$el.find('.portlet_content').mCustomScrollbar({theme:"dark-3"});
        // for Demo
        var a=[10,20,30,40];
        for(var i=0;i<4;i++) {
            that.$el.find('#chart_' + a[i]).highcharts({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: 0,
                    plotShadow: false,
                    margin: [0, 0, 0, 0],
                    spacingTop: 0,
                    spacingBottom: 0,
                    spacingLeft: 0,
                    spacingRight: 0,
                    height: 150
                },
                title: {
                    text: 30 + '%',
                    style: {
                        color: '#9EDD2E',
                        fontSize: '150%',
                        fontWeight: 'bold'
                    },
                    align: 'center',
                    verticalAlign: 'middle',
                    y: 10
                },
                tooltip: {
                    pointFormat: '{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        dataLabels: {
                            enabled: false,
                            distance: -50,

                            style: {
                                fontWeight: 'bold',
                                color: 'white',
                                textShadow: '0px 1px 2px black'
                            }
                        },
                        startAngle: 0,
                        endAngle: 360,
                        center: ['50%', '50%'],
                        size: '100%'
                    }
                },
                series: [{
                    type: 'pie',
                    size: '60%',
                    innerSize: '85%',
                    style: {
                        color: 'white'
                    },
                    data: [
                        {
                            name: 'Completed',
                            y: 30,
                            color: '#fc0'
                        },
                        {
                            name: 'Remaining',
                            y: 70,
                            color: 'rgba(0,0,0,0.2)'
                        },
                    ]
                },{
                    type: 'pie',
                    size: '80%',
                    innerSize:  '85%',
                    data: [
                        {
                            name: 'Completed',
                            y: 70,
                            color: '#0d6ee2'
                        },
                        {
                            name: 'Remaining',
                            y: 30,
                            color: 'rgba(0,0,0,0.2)'
                        },
                    ]
                }],
                credits: {
                    enabled: false
                },
            });
        }
        var chart = new Highcharts.Chart({
            title: {
                text: '',
                x: -20 //center
            },
            xAxis: {
                categories: ["Jan/12", "Feb/12", "Mar/12", "Apr/12", "May/12", "Jun/12", "Jul/12", "Aug/12", "Sep/12", "Oct/12", "Nov/12", "Dec/12", "Jan/13", "Feb/13", "Mar/13", "Apr/13", "May/13", "Jun/13", "Jul/13", "Aug/13", "Sep/13", "Oct/13", "Nov/13", "Dec/13", "Jan/14", "Feb/14", "Mar/14", "Apr/14", "May/14", "Jun/14", "Jul/14", "Aug/14", "Sep/14", "Oct/14", "Nov/14", "Dec/14", "Jan/15", "Feb/15", "Mar/15", "Apr/15", "May/15", "Jun/15", "Jul/15", "Aug/15", "Sep/15", "Oct/15", "Nov/15", "Dec/15", "Jan/16", "Feb/16", "Mar/16", "Apr/16", "May/16", "Jun/16", "Jul/16", "Aug/16", "Sep/16", "Oct/16", "Nov/16", "Dec/16", "Jan/17", "Feb/17", "Mar/17", "Apr/17", "May/17", "Jun/17", "Jul/17"],
                tickInterval: 3,
                labels: {
                    rotation: 270,
                    //step: 3,
                    style: {
                        color: '#ffd461',
                        font: '11px Trebuchet MS, Verdana, sans-serif'
                    }
                }
            },
            yAxis: {
                min: 0,
                max: 100,
                tickInterval: 10,
                labels: {
                    style: {
                        color: '#ffd461',
                        font: '11px Trebuchet MS, Verdana, sans-serif'
                    }
                },
                title: {
                    text: '%',
                    style: {
                        color: '#ffd461',
                        font: '11px Trebuchet MS, Verdana, sans-serif'
                    },
                    margin: 0
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#333'
                }],
                gridLineColor: '#333'
            },
            tooltip: {
                enabled: true,
                //formatter: function() { return this.series.name; },
                //valueSuffix: '%'
                formatter: function (evt) {
                    var current = this.series.data;
                    //console.log(current[current.length - 1].category);
                    var tooltip;
                    if (current[current.length - 1].series.name === 'Actual' && current[current.length - 1].y === this.y) {
                        tooltip = '<span style="color:#EBFF00">Current ' + this.series.name + ' (' + current[current.length - 1].category + ')</span>: <b>' + current[current.length - 1].y + '%</b><br/>';
                        return tooltip;
                    }
                    else {
                        return false
                    }
                }
            },
            legend: {
                enabled: false,
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                name: 'Early',
                data:  [0, 1.02, 1.28, 1.53, 2.05, 2.3, 2.56, 3.07, 3.58, 4.35, 5.12, 5.37, 5.88, 6.91, 7.42, 8.44, 9.72, 11.25, 12.79, 13.81, 14.58, 16.88, 18.16, 19.95, 21.23, 23.27, 24.81, 26.85, 29.99, 32.1, 33.89, 35.86, 37.48, 39.26, 39.81, 41.58, 41.98, 42.86, 43.95, 45.26, 46.74, 48.78, 51.34, 54.13, 56.31, 60.1, 63.28, 65.04, 67.11, 67.34, 69, 73.23, 77.49, 80.83, 84.19, 87.99, 91.92, 95.32, 97.84, 98.77, 98.87, 98.96, 99.12, 99.49, 99.77, 100, 100, 100, 100],
                color: '#04B152',
                enableMouseTracking: false
            }, {
                name: 'Late',
                data: [0, 0.26, 0.51, 0.77, 1.03, 1.54, 2.05, 3.08, 4.62, 6.92, 9.74, 12.05, 14.62, 16.15, 18.21, 20, 22.05, 24.36, 26.67, 29.23, 31.54, 33.85, 35.9, 38.97, 41.28, 42.82, 45.13, 47.18, 50.02, 51.91, 53.54, 55.33, 57.12, 58.67, 59.81, 61.25, 62.05, 62.9, 64.01, 63.36, 64.52, 66.28, 67.76, 69.36, 70.34, 71.84, 74.01, 75.61, 76.46, 78.04, 79.09, 80.71, 83.25, 85.75, 88.05, 90.7, 92.81, 94.8, 96.45, 98.09, 98.73, 98.95, 99.36, 99.41, 99.67, 99.86, 99.89, 100, 100],
                color: '#FF0000',
                enableMouseTracking: false
            }, {
                name: 'Actual',
                data: [0, 0, 0, 0.53, 0.79, 1.06, 1.32, 1.58, 1.85, 2.63, 3.67, 4.19, 5.49, 6.27, 7.31, 8.61, 10.17, 11.98, 13.54, 15.88, 17.95, 21.07, 22.63, 24.7, 26.52, 28.6, 30.15, 32.23, 34.99, 37.24, 39.55, 41.73, 43.52, 45.56, 47.12, 49.21, 50.33, 51.43, 52.8, 54.05, 55.09, 56.5, 58.2, 61.75, 64.57, 67.23, 70.24, 72.77, 75.85],
                color: '#0070C0'
                //enableMouseTracking: false,
                /*events : {
                 mouseOver: function() {
                 console.log(this.yData[this.yData.length - 1]);
                 }
                 },*/
            }],
            plotOptions: {
                series: {
                    marker: {
                        enabled: false
                    }
                }
            },
            credits: {
                enabled: false
            },
            chart: {
                type: 'spline',
                backgroundColor: '#222',
                // renderTo: 'chart_' + that.data.id
                renderTo: 'chart_88'
            }


        });
    }
});
/*
*@ Sebin
* Toggle the select all.
 */
$(document).on("change", "#checkAll", function (){
    $("input:checkbox"). prop('checked', $(this). prop("checked"));
    if($(this). prop("checked")){$("#vcmp_btn").removeAttr("disabled");}else{ $("#vcmp_btn"). prop("disabled", "disabled");}
});
/*
 *@ Sebin
 * Toggle the select all if all the check box is checked and enable/disable compare button
 */
$(document).on("change", ".checkbox", function (){
    if($(".checkbox").filter(':checked').length>1){$("#vcmp_btn").removeAttr("disabled");}else{$("#vcmp_btn"). prop("disabled", "disabled");}
    if($(".checkbox").filter(':checked').length==$(".checkbox").length){$("#checkAll"). prop('checked', "checked");}else{$("#checkAll"). removeAttr('checked');}
});
/*
 *@ Sebin
 * get all the selected checkbox values and process further.
 */
$(document).on("click","#vcmp_btn",function(){
    var formData = $("input[name='vs_compare']:checked").map(function(){return this.value;}).get();
    $.post(baseURL+'viaducts/compare' ,{"data": formData}, function(data, textStatus, jqXHR){
        if(data) {
            loadPage('viaducts/comparison');
        }
    }).fail(function(jqXHR, textStatus, errorThrown){
        alert("Unable to process your request please try later!.")
    });
});
