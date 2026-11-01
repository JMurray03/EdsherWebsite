class SiteFooter extends HTMLElement{
    connectedCallback(){

    

        this.innerHTML = `
         <div id="footer-section">
      <div class="f-section">
        <div class="company-logo">
          <h1>
            <p
              style="
                font-size: 1.6em;
                font-weight: 700;
                margin: 0;
                color: rgb(76, 76, 255);
              "
            >
              EDSHER
            </p>
            <p style="margin: 0">CONSTRUCTION</p>
          </h1>
        </div>
        <p>Building excellence since 1993.<br />Remember we deliver.</p>
      </div>
      <div class="f-section">
        <h1>Services</h1>
        <div class="f-content" id="footer-services">
          <a href="index.html#building-tab">Building Construction</a>
          <a href="index.html#civil-tab">Civil &amp; Infrastructure</a>
          <a href="index.html#renovation-tab">Renovation &amp; Maintenance</a>
          <a href="index.html#project-management-tab">Project Management</a>
        </div>
      </div>
      <div class="f-section">
        <h1>Company</h1>
        <div class="f-content" id="footer-company">
          <a href="./contact.html">Get a Quote</a>
          <a href="./about.html">About Us</a>
          <a href="index.html#client-section">Selected Clients</a>
          <a href="https://g.page/r/CQN3x66xHF7KEBM/review">Leave a Review</a>
        </div>
      </div>
      <div class="f-section">
        <h1>Contact</h1>
        <div class="f-content" id="footer-contact">
          <a href="tel:+18686767183">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6"
            >
              <path
                fill-rule="evenodd"
                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                clip-rule="evenodd"
              />
            </svg>
            <p>(868) 676-7183 · Office</p>
          </a>
          <a href="tel:+18686841833">
            <span class="size-6 footer-icon-spacer" aria-hidden="true"></span>
            <p>(868) 684-1833 · Cell</p>
          </a>
          <a href="mailto:edsher@hotmail.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6"
            >
              <path
                d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"
              />
              <path
                d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"
              />
            </svg>
            <p>edsher@hotmail.com</p>
          </a>
          <a href="https://maps.app.goo.gl/wiYwBDwMNezpiGQq5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6"
            >
              <path
                fill-rule="evenodd"
                d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                clip-rule="evenodd"
              />
            </svg>
            <p>
              #2 Riverview, McCarthy Street<br />
              Cantaro Village, Santa Cruz<br />
              Trinidad &amp; Tobago<br />
            </p>
          </a>
        </div>
      </div>
    </div>
        `;
    }
}

customElements.define("site-footer", SiteFooter);
