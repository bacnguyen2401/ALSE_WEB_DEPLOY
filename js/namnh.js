/* File Created: January 16, 2015 */
////////////////// Query String ////////////////////////////////////////////////////////////
$(document).ready(function () {
    allQueryStrings = GetAllQueryString();
});
var allQueryStrings = {};

function GetAllQueryString() {
    var urlParams = {};
    (function () {
        var match,
		pl = /\+/g,  // Regex for replacing addition symbol with a space
		search = /([^&=]+)=?([^&]*)/g,
		decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
		query = window.location.search.substring(1);

        while (match = search.exec(query))
            urlParams[decode(match[1])] = decode(match[2]);
    })();
    return urlParams;
}

function GetQueryString(q) {
    try {
        var re = "";
        for (var query in allQueryStrings) {
            if (query.toLowerCase() == q.toLowerCase()) {
                re = allQueryStrings[query];
                break;
            }
        }
    } catch (e) { alert(e); }
    return re;
}

function AddQueryString(q, v, autoReload) {
    UpdateProperty(q, v);
    if (autoReload != false) {
        UpdateQueryString();
    }
}

function AddMultiQuery(q, v) {
    $(q).each(function (i) {
        var q1 = q[i];
        var v1 = v[i];
        UpdateProperty(q1, v1);
    })

    UpdateQueryString();
}

function RemoveQueryString(q, autoReload) {
    for (var query in allQueryStrings) {
        if (query.toLowerCase() == q.toLowerCase()) {
            delete allQueryStrings[query];
            break;
        }
    }
    if (autoReload != false) {
        UpdateQueryString();
    }
}

function RemoveMultiQuery(q) {
    $(q).each(function (i) {
        var q1 = q[i];
        for (var query in allQueryStrings) {
            if (query.toLowerCase() == q1.toLowerCase()) {
                delete allQueryStrings[query];
                break;
            }
        }
    })
    UpdateQueryString();
}


function DeleteAllQueryString() {
    allQueryStrings = {}
}

function RemoveAllQueryString(autoReload) {
    var url = self.location + "";
    url = url.split("?")[0];
    if (autoReload)
        self.location = url;
}

function GetOnlyUrl() {
    var url = self.location + "";
    if (url.indexOf("?") > -1)
        url = url.split("?")[0];
    return url;
}

function UpdateProperty(p, v) {
    var flag = true;
    for (var query in allQueryStrings) {
        if (query.toLowerCase() == p.toLowerCase()) {
            allQueryStrings[query] = v;
            flag = false;
            break;
        }
    }
    if (flag) {
        allQueryStrings[p] = v;
    }
}

function UpdateQueryString() {
    var url = "";
    for (var query in allQueryStrings) {
        url += "&" + query + "=" + allQueryStrings[query];
    }
    if (url != "")
        url = url.replace("&", "?");
    else {
        url = self.location + "";
        url = url.split("?")[0];
    }
    self.location = url;
}