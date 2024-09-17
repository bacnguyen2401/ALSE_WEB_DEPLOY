<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="testPrint.aspx.cs" Inherits="ALSE.testPrint" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <style>
        /*@media print {
            tbody {
                page-break-inside: avoid;
            }

            thead {
                display: table-header-group;
                margin-top: 100px;
            }
        }*/
        .modal {
            overflow-y: auto;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <button type="button" class="btn btn-primary btn-modal">SHow modal</button>
    <!-- Modal -->
    <div class="modal fade in" id="modal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel1" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    Modal 1
                    <button type="button" class="btn-modal2">Modal 2</button>
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjfadsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                     adsfsadfasdlfkaokdfl;kasjdflkjalskdjfadsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                     adsfsadfasdlfkaokdfl;kasjdflkjalskdjfadsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                     adsfsadfasdlfkaokdfl;kasjdflkjalskdjfadsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                     adsfsadfasdlfkaokdfl;kasjdflkjalskdjfadsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                     adsfsadfasdlfkaokdfl;kasjdflkjalskdjfadsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                     adsfsadfasdlfkaokdfl;kasjdflkjalskdjfadsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                     adsfsadfasdlfkaokdfl;kasjdflkjalskdjfadsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                     adsfsadfasdlfkaokdfl;kasjdflkjalskdjfadsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                     adsfsadfasdlfkaokdfl;kasjdflkjalskdjfadsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                     adsfsadfasdlfkaokdfl;kasjdflkjalskdjfadsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                     adsfsadfasdlfkaokdfl;kasjdflkjalskdjfadsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                     adsfsadfasdlfkaokdfl;kasjdflkjalskdjfadsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                     adsfsadfasdlfkaokdfl;kasjdflkjalskdjfadsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                     adsfsadfasdlfkaokdfl;kasjdflkjalskdjfadsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf adsfsadfasdlfkaokdfl;kasjdflkjalskdjfadsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                     adsfsadfasdlfkaokdfl;kasjdflkjalskdjfadsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                     adsfsadfasdlfkaokdfl;kasjdflkjalskdjfadsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                     adsfsadfasdlfkaokdfl;kasjdflkjalskdjfadsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf

                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf

                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf

                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                    adsfsadfasdlfkaokdfl;kasjdflkjalskdjf
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade in" id="modal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel2" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel2">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    Modal 2
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
    <%# Versioned.VersionedFiles.ScriptHelper.Render("js","js/custom/testPrint.js") %>
</asp:Content>
