const dropdowns = document.querySelectorAll("[data-custom-select]");

dropdowns.forEach((dropdown) => {
  const trigger = dropdown.querySelector(".custom-select-trigger");
  const menu = dropdown.querySelector('[role="listbox"]');
  const options = [...dropdown.querySelectorAll('[role="option"]')];
  const valueField = dropdown.querySelector('input[type="hidden"]');
  const valueLabel = dropdown.querySelector(".custom-select-value");

  function close({ restoreFocus = false } = {}) {
    trigger.setAttribute("aria-expanded", "false");
    menu.hidden = true;
    if (restoreFocus) trigger.focus();
  }

  function open(optionIndex = options.findIndex((option) => option.getAttribute("aria-selected") === "true")) {
    menu.hidden = false;
    trigger.setAttribute("aria-expanded", "true");
    const target = options[optionIndex >= 0 ? optionIndex : 0];
    target?.focus();
  }

  function choose(option) {
    options.forEach((item) => item.setAttribute("aria-selected", String(item === option)));
    valueField.value = option.dataset.value;
    valueLabel.textContent = option.textContent.trim();
    valueLabel.removeAttribute("data-placeholder");
    trigger.setAttribute("aria-invalid", "false");
    close({ restoreFocus: true });
  }

  trigger.addEventListener("click", () => {
    if (menu.hidden) open();
    else close();
  });

  trigger.addEventListener("keydown", (event) => {
    if (["ArrowDown", "ArrowUp", "Enter", " "].includes(event.key)) {
      event.preventDefault();
      open(event.key === "ArrowUp" ? options.length - 1 : undefined);
    }
  });

  options.forEach((option, index) => {
    option.addEventListener("click", () => choose(option));
    option.addEventListener("pointermove", () => option.focus());
    option.addEventListener("keydown", (event) => {
      let nextIndex = index;
      if (event.key === "ArrowDown") nextIndex = (index + 1) % options.length;
      else if (event.key === "ArrowUp") nextIndex = (index - 1 + options.length) % options.length;
      else if (event.key === "Home") nextIndex = 0;
      else if (event.key === "End") nextIndex = options.length - 1;
      else if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        choose(option);
        return;
      } else if (event.key === "Escape") {
        event.preventDefault();
        close({ restoreFocus: true });
        return;
      } else if (event.key === "Tab") {
        close();
        return;
      } else {
        return;
      }

      event.preventDefault();
      options[nextIndex].focus();
    });
  });

  dropdown.addEventListener("focusout", (event) => {
    if (!dropdown.contains(event.relatedTarget)) close();
  });

  document.addEventListener("pointerdown", (event) => {
    if (!dropdown.contains(event.target)) close();
  });

  dropdown.closest("form")?.addEventListener("reset", () => {
    window.setTimeout(() => {
      valueField.value = "";
      valueLabel.textContent = "Choose a service";
      valueLabel.setAttribute("data-placeholder", "");
      trigger.removeAttribute("aria-invalid");
      options.forEach((option) => option.setAttribute("aria-selected", "false"));
    });
  });
});

const form = document.querySelector("#contact-form");

if (form) {
  const submitButton = form.querySelector(".form-submit");
  const status = document.querySelector(".form-status");
  const setupNote = document.querySelector(".form-note-text");
  const serviceInput = form.querySelector('input[name="service"]');
  const serviceTrigger = form.querySelector(".custom-select-trigger");
  const endpointIsConfigured = /^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+\/?$/.test(form.action) && !form.action.includes("YOUR_FORM_ID");

  if (endpointIsConfigured) {
    submitButton.disabled = false;
    setupNote.textContent = "Your inquiry will be sent to the Edsher team.";
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!endpointIsConfigured) return;

    if (!serviceInput.value) {
      serviceTrigger.setAttribute("aria-invalid", "true");
      status.dataset.state = "error";
      status.textContent = "Please choose the service that best fits your project.";
      status.hidden = false;
      serviceTrigger.focus();
      return;
    }

    status.hidden = true;
    submitButton.disabled = true;
    submitButton.textContent = "Sending…";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("The form could not be sent. Please try again or contact us by phone or email.");

      form.reset();
      status.dataset.state = "success";
      status.textContent = "Thanks for reaching out. Your inquiry has been sent.";
      status.hidden = false;
    } catch (error) {
      status.dataset.state = "error";
      status.textContent = error.message || "We couldn’t send your inquiry. Please try again or contact us by phone or email.";
      status.hidden = false;
    } finally {
      submitButton.disabled = false;
      submitButton.innerHTML = 'Send inquiry <span aria-hidden="true">↗</span>';
    }
  });
}
