<%@ Page Language="C#" MasterPageFile="~/Admin/AdminMasterPage.master" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="lggadmin_Modules_Content_Default" %>
<asp:Content ID="Content" ContentPlaceHolderID="Main" Runat="Server">
    <div id="parentId" style="position:absolute; width:100%; height:88%;"></div>            
    <div id="objTree"></div>
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
                text: "Đề mục",
                width: 250
                }, {
                id: "b",
                text: "Danh sách"
            }]
            };
          dhxLayout = new dhtmlXLayoutObject(dhxLayoutData);
          dhxLayout.cells("a").attachURL("Tree.aspx"); 
          dhxLayout.cells("b").attachURL("ContentList.aspx");          
      }     
      doOnLoad();       
    </script>
</asp:Content>