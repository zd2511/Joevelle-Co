// Update this date and the invitation copy in index.html when reusing the template.
const EVENT_DATE = new Date('2025-06-20T17:00:00');
const countdownNote = document.getElementById('countdown-note');
function updateCountdown(){
  const diff = EVENT_DATE.getTime() - Date.now();
  if(diff <= 0){
    ['days','hours','minutes','seconds'].forEach(id=>document.getElementById(id).textContent='00');
    countdownNote.textContent='A beautiful day to remember ♡';
    return;
  }
  const days=Math.floor(diff/86400000), hours=Math.floor(diff%86400000/3600000), minutes=Math.floor(diff%3600000/60000), seconds=Math.floor(diff%60000/1000);
  document.getElementById('days').textContent=String(days).padStart(2,'0');
  document.getElementById('hours').textContent=String(hours).padStart(2,'0');
  document.getElementById('minutes').textContent=String(minutes).padStart(2,'0');
  document.getElementById('seconds').textContent=String(seconds).padStart(2,'0');
}
updateCountdown(); setInterval(updateCountdown,1000);
const dialog=document.getElementById('rsvp-dialog');
document.getElementById('open-rsvp').addEventListener('click',()=>dialog.showModal());
document.getElementById('close-rsvp').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
document.getElementById('rsvp-form').addEventListener('submit',e=>{
  e.preventDefault(); const data=Object.fromEntries(new FormData(e.currentTarget).entries());
  const replies=JSON.parse(localStorage.getItem('aiza-rsvp-replies')||'[]'); replies.push({...data,submittedAt:new Date().toISOString()}); localStorage.setItem('aiza-rsvp-replies',JSON.stringify(replies));
  e.currentTarget.hidden=true; document.querySelector('.form-intro').hidden=true; document.querySelector('.form-footnote').hidden=true; document.getElementById('success-message').hidden=false;
});
const lightbox=document.getElementById('lightbox');
document.getElementById('view-gallery').addEventListener('click',()=>{lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false')});
document.getElementById('close-lightbox').addEventListener('click',()=>{lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true')});
lightbox.addEventListener('click',e=>{if(e.target===lightbox){lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true')}});
