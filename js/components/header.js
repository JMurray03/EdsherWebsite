class siteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
         <header>
    <nav>
      <div class="menubar">
        <div class="branding">
          <p style="
                font-weight: 600;
                padding: 0;
                margin: 0;
                color: rgb(76, 76, 255);
              ">
            EDSHER
          </p>
          <p style="font-weight: 300; padding: 0; margin-right: 0">
            CONSTRUCTION
          </p>
          </div>
          <button class="hamburger" id="hamburger" type="button" aria-label="Open navigation" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul id="menu-actual">
            <li><a href="index.html">HOME</a></li>
            <li class="collapsible">
              <a href="index.html#our-services-section">
                <p>SERVICES</p>
                
              </a>
              <ul class="submenu">
                <li><a href="index.html#building-tab">BUILDING CONSTRUCTION</a></li>
                <li><a href="index.html#civil-tab">CIVIL &amp; INFRASTRUCTURE</a></li>
                <li><a href="index.html#renovation-tab">RENOVATION &amp; MAINTENANCE</a></li>
                <li><a href="index.html#project-management-tab">PROJECT MANAGEMENT</a></li>
              </ul>
            </li>
            <li class="collapsible">
              <a href="about.html">
                <p>ABOUT</p>
                
              </a>
              <ul class="submenu">
                <li><a href="about.html">ABOUT US</a></li>
                <li><a href="about.html#our-team-page">OUR TEAM</a></li>
              </ul>
            </li>
            <li><a href="index.html#client-section">CLIENTS</a></li>
            <li><a href="contact.html">CONTACT</a></li>
          </ul>
      </div>
    </nav>
  </header>
        `;
    this.setupMenu();
    this.setupScroll();
  }

  setupMenu() {
    const header = this.querySelector("header");
    const hamburger = this.querySelector("#hamburger");
    const mobileMenu = this.querySelector("#menu-actual");
    const dropdownParents = this.querySelectorAll(".collapsible");

    hamburger.addEventListener("click", () => {
      mobileMenu.classList.toggle("open");
      hamburger.classList.toggle("active");
      hamburger.setAttribute("aria-expanded", hamburger.classList.contains("active"));
      hamburger.setAttribute("aria-label", hamburger.classList.contains("active") ? "Close navigation" : "Open navigation");
      header.classList.toggle("menu-open");
    });

    dropdownParents.forEach((item) => {
      const link = item.querySelector("a");

      link.addEventListener("click", (e) => {
        if (window.innerWidth <= 768) {
          e.preventDefault();

          item.classList.toggle("open");
        }
      });
    });

    document.addEventListener("click", (e) => {
      if (!this.contains(e.target)) {
        this.closeMenu();
      }
    });
  }

  setupScroll(){
    const header = this.querySelector("header");

    let lastScroll = 0;

    window.addEventListener("scroll", () => {
      const currentScroll = window.scrollY;

      // Always show near the top
      if (currentScroll <= 50) {
        header.classList.remove("hide");
      }
      // Scrolling down
      else if (currentScroll > lastScroll) {
        header.classList.add("hide");

        this.closeMenu();
      }
      // Scrolling up
      else {
        header.classList.remove("hide");
      }
      // Scrolled state
      if (currentScroll > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }

      lastScroll = currentScroll;
    });
  }

  closeMenu() {
    
    const hamburger = this.querySelector("#hamburger");
    const mobileMenu = this.querySelector("#menu-actual");
    const header = this.querySelector("header");

    mobileMenu.classList.remove("open");
    hamburger.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.setAttribute("aria-label", "Open navigation");
    header.classList.remove("menu-open");
    this.querySelectorAll(".collapsible").forEach((item) => {
      item.classList.remove("open");
    });
  }

}
customElements.define("site-header", siteHeader);
