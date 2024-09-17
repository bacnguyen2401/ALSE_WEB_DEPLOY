<%@ Page Title="QUERY LIST FFM" Language="C#" MasterPageFile="~/Site.Master" EnableViewState="false" AutoEventWireup="true" CodeBehind="QueryListFFM.aspx.cs" Inherits="ALSE.QueryListFFM" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <style type="text/css">
        #div1 {
            padding: 5px 5px 5px 5px;
            background-color: white;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div id="div1">

        <textarea rows="4" cols="50" id="ta1" class="form-control" ></textarea>
        <br />
        <button id="btn1" class="bu btn btn-success" value="0">
            Convert
        </button>
        <button id="btn2" class="bu btn btn-info" value ="1">
            Convert & Group
        </button>
        <br />
        <p>
            Query result
        </p>
        <br />
        <table id="tbl1" class="table table-bordered">
            <thead>
                <tr>
                    <td>No</td>
                    <td>Mawb</td>
                    <td>Dest</td>
                    <td>Pcs</td>
                    <td>Gw</td>
                    <td>Vol</td>
                    <td>Name</td>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>
    <script type="text/javascript">
        var append = "";
        var no = 0;
        $(document).ready(function () { // start document ready

            var ta = "";
            var ffmdata ;
            $("#div1").on("click", ".bu", function () {
                btn_click($(this), $(this).attr("value"));
                return false;
            })
            
            

        })// end document ready



        function btn_click(thisx, group) { // start function btn_click

            var jsonData;
            $("#tbl1 tbody").empty();
            ta = $("#ta1").val();
            if ( ta == "") {
                alert("Please input data!")
                return false;
            }
            $("#ta1").val(""); // clear text area
            ffmdata = {
                fmm: []
            };
            var ta_split = ta.trim().split("\n");
            
            var temp_spl1;
            var temp_spl2;
            var temp_spl3;
            var mawb;
            var dest;
            var pgv;
            var name;
            
            var arr = ["", "", ""]; // pcs, gw, vol
            var num_r = "";
            var ffmdata_group;
            no = 0;
            append = "";
            for (var i = 0; i < ta_split.length; i++) { // for begin split
                temp_spl1 = ta_split[i];
                arr = ["", "", ""];
                if (temp_spl1.length > 32 && isNaN(temp_spl1.charAt(0)) == false) { // if
                    no += 1;
                    temp_spl2 = temp_spl1.split("/");

                    mawb = temp_spl2[0].substring(0, (temp_spl2[0].length - 6));
                    dest = temp_spl2[0].substring((temp_spl2[0].length - 3), temp_spl2[0].length);
                    pgv = temp_spl2[1].replace("MC", "Y") + "Z";
                    char = pgv.match(/[A-Z]/gi);
                    
                    for (var ch = 0; ch < (char.length - 1) ; ch++) {
                        num_r = pgv.substring(pgv.lastIndexOf(char[ch]) + 1, pgv.lastIndexOf(char[ch + 1]));
                        switch (char[ch]) {
                            case "T":  // pcs
                                arr[0] = num_r;
                                break;
                            case "K": // gw
                                arr[1] = num_r;
                                break;
                            case "Y": // vol
                                arr[2] = num_r;
                                break;

                        }

                    }

                    name = temp_spl2[2];
                    append += "<tr>";
                    append += "<td>" + no + "</td>";
                    append += "<td>" + mawb + "</td>";
                    append += "<td>" + dest + "</td>";
                    append += "<td>" + arr[0] + "</td>";
                    append += "<td>" + arr[1] + "</td>";
                    append += "<td>" + arr[2] + "</td>";
                    append += "<td>" + name + "</td>";

                    append += "</tr>";

                    // push data to json
                    ffmdata.fmm.push({
                        "mawb": mawb,
                        "dest": dest,
                        "pcs": arr[0],
                        "gw": arr[1],
                        "vol": arr[2],
                        "name": name
                    })
                    // end push data to json

                }// end if
            } // end for

            
            if (group == 1) {
                ffmdata_group = ({});
                no = 0;

                var sumCols = ["mawb", "dest", "pcs", "gw", "vol", "name"];

                var len_obj = 0;
                $.each(ffmdata, function (index, obj) {

                    $.each(this, function (index, obj) {
                        var g_mawb = obj["mawb"];
                        var g_dest = obj["dest"];
                        var g_name = obj["name"];
                        if (!ffmdata_group[obj['mawb']]) {
                            ffmdata_group[obj['mawb']] = {};
                        }
                        $.each(sumCols, function (index, col) {
                            if (!ffmdata_group[obj['mawb']][col]) {
                                if (col == "mawb" || col == "dest" || col == "name") {
                                    ffmdata_group[obj['mawb']][col] = obj[col];
                                } else {
                                    ffmdata_group[obj['mawb']][col] = 0;
                                }
                            }
                            var val;
                            if (col == "mawb" || col == "dest" || col == "name") {
                                val = obj[col];
                                if (!isNaN(val)) {
                                    ffmdata_group[obj['mawb']][col] = val;
                                }

                            } else {
                                val = parseFloat(obj[col]);
                                if (!isNaN(val)) {
                                    ffmdata_group[obj['mawb']][col] += val;
                                }
                            }


                        })


                    })

                })
                append = "";
                $.each(ffmdata_group, function (index, obj) {

                    no += 1;
                    append += "<tr>";
                    append += "<td>" + no  + "</td>";
                    append += "<td>" + obj['mawb'] + "</td>";
                    append += "<td>" + obj['dest'] + "</td>";
                    append += "<td>" + obj['pcs'] + "</td>";
                    append += "<td>" + (obj['gw']).toFixed(2) + "</td>";
                    append += "<td>" + (obj['vol']).toFixed(2) + "</td>";
                    append += "<td>" + obj['name'] + "</td>";

                    append += "</tr>";



                })
            }
            


            

            $("#tbl1 tbody").append(append);


        }// end function btn_click
    </script>
</asp:Content>