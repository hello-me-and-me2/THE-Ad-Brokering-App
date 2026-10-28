// Shared mock user directory for THE INTROductory demo.
// In a real app this would come from a database — here it's a fixed
// seed list plus whoever has signed up in this browser.

var TBA_SEED_USERS = [
  {
    username: "skylinecoffee", name: "Skyline Coffee Co.", role: "business", daysAgoJoined: 20,
    tagline: "Small-batch coffee brand, Pacific Northwest.",
    bio: "Small-batch coffee roaster based in the Pacific Northwest, partnering with creators who love a good cup and an honest story.",
    links: [
      { label: "Website", url: "https://skylinecoffee.com" },
      { label: "Instagram", url: "https://instagram.com/skylinecoffeeco" }
    ]
  },
  {
    username: "riversidegear", name: "Riverside Outdoor Gear", role: "business", daysAgoJoined: 15,
    tagline: "Outdoor apparel and camping gear.",
    bio: "Outdoor apparel and camping gear built for real trips, not just photos. We work with adventure creators who actually use our stuff.",
    links: [
      { label: "Website", url: "https://riversidegear.com" },
      { label: "Instagram", url: "https://instagram.com/riversidegear" }
    ]
  },
  {
    username: "pearandco", name: "Pear & Co. Skincare", role: "business", daysAgoJoined: 9,
    tagline: "Clean skincare, cruelty-free.",
    bio: "Clean, cruelty-free skincare made in small batches. We love collaborating with creators who care about what goes on their skin.",
    links: [
      { label: "Website", url: "https://pearandco.com" },
      { label: "TikTok", url: "https://tiktok.com/@pearandco" }
    ]
  },
  {
    username: "thecraftedtable", name: "The Crafted Table", role: "business", daysAgoJoined: 5,
    tagline: "Artisan home goods & tableware.",
    bio: "Artisan home goods and tableware, handmade by independent makers. Looking for creators who love slow living and good design.",
    links: [
      { label: "Website", url: "https://thecraftedtable.com" },
      { label: "Instagram", url: "https://instagram.com/thecraftedtable" }
    ]
  },
  {
    username: "brightlinestudio", name: "Brightline Studio", role: "business", daysAgoJoined: 3,
    tagline: "Independent design & branding studio.",
    bio: "Independent design and branding studio helping small businesses look as good as they are. Open to creator collabs on case studies.",
    links: [
      { label: "Website", url: "https://brightlinestudio.co" }
    ]
  },
  {
    username: "marencole", name: "Maren Cole", role: "influencer", daysAgoJoined: 11,
    tagline: "Lifestyle & coffee content · 210K followers.",
    bio: "Lifestyle and coffee content creator sharing slow mornings and honest reviews with 210K people who feel the same way.",
    links: [
      { label: "Instagram", url: "https://instagram.com/marencole" },
      { label: "TikTok", url: "https://tiktok.com/@marencole" },
      { label: "YouTube", url: "https://youtube.com/@marencole" }
    ]
  },
  {
    username: "jordanblake", name: "Jordan Blake", role: "influencer", daysAgoJoined: 4,
    tagline: "Outdoor & adventure creator · 85K followers.",
    bio: "Outdoor and adventure creator documenting real trips, real gear tests, and the occasional disaster. 85K people come along for the ride.",
    links: [
      { label: "Instagram", url: "https://instagram.com/jordanblake" },
      { label: "YouTube", url: "https://youtube.com/@jordanblake" }
    ]
  },
  {
    username: "ninareyes", name: "Nina Reyes", role: "influencer", daysAgoJoined: 6,
    tagline: "Beauty & skincare reviews · 340K followers.",
    bio: "Beauty and skincare reviews with zero filter — if it doesn't work, I'll say so. 340K followers trust me to tell them the truth.",
    links: [
      { label: "Instagram", url: "https://instagram.com/ninareyes" },
      { label: "TikTok", url: "https://tiktok.com/@ninareyes" }
    ]
  },
  {
    username: "leoortiz", name: "Leo Ortiz", role: "influencer", daysAgoJoined: 2,
    tagline: "Fitness & wellness · 122K followers.",
    bio: "Fitness and wellness creator helping 122K people build habits that actually stick. Big on honest brand partnerships, not hype.",
    links: [
      { label: "Instagram", url: "https://instagram.com/leoortiz" },
      { label: "YouTube", url: "https://youtube.com/@leoortiz" }
    ]
  },
  {
    username: "avaqian", name: "Ava Qian", role: "influencer", daysAgoJoined: 1,
    tagline: "Travel & food content · 96K followers.",
    bio: "Travel and food creator finding the best small-town spots and local makers worth knowing about. 96K people exploring along with me.",
    links: [
      { label: "Instagram", url: "https://instagram.com/avaqian" },
      { label: "TikTok", url: "https://tiktok.com/@avaqian" }
    ]
  }
];

var TBA_MAX_LINKS = 7;

// --- Local account registry ---
// Signing up (or logging in) only ever remembered the *most recent*
// account in a single tba_username slot — so after creating a second
// account, that slot pointed at the new one, and logging back into
// the first by username failed ("we couldn't find an account with
// that username") even though all its data was still sitting in
// storage under its own scoped keys. This keeps every account this
// browser has ever signed up in, so login can find any of them again,
// not just whichever one happened to be last.
function tbaGetLocalAccounts() {
  try {
    var list = JSON.parse(localStorage.getItem('tba_local_accounts') || '[]');
    return Array.isArray(list) ? list : [];
  } catch (e) {
    return [];
  }
}

// joinedAt is recorded once here, in the registry entry, rather than
// in a flat tba_joined_at key — that flat key had the exact same
// single-slot problem as tba_username once did, overwritten every
// time a different account signed up or logged in.
function tbaRegisterLocalAccount(username, role, joinedAt) {
  if (!username) return;
  var accounts = tbaGetLocalAccounts();
  var lower = username.toLowerCase();
  var existing = accounts.find(function (a) { return a.username.toLowerCase() === lower; });
  if (existing) {
    existing.role = role || existing.role;
    if (joinedAt && !existing.joinedAt) existing.joinedAt = joinedAt;
  } else {
    accounts.push({ username: username, role: role || 'business', joinedAt: joinedAt || new Date().toISOString() });
  }
  localStorage.setItem('tba_local_accounts', JSON.stringify(accounts));
}

function tbaFindLocalAccount(username) {
  if (!username) return null;
  var lower = username.toLowerCase();
  return tbaGetLocalAccounts().find(function (a) { return a.username.toLowerCase() === lower; }) || null;
}

// Backfills the registry from whichever account is currently signed
// in, so an account created before this registry existed isn't
// orphaned — the moment it next loads any page, it's added. Cheap and
// idempotent, so it runs on every load rather than once. Passes along
// the legacy flat tba_joined_at key (if this is that one pre-upgrade
// account) so its real join date isn't lost either.
function tbaEnsureLocalAccountRegistered() {
  var myUsername = localStorage.getItem('tba_username');
  if (!myUsername) return;
  tbaRegisterLocalAccount(myUsername, localStorage.getItem('tba_role') || 'business', localStorage.getItem('tba_joined_at'));
}
tbaEnsureLocalAccountRegistered();

function tbaUsernameTaken(username) {
  var lower = username.toLowerCase();
  if (TBA_SEED_USERS.some(function (u) { return u.username.toLowerCase() === lower; })) return true;
  return tbaGetLocalAccounts().some(function (a) { return a.username.toLowerCase() === lower; });
}

// --- Per-account storage ---
// Every account's own data (profile, verification, messages, network,
// notifications, e-sign consent) is kept under a key suffixed with
// that account's username, so logging out and into a *different*
// account on the same device never shows — or silently overwrites —
// the previous account's details. Logging back into an earlier
// account later finds its own data exactly as it was left.
function tbaAccountKey(base, forUsername) {
  var username = forUsername || localStorage.getItem('tba_username');
  return username ? base + '_' + username.toLowerCase() : base;
}

// One-time upgrade for data saved before accounts had their own
// scoped storage: if the signed-in account has no scoped value yet
// but an old unscoped one exists, that's this account's pre-upgrade
// data (the only account that could have written it), so it's moved
// over rather than lost. Thread/progress keys are scanned separately
// since there's one per conversation rather than one fixed name.
function tbaMigrateLegacyAccountData() {
  var myUsername = localStorage.getItem('tba_username');
  if (!myUsername) return;
  if (localStorage.getItem('tba_account_migrated_' + myUsername.toLowerCase())) return;

  var legacyKeys = [
    'tba_bio', 'tba_links', 'tba_profile_pic',
    'tba_verification_status', 'tba_verification_reason', 'tba_verification_submitted_at',
    'tba_message_requests',
    'tba_network', 'tba_network_request_decisions', 'tba_sent_network_requests',
    'tba_notifications_read',
    'tba_esign_consent_accepted', 'tba_esign_consent_accepted_at'
  ];
  legacyKeys.forEach(function (base) {
    var legacyValue = localStorage.getItem(base);
    if (legacyValue === null) return;
    var scopedKey = tbaAccountKey(base);
    if (localStorage.getItem(scopedKey) === null) localStorage.setItem(scopedKey, legacyValue);
    localStorage.removeItem(base);
  });

  // Thread/progress keys can't be told apart from "legacy" vs.
  // "already scoped to some other account" just by prefix (both start
  // with tba_thread_/tba_progress_), unlike the fixed-name keys above
  // where the legacy key is simply gone once moved. So this only ever
  // runs once, globally (not per account) — there is only ever one
  // batch of true legacy data, from whichever single account was
  // active the moment this upgrade first loads; every account created
  // after that writes scoped keys from the start and has nothing to
  // migrate. Running it per-account would re-scan and steal another
  // account's already-scoped keys the next time a *different* account
  // signs up or logs in for the first time post-upgrade.
  if (!localStorage.getItem('tba_threads_migrated_global')) {
    ['tba_thread_', 'tba_progress_'].forEach(function (prefix) {
      Object.keys(localStorage).forEach(function (key) {
        if (key.indexOf(prefix) !== 0) return;
        var scoped = tbaAccountKey(key);
        if (localStorage.getItem(scoped) === null) localStorage.setItem(scoped, localStorage.getItem(key));
        localStorage.removeItem(key);
      });
    });
    localStorage.setItem('tba_threads_migrated_global', '1');
  }

  // Contracts predate having an `owner` field at all — same one-time,
  // whole-device reasoning as above: any contract already missing one
  // can only have been created by whichever single account was active
  // before this existed, so that's the best-effort owner to backfill.
  // Also global/once-only, for the same reason: re-running this for a
  // second account later would wrongly claim the first account's
  // contracts as its own.
  if (!localStorage.getItem('tba_contracts_owner_migrated_global')) {
    var contracts = tbaGetContracts();
    var changed = false;
    contracts.forEach(function (c) {
      if (!c.owner) { c.owner = myUsername; changed = true; }
    });
    if (changed) tbaSaveContracts(contracts);
    localStorage.setItem('tba_contracts_owner_migrated_global', '1');
  }

  localStorage.setItem('tba_account_migrated_' + myUsername.toLowerCase(), '1');
}
tbaMigrateLegacyAccountData();

// The optional `forUsername` lets a profile page read *any* local
// account's own saved bio/links/photo — not just the signed-in one —
// so viewing another real account (not just seed accounts) works.
// Every existing call site omits it and keeps meaning "me".
function tbaGetMyBio(forUsername) {
  return localStorage.getItem(tbaAccountKey('tba_bio', forUsername)) || '';
}

function tbaGetMyLinks(forUsername) {
  try {
    return JSON.parse(localStorage.getItem(tbaAccountKey('tba_links', forUsername)) || '[]').slice(0, TBA_MAX_LINKS);
  } catch (e) {
    return [];
  }
}

