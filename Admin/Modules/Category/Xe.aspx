<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Admin/AdminMasterPage.master" CodeFile="Xe.aspx.cs" Inherits="Admin_Modules_Category_Xe" %>

<asp:Content ContentPlaceHolderID="main" runat="server">
    <div class="box box-primary container box-solid" id="QLXeController" ng-controller="QLXeController">
        <div class="box-header with-border">
            <h3 class="text-center"><b>QUẢN LÝ XE</b></h3>
        </div>
        <div class="box-body">
            <div class="col-sm-12">
                <div class="form-group">
                    <button class="btn btn-flat btn-success btn-sm" id="btnadd" onclick="$('#add-modal').modal({backdrop: 'static'});$('#updateframe').prop('src', 'Create/ThemXe.aspx')" type="button"><i class="fa fa-plus"></i>Thêm mới</button>
                </div>
                <div>
                    <span style="color:green; font-weight: bold"><%=SMAC.SessionUtil.GetValue("Message") %></span>
                </div>
                <div class="table-responsive">
                    <div class="text-center" ng-show="loadData">
                        <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>Đang tải dữ liệu...
                    </div>
                    <div id="grid1" ui-grid="gridOptions" ui-grid-auto-resize ui-grid-move-columns ui-grid-pagination ui-grid-selection ui-grid-exporter ui-grid-edit ui-grid-cellnav class="grid"></div>
                </div>

                <div class="modal fade modal-primary" id="add-modal" role="dialog">
                    <div class="modal-dialog modal-lg" id="modalCT">
                        <div class="modal-content">
                            <a class="pull-right" style="padding: 5px;" onclick="$('#add-modal').modal('hide');"><i class="glyphicon glyphicon-remove"></i></a>&nbsp;&nbsp;
                        <a class="pull-right" style="padding: 5px;" onclick="$('#modalCT').toggleClass('fullscreen');"><i class="glyphicon glyphicon-fullscreen"></i></a>&nbsp;&nbsp;
                        <iframe id="updateframe" style="width: 100%; height: 560px; border: none; border-radius: 4px" allowfullscreen></iframe>
                        </div>
                        <!-- /.modal-content -->
                    </div>
                    <!-- /.modal-dialog -->
                </div>
                <!-- /.modal -->
            </div>
        </div>
    </div>
    <% Session["Message"] = ""; %>
</asp:Content>
