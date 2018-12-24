$.ajax({
        url: "/Home/Series", context: document.body,
        success: function (data) {
            var auxArr = [];
            $.each(data, function (key, value) {
                auxArr[key] = "<li><a href=\"/Products/Index?seriesId=" + value.Id + "\"><img src=\"" + value.Img + "\" style=\"width:180px;height:80px\"/></a><h5><a href=\"/Products/Index?seriesId=" + value.Id + "\">" + value.Name + "</a></h5></li>";
            });
            $('#productSeries').html(auxArr.join(''));
        },
    });
