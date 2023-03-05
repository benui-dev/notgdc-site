let times = document.getElementsByClassName('time');
if(times !== null)
{
    for( time of times )
    {
        const time_pst = time.innerHTML;
        const local_date = new Date(Date.UTC(2023, 02, 20, Number(time_pst), 0, 0));
        const formatter = new Intl.DateTimeFormat(undefined, { timeStyle: 'short' });
        time.innerHTML = formatter.format(local_date);
    }
}
