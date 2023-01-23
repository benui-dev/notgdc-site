let countdown = document.getElementById('countdown');

if(countdown !== null)
{
    const nf = new Intl.NumberFormat("en-US", {
        minimumIntegerDigits: 2
    });
    const countdown_format = countdown.innerText;
    function update_countdown() {
        const target_date = new Date(Date.UTC(2023, 03, 10, 18, 0, 0));
        let now_date = new Date();
        const diff = target_date - now_date;
    
        if (diff > 0)
        {
            const _MS_PER_SECONDS = 1000;
            const _MS_PER_MINUTES = _MS_PER_SECONDS * 60;
            const _MS_PER_HOUR = _MS_PER_MINUTES * 60;
            const _MS_PER_DAY = _MS_PER_HOUR * 24;
        
            const days = Math.floor(diff / _MS_PER_DAY);
            const hours = Math.floor((diff - days * _MS_PER_DAY) / _MS_PER_HOUR);
            const minutes = Math.floor((diff - days * _MS_PER_DAY - hours * _MS_PER_HOUR) / _MS_PER_MINUTES);
            const seconds = Math.floor((diff - days * _MS_PER_DAY - hours * _MS_PER_HOUR - minutes * _MS_PER_MINUTES) / _MS_PER_SECONDS);
        
            const countdown_string = countdown_format.replace("{dd}", nf.format(days))
                                                        .replace("{hh}", nf.format(hours))
                                                        .replace("{mm}", nf.format(minutes))
                                                        .replace("{ss}", nf.format(seconds));
            countdown.innerText = countdown_string;
        }
        else
        {
            countdown.innerText = "Event's over !"
        }
    }

    setInterval(update_countdown, 1000);
    update_countdown();
}
