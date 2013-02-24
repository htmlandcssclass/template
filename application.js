var PropertyControl = window.PropertyControl;

$(function(){
//    var displayEl = $('#second-paragraph');
    var displayEl = $('p');
    new PropertyControl('width', $('#width-control'), displayEl, {
        initialValue: 400
    });
    new PropertyControl('height', $('#height-control'), displayEl, {
        initialValue: 200
    });
    new PropertyControl('padding', $('#padding-control'), displayEl, {
        initialValue: 15,
        disabledValue: 0
    });
    new PropertyControl('margin', $('#margin-control'), displayEl, {
        initialValue: 15,
        disabledValue: 0
    });
    
    new PropertyControl('border', $('#border-control'), displayEl, {
        initialValue: '1px solid #ccc',
        disabledValue: 'none'
    });
    new PropertyControl('background-color', $('#background-color-control'), displayEl, {
        initialValue: '#eee',
        disabledValue: 'transparent'
    });
    
    new PropertyControl('text-decoration', $('#text-decoration-control'), displayEl, {
        initialValue: 'underline',
        disabledValue: 'none'
    });
    new PropertyControl('font-weight', $('#font-weight-control'), displayEl, {
        initialValue: 'bold',
        disabledValue: 'normal'
    });
    new PropertyControl('line-height', $('#line-height-control'), displayEl, {
        initialValue: 16
    });
});