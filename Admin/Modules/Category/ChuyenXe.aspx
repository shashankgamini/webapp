<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Admin/AdminMasterPage.master" CodeFile="ChuyenXe.aspx.cs" Inherits="Admin_Modules_Category_CX" %>

<asp:Content ContentPlaceHolderID="main" runat="server">
    <div class="container box-solid" id="ChuyenXeController" ng-controller="ChuyenXeController">
        <div class="box-header with-border">
            <h3 class="text-center"><b>QUẢN LÝ CHUYẾN XE</b></h3>
        </div>
        <div class="box-body" id="body" runat="server">
            <div class="form-group">
                <button class="btn btn-flat btn-success btn-sm" id="btnadd" onclick="$('#add-modal').modal({backdrop: 'static'});$('#updateframe').prop('src', 'Create/ThemChuyenXe.aspx')" type="button"><i class="fa fa-plus"></i>Thêm mới</button>
            </div>
            <div class="table-responsive">
                <div class="text-center" ng-show="loadData">
                    <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i> Đang tải dữ liệu...
                </div>
                <div id="grid1" ui-grid="gridOptions" ui-grid-auto-resize ui-grid-move-columns ui-grid-pagination ui-grid-selection ui-grid-exporter ui-grid-edit ui-grid-cellNav class="grid"></div>
            </div>

            <div class="modal fade modal-primary" id="add-modal" role="dialog">
                <div class="modal-dialog modal-lg" id="modalCT">
                    <div class="modal-content">
                        <a class="pull-right" style="padding: 5px;" onclick="$('#add-modal').modal('hide');"><i class="glyphicon glyphicon-remove"></i></a>&nbsp;&nbsp;
                        <a class="pull-right" style="padding: 5px;" onclick="$('#modalCT').toggleClass('fullscreen');"><i class="glyphicon glyphicon-fullscreen"></i></a>&nbsp;&nbsp;
                        <iframe id="updateframe" style="width: 100%; height: 580px; border: none; border-radius: 4px" allowfullscreen></iframe>
                    </div>
                    <!-- /.modal-content -->
                </div>
                <!-- /.modal-dialog -->
            </div>
            <!-- /.modal -->
        </div>
    </div>
</asp:Content>
