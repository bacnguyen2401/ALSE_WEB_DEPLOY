<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="QuanLyKhoFM.aspx.cs" Inherits="ALSE.QuanLyKhoFM" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <%# Versioned.VersionedFiles.ScriptHelper.Render("css","css/custom/QuanLyKhoFM.css") %>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <div class="row text-align">
        <div class="col-md-3 col-sm-6 ">
            <div class="bodywhite">
                <h2 class="bodywhite_h2">
                    <button class="button click-toggle" attrkho="10">KHO KHÔ 10</button></h2>
                <p class="bodywhite_p">
                    - Tổng diện tích: 2600m&sup2;<br />
                    - 12 dãy rack<br />
                    - 6 tầng/ rack<br />
                    - Số rack cao 2,3m:
                    <br />
                    - Số rack cao 2m:<br />
                    - Số rack cao 1,4m:<br />
                    - Tổng 2500 plt<br />
                    - Vị trí plt đang sử dụng <span class="txtkho10 text-red"></span>, chiếm <span class="percent10 text-red"></span>%<br />
                </p>
            </div>
        </div>

        <div class="col-md-3 col-sm-6 ">
            <div class="bodywhite">
                <h2 class="bodywhite_h2">
                    <button class="button click-toggle" attrkho="11">KHO KHÔ 11</button></h2>
                <p class="bodywhite_p">
                    - Tổng diện tích: 800m&sup2;<br />
                    - 4 dãy rack<br />
                    - Tổng 800 plt<br />
                    - Vị trí plt đang sử dụng <span class="txtkho11 text-red"></span>, chiếm <span class="percent11 text-red"></span>%<br />
                </p>
            </div>
        </div>

        <div class="col-md-3 col-sm-6 ">
            <div class="bodywhite">
                <h2 class="bodywhite_h2">
                    <button class="button click-toggle" attrkho="12">Kho MÁT</button></h2>
                <p class="bodywhite_p">
                    - Diện tích: 800m&sup2;<br />
                    - 4 dãy rack<br />
                    - 3 tầng/ rack (MAX)<br />
                    - Tổng 234 vị trí rack<br />
                    - Tổng 500 plt<br />
                    - Vị trí plt đang sử dụng <span class="txtkho12 text-red"></span>, chiếm <span class="percent12 text-red"></span>%<br />
                </p>
            </div>
        </div>

        <div class="col-md-3 col-sm-6 ">
            <div class="bodywhite">
                <h2 class="bodywhite_h2">
                    <button class="button click-toggle" attrkho="13">KHO LẠNH</button></h2>
                <p class="bodywhite_p">
                    - Diện tích:  880&sup2;<br />
                    - Tổng 550 plt<br />
                    - Vị trí plt đang sử dụng <span class="txtkho13 text-red"></span>, chiếm  <span class="percent13 text-red"></span>%<br />
                </p>
            </div>
        </div>
    </div>
    <div class="toggle-warehouse">
        <div class="title-warehouse">
            <b class="titleKho"></b>
        </div>
        <div class="search-warehouse">
            <input type="text" name="name" value="" class="value-keyword" />
            <button class="btn btn-primary btn-timkiem" attrkho="">Tìm kiếm</button>
        </div>
        <div class="table-show" id="tbl-show">
            <table class="table table-bordered btn-kho" id="btn-kho">
                <thead>
                    <tr>
                        <td>STT</td>
                        <td>Tên Hàng</td>
                        <td>Mã Hàng</td>
                        <td>Chi Tiết</td>
                        <td>Số Kiện</td>
                        <td>Trọng Lượng</td>
                        <td>Vị Trí</td>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    </div>
    <p style="margin-top:110px">
        <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
           <i class="fas fa-plus"></i>
        </button>
    </p>
    <div class="collapse" id="collapseExample">
        <div class="card card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
        </div>
    </div>
    <%# Versioned.VersionedFiles.ScriptHelper.Render("js","js/custom/QuanLyKhoFM.js") %>
</asp:Content>
