<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" MasterPageFile="~/Admin/AdminMasterPage.master" Inherits="lggadmin_Modules_Docs_Default" %>
<asp:Content ID="Content" ContentPlaceHolderID="Main" Runat="Server">
    <div id="parentId" style="position:absolute; width:100%; height:88%;"></div>            
    <div id="objTree">
    </div>
    <div id="objContent"></div>         
    <script type="text/javascript">
      var dhxLayout;          
      function doOnLoad() {            
          var dhxLayoutData = {
            parent: "parentId",
            //parent: document.body,
            pattern: "2U",
            cells: [{
                id: "a",
                text: "Quản trị đầu mục",
                width: 250
                }, {
                id: "b",
                text: "Danh sách đầu mục"
            }]
            };
          dhxLayout = new dhtmlXLayoutObject(dhxLayoutData);
          dhxLayout.cells("a").attachURL("Tree.aspx");
          dhxLayout.cells("b").attachURL("DocsList.aspx");
      }     
      doOnLoad();       
    </script>
</asp:Content>
