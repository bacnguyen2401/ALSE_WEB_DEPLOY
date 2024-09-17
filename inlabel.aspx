<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="inlabel.aspx.cs" Inherits="ALSE.inlabel" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <%--<script  type="text/javascript"  src="JsBarcode.all.min.js"></script>--%>
    <%# Versioned.VersionedFiles.ScriptHelper.Render("css","css/custom/inlabel.css") %>
    <%--<link href='https://fonts.googleapis.com/css?family=Libre Barcode 39' rel='stylesheet'>--%>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
   <%-- <form id="uploadForm" enctype="multipart/form-data">
        <label for="pdfFile">Select PDF file:</label>
        <input type="file" id="pdfFile" name="pdfFile" accept=".pdf" required />
        <input type="button" value="Upload and Extract Data" id="uploadPDF" />
    </form>--%>
        <%--onclick="uploadPdf()--%>
     <asp:Button ID="btnPrint" runat="server" Text="Print" OnClick="PrintButton_Click" />
    <%--<asp:Label ID="lblResult" runat="server" Text=""></asp:Label>--%>

    <%--<input type="file" name="Upload" accept = "application/pdf,.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />--%>

    <%-- In tem DHL --%>
    <%-- <div class="pageDHL ">
        <div class="mainDHL">
            <div class="temDHL ">
                <div class="airLine ">
                    <span>Airline</span>
                    <span></span>
                </div>
                <div class="airLine__hangbay">
                    ;
                    <img class="airLineImg " src="./images/OPS/back-image.jpg " alt=" " />
                    <span class="airLine__hangbay-name">QUATA AIRLINE</span>
                </div>
                <div class="barcode__MAWB ">
                    <span><svg  class= "barcode barcodeDHL " jsbarcode-format= "CODE128 " jsbarcode-value= "" + 18095874125 + 00001 + " "></svg></span>
                </div>
                <div class="mawbNumber ">
                    <div class="mawbNumber-title fontweight600 ">Master Air Waybill Number</div>
                    <div class="mawbNumber-MAWB ">
                        180-95874125
                    </div>
                </div>
                <div class="disMawb ">
                    <div class="disMawb__destination ">
                        <div class="disMawb__destination-title fontweight600 ">Destination</div>
                        <div class="disMawb__destination-name "><span class="disMawb__destination-name_span ">" + DES + "</span></div>
                    </div>
                    <div class="disMawb__totalPriece ">
                        <div class="disMawb__totalPriece-title fontweight600 ">Total No of Pieces</div>
                        <div class="disMawb__totalPriece-name "><span class="disMawb__totalPriece_span ">" + 6 + "</span></div>
                    </div>
                </div>
                <div class="barcode__MAWB ">
                    <span><svg class= "barcode barcodeDHL " jsbarcode-format= "CODE128 " jsbarcode-value= "H" +  45T52215455 + "+Y" + 0001 + "+" + " "></svg></span>
                </div>
                <div class="mawbNumber ">
                    <div class="mawbNumber-title fontweight600 ">House Air Waybill Number</div>
                    <div class="mawbNumber-MAWB ">
                        45T52215455
                    </div>
                </div>
                <div class="dis__HAWB ">
                    <div class="dis__HAWB-origin">
                        <div class="dis__HAWB-origin-title fontweight600 ">Origin</div>
                        <div class="dis__HAWB-origin-name ">HAN</div>
                    </div>
                    <div class="dis__HAWB-destination ">
                        <div class="dis__HAWB-destination-title fontweight600 ">Destination</div>
                        <div class="dis__HAWB-destination-name ">SIN</div>
                    </div>
                    <div class="dis__HAWB-totalHAWB ">
                        <div class="dis__HAWB-totalHAWB-title fontweight600 ">Total No .of HAWB Pieces</div>
                        <div class="dis__HAWB-totalHAWB-name ">123</div>
                    </div>
                </div>
                <div class="footer">
                    <div class="footer__Service">
                        <div class="footer__Service-type">
                            <span class="fontweight600 ">Service Type</span>
                            <span></span>
                        </div>
                        <div class="footer__Service-date ">
                            <span></span>
                        </div>
                    </div>
                    <div class="footer__Img ">
                        <img src="./images/OPS/DHL.png " alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>--%>
    <%-- End in tem DHL --%>


    <%-- <div id="inRound">

    </div>--%>
    <%--<div class="mainEI">
        <div class="headerEI">
            <span class="headerEI-airline">AIRLINE</span>
            <span class="headerEI-name-airline">ETIHAD AIRWAYS</span>
        </div>
        <div class="barcode-mawbEI">
             <span><svg class="barcode barcodecss" jsbarcode-format="CODE39" jsbarcode-value="607-00000001"></svg></span>
        </div>
        <div class="masterEI">
            <span class="masterEI-title">MASTER WAYBILL NO.</span>
            <span class="masterEI-mawb">607-00000001</span>
        </div>
        <div class="masterEI-des-price">
            <div class="masterEI-des moment-master-house">
                <span>MASTER DEST.</span>
                <span class="font-size24">AMS</span>
            </div>
            <div class="masterEI-price moment-master-house">
                <span>MASTER PIECES.</span>
                <span class="font-size24">1</span>
            </div>
        </div>
        <div class="barcode-hawbEI">
             <span><svg class="barcode barcodecss" jsbarcode-format="CODE39" jsbarcode-value="45T0012135+0001"></svg></span>
        </div>
        <div class="masterEI">
            <span class="masterEI-title">HOUSE WAYBILL NO.</span>
            <span class="masterEI-mawb">45T0012135</span>
        </div>
      
        <div class="masterEI-house-desc-price">
            <div class="house-des moment-master-house">
                <span>HOUSE DEST.</span>
                <span class="font-size24">AMS</span>
            </div>
            <div class="house-prices moment-master-house">
                <span>HOUSE PIECES.</span>
                <span class="font-size24">1</span>
            </div>
        </div>
    </div>--%>
    <%-- <div class="mainDHL">
        <div class="temDHL">
            <div class="airLine">
                <span>Airline</span>
                <span>QR8953/28NOV</span>
            </div>
            <div class="airLine__hangbay">
                <span class="airLine__hangbay-name">QATAR AIRWAYS</span>
            </div>
            <div class="barcode__MAWB">
                <span>1577068252200001</span>
            </div>
        </div>
    </div>--%>
    <%-- <div class="phieucan">
        <div class="shipper">
            <div class="shipper_one">
                DHL GLOBAL FORWARDING VN CORP
            </div>
            <div class="shipper_two">
                18TH FLT 117 TRAN DUY HUNG  CAU GIAY DIST, VN
            </div>
        </div>

        <div class="mst">
            <div class="mst_chungnhan">
                chứng nhận
            </div>
            <div class="mst_mst">
                305707643001
            </div>
        </div>

        <div class="cnee">
            <div class="cnee_one">
                YUSEN LOGISTICS (UK) LIMITED – MILTON KEYNES
            </div>
            <div class="cnee_two">
                APPLEBY LODGE WAY, SYWELL ROAD, WELLINGBOROUGH, NN8 6BS UNITED KINGDOM, MK7 8BN TEL: 44(0) 1908 364745/ 748 FAX: 44(0) 1908 374992
            </div>
        </div>

        <div class="mawbfltplt">
            <div  class="mawbfltplt_mawb">
                17668130381
            </div>
            <div class="mawbfltplt_flt">
                EK0395/20-Jan-2022 
            </div>
            <div class="mawbfltplt_plt">
                8
            </div>
        </div>

        <div class="han">
            <div class="han_han">
                HAN
            </div>
            <div class="han_destmawb">
                LIS
            </div>
            <div class="han_dest">
                HAN-DWC-LIS 
            </div>
            <div class="han_package">
                WOODEN PLT
            </div>
        </div>

        <div class="commondity">
            <div class="commondity_title">
                MOBILE PHONES
            </div>
        </div>

        <div class="handling_info">
            <div class="handling_info-title">
                LITHIUM ION BATTERIES IN COMPLIANCE WITH SECTION IB OF PI965
            </div>
        </div>--%>

    <%-- Nếu là ALSC thì thêm 2 dòng note này --%>
    <%--<div class="notealsc">
            <div class="notealsc_one">
                This shipment does not contain all types of Vivo shipments"
                containing batteries(Including mobile phone)
            </div>
            <div class="notealsc_two">
                This shipment does not contain used or refurbished
                Lithium Battery Powered Equipment / Battery Power Vehicles
            </div>
        </div>

        <div class="remark_sli">
            <div class="remark_sli-title">
                This shipment does not contain used or refurbished Lithium Battery Powered Equipment/Battery Powered Vehicles; This
                shipment does not contain all types of Vivo shipments containing batteries (Including mobile phone)
            </div>
        </div>
        
        <div class="fullname">
            Nguyễn Quang Bắc
        </div>
    </div>--%>
    <%--<div class="phieucanACSV">
        <div class="mawbNo">
            <div class="mawbNo_sodau">
                180
            </div>
            <div class="mawbNo_socuoi">
                987774465
            </div>
        </div>

        <div class="Airport">   
            <div class="Airport-departure">
                HAN
            </div>
             <div class="Airport-destination">
                SVO
            </div>
            <div class="Airport-routing">
                HAN-ICN-SVO
            </div>
        </div>

        <div class="information">
            <div class="information-pieces">
                10
            </div>
            <div class="information-grossweight">
                100
            </div>
            <div class="information-package">
                WOODEN PLT
            </div>
        </div>

        <div class="commodity">
            <div class="commodity-title">
                MOBILE PHONE
            </div>
        </div>

        <div class="shipperadd">
            <div class="shipperadd_one">
                  DHL GLOBAL FORWARDING VN CORP
            </div>
            <div class="shipperadd_two">
                  18TH FLT 117 TRAN DUY HUNG  CAU GIAY DIST, VN
            </div>
             <div class="shipperadd_mst">
                  11111111111111
            </div>
        </div>

        <div class="cneeadd">
             <div class="cneeadd_one">
                YUSEN LOGISTICS (UK) LIMITED – MILTON KEYNES
            </div>
            <div class="cneeadd_two">
                APPLEBY LODGE WAY, SYWELL ROAD, WELLINGBOROUGH, NN8 6BS UNITED KINGDOM, MK7 8BN TEL: 44(0) 1908 364745/ 748 FAX: 44(0) 1908 374992
            </div>
        </div>

        <div class="handlinginfo">
            <div class="handlinginfo-title">
                LITHIUM ION BATTERIES IN COMPLIANCE WITH SECTION IB OF PI965
            </div>
        </div>

        <div class="remarksli">
            <div class="remarksli-title">
                This shipment does not contain used or refurbished Lithium Battery Powered Equipment/Battery Powered Vehicles; This
                shipment does not contain all types of Vivo shipments containing batteries (Including mobile phone)
            </div>
            <div class="remarksli-title2">

            </div>
        </div>

        <div class="fullnameACS">
            Nguyễn Quang Bắc
        </div>
    </div>--%>


    <%# Versioned.VersionedFiles.ScriptHelper.Render("js","../js/custom/inlabel.js") %>
</asp:Content>
