<?php

class Portlets_model extends CI_Model
{
    public function __construct()
    {
        $this->load->database();
    }

    /**
     * @sebin
     * date:17/10/2016
     * Parameter:viaduct_name
     * Return type:
     * Description:function get package info
     */
    public function package_info($viaduct){
        $pkg_info = array("INFO" => array());
        $pkg_info["INFO"]['name']=strtoupper($viaduct);
        $this->db->select('tbl_stations.category_type_id,tbl_stations.spd_name,tbl_project_master.cont_name');
        $this->db->from('tbl_stations');
        $this->db->join('tbl_project_sub', 'tbl_project_sub.station_master_id = tbl_stations.station_master_id');
        $this->db->join('tbl_project_master', 'tbl_project_master.pjct_master_id = tbl_project_sub.pjct_master_id');
        $this->db->where('tbl_project_master.pjct_name',$viaduct);
        $page_query = $this->db->get();
        $slug_result = $page_query->result_array();
        $pkg_info["INFO"]['station'] = array();
        $pkg_info["INFO"]['parking'] = array();
        $cont= true;
        foreach ($slug_result as $v) {
            if($cont){
                $pkg_info["INFO"]['contractor']=$v['cont_name'];
            }
            $cont =false;
            if($v['category_type_id']==1 || $v['category_type_id']==2) {
                array_push($pkg_info["INFO"]['station'], $v['spd_name']);
            }else{
                array_push($pkg_info["INFO"]['parking'], $v['spd_name']);
            }
        }
        return json_encode($pkg_info);
    }
    /**
     * @jane
     * date:17/10/2016
     * Parameter:viaduct_name
     * Return type:
     * Description:function get key access dates
     */
    public function kad($viaduct)
    {
        $this->db->select("tbl_kd_master.kd_desc, CASE WHEN tbl_kd_master.forecast_date!='' THEN to_char(to_date(tbl_kd_master.forecast_date, 'YYYY-MM-DD'), 'DD-Mon-yy') ELSE '' END AS forecast_date, CASE WHEN tbl_kd_master.contract_date!='' THEN to_char(to_date(tbl_kd_master.contract_date, 'YYYY-MM-DD'), 'DD-Mon-yy') ELSE '' END AS contract_date");
        $this->db->from('tbl_kd_master');
        $this->db->join('tbl_journal_master', 'tbl_journal_master.journal_master_id = tbl_kd_master.journal_master_id');
        $this->db->join('tbl_project_master', 'tbl_project_master.pjct_master_id = tbl_journal_master.pjct_master_id');
        $this->db->where('tbl_project_master.pjct_name', $viaduct);
        $kad_query = $this->db->get();
        $kad_result = $kad_query->result_array();
        $result['KAD'] = array();
        foreach ($kad_result as $value) {
            array_push($result['KAD'], array_values($value));
        }
        return json_encode($result);
    }


