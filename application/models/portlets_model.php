<?php

class Portlets_model extends CI_Model
{
    public function __construct()
    {
        $this->load->database();
    }

    public function package_info($viaduct){
        $this->db->select('tbl_stations.station_master_id,tbl_stations.category_type_id,tbl_stations.spd_name');
        $this->db->from('tbl_stations');
        $this->db->join('tbl_project_sub', 'tbl_project_sub.station_master_id = tbl_stations.station_master_id');
        $this->db->join('tbl_project_master', 'tbl_project_master.pjct_master_id = tbl_project_sub.pjct_master_id');
        $this->db->where('tbl_project_master.pjct_name',$viaduct);
        $page_query = $this->db->get();
        $page_result = $page_query->result_array();
        return $page_result;
    }
}