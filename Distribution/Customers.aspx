<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Customers.aspx.cs" Inherits="ALSE.Distribution.Customers" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <%# Versioned.VersionedFiles.ScriptHelper.Render("css","../css/custom/Distribution-Customers.css") %>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div>
        <p class="p-pagename">Customers Manager</p>
    </div>
    <div>
        <div class="row">

            <div class="form-group col-sm-2">

                <button type="button" id="btn-customers-them" class="btn btn-sm btn-warning">Thêm</button>
            </div>
        </div>
    </div>
    <div class="div-data">
        <table class="table table-bordered table-responsive" id="tbl-customers">
            <thead>
                <tr>

                    <td>Customer Code          </td>
                    <td>Customer Name          </td>
                    <td>Quaility Order         </td>
                    <td>Quaility Promotion     </td>
                    <td>Total Cbm              </td>
                    <td>Chức năng            </td>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>
     <%------------------%>
    <!-- Modal -->
    <div class="modal fade" id="myModalUpdateCustomer" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="">Update Customer: <span id="span-customers-tilte" class="color-red font-weight-bold"></span></h4>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="form-group col-sm-12">
                            <div class="input-group ">
                                <span class="input-group-addon" id="">Customer Name</span>
                                <input type="text" class="form-control input-sm input-customers  input-kehoach-clear" id="input-customers-CustomerName" />
                            </div>
                        </div>
             
                    </div>
                    <div class="row">
                        <div class="form-group col-sm-12">
                            <div class="input-group ">
                                <span class="input-group-addon" id="">House No</span>
                                <input type="text" class="form-control input-sm input-customers  input-kehoach-clear" id="input-customers-HouseNo" />
                            </div>
                        </div>             
                    </div>
                    <div class="row">
                        <div class="form-group col-sm-12">
                            <div class="input-group ">
                                <span class="input-group-addon" id="">Street</span>
                                <input type="text" class="form-control input-sm input-customers  input-kehoach-clear" id="input-customers-Street" />
                            </div>
                        </div>             
                    </div>
                    <div class="row">
                        <div class="form-group col-sm-12">
                            <div class="input-group ">
                                <span class="input-group-addon" id="">Disrict</span>
                                <input type="text" class="form-control input-sm input-customers  input-kehoach-clear" id="input-customers-Disrict" />
                            </div>
                        </div>             
                    </div>
                    <div class="row">
                        <div class="form-group col-sm-12">
                            <div class="input-group ">
                                <span class="input-group-addon" id="">Address</span>
                                <input type="text" class="form-control input-sm input-customers  input-kehoach-clear" id="input-customers-Address" />
                            </div>
                        </div>             
                    </div>
                    <div class="row">
                        <div class="form-group col-sm-12">
                            <div class="input-group ">
                                <span class="input-group-addon" id="">GroupCustomer</span>
                                <input type="text" class="form-control input-sm input-customers  input-kehoach-clear" id="input-customers-GroupCustomer" />
                            </div>
                        </div>             
                    </div>
                    <div class="row">
                        <div class="form-group col-sm-12">
                            <div class="input-group ">
                                <span class="input-group-addon" id="">Remark</span>
                                <input type="text" class="form-control input-sm input-customers  input-kehoach-clear" id="input-customers-Remark" />
                            </div>
                        </div>             
                    </div>
                    <div class="row">
                        <div class="form-group col-sm-12">
                            <div class="input-group ">
                                <span class="input-group-addon" id="">Route</span>
                                <input type="text" class="form-control input-sm input-customers  input-kehoach-clear" id="input-customers-Route" />
                            </div>
                        </div>             
                    </div>
                    <div class="row">
                        <div class="form-group col-sm-12">
                            <div class="input-group ">
                                <span class="input-group-addon" id="">City</span>
                                <input type="text" class="form-control input-sm input-customers  input-kehoach-clear" id="input-customers-City" />
                            </div>
                        </div>             
                    </div>
                    <div class="row">
                        <div class="form-group col-sm-12">
                            <div class="input-group ">
                                <span class="input-group-addon" id="">Vung</span>
                                <input type="text" class="form-control input-sm input-customers  input-kehoach-clear" id="input-customers-Vung" />
                            </div>
                        </div>             
                    </div>
                    <div class="row">
                        <div class="form-group col-sm-12">
                            <div class="input-group ">
                                <span class="input-group-addon" id="">ThanhPhoTinh</span>
                                <input type="text" class="form-control input-sm input-customers  input-kehoach-clear" id="input-customers-ThanhPhoTinh" />
                            </div>
                        </div>             
                    </div>
                    <div class="row">
                        <div class="form-group col-sm-12">
                            <div class="input-group ">
                                <span class="input-group-addon" id="">QuanHuyen</span>
                                <input type="text" class="form-control input-sm input-customers  input-kehoach-clear" id="input-customers-QuanHuyen" />
                            </div>
                        </div>             
                    </div>
                    <div class="row">
                        <div class="form-group col-sm-12">
                            <div class="input-group ">
                                <span class="input-group-addon" id="">QuocLo</span>
                                <input type="text" class="form-control input-sm input-customers  input-kehoach-clear" id="input-customers-QuocLo" />
                            </div>
                        </div>             
                    </div>
                    <div class="row">
                        <div class="form-group col-sm-12">
                            <div class="input-group ">
                                <span class="input-group-addon" id="">CachDC</span>
                                <input type="text" class="form-control input-sm input-customers  input-kehoach-clear" id="input-customers-CachDC" />
                            </div>
                        </div>             
                    </div>
                </div>
                <div class="modal-footer">

                    <button type="button" class="btn btn-default" id="btn-customers-Update" CustomerCode="">Update</button>
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    <%------------------%>
    <%# Versioned.VersionedFiles.ScriptHelper.Render("js","../js/custom/Distribution-Customers.js") %>
</asp:Content>