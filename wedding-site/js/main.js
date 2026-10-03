/* App entry. Order matters:
   content -> art -> nav -> render sections -> effects (observes .rv) -> petals/music/intro */
initContent();
initArt();
initNav();
renderStory();
renderEvents();
initGallery();
initCountdown();
initEffects();
initPetals();
Music.init();
initIntro();
