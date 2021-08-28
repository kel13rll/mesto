let editPopupBtn = document.querySelector('.profile__edit-btn');
let popup = document.querySelector('.popup');
let closePopupBtn = document.querySelector('.popup__close');
let nameProfile = document.querySelector('.profile__name');
let careerProfile = document.querySelector('.profile__career');
let namePopup = document.querySelector('[name="popup_name"]');
let careerPopup = document.querySelector('[name="popup_career"]');
let formPopup = document.querySelector('.popup__form');

function togglePopup() {
  if (!popup.classList.contains('popup_open')) {
    namePopup.value = nameProfile.textContent;
    careerPopup.value = careerProfile.textContent;
  }

  popup.classList.toggle('popup_open');
}

editPopupBtn.addEventListener('click', togglePopup);
closePopupBtn.addEventListener('click', togglePopup);

function handleFormSubmit (evt) {
  evt.preventDefault();

  nameProfile.textContent = namePopup.value;
  careerProfile.textContent = careerPopup.value;
  togglePopup();
}

formPopup.addEventListener ('submit', handleFormSubmit);
