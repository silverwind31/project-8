$(document).ready(function(e){
    var typed = new Typed('#typing', {
        strings: ["Good", "Cheap", "Protected",],
        smartBackspace: true,
        typeSpeed: 200,
        backSpeed: 500,
        fadeOut: true,
        loop: true
    });

    $('.advantages_item').on('mousemove',function(e){
        console.log(e);
        var currentPostLeft = 100;
        var currentPostTop = 50;
        var backgroundSpeed = 6;
        
        var newX = currentPostLeft - ((e.pageX - $(this).offset().left - 200) / backgroundSpeed);
        var newY = currentPostTop - ((e.pageY - $(this).offset().top - 100) / backgroundSpeed);

        $(this).find('.advantages_bg').css({
            'left': newX + 'px',
            'top': newY + 'px'  
        })
    })

    document.querySelector('.search .button').addEventListener('click',function(e){
        e.preventDefault();
        let button = document.querySelectorAll('.country_item');
        button.forEach(function(item){
            item.style.display = 'flex'; 
        }) 
    })
})
      
