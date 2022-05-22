$(function() {
    $("#call").submit(function() {
        var data = "a=5&b=6&c=7";
        $.ajax({
            url: "PHP/addLocation.php",
            data: data, 
            success: function(html) {
                
                alert(html); // alert the output from the PHP Script
            }
        });
        return false;
    });
});