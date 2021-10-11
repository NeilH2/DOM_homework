document.addEventListener('DOMContentLoaded', () => {
    const newItemform = document.querySelector('#new-item-form');
    newItemform.addEventListener('submit', handleNewItemFormSubmit);
  
    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);

    
  })
  
  const handleNewItemFormSubmit = function (event) {
    event.preventDefault();
  
    const athleteListItem = createAthleteListItem(event.target);
    const athleteList = document.querySelector('#athlete-list');
    athleteList.appendChild(athleteListItem);
  
    event.target.reset();
  }
  
  const createAthleteListItem = function (form) {
    const athleteListItem = document.createElement('li');
    athleteListItem.classList.add('athlete-list-item');
  
    const name = document.createElement('h2');
    name.textContent = form.name.value;
    athleteListItem.appendChild(name);
  
    const team = document.createElement('h3');
    team.textContent = form.team.value;
    athleteListItem.appendChild(team);
  
    const sport = document.createElement('p');
    sport.textContent = form.sport.value;
    athleteListItem.appendChild(sport);
  
    return athleteListItem;
  }
  
  const handleDeleteAllClick = function (event) {
    const athleteList = document.querySelector('#athlete-list');
    athleteList.innerHTML = '';
  }