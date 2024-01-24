document.addEventListener('DOMContentLoaded', function () {
    var mainMenu = document.getElementById('main-menu');
    var toggleMenu = document.getElementById('toggle-menu');


    toggleMenu.addEventListener('click', function () {
        mainMenu.classList.toggle('active');
    });

    document.addEventListener('click', function (event) {
        var isClickInsideMenu = mainMenu.contains(event.target);
        var isClickOnToggleMenu = toggleMenu.contains(event.target);

        if (!isClickInsideMenu && !isClickOnToggleMenu) {
            mainMenu.classList.remove('active');
        }
    });
});