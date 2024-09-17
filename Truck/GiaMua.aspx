<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="GiaMua.aspx.cs" Inherits="ALSE.Truck.GiaMua" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <%# Versioned.VersionedFiles.ScriptHelper.Render("css", "../css/custom/TruckGiaMua.css") %>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <div id="div-giamua">
        <h3>QUẢN LÝ GIÁ MUA</h3>
        <input type="button" value="< Tra cứu" class="btn btn-sm btn-warning" id="btn-giamua-tracuu" />
        <input type="button" value="Thêm mới" class="btn btn-sm btn-primary" id="btn-giamua-themmoi" />
        <table class="table table-bordered" id="tbl-giamua">
            <thead>
                <tr>
                    <%--<th>           Chức năng               </th>--%>
                    <th>Lane                          </th>
                     <th class="giamua-origin">Origin                         </th>
                    <th class="giamua-origin-city">Org City                    </th>
                    <th class="giamua-destination">Destination                    </th>
                    <th class="giamua-destination-city">Dest City               </th>
                      <th>Equipment Type                 </th>
                    <th class="giamua-sub">Sub                            </th>

                    <th>Mode                           </th>
                    <th>Service Type                   </th>
                   
                    <th>Service Group                  </th>
                  
                    <th>Lead time (m)                  </th>
                    <th>Vol                       </th>
                    <th>Weight (kg)                     </th>
                    <th>Dim of Truck box (m)     </th>
                    <th>Vendor code                </th>
                    <th>Trucking cost                  </th>
                    <th>Free detention (m)            </th>
                    <th>Detention cost (h)           </th>
                    <th class="giamua-maximum-dention-cost">Max detention cost (day)     </th>
                    <th>Handling cost                  </th>
                    <th>CD supervision cost         </th>
                    <th class="giamua-customs-supervise-cost-redcd">CD supervision cost (red)</th>
                    <th>Loading/Unloading cost (ton)       </th>
                    <th class="giamua-remark">Remark                         </th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>

    <%------------------%>
    <div class="modal fade modal-fullscreen" id="myModalExcel" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalExcel-Title">Thêm mới</h4>
                </div>
                <div class="modal-body">
                    <div class="div-modal-button">
                        <button type="button" id="btn-myModalExcel-luu" class="btn btn-primary btn-sm">Lưu</button>
                        <button type="button" id="btn-myModalExcel-xoa" class="btn btn-danger btn-sm">Xóa</button>
                        <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">Đóng</button>
                    </div>
                    <div id="spreadsheet" class="spreadsheet-width-auto"></div>

                    <div id="div-modal-edit">
                    </div>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>
    <%------------------%>

    <%# Versioned.VersionedFiles.ScriptHelper.Render("js", "../js/custom/TruckGiaMua.js") %>
</asp:Content>