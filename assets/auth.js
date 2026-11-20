// Shared by the public pages (landing, sign-up chooser, and the two
// role landing pages): the header's signed-in state, and the sign-up
// form itself, so both role pages create accounts the exact same way.

// Someone who's already signed in sees a way back into the app instead
// of log in / sign up buttons.
function tbaWireLandingHeader() {
  var slot = document.getElementById('l-auth-buttons');
  if (slot && localStorage.getItem('tba_authed')) {
    slot.innerHTML = '<a class="l-btn primary" href="home.html">Open the app</a>';
  }
  if (document.getElementById('theme-toggle-btn')) tbaWireThemeToggle('theme-toggle-btn', 'light');

  // The one plan price (see TBA_PLAN) everywhere it's shown.
  document.querySelectorAll('[data-plan-price]').forEach(function (el) { el.textContent = tbaFormatPlanPrice(); });
  document.querySelectorAll('[data-plan-free-only]').forEach(function (el) { el.hidden = TBA_PLAN.monthlyPrice > 0; });
}

// Builds the sign-up form into `containerId` for one account type and
// wires it. Email, username, and password are all required; nothing is
// created until every one is valid and the terms are accepted.
function tbaMountSignup(containerId, role) {
  var mount = document.getElementById(containerId);
  if (!mount) return;
  var roleLabel = role === 'business' ? 'business' : 'creator';

  mount.innerHTML =
    '<h2>Create your ' + roleLabel + ' account</h2>' +
    '<p class="l-form-sub">It takes a minute. No card needed.</p>' +
    '<p class="l-invite-note" id="invite-note" hidden></p>' +
    '<form id="signup-form" novalidate>' +
    '<label class="l-field">Email' +
    '<input type="email" id="signup-email" placeholder="you@example.com" autocomplete="email" autocapitalize="off" spellcheck="false">' +
    '</label>' +
    '<p class="l-error" id="signup-email-error" hidden></p>' +
    '<label class="l-field">Username' +
    '<input type="text" id="username-input" placeholder="how people will find you" autocomplete="username" autocapitalize="off" spellcheck="false">' +
    '</label>' +
    '<p class="l-error" id="username-error" hidden></p>' +
    '<label class="l-field">Password' +
    '<input type="password" id="signup-password" placeholder="At least 8 characters" autocomplete="new-password">' +
    '</label>' +
    '<p class="l-error" id="signup-password-error" hidden></p>' +
    '<div class="l-plan-row"><span>Monthly subscription</span><strong id="signup-plan-price">' + tbaFormatPlanPrice() + '</strong></div>' +
    '<label class="l-terms">' +
    '<input type="checkbox" id="signup-terms-checkbox">' +
    '<span>I agree to the <a href="terms.html" target="_blank" rel="noopener">Terms of Service</a> and <a href="privacy.html" target="_blank" rel="noopener">Privacy Policy</a>, including that this app is not legal advice and that signing a contract here does not make it legally binding.</span>' +
    '</label>' +
    '<p class="l-error" id="signup-terms-error" hidden>Please agree to the Terms of Service to continue.</p>' +
    '<button type="submit" class="l-btn primary l-btn-block" id="signup-submit">Create account</button>' +
    '</form>' +
    '<p class="l-form-foot">Already have an account? <a href="login.html">Log in</a></p>';

  // ?invite=<username> from a shared invite link
  var inviteParam = new URLSearchParams(window.location.search).get('invite');
  if (inviteParam) {
    var inviter = tbaGetUserByUsername(inviteParam);
    if (inviter) {
      var note = document.getElementById('invite-note');
      note.textContent = 'You were invited by ' + inviter.name + '.';
      note.hidden = false;
    } else {
      inviteParam = null;
    }
  }

  function showError(id, text, focusId) {
    var el = document.getElementById(id);
    el.textContent = text;
    el.hidden = false;
    document.getElementById(focusId).focus();
  }

  document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();

    var email = document.getElementById('signup-email').value.trim();
    var username = document.getElementById('username-input').value.trim();
    var password = document.getElementById('signup-password').value;

    ['signup-email-error', 'username-error', 'signup-password-error'].forEach(function (id) { document.getElementById(id).hidden = true; });

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showError('signup-email-error', 'Enter a valid email address.', 'signup-email');
      return;
    }
    if (!/^[a-zA-Z0-9_]{3,20}$/.test(username)) {
      showError('username-error', 'Usernames are 3–20 characters: letters, numbers, and underscores only.', 'username-input');
      return;
    }
    if (tbaUsernameTaken(username)) {
      showError('username-error', 'That username is already taken — try another.', 'username-input');
      return;
    }
    if (!password || password.length < 8) {
      showError('signup-password-error', 'Choose a password that\'s at least 8 characters.', 'signup-password');
      return;
    }

    var termsCheckbox = document.getElementById('signup-terms-checkbox');
    var termsError = document.getElementById('signup-terms-error');
    if (!termsCheckbox.checked) {
      termsError.hidden = false;
      termsCheckbox.focus();
      return;
    }
    termsError.hidden = true;
    tbaAcceptTerms();

    var submitBtn = document.getElementById('signup-submit');
    submitBtn.disabled = true;

    tbaSha256Hex(password).then(function (passwordHash) {
      localStorage.setItem('tba_authed', '1');
      localStorage.setItem('tba_username', username);
      localStorage.setItem('tba_role', role);
      tbaRegisterLocalAccount(username, role, new Date().toISOString());
      if (inviteParam) tbaRecordReferral(inviteParam, username);
      tbaSaveMyEmail(email);
      tbaSaveMyPasswordHash(passwordHash);
      tbaSetMyPlan();

      document.activeElement.blur();
      window.scrollTo(0, 0);
      tbaNavigateTo('home.html');
    }).catch(function () {
      submitBtn.disabled = false;
      showError('signup-password-error', 'Something went wrong creating your account — try again.', 'signup-password');
    });
  });
}
