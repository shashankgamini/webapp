//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace QCMS_BUSSINESS
{
    using System;
    using System.Collections.Generic;
    
    public partial class tbl_Order
    {
        public int Order_ID { get; set; }
        public string Order_Ten { get; set; }
        public Nullable<bool> Order_sex { get; set; }
        public string Order_Code { get; set; }
        public string Order_Email { get; set; }
        public string Order_Contact { get; set; }
        public string Order_Address { get; set; }
        public string Order_Tel { get; set; }
        public Nullable<double> Order_Tongtien { get; set; }
        public Nullable<int> Order_Account { get; set; }
        public Nullable<System.DateTime> Order_CompleteDate { get; set; }
        public Nullable<bool> Order_isRead { get; set; }
        public Nullable<System.DateTime> Order_CreatedDate { get; set; }
        public string Order_Content { get; set; }
        public string Order_File { get; set; }
        public Nullable<int> Order_Type { get; set; }
        public Nullable<int> Order_Status { get; set; }
        public Nullable<bool> Order_isComplete { get; set; }
        public Nullable<double> Order_Promote { get; set; }
        public Nullable<int> MaChuyenXe { get; set; }
        public Nullable<int> Order_Thuong { get; set; }
        public Nullable<int> Order_Vip { get; set; }
        public Nullable<double> Order_Giatrivedoi { get; set; }
        public Nullable<int> Order_CheckOutMethod { get; set; }
        public string Order_ShipAddress { get; set; }
        public Nullable<double> Order_TongThanhToan { get; set; }
        public Nullable<double> Order_ShipValue { get; set; }
        public string Order_ProvinceAddress { get; set; }
        public string Order_DistrictAddress { get; set; }
    
        public virtual tbl_Member tbl_Member { get; set; }
        public virtual tbl_Member tbl_Member1 { get; set; }
    }
}
