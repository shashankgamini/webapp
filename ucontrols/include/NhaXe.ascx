<%@ Control Language="C#" AutoEventWireup="true" CodeFile="NhaXe.ascx.cs" Inherits="ucontrols_include_NhaXe" %>
<%@ Register Src="~/ucontrols/subcontrol/Breadcrumb.ascx" TagPrefix="uc1" TagName="Breadcrumb" %>
<form runat="server">
    <div class="container">
        <uc1:Breadcrumb runat="server" ID="Breadcrumb" />
        <div class="dsnhaxe fw" runat="server" id="lst">
            <div class="fw">
                <div class="col-sm-9">
                    <div class="row">
                        <h3>Danh sách các nhà xe</h3>
                        <i>Hơn 1000 nhà xe và bên xe khắp Việt Nam</i>
                    </div>

                </div>
                <div class="col-sm-3">
                    <div class="row txtnx">
                        <div class="smac">
                            <asp:DropDownList runat="server" AutoPostBack="true" CssClass="txtdk select2 form-control" ID="ddlTinh">
                                <asp:ListItem Value="0" Text="Tất cả nhà xe" />
                            </asp:DropDownList>
                            <i class="icon-input glyphicon glyphicon-menu-down"></i>
                        </div>

                    </div>
                </div>
            </div>
            <div class="fw lstNhaXe">
                <ul class="uk-grid-small uk-child-width-1-2 uk-child-width-1-4@s uk-text-center" uk-grid>
                    <%=lstNhaxe() %>
                </ul>
            </div>
        </div>
        <div runat="server" id="detail">
            <h1 class="text-center title ">Nhà xe <%=nx.Tennhaxe %></h1>
            <p class="text-bold"><%=nx.Gioithieungan %></p>
            <p><%=nx.Gioithieuchitiet %></p>
        </div>
    </div>
</form>

