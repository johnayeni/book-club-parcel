import logo from "../../assets/img/logo.svg";

const routes = {
  "": [
    {
      label: "Home",
      active: true,
    },
    {
      label: "Profile",
      active: false,
    },
    {
      label: "Notifications",
      active: false,
      notifications: 3,
      notificationsActive: true,
    },
  ],
  Explore: [
    {
      label: "Books",
      active: false,
      notifications: 273,
      notificationsActive: false,
    },
    {
      label: "Genres",
      active: false,
      notifications: 42,
      notificationsActive: false,
    },
    {
      label: "Authors",
      active: false,
      notifications: 106,
      notificationsActive: false,
    },
  ],
  "My Books": [
    {
      label: "Queued",
      active: false,
      notifications: 3,
      notificationsActive: false,
    },
    {
      label: "Currently Borrowed",
      active: false,
      notifications: 0,
      notificationsActive: false,
    },
    {
      label: "Favourites",
      active: false,
      notifications: 19,
      notificationsActive: false,
    },
    {
      label: "History",
      active: false,
    },
  ],
  Admin: [
    {
      label: "Book Requests",
      active: false,
      notifications: 2,
      notificationsActive: true,
    },
    {
      label: "Members",
      active: false,
      notifications: 34,
      notificationsActive: false,
    },
    {
      label: " Library Settings",
      active: false,
    },
  ],
};

const createSideBar = () => {
  const sidebar = /*html*/ `
    <aside class="sidebar">
      <div class="sidebar__logo">
        <img src="${logo}" alt="Korapay Book Club"/>
        <div class="sidebar__logo__label">
          <span class="sidebar__logo__label__title">Korapay Book Club</span>
          <span class="sidebar__logo__label__subtitle">Admin</span>
        </div>
      </div>
      ${Object.entries(routes)
        .map(
          ([title, links]) => /*html*/ `
          <section class="sidebar__section">
          ${title ? /*html*/ `<h3 class="sidebar__title">${title}</h3>` : ``}
            ${links
              .map(
                (link) => /*html*/ `
                <div class="sidebar__link">
                  <a href="#" class="${link.active ? "active" : ""}">${link.label}</a>
                  ${
                    link.notifications === 0 || Boolean(link.notifications)
                      ? /*html*/ `<span class="${link.notificationsActive ? "active" : ""}">${
                          link.notifications
                        }</span>`
                      : ``
                  }
                </div>
              `
              )
              .join("")}
          </section>
        `
        )
        .join("")}
    </aside>
   `;

  return sidebar;
};

export default createSideBar;