function tbaSaveMyProfile(bio, links) {
  localStorage.setItem(tbaAccountKey('tba_bio'), bio || '');
  localStorage.setItem(tbaAccountKey('tba_links'), JSON.stringify((links || []).slice(0, TBA_MAX_LINKS)));
}

function tbaGetMyProfilePic(forUsername) {
  return localStorage.getItem(tbaAccountKey('tba_profile_pic', forUsername)) || '';
}

function tbaSaveMyProfilePic(dataUrl) {
  if (dataUrl) {
    localStorage.setItem(tbaAccountKey('tba_profile_pic'), dataUrl);
  } else {
    localStorage.removeItem(tbaAccountKey('tba_profile_pic'));
  }
}

// A seed account's join date is expressed as "days ago" rather than a
// fixed calendar date, so it stays a believable, populated recent
// history (and keeps feeding the Last 7 Days chart below) no matter
// how much later this demo is actually opened.
function tbaSeedJoinedAt(daysAgo) {
  var d = new Date();
  d.setHours(9, 0, 0, 0);
  d.setDate(d.getDate() - (daysAgo || 0));
  return d.toISOString();
}

// Builds a profile object for any real (non-seed) local account from
// its own scoped storage — the signed-in one or a dormant one someone
// else is looking up. Shared by tbaGetAllUsers and tbaGetUserByUsername
// so "you" and "another real account" are read exactly the same way.
function tbaBuildLocalAccountProfile(account) {
  var myUsername = localStorage.getItem('tba_username');
  var isYou = !!(myUsername && myUsername.toLowerCase() === account.username.toLowerCase());
  return {
    username: account.username,
    name: '@' + account.username,
    role: account.role,
    tagline: isYou ? 'This is you.' : 'A member of THE INTROductory.',
    bio: tbaGetMyBio(account.username),
    links: tbaGetMyLinks(account.username),
    avatar: tbaGetMyProfilePic(account.username),
    verified: tbaIsVerified(account.username),
    joinedAt: account.joinedAt || new Date().toISOString(),
    isYou: isYou
  };
}

function tbaGetAllUsers() {
  var users = TBA_SEED_USERS.map(function (u) {
    var copy = {};
    for (var k in u) copy[k] = u[k];
    copy.verified = tbaIsVerified(u.username);
    copy.joinedAt = tbaSeedJoinedAt(u.daysAgoJoined);
    return copy;
  });
  var myUsername = localStorage.getItem('tba_username');
  var localAccounts = tbaGetLocalAccounts().slice().sort(function (a, b) {
    // "You" first, then everyone else most-recently-joined first.
    if (myUsername) {
      if (a.username.toLowerCase() === myUsername.toLowerCase()) return -1;
      if (b.username.toLowerCase() === myUsername.toLowerCase()) return 1;
    }
    return new Date(b.joinedAt || 0) - new Date(a.joinedAt || 0);
  });
  return localAccounts.map(tbaBuildLocalAccountProfile).concat(users);
}

// Mirrors tbaGetProfileViewsLast7Days' bucketing (same rolling 7-day
// window, oldest first, labeled by weekday) but for new-account
// signups platform-wide — i.e. every account that exists on this
// device, seed and real alike.
function tbaGetSignupsLast7Days() {
  var joinDates = tbaGetAllUsers().map(function (u) { return new Date(u.joinedAt); });
  var days = [];
  for (var i = 6; i >= 0; i--) {
    var day = new Date();
    day.setHours(0, 0, 0, 0);
    day.setDate(day.getDate() - i);
    var next = new Date(day);
    next.setDate(next.getDate() + 1);
    var count = joinDates.filter(function (d) { return d >= day && d < next; }).length;
    days.push({ label: day.toLocaleDateString(undefined, { weekday: 'short' }), count: count });
  }
  return days;
}

// No reporting/flagging feature exists anywhere in the app yet — this
// returns the honest answer (nothing) rather than inventing activity
// for a moderation queue that isn't actually wired to anything.
function tbaGetFlaggedReports() {
  return [];
}

// Looks up a single user by username — your own account, any other
// real account this browser has signed up (editable only by itself,
// but readable like any profile), or a seed account (read-only demo
// data).
function tbaGetUserByUsername(username) {
  if (!username) return null;
  var lower = username.toLowerCase();

  var localAccount = tbaFindLocalAccount(username);
  if (localAccount) return tbaBuildLocalAccountProfile(localAccount);

  var seedMatch = TBA_SEED_USERS.find(function (u) { return u.username.toLowerCase() === lower; });
  if (!seedMatch) return null;
  var copy = {};
  for (var k in seedMatch) copy[k] = seedMatch[k];
  copy.verified = tbaIsVerified(seedMatch.username);
  return copy;
}

// --- Account verification ---
// Applications live in localStorage so the admin pages (same browser,
// different tab) can review and decide on them. A handful of seed
// accounts ship pre-verified or with a pending application already in
// the queue, so the admin review page isn't empty on first visit.

var TBA_VERIFIED_SEED_USERNAMES = ["marencole", "skylinecoffee"];

var TBA_SEED_VERIFICATION_REQUESTS = [
  {
    username: "jordanblake",
    reason: "Verified creator on other platforms (YouTube Partner, 85K+ followers) — would help brands trust my deals here.",
    submittedAt: "2026-09-29T14:20:00Z"
  },
  {
    username: "pearandco",
    reason: "Established skincare brand with 5+ years in business and a physical storefront — want the badge so creators know we're legit.",
    submittedAt: "2026-10-01T09:05:00Z"
  }
];

function tbaGetVerificationOverrides() {
  try {
    return JSON.parse(localStorage.getItem('tba_verification_overrides') || '{}');
  } catch (e) {
    return {};
  }
}

function tbaIsVerified(username) {
  if (!username) return false;
  var lower = username.toLowerCase();

  // Any real local account (signed in right now or not) keeps its own
  // verification status under its own scoped key, same as its bio or
  // links — checked directly rather than only for whichever account
  // happens to be the active session.
  if (tbaFindLocalAccount(username)) {
    return localStorage.getItem(tbaAccountKey('tba_verification_status', username)) === 'approved';
  }

  var overrides = tbaGetVerificationOverrides();
  if (overrides[lower]) return overrides[lower] === 'approved';

  return TBA_VERIFIED_SEED_USERNAMES.some(function (u) { return u.toLowerCase() === lower; });
}

function tbaGetMyVerificationStatus() {
  return localStorage.getItem(tbaAccountKey('tba_verification_status')) || 'none';
}

function tbaGetMyVerificationReason() {
  return localStorage.getItem(tbaAccountKey('tba_verification_reason')) || '';
}

function tbaSubmitVerificationApplication(reason) {
  localStorage.setItem(tbaAccountKey('tba_verification_status'), 'pending');
  localStorage.setItem(tbaAccountKey('tba_verification_reason'), reason || '');
  localStorage.setItem(tbaAccountKey('tba_verification_submitted_at'), new Date().toISOString());
}

// Admin: every verification application currently awaiting a
// decision — the seed demo requests (unless this browser's admin
// already decided them) plus any real local account's own request,
// pending or not — including one that applied, then logged out, so
// its application doesn't go invisible to admin the moment it's not
// the active session.
function tbaGetPendingVerificationRequests() {
  var overrides = tbaGetVerificationOverrides();

  var requests = TBA_SEED_VERIFICATION_REQUESTS
    .filter(function (r) { return !overrides[r.username.toLowerCase()]; })
    .map(function (r) {
      var user = tbaGetUserByUsername(r.username);
      return {
        username: r.username,
        name: user ? user.name : r.username,
        role: user ? user.role : 'business',
        avatar: user ? user.avatar : '',
        reason: r.reason,
        submittedAt: r.submittedAt
      };
    });

  var myUsername = localStorage.getItem('tba_username');
  tbaGetLocalAccounts().forEach(function (account) {
    var status = localStorage.getItem(tbaAccountKey('tba_verification_status', account.username)) || 'none';
    if (status !== 'pending') return;
    requests.unshift({
      username: account.username,
      name: '@' + account.username,
      role: account.role,
      avatar: tbaGetMyProfilePic(account.username),
      reason: localStorage.getItem(tbaAccountKey('tba_verification_reason', account.username)) || '',
      submittedAt: localStorage.getItem(tbaAccountKey('tba_verification_submitted_at', account.username)) || new Date().toISOString(),
      isYou: !!(myUsername && myUsername.toLowerCase() === account.username.toLowerCase())
    });
  });

  return requests;
}

function tbaGetVerificationDecisionLog() {
  try {
    return JSON.parse(localStorage.getItem('tba_verification_log') || '[]');
  } catch (e) {
    return [];
  }
}

// Admin: approve or deny a pending application (your own account or
// a seed demo account) — routes to that account's own scoped status
// whether or not it's the currently active session, matching how
// tbaIsVerified/tbaGetPendingVerificationRequests read it.
function tbaDecideVerification(username, decision) {
  var user = tbaGetUserByUsername(username);

  if (tbaFindLocalAccount(username)) {
    localStorage.setItem(tbaAccountKey('tba_verification_status', username), decision);
  } else {
    var overrides = tbaGetVerificationOverrides();
    overrides[username.toLowerCase()] = decision;
    localStorage.setItem('tba_verification_overrides', JSON.stringify(overrides));
  }

  var log = tbaGetVerificationDecisionLog();
  log.unshift({
    username: username,
    name: user ? user.name : username,
    decision: decision,
    decidedAt: new Date().toISOString()
  });
  localStorage.setItem('tba_verification_log', JSON.stringify(log.slice(0, 20)));
}

// Small seal-style checkmark badge, colored by the calling page's own
// CSS (`.verified-badge { color: ...; }`) so it matches each theme.
function tbaVerifiedBadgeHtml() {
  return '<span class="verified-badge" title="Verified account" aria-label="Verified account">' +
    '<svg viewBox="0 0 20 20" width="14" height="14" aria-hidden="true">' +
    '<path fill="currentColor" d="M10 0l2.27 1.64 2.78-.52 1.1 2.6 2.6 1.1-.52 2.78L20 10l-1.77 2.4.52 2.78-2.6 1.1-1.1 2.6-2.78-.52L10 20l-2.27-1.64-2.78.52-1.1-2.6-2.6-1.1.52-2.78L0 10l1.77-2.4-.52-2.78 2.6-1.1 1.1-2.6 2.78.52L10 0z"/>' +
    '<path fill="#fff" d="M8.4 13.1L5.7 10.4l1.15-1.15L8.4 10.8l4.3-4.3 1.15 1.15z"/>' +
    '</svg></span>';
}

