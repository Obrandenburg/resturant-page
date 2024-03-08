import { content } from "./deleteChildren";
import { deleteKids } from "./deleteChildren";

function loadMenu(){
  deleteKids();

  const coffee = document.createElement('div');
  coffee.innerHTML = "Coffee Orders here";

  const tea = document.createElement('div');
  tea.innerHTML = 'Teas here';

  const pastry = document.createElement('div');
  pastry.innerHTML = 'yummy pastires';

  content.append(coffee, tea, pastry);

}

export { loadMenu }