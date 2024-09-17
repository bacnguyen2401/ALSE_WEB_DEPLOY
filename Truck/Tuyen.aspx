<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Tuyen.aspx.cs" Inherits="ALSE.Truck.Tuyen" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <%# Versioned.VersionedFiles.ScriptHelper.Render("css", "../css/custom/TruckTuyen.css") %>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div class="margin-bottom-5px">
        <input type="button" class="btn btn-sm btn-primary" name="" value="Thêm Tuyến" id="btn-them" />
    </div>
    <div class="padding-5px-10px background-color-white">
        <h3>QUẢN LÝ TUYẾN</h3>
        <table class="table table-bordered" id="tbl-tuyen">
            <thead>
                <tr>
                    
                    <td rowspan="2">Tuyến</td>
                    <td colspan="2">Điểm Xuất Phát</td>
                    <td colspan="2">Điểm đến</td>
                    <td rowspan="2">Ghi chú</td>
                    <td rowspan="2" colspan="2">Công cụ</td>
                </tr>
                <tr>
                    <td>Thành Phố</td>
                    <td>Kho</td>
                    <td>Thành Phố</td>
                    <td>Kho</td>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>
    <div class="modal fade" id="myModalViewTuyen" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="h4-tuyen-view-tieude"></h4>
                </div>
                <div class="modal-body">
                    <%--Grid--%>
                    <div class="grid">
                        <div class="row">
                            <div class="form-group col-sm-4 has-success">
                                <input type="button" tuyen-id="0" value="Lưu" class="btn btn-sm btn-primary" id="btn-luu" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-sm-4 has-success">
                                <div class="input-group div-tuyen-group">
                                    <span class="input-group-addon " id="">Mã Tuyến</span>
                                    <input type="text" class="form-control input-sm " id="input-tuyen" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-sm-4 has-success">
                                <div class="input-group div-tuyen-group">
                                    <span class="input-group-addon " id="">Thành Phố Xuất Phát</span>
                                    <input type="text" class="form-control input-sm " id="input-origincity" />
                                </div>
                            </div>
                            <div class="form-group col-sm-8 has-success">
                                <div class="input-group div-tuyen-group">
                                    <span class="input-group-addon " id="">Điểm Xuất Phát</span>
                                    <input type="text" class="form-control input-sm " id="input-origin" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-sm-4 has-success">
                                <div class="input-group div-tuyen-group">
                                    <span class="input-group-addon " id="">Thành Phố Đến</span>
                                    <input type="text" class="form-control input-sm " id="input-destinationcity" />
                                </div>
                            </div>
                            <div class="form-group col-sm-8 has-success">
                                <div class="input-group div-tuyen-group">
                                    <span class="input-group-addon " id="">Điểm Đến</span>
                                    <input type="text" class="form-control input-sm " id="input-destination" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-sm-12 has-success">
                                <div class="input-group div-tuyen-group">
                                    <span class="input-group-addon " id="">Ghi Chú</span>
                                    <input type="text" class="form-control input-sm " id="input-ghichu" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <%--END Grid--%>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Hủy</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <%# Versioned.VersionedFiles.ScriptHelper.Render("js", "../js/custom/TruckTuyen.js") %>
</asp:Content>