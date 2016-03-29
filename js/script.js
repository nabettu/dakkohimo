$(function() {

    $("#submit").on("click", function() {
        var answer = [];
        for (var i = 0; i < 3; i++) {
            answer.push($("#q" + i).is(":checked"));
        }
        console.log(answer);

        var result = [];
        for (var i = 0; i < _productData.length; i++) {
            var isMatch = true;
            console.log(_productData[i]);
            for (var j = 0; j < 3; j++) {
                if (answer[j] !== _productData[i][j]) {
                    isMatch = false;
                }
            }
            if (isMatch) {
                result.push(_productData[i]);
            }
        }

        $("#result").empty();
        for (var i = 0; i < result.length; i++) {
            console.log(result);
            var p = $("<p>" + result[i][3] + "</p>");
            $("#result").append(p);
        }
    });
});