    public function gallary($viaduct){

        $dummy_json = '{"gallery": {
            "title": "V201 Image Gallery",
			"album": "6063014444371096097",
			"keyword": "V201 Project - 26-December-15 to 08-January-16|V201 Project - 16-January-16 to 22-January-16",
			"authkey": "Gv1sRgCMrhgfP6lL7PogE",
			"items": [{
                "path": "gallery/v1/week08_2016/CEO%20Weekly%20Report%20No.%206%2026022016%20Finaljpg_Page95_I%281%29.jpg",
				"title": "v201 Project 15-Feb-2016 to 21-Feb-2016",
				"kind": "album",
				"id": 1
			}, {
                "path": "gallery/v1/week08_2016/CEO%20Weekly%20Report%20No.%206%2026022016%20Finaljpg_Page95_I%281%29.jpg",
				"title": "Excavation of road base for service road at Sg. Buloh Station in progress",
				"kind": "image",
				"id": 1
			}, {
                "path": "gallery/v1/week08_2016/CEO%20Weekly%20Report%20No.%206%2026022016%20Finaljpg_Page95_I%282%29.jpg",
				"title": "Premix works for service road at Kg. Selamat Station in progress",
				"kind": "image",
				"id": 1
			}, {
                "path": "gallery/v1/week08_2016/CEO%20Weekly%20Report%20No.%206%2026022016%20Finaljpg_Page95_I%283%29.jpg",
				"title": "Laying crusher run to service road at Sg. Buloh Station in progress",
				"kind": "image",
				"id": 1
			}, {
                "path": "gallery/v1/week08_2016/CEO%20Weekly%20Report%20No.%206%2026022016%20Finaljpg_Page95_I%284%29.jpg",
				"title": "Excavation works for Sewer Treatment Plant at Sg. Buloh Station in progress",
				"kind": "image",
				"id": 1
			}, {
                "path": "gallery/v1/week08_2016/CEO%20Weekly%20Report%20No.%206%2026022016%20Finaljpg_Page95_I%285%29.jpg",
				"title": "Rectification works for SB07 portal in progress",
				"kind": "image",
				"id": 1
			}, {
                "path": "gallery/v1/week08_2016/CEO%20Weekly%20Report%20No.%206%2026022016%20Finaljpg_Page95_I.jpg",
				"title": "Road reinstatement works at Jalan Sg. Buloh in progress (Sg. Buloh Bound)",
				"kind": "image",
				"id": 1
			}, {
                "path": "gallery/v1/week08_2016/CEO%20Weekly%20Report%20No.%206%2026022016%20Finaljpg_Page96_I%281%29.jpg",
				"title": "Pile boring works at FDD11/5 in progress",
				"kind": "image",
				"id": 1
			}, {
                "path": "gallery/v1/week08_2016/CEO%20Weekly%20Report%20No.%206%2026022016%20Finaljpg_Page96_I%282%29.jpg",
				"title": "Pile boring works at FDD12/1 in progress",
				"kind": "image",
				"id": 1
			}, {
                "path": "gallery/v1/week08_2016/CEO%20Weekly%20Report%20No.%206%2026022016%20Finaljpg_Page96_I%283%29.jpg",
				"title": "Sheet pile installation for pilecap works at FDD17 in progress",
				"kind": "image",
				"id": 1
			}, {
                "path": "gallery/v1/week08_2016/CEO%20Weekly%20Report%20No.%206%2026022016%20Finaljpg_Page96_I%284%29.jpg",
				"title": "View of trackwork (SD Spur Line/RRI area)",
				"kind": "image",
				"id": 1
			}, {
                "path": "gallery/v1/week08_2016/CEO%20Weekly%20Report%20No.%206%2026022016%20Finaljpg_Page96_I.jpg",
				"title": "Pile hacking works at FDD15 in progress",
				"kind": "image",
				"id": 1
			}, {
                "path": "gallery/v1/week07_2016/CEO%20Weekly%20Report%20No.%205%2019022016%20Finaljpg_Page93_I%282%29.jpg",
				"title": "v1 Project 08-Feb-2016 to 14-Feb-2016",
				"kind": "album",
				"id": 2
			}, {
                "path": "gallery/v1/week07_2016/CEO%20Weekly%20Report%20No.%205%2019022016%20Finaljpg_Page93_I%282%29.jpg",
				"title": "Shuttering works for drainage sump at Sg. BulohStation in progress",
				"kind": "image",
				"id": 2
			}, {
                "path": "gallery/v1/week07_2016/CEO%20Weekly%20Report%20No.%205%2019022016%20Finaljpg_Page93_I%283%29.jpg",
				"title": "Shuttering works for retaining wall capping beam at Kg. SelamatStation in progress",
				"kind": "image",
				"id": 2
			}, {
                "path": "gallery/v1/week07_2016/CEO%20Weekly%20Report%20No.%205%2019022016%20Finaljpg_Page93_I%284%29.jpg",
				"title": "Sheet pile installation for Sewer Treatment Plant at Sg. BulohStation in progress",
				"kind": "image",
				"id": 2
			}, {
                "path": "gallery/v1/week07_2016/CEO%20Weekly%20Report%20No.%205%2019022016%20Finaljpg_Page93_I%285%29.jpg",
				"title": "Road reinstatement works at JalanSg. Bulohin progress",
				"kind": "image",
				"id": 2
			}, {
                "path": "gallery/v1/week07_2016/CEO%20Weekly%20Report%20No.%205%2019022016%20Finaljpg_Page93_I.jpg",
				"title": "Shuttering works for Covered Walkway stumps at Sg. BulohStation in progress",
				"kind": "image",
				"id": 2
			}, {
                "path": "gallery/v1/week07_2016/CEO%20Weekly%20Report%20No.%205%2019022016%20Finaljpg_Page94_I%281%29.jpg",
				"title": "View of completed noise barrier panel at Sg. BulohStation",
				"kind": "image",
				"id": 2
			}, {
                "path": "gallery/v1/week07_2016/CEO%20Weekly%20Report%20No.%205%2019022016%20Finaljpg_Page94_I%282%29.jpg",
				"title": "View of completed noise barrier panel",
				"kind": "image",
				"id": 2
			}, {
                "path": "gallery/v1/week07_2016/CEO%20Weekly%20Report%20No.%205%2019022016%20Finaljpg_Page94_I%283%29.jpg",
				"title": "View of trackwork(KTMB Sg. Buloh/ Army Camp)",
				"kind": "image",
				"id": 2
			}, {
                "path": "gallery/v1/week07_2016/CEO%20Weekly%20Report%20No.%205%2019022016%20Finaljpg_Page94_I.jpg",
				"title": "View of trackwork(SD Spur Line)",
				"kind": "image",
				"id": 2
			}, {
                "path": "gallery/v1/week07_2016/CEO%20Weekly%20Report%20No.%205%2019022016%20Finaljpg_Page95_I%281%29.jpg",
				"title": "Pile boring works at FDA12/8 in progress",
				"kind": "image",
				"id": 2
			}, {
                "path": "gallery/v1/week07_2016/CEO%20Weekly%20Report%20No.%205%2019022016%20Finaljpg_Page95_I%282%29.jpg",
				"title": "Preparation for bored pile concreting work at FDD15/5 in progress",
				"kind": "image",
				"id": 2
			}, {
                "path": "gallery/v1/week07_2016/CEO%20Weekly%20Report%20No.%205%2019022016%20Finaljpg_Page95_I%283%29.jpg",
				"title": "Pile boring works at FDD12/2 in progress",
				"kind": "image",
				"id": 2
			}, {
                "path": "gallery/v1/week07_2016/CEO%20Weekly%20Report%20No.%205%2019022016%20Finaljpg_Page95_I.jpg",
				"title": "Soil investigation works at FDA15 in progress",
				"kind": "image",
				"id": 2
			}, {
                "path": "gallery/v1/week07_2016/CEO%20Weekly%20Report%20No.%205%2019022016%20Finaljpg_Page93_I%281%29.jpg",
				"title": "Shuttering works for drainage sump at KwasaDamansaraStation in progress",
				"kind": "image",
				"id": 2
			}, {
                "path": "gallery/v1/week05_2016/CEO%20Weekly%20Report%20No.%204%2005022016%20Finaljpg_Page34_I%282%29.jpg",
				"title": "v1 Project 25-Jan-2016 to 31-Jan-2016",
				"kind": "album",
				"id": 3
			}, {
                "path": "gallery/v1/week05_2016/CEO%20Weekly%20Report%20No.%204%2005022016%20Finaljpg_Page34_I%282%29.jpg",
				"title": "Shuttering works for covered walkway footing at Sg. Buloh Station in progress",
				"kind": "image",
				"id": 3
			}, {
                "path": "gallery/v1/week05_2016/CEO%20Weekly%20Report%20No.%204%2005022016%20Finaljpg_Page34_I%283%29.jpg",
				"title": "Sub-base preparation works for slip road to Kg. Selamat Station in progress",
				"kind": "image",
				"id": 3
			}, {
                "path": "gallery/v1/week05_2016/CEO%20Weekly%20Report%20No.%204%2005022016%20Finaljpg_Page34_I%284%29.jpg",
				"title": "Pier rectification works at SBN07 in progress",
				"kind": "image",
				"id": 3
			}, {
                "path": "gallery/v1/week05_2016/CEO%20Weekly%20Report%20No.%204%2005022016%20Finaljpg_Page34_I.jpg",
				"title": "Rebar fixing & shuttering works for On site Detention (OSD) sump at Sg. Buloh Station in",
				"kind": "image",
				"id": 3
			}, {
                "path": "gallery/v1/week05_2016/CEO%20Weekly%20Report%20No.%204%2005022016%20Finaljpg_Page35_I%281%29.jpg",
				"title": "Trackwork at Kwasa Damansara Station area completed",
				"kind": "image",
				"id": 3
			}, {
                "path": "gallery/v1/week05_2016/CEO%20Weekly%20Report%20No.%204%2005022016%20Finaljpg_Page35_I%282%29.jpg",
				"title": "Installation of noise barrier panel at DD01 to Sg. Buloh Station in progress",
				"kind": "image",
				"id": 3
			}, {
                "path": "gallery/v1/week05_2016/CEO%20Weekly%20Report%20No.%204%2005022016%20Finaljpg_Page35_I%283%29.jpg",
				"title": "Installation of noise barrier panel at SBN05 \u2013 SBN09 in progress.",
				"kind": "image",
				"id": 3
			}, {
                "path": "gallery/v1/week05_2016/CEO%20Weekly%20Report%20No.%204%2005022016%20Finaljpg_Page35_I.jpg",
				"title": "Cable laying through Kg. Selamat Station in progress",
				"kind": "image",
				"id": 3
			}, {
                "path": "gallery/v1/week05_2016/CEO%20Weekly%20Report%20No.%204%2005022016%20Finaljpg_Page36_I%281%29.jpg",
				"title": "Pile boring works at FDD16 in progress",
				"kind": "image",
				"id": 3
			}, {
                "path": "gallery/v1/week05_2016/CEO%20Weekly%20Report%20No.%204%2005022016%20Finaljpg_Page36_I%282%29.jpg",
				"title": "Platform preparation works for PDA test of complete pile group at FDD17",
				"kind": "image",
				"id": 3
			}, {
                "path": "gallery/v1/week05_2016/CEO%20Weekly%20Report%20No.%204%2005022016%20Finaljpg_Page36_I%283%29.jpg",
				"title": "Rock coring works at FDA12 in progress.",
				"kind": "image",
				"id": 3
			}, {
                "path": "gallery/v1/week05_2016/CEO%20Weekly%20Report%20No.%204%2005022016%20Finaljpg_Page36_I.jpg",
				"title": "Soil investigation works at FDA14 in progress",
				"kind": "image",
				"id": 3
			}, {
                "path": "gallery/v1/week05_2016/CEO%20Weekly%20Report%20No.%204%2005022016%20Finaljpg_Page34_I%281%29.jpg",
				"title": "Shuttering works for sump at Kwasa Damansara Station in progress",
				"kind": "image",
				"id": 3
			}, {
                "path": "gallery/v1/week05_2016/CEO%20Weekly%20Report%20No.%204%2005022016%20Finaljpg_Page34_I%285%29.jpg",
				"title": "Shuttering works for covered walkway stump at Kg. Selamat Station (Ent. A) in progress",
				"kind": "image",
				"id": 3
			}, {
                "path": "gallery/v1/week04_2016/CEO%20Weekly%20Report%20No.%203%2029012016%20Finaljpg_Page33_I%281%29.jpg",
				"title": "v1 Project 18-Jan-2016 to 24-Jan-2016",
				"kind": "album",
				"id": 4
			}, {
                "path": "gallery/v1/week04_2016/CEO%20Weekly%20Report%20No.%203%2029012016%20Finaljpg_Page33_I%281%29.jpg",
				"title": "Pier rectification works BB02a in progress",
				"kind": "image",
				"id": 4
			}, {
                "path": "gallery/v1/week04_2016/CEO%20Weekly%20Report%20No.%203%2029012016%20Finaljpg_Page33_I%282%29.jpg",
				"title": "Drainage works around Kg. Selamat Station in progress",
				"kind": "image",
				"id": 4
			}, {
                "path": "gallery/v1/week04_2016/CEO%20Weekly%20Report%20No.%203%2029012016%20Finaljpg_Page33_I%284%29.jpg",
				"title": "Shuttering works to drain at Kg. Selamat Station in progress",
				"kind": "image",
				"id": 4
			}, {
                "path": "gallery/v1/week04_2016/CEO%20Weekly%20Report%20No.%203%2029012016%20Finaljpg_Page33_I%285%29.jpg",
				"title": "Pier rectification works at SBN07 in progress",
				"kind": "image",
				"id": 4
			}, {
                "path": "gallery/v1/week04_2016/CEO%20Weekly%20Report%20No.%203%2029012016%20Finaljpg_Page33_I.jpg",
				"title": "Pier rectification works at SBN12 in progress",
				"kind": "image",
				"id": 4
			}, {
                "path": "gallery/v1/week04_2016/CEO%20Weekly%20Report%20No.%203%2029012016%20Finaljpg_Page34_I%281%29.jpg",
				"title": "Painting works to walkway edge South of Sg. Buloh Station in progress",
				"kind": "image",
				"id": 4
			}, {
                "path": "gallery/v1/week04_2016/CEO%20Weekly%20Report%20No.%203%2029012016%20Finaljpg_Page34_I%282%29.jpg",
				"title": "Installation of noise barrier pole at SBN05 \u2013 SBN11 in progress",
				"kind": "image",
				"id": 4
			}, {
                "path": "gallery/v1/week04_2016/CEO%20Weekly%20Report%20No.%203%2029012016%20Finaljpg_Page34_I%283%29.jpg",
				"title": "Installation of noise barrier pole at DD01 \u2013 SB01 in progress.",
				"kind": "image",
				"id": 4
			}, {
                "path": "gallery/v1/week04_2016/CEO%20Weekly%20Report%20No.%203%2029012016%20Finaljpg_Page34_I.jpg",
				"title": "Cleaning works to trackwork at Kg. Selamat Station in progress",
				"kind": "image",
				"id": 4
			}, {
                "path": "gallery/v1/week04_2016/CEO%20Weekly%20Report%20No.%203%2029012016%20Finaljpg_Page35_I%281%29.jpg",
				"title": "Sonic logging pipe installation to FDD17/1 steel cage in progress",
				"kind": "image",
				"id": 4
			}, {
                "path": "gallery/v1/week04_2016/CEO%20Weekly%20Report%20No.%203%2029012016%20Finaljpg_Page35_I%282%29.jpg",
				"title": "Bored pile steel cage fabrication in progress",
				"kind": "image",
				"id": 4
			}, {
                "path": "gallery/v1/week04_2016/CEO%20Weekly%20Report%20No.%203%2029012016%20Finaljpg_Page35_I%283%29.jpg",
				"title": "Steel cage installation to bored pile FDD17/1",
				"kind": "image",
				"id": 4
			}, {
                "path": "gallery/v1/week04_2016/CEO%20Weekly%20Report%20No.%203%2029012016%20Finaljpg_Page35_I.jpg",
				"title": "Site preparation for bored pile works in progress.",
				"kind": "image",
				"id": 4
			}, {
                "path": "gallery/v1/week04_2016/CEO%20Weekly%20Report%20No.%203%2029012016%20Finaljpg_Page33_I%283%29.jpg",
				"title": "Shuttering works to concrete barrier at Kg. Selamat area in progress",
				"kind": "image",
				"id": 4
			}, {
                "path": "gallery/v1/week03_2016/CEO%20Weekly%20Report%20No.%202%2022012016%20Finaljpg_Page32_I%281%29.jpg",
				"title": "v1 Project 11-Jan-2016 to 17-Jan-2016",
				"kind": "album",
				"id": 5
			}, {
                "path": "gallery/v1/week03_2016/CEO%20Weekly%20Report%20No.%202%2022012016%20Finaljpg_Page32_I%281%29.jpg",
				"title": "Drainage works near Kota Damansara Station in progress",
				"kind": "image",
				"id": 5
			}, {
                "path": "gallery/v1/week03_2016/CEO%20Weekly%20Report%20No.%202%2022012016%20Finaljpg_Page32_I%282%29.jpg",
				"title": "Painting of pier BB04 in progress",
				"kind": "image",
				"id": 5
			}, {
                "path": "gallery/v1/week03_2016/CEO%20Weekly%20Report%20No.%202%2022012016%20Finaljpg_Page32_I%283%29.jpg",
				"title": "Drainage works at Sg. Buloh Station in progress",
				"kind": "image",
				"id": 5
			}, {
                "path": "gallery/v1/week03_2016/CEO%20Weekly%20Report%20No.%202%2022012016%20Finaljpg_Page32_I%285%29.jpg",
				"title": "Rebar fixing and shuttering works for drainage at Kg. Selamat area in progress",
				"kind": "image",
				"id": 5
			}, {
                "path": "gallery/v1/week03_2016/CEO%20Weekly%20Report%20No.%202%2022012016%20Finaljpg_Page32_I.jpg",
				"title": "Shuttering works to walkway canopy foundations stump at Sg. Buloh area in progress",
				"kind": "image",
				"id": 5
			}, {
                "path": "gallery/v1/week03_2016/CEO%20Weekly%20Report%20No.%202%2022012016%20Finaljpg_Page33_I%281%29.jpg",
				"title": "Rectification walkway panel at Sg. Buloh Station in progress",
				"kind": "image",
				"id": 5
			}, {
                "path": "gallery/v1/week03_2016/CEO%20Weekly%20Report%20No.%202%2022012016%20Finaljpg_Page33_I%282%29.jpg",
				"title": "Installation of noise barrier pole at SB05 \u2013 BB01 in progress",
				"kind": "image",
				"id": 5
			}, {
                "path": "gallery/v1/week03_2016/CEO%20Weekly%20Report%20No.%202%2022012016%20Finaljpg_Page33_I%283%29.jpg",
				"title": "Installation of noise barrier pole at DD01 \u2013 SB01 in progress",
				"kind": "image",
				"id": 5
			}, {
                "path": "gallery/v1/week03_2016/CEO%20Weekly%20Report%20No.%202%2022012016%20Finaljpg_Page33_I.jpg",
				"title": "Rectification works to walkway panels at SB33 in progress",
				"kind": "image",
				"id": 5
			}, {
                "path": "gallery/v1/week03_2016/CEO%20Weekly%20Report%20No.%202%2022012016%20Finaljpg_Page32_I%284%29.jpg",
				"title": "Rebar fixing and shuttering works drainage at Sg. Buloh area in progress",
				"kind": "image",
				"id": 5
			}, {
                "path": "gallery/v1/week02_2016/CEO%20Weekly%20Report%20No.%201%2015012016%20Finaljpg_Page32_I%282%29.jpg",
				"title": "v1 Project 04-Jan-2016 to 10-Jan-2016",
				"kind": "album",
				"id": 6
			}, {
                "path": "gallery/v1/week02_2016/CEO%20Weekly%20Report%20No.%201%2015012016%20Finaljpg_Page32_I%282%29.jpg",
				"title": "Pier rectification works at BB04 in progress",
				"kind": "image",
				"id": 6
			}, {
                "path": "gallery/v1/week02_2016/CEO%20Weekly%20Report%20No.%201%2015012016%20Finaljpg_Page32_I%283%29.jpg",
				"title": "Drainage works near KD Station in progress",
				"kind": "image",
				"id": 6
			}, {
                "path": "gallery/v1/week02_2016/CEO%20Weekly%20Report%20No.%201%2015012016%20Finaljpg_Page32_I%284%29.jpg",
				"title": "Pier rectification works at SBS03 in progress",
				"kind": "image",
				"id": 6
			}, {
                "path": "gallery/v1/week02_2016/CEO%20Weekly%20Report%20No.%201%2015012016%20Finaljpg_Page32_I%285%29.jpg",
				"title": "Retaining wall installation in progress",
				"kind": "image",
				"id": 6
			}, {
                "path": "gallery/v1/week02_2016/CEO%20Weekly%20Report%20No.%201%2015012016%20Finaljpg_Page32_I.jpg",
				"title": "Pier rectification works at SB07 in progress",
				"kind": "image",
				"id": 6
			}, {
                "path": "gallery/v1/week02_2016/CEO%20Weekly%20Report%20No.%201%2015012016%20Finaljpg_Page33_I%281%29.jpg",
				"title": "Trackwork snagging on special span (SBS line) in progress",
				"kind": "image",
				"id": 6
			}, {
                "path": "gallery/v1/week02_2016/CEO%20Weekly%20Report%20No.%201%2015012016%20Finaljpg_Page33_I%282%29.jpg",
				"title": "Trackwork testing at Kg. Selamat Station area in progress",
				"kind": "image",
				"id": 6
			}, {
                "path": "gallery/v1/week02_2016/CEO%20Weekly%20Report%20No.%201%2015012016%20Finaljpg_Page33_I%283%29.jpg",
				"title": "Installation of noise barrier pole at BB05 \u2013 BB06 in progress",
				"kind": "image",
				"id": 6
			}, {
                "path": "gallery/v1/week02_2016/CEO%20Weekly%20Report%20No.%201%2015012016%20Finaljpg_Page33_I.jpg",
				"title": "Installation of noise barrier poles at SBN05 \u2013 SBN11 in progress",
				"kind": "image",
				"id": 6
			}, {
                "path": "gallery/v1/week02_2016/CEO%20Weekly%20Report%20No.%201%2015012016%20Finaljpg_Page32_I%281%29.jpg",
				"title": "Drainage rebar fixing and shuttering works in progress",
				"kind": "image",
				"id": 6
			}]
		}}';
        return $dummy_json;
    }

    public function scurve(){
        $dummy_json= '{"scurve": {
            "date": "29-February-16",
			"actualData": [0, 0, 0, 0.43, 0.43, 0.43, 0.49, 0.79, 1.4, 1.65, 2.57, 3.12, 3.91, 5.5, 6.35, 8.31, 9.41, 11.91, 13.56, 16.25, 17.35, 19.3, 23.34, 27, 28.22, 31.16, 32.68, 35.19, 35.98, 38.36, 39.96, 41.34, 42.03, 43.38, 45.17, 46.58, 48.96, 50.53, 53.28, 56.85, 59.84, 61.76, 63.16, 65.19, 67.57, 69.64, 72.28, 75.38, 77.44, 81.56],
			"earlyData": [0, 0, 0, 0.43, 0.43, 0.43, 0.49, 0.79, 1.4, 1.65, 2.57, 3.12, 3.91, 5.5, 6.35, 8.31, 9.41, 11.91, 13.56, 16.25, 17.35, 19.3, 23.34, 27, 28.22, 31.16, 32.68, 35.19, 35.98, 38.36, 39.96, 41.34, 42.03, 43.38, 45.17, 46.58, 49.55, 52.98, 57.99, 63.4, 69.41, 75.02, 79.13, 83.1, 86.77, 90.27, 93, 94.13, 94.88, 96.22, 96.95, 98.32, 99.58, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
			"delayedData": [0, 0, 0, 0.43, 0.43, 0.43, 0.49, 0.79, 1.4, 1.65, 2.57, 3.12, 3.91, 5.5, 6.35, 8.31, 9.41, 11.91, 13.56, 16.25, 17.35, 19.3, 23.34, 27, 28.22, 31.16, 32.68, 35.19, 35.98, 38.36, 39.96, 41.34, 42.03, 43.38, 45.17, 46.58, 47.89, 50.35, 54.19, 57.71, 62.34, 67.19, 70.24, 74.49, 78.48, 82.98, 87.85, 90.49, 92.97, 94.69, 96.25, 97.9, 99.57, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
			"currentEarly": "99.58%",
			"currentLate": "99.57%",
			"currentActual": "81.56%",
			"varEarly": "-28.0w",
			"varLate": "-19.0w",
			"trend": "up",
			"chartType": "long",
			"viewType": "2"
		}}';
        return $dummy_json;
    }

    public function hsse(){
        $dummy_json = '{"hsse": [
            ["01-January-2016", "An employee being ran over by a car whilst walking along Jalan Sg. Buloh road in front of Megamas business center. He sustained injuries to his head and died in the hospital the next day."],
            ["20-November-2015", "Kampung Selamat Station. Whilst relocating skylift, Operator lost control and hit a lorry. No injury but front screen of skylift broken."],
            ["20-November-2015", "Sungai Buloh Station. During unloading of an escalator from a trailer. The boom of the crane hit a catch platform. Incident occurred due to lack of communication between crane operator and rigger. No injury or damage reported."]
        ]}';
        return $dummy_json;
    }

    public function qrm(){
        $dummy_json ='{"QRM": [
            ["Parapet", 290, 282, 290],
            ["Bearings", 290, 278, 290]
        ]}';
        return $dummy_json;
    }

    public function piers(){
        $dummy_json = '{"PIERS": {
            "DD01": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"DD02": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"DD03": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"DD04": {
                "pierstatus": [100, 100, 100, 100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"DD05": {
                "pierstatus": [100, 100, 100, 100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"DD06": {
                "pierstatus": [100, 100, 100, 100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"DD07": {
                "pierstatus": [100, 100, 100, 100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"DD08": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"DD09": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"DD10": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"DD11": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"DD12": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100, 100]
			},
			"DDS13": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"DDS14": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"DDS15": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"DDS16": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"DDS17": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SBS06": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SB07": {
                "pierstatus": [100, 100, 100, 100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SBS08": {
                "pierstatus": [100, 100, 100, 100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SBS09": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SBS10": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SBS11": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SBS12": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SBS13": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"DDN13": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"DDN14": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"DDN15": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"DDN16": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SBN06": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SBN07": {
                "pierstatus": [100, 100, 100, 100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SBN08": {
                "pierstatus": [100, 100, 100, 100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SBN09": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SBN10": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SBN11": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SBN12": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SBN13": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SBN14": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SBN15": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100, 100]
			},
			"SB16": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SB17": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SB18": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SB19": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SB20": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SB21": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SB22": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SB23": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SB24": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SB25": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SB26": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SB27": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SB28": {
                "pierstatus": [100, 100, 100, 100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SB29": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SB30": {
                "pierstatus": [100, 100, 100, 100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SB31": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SB32": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SB33": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SB34": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SB35": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"BB06": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"BB07": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"BB08": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"BB09": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"BB10": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"BB11": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"BB12": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"BB13": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"BB14": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"BB15": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"BB16": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"BB17": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"BB18": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"BB19": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"BB20": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"BB21": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"BB22": {
                "pierstatus": [100, 100, 100, 100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"BB23": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"BB24": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"BB25": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"BB26": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"BB27": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"BB28": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"BB29": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"BB30": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"BB31": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"BB32": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"BB33": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"BB34": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"BB35": {
                "pierstatus": [100, 100, 100, 100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"BB36": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"BB37": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"BB38": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RR01": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RR02": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RR03": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RR04": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RR05": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RR06": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RR07": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RR08": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RR09": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RR10": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RR11": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RR12": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RR13": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RR14": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100, 100]
			},
			"RR15": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RR16": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RR17": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RR18": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RR19": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RR20": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RR21": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100, 100]
			},
			"RRSS22": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RRSS22a": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RRSS23": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RRSS23a": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RRSS24": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RRSS25": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RRSS26": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RRSS27": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RRSS28": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RRSS29": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RRSS30": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100, 100]
			},
			"RRFS01": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RRFS02": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RRFS03": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RRFS04": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RRSN22": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RRSN22a": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RRSN23": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RRSN23a": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RRSN24": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RRSN25": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RRSN26": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RRSN27": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RRSN28": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RRSN29": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RRSN29a": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RRSN30": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RRSN31": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RRSN32": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RRSN33": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RRSN34": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RRSS31": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RRSS32": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RRSS32a": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RRSS33": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RRSS34": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"FDD01": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"FDD02": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"FDA02": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"FDA01": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RRFN01": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RRFN02": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RRFN03": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"RRFN04": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"Abut SD": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SD01": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SD02": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SD03": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SD04": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SD05": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SD06": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SD07": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SD08": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SD09": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SD10": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SD11": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SD12": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SD13": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SD14": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SD15": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SD16": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100, 100]
			},
			"SD17": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100, 100]
			},
			"SDA18": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SDA19": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SDA20": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SDA21": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SDA22": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SDA23": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SDA24": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SDD18": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SDD19": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SDD20": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SDD21": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SDD22": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SDD23": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"SDD24": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDFN06": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDFN07": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDFN08": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDFN09": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDFN10": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDFN11": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDFN12": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDFN13": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDFN14": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDFN15": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDFN16": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDFN17": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDFN18": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDFN19": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDFN20": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDFN21": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDFS06": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDFS07": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDFS08": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDFS09": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDFS10": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDFS11": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDFS12": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDFS13": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDFS14": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDFS15": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDFS16": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDFS17": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDFS18": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDFS19": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDFS20": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDFS21": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDFS22": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDSN06": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDSN07": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDSN08": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDSN09": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDSN10": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDSN11": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDSN12": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDSN13": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDSN14": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDSN15": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDSN16": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDSN17": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDSN18": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDSS06": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDSS07": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDSS08": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDSS09": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDSS10": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDSS11": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDSS12": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDSS13": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDSS14": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDSS15": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDSS16": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KDSS17": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100, 100]
			},
			"KD19": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KD20": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KD21": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KD22": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100, 100]
			},
			"KD23": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			},
			"KD24": {
                "pierstatus": [100, 100, 100, 100],
				"spanstatus": [100, 100],
				"l_pierstatus": [100, 100, 100, 100],
				"l_spanstatus": [100, 100]
			}
		}}';
        return $dummy_json;
    }
}