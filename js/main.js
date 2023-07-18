$(".form-open").click(function() {
    $(".main__banner").addClass("none");
    $(".main__form").removeClass("none");
});
$(".btn_next").click(function() {
    var valattr = $(".form_block.active").attr('data-number');
    let num = Number(valattr);
    let blockNum = num+1;
    
    $(".lines .line.active").removeClass("active");
    $(".lines .line"+blockNum).addClass("active");
    $(".lines .line.active").prevAll().addClass("active");

    $(".form_block.active").removeClass("active");
    $(".form_block"+blockNum).addClass("active");
    if(blockNum == 2) {
        $(".form_buttons .btn_prev").removeClass("none");
    }
    
    if(blockNum == 2) {
        $(".step").removeClass("active");
        $(".step2").addClass("active");
        $(".step2").prevAll().addClass("done");
    }
    if(blockNum == 3) {
        $(".step").removeClass("active");
        $(".step3").addClass("active");
        $(".step3").prevAll().addClass("done");
    }
    if(blockNum == 4) {
        $(".step").removeClass("active");
        $(".step4").addClass("active");
        $(".step4").prevAll().addClass("done");
    }
    if(blockNum == 5) {
        $(".step").removeClass("active");
        $(".step5").addClass("active");
        $(".step5").prevAll().addClass("done");
        $(".form_buttons").addClass("none");
        $(".lines .line").addClass("active");
    }
});

$(".step1").click(function() {
    $(".step").removeClass("active");
    $(".step").removeClass("done");
    $(".form_block").removeClass("active");
    $(this).addClass("active");
    $(".form_block1").addClass("active");
});
$(".step2").click(function() {
    $(".step").removeClass("active");
    $(".step").removeClass("done");
    $(".form_block").removeClass("active");
    $(".step1").addClass("done");
    $(this).addClass("active");
    $(".form_block2").addClass("active");
});
$(".step3").click(function() {
    $(".step").removeClass("active");
    $(".step").removeClass("done");
    $(".form_block").removeClass("active");
    $(".step1").addClass("done");
    $(".step2").addClass("done");
    $(this).addClass("active");
    $(".form_block3").addClass("active");
});
$(".step4").click(function() {
    $(".step").removeClass("active");
    $(".step").removeClass("done");
    $(".form_block").removeClass("active");
    $(".step1").addClass("done");
    $(".step2").addClass("done");
    $(".step3").addClass("done");
    $(this).addClass("active");
    $(".form_block4").addClass("active");
});
$(".step5").click(function() {
    $(".step").removeClass("active");
    $(".step").removeClass("done");
    $(".form_block").removeClass("active");
    $(".step1").addClass("done");
    $(".step2").addClass("done");
    $(".step3").addClass("done");
    $(".step4").addClass("done");
    $(this).addClass("active");
    $(".form_block5").addClass("active");
});

$(".btn_prev").click(function() {
    var valattr = $(".form_block.active").attr('data-number');
    let num = Number(valattr);
    let blockNum = num-1;

    $(".lines .line.active").removeClass("active");
    $(".lines .line"+blockNum).addClass("active");
    $(".lines .line.active").prevAll().addClass("active");
    
    $(".form_block.active").removeClass("active");
    $(".form_block"+blockNum).addClass("active");

    if(blockNum == 3) {
        $(".step").removeClass("active");
        $(".step").removeClass("done");
        $(".step3").addClass("active");
        $(".step3").prevAll().addClass("done");
    }
    if(blockNum == 2) {
        $(".step").removeClass("active");
        $(".step").removeClass("done");
        $(".step2").addClass("active");
        $(".step2").prevAll().addClass("done");
    }
    if(blockNum == 1) {
        $(".step").removeClass("active");
        $(".step").removeClass("done");
        $(".step1").addClass("active");
        $(".step1").prevAll().addClass("done");
        $(".form_buttons .btn_prev").addClass("none");
    }
});

// Phone Number
if(document.querySelector('.input_phone')) {
    window.addEventListener("DOMContentLoaded", function() {
        [].forEach.call( document.querySelectorAll('.tel'), function(input) {
        var keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) ___ ____",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function(a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function(a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5)  this.value = ""
        }
    
        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)
    
      });
    
    });
};