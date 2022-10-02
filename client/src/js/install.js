const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA

// Event handler for the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  butInstall.style.visibility = "visible";

  // Click event handler on the `butInstall` element
  butInstall.addEventListener('click', () => {
    event.prompt();
    butInstall.setAttribute('disabled', true);
    butInstall.textContent = 'Installed!';
    });
});

// Handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('👍', 'appinstalled', event);
  });
