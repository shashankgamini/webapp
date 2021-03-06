<%@ Page Language="C#" AutoEventWireup="true" CodeFile="login.aspx.cs" Inherits="Login" %>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Login :: Vé xe điện tử</title>
    <link rel="stylesheet" href="css/Login.css" type="text/css" />
    <link rel="stylesheet" href="css/bootstrap.css" type="text/css" />
    <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css" />
</head>
<body class="login container">
    <div class="col-sm-4 col-sm-offset-4">
        <div class="content">
            <form id="form1" runat="server">
                <asp:Panel ID="Panel1" DefaultButton="btLogin" runat="server">
                    <h3 class="form-title font-green">ĐĂNG NHẬP</h3>
                    <div class="form-title form-green">
                        <img src="/img/logo.png" class="img-responsive" />
                    </div>
                    <asp:Label ID="lbError" runat="server" Text=""></asp:Label>
                    <div class="form-group">
                        <asp:TextBox ID="txtUsername" CssClass="form-control" placeholder="Nhập tên tài khoản" runat="server" MaxLength="25"></asp:TextBox>
                    </div>
                    <div class="form-group">
                        <asp:TextBox TextMode="Password" ID="txtPass" CssClass="form-control" placeholder="Mật khẩu" runat="server" MaxLength="25"></asp:TextBox>
                    </div>
                    <div class="form-actions text-center">
                        <asp:LinkButton ID="btLogin" CssClass="btn green uppercase" runat="server" OnClick="btLogin_Click">Đăng nhập</asp:LinkButton>
                    </div>
                    <div class="form-group">
                        <div class="pull-right">
                            <a class="btn btn-sm" href="/">Trở về trang chủ</a>
                        </div>
                    </div>
                    <div class="copyright">2016 © smac.vn </div>
                </asp:Panel>
            </form>
        </div>
    </div>
</body>
</html>
