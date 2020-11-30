var loadCommon = (activeNav) => {
    window.onload = function() {
        $.get("common/navbar.html", function(data) {
            $("nav").html(data);
            $(activeNav).addClass("nav-active");
        });
        $.get("common/footer.html", function(data) {
            $("footer").html(data);
        });
    }
}