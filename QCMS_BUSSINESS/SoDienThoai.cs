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
    
    public partial class SoDienThoai
    {
        public int ID { get; set; }
        public string SDT { get; set; }
        public Nullable<int> MaXe { get; set; }
    
        public virtual Xe Xe { get; set; }
    }
}
