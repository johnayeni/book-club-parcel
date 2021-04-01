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
      <button class="sidebar__back-button" aria-label="Close Sidebar">
        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16 8.28185V6.5338H3.37343L8.67118 1.23606L7.43512 0L0.901316 6.5338L0 7.40783L0.901316 8.28185L7.43512 14.8157L8.67118 13.5796L3.37343 8.28185H16Z" fill="black"/>
        </svg>
      </button>
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
