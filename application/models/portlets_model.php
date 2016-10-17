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
        $this->db->select('tbl_stations.station_master_id,tbl_stations.category_type_id,tbl_stations.spd_name');
        $this->db->from('tbl_stations');
        $this->db->join('tbl_project_sub', 'tbl_project_sub.station_master_id = tbl_stations.station_master_id');
        $this->db->join('tbl_project_master', 'tbl_project_master.pjct_master_id = tbl_project_sub.pjct_master_id');
        $this->db->where('tbl_project_master.pjct_name',$viaduct);
        $page_query = $this->db->get();
        $page_result = $page_query->result_array();
        return $page_result;
    }

    /**
     * @jane
     * date:17/10/2016
     * Parameter:viaduct_name
     * Return type:
     * Description:function get key access dates
     */
    public function kad($viaduct){
        $this->db->select('tbl_kd_master.kd_master_id,tbl_kd_master.kd_desc,tbl_kd_master.forecast_date,tbl_kd_master.contract_date');
        $this->db->from('tbl_kd_master');
        $this->db->join('tbl_journal_master', 'tbl_journal_master.journal_master_id = tbl_kd_master.journal_master_id');
        $this->db->join('tbl_project_master', 'tbl_project_master.pjct_master_id = tbl_journal_master.pjct_master_id');
        $this->db->where('tbl_project_master.pjct_name',$viaduct);
        $page_query = $this->db->get();
        $page_result = $page_query->result_array();
        return $page_result;
    }
}