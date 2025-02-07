"use client";
const Header = () => {
  return (
    <>
      hello world
      {/* <nav className="g-nav">
        <div className="w-layout-blockcontainer g_container w-container">
          <div className="nav_layout">
            <div className="nav_column">
              <a
                href="/?r=0"
                aria-current="page"
                className="nav_menu_logo w-inline-block"
              >
                <img
                  draggable="false"
                  loading="eager"
                  alt="Logo Studio Yellow"
                  src="https://cdn.prod.website-files.com/6727bb48ae56b39e24098dbc/6727bc2b308f1e1139ed52e9_logo-icon-sy-black.svg"
                  className="navmenu_logo_image"
                />
              </a>
              <div className="nav_menu_desktop">
                <Link
                  href="/?r=0"
                  aria-current="page"
                  className="nav_menu_link w-inline-block"
                >
                  <div>Home</div>
                </Link>
                <Link href="/works" className="nav_menu_link w-inline-block">
                  <div>Work</div>
                </Link>
                <Link href="/services" className="nav_menu_link w-inline-block">
                  <div>Services</div>
                </Link>
                <Link href="/about-us" className="nav_menu_link w-inline-block">
                  <div>About Us</div>
                </Link>
                <Link href="/articles" className="nav_menu_link w-inline-block">
                  <div>Articles</div>
                </Link>
              </div>
            </div>
            <div className="nav_column">
              <Link
                href="/contact"
                className="navmenu_link_icon is-desktop w-inline-block"
              >
                <img
                  src="https://cdn.prod.website-files.com/6727bb48ae56b39e24098dbc/673c2cfd4a9912bc7e5d1b62_icon-contact.svg"
                  loading="eager"
                  alt="Icon Contact"
                  className="navmenu_link_icon_image"
                />
              </Link>
              <Link
                href="#"
                className="navmenu_link_icon is-desktop is-hidden w-inline-block"
              >
                <img
                  src="https://cdn.prod.website-files.com/6727bb48ae56b39e24098dbc/673c2d1443aebde7f2a0f6f4_icon-language.svg"
                  loading="eager"
                  alt="Icon Language"
                  className="navmenu_link_icon_image"
                />
              </Link>
              <div
                data-w-id="e2356a2e-afe5-d3f6-0a1e-5246b834ae74"
                className="navmenu_link_icon is-mobile"
              >
                <div
                  className="navmenu_link_icon_image w-embed"
                  onClick={toggleMenu}
                  aria-expanded={isOpen}
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.5 8.5C5.5 7.67031 6.17031 7 7 7H25C25.8297 7 26.5 7.67031 26.5 8.5C26.5 9.32969 25.8297 10 25 10H7C6.17031 10 5.5 9.32969 5.5 8.5ZM5.5 16C5.5 15.1703 6.17031 14.5 7 14.5H25C25.8297 14.5 26.5 15.1703 26.5 16C26.5 16.8297 25.8297 17.5 25 17.5H7C6.17031 17.5 5.5 16.8297 5.5 16ZM26.5 23.5C26.5 24.3297 25.8297 25 25 25H7C6.17031 25 5.5 24.3297 5.5 23.5C5.5 22.6703 6.17031 22 7 22H25C25.8297 22 26.5 22.6703 26.5 23.5Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div
        className="g_navmenu_modal"
        style={{
          display: `${isOpen ? "flex" : "none"}`,
          transform: `${
            isOpen
              ? "translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
              : "translate3d(50%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
          }`,
          transformStyle: "preserve-3d",
          opacity: `${isOpen ? "1" : "0"}`,
        }}
      >
        <div className="navmenu_modal_close_button">
          <div className="btn_icon w-embed" onClick={toggleMenu}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5265 6.73247C20.1512 6.10776 20.1512 5.09324 19.5265 4.46853C18.9018 3.84382 17.8872 3.84382 17.2625 4.46853L12 9.73606L6.73247 4.47353C6.10776 3.84882 5.09324 3.84882 4.46853 4.47353C3.84382 5.09824 3.84382 6.11276 4.46853 6.73747L9.73606 12L4.47353 17.2675C3.84882 17.8922 3.84882 18.9068 4.47353 19.5315C5.09824 20.1562 6.11276 20.1562 6.73747 19.5315L12 14.2639L17.2675 19.5265C17.8922 20.1512 18.9068 20.1512 19.5315 19.5265C20.1562 18.9018 20.1562 17.8872 19.5315 17.2625L14.2639 12L19.5265 6.73247Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
        <div className="navmenu_modal_content">
          <h2 className="navmenu_modal_title font-primary u-heading-6 u-text-allcaps u-margin-bottom u-text-muted-dark">
            Menu
          </h2>
          <Link
            href="/?r=0"
            aria-current="page"
            className="navmenu_modal_link u-heading-1 u-text-bold w-inline-block w--current"
          >
            <div>Home</div>
          </Link>
          <Link
            href="/works"
            className="navmenu_modal_link u-heading-1 u-text-bold w-inline-block"
          >
            <div>Work</div>
          </Link>
          <Link
            href="/services"
            className="navmenu_modal_link u-heading-1 u-text-bold w-inline-block"
          >
            <div>Services</div>
          </Link>
          <Link
            href="/about-us"
            className="navmenu_modal_link u-heading-1 u-text-bold w-inline-block"
          >
            <div>About Us</div>
          </Link>
          <Link
            href="/articles"
            className="navmenu_modal_link u-heading-1 u-text-bold w-inline-block"
          >
            <div>Articles</div>
          </Link>
          <Link
            href="/contact"
            className="navmenu_modal_link u-heading-1 u-text-bold w-inline-block"
          >
            <div>Contact</div>
          </Link>
        </div>
        <div className="navmenu_modal_sm_wrap">
          <a
            href="https://www.youtube.com/@studioyellow"
            target="_blank"
            className="navmenu_modal_sm_link w-inline-block"
          >
            <div className="btn_icon w-embed">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.2694 8.33607C19.0944 7.67774 18.5805 7.16107 17.9278 6.98607C16.7444 6.66663 12 6.66663 12 6.66663C12 6.66663 7.25555 6.66663 6.07221 6.98607C5.41943 7.16107 4.90555 7.67774 4.73055 8.33607C4.41388 9.52774 4.41388 12.0111 4.41388 12.0111C4.41388 12.0111 4.41388 14.4944 4.73055 15.6861C4.90555 16.3444 5.41943 16.8388 6.07221 17.0138C7.25555 17.3333 12 17.3333 12 17.3333C12 17.3333 16.7444 17.3333 17.9278 17.0138C18.5805 16.8388 19.0944 16.3416 19.2694 15.6861C19.5861 14.4944 19.5861 12.0111 19.5861 12.0111C19.5861 12.0111 19.5861 9.52774 19.2694 8.33607ZM10.45 14.2666V9.75551L14.4139 12.0111L10.45 14.2666Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </a>
          <a
            href="https://www.instagram.com/studioyellow"
            target="_blank"
            className="navmenu_modal_sm_link w-inline-block"
          >
            <div className="btn_icon w-embed">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0016 8.4094C10.0141 8.4094 8.41094 10.0125 8.41094 12C8.41094 13.9875 10.0141 15.5906 12.0016 15.5906C13.9891 15.5906 15.5922 13.9875 15.5922 12C15.5922 10.0125 13.9891 8.4094 12.0016 8.4094ZM12.0016 14.3344C10.7172 14.3344 9.66719 13.2875 9.66719 12C9.66719 10.7125 10.7141 9.66565 12.0016 9.66565C13.2891 9.66565 14.3359 10.7125 14.3359 12C14.3359 13.2875 13.2859 14.3344 12.0016 14.3344ZM16.5766 8.26252C16.5766 8.72815 16.2016 9.10002 15.7391 9.10002C15.2734 9.10002 14.9016 8.72502 14.9016 8.26252C14.9016 7.80002 15.2766 7.42502 15.7391 7.42502C16.2016 7.42502 16.5766 7.80002 16.5766 8.26252ZM18.9547 9.11252C18.9016 7.99065 18.6453 6.9969 17.8234 6.17815C17.0047 5.3594 16.0109 5.10315 14.8891 5.0469C13.7328 4.98127 10.2672 4.98127 9.11094 5.0469C7.99219 5.10002 6.99844 5.35627 6.17656 6.17502C5.35469 6.99377 5.10156 7.98752 5.04531 9.1094C4.97969 10.2656 4.97969 13.7313 5.04531 14.8875C5.09844 16.0094 5.35469 17.0031 6.17656 17.8219C6.99844 18.6406 7.98906 18.8969 9.11094 18.9531C10.2672 19.0188 13.7328 19.0188 14.8891 18.9531C16.0109 18.9 17.0047 18.6438 17.8234 17.8219C18.6422 17.0031 18.8984 16.0094 18.9547 14.8875C19.0203 13.7313 19.0203 10.2688 18.9547 9.11252ZM17.4609 16.1281C17.2172 16.7406 16.7453 17.2125 16.1297 17.4594C15.2078 17.825 13.0203 17.7406 12.0016 17.7406C10.9828 17.7406 8.79219 17.8219 7.87344 17.4594C7.26094 17.2156 6.78906 16.7438 6.54219 16.1281C6.17656 15.2063 6.26094 13.0188 6.26094 12C6.26094 10.9813 6.17969 8.79065 6.54219 7.8719C6.78594 7.2594 7.25781 6.78752 7.87344 6.54065C8.79531 6.17502 10.9828 6.2594 12.0016 6.2594C13.0203 6.2594 15.2109 6.17815 16.1297 6.54065C16.7422 6.7844 17.2141 7.25627 17.4609 7.8719C17.8266 8.79377 17.7422 10.9813 17.7422 12C17.7422 13.0188 17.8266 15.2094 17.4609 16.1281Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/company/studioyellow"
            target="_blank"
            className="navmenu_modal_sm_link w-inline-block"
          >
            <div className="btn_icon w-embed">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.13438 19H5.23125V9.65312H8.13438V19ZM6.68125 8.37812C5.75312 8.37812 5 7.60938 5 6.68125C5 6.23535 5.17713 5.80772 5.49243 5.49243C5.80772 5.17713 6.23535 5 6.68125 5C7.12715 5 7.55478 5.17713 7.87007 5.49243C8.18537 5.80772 8.3625 6.23535 8.3625 6.68125C8.3625 7.60938 7.60938 8.37812 6.68125 8.37812ZM18.9969 19H16.1V14.45C16.1 13.3656 16.0781 11.975 14.5906 11.975C13.0812 11.975 12.85 13.1531 12.85 14.3719V19H9.95V9.65312H12.7344V10.9281H12.775C13.1625 10.1937 14.1094 9.41875 15.5219 9.41875C18.4594 9.41875 19 11.3531 19 13.8656V19H18.9969Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </a>
          <div className="navmenu_modal_sm_title_wrap">
            <h2 className="navmenu_modal_sm_title font-primary u-heading-6 u-text-allcaps u-text-muted-dark">
              Social
            </h2>
          </div>
        </div>
      </div> */}
    </>
  );
};
Header.displayName = "Header";
export { Header };
