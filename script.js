var stage = 1;
var percent;
$('.next').on('click', () => {
    $('.message').css("opacity", "0");
    $('.message').css('transform', 'none');
    if(stage != 0)
    {
        var percent = (stage / 4) * 100;
        $('.bar').css(`background-image`, `linear-gradient(to right, lightblue ${percent}%, lightyellow ${percent}%)`);
        if(stage != 4)
        {
            let idin = '#stage' + stage;
            $(idin).css('transform', 'scale(2.5)');
            $(idin).css('box-shadow', '0 3px 3px grey');
            $(idin).css('background-color', 'lightgreen');
        }
    }
    else{
        $('.bar').css('background-image', `none`);
        for(let iterator = 1; iterator < 4; iterator++)
            {
                let id = '#stage' + iterator;
                $(id).css('transform', 'scale(1.8)');
                $(id).css('box-shadow', 'none');
                $(id).css('background-color', 'darkblue');
            }
    }
    if(stage == 4)
    {
        $('.bar').css('background-image', 'linear-gradient(to right, yellow, green)');
        $('.message').css('opacity', '1');
        $('.message').css('transform', 'scale(2)');
        stage = -1;
    }
    stage++;
});

$('.back').on('click', () => {
    $('.message').css("opacity", "0");
    $('.message').css('transform', 'none');
    if(stage != 0)
        stage--;
    else if(stage == 0)
        stage = 4;
    if(stage != 0 && stage != 4)
    {
        let id = '#stage' + stage;
        let value = ((stage - 1) / 4) * 100;
        $(id).css('transform', 'scale(1.8)');
        $(id).css('box-shadow', 'none');
        $(id).css('background-color', 'darkblue');
        $('.bar').css('background-image', `linear-gradient(to right, lightblue ${value}%, lightyellow ${value}%`)
    }
    else if(stage == 4)
    {
        let value = ((stage) / 4) * 100;
        $('.bar').css('background-image', `linear-gradient(to right, lightblue ${value}%, lightyellow ${value}%)`);
    }
    if(stage == 1)
    {
        $('.bar').css('background-image', 'none');
    }
});