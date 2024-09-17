
function genTable(jsonTable) {
    var returnTable = "";
    returnTable += "<table id=\"" + jsonTable.id + "\" class=\"" + jsonTable.class + "\" ";
    returnTable += fncReAttr(jsonTable.attr);
    returnTable += ">";
    if (jsonTable.showThead == 1) {
        returnTable += "<thead>";
        returnTable += fncReTr(jsonTable.tHead[0].tr);
        returnTable += "</thead>";
    }
    returnTable += "<tbody>";
    returnTable += fncReTr(jsonTable.tBody[0].tr);
    returnTable += "</tbody>";
    returnTable += "</table>";
    return returnTable;
}
function fncReAttr(jsonAttr) {
    var reAttr = "";
    var tempAttr = "";
    $.each(jsonAttr, function (key, attr) {
        tempAttr = Object.keys(attr)[0]
        reAttr += tempAttr + "=\"" + attr[tempAttr] + "\" ";

    })
    return reAttr;
}
function fncReTr(jsonTr) {
    var reTr = "";
    $.each(jsonTr, function (j, tr) {
        reTr += "<tr id=\"" + tr.id + "\" class=\"" + tr.class + "\" ";
        reTr += fncReAttr(tr.attr);
        reTr += ">";
        $.each(tr.td, function (k, td) {
            reTr += "<td id=\"" + td.id + "\" class=\"" + td.class + "\" colspan=\"" + td.colspan + "\" rowspan=\"" + td.rowspan + "\" ";
            reTr += fncReAttr(td.attr);
            reTr += ">";
            reTr += td.value;
            reTr += "</td>";
        })
        reTr += "</tr>";
    })
    return reTr;
}
