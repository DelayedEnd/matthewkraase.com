
    ////////        Begin NAV WHEEL        ////////
var initialDegrees = 36; var degrees = -36; var existingDegrees = []; var selected = 1; var menuActive = false;
function menuEvent() {
    if (menuActive == false) {
        init();
        $('#menuItems:not(#menuButton)').animate({ 'margin-top' : '200px', 'margin-left' : '200px' }, {duration: 100, easing: "linear"});
        menuActive = true;
        $('#menuButton').text('Close');
    }
    else {
        $('#menuItems:not(#menuButton)').animate({ 'margin-top' : '-300px', 'margin-left' : '-300px' }, {duration: 100, easing: "linear"});
        menuActive = false;
        $('#menuButton').text('Menu');
    }
}
function init() {
    initialDegrees = 36
    degrees = -36;
    existingDegrees = []
    selected = 1;
    for (i = 1; i < 11; i++) {
        var toChange = "#menuItem" + i;
        if (i == selected) { $(toChange).css({'background' : 'white'}); }
        else { $(toChange).css({'background' : 'black'}); }
        degrees += initialDegrees;
        existingDegrees[i] = degrees;
        $(toChange).css({ '-webkit-transform' : 'rotate('+ degrees +'deg)', '-moz-transform' : 'rotate('+ degrees +'deg)', '-ms-transform' : 'rotate('+ degrees +'deg)', 'transform' : 'rotate('+ degrees +'deg)' });
    }
}
init();
$(window).on('wheel', function(event){
    if (menuActive == false) return;
    if (event.originalEvent.deltaY < 0) {
        selected++;
        if (selected > 10 ) selected = 1;
        if (selected < 1) selected = 10;
        for (i = 1; i < 11; i++) {
            var toChange = "#menuItem" + i;
            existingDegrees[i] -= 36;
            console.log(selected + " " + i);
            if (i == selected) { $(toChange).css({'background' : 'white'}); }
            else { $(toChange).css({'background' : 'black'}); }
            $(toChange).css({ '-webkit-transform' : 'rotate('+ existingDegrees[i] +'deg)', '-moz-transform' : 'rotate('+ existingDegrees[i] +'deg)', '-ms-transform' : 'rotate('+ existingDegrees[i] +'deg)', 'transform' : 'rotate('+ existingDegrees[i] +'deg)' });
        }
    }
    else {
        selected--;
        if (selected > 10 ) selected = 1;
        if (selected < 1) selected = 10;
        for (i = 1; i < 11; i++) {
            var toChange = "#menuItem" + i;
            existingDegrees[i] += 36;
            console.log(selected + " " + i);
            if (i == selected) { $(toChange).css({'background' : 'white'}); }
            else { $(toChange).css({'background' : 'black'}); }
            $(toChange).css({ '-webkit-transform' : 'rotate('+ existingDegrees[i] +'deg)', '-moz-transform' : 'rotate('+ existingDegrees[i] +'deg)', '-ms-transform' : 'rotate('+ existingDegrees[i] +'deg)', 'transform' : 'rotate('+ existingDegrees[i] +'deg)' });
        }
    }
});
    ////////        END NAV WHEEL        ////////