// Mock chat + deal history per seed account, used by the admin
// dashboard to show "what is this account talking about right now."
// Freshly signed-up accounts (including "you") start with none.
var TBA_DEAL_THREADS = {
  marencole: [{
    counterpart: "Skyline Coffee Co.", status: "negotiating",
    messages: [
      { from: "them", text: "Hi! We love your content and would love to talk about a sponsored post series with Skyline Coffee." },
      { from: "me", text: "Thanks for reaching out! I'd love to hear more about what you have in mind." },
      { from: "offer", text: "2 Instagram posts + 1 TikTok video — $1,800, delivered within 3 weeks." },
      { from: "them", text: "That works for us, but could we add a 3rd Instagram post to the package?" },
      { from: "me", text: "Happy to! Let's adjust the rate to cover the extra deliverable." },
      { from: "them", text: "Sounds good — can we lock in 3 posts?" }
    ],
    deal: { brand: "Skyline Coffee Co.", deliverables: "3 IG Posts + 1 TikTok", rate: "$2,100", timeline: "3 weeks", progress: 70 }
  }],
  riversidegear: [{
    counterpart: "Jordan Blake", status: "closed",
    messages: [
      { from: "me", text: "Everything looks great on our end — ready to sign when you are." },
      { from: "them", text: "Signed! Excited to get started on this one." },
      { from: "offer", text: "Deal signed — 1 YouTube Review, $1,200." }
    ],
    deal: { brand: "Riverside Outdoor Gear", deliverables: "1 YouTube Review", rate: "$1,200", timeline: "4 weeks", progress: 100 }
  }],
  jordanblake: [{
    counterpart: "Riverside Outdoor Gear", status: "closed",
    messages: [
      { from: "them", text: "Everything looks great on our end — ready to sign when you are." },
      { from: "me", text: "Signed! Excited to get started on this one." },
      { from: "offer", text: "Deal signed — 1 YouTube Review, $1,200." }
    ],
    deal: { brand: "Riverside Outdoor Gear", deliverables: "1 YouTube Review", rate: "$1,200", timeline: "4 weeks", progress: 100 }
  }],
  pearandco: [{
    counterpart: "Nina Reyes", status: "negotiating",
    messages: [
      { from: "me", text: "Thanks for the samples — loved the new serum!" },
      { from: "them", text: "So glad to hear it! Let's revisit the rate next week once you've tried the full routine." }
    ],
    deal: { brand: "Pear & Co. Skincare", deliverables: "2 IG Posts + 3 Stories", rate: "$950", timeline: "2 weeks", progress: 45 }
  }],
  skylinecoffee: [{
    counterpart: "Maren Cole", status: "negotiating",
    messages: [
      { from: "me", text: "Hi Maren! We love your content and would love to talk about a sponsored post series." },
      { from: "them", text: "Thanks for reaching out! I'd love to hear more about what you have in mind." },
      { from: "offer", text: "2 Instagram posts + 1 TikTok video — $1,800, delivered within 3 weeks." },
      { from: "me", text: "That works for us, but could we add a 3rd Instagram post to the package?" }
    ],
    deal: { brand: "Skyline Coffee Co.", deliverables: "3 IG Posts + 1 TikTok", rate: "$2,100", timeline: "3 weeks", progress: 70 }
  }],
  thecraftedtable: [{
    counterpart: "Ava Qian", status: "new",
    messages: [
      { from: "me", text: "Hi Ava! Our tableware line feels like a great fit for your food content — open to a collab?" },
      { from: "them", text: "Love this! Send over details on what you had in mind." }
    ],
    deal: { brand: "The Crafted Table", deliverables: "1 IG Reel", rate: "$700", timeline: "2 weeks", progress: 10 }
  }],
  brightlinestudio: [{
    counterpart: "Leo Ortiz", status: "negotiating",
    messages: [
      { from: "them", text: "Could we feature the case study across a short video series instead of just one post?" },
      { from: "me", text: "We can work with that — let's talk rate for the expanded scope." }
    ],
    deal: { brand: "Brightline Studio", deliverables: "3-part Video Series", rate: "$1,500", timeline: "5 weeks", progress: 35 }
  }],
  ninareyes: [{
    counterpart: "Pear & Co. Skincare", status: "negotiating",
    messages: [
      { from: "them", text: "Thanks for the samples — loved the new serum!" },
      { from: "me", text: "So glad to hear it! Let's revisit the rate next week once you've tried the full routine." }
    ],
    deal: { brand: "Pear & Co. Skincare", deliverables: "2 IG Posts + 3 Stories", rate: "$950", timeline: "2 weeks", progress: 45 }
  }],
  leoortiz: [{
    counterpart: "Brightline Studio", status: "negotiating",
    messages: [
      { from: "me", text: "Could we feature the case study across a short video series instead of just one post?" },
      { from: "them", text: "We can work with that — let's talk rate for the expanded scope." }
    ],
    deal: { brand: "Brightline Studio", deliverables: "3-part Video Series", rate: "$1,500", timeline: "5 weeks", progress: 35 }
  }],
  avaqian: [{
    counterpart: "The Crafted Table", status: "new",
    messages: [
      { from: "them", text: "Hi Ava! Our tableware line feels like a great fit for your food content — open to a collab?" },
      { from: "me", text: "Love this! Send over details on what you had in mind." }
    ],
    deal: { brand: "The Crafted Table", deliverables: "1 IG Reel", rate: "$700", timeline: "2 weeks", progress: 10 }
  }]
};

// Admin-only lookup: every chat/deal thread involving an account.
// Freshly signed-up accounts have none yet.
function tbaGetUserThreads(username) {
  if (!username) return [];
  var lower = username.toLowerCase();
  var key = Object.keys(TBA_DEAL_THREADS).find(function (k) { return k.toLowerCase() === lower; });
  return key ? TBA_DEAL_THREADS[key] : [];
}

function tbaGetSentRequests() {
  try {
    return JSON.parse(localStorage.getItem(tbaAccountKey('tba_message_requests')) || '[]');
  } catch (e) {
    return [];
  }
}

function tbaAddSentRequest(username) {
  var sent = tbaGetSentRequests();
  if (sent.indexOf(username) === -1) {
    sent.push(username);
    localStorage.setItem(tbaAccountKey('tba_message_requests'), JSON.stringify(sent));
  }
}

// --- Your conversations (Messaging & Negotiation) ---
// Each of your four starting threads ships with a short seed
// exchange; anything you send from here on is appended and persisted
// per account, with a simulated reply standing in for the other side
// since there's no backend to actually deliver and answer it.

var TBA_MY_THREADS_SEED = [
  {
    username: "marencole",
    displayName: "Maren Cole — Skyline Coffee Co.",
    subtitle: "Sponsored post campaign · Instagram & TikTok",
    status: "negotiating",
    statusLabel: "Negotiating",
    deal: { brand: "Skyline Coffee Co.", amount: 2100, videos: 3, offerBy: "me", timeline: "3 weeks", progress: 70 },
    messages: [
      { from: "them", text: "Hi! We love your content and would love to talk about a sponsored post series with Skyline Coffee." },
      { from: "me", text: "Thanks for reaching out! I'd love to hear more about what you have in mind." },
      { from: "me", type: "offer", amount: 1800, videos: 3 },
      { from: "them", text: "That works for us, but could we add a 3rd Instagram post to the package?" },
      { from: "me", text: "Happy to! Let's adjust the rate to cover the extra deliverable." },
      { from: "them", text: "Sounds good — can we lock in 3 posts?" }
    ]
  },
  {
    username: "riversidegear",
    displayName: "Riverside Outdoor Gear",
    subtitle: "Gear review collaboration",
    status: "new",
    statusLabel: "New",
    deal: { brand: "Riverside Outdoor Gear", amount: 1200, videos: 1, offerBy: "them", timeline: "4 weeks", progress: 20 },
    messages: [
      { from: "them", text: "Hey! Sent over our media kit and a few product options for the next gear review." },
      { from: "me", text: "Thanks for sending the media kit! Taking a look now." }
    ]
  },
  {
    username: "jordanblake",
    displayName: "Jordan Blake (Creator)",
    subtitle: "YouTube gear review — signed",
    status: "closed",
    statusLabel: "Closed",
    deal: { brand: "Riverside Outdoor Gear", amount: 1200, videos: 1, offerBy: "me", timeline: "4 weeks", progress: 100 },
    messages: [
      { from: "them", text: "Everything looks great on our end — ready to sign when you are." },
      { from: "me", text: "Signed! Excited to get started on this one." },
      { from: "me", type: "offer", amount: 1200, videos: 1 }
    ]
  },
  {
    username: "pearandco",
    displayName: "Pear & Co. Skincare",
    subtitle: "Skincare collab · rate under discussion",
    status: "negotiating",
    statusLabel: "Paused",
    deal: { brand: "Pear & Co. Skincare", amount: 950, videos: 2, offerBy: "them", timeline: "2 weeks", progress: 45 },
    messages: [
      { from: "me", text: "Thanks for the samples — loved the new serum!" },
      { from: "them", text: "So glad to hear it! Let's revisit the rate next week once you've tried the full routine." }
    ]
  }
];

var TBA_AUTO_REPLIES = [
  "Sounds good — let me check on that and get back to you.",
  "Appreciate you sending that over!",
  "That works on our end. Let's keep moving forward.",
  "Good question — give me a moment to confirm the details.",
  "Thanks for the update, I'll loop in the team.",
  "Noted — let's lock that in.",
  "Works for us. Anything else before we finalize?",
  "Got it, thank you for the quick reply!"
];

function tbaGetMyThread(username) {
  return TBA_MY_THREADS_SEED.find(function (t) { return t.username === username; }) || null;
}

function tbaGetMyThreadMessages(username) {
  var key = tbaAccountKey('tba_thread_' + username.toLowerCase());
  try {
    var stored = JSON.parse(localStorage.getItem(key));
    if (stored) return stored;
  } catch (e) { /* fall through to seed */ }
  var seed = tbaGetMyThread(username);
  return seed ? seed.messages.slice() : [];
}

function tbaSaveMyThreadMessages(username, messages) {
  localStorage.setItem(tbaAccountKey('tba_thread_' + username.toLowerCase()), JSON.stringify(messages));
}

// The amount + video count currently on the table — whichever side's
// offer landed most recently in the conversation, falling back to the
// thread's starting terms if neither side has made one yet.
function tbaGetCurrentOffer(username) {
  var messages = tbaGetMyThreadMessages(username);
  for (var i = messages.length - 1; i >= 0; i--) {
    if (messages[i].type === 'offer') {
      return { amount: messages[i].amount, videos: messages[i].videos, from: messages[i].from };
    }
  }
  var seed = tbaGetMyThread(username);
  return seed ? { amount: seed.deal.amount, videos: seed.deal.videos, from: seed.deal.offerBy } : null;
}

function tbaGetMyThreadProgress(username) {
  var stored = localStorage.getItem(tbaAccountKey('tba_progress_' + username.toLowerCase()));
  if (stored !== null) return parseInt(stored, 10);
  var seed = tbaGetMyThread(username);
  return seed ? seed.deal.progress : 0;
}

function tbaSaveMyThreadProgress(username, progress) {
  localStorage.setItem(tbaAccountKey('tba_progress_' + username.toLowerCase()), String(progress));
}

function tbaAppendMyThreadMessage(username, message) {
  var messages = tbaGetMyThreadMessages(username);
  if (!message.createdAt) message.createdAt = new Date().toISOString();
  messages.push(message);
  tbaSaveMyThreadMessages(username, messages);
  if (message.from === 'them' && window.tbaRefreshNotificationBell) window.tbaRefreshNotificationBell();
  return messages;
}

function tbaPickAutoReply() {
  return TBA_AUTO_REPLIES[Math.floor(Math.random() * TBA_AUTO_REPLIES.length)];
}

// --- Contracts ---
// Stored as one flat list in localStorage. Each contract belongs to
// one of your conversations and keeps a full version history — every
// save (yours or a simulated revision from the other side) appends a
// new version rather than overwriting the last one.

// Contracts created before multi-party support shipped are stored with
// a single `username` field and a `{ me, them }` signature pair. Every
// reader expects `participants: string[]` and a signature keyed by
// username, so old contracts are upgraded to that shape on read —
// this keeps contracts saved before the update from crashing the page.
function tbaNormalizeContract(c) {
  if (c.participants) return c;
  var counterpart = c.username;
  var signatures = { me: c.signatures ? c.signatures.me : null };
  signatures[counterpart] = c.signatures ? c.signatures.them : null;
  return Object.assign({}, c, { participants: [counterpart], signatures: signatures });
}

function tbaGetContracts() {
  try {
    var list = JSON.parse(localStorage.getItem('tba_contracts') || '[]');
    return list.map(tbaNormalizeContract);
  } catch (e) {
    return [];
  }
}

function tbaSaveContracts(list) {
  localStorage.setItem('tba_contracts', JSON.stringify(list));
}

