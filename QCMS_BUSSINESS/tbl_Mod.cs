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
    
    public partial class tbl_Mod
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public tbl_Mod()
        {
            this.tbl_Content = new HashSet<tbl_Content>();
            this.tbl_Box = new HashSet<tbl_Box>();
            this.tbl_User = new HashSet<tbl_User>();
        }
    
        public int Mod_ID { get; set; }
        public Nullable<int> Mod_Parent { get; set; }
        public string Mod_Name { get; set; }
        public string Mod_Code { get; set; }
        public string Mod_Content { get; set; }
        public string Mod_Intro { get; set; }
        public Nullable<int> Modtype_ID { get; set; }
        public string Mod_Url { get; set; }
        public string Mod_Img { get; set; }
        public string Mod_Slide { get; set; }
        public string Mod_Title { get; set; }
        public string Mod_Key { get; set; }
        public string Mod_Des { get; set; }
        public Nullable<bool> Mod_Status { get; set; }
        public Nullable<bool> Mod_Hot { get; set; }
        public Nullable<int> Mod_Pos { get; set; }
        public Nullable<int> Mod_Level { get; set; }
        public Nullable<System.DateTime> Mod_Date { get; set; }
        public Nullable<int> lang { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<tbl_Content> tbl_Content { get; set; }
        public virtual tbl_Modtype tbl_Modtype { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<tbl_Box> tbl_Box { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<tbl_User> tbl_User { get; set; }
    }
}
