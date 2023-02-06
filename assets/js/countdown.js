let countdown = document.getElementById('countdown');

if(countdown !== null)
{
    const nf = new Intl.NumberFormat("en-US", {
        minimumIntegerDigits: 2
    });
    const NOTGDC_START_DATE = new Date(Date.UTC(2023, 03, 20, 16, 0, 0));
    const NOTGDC_END_DATE = new Date(Date.UTC(2023, 03, 24, 16, 0, 0));

    function format_date(days, hours, minutes, seconds)
    {
        let countdown_string = "Starts in "
        if (days > 0)
        {
            countdown_string += days + " Days ";
        }
        if (days < 3 && hours > 0)
        {
            countdown_string += nf.format(hours) + " Hours ";
        }

        if (days == 0)
        {
            countdown_string += nf.format(minutes) + " Minutes ";
        }

        return countdown_string;
    }

    function update_countdown() {
        const now_date = new Date();
        var diff = NOTGDC_START_DATE - now_date;
        if (diff > 0)
        {
            const _MS_PER_SECONDS = 1000;
            const _MS_PER_MINUTES = _MS_PER_SECONDS * 60;
            const _MS_PER_HOUR = _MS_PER_MINUTES * 60;
            const _MS_PER_DAY = _MS_PER_HOUR * 24;
        
            let days    = Math.floor(diff / _MS_PER_DAY);     diff -= days * _MS_PER_DAY
            const hours   = Math.floor(diff / _MS_PER_HOUR);    diff -= hours * _MS_PER_HOUR
            const minutes = Math.floor(diff / _MS_PER_MINUTES); diff -= minutes * _MS_PER_MINUTES
            const seconds = Math.floor(diff / _MS_PER_SECONDS);

            
            countdown.innerText = format_date(days, hours, minutes, seconds);
        }
        else
        {
            var end_diff = NOTGDC_END_DATE - now_date;
            if(end_diff > 0)
            {
                countdown.innerText = "Event in progress !"
            }
            else
            {
                // countdown.innerText = "Event's over ! Thanks for joining !"
                countdown.remove();
            }
        }
    }

    setInterval(update_countdown, 1000);
    update_countdown();
}
