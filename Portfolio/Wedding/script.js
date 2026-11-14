// Demo countdown. Change this date to the couple's actual wedding date.
const weddingDate = new Date('2026-11-29T16:00:00');
const fields = {
  days: document.getElementById('days'),
  hours: document.getElementById('hours'),
  minutes: document.getElementById('minutes'),
  seconds: document.getElementById('seconds')
};
function updateCountdown(){
  const remaining = weddingDate.getTime() - Date.now();
  if (remaining <= 0) {
    Object.values(fields).forEach(field => field.textContent = '00');
    return;
  }
  const totalSeconds = Math.floor(remaining / 1000);
  fields.days.textContent = String(Math.floor(totalSeconds / 86400)).padStart(3,'0');
  fields.hours.textContent = String(Math.floor((totalSeconds % 86400) / 3600)).padStart(2,'0');
  fields.minutes.textContent = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2,'0');
  fields.seconds.textContent = String(totalSeconds % 60).padStart(2,'0');
}
updateCountdown();
setInterval(updateCountdown,1000);
