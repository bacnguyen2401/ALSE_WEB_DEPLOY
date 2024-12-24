<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="QuanLyChiHoNCC.aspx.cs" Inherits="ALSE.QuanLyChiHoNCC" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <%# Versioned.VersionedFiles.ScriptHelper.Render("css","css/custom/QuanLyChiHoNCC.css") %>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div class="main-chiho-ncc">
        <div class="color-white text-align-center main-chiho-header">
            <h2>QUẢN LÝ CHI HỘ NHÀ CUNG CẤP</h2>
        </div>
    </div>

    <div class="chiho-button margin-bottom-5px">
        <button type="button" class="btn btn-warning btn-chiho" onclick="location.href='QuanLyChiHo.aspx'">Quản Lý Chi Hộ</button>
        <button type="button" class="btn btn-primary btn-chiho-ncc">Thêm nhà cung cấp</button>
    </div>

    <div class="main-chiho-ncc-body">
        <table class="table table-bordered" id="tbl-chiho-ncc">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NCC</th>
                    <th>Tên công ty</th>
                    <th>Số TK</th>
                    <th>Ngân hàng</th>
                    <th>Người hưởng thụ</th>
                    <th>Ký hiệu HĐ 1</th>
                    <th>Ký hiệu HĐ 2</th>
                    <th>Chức năng</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>


    <div class="modal fade" id="myModalViewChiHoNCC" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="h4-chiho-ncc-view-tieude"></h4>
                </div>
                <div class="modal-body">
                    <div id="div-chiho-group-button">
                        <div id="div-chiho-button-chucnangkhac">
                        </div>

                        <div id="div-chiho-button-luu">
                        </div>
                    </div>

                    <%--Grid--%>
                    <div class="grid">
                        <%--NCU , Tên công ty--%>
                        <div class="row">
                            <div class="form-group col-sm-6">
                                <div class="input-group div-chiho-group">
                                    <span class="input-group-addon" id="">NCC</span>
                                    <input type="text" class="form-control input-sm input-chiho-ncc-clear" id="input-chiho-ncc" />
                                </div>
                            </div>

                            <div class="form-group col-sm-6">
                                <div class="input-group div-chiho-group">
                                    <span class="input-group-addon" id="">Tên công ty</span>
                                    <input type="text" class="form-control input-sm input-chiho-ncc-clear" id="input-chiho-ncc-tencongty" />
                                </div>
                            </div>
                        </div>
                        <%--END NCU , Tên công ty --%>
                        <%-- Kí hiệu HĐ --%>
                        <div class="row">
                            <div class="form-group col-sm-6">
                                <div class="input-group div-chiho-group">
                                    <span class="input-group-addon" id="">Ký hiệu HĐ 1</span>
                                    <input type="text" class="form-control input-sm input-chiho-clear" id="input-chiho-ncc-kihieuhd1" />
                                </div>
                            </div>
                            <div class="form-group col-sm-6">
                                <div class="input-group div-chiho-group">
                                    <span class="input-group-addon" id="">Ký hiệu HĐ 2</span>
                                    <input type="text" class="form-control input-sm input-chiho-clear" id="input-chiho-ncc-kihieuhd2" />
                                </div>
                            </div>
                        </div>
                        <%--END Kí hiệu HĐ --%>

                        <%--Số tk , ngân hàng , người hưởng thụ --%>
                        <div class="row">
                            <div class="form-group col-sm-4">
                                <div class="input-group div-chiho-group">
                                    <span class="input-group-addon" id="">Số TK</span>
                                    <input type="text" class="form-control input-sm input-chiho-clear" id="input-chiho-ncc-sotk" />
                                </div>
                            </div>
                            <div class="form-group col-sm-4">
                                <div class="input-group div-chiho-group">
                                    <span class="input-group-addon" id="">Ngân hàng</span>
                                    <input type="text" class="form-control input-sm input-chiho-clear" id="input-chiho-ncc-nganhang" />
                                </div>
                            </div>
                            <div class="form-group col-sm-4">
                                <div class="input-group div-chiho-group">
                                    <span class="input-group-addon" id="">Người hưởng thụ</span>
                                    <input type="text" class="form-control input-sm input-chiho-clear" id="input-chiho-ncc-nguoihuongthu" />
                                </div>
                            </div>
                        </div>
                        <%--END Số tk , ngân hàng , người hưởng thụ  --%>
                    </div>
                    <%--END Grid--%>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success btn-luu-ncc">Lưu</button>
                        <button type="button" class="btn btn-warning btn-capnhat-ncc" attrId="">Cập nhật</button>
                        <button type="button" class="btn btn-default" data-dismiss="modal">Hủy</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <%# Versioned.VersionedFiles.ScriptHelper.Render("js","js/custom/QuanLyChiHoNCC.js") %>
</asp:Content>
