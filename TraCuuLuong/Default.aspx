<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs"
    Inherits="ALSE.TraCuuLuong.Default" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="" />
    <meta name="author" content="" />

    <title>ALSE Tra cứu thông tin lương</title>

    <!-- Bootstrap Core CSS -->
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />

    <!-- MetisMenu CSS -->
    <link href="vendor/metisMenu/metisMenu.min.css" rel="stylesheet" />

    <!-- Custom CSS -->
    <link href="dist/css/sb-admin-2.css" rel="stylesheet" />

    <!-- Custom Fonts -->
    <link
        href="vendor/font-awesome/css/font-awesome.min.css"
        rel="stylesheet"
        type="text/css" />

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
    <style>
        #div-ketqua {
            display: none;
            margin-bottom: 30px;
        }
            /*#div-nhapthongtin{
            display: none;
        }*/
            #div-ketqua table tr td {
                padding: 4px;
            }

        .td-stt {
            width: 50px;
        }

        .td-loailuong {
            width: 40%;
            font-weight: bold;
        }

        .td-luong {
            text-align: right;
        }

        #td-TenNhanVien, #td-ChucDanhQuyChuan {
            text-align: center;
            font-weight: bold;
            color: blue;
        }

        #td-LuongChuyenKhoanLan1,
        #td-LuongConLaiDuocNhan {
            font-weight: bold;
            font-size: 110%;
            color: red;
        }

        .text-highlight {
            color: red;
            font-weight: bold;
        }

        #p-GhiChu {
            font-weight: bold;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col-md-4 col-md-offset-4">
                <h4>TRA CỨU THÔNG TIN LƯƠNG</h4>
                <div class=" panel panel-default" id="div-nhapthongtin">
                    <div class="panel-heading">
                        <h3 class="panel-title">Nhập thông tin tra cứu</h3>
                    </div>
                    <div class="panel-body">
                        <form role="form">
                            <fieldset>
                                <div class="form-group">
                                    <input id="taikhoan" class="form-control input-clear" placeholder="TÀI KHOẢN CARGO" name="taikhoan" type="text" autofocus />
                                </div>
                                <div class="form-group">
                                    <input id="matkhau" class="form-control input-clear" placeholder="Mật Khẩu" name="matkhau" type="password" />
                                </div>
                                <div class="form-group">
                                    <input id="cmt" class="form-control input-clear" placeholder="Chứng minh thư hoặc Căn cước công dân" name="cmt" type="text" />
                                </div>
                                <div class="form-group">
                                    <input id="ngaysinh" class="form-control input-clear" placeholder="Ngày/tháng/năm sinh " name="ngaysinh" type="text" />
                                </div>
                                <div class="form-group">
                                    <input id="maso" class="form-control input-clear" placeholder="Mã số bảo mật " name="maso" type="text" />
                                </div>
                                <%--
                  <div class="form-group">
                    <a>Sau khi tra cứu 1 lần, hệ thống sẽ khóa</a>
                  </div>
                                --%>
                                <!-- Change this to a button or input when using this as a form -->
                                <button
                                    type="button"
                                    id="btn-tracuu"
                                    class="btn btn-lg btn-success btn-block"
                                    data-target="#myModal">
                                    TRA CỨU
                                </button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div id="div-ketqua">
            <table class="table table-bordered">
                <tr>
                    <td>Tên nhân viên</td>
                    <td id="td-TenNhanVien"></td>
                </tr>
                <tr>
                    <td>Chức danh quy chuẩn</td>
                    <td id="td-ChucDanhQuyChuan"></td>
                </tr>
                <tr>
                    <td class="td-loailuong">Tổng thu nhập</td>
                    <td class="td-luong td-TongThuNhap"></td>
                </tr>
                <tr>
                    <td class="td-loailuong">Lương chuyển khoản lần 1</td>
                    <td class="td-luong" id="td-LuongChuyenKhoanLan1"></td>
                </tr>
                <tr>
                    <td class="td-loailuong">Lương còn lại được nhận</td>
                    <td class="td-luong" id="td-LuongConLaiDuocNhan"></td>
                </tr>
            </table>
            <ul class="nav nav-tabs">
                <li class="active"><a data-toggle="tab" href="#home">Chi tiết công</a></li>
                <li><a data-toggle="tab" href="#menu1">Chi tiết lương</a></li>
                <li><a data-toggle="tab" href="#menu2">Các khoản khấu trừ vào lương</a></li>
                <li><a data-toggle="tab" href="#menu3">Ghi chú</a></li>
            </ul>

            <div class="tab-content">
                <div id="home" class="tab-pane fade in active">
                    <table class="table table-bordered">
                        <tbody>
                            <tr>
                                <td class="td-stt">1 </td>
                                <td class="td-loailuong">Ngày công chuẩn</td>
                                <td class="td-luong" id="td-NgayCongChuan"></td>
                            </tr>
                            <tr>
                                <td class="td-stt">2 </td>
                                <td class="td-loailuong">Công thời gian</td>
                                <td class="td-luong" id="td-CongThoiGian"></td>
                            </tr>
                            <tr>
                                <td class="td-stt">3 </td>
                                <td class="td-loailuong">Công đào tạo</td>
                                <td class="td-luong" id="td-CongDaoTao"></td>
                            </tr>
                            <tr>
                                <td class="td-stt">4 </td>
                                <td class="td-loailuong">Công học việc</td>
                                <td class="td-luong" id="td-CongHocViec"></td>
                            </tr>
                            <tr>
                                <td class="td-stt">5 </td>
                                <td class="td-loailuong">Công thử việc</td>
                                <td class="td-luong" id="td-CongThuViec"></td>
                            </tr>
                            <tr>
                                <td class="td-stt">6 </td>
                                <td class="td-loailuong">Làm việc ngày nghỉ</td>
                                <td class="td-luong" id="td-LamViecNgayNghi"></td>
                            </tr>
                            <tr>
                                <td class="td-stt">7 </td>
                                <td class="td-loailuong">Làm việc ngày lễ</td>
                                <td class="td-luong" id="td-LamViecNgayLe"></td>
                            </tr>
                            <tr>
                                <td class="td-stt">8 </td>
                                <td class="td-loailuong">Hôi họp, công tác</td>
                                <td class="td-luong" id="td-HoiHopCongTac"></td>
                            </tr>
                            <tr>
                                <td class="td-stt">9 </td>
                                <td class="td-loailuong">Học tập</td>
                                <td class="td-luong" id="td-HocTap"></td>
                            </tr>
                            <tr>
                                <td class="td-stt">10</td>
                                <td class="td-loailuong">Nghỉ phép</td>
                                <td class="td-luong" id="td-NghiPhep"></td>
                            </tr>
                            <tr>
                                <td class="td-stt">11</td>
                                <td class="td-loailuong">Nghỉ bù</td>
                                <td class="td-luong" id="td-NghiBu"></td>
                            </tr>
                            <tr>
                                <td class="td-stt">12</td>
                                <td class="td-loailuong">Nghỉ lễ</td>
                                <td class="td-luong" id="td-NghiLe"></td>
                            </tr>
                            <tr>
                                <td class="td-stt">13</td>
                                <td class="td-loailuong">Nghỉ việc, ngừng việc hưởng 100% lương</td>
                                <td class="td-luong" id="td-NghiViec_NgungViecHuongLuong100"></td>
                            </tr>
                            <tr>
                                <td class="td-stt">14</td>
                                <td class="td-loailuong">Nghỉ không lương </td>
                                <td class="td-luong" id="td-NghiKhongLuong"></td>
                            </tr>
                            <tr>
                                <td class="td-stt">15</td>
                                <td class="td-loailuong">Tổng công ngày</td>
                                <td class="td-luong" id="td-TongCongNgay"></td>
                            </tr>
                            <tr>
                                <td class="td-stt">16</td>
                                <td class="td-loailuong">Tổng công đêm</td>
                                <td class="td-luong" id="td-TongCongDem"></td>
                            </tr>
                            <tr>
                                <td class="td-stt">17</td>
                                <td class="td-loailuong">Tổng công</td>
                                <td class="td-luong" id="td-TongCong"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div id="menu1" class="tab-pane fade">
                    <table class="table table-bordered">
                        <tbody>
                            <tr>
                                <td class="td-stt">18</td>
                                <td class="td-loailuong">Hệ số chất lượng</td>
                                <td class="td-luong" id="td-HeSoChatLuong"></td>
                            </tr>
                            <tr>
                                <td class="td-stt">19</td>
                                <td class="td-loailuong">Lương đóng bảo hiểm</td>
                                <td class="td-luong" id="td-LuongDongBaoHiem"></td>
                            </tr>
                            <tr>
                                <td class="td-stt">20</td>
                                <td class="td-loailuong">Lương thực tế</td>
                                <td class="td-luong" id="td-LuongThucTe"></td>
                            </tr>
                            <tr>
                                <td class="td-stt">21</td>
                                <td class="td-loailuong">Lương thêm giờ (Overtimes)</td>
                                <td class="td-luong" id="td-LuongThemGio"></td>
                            </tr>
                            <tr>
                                <td class="td-stt">22</td>
                                <td class="td-loailuong">Lương khác</td>
                                <td class="td-luong" id="td-LuongKhac"></td>
                            </tr>
                            <tr>
                                <td class="td-stt">23</td>
                                <td class="td-loailuong">Phụ cấp (ăn ca , đi lại, điện thoại, trách nhiệm, đắt đỏ...)</td>
                                <td class="td-luong" id="td-PhuCap"></td>
                            </tr>
                            <tr>
                                <td class="td-stt">24</td>
                                <td class="td-loailuong">Truy lĩnh</td>
                                <td class="td-luong" id="td-TruyLinh"></td>
                            </tr>
                            <tr>
                                <td class="td-stt">25</td>
                                <td class="td-loailuong">Truy thu</td>
                                <td class="td-luong" id="td-TruyThu"></td>
                            </tr>
                            <tr>
                                <td class="td-stt">26</td>
                                <td class="td-loailuong">Tổng thu nhập</td>
                                <td class="td-luong td-TongThuNhap"></td>
                            </tr>
                            <tr>
                                <td class="td-stt">27</td>
                                <td class="td-loailuong">Phụ cấp ăn ca chi tiền mặt</td>
                                <td class="td-luong" id="td-PhuCapAnCaChiTienMat"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div id="menu2" class="tab-pane fade">
                    <table class="table table-bordered">
                        <tbody>
                            <tr>
                                <td class="td-stt">28 </td>
                                <td class="td-loailuong">BHXH, BHYT, BHTN</td>
                                <td class="td-luong" id="td-KhauTruBaoHiem"></td>
                            </tr>
                            <tr>
                                <td class="td-stt">29 </td>
                                <td class="td-loailuong">Thuế TNCN</td>
                                <td class="td-luong" id="td-KhauTruThueTNCN"></td>
                            </tr>
                            <tr>
                                <td class="td-stt">30 </td>
                                <td class="td-loailuong">Đoàn phí</td>
                                <td class="td-luong" id="td-KhauTruDoanPhi"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div id="menu3" class="tab-pane fade">
                    <p id="p-GhiChu"></p>
                </div>
            </div>
        </div>
    </div>

    <!-- Button trigger modal -->
    <%--
    <button
      type="button"
      class="btn btn-primary btn-lg"
      data-toggle="modal"
      data-target="#myModal">
      Launch demo modal</button
    >--%>

    <!-- Modal -->
    <div
        class="modal fade"
        id="myModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title" id="myModalLabel">Modal title</h4>
                </div>
                <div class="modal-body"></div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">
                        Close
                    </button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
    <!-- jQuery -->
    <script src="vendor/jquery/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="vendor/bootstrap/js/bootstrap.min.js"></script>

    <!-- Metis Menu Plugin JavaScript -->
    <script src="vendor/metisMenu/metisMenu.min.js"></script>

    <!-- Custom Theme JavaScript -->
    <script src="dist/js/sb-admin-2.js"></script>
    <script src="js/default.js?ver=1"></script>
    <script></script>
</body>
</html>