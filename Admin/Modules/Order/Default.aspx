<%@ Page Language="C#" MasterPageFile="~/Admin/AdminMasterPage.master" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="Admin_Modules_Order_Default" %>

<asp:Content ContentPlaceHolderID="main" runat="server">
    <div class="container" ng-controller="BaoCaoController">
        <div class="order-content">
            <div class="container">
                <div class="row">
                    <h3 class="text-center admin-title">BÁO CÁO ĐƠN HÀNG</h3>
                </div>
                <hr />
                <div class="row">
                    <div class="col-sm-6" style="padding-bottom: 0px; padding-left: 15px;">
                        <div class="w20">
                            <input type="text" class="form-control input-sm" ng-change="Loc()" placeholder="Lọc theo Nhà Xe" ng-model="tenNhaXe" required />
                        </div>
                        <div class="w20">
                            <input type="datetime" ng-change="Loc()" class="form-control input-sm datepicker" placeholder="Lọc Từ ngày" ng-model="startDate" required />
                        </div>
                        <div class="w20">
                            <input type="datetime" ng-change="Loc()" class="form-control input-sm datepicker" placeholder="Lọc Đến ngày" ng-model="endDate" required />
                        </div>
                        <button class="btn btn-flat btn-danger btn-sm" ng-disabled="loading" ng-click="Loc()" type="button"><i class="fa fa-search"></i>&nbsp;&nbsp;Lọc <i class="fa fa-spinner fa-spin" ng-show="loading"></i></button>
                        <button class="btn btn-success btn-flat btn-sm" ng-click="exportData()" type="button">
                            <span class="glyphicon glyphicon-share"></span>
                            Export to Excel</button>
                    </div>
                    <%--<div class="col-sm-4 col-sm-offset-2" style="padding-right: 15px; padding-bottom: 0px; padding-left: 0;">
                        <div class="w100">
                            <input type="text" class="form-control input-sm" ng-model="SearchKey" placeholder="Nhập từ khóa tìm kiếm" />
                        </div>
                    </div>--%>
                </div>
                <div class="fw">
                    <div id="exportable">
                        <table class="table table-bordered table-striped table-hover" id="exportData">
                            <thead>
                                <tr class="table-header">
                                    <th>STT</th>
                                    <th ng-click="sortData('Order_Name')"><i class="fa fa-address-card-o"></i>&nbsp;Tên khách hàng<div ng-class="getSortClass('Order_Name')"></div></th>
                                    <th ng-click="sortData('Order_Code')"><i class="fa fa-ticket"></i>&nbsp;Mã đặt vé<div ng-class="getSortClass('Order_Code')"></div></th>
                                    <th ng-click="sortData('Tennhaxe')"><i class="fa fa-car"></i>&nbsp;Nhà xe<div ng-class="getSortClass('Tennhaxe')"></div></th>
                                    <th ng-click="sortData('Mail')"><i class="fa fa-envelope-o"></i>&nbsp;Email<div ng-class="getSortClass('Mail')"></div></th>
                                    <th ng-click="sortData('Order_ShipAddress')"><i class="fa fa-map-marker"></i>&nbsp;Địa chỉ<div ng-class="getSortClass('Order_ShipAddress')"></div></th>
                                    <th ng-click="sortData('Order_CreatedDate')"><i class="fa fa-calendar-o"></i>&nbsp;Ngày đặt<div ng-class="getSortClass('Order_CreatedDate')"></div></th>
                                    <th ng-click="sortData('Order_TongThanhToan')"><i class="fa fa-money"></i>&nbsp;Tổng thanh toán(VNĐ)<div ng-class="getSortClass('Order_TongThanhToan')"></div></th>
                                    <th>Tùy chọn</th>
                                </tr>
                            </thead>
                            <tbody>
                                <%--<tr class="loader" ng-show="loader"></tr>--%>
                                <tr ng-repeat="o in orders.slice(((currentPage-1)*itemsPerPage), ((currentPage)*itemsPerPage)) | filter : SearchKey | orderBy:sortColumn:reverseSort">
                                    <td>{{ orders.indexOf(o)+1 }}</td>
                                    <td>{{Order_Name}}</td>
                                    <td>{{o.Order_Code}}</td>
                                    <td>{{o.Tennhaxe}}</td>
                                    <td>{{Mail}}</td>
                                    <td>{{o.Order_ShipAddress}}</td>
                                    <td>{{ o.Order_CreatedDate | date:'dd-MM-yyyy HH:mm:ss' }}</td>
                                    <td>{{o.Order_TongThanhToan | number}}</td>
                                    <td>
                                        <button type="button" class="btn btn-warning btn-flat btn-sm" ng-click="view(o)"><i class="fa fa-eye"></i></button>
                                      <%--  &nbsp;
                                        <button type="button" class="btn btn-danger btn-flat btn-sm" ng-click="Delete(o)"><i class="fa fa-trash"></i></button>--%>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr  ng-show="orders.length==0">
                                    <td colspan="9" style="color: red">Không có dữ liệu phù hợp</td>
                                </tr>
                                <tr>
                                    <td colspan="7" class="text-right text-current"><b>Tổng doanh thu {{ forDate }}</b></td>
                                    <td colspan="2" class="text-left text-bold">{{ TongTienThanhToan | number }} đ</td>
                                </tr>
                            </tfoot>
                        </table>
                        <%-- Phân trang --%>
                        <%--Hiển thị
                        <select ng-model="viewby" ng-change="setItemsPerPage(viewby)">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="40">40</option>
                            <option value="50">50</option>
                        </select>
                        Dòng--%>
                        <div class="pull-right">
                        <pagination  total-items="totalItems" ng-model="currentPage" max-size="maxSize" class="pagination-sm" boundary-links="true" rotate="false" num-pages="numPages" items-per-page="itemsPerPage"></pagination>
                        <%--<pre>Trang: {{currentPage}} / {{numPages}}</pre>--%>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="myModal" class="modal fade" role="dialog">
            <div class="modal-dialog modal-lg">
                ">
        <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h2 class="modal-title">CHI TIẾT ĐƠN HÀNG</h2>
                    </div>
                    <div class="modal-body" id="modal-body">
                        <table class="table" id="exportPDF">
                            <tr>
                                <td colspan="2">
                                    <h3 class="text-center">THÔNG TIN ĐƠN HÀNG</h3>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <b>Order: #{{ MaDonHang }}</b><br />
                                    Order Date: {{ NgayTao | date:'dd-MM-yyyy'}}
                                    Nhà xe: {{ NhaXe }}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <table class="table tbl-phuongthuc">
                                        <tr>
                                            <td class="w50">
                                                <b>Thông tin khách hàng</b><br />
                                                {{ HoTen }}<br />
                                                {{ DiaChi }}<br />
                                                SĐT: {{ Phone }}
                                            </td>
                                            <td class="w50">
                                                <b>Phương thức thanh toán</b><br />
                                                Thanh toán bằng tiền mặt khi nhận hàng
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <%--<tr>
                                <td>
                                    <table class="table table-info table-bordered">
                                        <tr>
                                            <td><b>Mã đơn hàng(SO)</b></td>
                                            <td>{{ MaDonHang }}</td>
                                            <td><b>Điện thoại</b></td>
                                            <td>{{ Phone }}</td>
                                        </tr>
                                        <tr>
                                            <td><b>Họ tên</b></td>
                                            <td>{{ HoTen }}</td>
                                            <td><b>Địa chỉ</b></td>
                                            <td>{{ DiaChi }}</td>
                                        </tr>
                                        <tr>
                                            <td><b>Ngày tạo</b></td>
                                            <td>{{ NgayTao | date:'dd-MM-yyyy HH:mm:ss'}}</td>
                                            <td><b>Nhà xe</b></td>
                                            <td>{{ NhaXe }}</td>
                                        </tr><tr>
                                            <td colspan="3"><b>Tổng tiền</b></td>
                                            <td>{{ TongTien | number}} đ</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>--%>
                            <tr>
                                <td colspan="2">
                                    <h3 class="text-center">DANH SÁCH VÉ</h3>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <table class="table table-striped table-bordered" id="table-dsve">
                                        <thead>
                                            <tr class="table-header">
                                                <th>STT</th>
                                                <th>Mã vé</th>
                                                <th>Giá</th>
                                                <th>Loại vé</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr ng-repeat="od in orderDetail">
                                                <td>{{ orderDetail.indexOf(od)+1 }}</td>
                                                <td>{{ od.MaVe }}</td>
                                                <td>{{ od.UnitPrice | number}} đ</td>
                                                <td>{{ od.Type=="V"?"VIP":"Thường" }}</td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td class="text-right text-current" colspan="3">Tổng số tiền</td>
                                                <td class="text-bold">{{ TongTien | number}} đ</td>
                                            </tr>
                                             <tr>
                                                <td class="text-right text-current" colspan="3">Giảm giá</td>
                                                <td class="text-bold">{{ GiamGia | number}} đ</td>
                                            </tr>
                                             <tr>
                                                <td class="text-right text-current" colspan="3">Phí vận chuyển</td>
                                                <td class="text-bold">{{ PhiVanChuyen | number}} đ</td>
                                            </tr>
                                             <tr>
                                                <td class="text-right text-current" colspan="3">Tổng thanh toán</td>
                                                <td class="text-bold">{{ TongThanhToan | number}} đ</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success btn-flat btn-sm" ng-click="exportPDF()">
                            <span class="glyphicon glyphicon-share"></span>
                            Export to Excel
                        </button>
                        <button type="button" class="btn btn-default" data-dismiss="modal">Đóng</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</asp:Content>
