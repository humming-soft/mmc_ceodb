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
        $pkg_info["INFO"]['name'] = strtoupper($viaduct);
        $this->db->select('tbl_stations.category_type_id,tbl_stations.spd_name,tbl_project_master.cont_name');
        $this->db->from('tbl_stations');
        $this->db->join('tbl_project_sub', 'tbl_project_sub.station_master_id = tbl_stations.station_master_id');
        $this->db->join('tbl_project_master', 'tbl_project_master.pjct_master_id = tbl_project_sub.pjct_master_id');
        $this->db->where('LOWER(tbl_project_master.pjct_name)',strtolower($viaduct));
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
        $pkg_info["INFO"]['piers_url'] = $viaduct."/piers";
        return json_encode($pkg_info);
    }
    /**
     * @jane
     * date:17/10/2016
     * Parameter:viaduct_name
     * Return type:
     * Description:function get key access dates
     */
    public function kad($viaduct, $date = FALSE)
    {
        $this->db->select("tbl_kd_master.kd_desc, CASE WHEN tbl_kd_master.forecast_date!='' THEN to_char(to_date(tbl_kd_master.forecast_date, 'YYYY-MM-DD'), 'DD-Mon-yy') ELSE '' END AS forecast_date, CASE WHEN tbl_kd_master.contract_date!='' THEN to_char(to_date(tbl_kd_master.contract_date, 'YYYY-MM-DD'), 'DD-Mon-yy') ELSE '' END AS contract_date");
        $this->db->from('tbl_kd_master');
        $this->db->join('tbl_journal_master', 'tbl_journal_master.journal_master_id = tbl_kd_master.journal_master_id');
        $this->db->join('tbl_project_master', 'tbl_project_master.pjct_master_id = tbl_journal_master.pjct_master_id');
        $this->db->where('LOWER(tbl_project_master.pjct_name)', strtolower($viaduct));
        $this->db->where('tbl_journal_master.journal_category_id',KAD);
        if ($date) { //If date is selected
            $timestamp = date('Y-m-d', strtotime($date));
            $this->db->where('DATE(tbl_kd_master.data_date)', $timestamp);
        }else{
            $max_date = $this->max_data_date("tbl_kd_master", $this->db->get_compiled_select('', FALSE));
            if($max_date!=""){
                $this->db->where('tbl_kd_master.data_date', $max_date);
            }
        }
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

    /**
     * @jane
     * date:20/10/2016
     * Parameter:viaduct_name
     * Return type:
     * Description:function to get scurve data
     */
    public function scurve($viaduct, $date = FALSE){
        $pkg_info["scurve"] = array();
        $this->db->select("tbl_project_prgs_master.early_perc,tbl_project_prgs_master.actual_perc,tbl_project_prgs_master.late_perc,tbl_project_prgs_master.early_variance,tbl_project_prgs_master.late_varience, to_char(tbl_project_prgs_master.data_date, 'Mon/yy') AS data_date");
        $this->db->from('tbl_project_prgs_master');
        $this->db->join('tbl_journal_master', 'tbl_journal_master.journal_master_id = tbl_project_prgs_master.journal_master_id');
        $this->db->join('tbl_project_master', 'tbl_project_master.pjct_master_id = tbl_journal_master.pjct_master_id');
        $this->db->where('LOWER(tbl_project_master.pjct_name)',strtolower($viaduct));
        $this->db->where('tbl_journal_master.journal_category_id',V_SCURVE);
        $this->db->order_by('tbl_project_prgs_master.data_date','desc');
        $this->db->order_by('tbl_project_prgs_master.crea_date','desc');
        /*echo ($this->db->get_compiled_select());*/
        if ($date) { //if date is selected
            $timestamp = date('Y-m-d', strtotime($date));
            $this->db->where('DATE(tbl_project_prgs_master.data_date)<=', $timestamp);
        }
        $page_query = $this->db->get();
        $scurve_result = $page_query->result_array();
        $i = true;
        $prefix = $actual_perc = $early_perc = $late_perc = $date = '';
        foreach($scurve_result as $result){
            if($i){
                $pkg_info["scurve"]["currentEarly"] = $result['early_perc']."%";
                $pkg_info["scurve"]["currentLate"] = $result['late_perc']."%";
                $pkg_info["scurve"]["currentActual"] = $result['actual_perc']."%";
                $pkg_info["scurve"]["varEarly"] = $result['early_variance']."%";
                $pkg_info["scurve"]["varLate"] = $result['late_varience']."%";
                $actual_perc .= $prefix . $result['actual_perc'];
                $early_perc .= $prefix . $result['early_perc'];
                $late_perc .= $prefix . $result['late_perc'];
                $date .= $prefix . $result['data_date'];
                $prefix = ', ';
                $i = false;
            }else{
                $actual_perc .= $prefix . $result['actual_perc'];
                $early_perc .= $prefix . $result['early_perc'];
                $late_perc .= $prefix . $result['late_perc'];
                $date .= $prefix . $result['data_date'];
                $prefix = ', ';
                $dates = explode(", ",$date);
                $pkg_info["scurve"]["actualData"] = array_reverse(array_map('floatval', explode(", ",$actual_perc)));
                $pkg_info["scurve"]["earlyData"] = array_reverse(array_map('floatval', explode(", ",$early_perc)));
                $pkg_info["scurve"]["delayedData"] = array_reverse(array_map('floatval', explode(", ",$late_perc)));
                $pkg_info["scurve"]["categories"] = array_reverse($dates);
            }
        }
        $date_count = count($dates);
        if($date_count > 30) {
            $pkg_info["scurve"]["tickInterval"] = 3;
        } else {
            $pkg_info["scurve"]["tickInterval"] = 1;
        }
        $pkg_info["scurve"]["trend"] = "up";
        $pkg_info["scurve"]["chartType"] = "short";
        $pkg_info["scurve"]["viewType"] = "2";
        return json_encode($pkg_info);
    }

    public function hsse(){
        $dummy_json = '{"hsse": [
            ["01-January-2016", "An employee being ran over by a car whilst walking along Jalan Sg. Buloh road in front of Megamas business center. He sustained injuries to his head and died in the hospital the next day."],
            ["20-November-2015", "Kampung Selamat Station. Whilst relocating skylift, Operator lost control and hit a lorry. No injury but front screen of skylift broken."],
            ["20-November-2015", "Sungai Buloh Station. During unloading of an escalator from a trailer. The boom of the crane hit a catch platform. Incident occurred due to lack of communication between crane operator and rigger. No injury or damage reported."]
        ]}';
        return $dummy_json;
    }

    public function kpi($viaduct, $date = FALSE){
        $kpi = array("QRM" => array());
//        $this->db->select('MAX(tbl_kpi_master.data_date)')->from('tbl_kpi_master');
        //this will show the query in console.
//        $subQuery =  $this->db->get_compiled_select();

        $this->db->select('tbl_kpi_master.kpi_type,tbl_kpi_master.baseline,tbl_kpi_master.kpi_target,tbl_kpi_master.actual');
        $this->db->from('tbl_kpi_master');
        $this->db->join('tbl_journal_master', 'tbl_journal_master.journal_master_id = tbl_kpi_master.journal_master_id');
        $this->db->join('tbl_project_master', 'tbl_project_master.pjct_master_id = tbl_journal_master.pjct_master_id');
        $this->db->where('tbl_journal_master.journal_category_id',KPI);
        $this->db->where('LOWER(tbl_project_master.pjct_name)',strtolower($viaduct));
        if ($date) { //If date is selected
            $timestamp = date('Y-m-d', strtotime($date));
            $this->db->where('DATE(tbl_kpi_master.data_date)', $timestamp);
        }else{
            $max_date = $this->max_data_date("tbl_kpi_master", $this->db->get_compiled_select('', FALSE));
            if($max_date!=""){
                $this->db->where('tbl_kpi_master.data_date', $max_date);
            }
        }
        $slug_result = $this->db->get()->result_array();
        foreach ($slug_result as $v) {
            array_push($kpi["QRM"], array("type" => $v['kpi_type'], "baseline" => $v['baseline'], "target" => $v['kpi_target'], "actual" => $v['actual']));
        }
        return json_encode($kpi);
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
    /**
     * @sebin
     * date:24/10/2016
     * Parameter:Data Date
     * Return type: json
     * Description: Viaduct Summary (Progress of the Viaducts).
     */
    public function viaducts_summary($date = FALSE){
        $v_summary["systems"] = array(
            "syspackage"=>array()
        );
        $ids = $this->get_viaducts();
        foreach($ids as $i){
            $this->db->select("tbl_project_master.pjct_name, tbl_project_master.pjct_master_id,tbl_project_prgs_master.early_perc,tbl_project_prgs_master.actual_perc,tbl_project_prgs_master.late_perc,tbl_project_prgs_master.early_variance,tbl_project_prgs_master.late_varience");
            $this->db->from('tbl_project_prgs_master');
            $this->db->join('tbl_journal_master', 'tbl_journal_master.journal_master_id = tbl_project_prgs_master.journal_master_id');
            $this->db->join('tbl_project_master', 'tbl_project_master.pjct_master_id = tbl_journal_master.pjct_master_id');
            $this->db->where('tbl_journal_master.journal_category_id', V_SCURVE);
            $this->db->where('tbl_project_master.pjct_master_id', $i['pjct_master_id']);
            if ($date) { //if date is selected
                $timestamp = date('Y-m-d', strtotime($date));
                $this->db->where('DATE(tbl_project_prgs_master.data_date)', $timestamp);
            } else {
                $max_date = $this->max_data_date("tbl_project_prgs_master", $this->db->get_compiled_select('', FALSE));
                if ($max_date != "") {
                    $this->db->where('tbl_project_prgs_master.data_date', $max_date);
                }
            }
            $vs_result = $this->db->get()->result_array();
            foreach ($vs_result as $v) {
                array_push($v_summary["systems"]["syspackage"], array(
                    "item" => strtoupper($v["pjct_name"]),
                    "id" => $v["pjct_master_id"],
                    "url" => strtolower($v["pjct_name"]) . "/index",
                    "early" => $v["early_perc"],
                    "late" => $v["late_perc"],
                    "actual" => $v["actual_perc"],
                    "varianceEarly" => $v["early_variance"],
                    "varianceLate" => $v["late_varience"],
                    "trend" => "down"
                ));
            }
        }
        return json_encode($v_summary);
    }

    /*Miscellaneous Methods*/

    /**
     * @sebin
     * date:21/10/2016
     * Parameter:Table Name, Sql Query, Data Date field name in the table(default: data_date), Boolean value for removing Order by clause
     * Return type: String
     * Description: Attain the Max of data date from schemas.
     */
    public function max_data_date($table,$q,$field = FALSE,$remove_order_by = FALSE){
        $merger="";
        if($field){
            $merger="SELECT MAX(".$table.".".$field.")";
        }else{
            $merger="SELECT MAX(".$table.".data_date)";
        }
        if($remove_order_by){
            $max_date = $this->db->query($merger . " " . strstr(strstr($q,'ORDER BY',TRUE), 'FROM'))->row()->max;
        }else {
            $max_date = $this->db->query($merger . " " . strstr($q, 'FROM'))->row()->max;
        }
        return $max_date;
    }
    /**
     * @sebin
     * date:22/10/2016
     * Parameter:Slug_ID(Item ID), Page Name
     * Return type: array
     * Description: get the page
     */
    public function get_page($slug_id){
        $sql = "select \"page\" from \"pages\" where \"item_id\" = '$slug_id'";
        $result = $this->db->query($sql)->result_array();
        return $result;
    }
    /**
     * @sebin
     * date:24/10/2016
     * Parameter:
     * Return type: array
     * Description: Id of the Projects (viaducts)
     */
    public function get_viaducts(){
        $this->db->select("pjct_master_id");
        $this->db->from('tbl_project_master');
        return $this->db->get()->result_array();
    }
    /**
     * @sebin
     * date:25/10/2016
     * Parameter:Project ID
     * Return type: string
     * Description: Returns project name based on the ID.
     */
    public function get_project($pid){
        $this->db->select("pjct_name");
        $this->db->from('tbl_project_master');
        $this->db->where('pjct_master_id',$pid);
        return $this->db->get()->row()->pjct_name;
    }

    public function get_ref($item_meta,$cmp){
        $d = array();
        $i=0;
        foreach($item_meta as $sub){
            $d[$sub['id']]=strtoupper($this->get_project($cmp[$i]));
            $i++;
        }
        return json_encode($d);
    }
}