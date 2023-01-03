const numberNotifications = document.querySelector(".number__notifications");
const notReadNotification = document.querySelectorAll(".not__read");
const redCircle = document.querySelectorAll(".notification__text__red");

/* MARK ALL AS READ */
document
  .querySelector(".mark__all__read")
  .addEventListener("click", markAllRead);

function markAllRead() {
  notReadNotification.forEach((item) => item.classList.remove("not__read"));
  redCircle.forEach((item) => item.classList.add("none"));
  numberNotifications.textContent = "0";
}

/* MARK MANUALLY */

notReadNotification.forEach((notification) => {
  notification.addEventListener("click", (e) => {
    const notRead = e.target.closest(".notification");
    if (!notRead.classList.contains("not__read")) return;

    notRead.classList.remove("not__read");
    notRead.querySelector(".notification__text__red").classList.add("none");
    numberNotifications.textContent -= 1;
  });
});
