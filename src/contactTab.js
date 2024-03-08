import { content } from "./deleteChildren";
import { deleteKids } from "./deleteChildren";

function loadContact(){
  deleteKids();
  const res = document.createElement('div');
  res.innerHTML = "To make a reservation call 213-867-5309";

  const cater = document.createElement('div');
  cater.innerHTML = "For catering services call 867-999-8212"

  const email = document.createElement('div');
  email.innerHTML = "You can also email us at email@email.com"

  content.append(res, cater, email);
};

export {loadContact}