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
    
    public partial class tbl_Modtype
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public tbl_Modtype()
        {
            this.tbl_Mod = new HashSet<tbl_Mod>();
        }
    
        public int Modtype_ID { get; set; }
        public string Modtype_Name { get; set; }
        public string Modtype_Code { get; set; }
        public Nullable<bool> Modtype_Status { get; set; }
        public Nullable<int> Modtype_Pos { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<tbl_Mod> tbl_Mod { get; set; }
    }
}