function tbaGetContract(id) {
  return tbaGetContracts().find(function (c) { return c.id === id; }) || null;
}

function tbaCreateContract(contract) {
  var list = tbaGetContracts();
  list.unshift(contract);
  tbaSaveContracts(list);
  return contract;
}

function tbaUpdateContract(id, patch) {
  var list = tbaGetContracts();
  var idx = list.findIndex(function (c) { return c.id === id; });
  if (idx === -1) return null;
  list[idx] = Object.assign({}, list[idx], patch);
  tbaSaveContracts(list);
  return list[idx];
}

function tbaGetContractsForThread(username) {
  var myUsername = localStorage.getItem('tba_username');
  return tbaGetContracts().filter(function (c) { return c.owner === myUsername && c.participants.indexOf(username) !== -1; });
}

function tbaNewContractId() {
  return 'c_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function tbaFormatDateLong(iso) {
  return new Date(iso).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
}

// A lightweight stand-in for an AI drafting assistant: it pulls the
// real terms already on the table for each conversation (current
// offer, brand, timeline) into a standard agreement shape. There's no
// backend here to actually call a model from, so this is an honest
// "smart template," not a live AI call. Takes one or more participant
// usernames — a single one produces a standard two-party contract, more
// than one produces a multi-party agreement with a terms block per party.
function tbaGenerateContractDraft(myUsername, participantUsernames) {
  var today = tbaFormatDateLong(new Date().toISOString());
  var isMulti = participantUsernames.length > 1;

  var parties = participantUsernames.map(function (u) {
    var thread = tbaGetMyThread(u);
    var counterpart = tbaGetUserByUsername(u);
    var offer = tbaGetCurrentOffer(u);
    return {
      username: u,
      brand: thread ? thread.deal.brand : (counterpart ? counterpart.name : u),
      timeline: thread ? thread.deal.timeline : '4 weeks',
      amount: offer.amount,
      videos: offer.videos
    };
  });

  if (!isMulti) {
    var p = parties[0];
    var videosLabel = p.videos + ' video' + (p.videos === 1 ? '' : 's');
    return (
      'SPONSORSHIP AGREEMENT\n\n' +
      'This Sponsorship Agreement ("Agreement") is entered into on ' + today + ' by and between:\n\n' +
      'Creator: @' + myUsername + '\n' +
      'Brand: ' + p.brand + ' (@' + p.username + ')\n\n' +
      '1. SCOPE OF WORK\n' +
      'The Creator agrees to produce and deliver ' + videosLabel + ' promoting the Brand, in line with the ' +
      'creative direction discussed between the parties.\n\n' +
      '2. COMPENSATION\n' +
      'The Brand agrees to pay the Creator a total of $' + p.amount.toLocaleString() + ' USD for the deliverables ' +
      'described in this Agreement, payable within 15 days of final content approval.\n\n' +
      '3. TIMELINE\n' +
      'All deliverables shall be completed and submitted for review within ' + p.timeline + ' of the Effective Date.\n\n' +
      '4. CONTENT OWNERSHIP & USAGE\n' +
      'The Creator retains ownership of the original content. The Brand is granted a non-exclusive license to repost ' +
      'and share the delivered content on its own channels for promotional purposes.\n\n' +
      '5. APPROVAL\n' +
      'The Brand may review content prior to publishing and request reasonable revisions before delivery is considered final.\n\n' +
      '6. TERMINATION\n' +
      'Either party may terminate this Agreement with written notice if the other party fails to meet its obligations herein.\n\n' +
      '7. ENTIRE AGREEMENT\n' +
      'This Agreement represents the full understanding between the parties regarding this collaboration and supersedes ' +
      'any prior discussions.\n\n' +
      'SIGNATURES\n' +
      'This Agreement is not binding until signed by both parties below.'
    );
  }

  var partiesBlock = parties.map(function (party) {
    return 'Party: ' + party.brand + ' (@' + party.username + ')\n' +
      '  - Deliverables: ' + party.videos + ' video' + (party.videos === 1 ? '' : 's') + '\n' +
      '  - Compensation: $' + party.amount.toLocaleString() + ' USD\n' +
      '  - Timeline: ' + party.timeline;
  }).join('\n\n');

  return (
    'MULTI-PARTY SPONSORSHIP AGREEMENT\n\n' +
    'This Agreement is entered into on ' + today + ' by and between:\n\n' +
    'Creator: @' + myUsername + '\n\n' +
    partiesBlock + '\n\n' +
    '1. SCOPE OF WORK\n' +
    'The Creator agrees to produce and deliver the content described above for each party individually, in line ' +
    'with the creative direction discussed with each.\n\n' +
    '2. COMPENSATION\n' +
    'Each party agrees to pay the Creator the amount listed above for its respective deliverables, payable within ' +
    '15 days of final content approval.\n\n' +
    '3. CONTENT OWNERSHIP & USAGE\n' +
    'The Creator retains ownership of the original content. Each party is granted a non-exclusive license to ' +
    'repost and share the content delivered to it on its own channels for promotional purposes.\n\n' +
    '4. APPROVAL\n' +
    'Each party may review its content prior to publishing and request reasonable revisions before delivery is ' +
    'considered final.\n\n' +
    '5. TERMINATION\n' +
    'Any party may terminate its portion of this Agreement with written notice if the Creator fails to meet the ' +
    'obligations owed to it herein.\n\n' +
    '6. ENTIRE AGREEMENT\n' +
    'This Agreement represents the full understanding between all listed parties regarding this collaboration.\n\n' +
    'SIGNATURES\n' +
    'This Agreement is not binding until signed by all parties below.'
  );
}

function tbaBlankContractTemplate(myUsername, participantUsernames) {
  var today = tbaFormatDateLong(new Date().toISOString());
  var isMulti = participantUsernames.length > 1;

  var partiesText = participantUsernames.map(function (u) {
    var thread = tbaGetMyThread(u);
    var brand = thread ? thread.deal.brand : u;
    return 'Party: ' + brand + ' (@' + u + ')';
  }).join('\n');

  return (
    (isMulti ? 'MULTI-PARTY AGREEMENT' : 'AGREEMENT') + '\n\n' +
    'This Agreement is entered into on ' + today + ' by and between:\n\n' +
    'Creator: @' + myUsername + '\n' +
    partiesText + '\n\n' +
    '1. SCOPE OF WORK\n[Describe the deliverables here]\n\n' +
    '2. COMPENSATION\n[Describe payment terms here]\n\n' +
    '3. TIMELINE\n[Describe the delivery timeline here]\n\n' +
    'SIGNATURES\n' +
    'This Agreement is not binding until signed by ' + (isMulti ? 'all parties' : 'both parties') + ' below.'
  );
}

// A small, plausible edit to simulate the other side revising a
// contract you sent them — nudges the compensation line if present,
// and adds a short note, rather than rewriting the whole document.
// Only used for standard (single-counterpart) contracts.
function tbaSimulateContractRevision(text, counterpartUsername) {
  var counterpart = tbaGetUserByUsername(counterpartUsername);
  var name = counterpart ? counterpart.name : counterpartUsername;
  var revised = text.replace(/\$([\d,]+) USD/, function (match, amountStr) {
    var amount = parseInt(amountStr.replace(/,/g, ''), 10);
    var nudged = Math.max(100, Math.round((amount * (0.95 + Math.random() * 0.1)) / 25) * 25);
    return '$' + nudged.toLocaleString() + ' USD';
  });
  revised += '\n\n[Revision note from ' + name + ']: Adjusted the compensation slightly and otherwise this looks good to us.';
  return revised;
}

// --- Contract deadlines ---
// Once a contract is fully signed, its due date is simply "when you
// signed it, plus the timeline from the first linked conversation's
// deal terms."

function tbaParseTimelineDays(timelineStr) {
  if (!timelineStr) return 14;
  var m = /(\d+)\s*week/i.exec(timelineStr);
  if (m) return parseInt(m[1], 10) * 7;
  m = /(\d+)\s*day/i.exec(timelineStr);
  if (m) return parseInt(m[1], 10);
  return 14;
}

function tbaGetContractDueDate(contract) {
  if (!contract || contract.status !== 'signed' || !contract.signatures.me) return null;
  var thread = tbaGetMyThread(contract.participants[0]);
  var days = tbaParseTimelineDays(thread ? thread.deal.timeline : null);
  var due = new Date(contract.signatures.me.signedAt);
  due.setDate(due.getDate() + days);
  return due.toISOString();
}

function tbaGetUpcomingDeadlines() {
  var myUsername = localStorage.getItem('tba_username');
  return tbaGetContracts()
    .filter(function (c) { return c.status === 'signed' && c.owner === myUsername; })
    .map(function (c) {
      var due = tbaGetContractDueDate(c);
      if (!due) return null;
      return { contract: c, dueDate: due, daysLeft: Math.ceil((new Date(due) - new Date()) / 86400000) };
    })
    .filter(Boolean)
    .sort(function (a, b) { return new Date(a.dueDate) - new Date(b.dueDate); });
}

// --- Profile views ---
// A real, if modest, view counter: every time a profile page loads,
// the account being viewed gets one recorded visit, timestamped. In a
// single-browser demo that mostly means your own visits to your own
// profile — the dashboard shows that real (if small) number instead
// of a made-up one.
function tbaRecordProfileView(username) {
  if (!username) return;
  var key = 'tba_profile_views_' + username.toLowerCase();
  var views = tbaGetProfileViews(username);
  views.push(new Date().toISOString());
  localStorage.setItem(key, JSON.stringify(views.slice(-1000)));
}

function tbaGetProfileViews(username) {
  if (!username) return [];
  try {
    return JSON.parse(localStorage.getItem('tba_profile_views_' + username.toLowerCase()) || '[]');
  } catch (e) {
    return [];
  }
}

// Last 7 days' worth of view counts, oldest first, each labeled with
// its weekday — what the dashboard's bar chart renders.
function tbaGetProfileViewsLast7Days(username) {
  var views = tbaGetProfileViews(username).map(function (iso) { return new Date(iso); });
  var days = [];
  for (var i = 6; i >= 0; i--) {
    var day = new Date();
    day.setHours(0, 0, 0, 0);
    day.setDate(day.getDate() - i);
    var next = new Date(day);
    next.setDate(next.getDate() + 1);
    var count = views.filter(function (v) { return v >= day && v < next; }).length;
    days.push({ label: day.toLocaleDateString(undefined, { weekday: 'short' }), count: count });
  }
  return days;
}

// --- Dashboard stats ---
// Everything here is computed from the same thread/contract data the
// rest of the app already uses — no separate counters to keep in
// sync, and no placeholder numbers.

function tbaGetActiveConversationsCount() {
  return TBA_MY_THREADS_SEED.filter(function (t) { return t.status !== 'closed'; }).length;
}

// Threads where the other side's most recent message is an offer you
// haven't countered or accepted yet.
function tbaGetNewOffersCount() {
  return TBA_MY_THREADS_SEED.filter(function (t) {
    var messages = tbaGetMyThreadMessages(t.username);
    var last = messages[messages.length - 1];
    return last && last.type === 'offer' && last.from === 'them';
  }).length;
}

// Share of conversations with an incoming message that you've
// actually replied to — a real response rate, not a vanity number.
function tbaGetResponseRate() {
  var withIncoming = 0;
  var responded = 0;

  TBA_MY_THREADS_SEED.forEach(function (t) {
    var messages = tbaGetMyThreadMessages(t.username);
    var firstIncomingIndex = messages.findIndex(function (m) { return m.from === 'them'; });
    if (firstIncomingIndex === -1) return;
    withIncoming++;
    var repliedAfter = messages.slice(firstIncomingIndex + 1).some(function (m) { return m.from === 'me'; });
    if (repliedAfter) responded++;
  });

  if (withIncoming === 0) return null;
  return Math.round((responded / withIncoming) * 100);
}

