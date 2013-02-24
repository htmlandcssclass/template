$(function(){
    var paddingEl = $('[name=padding]');
    var marginEl = $('[name=margin]');
    var liEls = $('li');
    
    paddingEl.change(function(){ setStyle(paddingEl, 'padding'); });
    marginEl.change(function(){ setStyle(marginEl, 'margin'); });
    
    var setStyle = function(control, property){
        var value = control.val();
        liEls.css(property, value);
    };
});