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
    
    public partial class tbl_Log
    {
        public int Log_ID { get; set; }
        public Nullable<int> Log_DepartmentID { get; set; }
        public string Log_EmployeeID { get; set; }
        public string Log_Manipulate { get; set; }
        public string Log_Content { get; set; }
        public Nullable<System.DateTime> Log_CreateDate { get; set; }
    }
}