// Deals you've actually closed — a thread marked closed, or any
// contract that's reached fully signed. Pass true to count only the
// signed-in account's own contracts (the home dashboard's personal
// stat); omit it for the whole device's total (the sign-in page's and
// admin's platform-wide figures, which are intentionally everyone's).
function tbaGetDealsClosedCount(onlyMine) {
  var closedUsernames = TBA_MY_THREADS_SEED
    .filter(function (t) { return t.status === 'closed'; })
    .map(function (t) { return t.username.toLowerCase(); });

  var myUsername = localStorage.getItem('tba_username');
  tbaGetContracts()
    .filter(function (c) { return c.status === 'signed' && (!onlyMine || c.owner === myUsername); })
    .forEach(function (c) {
      c.participants.forEach(function (p) {
        if (closedUsernames.indexOf(p.toLowerCase()) === -1) closedUsernames.push(p.toLowerCase());
      });
    });

  return closedUsernames.length;
}

// --- Activity feed ---
// Derived on the fly from data that already exists elsewhere (no
// separate event log to keep in sync) — verification status, closed
// deals, network connections, and signed contracts — so it works the
// same way for your own profile and for anyone else's.
function tbaGetActivityFor(username) {
  var myUsername = localStorage.getItem('tba_username');
  var isYou = !!(myUsername && myUsername.toLowerCase() === username.toLowerCase());
  var activities = [];

  if (tbaIsVerified(username)) {
    var logEntry = tbaGetVerificationDecisionLog().find(function (l) {
      return l.username.toLowerCase() === username.toLowerCase() && l.decision === 'approved';
    });
    activities.push({
      icon: '✅', text: 'Became a verified account', date: logEntry ? logEntry.decidedAt : null,
      link: isYou ? 'profile.html' : 'profile.html?u=' + encodeURIComponent(username)
    });
  }

  if (isYou) {
    TBA_MY_THREADS_SEED.forEach(function (t) {
      if (t.status === 'closed') {
        activities.push({
          icon: '🤝', text: 'Closed a deal with ' + t.displayName, date: null,
          link: 'messaging.html?thread=' + encodeURIComponent(t.username)
        });
      }
    });
  } else {
    tbaGetUserThreads(username).forEach(function (t) {
      if (t.status === 'closed') {
        // No real page shows this account's own deal thread with a
        // third party — it's display-only seed history, so this one
        // activity item is left unlinked rather than pointed at
        // something that isn't actually there.
        activities.push({ icon: '🤝', text: 'Closed a deal with ' + t.counterpart, date: null, link: null });
      }
    });
  }

  tbaGetNetworkFor(username).forEach(function (member) {
    activities.push({
      icon: '🔗', text: 'Connected with ' + member.name, date: null,
      link: 'profile.html?u=' + encodeURIComponent(member.username)
    });
  });

  tbaGetContracts().forEach(function (c) {
    if (c.status !== 'signed') return;
    var involved = isYou
      ? c.owner === myUsername
      : c.participants.some(function (p) { return p.toLowerCase() === username.toLowerCase(); });
    if (!involved) return;
    var sig = isYou ? c.signatures.me : c.signatures[username];
    var otherNames = isYou
      ? c.participants.map(function (p) { var u = tbaGetUserByUsername(p); return u ? u.name : p; }).join(', ')
      : '@' + myUsername;
    activities.push({
      icon: '📄', text: 'Signed "' + c.name + '" with ' + otherNames, date: sig ? sig.signedAt : null,
      link: 'messaging.html?contract=' + encodeURIComponent(c.id)
    });
  });

  activities.sort(function (a, b) {
    if (a.date && b.date) return new Date(b.date) - new Date(a.date);
    if (a.date) return -1;
    if (b.date) return 1;
    return 0;
  });

  return activities.slice(0, 12);
}

// --- The Network ---
// Landing a deal (a thread whose status is "closed") lets both sides
// add each other to their network, but only once both accept. Seed
// accounts already paired off this way ship pre-connected so the
// directory isn't empty; "you" always close your one deal with Jordan
// Blake (matching the Home dashboard and Messaging's static
// Conversations list), which is what generates your own incoming
// network request to accept or decline.

var TBA_SEED_NETWORK_CONNECTIONS = {
  jordanblake: ["riversidegear"],
  riversidegear: ["jordanblake"]
};

function tbaGetMyNetwork(forUsername) {
  try {
    return JSON.parse(localStorage.getItem(tbaAccountKey('tba_network', forUsername)) || '[]');
  } catch (e) {
    return [];
  }
}

function tbaIsInMyNetwork(username) {
  if (!username) return false;
  var lower = username.toLowerCase();
  return tbaGetMyNetwork().some(function (u) { return u.toLowerCase() === lower; });
}

function tbaAddToMyNetwork(username) {
  var network = tbaGetMyNetwork();
  if (network.indexOf(username) === -1) {
    network.push(username);
    localStorage.setItem(tbaAccountKey('tba_network'), JSON.stringify(network));
  }
}

function tbaRemoveFromMyNetwork(username) {
  var lower = username.toLowerCase();
  var network = tbaGetMyNetwork().filter(function (u) { return u.toLowerCase() !== lower; });
  localStorage.setItem(tbaAccountKey('tba_network'), JSON.stringify(network));
}

function tbaGetNetworkRequestDecisions() {
  try {
    return JSON.parse(localStorage.getItem(tbaAccountKey('tba_network_request_decisions')) || '{}');
  } catch (e) {
    return {};
  }
}

// Every closed deal of yours that hasn't yet been accepted/declined —
// in this demo, that's always just Jordan Blake, mirroring the one
// closed deal shown elsewhere in the app (Home's Recent Activity and
// Messaging's Conversations list both already say this deal is done).
function tbaGetIncomingNetworkRequests() {
  var myUsername = localStorage.getItem('tba_username');
  if (!myUsername) return [];

  var decisions = tbaGetNetworkRequestDecisions();
  if (decisions.jordanblake || tbaIsInMyNetwork('jordanblake')) return [];

  var user = tbaGetUserByUsername('jordanblake');
  return [{
    username: 'jordanblake',
    name: user ? user.name : 'Jordan Blake',
    role: user ? user.role : 'influencer',
    avatar: user ? user.avatar : ''
  }];
}

function tbaDecideNetworkRequest(username, decision) {
  var decisions = tbaGetNetworkRequestDecisions();
  decisions[username.toLowerCase()] = decision;
  localStorage.setItem(tbaAccountKey('tba_network_request_decisions'), JSON.stringify(decisions));
  if (decision === 'accepted') tbaAddToMyNetwork(username);
}

// Manual, non-deal network requests you send from the directory.
// There's no backend to actually deliver these to another real
// account and get a reply, so — while the app is still in testing —
// sending one adds them to your network immediately instead of
// leaving it stuck pending forever.
function tbaGetSentNetworkRequests() {
  try {
    return JSON.parse(localStorage.getItem(tbaAccountKey('tba_sent_network_requests')) || '[]');
  } catch (e) {
    return [];
  }
}

function tbaSendNetworkRequest(username) {
  var sent = tbaGetSentNetworkRequests();
  if (sent.indexOf(username) === -1) {
    sent.push(username);
    localStorage.setItem(tbaAccountKey('tba_sent_network_requests'), JSON.stringify(sent));
  }
  tbaAddToMyNetwork(username);
}

// The network shown on any account's profile page — seed demo
// connections, plus "you" if you've accepted a connection with them.
function tbaGetNetworkFor(username) {
  if (!username) return [];
  var lower = username.toLowerCase();
  var myUsername = localStorage.getItem('tba_username');

  // Any real local account — the signed-in one or another one being
  // looked up — has its own real network, read the same way either
  // way.
  if (tbaFindLocalAccount(username)) {
    return tbaGetMyNetwork(username)
      .map(function (u) { return tbaGetUserByUsername(u); })
      .filter(Boolean);
  }

  var seedKey = Object.keys(TBA_SEED_NETWORK_CONNECTIONS).find(function (k) { return k.toLowerCase() === lower; });
  var usernames = seedKey ? TBA_SEED_NETWORK_CONNECTIONS[seedKey].slice() : [];

  if (myUsername && tbaIsInMyNetwork(lower)) {
    usernames.push(myUsername);
  }

  return usernames
    .map(function (u) { return tbaGetUserByUsername(u); })
    .filter(Boolean);
}

// --- Light / dark mode ---
// One preference, shared across every page via localStorage. Unset
// means "use this page's own default look" (the designed light or
// dark theme) — picking a mode in the toggle overrides that default
// everywhere until changed again.

function tbaGetTheme() {
  var t = localStorage.getItem('tba_theme');
  return (t === 'light' || t === 'dark') ? t : null;
}

function tbaSetTheme(theme) {
  if (theme === 'light' || theme === 'dark') {
    localStorage.setItem('tba_theme', theme);
  } else {
    localStorage.removeItem('tba_theme');
  }
}

