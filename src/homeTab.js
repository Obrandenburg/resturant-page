import { content } from "./deleteChildren";
import { deleteKids } from "./deleteChildren";

function loadHome(){
  deleteKids();
  const header = document.createElement('div');
  header.setAttribute('id', 'title')
  header.innerHTML = 'Coziest Cafe';

  const blurb = document.createElement('div');
  blurb.innerHTML = "Welcome to the Coziest Cafe this side of the Mississippi! Bring a friend or grab a book and cozy on in with bverage and a bite"

  const hours = document.createElement('div');

  const weekdays = document.createElement('p')
  const sat = document.createElement('p')
  const sun = document.createElement('p')
  weekdays.innerHTML = "Mon - Fri: 8AM-7PM";
  sat.innerHTML = "Sat: 8AM - 9PM";
  sun.innerHTML = "Sun: Closed";

  hours.append(weekdays, sat, sun);
  
  content.append(header, blurb, hours)
}

export{ loadHome };