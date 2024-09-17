<%@ Page Title="" Language="C#" MasterPageFile="~/KhaiBaoYTe/KhaiBaoYTe.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="ALSE.KhaiBaoYTe.Default" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js" type="text/javascript"></script>

    <link href='https://fonts.googleapis.com/css?family=Droid+Serif|Open+Sans:400,700' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/reset.css">
    <link href="css/Default.css?ver=20200401002" rel="stylesheet" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="div-ontop">
        <button type="button" class="btn btn-primary button-ontop" data-toggle="modal" data-target="#staticBackdrop">
            CLICK NHẬP KHAI BÁO Y TẾ
        </button>
    </div>
    <header>
        <h1>QUẢN LÝ KHAI BÁO Y TẾ</h1>
        <!-- Button trigger modal -->
    </header>

    <%--<section id="cd-timeline" class="cd-container">
        <div class="cd-timeline-block">
            <div class="cd-timeline-img cd-picture">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-picture.svg" alt="Picture">
            </div>
            <!-- cd-timeline-img -->

            <div class="cd-timeline-content">
                <h2>Title of section 1</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p>
                <a href="#0" class="cd-read-more">Read more</a>
                <span class="cd-date">Jan 14</span>
            </div>
            <!-- cd-timeline-content -->
        </div>
        <!-- cd-timeline-block -->

        <div class="cd-timeline-block">
            <div class="cd-timeline-img cd-movie">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-movie.svg" alt="Movie">
            </div>
            <!-- cd-timeline-img -->

            <div class="cd-timeline-content">
                <h2>Title of section 2</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde?</p>
                <a href="#0" class="cd-read-more">Read more</a>
                <span class="cd-date">Jan 18</span>
            </div>
            <!-- cd-timeline-content -->
        </div>
        <!-- cd-timeline-block -->

        <div class="cd-timeline-block">
            <div class="cd-timeline-img cd-picture">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-picture.svg" alt="Picture">
            </div>
            <!-- cd-timeline-img -->

            <div class="cd-timeline-content">
                <h2>Title of section 3</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, obcaecati, quisquam id molestias eaque asperiores voluptatibus cupiditate error assumenda delectus odit similique earum voluptatem doloremque dolorem ipsam quae rerum quis. Odit, itaque, deserunt corporis vero ipsum nisi eius odio natus ullam provident pariatur temporibus quia eos repellat consequuntur perferendis enim amet quae quasi repudiandae sed quod veniam dolore possimus rem voluptatum eveniet eligendi quis fugiat aliquam sunt similique aut adipisci.</p>
                <a href="#0" class="cd-read-more">Read more</a>
                <span class="cd-date">Jan 24</span>
            </div>
            <!-- cd-timeline-content -->
        </div>
        <!-- cd-timeline-block -->

        <div class="cd-timeline-block">
            <div class="cd-timeline-img cd-location">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Location">
            </div>
            <!-- cd-timeline-img -->

            <div class="cd-timeline-content">
                <h2>Title of section 4</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p>
                <a href="#0" class="cd-read-more">Read more</a>
                <span class="cd-date">Feb 14</span>
            </div>
            <!-- cd-timeline-content -->
        </div>
        <!-- cd-timeline-block -->

        <div class="cd-timeline-block">
            <div class="cd-timeline-img cd-location">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Location">
            </div>
            <!-- cd-timeline-img -->

            <div class="cd-timeline-content">
                <h2>Title of section 5</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum.</p>
                <a href="#0" class="cd-read-more">Read more</a>
                <span class="cd-date">Feb 18</span>
            </div>
            <!-- cd-timeline-content -->
        </div>
        <!-- cd-timeline-block -->

        <div class="cd-timeline-block">
            <div class="cd-timeline-img cd-movie">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-movie.svg" alt="Movie">
            </div>
            <!-- cd-timeline-img -->

            <div class="cd-timeline-content">
                <h2>Final Section</h2>
                <p>This is the content of the last section</p>
                <span class="cd-date">Feb 26</span>
            </div>
            <!-- cd-timeline-content -->
        </div>
        <!-- cd-timeline-block -->
    </section>--%>
    <!-- cd-timeline -->
    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Thông tin khai báo</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <%--  <h1>1.Thông tin người khai báo:</h1>--%>
                    <!-- One "tab" for each step in the form: -->
                    <div class="tab">
                        <h1>1.Thông tin người khai báo:</h1>
                        Họ tên:
                            <p>
                                <input id="inpHoTen" oninput="this.className = ''" name="ften">
                            </p>
                        Năm sinh:
                            <p>
                                <input id="inpNamSinh" oninput="this.className = ''" name="fnamsinh">
                            </p>
                        Giới tính:
                        <div>
                            <div class="custom-control custom-radio custom-control-inline">
                                <input type="radio" id="customRadioInline1" value="Nam" name="customRadioInline1" class="custom-control-input" checked>
                                <label class="custom-control-label" for="customRadioInline1">Nam</label>
                            </div>
                            <div class="custom-control custom-radio custom-control-inline">
                                <input type="radio" id="customRadioInline2" value="Nữ" name="customRadioInline1" class="custom-control-input">
                                <label class="custom-control-label" for="customRadioInline2">Nữ</label>
                            </div>
                            <div class="custom-control custom-radio custom-control-inline">
                                <input type="radio" id="customRadioInline3" value="Khác" name="customRadioInline1" class="custom-control-input">
                                <label class="custom-control-label" for="customRadioInline3">Khác</label>
                            </div>
                        </div>
                         Công ty (Viết tắt):
                            <p>
                                <input id="inpCongTy" oninput="this.className = ''" name="fcongty">
                            </p>
                        Chứng minh thư/Hộ chiếu:
                            <p>
                                <input id="inpCmtHoChieu" oninput="this.className = ''" name="fcmthochieu">
                            </p>
                        Quốc tịch:
                            <p>
                                <input id="inpQuocTich" oninput="this.className = ''" name="fquoctich">
                            </p>
                        Số điện thoại:
                            <p>
                                <input id="inpSoDienThoai" oninput="this.className = ''" name="fsodienthoai">
                            </p>
                        Địa chỉ thường trú (ghi cụ thể):
                            <p>
                                <input id="inpDiaChiThuongTru" oninput="this.className = ''" name="fdiachithuongtru">
                            </p>
                    </div>
                    <div class="tab">
                        <h1>2. Trong vòng 14 ngày qua Anh/Chị có thấy xuất hiện dấu hiệu nào sau đây không ?</h1>

                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="qDauHieuCheck1">
                            <label class="custom-control-label" for="qDauHieuCheck1">Sốt </label>
                        </div>
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="qDauHieuCheck2">
                            <label class="custom-control-label" for="qDauHieuCheck2">Ho</label>
                        </div>

                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="qDauHieuCheck3">
                            <label class="custom-control-label" for="qDauHieuCheck3">Khó thở</label>
                        </div>
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="qDauHieuCheck4">
                            <label class="custom-control-label" for="qDauHieuCheck4">Viêm phổi</label>
                        </div>
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="qDauHieuCheck5">
                            <label class="custom-control-label" for="qDauHieuCheck5">Đau họng</label>
                        </div>
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="qDauHieuCheck6">
                            <label class="custom-control-label" for="qDauHieuCheck6">Mệt mỏi</label>
                        </div>
                    </div>
                    <div class="tab">
                        <h1>3.	Trong vòng 14 ngày qua, Anh/Chị có tiếp xúc với: (*)</h1>
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="qTiepXucCheck1">
                            <label class="custom-control-label" for="qTiepXucCheck1">Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19</label>
                        </div>
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="qTiepXucCheck2">
                            <label class="custom-control-label" for="qTiepXucCheck2">Người từ nước có bệnh COVID-19</label>
                        </div>
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="qTiepXucCheck3">
                            <label class="custom-control-label" for="qTiepXucCheck3">Người có biểu hiện (Sốt, ho, khó thở , Viêm phổi)? </label>
                        </div>
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="qTiepXucCheck4">
                            <label class="custom-control-label" for="qTiepXucCheck4">Người đi về từ vùng dịch (Bạch Mai…)?</label>
                        </div>
                        <h2>(*) Nếu Có liên hệ ngay với đường dây nóng của bộ y tế (19009095 hoặc 19003228) để được nhận hỗ trợ </h2>
                    </div>
                    <div class="tab">
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="qCamKetCheck1">
                            <label class="custom-control-label" for="qCamKetCheck1">Tôi cam kết các thông tin khai báo là đúng với sự thật và đồng ý chia sử vị trí để cơ quan chức năng có thể hỗ trợ tốt nhất.</label>
                        </div>
                    </div>
                    <div style="overflow: auto; margin-top: 20px">
                        <div style="float: right;">
                            <button type="button" id="prevBtn" onclick="nextPrev(-1)">Quay lại</button>
                            <button type="button" id="nextBtn" onclick="nextPrev(1)">Tiếp</button>
                            <button type="button" id="btnSubmit">Gửi</button>
                        </div>
                    </div>
                    <!-- Circles which indicates the steps of the form: -->
                    <div style="text-align: center; margin-top: 40px;">
                        <span class="step"></span>
                        <span class="step"></span>
                        <span class="step"></span>
                        <span class="step"></span>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">ĐÓNG</button>
                   
                </div>
            </div>
        </div>
    </div>

    <script type="text/javascript" src="js/Default.js?ver=20200401002"></script>
</asp:Content>