// Applied immediately as this script loads (it's a blocking <script>
// in every page's <head>), so the right theme is in place before the
// page paints — no flash of the wrong colors.
function tbaApplyTheme() {
  var t = tbaGetTheme();
  if (t) {
    document.documentElement.setAttribute('data-theme', t);
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
}

tbaApplyTheme();

// Wires up a theme-toggle button: reflects the current effective
// theme (falling back to the page's own natural default when no
// preference is saved yet) and flips it on click.
// Hand-drawn line icons (currentColor strokes/fills, so each picks up
// whatever text color the button already uses in its theme) in place
// of emoji, which render as a different picture on every OS and don't
// match this app's own visual language.
function tbaIconSun() {
  return '<svg viewBox="0 0 20 20" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true">' +
    '<circle cx="10" cy="10" r="3.6"/>' +
    '<path d="M10 1.8v2.1M10 16.1v2.1M18.2 10h-2.1M3.9 10H1.8M15.73 4.27l-1.49 1.49M5.76 14.24l-1.49 1.49M15.73 15.73l-1.49-1.49M5.76 5.76L4.27 4.27"/>' +
    '</svg>';
}

function tbaIconMoon() {
  return '<svg viewBox="0 0 20 20" width="15" height="15" fill="currentColor" aria-hidden="true">' +
    '<path d="M17.2 12.44A7.5 7.5 0 018.06 3.3a.8.8 0 00-1-1.02A8.5 8.5 0 1018.2 13.4a.8.8 0 00-1-.96z"/>' +
    '</svg>';
}

// A bell with a small signature notch at the base — a deliberate
// deviation from a plain bell outline so it reads as this app's icon
// rather than a stock glyph, while staying recognizable at 16px.
function tbaIconBell() {
  return '<svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<path d="M5 8.2a5 5 0 0110 0c0 3.1 1.05 4.5 1.55 5.1a.6.6 0 01-.46 1H3.91a.6.6 0 01-.46-1C3.95 12.7 5 11.3 5 8.2z"/>' +
    '<path d="M8.15 16.4a1.9 1.9 0 003.7 0"/>' +
    '<path d="M8.6 8.2a1.4 1.4 0 012.8 0" stroke-width="1.3"/>' +
    '</svg>';
}

function tbaWireThemeToggle(buttonId, naturalDefault) {
  var btn = document.getElementById(buttonId);
  if (!btn) return;

  function effectiveTheme() {
    return tbaGetTheme() || naturalDefault;
  }

  function render() {
    var current = effectiveTheme();
    btn.innerHTML = current === 'dark' ? tbaIconSun() : tbaIconMoon();
    btn.setAttribute('aria-label', current === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    btn.title = current === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
  }

  btn.addEventListener('click', function () {
    var next = effectiveTheme() === 'dark' ? 'light' : 'dark';
    tbaSetTheme(next);
    tbaApplyTheme();
    render();
  });

  render();
}

// --- Notifications ---
// Built from events already recorded elsewhere — new messages from
// the other side, and verification decisions on your own account —
// rather than a separate log, so there's nothing new to keep in sync.
// Only timestamped events count, which in practice means events from
// this session (simulated replies, contract activity, signatures),
// not the pre-loaded seed conversation history.

// Stored as { id: isoTimestampWhenMarkedRead }, not just a list of
// ids — the timestamp is what lets a read notification disappear 24
// hours after it was actually seen (an unread one never expires; it
// stays until you read it).
var TBA_NOTIFICATION_READ_TTL_MS = 24 * 60 * 60 * 1000;

function tbaGetReadNotificationTimes() {
  try {
    var raw = JSON.parse(localStorage.getItem(tbaAccountKey('tba_notifications_read')) || '{}');
    return (raw && typeof raw === 'object' && !Array.isArray(raw)) ? raw : {};
  } catch (e) {
    return {};
  }
}

function tbaMarkNotificationRead(id) {
  var read = tbaGetReadNotificationTimes();
  if (!read[id]) {
    read[id] = new Date().toISOString();
    localStorage.setItem(tbaAccountKey('tba_notifications_read'), JSON.stringify(read));
  }
}

function tbaMarkAllNotificationsRead() {
  var read = tbaGetReadNotificationTimes();
  var now = new Date().toISOString();
  tbaGetNotifications().forEach(function (n) {
    if (!read[n.id]) read[n.id] = now;
  });
  localStorage.setItem(tbaAccountKey('tba_notifications_read'), JSON.stringify(read));
}

// Immediately empties the list, instead of marking everything read
// and waiting out the normal 24-hour grace period — backdates every
// current notification's read time past the TTL so the very next
// read of the list filters them all out right away.
function tbaClearAllNotifications() {
  var read = tbaGetReadNotificationTimes();
  var expiredAt = new Date(Date.now() - TBA_NOTIFICATION_READ_TTL_MS - 1000).toISOString();
  tbaGetNotifications().forEach(function (n) { read[n.id] = expiredAt; });
  localStorage.setItem(tbaAccountKey('tba_notifications_read'), JSON.stringify(read));
}

function tbaNotificationMessagePreview(m) {
  if (m.type === 'offer') {
    return 'Countered with $' + m.amount.toLocaleString() + ' for ' + m.videos + ' video' + (m.videos === 1 ? '' : 's');
  }
  if (m.type === 'contract') {
    var verb = m.action === 'sent' ? 'Sent a contract' : m.action === 'revised' ? 'Sent back a revised contract' : 'Contract update';
    return verb + ': ' + m.contractName;
  }
  return m.text;
}

function tbaGetNotifications() {
  var myUsername = localStorage.getItem('tba_username');
  if (!myUsername) return [];

  var notifications = [];

  TBA_MY_THREADS_SEED.forEach(function (t) {
    var messages = tbaGetMyThreadMessages(t.username);
    messages.forEach(function (m, i) {
      if (m.from !== 'them' || !m.createdAt) return;
      notifications.push({
        id: 'msg-' + t.username + '-' + i,
        icon: m.type === 'contract' ? '📄' : m.type === 'offer' ? '💰' : '💬',
        title: t.displayName,
        text: tbaNotificationMessagePreview(m),
        date: m.createdAt,
        link: 'messaging.html?thread=' + encodeURIComponent(t.username)
      });
    });
  });

  tbaGetVerificationDecisionLog()
    .filter(function (l) { return l.username.toLowerCase() === myUsername.toLowerCase(); })
    .forEach(function (d) {
      notifications.push({
        id: 'verify-' + d.decidedAt,
        icon: d.decision === 'approved' ? '✅' : '✖️',
        title: 'Verification',
        text: d.decision === 'approved' ? 'Your account was verified!' : 'Your verification application was not approved this time.',
        date: d.decidedAt,
        link: 'profile.html'
      });
    });

  notifications.sort(function (a, b) { return new Date(b.date) - new Date(a.date); });

  var readTimes = tbaGetReadNotificationTimes();
  var now = Date.now();
  notifications = notifications.filter(function (n) {
    var readAt = readTimes[n.id];
    return !readAt || (now - new Date(readAt).getTime()) < TBA_NOTIFICATION_READ_TTL_MS;
  });
  notifications.forEach(function (n) { n.read = !!readTimes[n.id]; });

  return notifications;
}

function tbaFormatRelativeTime(iso) {
  var diffMs = Date.now() - new Date(iso).getTime();
  var mins = Math.round(diffMs / 60000);
  if (mins < 1) return 'just now';
  if (mins < 60) return mins + 'm ago';
  var hours = Math.round(mins / 60);
  if (hours < 24) return hours + 'h ago';
  var days = Math.round(hours / 24);
  return days + 'd ago';
}

function tbaEscapeHtmlForNotif(str) {
  return String(str || '').replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
}

// The notification panel is `position: fixed` (viewport-relative, not
// page-relative) so that once it's open it stays put on screen as the
// page scrolls underneath it, instead of scrolling away with the
// header and ending up visually buried under the rest of the page.
// This computes that fixed position from the bell button's current
// on-screen location, clamped so the panel never runs off either
// edge of the viewport.
function tbaPositionNotifPanel(panel, anchorBtn) {
  var rect = anchorBtn.getBoundingClientRect();
  var margin = 12;
  var width = panel.offsetWidth || 320;
  var vw = document.documentElement.clientWidth;
  var left = rect.right - width;
  if (left < margin) left = margin;
  if (left + width > vw - margin) left = Math.max(margin, vw - margin - width);
  panel.style.left = left + 'px';
  panel.style.right = 'auto';
  panel.style.top = (rect.bottom + 10) + 'px';
}

// Wires up a notification bell: `wrapId` is a positioned wrapper
// (position: relative) holding the bell button itself, `btnId`. The
// dropdown panel and its contents are built and injected here, so
// every page only needs to markup the bell button.
function tbaWireNotificationBell(wrapId, btnId) {
  var wrap = document.getElementById(wrapId);
  var btn = document.getElementById(btnId);
  if (!wrap || !btn) return;

  btn.innerHTML = tbaIconBell();

  var badge = document.createElement('span');
  badge.className = 'notif-badge';
  badge.hidden = true;
  btn.appendChild(badge);

  var panel = document.createElement('div');
  panel.className = 'notif-panel';
  panel.hidden = true;
  // Appended to <body> rather than `wrap` so the panel's fixed
  // positioning can never be hijacked by a transform/filter on some
  // ancestor (the header's entrance animation, a blurred nav
  // background, etc.) turning that ancestor into its containing
  // block instead of the viewport.
  document.body.appendChild(panel);
  tbaPositionNotifPanel(panel, btn);

  function renderPanel() {
    var notifications = tbaGetNotifications();
    var unread = notifications.filter(function (n) { return !n.read; }).length;

    badge.style.display = unread === 0 ? 'none' : 'flex';
    badge.textContent = unread > 9 ? '9+' : String(unread);

    var listHtml = notifications.length === 0
      ? '<p class="notif-empty">Nothing new yet.</p>'
      : notifications.slice(0, 20).map(function (n) {
          return (
            '<a class="notif-item' + (n.read ? '' : ' unread') + '" href="' + n.link + '" data-id="' + n.id + '">' +
            '<span class="notif-icon">' + n.icon + '</span>' +
            '<span class="notif-body">' +
            '<span class="notif-title">' + tbaEscapeHtmlForNotif(n.title) + '</span>' +
            '<span class="notif-text">' + tbaEscapeHtmlForNotif(n.text) + '</span>' +
            '<span class="notif-time">' + tbaFormatRelativeTime(n.date) + '</span>' +
            '</span>' +
            '</a>'
          );
        }).join('');

    panel.innerHTML =
      '<div class="notif-panel-head">' +
      '<span>Notifications</span>' +
      '<span style="display:flex;align-items:center;gap:10px;">' +
      (unread > 0 ? '<button type="button" class="notif-mark-all" id="notif-mark-all">Mark all read</button>' : '') +
      (notifications.length > 0 ? '<button type="button" class="notif-mark-all" id="notif-clear-all">Clear all</button>' : '') +
      '</span>' +
      '</div>' +
      '<div class="notif-panel-list">' + listHtml + '</div>';

    var markAllBtn = document.getElementById('notif-mark-all');
    if (markAllBtn) {
      markAllBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        tbaMarkAllNotificationsRead();
        renderPanel();
      });
    }

    var clearAllBtn = document.getElementById('notif-clear-all');
    if (clearAllBtn) {
      clearAllBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        tbaClearAllNotifications();
        renderPanel();
      });
    }

    panel.querySelectorAll('.notif-item').forEach(function (item) {
      item.addEventListener('click', function () {
        tbaMarkNotificationRead(item.getAttribute('data-id'));
      });
    });
  }

  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    panel.hidden = !panel.hidden;
    if (!panel.hidden) {
      tbaPositionNotifPanel(panel, btn);
      renderPanel();
    }
  });

  document.addEventListener('click', function (e) {
    if (!panel.hidden && !wrap.contains(e.target) && !panel.contains(e.target)) panel.hidden = true;
  });

  window.addEventListener('resize', function () {
    if (!panel.hidden) tbaPositionNotifPanel(panel, btn);
  });

  renderPanel();

  // Exposed so a page can refresh the unread badge right after it
  // posts a new simulated message, instead of waiting for the next
  // bell click or page load.
  window.tbaRefreshNotificationBell = renderPanel;
}

// --- Admin notifications ---
// A separate feed from the user-facing one above: this is less a
// changelog of "what happened" and more an admin inbox of "what
// needs a look" — pending verification applications (including the
// seed demo queue, which is the actual admin review workload here,
// not session backstory to filter out) and contracts that just
// reached fully-signed. Tracked with its own read-state key so it
// never interacts with the user-facing bell's read state.

function tbaGetAdminReadNotificationTimes() {
  try {
    var raw = JSON.parse(localStorage.getItem('tba_admin_notifications_read') || '{}');
    return (raw && typeof raw === 'object' && !Array.isArray(raw)) ? raw : {};
  } catch (e) {
    return {};
  }
}

function tbaMarkAdminNotificationRead(id) {
  var read = tbaGetAdminReadNotificationTimes();
  if (!read[id]) {
    read[id] = new Date().toISOString();
    localStorage.setItem('tba_admin_notifications_read', JSON.stringify(read));
  }
}

function tbaMarkAllAdminNotificationsRead() {
  var read = tbaGetAdminReadNotificationTimes();
  var now = new Date().toISOString();
  tbaGetAdminNotifications().forEach(function (n) {
    if (!read[n.id]) read[n.id] = now;
  });
  localStorage.setItem('tba_admin_notifications_read', JSON.stringify(read));
}

function tbaClearAllAdminNotifications() {
  var read = tbaGetAdminReadNotificationTimes();
  var expiredAt = new Date(Date.now() - TBA_NOTIFICATION_READ_TTL_MS - 1000).toISOString();
  tbaGetAdminNotifications().forEach(function (n) { read[n.id] = expiredAt; });
  localStorage.setItem('tba_admin_notifications_read', JSON.stringify(read));
}

