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
    
    public partial class ModFLD
    {
        public int FldID { get; set; }
        public Nullable<int> ModAdminId { get; set; }
        public string FldName { get; set; }
        public string FldDesc { get; set; }
        public string FldType { get; set; }
        public string FldSource { get; set; }
        public Nullable<int> FldStatus { get; set; }
        public Nullable<bool> RO { get; set; }
        public Nullable<bool> GRW { get; set; }
        public Nullable<int> Pos { get; set; }
        public Nullable<int> Show { get; set; }
        public string FldLabel { get; set; }
        public Nullable<bool> isPrimaryKey { get; set; }
    
        public virtual tbl_ModAdmin tbl_ModAdmin { get; set; }
    }
}
