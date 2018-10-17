$('#site-icon').click(function() {
    window.location = "#";
});

$('.menuitem').click(function() {
    $('.menuitem').removeClass('menuitem-active');
    let active = $(event.target);
    active.addClass('menuitem-active');
});