function tbaGetAdminNotifications() {
  var notifications = [];

  tbaGetPendingVerificationRequests().forEach(function (r) {
    notifications.push({
      id: 'adminverify-' + r.username,
      icon: '🪪',
      title: 'Verification',
      text: 'New application from ' + r.name,
      date: r.submittedAt,
      link: 'admin-verifications.html'
    });
  });

  tbaGetContracts()
    .filter(function (c) { return c.status === 'signed'; })
    .forEach(function (c) {
      var sigDates = [c.signatures.me].concat(c.participants.map(function (p) { return c.signatures[p]; }))
        .filter(Boolean)
        .map(function (s) { return s.signedAt; });
      var signedAt = sigDates.length ? sigDates.sort().slice(-1)[0] : c.createdAt;
      notifications.push({
        id: 'adminsigned-' + c.id,
        icon: '📄',
        title: 'Contract signed',
        text: '"' + c.name + '" is now fully executed',
        date: signedAt,
        link: 'admin-contracts.html?contract=' + encodeURIComponent(c.id)
      });
    });

  notifications.sort(function (a, b) { return new Date(b.date) - new Date(a.date); });

  var readTimes = tbaGetAdminReadNotificationTimes();
  var now = Date.now();
  notifications = notifications.filter(function (n) {
    var readAt = readTimes[n.id];
    return !readAt || (now - new Date(readAt).getTime()) < TBA_NOTIFICATION_READ_TTL_MS;
  });
  notifications.forEach(function (n) { n.read = !!readTimes[n.id]; });

  return notifications;
}

function tbaWireAdminNotificationBell(wrapId, btnId) {
  var wrap = document.getElementById(wrapId);
  var btn = document.getElementById(btnId);
  if (!wrap || !btn) return;

  btn.innerHTML = tbaIconBell();

  var badge = document.createElement('span');
  badge.className = 'notif-badge';
  badge.style.display = 'none';
  btn.appendChild(badge);

  var panel = document.createElement('div');
  panel.className = 'notif-panel';
  panel.hidden = true;
  // Appended to <body> rather than `wrap` so the panel's fixed
  // positioning can never be hijacked by a transform/filter on some
  // ancestor (the header's entrance animation, a blurred nav
  // background, etc.) turning that ancestor into its containing
  // block instead of the viewport.
  document.body.appendChild(panel);
  tbaPositionNotifPanel(panel, btn);

  function renderPanel() {
    var notifications = tbaGetAdminNotifications();
    var unread = notifications.filter(function (n) { return !n.read; }).length;

    badge.style.display = unread === 0 ? 'none' : 'flex';
    badge.textContent = unread > 9 ? '9+' : String(unread);

    var listHtml = notifications.length === 0
      ? '<p class="notif-empty">Nothing needs your attention.</p>'
      : notifications.slice(0, 20).map(function (n) {
          return (
            '<a class="notif-item' + (n.read ? '' : ' unread') + '" href="' + n.link + '" data-id="' + n.id + '">' +
            '<span class="notif-icon">' + n.icon + '</span>' +
            '<span class="notif-body">' +
            '<span class="notif-title">' + tbaEscapeHtmlForNotif(n.title) + '</span>' +
            '<span class="notif-text">' + tbaEscapeHtmlForNotif(n.text) + '</span>' +
            '<span class="notif-time">' + tbaFormatRelativeTime(n.date) + '</span>' +
            '</span>' +
            '</a>'
          );
        }).join('');

    panel.innerHTML =
      '<div class="notif-panel-head">' +
      '<span>Notifications</span>' +
      '<span style="display:flex;align-items:center;gap:10px;">' +
      (unread > 0 ? '<button type="button" class="notif-mark-all" id="admin-notif-mark-all">Mark all read</button>' : '') +
      (notifications.length > 0 ? '<button type="button" class="notif-mark-all" id="admin-notif-clear-all">Clear all</button>' : '') +
      '</span>' +
      '</div>' +
      '<div class="notif-panel-list">' + listHtml + '</div>';

    var markAllBtn = document.getElementById('admin-notif-mark-all');
    if (markAllBtn) {
      markAllBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        tbaMarkAllAdminNotificationsRead();
        renderPanel();
      });
    }

    var clearAllBtn = document.getElementById('admin-notif-clear-all');
    if (clearAllBtn) {
      clearAllBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        tbaClearAllAdminNotifications();
        renderPanel();
      });
    }

    panel.querySelectorAll('.notif-item').forEach(function (item) {
      item.addEventListener('click', function () {
        tbaMarkAdminNotificationRead(item.getAttribute('data-id'));
      });
    });
  }

  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    panel.hidden = !panel.hidden;
    if (!panel.hidden) {
      tbaPositionNotifPanel(panel, btn);
      renderPanel();
    }
  });

  document.addEventListener('click', function (e) {
    if (!panel.hidden && !wrap.contains(e.target) && !panel.contains(e.target)) panel.hidden = true;
  });

  window.addEventListener('resize', function () {
    if (!panel.hidden) tbaPositionNotifPanel(panel, btn);
  });

  renderPanel();
}

// --- Toasts ---
// A small, floating confirmation for actions that already change the
// page (saved a profile, sent a contract, signed, etc.) — the page's
// own state already reflects the change, so this is just a moment of
// "yes, that worked" feedback. Styles are injected once, directly,
// rather than added to all eight page stylesheets, since a toast is a
// floating overlay rather than themed page content — one dark pill
// reads fine over any page, light or dark.
function tbaEnsureToastStyles() {
  if (document.getElementById('tba-toast-styles')) return;
  var style = document.createElement('style');
  style.id = 'tba-toast-styles';
  style.textContent =
    '.tba-toast-container { position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%); z-index: 9999; display: flex; flex-direction: column; gap: 8px; align-items: center; pointer-events: none; }' +
    '.tba-toast { pointer-events: auto; background: rgba(22,22,28,0.95); color: #fff; font-family: "Inter", "Helvetica Neue", Arial, sans-serif; font-size: 13.5px; font-weight: 600; padding: 12px 22px; border-radius: 999px; box-shadow: 0 12px 32px rgba(0,0,0,0.35); opacity: 0; transform: translateY(14px); transition: opacity 0.25s ease, transform 0.25s ease; display: flex; align-items: center; gap: 9px; max-width: min(420px, 90vw); border-left: 3px solid #3ea6ff; }' +
    '.tba-toast.show { opacity: 1; transform: translateY(0); }' +
    '.tba-toast-success { border-left-color: #34c98a; }' +
    '.tba-toast-error { border-left-color: #f16565; }' +
    '.tba-toast-icon { font-size: 14px; flex-shrink: 0; }';
  document.head.appendChild(style);
}

function tbaShowToast(message, type) {
  tbaEnsureToastStyles();

  var container = document.getElementById('tba-toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'tba-toast-container';
    container.className = 'tba-toast-container';
    document.body.appendChild(container);
  }

  var icon = type === 'success' ? '✅' : type === 'error' ? '⚠️' : '💬';
  var toast = document.createElement('div');
  toast.className = 'tba-toast' + (type ? ' tba-toast-' + type : '');
  toast.innerHTML = '<span class="tba-toast-icon">' + icon + '</span><span>' + tbaEscapeHtmlForNotif(message) + '</span>';
  container.appendChild(toast);

  requestAnimationFrame(function () { toast.classList.add('show'); });
  setTimeout(function () {
    toast.classList.remove('show');
    setTimeout(function () { toast.remove(); }, 300);
  }, 3200);
}

// --- Terms & legal-notice acceptance gate ---
// A real sponsorship-deal platform would need explicit, logged
// acceptance of its terms before anyone could use it — especially one
// that lets people draft and "sign" contracts. This blocks the app
// (not the public marketing/legal pages) behind a one-time acceptance
// screen until tba_terms_accepted is set, the same way the auth guard
// blocks unauthenticated access. It is disclosure, not magic: nothing
// here — or anywhere else in this demo — makes a contract made in this
// app an actual legally binding agreement. See terms.html for the
// full notices this screen summarizes.
function tbaHasAcceptedTerms() {
  return localStorage.getItem('tba_terms_accepted') === '1';
}

function tbaAcceptTerms() {
  localStorage.setItem('tba_terms_accepted', '1');
  localStorage.setItem('tba_terms_accepted_at', new Date().toISOString());
}

function tbaEnsureTermsGateStyles() {
  if (document.getElementById('tba-terms-gate-styles')) return;
  var style = document.createElement('style');
  style.id = 'tba-terms-gate-styles';
  style.textContent =
    '.tba-terms-overlay { position: fixed; inset: 0; z-index: 10000; background: rgba(10,8,5,0.72); display: flex; align-items: center; justify-content: center; padding: 20px; font-family: "Inter", "Helvetica Neue", Arial, sans-serif; }' +
    '.tba-terms-card { background: #fffbf3; color: #2e2417; max-width: 520px; width: 100%; max-height: 88vh; overflow-y: auto; border-radius: 20px; padding: 32px 30px 26px; box-shadow: 0 30px 70px rgba(0,0,0,0.45); }' +
    '.tba-terms-card h2 { font-size: 20px; margin: 0 0 4px; font-family: Georgia, "Times New Roman", serif; }' +
    '.tba-terms-card .tba-terms-sub { font-size: 13px; color: #7a6d5a; margin: 0 0 18px; }' +
    '.tba-terms-card ul { margin: 0 0 18px; padding-left: 20px; }' +
    '.tba-terms-card li { font-size: 13.5px; line-height: 1.55; margin-bottom: 10px; }' +
    '.tba-terms-card li b { color: #9b4d1f; }' +
    '.tba-terms-card .tba-terms-link { font-size: 13px; margin: 0 0 20px; }' +
    '.tba-terms-card .tba-terms-link a { color: #c1652c; font-weight: 600; }' +
    '.tba-terms-check { display: flex; align-items: flex-start; gap: 10px; font-size: 13px; line-height: 1.5; margin-bottom: 18px; cursor: pointer; }' +
    '.tba-terms-check input { margin-top: 3px; flex-shrink: 0; width: 16px; height: 16px; }' +
    '.tba-terms-btn { width: 100%; background: #c1652c; color: #fff; border: none; border-radius: 999px; padding: 13px 20px; font-size: 14.5px; font-weight: 700; cursor: pointer; transition: background 0.15s ease, opacity 0.15s ease; }' +
    '.tba-terms-btn:disabled { opacity: 0.45; cursor: not-allowed; }' +
    '.tba-terms-btn:not(:disabled):hover { background: #9b4d1f; }';
  document.head.appendChild(style);
}

function tbaShowTermsGate() {
  tbaEnsureTermsGateStyles();
  document.body.style.overflow = 'hidden';

  var overlay = document.createElement('div');
  overlay.className = 'tba-terms-overlay';
  overlay.innerHTML =
    '<div class="tba-terms-card">' +
    '<h2>Before you continue</h2>' +
    '<p class="tba-terms-sub">A few things to know about THE INTROductory before you use it.</p>' +
    '<ul>' +
    '<li><b>Not legal advice.</b> Nothing here — including AI-drafted contracts — is legal advice, and using this app creates no attorney-client relationship.</li>' +
    '<li><b>Contracts aren\'t guaranteed enforceable.</b> Agreements drafted or signed here are a demonstration, not a substitute for one prepared or reviewed by a lawyer.</li>' +
    '<li><b>Signatures here are simulated.</b> The signing flow does not meet the requirements of the ESIGN Act, UETA, or similar laws, and does not make a contract legally binding.</li>' +
    '<li><b>It\'s a local demo.</b> Everything you enter stays in your browser\'s local storage — nothing is sent to a server.</li>' +
    '</ul>' +
    '<p class="tba-terms-link">Full details: <a href="terms.html" target="_blank" rel="noopener">Terms of Service</a> &middot; <a href="privacy.html" target="_blank" rel="noopener">Privacy Policy</a></p>' +
    '<label class="tba-terms-check"><input type="checkbox" id="tba-terms-checkbox"> I have read and agree to the Terms of Service, Privacy Policy, and the notices above — including that this app does not provide legal advice and that nothing signed here is a guaranteed legally binding contract.</label>' +
    '<button type="button" class="tba-terms-btn" id="tba-terms-accept-btn" disabled>I Agree &amp; Continue</button>' +
    '</div>';
  document.body.appendChild(overlay);

  var checkbox = document.getElementById('tba-terms-checkbox');
  var acceptBtn = document.getElementById('tba-terms-accept-btn');
  checkbox.addEventListener('change', function () { acceptBtn.disabled = !checkbox.checked; });
  acceptBtn.addEventListener('click', function () {
    if (!checkbox.checked) return;
    tbaAcceptTerms();
    overlay.remove();
    document.body.style.overflow = '';
  });
}

// Runs on every page load; only actually shows the gate on pages
// where you're signed into the app and haven't accepted yet — the
// public marketing and legal pages, and the sign-in screen itself,
// are left alone.
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('tba_authed') !== '1') return;
    if (tbaHasAcceptedTerms()) return;
    tbaShowTermsGate();
  });
})();

// --- E-signature compliance scaffolding ---
// These functions build the pieces an ESIGN Act / UETA-compliant
// signing flow actually needs, so the data model and UX are ready to
// carry real legal weight the moment this app has a real backend,
// verified identity, and a real counterparty. Two things here are
// already genuine, not simulated: the SHA-256 document hash (a real
// cryptographic binding between a signature and the exact contract
// text at the moment of signing) and the audit-trail fields this
// browser can actually observe (timestamps, user agent, the consent
// actions themselves). Everything that depends on a server —
// delivering the verification code by real email, capturing a real
// IP address, independently sealing the signed copy so neither party
// can alter it after the fact — is clearly labeled as backend-pending
// rather than faked.

function tbaHasConsentedESign() {
  return localStorage.getItem(tbaAccountKey('tba_esign_consent_accepted')) === '1';
}

function tbaGetESignConsentAcceptedAt() {
  return localStorage.getItem(tbaAccountKey('tba_esign_consent_accepted_at'));
}

function tbaAcceptESignConsent() {
  localStorage.setItem(tbaAccountKey('tba_esign_consent_accepted'), '1');
  localStorage.setItem(tbaAccountKey('tba_esign_consent_accepted_at'), new Date().toISOString());
}

function tbaWithdrawESignConsent() {
  localStorage.removeItem(tbaAccountKey('tba_esign_consent_accepted'));
  localStorage.removeItem(tbaAccountKey('tba_esign_consent_accepted_at'));
}

// A real SHA-256 hash of the exact contract text being signed — this
// is genuine cryptography, computed in-browser, not a placeholder.
// Once a backend exists, the same hash lets anyone verify a signed
// copy hasn't been altered since the moment it was signed.
function tbaSha256Hex(text) {
  var data = new TextEncoder().encode(text);
  return crypto.subtle.digest('SHA-256', data).then(function (buf) {
    return Array.prototype.map.call(new Uint8Array(buf), function (b) {
      return b.toString(16).padStart(2, '0');
    }).join('');
  });
}

function tbaEnsureESignGateStyles() {
  if (document.getElementById('tba-esign-gate-styles')) return;
  var style = document.createElement('style');
  style.id = 'tba-esign-gate-styles';
  style.textContent =
    '.tba-terms-card .tba-esign-sub-note { font-size: 12px; color: #9b4d1f; background: rgba(193,101,44,0.08); border: 1px solid rgba(193,101,44,0.25); border-radius: 8px; padding: 8px 10px; margin: -6px 0 16px; }';
  document.head.appendChild(style);
}

// A distinct consent action from the general Terms gate, shown once
// before the first time someone signs anything — ESIGN requires this
// disclosure and an affirmative "I consent" action separate from a
// site's general terms of use.
function tbaShowESignConsentModal(onAccept) {
  tbaEnsureTermsGateStyles();
  tbaEnsureESignGateStyles();
  document.body.style.overflow = 'hidden';

  var overlay = document.createElement('div');
  overlay.className = 'tba-terms-overlay';
  overlay.innerHTML =
    '<div class="tba-terms-card">' +
    '<h2>Consent to Electronic Signatures &amp; Records</h2>' +
    '<p class="tba-terms-sub">Required before signing anything in THE INTROductory, per the U.S. ESIGN Act and UETA.</p>' +
    '<p class="tba-esign-sub-note">This demo cannot yet verify your identity or deliver anything by real email — see the notes below marking what still needs a backend.</p>' +
    '<ul>' +
    '<li><b>Scope.</b> This consent covers every document you sign electronically in this app, not just one transaction.</li>' +
    '<li><b>Paper copies.</b> You can get a paper copy of anything you sign at any time using its Download or Print/Save as PDF button — no fee. This demo has no way to mail a physical copy.</li>' +
    '<li><b>Withdrawing consent.</b> You can withdraw consent to sign electronically at any time from Profile → Account, before or after signing a given document — withdrawal doesn\'t undo a document already executed.</li>' +
    '<li><b>Updating contact info.</b> Keep your email current from your Profile page so records and notices reach you.</li>' +
    '<li><b>Requirements to access records.</b> A modern web browser with JavaScript enabled and the ability to view or print a PDF/text file — nothing else.</li>' +
    '</ul>' +
    '<p class="tba-terms-link">Full disclosure: <a href="terms.html#esign" target="_blank" rel="noopener">Terms of Service, Section 9</a></p>' +
    '<label class="tba-terms-check"><input type="checkbox" id="tba-esign-checkbox"> I consent to sign documents and receive records electronically, and confirm I can access, download, and print them from this device.</label>' +
    '<button type="button" class="tba-terms-btn" id="tba-esign-accept-btn" disabled>I Consent &amp; Continue</button>' +
    '</div>';
  document.body.appendChild(overlay);

  var checkbox = document.getElementById('tba-esign-checkbox');
  var acceptBtn = document.getElementById('tba-esign-accept-btn');
  checkbox.addEventListener('change', function () { acceptBtn.disabled = !checkbox.checked; });
  acceptBtn.addEventListener('click', function () {
    if (!checkbox.checked) return;
    tbaAcceptESignConsent();
    overlay.remove();
    document.body.style.overflow = '';
    if (onAccept) onAccept();
  });
}

// Stands in for emailing a one-time verification code — the one
// piece of identity assurance a real e-signature flow needs that this
// demo genuinely cannot provide without a backend to send real email.
// The code is shown directly, clearly labeled as a stand-in, rather
// than silently treating the signer as "verified" without checking
// anything.
function tbaRequestSignatureVerificationCode(email) {
  var code = String(Math.floor(100000 + Math.random() * 900000));
  tbaShowToast('[Demo] Verification code for ' + email + ' (emailed for real once a backend exists): ' + code);
  return code;
}

// --- Page-to-page navigation ---
// This is a plain multi-page site — every link is a real browser
// navigation, not a client-side route swap, so there's a genuine gap
// while the next page loads. Two things address it: prefetching the
// pages you're actually likely to click next (a real reduction in
// that gap, since the browser already has the file by the time you
// click), and a short fade on the way out so whatever gap remains
// reads as an intentional transition rather than the page going
// unresponsive.

function tbaPrefetchLikelyNextPages() {
  var candidates = ['home.html', 'messaging.html', 'network.html', 'about.html', 'profile.html'];
  var current = window.location.pathname.split('/').pop();
  candidates.forEach(function (p) {
    if (p === current) return;
    var link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = p;
    document.head.appendChild(link);
  });
}

function tbaEnsurePageTransitionStyles() {
  if (document.getElementById('tba-page-transition-styles')) return;
  var style = document.createElement('style');
  style.id = 'tba-page-transition-styles';
  style.textContent =
    'body { transition: opacity 0.13s ease, transform 0.13s ease; }' +
    'html.tba-leaving body { opacity: 0; transform: scale(0.99); }';
  document.head.appendChild(style);
}

// Fades the current page out, then actually navigates — used both by
// the link-click handler below and by the few places that redirect
// from JS (login, signup, admin sign-in) instead of a plain <a href>.
function tbaNavigateTo(href) {
  tbaEnsurePageTransitionStyles();
  document.documentElement.classList.add('tba-leaving');
  setTimeout(function () { window.location.href = href; }, 130);
}

function tbaWirePageTransitions() {
  tbaEnsurePageTransitionStyles();
  tbaPrefetchLikelyNextPages();

  document.addEventListener('click', function (e) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var link = e.target.closest('a[href]');
    if (!link) return;
    if (link.target && link.target !== '_self') return;
    if (link.hasAttribute('download')) return;

    var href = link.getAttribute('href');
    if (!href || href.charAt(0) === '#') return;
    if (/^(mailto|tel|javascript):/i.test(href)) return;

    var url;
    try { url = new URL(href, window.location.href); } catch (err) { return; }
    if (url.origin !== window.location.origin) return;
    if (url.pathname === window.location.pathname && url.hash) return;

    e.preventDefault();
    tbaNavigateTo(href);
  });

  // Restores visibility if the page is ever reached via the
  // back/forward cache mid-fade (e.g. the user clicked, then hit
  // back before the next page finished loading).
  window.addEventListener('pageshow', function () {
    document.documentElement.classList.remove('tba-leaving');
  });
}

tbaWirePageTransitions();

// Kills the default blue tap/active flash on buttons and swaps it for
// a small "pressed" enlargement, so every clickable control across the
// site responds the same tactile way instead of looking browser-stock.
function tbaEnsureButtonPressStyles() {
  if (document.getElementById('tba-button-press-styles')) return;
  var style = document.createElement('style');
  style.id = 'tba-button-press-styles';
  var tags = [
    'button', '.auth-tab', '.role-option', '.theme-toggle-standalone', '[role="button"]',
    'a.admin-btn', 'a.share-btn', 'a.nav-logout', 'a.signout', 'a.admin-back-link', 'a.contracts-back',
    'nav.main-nav a', '.admin-header nav a', 'a.brand', 'a.diagram-node', 'a.admin-tab', 'a.admin-table-link'
  ];
  var bigger = [
    '.btn-submit', '.notfound-btn', 'a.notfound-btn', 'a.btn-primary',
    '.thread-item', '.contract-card', '.thread-select-card', 'a.admin-user-card', 'a.activity-link'
  ];
  var all = tags.concat(bigger);
  function suffixed(list, suffix) {
    return list.map(function (s) { return s + suffix; }).join(', ');
  }
  style.textContent =
    // `touch-action: manipulation` is the actual fix for taps feeling
    // unresponsive/needing several tries: without it, the browser
    // waits ~300ms after every tap to see whether a second tap is
    // coming (to decide between a click and a double-tap-to-zoom), and
    // any tiny finger movement during that window can make it treat
    // the touch as a scroll attempt and cancel the tap outright rather
    // than firing a click at all — which is exactly what repeated,
    // seemingly-ignored presses look like.
    all.join(', ') + ' { -webkit-tap-highlight-color: transparent; touch-action: manipulation; }' +
    suffixed(all, ':not(:disabled)') + ' { transition: transform 0.1s ease; }' +
    suffixed(tags, ':not(:disabled):active') + ' { transform: scale(1.06); }' +
    suffixed(bigger, ':not(:disabled):active') + ' { transform: scale(1.03); }';
  document.head.appendChild(style);
}
tbaEnsureButtonPressStyles();

// Mobile Safari (and some mobile Chrome builds) won't apply :active
// styles during a touch hold unless a touchstart listener is present
// on the page — without this, the press-scale only flashed after
// release instead of while the button was actually held down.
document.addEventListener('touchstart', function () {}, { passive: true });

// Once the page-load entrance animation (tbaRiseSnap) finishes, clear
// it entirely instead of leaving it frozen on its last frame. A
// completed CSS animation reports its held frame as a resolved
// matrix, never the literal `none`, even when that frame is visually
// a no-op (translateY(0) scale(1)) — and any non-`none` transform on
// an ancestor (like the header) turns it into the containing block
// for `position: fixed` descendants, breaking anything meant to stay
// fixed to the viewport, like the notification panel.
document.addEventListener('animationend', function (e) {
  if (e.animationName === 'tbaRiseSnap') {
    e.target.style.animation = 'none';
  }
}, true);
