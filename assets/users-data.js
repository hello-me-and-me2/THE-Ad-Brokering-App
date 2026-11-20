// Shared mock user directory for THE INTROductory demo.
// In a real app this would come from a database — here it's a fixed
// seed list plus whoever has signed up in this browser.

var TBA_SEED_USERS = [
  {
    username: "skylinecoffee", name: "Skyline Coffee Co.", role: "business", daysAgoJoined: 20,
    niche: "Coffee & Food", followers: 0, brand: { company: { legalName: "Skyline Coffee Company LLC", size: "11–50", founded: "2014", location: "Seattle, WA", website: "https://skylinecoffee.com" }, work: { lookingFor: "Coffee, lifestyle, and morning-routine creators with an honest voice and an engaged audience.", budget: "$800–$3,000 per deal" }, guidelines: { tone: "Warm, unhurried, a little nerdy about coffee. Never pushy.", dos: ["Show the coffee actually being made and tasted", "Be honest about flavor", "Mention the roast name"], donts: ["No health claims", "No comparisons to named competitors"], hashtags: "#SkylineCoffee #SlowMornings", assets: [{ label: "Logo pack", url: "https://skylinecoffee.com/press" }, { label: "Product photos", url: "https://skylinecoffee.com/media" }] } },
    tagline: "Small-batch coffee brand, Pacific Northwest.",
    bio: "Small-batch coffee roaster based in the Pacific Northwest, partnering with creators who love a good cup and an honest story.",
    links: [
      { label: "Website", url: "https://skylinecoffee.com" },
      { label: "Instagram", url: "https://instagram.com/skylinecoffeeco" }
    ]
  },
  {
    username: "riversidegear", name: "Riverside Outdoor Gear", role: "business", daysAgoJoined: 15,
    niche: "Outdoor & Adventure", followers: 0, brand: { company: { legalName: "Riverside Outdoor Gear Inc.", size: "51–200", founded: "2009", location: "Portland, OR", website: "https://riversidegear.com" }, work: { lookingFor: "Outdoor and adventure creators who really use gear on real trips and film it well.", budget: "$1,000–$5,000 per deal" }, guidelines: { tone: "Practical and adventurous. Real conditions, real opinions.", dos: ["Test gear on an actual trip", "Show wear and tear honestly", "Tag the specific product"], donts: ["No staged-in-a-studio shots", "No unsafe stunts"], hashtags: "#RiversideGear #RealTrips", assets: [{ label: "Brand kit", url: "https://riversidegear.com/brand" }] } },
    tagline: "Outdoor apparel and camping gear.",
    bio: "Outdoor apparel and camping gear built for real trips, not just photos. We work with adventure creators who actually use our stuff.",
    links: [
      { label: "Website", url: "https://riversidegear.com" },
      { label: "Instagram", url: "https://instagram.com/riversidegear" }
    ]
  },
  {
    username: "pearandco", name: "Pear & Co. Skincare", role: "business", daysAgoJoined: 9,
    niche: "Beauty & Skincare", followers: 0, brand: { company: { legalName: "Pear & Co. Skincare Ltd.", size: "11–50", founded: "2018", location: "Brooklyn, NY", website: "https://pearandco.com" }, work: { lookingFor: "Skincare and beauty reviewers who care about ingredients and will say so when something doesn't work.", budget: "$600–$2,500 per deal" }, guidelines: { tone: "Clean, calm, and evidence-minded.", dos: ["Show your real routine over at least a week", "Disclose that it's a partnership", "Mention it's cruelty-free"], donts: ["No before/after retouching", "No medical claims"], hashtags: "#PearAndCo #CleanSkin", assets: [{ label: "Press kit", url: "https://pearandco.com/press" }] } },
    tagline: "Clean skincare, cruelty-free.",
    bio: "Clean, cruelty-free skincare made in small batches. We love collaborating with creators who care about what goes on their skin.",
    links: [
      { label: "Website", url: "https://pearandco.com" },
      { label: "TikTok", url: "https://tiktok.com/@pearandco" }
    ]
  },
  {
    username: "thecraftedtable", name: "The Crafted Table", role: "business", daysAgoJoined: 5,
    niche: "Home & Design", followers: 0, brand: { company: { legalName: "The Crafted Table Co.", size: "1–10", founded: "2020", location: "Asheville, NC", website: "https://thecraftedtable.com" }, work: { lookingFor: "Home, food, and slow-living creators who like handmade goods and good design.", budget: "$400–$1,500 per deal" }, guidelines: { tone: "Quiet, tactile, and a little bit romantic about everyday rituals.", dos: ["Style the pieces in a real home", "Credit the maker when named"], donts: ["No heavy filters that change the glaze colors"], hashtags: "#TheCraftedTable #SlowLiving", assets: [{ label: "Maker stories", url: "https://thecraftedtable.com/makers" }] } },
    tagline: "Artisan home goods & tableware.",
    bio: "Artisan home goods and tableware, handmade by independent makers. Looking for creators who love slow living and good design.",
    links: [
      { label: "Website", url: "https://thecraftedtable.com" },
      { label: "Instagram", url: "https://instagram.com/thecraftedtable" }
    ]
  },
  {
    username: "brightlinestudio", name: "Brightline Studio", role: "business", daysAgoJoined: 3,
    niche: "Home & Design", followers: 0, brand: { company: { legalName: "Brightline Studio LLC", size: "1–10", founded: "2017", location: "Austin, TX", website: "https://brightlinestudio.co" }, work: { lookingFor: "Creators who talk about small business, design, and branding, and can tell a story on video.", budget: "$1,000–$4,000 per project" }, guidelines: { tone: "Smart, friendly, and plain-spoken. No jargon.", dos: ["Lead with the client's story", "Show the before and after of the brand"], donts: ["No bashing other studios"], hashtags: "#BrightlineStudio", assets: [{ label: "Case studies", url: "https://brightlinestudio.co/work" }] } },
    tagline: "Independent design & branding studio.",
    bio: "Independent design and branding studio helping small businesses look as good as they are. Open to creator collabs on case studies.",
    links: [
      { label: "Website", url: "https://brightlinestudio.co" }
    ]
  },
  {
    username: "marencole", name: "Maren Cole", role: "influencer", daysAgoJoined: 11,
    niche: "Coffee & Food", followers: 210000, openToWork: false, mediaKit: { rates: [{ item: "Instagram Reel", price: "$900" }, { item: "TikTok video", price: "$700" }, { item: "YouTube mention", price: "$1,500" }], partners: ["Skyline Coffee Co.", "Oatly Hills", "Brew Lab"], audience: { age: "25–34 (62%)", location: "US & Canada", platform: "Instagram 70% · TikTok 30%" } },
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
    niche: "Outdoor & Adventure", followers: 85000, openToWork: true, mediaKit: { rates: [{ item: "YouTube review", price: "$1,200" }, { item: "Instagram Reel", price: "$450" }], partners: ["Riverside Outdoor Gear", "Trailhead"], audience: { age: "22–35 (71%)", location: "Pacific Northwest", platform: "YouTube 65% · Instagram 35%" } },
    tagline: "Outdoor & adventure creator · 85K followers.",
    bio: "Outdoor and adventure creator documenting real trips, real gear tests, and the occasional disaster. 85K people come along for the ride.",
    links: [
      { label: "Instagram", url: "https://instagram.com/jordanblake" },
      { label: "YouTube", url: "https://youtube.com/@jordanblake" }
    ]
  },
  {
    username: "ninareyes", name: "Nina Reyes", role: "influencer", daysAgoJoined: 6,
    niche: "Beauty & Skincare", followers: 340000, openToWork: false, mediaKit: { rates: [{ item: "Instagram Reel", price: "$1,800" }, { item: "TikTok video", price: "$1,400" }, { item: "Story set", price: "$600" }], partners: ["Pear & Co. Skincare", "Glow Theory", "Bare Botanics"], audience: { age: "18–29 (74%)", location: "US", platform: "Instagram 55% · TikTok 45%" } },
    tagline: "Beauty & skincare reviews · 340K followers.",
    bio: "Beauty and skincare reviews with zero filter — if it doesn't work, I'll say so. 340K followers trust me to tell them the truth.",
    links: [
      { label: "Instagram", url: "https://instagram.com/ninareyes" },
      { label: "TikTok", url: "https://tiktok.com/@ninareyes" }
    ]
  },
  {
    username: "leoortiz", name: "Leo Ortiz", role: "influencer", daysAgoJoined: 2,
    niche: "Fitness & Wellness", followers: 122000, openToWork: true, mediaKit: { rates: [{ item: "YouTube video", price: "$1,100" }, { item: "Instagram Reel", price: "$550" }], partners: ["Brightline Studio", "Peak Fuel"], audience: { age: "20–34 (68%)", location: "US & UK", platform: "YouTube 50% · Instagram 50%" } },
    tagline: "Fitness & wellness · 122K followers.",
    bio: "Fitness and wellness creator helping 122K people build habits that actually stick. Big on honest brand partnerships, not hype.",
    links: [
      { label: "Instagram", url: "https://instagram.com/leoortiz" },
      { label: "YouTube", url: "https://youtube.com/@leoortiz" }
    ]
  },
  {
    username: "avaqian", name: "Ava Qian", role: "influencer", daysAgoJoined: 1,
    niche: "Travel & Food", followers: 96000, openToWork: true, mediaKit: { rates: [{ item: "Instagram Reel", price: "$500" }, { item: "TikTok video", price: "$400" }], partners: ["The Crafted Table", "Atlas Eats"], audience: { age: "24–38 (66%)", location: "US West Coast", platform: "TikTok 60% · Instagram 40%" } },
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

// Niche/followers aren't collected at signup — they default to empty
// until the account fills them in on its own profile, same as bio and
// links. Used by the Network directory's niche and follower filters.
function tbaGetMyNiche(forUsername) {
  return localStorage.getItem(tbaAccountKey('tba_niche', forUsername)) || '';
}

function tbaGetMyFollowers(forUsername) {
  var n = parseInt(localStorage.getItem(tbaAccountKey('tba_followers', forUsername)), 10);
  return isNaN(n) || n < 0 ? 0 : n;
}

function tbaSaveMyNicheAndFollowers(niche, followers) {
  localStorage.setItem(tbaAccountKey('tba_niche'), niche || '');
  var n = parseInt(followers, 10);
  localStorage.setItem(tbaAccountKey('tba_followers'), String(isNaN(n) || n < 0 ? 0 : n));
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

// Collected at signup alongside the username — not shown anywhere in
// the UI yet, just stored the same honest way everything else
// account-specific is (its own scoped key, never the other account's).
function tbaSaveMyEmail(email) {
  localStorage.setItem(tbaAccountKey('tba_email'), email || '');
}

function tbaGetMyEmail(forUsername) {
  return localStorage.getItem(tbaAccountKey('tba_email', forUsername)) || '';
}

// Only the SHA-256 hash is ever stored, never the password itself —
// genuine hashing (the same Web Crypto call used for contract
// documents), even though, same as everywhere else in this demo, it
// protects against nothing once someone has the browser's own
// localStorage open. Login does not check this (see the signup/login
// script's own comment on that) — only signup, which this exists for.
function tbaSaveMyPasswordHash(hash) {
  localStorage.setItem(tbaAccountKey('tba_password_hash'), hash);
}

// Null for an account that's never had a password saved — the seed
// demo accounts, which were never signed up through the form, so
// login leaves those unchecked exactly as before. Every account
// actually created through signup has one, since signup requires a
// password to create the account at all.
function tbaGetMyPasswordHash(forUsername) {
  return localStorage.getItem(tbaAccountKey('tba_password_hash', forUsername));
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
    niche: tbaGetMyNiche(account.username),
    followers: tbaGetMyFollowers(account.username),
    openToWork: tbaIsOpenToWork(account.username),
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

// Open (not yet reviewed) reports, shaped for the admin overview's
// list. The full queue and the actions on it live on the admin Reports
// page.
function tbaGetFlaggedReports() {
  return tbaGetOpenReports().map(function (r) {
    return {
      title: TBA_REPORT_REASONS[r.reason] + ': ' + r.label,
      meta: 'Reported by @' + r.reporter + ' · ' + tbaFormatDateLong(r.createdAt)
    };
  });
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
// CSS (`.verified-badge { color: ...; }`) so it matches each theme —
// unless this account is also a Champion (100 saves in the hidden
// game), in which case the same badge gets a gold-gradient "royal"
// finish instead of a second icon bolted on next to it. Both facts
// (verified, champion) are still both true and both visible — they
// just share the one mark rather than cluttering the name with two.
var tbaVerifiedBadgeGradientCounter = 0;
function tbaVerifiedBadgeHtml(forUsername) {
  if (forUsername && tbaIsChampion(forUsername)) {
    tbaVerifiedBadgeGradientCounter++;
    var gid = 'tba-royal-grad-' + tbaVerifiedBadgeGradientCounter;
    return '<span class="verified-badge verified-badge-royal" title="Verified &amp; Champion account" aria-label="Verified and Champion account">' +
      '<svg viewBox="0 0 20 20" width="15" height="15" aria-hidden="true">' +
      '<defs><linearGradient id="' + gid + '" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0%" stop-color="#fff3c4"/><stop offset="45%" stop-color="#f3c348"/><stop offset="100%" stop-color="#a9720f"/>' +
      '</linearGradient></defs>' +
      '<path fill="url(#' + gid + ')" stroke="#8a5d0b" stroke-width="0.4" d="M10 0l2.27 1.64 2.78-.52 1.1 2.6 2.6 1.1-.52 2.78L20 10l-1.77 2.4.52 2.78-2.6 1.1-1.1 2.6-2.78-.52L10 20l-2.27-1.64-2.78.52-1.1-2.6-2.6-1.1.52-2.78L0 10l1.77-2.4-.52-2.78 2.6-1.1 1.1-2.6 2.78.52L10 0z"/>' +
      '<path fill="#fff" d="M8.4 13.1L5.7 10.4l1.15-1.15L8.4 10.8l4.3-4.3 1.15 1.15z"/>' +
      '</svg></span>';
  }
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
    deal: { brand: "Skyline Coffee Co.", amount: 2100, videos: 3, deliverables: "3 IG Posts + 1 TikTok", offerBy: "me", timeline: "3 weeks", progress: 70 },
    messages: [
      { from: "them", text: "Hi! We love your content and would love to talk about a sponsored post series with Skyline Coffee." },
      { from: "me", text: "Thanks for reaching out! I'd love to hear more about what you have in mind." },
      { from: "me", type: "offer", amount: 1800, videos: 3, deliverables: "2 IG Posts + 1 TikTok", timeline: "3 weeks" },
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
    deal: { brand: "Riverside Outdoor Gear", amount: 1200, videos: 1, deliverables: "1 YouTube Review", offerBy: "them", timeline: "4 weeks", progress: 20 },
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
    deal: { brand: "Riverside Outdoor Gear", amount: 1200, videos: 1, deliverables: "1 YouTube Review", offerBy: "me", timeline: "4 weeks", progress: 100 },
    messages: [
      { from: "them", text: "Everything looks great on our end — ready to sign when you are." },
      { from: "me", text: "Signed! Excited to get started on this one." },
      { from: "me", type: "offer", amount: 1200, videos: 1, deliverables: "1 YouTube Review", timeline: "4 weeks" }
    ]
  },
  {
    username: "pearandco",
    displayName: "Pear & Co. Skincare",
    subtitle: "Skincare collab · rate under discussion",
    status: "negotiating",
    statusLabel: "Paused",
    deal: { brand: "Pear & Co. Skincare", amount: 950, videos: 2, deliverables: "2 IG Posts + 3 Stories", offerBy: "them", timeline: "2 weeks", progress: 45 },
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
      return {
        amount: messages[i].amount,
        videos: messages[i].videos,
        deliverables: messages[i].deliverables || null,
        timeline: messages[i].timeline || null,
        from: messages[i].from
      };
    }
  }
  var seed = tbaGetMyThread(username);
  return seed
    ? { amount: seed.deal.amount, videos: seed.deal.videos, deliverables: seed.deal.deliverables || null, timeline: seed.deal.timeline || null, from: seed.deal.offerBy }
    : null;
}

// Falls back to "N video(s)" for any offer saved before deliverables
// was a free-text field (older localStorage data, or a message that
// genuinely only ever set videos) — never shown blank.
function tbaOfferDeliverablesLabel(offer) {
  if (offer.deliverables) return offer.deliverables;
  return (offer.videos || 0) + ' video' + (offer.videos === 1 ? '' : 's');
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

// A thread's status (new/negotiating/accepted/closed) starts out
// whatever the seed says, same as progress — but unlike progress,
// nothing used to let it actually change once an offer got decided.
// Stored the same account-scoped way as everything else per-thread.
function tbaGetMyThreadStatus(username) {
  try {
    var stored = JSON.parse(localStorage.getItem(tbaAccountKey('tba_thread_status_' + username.toLowerCase())) || 'null');
    if (stored && stored.status) return stored;
  } catch (e) { /* fall through to seed */ }
  var seed = tbaGetMyThread(username);
  return seed ? { status: seed.status, statusLabel: seed.statusLabel } : { status: 'new', statusLabel: 'New' };
}

function tbaSaveMyThreadStatus(username, status, statusLabel) {
  localStorage.setItem(tbaAccountKey('tba_thread_status_' + username.toLowerCase()), JSON.stringify({ status: status, statusLabel: statusLabel }));
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
      timeline: (offer.timeline) || (thread ? thread.deal.timeline : '4 weeks'),
      amount: offer.amount,
      deliverables: tbaOfferDeliverablesLabel(offer)
    };
  });

  if (!isMulti) {
    var p = parties[0];
    return (
      'SPONSORSHIP AGREEMENT\n\n' +
      'This Sponsorship Agreement ("Agreement") is entered into on ' + today + ' by and between:\n\n' +
      'Creator: @' + myUsername + '\n' +
      'Brand: ' + p.brand + ' (@' + p.username + ')\n\n' +
      '1. SCOPE OF WORK\n' +
      'The Creator agrees to produce and deliver ' + p.deliverables + ' promoting the Brand, in line with the ' +
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
      '  - Deliverables: ' + party.deliverables + '\n' +
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

// Your own threads whose terms are actually settled — accepted or
// closed — each with the dollar amount from that thread's current
// offer. Contracts don't carry a reusable amount field (their text is
// freeform), so a thread's own negotiated offer is the one place a
// dollar figure actually exists to total or average.
function tbaGetSettledDealAmounts() {
  return TBA_MY_THREADS_SEED.map(function (t) {
    var statusNow = tbaGetMyThreadStatus(t.username);
    if (statusNow.status !== 'accepted' && statusNow.status !== 'closed') return null;
    var offer = tbaGetCurrentOffer(t.username);
    return offer ? { username: t.username, amount: offer.amount } : null;
  }).filter(function (d) { return d !== null; });
}

function tbaGetTotalDealValue() {
  return tbaGetSettledDealAmounts().reduce(function (sum, d) { return sum + d.amount; }, 0);
}

// Null (not 0) when nothing's settled yet, same reasoning as
// tbaGetRatingSummary's average — "no deals" and "deals averaging $0"
// are different things and a dashboard card needs to tell them apart.
function tbaGetAverageDealSize() {
  var deals = tbaGetSettledDealAmounts();
  if (deals.length === 0) return null;
  return Math.round(tbaGetTotalDealValue() / deals.length);
}

// Tally of your own conversation threads by negotiation stage, for
// the dashboard's pipeline panel — the same four statuses
// tbaGetMyThreadStatus can return.
function tbaGetThreadStatusCounts() {
  var counts = { new: 0, negotiating: 0, accepted: 0, closed: 0 };
  TBA_MY_THREADS_SEED.forEach(function (t) {
    var statusNow = tbaGetMyThreadStatus(t.username);
    if (counts.hasOwnProperty(statusNow.status)) counts[statusNow.status]++;
  });
  return counts;
}

// How many signed contracts a given account — any account, not just
// the signed-in one — has been party to, as either the owner or a
// participant. Used by the Network directory's "deal history" sort,
// so an account's track record is visible before you connect with
// them, the same real signal a review count gives.
function tbaGetDealsClosedCountFor(username) {
  if (!username) return 0;
  var lower = username.toLowerCase();
  return tbaGetContracts().filter(function (c) {
    if (c.status !== 'signed') return false;
    if (c.owner && c.owner.toLowerCase() === lower) return true;
    return c.participants.some(function (p) { return p.toLowerCase() === lower; });
  }).length;
}

// --- Reviews & ratings ---
// Left by whoever owns a contract (every contract is created from its
// owner's own browser session, so "owner" is always "me" at the point
// a review gets written) about a counterpart, once that contract is
// fully signed — the one moment a deal is actually confirmed to have
// happened. One review per contract per counterpart, so revising and
// re-signing the same deal can't be used to stack ratings. Stored
// globally (not account-scoped) since a review needs to be visible on
// the *other* account's profile, not just the reviewer's own.
function tbaGetReviews() {
  try {
    var list = JSON.parse(localStorage.getItem('tba_reviews') || '[]');
    return Array.isArray(list) ? list : [];
  } catch (e) {
    return [];
  }
}

function tbaSaveReviews(list) {
  localStorage.setItem('tba_reviews', JSON.stringify(list));
}

function tbaGetReviewsFor(username) {
  if (!username) return [];
  var lower = username.toLowerCase();
  return tbaGetReviews()
    .filter(function (r) { return r.toUsername.toLowerCase() === lower; })
    .sort(function (a, b) { return new Date(b.createdAt) - new Date(a.createdAt); });
}

function tbaGetMyReviewForContract(contractId, toUsername) {
  var myUsername = localStorage.getItem('tba_username');
  var lower = (toUsername || '').toLowerCase();
  return tbaGetReviews().find(function (r) {
    return r.contractId === contractId && r.fromUsername === myUsername && r.toUsername.toLowerCase() === lower;
  }) || null;
}

// Average rounds to one decimal for display; count is exact. Null
// average (rather than 0) when nobody's reviewed yet, so callers can
// tell "no reviews" apart from "reviewed and rated zero" (which can't
// happen — ratings are 1–5 — but 0 as a sentinel would be ambiguous).
function tbaGetRatingSummary(username) {
  var reviews = tbaGetReviewsFor(username);
  if (reviews.length === 0) return { avg: null, count: 0 };
  var sum = reviews.reduce(function (total, r) { return total + r.rating; }, 0);
  return { avg: Math.round((sum / reviews.length) * 10) / 10, count: reviews.length };
}

// Only the contract's own owner can review (see the module comment
// above for why that's always "me"), only once it's signed, only
// about one of that contract's actual participants, and only once per
// contract/counterpart pair — each enforced here rather than trusted
// from the caller, since this is the one write that shows up on
// someone else's profile.
function tbaSubmitReview(contractId, toUsername, rating, text) {
  var myUsername = localStorage.getItem('tba_username');
  var contract = tbaGetContract(contractId);
  if (!contract || contract.status !== 'signed') return null;
  if (!myUsername || contract.owner !== myUsername) return null;
  if (contract.participants.indexOf(toUsername) === -1) return null;
  if (tbaGetMyReviewForContract(contractId, toUsername)) return null;

  var stars = Math.max(1, Math.min(5, Math.round(Number(rating) || 0)));
  var review = {
    id: 'rv_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
    contractId: contractId,
    fromUsername: myUsername,
    toUsername: toUsername,
    rating: stars,
    text: (text || '').trim().slice(0, 500),
    createdAt: new Date().toISOString()
  };

  var list = tbaGetReviews();
  list.unshift(review);
  tbaSaveReviews(list);
  return review;
}

// Renders filled/empty star glyphs for a rating — rounds to the
// nearest whole star since there's no half-star glyph in this set,
// consistent with how tbaGetRatingSummary's average is just a number
// shown alongside, not something this tries to render fractionally.
function tbaStarsHtml(rating) {
  tbaEnsureReviewStyles();
  var filled = Math.round(rating || 0);
  var html = '';
  for (var i = 1; i <= 5; i++) {
    html += '<span class="tba-star' + (i <= filled ? ' filled' : '') + '">★</span>';
  }
  return html;
}

function tbaEnsureReviewStyles() {
  if (document.getElementById('tba-review-styles')) return;
  var style = document.createElement('style');
  style.id = 'tba-review-styles';
  style.textContent =
    '.tba-star { color: #d8dbe3; font-size: 14px; letter-spacing: 1px; }' +
    '.tba-star.filled { color: #f3b860; }' +
    '.tba-rating-picker { display: flex; gap: 4px; }' +
    '.tba-rating-picker .tba-star { font-size: 24px; cursor: pointer; transition: transform 0.1s ease; }' +
    '.tba-rating-picker .tba-star:hover { transform: scale(1.15); }';
  document.head.appendChild(style);
}

// --- Creator videos ---
// Creator accounts get exactly three video slots, each long-form or
// short-form. Videos are stored as links (YouTube, Vimeo, TikTok, or a
// direct video file) rather than uploaded files — there's no backend to
// host uploads, and localStorage can't hold video-sized data. Scoped per
// account like everything else on a profile.
var TBA_MAX_VIDEOS = 3;

function tbaIsMyRole(role) {
  return localStorage.getItem('tba_role') === role;
}

function tbaGetMyVideos(forUsername) {
  try {
    var list = JSON.parse(localStorage.getItem(tbaAccountKey('tba_videos', forUsername)) || '[]');
    return Array.isArray(list) ? list.slice(0, TBA_MAX_VIDEOS) : [];
  } catch (e) {
    return [];
  }
}

// Turns a pasted link into something safe to embed. Only ever builds the
// embed URL from an ID parsed out of a known host — never drops the
// pasted URL into an iframe directly. Returns null for anything that
// isn't an https link.
function tbaParseVideoUrl(raw) {
  var url;
  try { url = new URL((raw || '').trim()); } catch (e) { return null; }
  if (url.protocol !== 'https:') return null;

  var host = url.hostname.replace(/^www\.|^m\./, '').toLowerCase();
  var path = url.pathname;
  var id;

  if (host === 'youtube.com' || host === 'youtu.be') {
    if (host === 'youtu.be') id = path.slice(1).split('/')[0];
    else if (path === '/watch') id = url.searchParams.get('v');
    else {
      var ytMatch = path.match(/^\/(?:shorts|embed|live)\/([^/?]+)/);
      id = ytMatch && ytMatch[1];
    }
    if (id && /^[A-Za-z0-9_-]{11}$/.test(id)) {
      return { provider: 'youtube', embedUrl: 'https://www.youtube-nocookie.com/embed/' + id, href: url.href };
    }
    return null;
  }

  if (host === 'vimeo.com') {
    var vimeoMatch = path.match(/^\/(\d+)/);
    if (vimeoMatch) return { provider: 'vimeo', embedUrl: 'https://player.vimeo.com/video/' + vimeoMatch[1], href: url.href };
    return null;
  }

  if (host === 'tiktok.com') {
    var tiktokMatch = path.match(/\/video\/(\d+)/);
    if (tiktokMatch) return { provider: 'tiktok', embedUrl: 'https://www.tiktok.com/embed/v2/' + tiktokMatch[1], href: url.href };
    return { provider: 'link', host: host, href: url.href };
  }

  if (/\.(mp4|webm|mov|ogg)$/i.test(path)) {
    return { provider: 'file', src: url.href, href: url.href };
  }

  return { provider: 'link', host: host, href: url.href };
}

// Only creator accounts post videos, only three, and only a link that
// parses — enforced here rather than trusted from the page, since these
// show up on other people's screens.
function tbaAddMyVideo(type, title, url) {
  if (!tbaIsMyRole('influencer')) return { ok: false, error: 'not-creator' };
  var videos = tbaGetMyVideos();
  if (videos.length >= TBA_MAX_VIDEOS) return { ok: false, error: 'full' };
  if (type !== 'long' && type !== 'short') return { ok: false, error: 'bad-type' };
  title = (title || '').trim().slice(0, 80);
  if (!title) return { ok: false, error: 'no-title' };
  var parsed = tbaParseVideoUrl(url);
  if (!parsed) return { ok: false, error: 'bad-url' };

  var video = {
    id: 'v_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
    type: type,
    title: title,
    url: parsed.href,
    createdAt: new Date().toISOString()
  };
  videos.push(video);
  localStorage.setItem(tbaAccountKey('tba_videos'), JSON.stringify(videos));
  return { ok: true, video: video };
}

function tbaRemoveMyVideo(id) {
  var videos = tbaGetMyVideos().filter(function (v) { return v.id !== id; });
  localStorage.setItem(tbaAccountKey('tba_videos'), JSON.stringify(videos));
}

// Every creator's videos for the Videos tab, grouped per creator so
// "what kind of content do they make" is visible at a glance.
function tbaGetCreatorVideoGroups() {
  return tbaGetAllUsers()
    .filter(function (u) { return u.role === 'influencer' && !tbaIsHiddenUser(u.username); })
    .map(function (u) { return { user: u, videos: tbaGetMyVideos(u.username) }; })
    .filter(function (g) { return g.videos.length > 0; });
}

function tbaVideoTypeLabel(type) {
  return type === 'short' ? 'Short-form' : 'Long-form';
}

function tbaEnsureVideoStyles() {
  if (document.getElementById('tba-video-styles')) return;
  var style = document.createElement('style');
  style.id = 'tba-video-styles';
  style.textContent =
    '.tba-video-frame { position: relative; width: 100%; background: #000; border-radius: 12px; overflow: hidden; aspect-ratio: 16 / 9; }' +
    '.tba-video-frame.short { aspect-ratio: 9 / 16; max-width: 260px; margin: 0 auto; }' +
    '.tba-video-frame iframe, .tba-video-frame video { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }' +
    '.tba-video-link { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px; width: 100%; height: 100%; position: absolute; inset: 0; background: linear-gradient(135deg, #1b2330, #0f141c); color: #eef1f6; text-decoration: none; font-family: inherit; font-size: 13px; font-weight: 600; text-align: center; padding: 14px; }' +
    '.tba-video-link span { font-size: 28px; }';
  document.head.appendChild(style);
}

// The embed for one stored video. The iframe/video src always comes
// from tbaParseVideoUrl's output, never straight from stored text.
function tbaVideoEmbedHtml(video) {
  tbaEnsureVideoStyles();
  var parsed = tbaParseVideoUrl(video.url);
  var cls = 'tba-video-frame' + (video.type === 'short' ? ' short' : '');
  var inner;

  if (!parsed) {
    inner = '<div class="tba-video-link"><span>⚠️</span>This link can\'t be played</div>';
  } else if (parsed.embedUrl) {
    inner = '<iframe src="' + parsed.embedUrl + '" title="Video" loading="lazy" allow="fullscreen; picture-in-picture" allowfullscreen referrerpolicy="no-referrer" sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"></iframe>';
  } else if (parsed.provider === 'file') {
    inner = '<video src="' + parsed.src + '" controls preload="metadata" playsinline></video>';
  } else {
    inner = '<a class="tba-video-link" href="' + parsed.href + '" target="_blank" rel="noopener noreferrer"><span>▶️</span>Watch on ' + parsed.host + '</a>';
  }
  return '<div class="' + cls + '">' + inner + '</div>';
}

// --- Business outreach ---
// Business accounts post sponsorship calls, events, and networking
// events; anyone else can tap "I'm in" to say they're interested.
// Posts and interest are stored globally (not account-scoped) since a
// post has to be visible to every other account.
var TBA_OUTREACH_KINDS = {
  sponsorship: 'Creator Sponsorship',
  event: 'Event',
  networking: 'Networking Event'
};

var TBA_SEED_OUTREACH = [
  {
    id: 'seed_outreach_1', author: 'skylinecoffee', kind: 'sponsorship', daysAgo: 2,
    title: 'Spring Menu Launch — looking for coffee & lifestyle creators',
    description: 'We\'re launching three new seasonal drinks and want 5 creators to feature them. Free product plus a paid sponsorship per post. Short-form preferred.',
    date: ''
  },
  {
    id: 'seed_outreach_2', author: 'riversidegear', kind: 'event', daysAgo: 4,
    title: 'Riverside Basecamp Weekend',
    description: 'A two-day outdoor gear demo weekend in the Pacific Northwest. Creators get a free pass, gear to test, and a campsite.',
    date: tbaSeedFutureDate(21)
  },
  {
    id: 'seed_outreach_3', author: 'thecraftedtable', kind: 'networking', daysAgo: 6,
    title: 'Makers & Creators Mixer',
    description: 'An evening for independent makers and food/home creators to meet over a long-table dinner. Come say hi and swap ideas.',
    date: tbaSeedFutureDate(14)
  },
  {
    id: 'seed_outreach_4', author: 'brightlinestudio', kind: 'sponsorship', daysAgo: 8,
    title: 'Case study collab — video series',
    description: 'We\'re looking for a creator to co-produce a short video series about small-business branding. Paid, with full creative input.',
    date: ''
  }
];

function tbaSeedFutureDate(daysAhead) {
  var d = new Date();
  d.setDate(d.getDate() + daysAhead);
  return d.toISOString().slice(0, 10);
}

function tbaGetOutreachPosts() {
  var stored;
  try {
    stored = JSON.parse(localStorage.getItem('tba_outreach') || '[]');
    if (!Array.isArray(stored)) stored = [];
  } catch (e) {
    stored = [];
  }
  var seeds = TBA_SEED_OUTREACH.map(function (s) {
    var created = new Date();
    created.setDate(created.getDate() - s.daysAgo);
    return { id: s.id, author: s.author, kind: s.kind, title: s.title, description: s.description, date: s.date, createdAt: created.toISOString(), seed: true };
  });
  var removed = tbaGetRemovedOutreachIds();
  return stored.concat(seeds)
    .filter(function (p) { return removed.indexOf(p.id) === -1 && !tbaIsHiddenUser(p.author); })
    .sort(function (a, b) { return new Date(b.createdAt) - new Date(a.createdAt); });
}

// Posts an admin took down (the only way to remove a seed post, or
// someone else's) — kept as a list of hidden ids rather than editing
// the posts themselves.
function tbaGetRemovedOutreachIds() {
  try {
    var list = JSON.parse(localStorage.getItem('tba_outreach_removed') || '[]');
    return Array.isArray(list) ? list : [];
  } catch (e) {
    return [];
  }
}

// Only business accounts can post, with a title, a real kind, and (for
// events) an optional date — enforced here, not just in the form.
function tbaCreateOutreachPost(kind, title, description, date) {
  if (!tbaIsMyRole('business')) return { ok: false, error: 'not-business' };
  if (!TBA_OUTREACH_KINDS[kind]) return { ok: false, error: 'bad-kind' };
  title = (title || '').trim().slice(0, 100);
  if (!title) return { ok: false, error: 'no-title' };

  var post = {
    id: 'o_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
    author: localStorage.getItem('tba_username'),
    kind: kind,
    title: title,
    description: (description || '').trim().slice(0, 500),
    date: /^\d{4}-\d{2}-\d{2}$/.test(date || '') ? date : '',
    createdAt: new Date().toISOString()
  };
  var stored;
  try { stored = JSON.parse(localStorage.getItem('tba_outreach') || '[]'); } catch (e) { stored = []; }
  stored.push(post);
  localStorage.setItem('tba_outreach', JSON.stringify(stored));
  return { ok: true, post: post };
}

function tbaDeleteOutreachPost(id) {
  var me = localStorage.getItem('tba_username');
  var stored;
  try { stored = JSON.parse(localStorage.getItem('tba_outreach') || '[]'); } catch (e) { stored = []; }
  var kept = stored.filter(function (p) { return !(p.id === id && p.author === me); });
  localStorage.setItem('tba_outreach', JSON.stringify(kept));
}

function tbaGetOutreachInterest() {
  try {
    var map = JSON.parse(localStorage.getItem('tba_outreach_interest') || '{}');
    return map && typeof map === 'object' && !Array.isArray(map) ? map : {};
  } catch (e) {
    return {};
  }
}

function tbaGetOutreachInterested(postId) {
  return tbaGetOutreachInterest()[postId] || [];
}

// Toggles the signed-in account's "I'm in" on a post. The author can't
// mark interest in their own post. Returns whether they're now in.
function tbaToggleOutreachInterest(postId) {
  var me = localStorage.getItem('tba_username');
  var post = tbaGetOutreachPosts().find(function (p) { return p.id === postId; });
  if (!me || !post || post.author === me) return null;

  var map = tbaGetOutreachInterest();
  var list = map[postId] || [];
  var idx = list.indexOf(me);
  if (idx === -1) list.push(me); else list.splice(idx, 1);
  map[postId] = list;
  localStorage.setItem('tba_outreach_interest', JSON.stringify(map));

  // A timestamped log alongside the list, so the author's
  // notifications can say when someone said they're in.
  var log = tbaGetOutreachInterestLog().filter(function (e) { return !(e.postId === postId && e.user === me); });
  if (idx === -1) log.push({ postId: postId, user: me, at: new Date().toISOString() });
  localStorage.setItem('tba_outreach_interest_log', JSON.stringify(log));
  return idx === -1;
}

function tbaGetOutreachInterestLog() {
  try {
    var log = JSON.parse(localStorage.getItem('tba_outreach_interest_log') || '[]');
    return Array.isArray(log) ? log : [];
  } catch (e) {
    return [];
  }
}

// --- Reports, blocking, and suspension ---
// Anyone can report a profile, a creator video, or an outreach post;
// admins review the queue and can dismiss it, take the content down,
// or suspend the account. Blocking is personal: it hides two accounts
// from each other. Reports and suspensions are stored globally (admins
// need to see everyone's); a block list belongs to the account that
// made it.
var TBA_REPORT_REASONS = {
  spam: 'Spam or scam',
  harassment: 'Harassment or abuse',
  inappropriate: 'Inappropriate content',
  impersonation: 'Impersonation',
  other: 'Something else'
};

function tbaGetReports() {
  try {
    var list = JSON.parse(localStorage.getItem('tba_reports') || '[]');
    return Array.isArray(list) ? list : [];
  } catch (e) {
    return [];
  }
}

function tbaGetOpenReports() {
  return tbaGetReports().filter(function (r) { return r.status === 'open'; })
    .sort(function (a, b) { return new Date(b.createdAt) - new Date(a.createdAt); });
}

function tbaGetResolvedReports() {
  return tbaGetReports().filter(function (r) { return r.status !== 'open'; })
    .sort(function (a, b) { return new Date(b.resolvedAt) - new Date(a.resolvedAt); });
}

// targetType is 'profile', 'video', or 'outreach'; targetId is the
// username, video id, or post id; label is a snapshot of what it was
// called, so the queue still reads sensibly after the content is gone.
// You can't report yourself, and the same person can't stack open
// reports on the same thing.
function tbaSubmitReport(targetType, targetId, targetUser, label, reason, details) {
  var me = localStorage.getItem('tba_username');
  if (!me) return { ok: false, error: 'not-signed-in' };
  if (['profile', 'video', 'outreach', 'brief'].indexOf(targetType) === -1) return { ok: false, error: 'bad-target' };
  if (!TBA_REPORT_REASONS[reason]) return { ok: false, error: 'bad-reason' };
  if (targetUser && targetUser.toLowerCase() === me.toLowerCase()) return { ok: false, error: 'self' };

  var reports = tbaGetReports();
  var duplicate = reports.some(function (r) {
    return r.status === 'open' && r.reporter === me && r.targetType === targetType && r.targetId === targetId;
  });
  if (duplicate) return { ok: false, error: 'duplicate' };

  reports.push({
    id: 'r_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
    reporter: me,
    targetType: targetType,
    targetId: targetId,
    targetUser: targetUser,
    label: String(label || targetId).slice(0, 100),
    reason: reason,
    details: (details || '').trim().slice(0, 500),
    createdAt: new Date().toISOString(),
    status: 'open'
  });
  localStorage.setItem('tba_reports', JSON.stringify(reports));
  return { ok: true };
}

// decision: 'dismissed' (nothing wrong), 'removed' (content taken
// down), or 'suspended' (account suspended, which also hides
// everything it posted). Settles every open report on the same
// target at once, since they're all about the same thing.
function tbaResolveReport(id, decision) {
  var reports = tbaGetReports();
  var report = reports.find(function (r) { return r.id === id; });
  if (!report || ['dismissed', 'removed', 'suspended'].indexOf(decision) === -1) return false;

  if (decision === 'removed') {
    if (report.targetType === 'video') tbaAdminRemoveVideo(report.targetUser, report.targetId);
    else if (report.targetType === 'outreach') tbaAdminRemoveOutreach(report.targetId);
    else if (report.targetType === 'brief') tbaAdminRemoveBrief(report.targetId);
    else return false;
  } else if (decision === 'suspended') {
    tbaSuspendAccount(report.targetUser);
  }

  var now = new Date().toISOString();
  reports.forEach(function (r) {
    if (r.status === 'open' && r.targetType === report.targetType && r.targetId === report.targetId) {
      r.status = decision;
      r.resolvedAt = now;
    }
  });
  localStorage.setItem('tba_reports', JSON.stringify(reports));
  return true;
}

function tbaAdminRemoveVideo(owner, videoId) {
  var key = tbaAccountKey('tba_videos', owner);
  try {
    var list = JSON.parse(localStorage.getItem(key) || '[]').filter(function (v) { return v.id !== videoId; });
    localStorage.setItem(key, JSON.stringify(list));
  } catch (e) { /* nothing stored — nothing to remove */ }
}

function tbaAdminRemoveOutreach(postId) {
  var removed = tbaGetRemovedOutreachIds();
  if (removed.indexOf(postId) === -1) removed.push(postId);
  localStorage.setItem('tba_outreach_removed', JSON.stringify(removed));
}

function tbaGetSuspended() {
  try {
    var map = JSON.parse(localStorage.getItem('tba_suspended') || '{}');
    return map && typeof map === 'object' && !Array.isArray(map) ? map : {};
  } catch (e) {
    return {};
  }
}

function tbaIsSuspended(username) {
  return !!(username && tbaGetSuspended()[username.toLowerCase()]);
}

function tbaSuspendAccount(username) {
  if (!username) return;
  var map = tbaGetSuspended();
  map[username.toLowerCase()] = { username: username, at: new Date().toISOString() };
  localStorage.setItem('tba_suspended', JSON.stringify(map));
}

function tbaRestoreAccount(username) {
  var map = tbaGetSuspended();
  delete map[(username || '').toLowerCase()];
  localStorage.setItem('tba_suspended', JSON.stringify(map));
}

// A suspended account can't stay signed in: the next page it loads
// signs it out. Admin and sign-in pages are exempt.
(function tbaEnforceSuspension() {
  var me = localStorage.getItem('tba_username');
  if (!me || !localStorage.getItem('tba_authed') || !tbaIsSuspended(me)) return;
  var page = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  if (tbaIsPreAuthPage() || page.indexOf('admin') === 0) return;
  localStorage.removeItem('tba_authed');
  location.replace('index.html');
})();

function tbaGetBlocked(forUsername) {
  try {
    var list = JSON.parse(localStorage.getItem(tbaAccountKey('tba_blocked', forUsername)) || '[]');
    return Array.isArray(list) ? list : [];
  } catch (e) {
    return [];
  }
}

function tbaIsBlockedByMe(username) {
  if (!username) return false;
  var lower = username.toLowerCase();
  return tbaGetBlocked().some(function (u) { return u.toLowerCase() === lower; });
}

// Blocking hides two accounts from each other, whichever one did the
// blocking — you stop seeing them and they stop seeing you.
function tbaIsBlockedEitherWay(username) {
  var me = localStorage.getItem('tba_username');
  if (!me || !username || me.toLowerCase() === username.toLowerCase()) return false;
  if (tbaIsBlockedByMe(username)) return true;
  var lowerMe = me.toLowerCase();
  return tbaGetBlocked(username).some(function (u) { return u.toLowerCase() === lowerMe; });
}

// The one test every list uses to decide whether to show an account:
// suspended, or blocked either way.
function tbaIsHiddenUser(username) {
  return tbaIsSuspended(username) || tbaIsBlockedEitherWay(username);
}

function tbaBlockUser(username) {
  var me = localStorage.getItem('tba_username');
  if (!me || !username || me.toLowerCase() === username.toLowerCase() || tbaIsBlockedByMe(username)) return;
  var list = tbaGetBlocked();
  list.push(username);
  localStorage.setItem(tbaAccountKey('tba_blocked'), JSON.stringify(list));
  tbaRemoveFromMyNetwork(username);
}

function tbaUnblockUser(username) {
  var lower = (username || '').toLowerCase();
  var list = tbaGetBlocked().filter(function (u) { return u.toLowerCase() !== lower; });
  localStorage.setItem(tbaAccountKey('tba_blocked'), JSON.stringify(list));
}

// --- Campaign briefs ---
// A brief is a specific job: budget, deliverables, deadline. Business
// accounts post them; creator accounts apply with a short pitch; the
// author accepts or declines each applicant. Unlike an outreach post
// (just "I'm in" taps), an application carries a pitch and a decision.
var TBA_SEED_BRIEFS = [
  {
    id: 'seed_brief_1', author: 'pearandco', daysAgo: 3,
    title: 'Holiday skincare routine — 2 creators',
    description: 'We want two creators to show a real week with our holiday set. Honest reviews only; we send the product and never script you.',
    budget: 1500, deliverables: '1 Reel + 3 Stories each', deadline: tbaSeedFutureDate(30)
  },
  {
    id: 'seed_brief_2', author: 'riversidegear', daysAgo: 5,
    title: 'Winter camping gear test',
    description: 'Looking for an outdoor creator to test our winter line on a real overnight trip and put it on YouTube.',
    budget: 2400, deliverables: '1 long-form YouTube video', deadline: tbaSeedFutureDate(45)
  }
];

function tbaGetRemovedIds(key) {
  try {
    var list = JSON.parse(localStorage.getItem(key) || '[]');
    return Array.isArray(list) ? list : [];
  } catch (e) {
    return [];
  }
}

function tbaGetBriefs() {
  var stored;
  try { stored = JSON.parse(localStorage.getItem('tba_briefs') || '[]'); if (!Array.isArray(stored)) stored = []; } catch (e) { stored = []; }
  var seeds = TBA_SEED_BRIEFS.map(function (s) {
    var created = new Date();
    created.setDate(created.getDate() - s.daysAgo);
    return { id: s.id, author: s.author, title: s.title, description: s.description, budget: s.budget, deliverables: s.deliverables, deadline: s.deadline, createdAt: created.toISOString(), seed: true };
  });
  var removed = tbaGetRemovedIds('tba_briefs_removed');
  return stored.concat(seeds)
    .filter(function (b) { return removed.indexOf(b.id) === -1 && !tbaIsHiddenUser(b.author); })
    .sort(function (a, b) { return new Date(b.createdAt) - new Date(a.createdAt); });
}

function tbaCreateBrief(title, description, budget, deliverables, deadline) {
  if (!tbaIsMyRole('business')) return { ok: false, error: 'not-business' };
  title = (title || '').trim().slice(0, 100);
  if (!title) return { ok: false, error: 'no-title' };
  var amount = parseInt(budget, 10);
  if (!amount || amount <= 0) return { ok: false, error: 'bad-budget' };
  deliverables = (deliverables || '').trim().slice(0, 100);
  if (!deliverables) return { ok: false, error: 'no-deliverables' };

  var brief = {
    id: 'b_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
    author: localStorage.getItem('tba_username'),
    title: title,
    description: (description || '').trim().slice(0, 500),
    budget: amount,
    deliverables: deliverables,
    deadline: /^\d{4}-\d{2}-\d{2}$/.test(deadline || '') ? deadline : '',
    createdAt: new Date().toISOString()
  };
  var stored;
  try { stored = JSON.parse(localStorage.getItem('tba_briefs') || '[]'); } catch (e) { stored = []; }
  stored.push(brief);
  localStorage.setItem('tba_briefs', JSON.stringify(stored));
  return { ok: true, brief: brief };
}

function tbaDeleteBrief(id) {
  var me = localStorage.getItem('tba_username');
  var stored;
  try { stored = JSON.parse(localStorage.getItem('tba_briefs') || '[]'); } catch (e) { stored = []; }
  localStorage.setItem('tba_briefs', JSON.stringify(stored.filter(function (b) { return !(b.id === id && b.author === me); })));
}

function tbaAdminRemoveBrief(id) {
  var removed = tbaGetRemovedIds('tba_briefs_removed');
  if (removed.indexOf(id) === -1) removed.push(id);
  localStorage.setItem('tba_briefs_removed', JSON.stringify(removed));
}

function tbaGetAllBriefApplications() {
  try {
    var list = JSON.parse(localStorage.getItem('tba_brief_applications') || '[]');
    return Array.isArray(list) ? list : [];
  } catch (e) {
    return [];
  }
}

function tbaGetBriefApplications(briefId) {
  return tbaGetAllBriefApplications().filter(function (a) { return a.briefId === briefId && !tbaIsHiddenUser(a.applicant); });
}

function tbaGetMyBriefApplication(briefId) {
  var me = localStorage.getItem('tba_username');
  return tbaGetAllBriefApplications().find(function (a) { return a.briefId === briefId && a.applicant === me; }) || null;
}

// Creators only, not the brief's own author, one application per
// brief, and a pitch is required — enforced here, not just in the form.
function tbaApplyToBrief(briefId, pitch) {
  var me = localStorage.getItem('tba_username');
  if (!tbaIsMyRole('influencer')) return { ok: false, error: 'not-creator' };
  var brief = tbaGetBriefs().find(function (b) { return b.id === briefId; });
  if (!brief || brief.author === me) return { ok: false, error: 'bad-brief' };
  if (tbaGetMyBriefApplication(briefId)) return { ok: false, error: 'duplicate' };
  pitch = (pitch || '').trim().slice(0, 400);
  if (!pitch) return { ok: false, error: 'no-pitch' };

  var list = tbaGetAllBriefApplications();
  list.push({
    id: 'ba_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
    briefId: briefId, applicant: me, pitch: pitch, status: 'pending', createdAt: new Date().toISOString()
  });
  localStorage.setItem('tba_brief_applications', JSON.stringify(list));
  return { ok: true };
}

function tbaWithdrawBriefApplication(briefId) {
  var me = localStorage.getItem('tba_username');
  var list = tbaGetAllBriefApplications().filter(function (a) { return !(a.briefId === briefId && a.applicant === me && a.status === 'pending'); });
  localStorage.setItem('tba_brief_applications', JSON.stringify(list));
}

// Only the brief's author can decide, and only on a pending application.
function tbaDecideBriefApplication(appId, decision) {
  var me = localStorage.getItem('tba_username');
  if (decision !== 'accepted' && decision !== 'declined') return false;
  var list = tbaGetAllBriefApplications();
  var app = list.find(function (a) { return a.id === appId; });
  if (!app || app.status !== 'pending') return false;
  var brief = tbaGetBriefs().find(function (b) { return b.id === app.briefId; });
  if (!brief || brief.author !== me) return false;
  app.status = decision;
  app.decidedAt = new Date().toISOString();
  localStorage.setItem('tba_brief_applications', JSON.stringify(list));
  return true;
}

// --- Media kit ---
// What a business wants to see before messaging a creator: a rate
// card, brands they've worked with, and who their audience is.
function tbaGetMediaKit(forUsername) {
  var empty = { rates: [], partners: [], audience: { age: '', location: '', platform: '' } };
  try {
    var stored = JSON.parse(localStorage.getItem(tbaAccountKey('tba_mediakit', forUsername)) || 'null');
    if (stored) return { rates: stored.rates || [], partners: stored.partners || [], audience: Object.assign({}, empty.audience, stored.audience || {}) };
  } catch (e) { /* fall through */ }
  var seed = TBA_SEED_USERS.find(function (u) { return forUsername && u.username.toLowerCase() === forUsername.toLowerCase(); });
  if (seed && seed.mediaKit) return seed.mediaKit;
  return empty;
}

function tbaMediaKitIsEmpty(kit) {
  return kit.rates.length === 0 && kit.partners.length === 0 && !kit.audience.age && !kit.audience.location && !kit.audience.platform;
}

function tbaSaveMediaKit(kit) {
  var clean = {
    rates: (kit.rates || []).map(function (r) {
      return { item: String(r.item || '').trim().slice(0, 40), price: String(r.price || '').trim().slice(0, 20) };
    }).filter(function (r) { return r.item && r.price; }).slice(0, 4),
    partners: (kit.partners || []).map(function (p) { return String(p).trim().slice(0, 30); }).filter(Boolean).slice(0, 6),
    audience: {
      age: String((kit.audience || {}).age || '').trim().slice(0, 40),
      location: String((kit.audience || {}).location || '').trim().slice(0, 40),
      platform: String((kit.audience || {}).platform || '').trim().slice(0, 40)
    }
  };
  localStorage.setItem(tbaAccountKey('tba_mediakit'), JSON.stringify(clean));
}

// --- Brand profile (business accounts) ---
// What a creator wants to know before pitching a company: who they
// are, what they look for and spend, and how they want to be
// represented. Stored per account like the media kit.
function tbaEmptyBrandProfile() {
  return {
    company: { legalName: '', size: '', founded: '', location: '', website: '' },
    work: { lookingFor: '', budget: '' },
    guidelines: { tone: '', dos: [], donts: [], hashtags: '', assets: [] }
  };
}

var TBA_COMPANY_SIZES = ['1–10', '11–50', '51–200', '201–1,000', '1,000+'];

function tbaGetBrandProfile(forUsername) {
  var empty = tbaEmptyBrandProfile();
  try {
    var stored = JSON.parse(localStorage.getItem(tbaAccountKey('tba_brand', forUsername)) || 'null');
    if (stored) {
      return {
        company: Object.assign({}, empty.company, stored.company || {}),
        work: Object.assign({}, empty.work, stored.work || {}),
        guidelines: Object.assign({}, empty.guidelines, stored.guidelines || {})
      };
    }
  } catch (e) { /* fall through */ }
  var seed = TBA_SEED_USERS.find(function (u) { return forUsername && u.username.toLowerCase() === forUsername.toLowerCase(); });
  return seed && seed.brand ? seed.brand : empty;
}

function tbaBrandProfileIsEmpty(b) {
  var c = b.company, w = b.work, g = b.guidelines;
  return !(c.legalName || c.size || c.founded || c.location || c.website || w.lookingFor || w.budget ||
    g.tone || g.dos.length || g.donts.length || g.hashtags || g.assets.length);
}

// Only business accounts have one; everything is trimmed and capped,
// and only http(s) links are kept.
function tbaSaveBrandProfile(input) {
  if (!tbaIsMyRole('business')) return false;
  var text = function (v, n) { return String(v || '').trim().slice(0, n); };
  var lines = function (v) {
    return (Array.isArray(v) ? v : String(v || '').split('\n')).map(function (l) { return text(l, 100); }).filter(Boolean).slice(0, 6);
  };
  var safeUrl = function (v) {
    var u = text(v, 200);
    if (!u || /\s/.test(u)) return '';
    if (/^[a-z][a-z0-9+.-]*:(?!\d)/i.test(u) && !/^https?:\/\//i.test(u)) return '';
    if (!/^https?:\/\//i.test(u)) u = 'https://' + u;
    try {
      var parsed = new URL(u);
      return parsed.hostname.indexOf('.') === -1 ? '' : parsed.href;
    } catch (e) { return ''; }
  };
  var c = input.company || {}, w = input.work || {}, g = input.guidelines || {};
  var year = parseInt(c.founded, 10);

  var clean = {
    company: {
      legalName: text(c.legalName, 80),
      size: TBA_COMPANY_SIZES.indexOf(c.size) !== -1 ? c.size : '',
      founded: year >= 1800 && year <= new Date().getFullYear() ? String(year) : '',
      location: text(c.location, 60),
      website: safeUrl(c.website)
    },
    work: { lookingFor: text(w.lookingFor, 240), budget: text(w.budget, 40) },
    guidelines: {
      tone: text(g.tone, 200),
      dos: lines(g.dos),
      donts: lines(g.donts),
      hashtags: text(g.hashtags, 100),
      assets: (g.assets || []).map(function (a) { return { label: text(a.label, 40), url: safeUrl(a.url) }; })
        .filter(function (a) { return a.url; }).map(function (a) { return { label: a.label || a.url, url: a.url }; }).slice(0, 4)
    }
  };
  localStorage.setItem(tbaAccountKey('tba_brand'), JSON.stringify(clean));
  return true;
}

// --- Favorites and saved searches ---
function tbaGetFavorites() {
  try {
    var list = JSON.parse(localStorage.getItem(tbaAccountKey('tba_favorites')) || '[]');
    return Array.isArray(list) ? list : [];
  } catch (e) {
    return [];
  }
}

function tbaIsFavorite(username) {
  var lower = (username || '').toLowerCase();
  return tbaGetFavorites().some(function (u) { return u.toLowerCase() === lower; });
}

function tbaToggleFavorite(username) {
  var lower = (username || '').toLowerCase();
  var list = tbaGetFavorites();
  var idx = list.findIndex(function (u) { return u.toLowerCase() === lower; });
  if (idx === -1) list.push(username); else list.splice(idx, 1);
  localStorage.setItem(tbaAccountKey('tba_favorites'), JSON.stringify(list));
  return idx === -1;
}

// The directory's filter + sort, shared so a saved search matches
// exactly what the page would show. filters: { search, role
// ('all' | 'business' | 'influencer' | 'saved'), niche, followers
// ('all' or 'min-max'), sort }.
function tbaFilterDirectory(users, filters) {
  var term = (filters.search || '').trim().toLowerCase();
  var range = !filters.followers || filters.followers === 'all' ? null : filters.followers.split('-').map(Number);
  var result = users.filter(function (u) {
    var roleOk = !filters.role || filters.role === 'all' ||
      (filters.role === 'saved' ? tbaIsFavorite(u.username) : u.role === filters.role);
    var searchOk = term === '' || u.username.toLowerCase().indexOf(term) !== -1;
    var nicheOk = !filters.niche || filters.niche === 'all' || u.niche === filters.niche;
    var openOk = !filters.openToWork || !!u.openToWork;
    var followersOk = !range || ((u.followers || 0) >= range[0] && (u.followers || 0) <= range[1]);
    return roleOk && searchOk && nicheOk && followersOk && openOk;
  });

  if (filters.sort === 'deals') {
    result.sort(function (a, b) { return tbaGetDealsClosedCountFor(b.username) - tbaGetDealsClosedCountFor(a.username); });
  } else if (filters.sort === 'rating') {
    result.sort(function (a, b) {
      var sa = tbaGetRatingSummary(a.username), sb = tbaGetRatingSummary(b.username);
      return (sb.avg || 0) - (sa.avg || 0) || sb.count - sa.count;
    });
  } else if (filters.sort === 'followers') {
    result.sort(function (a, b) { return (b.followers || 0) - (a.followers || 0); });
  }
  return result;
}

function tbaGetDirectoryUsers() {
  return tbaGetAllUsers().filter(function (u) { return !u.isYou && !tbaIsHiddenUser(u.username); });
}

function tbaGetSavedSearches() {
  try {
    var list = JSON.parse(localStorage.getItem(tbaAccountKey('tba_saved_searches')) || '[]');
    return Array.isArray(list) ? list : [];
  } catch (e) {
    return [];
  }
}

function tbaSaveSearch(name, filters) {
  name = (name || '').trim().slice(0, 40);
  if (!name) return null;
  var list = tbaGetSavedSearches();
  if (list.length >= 8) return null;
  var entry = {
    id: 'ss_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5),
    name: name,
    filters: { search: filters.search || '', role: filters.role || 'all', niche: filters.niche || 'all', followers: filters.followers || 'all', sort: filters.sort || 'default', openToWork: !!filters.openToWork },
    createdAt: new Date().toISOString(),
    seen: tbaFilterDirectory(tbaGetDirectoryUsers(), filters).map(function (u) { return u.username; })
  };
  list.push(entry);
  localStorage.setItem(tbaAccountKey('tba_saved_searches'), JSON.stringify(list));
  return entry;
}

function tbaDeleteSavedSearch(id) {
  localStorage.setItem(tbaAccountKey('tba_saved_searches'), JSON.stringify(tbaGetSavedSearches().filter(function (s) { return s.id !== id; })));
}

// Marks everything that currently matches as seen, so only accounts
// that show up afterwards count as "new matches".
function tbaMarkSavedSearchSeen(id) {
  var list = tbaGetSavedSearches();
  var s = list.find(function (x) { return x.id === id; });
  if (!s) return;
  s.seen = tbaFilterDirectory(tbaGetDirectoryUsers(), s.filters).map(function (u) { return u.username; });
  localStorage.setItem(tbaAccountKey('tba_saved_searches'), JSON.stringify(list));
}

function tbaGetSavedSearchNewMatches(s) {
  return tbaFilterDirectory(tbaGetDirectoryUsers(), s.filters).filter(function (u) { return s.seen.indexOf(u.username) === -1; });
}

// --- Payment status on signed contracts ---
// There's no real payment here — this is a record the contract's
// owner keeps of whether they've been paid (or have paid).
function tbaSetContractPayment(contractId, status, note) {
  var me = localStorage.getItem('tba_username');
  var contract = tbaGetContract(contractId);
  if (!contract || contract.status !== 'signed' || contract.owner !== me) return false;
  if (status !== 'paid' && status !== 'unpaid') return false;
  tbaUpdateContract(contractId, {
    payment: { status: status, note: (note || '').trim().slice(0, 140), at: new Date().toISOString() }
  });
  return true;
}

function tbaGetContractPayment(contract) {
  return contract.payment || { status: 'unpaid', note: '', at: null };
}

// --- Creator analytics ---
// A creator's video views: one per viewer per video per day, never
// counting your own views of your own videos.
function tbaGetVideoViewLog() {
  try {
    var list = JSON.parse(localStorage.getItem('tba_video_views') || '[]');
    return Array.isArray(list) ? list : [];
  } catch (e) {
    return [];
  }
}

function tbaRecordVideoViews(videos, ownerUsername) {
  var me = localStorage.getItem('tba_username');
  if (!me || !ownerUsername || me.toLowerCase() === ownerUsername.toLowerCase() || videos.length === 0) return;
  var day = new Date().toISOString().slice(0, 10);
  var log = tbaGetVideoViewLog();
  var changed = false;
  videos.forEach(function (v) {
    var seen = log.some(function (e) { return e.videoId === v.id && e.viewer === me && e.day === day; });
    if (!seen) {
      log.push({ videoId: v.id, owner: ownerUsername, viewer: me, day: day, at: new Date().toISOString() });
      changed = true;
    }
  });
  if (changed) localStorage.setItem('tba_video_views', JSON.stringify(log.slice(-2000)));
}

function tbaGetVideoViewCounts(ownerUsername) {
  var lower = (ownerUsername || '').toLowerCase();
  var counts = {};
  tbaGetVideoViewLog().forEach(function (e) {
    if (e.owner.toLowerCase() === lower) counts[e.videoId] = (counts[e.videoId] || 0) + 1;
  });
  return counts;
}

function tbaGetVideoViewsLast7Days(ownerUsername) {
  var lower = (ownerUsername || '').toLowerCase();
  var views = tbaGetVideoViewLog().filter(function (e) { return e.owner.toLowerCase() === lower; })
    .map(function (e) { return new Date(e.at); });
  var days = [];
  for (var i = 6; i >= 0; i--) {
    var day = new Date();
    day.setHours(0, 0, 0, 0);
    day.setDate(day.getDate() - i);
    var next = new Date(day);
    next.setDate(next.getDate() + 1);
    days.push({ label: day.toLocaleDateString(undefined, { weekday: 'short' }), count: views.filter(function (v) { return v >= day && v < next; }).length });
  }
  return days;
}

// --- Business analytics ---
// Everything here is computed from what's already recorded: interest
// on your outreach posts, applications to your briefs, your contracts
// and their payment records, and reviews you've received.
function tbaGetMyOutreachStats() {
  var me = localStorage.getItem('tba_username');
  return tbaGetOutreachPosts()
    .filter(function (p) { return p.author === me; })
    .map(function (p) { return { post: p, count: tbaGetOutreachInterested(p.id).length }; })
    .sort(function (a, b) { return b.count - a.count; });
}

function tbaGetOutreachInterestLast7Days() {
  var mine = {};
  tbaGetMyOutreachStats().forEach(function (s) { mine[s.post.id] = true; });
  var times = tbaGetOutreachInterestLog()
    .filter(function (e) { return mine[e.postId]; })
    .map(function (e) { return new Date(e.at); });
  var days = [];
  for (var i = 6; i >= 0; i--) {
    var day = new Date();
    day.setHours(0, 0, 0, 0);
    day.setDate(day.getDate() - i);
    var next = new Date(day);
    next.setDate(next.getDate() + 1);
    days.push({ label: day.toLocaleDateString(undefined, { weekday: 'short' }), count: times.filter(function (t) { return t >= day && t < next; }).length });
  }
  return days;
}

function tbaGetMyBriefStats() {
  var me = localStorage.getItem('tba_username');
  return tbaGetBriefs()
    .filter(function (b) { return b.author === me; })
    .map(function (b) {
      var apps = tbaGetBriefApplications(b.id);
      var count = function (st) { return apps.filter(function (a) { return a.status === st; }).length; };
      return { brief: b, total: apps.length, pending: count('pending'), accepted: count('accepted'), declined: count('declined') };
    });
}

// Your contracts by stage, plus how many signed ones are paid. The
// "paid" record is the owner's own note (see tbaSetContractPayment).
function tbaGetMyContractFunnel() {
  var me = localStorage.getItem('tba_username');
  var mine = tbaGetContracts().filter(function (c) { return c.owner === me; });
  var count = function (st) { return mine.filter(function (c) { return c.status === st; }).length; };
  var signed = mine.filter(function (c) { return c.status === 'signed'; });
  var paid = signed.filter(function (c) { return tbaGetContractPayment(c).status === 'paid'; }).length;
  return {
    total: mine.length,
    draft: count('draft'),
    sent: count('sent') + count('revised'),
    signed: signed.length,
    paid: paid,
    awaitingPayment: signed.length - paid
  };
}

// --- Share links ---
function tbaBuildShareUrl(page, query) {
  var dir = location.pathname.replace(/[^/]*$/, '');
  return location.origin + dir + page + (query || '');
}

// Native share sheet where there is one, otherwise copies the link.
function tbaShareLink(url, title, text) {
  if (navigator.share) {
    navigator.share({ title: title, text: text || title, url: url }).catch(function () {});
    return;
  }
  var done = function () { tbaShowToast('Link copied', 'success'); };
  var fail = function () { window.prompt('Copy this link:', url); };
  if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(url).then(done, fail);
  else fail();
}

// --- Support requests ---
function tbaGetSupportRequests() {
  try {
    var list = JSON.parse(localStorage.getItem('tba_support_requests') || '[]');
    return Array.isArray(list) ? list : [];
  } catch (e) {
    return [];
  }
}

var TBA_SUPPORT_TOPICS = { account: 'My account', deals: 'Deals & contracts', content: 'Videos & outreach', bug: 'Something is broken', other: 'Something else' };

function tbaSubmitSupportRequest(topic, message, email) {
  message = (message || '').trim().slice(0, 1000);
  if (!TBA_SUPPORT_TOPICS[topic]) return { ok: false, error: 'bad-topic' };
  if (!message) return { ok: false, error: 'no-message' };
  email = (email || '').trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { ok: false, error: 'bad-email' };
  var list = tbaGetSupportRequests();
  list.push({
    id: 'sr_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    from: localStorage.getItem('tba_username') || '',
    email: email, topic: topic, message: message, createdAt: new Date().toISOString(), handled: false
  });
  localStorage.setItem('tba_support_requests', JSON.stringify(list));
  return { ok: true };
}

function tbaMarkSupportHandled(id) {
  var list = tbaGetSupportRequests();
  list.forEach(function (r) { if (r.id === id) r.handled = true; });
  localStorage.setItem('tba_support_requests', JSON.stringify(list));
}

// --- Account settings ---
function tbaChangeMyEmail(email) {
  email = (email || '').trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { ok: false, error: 'bad-email' };
  tbaSaveMyEmail(email);
  return { ok: true };
}

// Needs the current password when the account has one. Hashes in the
// browser like signup does — which, as everywhere here, protects
// nothing against someone with the browser open; a real backend
// replaces this.
function tbaChangeMyPassword(currentPassword, newPassword) {
  return tbaSha256Hex(currentPassword || '').then(function (currentHash) {
    var stored = tbaGetMyPasswordHash();
    if (stored && currentHash !== stored) return { ok: false, error: 'wrong-current' };
    if (!newPassword || newPassword.length < 8) return { ok: false, error: 'too-short' };
    return tbaSha256Hex(newPassword).then(function (newHash) {
      tbaSaveMyPasswordHash(newHash);
      return { ok: true };
    });
  });
}

var TBA_NOTIF_PREF_LABELS = {
  messages: 'Messages, offers, and contracts',
  outreach: 'Outreach, briefs, and saved searches',
  reviews: 'Reviews',
  verification: 'Verification updates'
};

function tbaGetNotifPrefs() {
  var prefs = { messages: true, outreach: true, reviews: true, verification: true };
  try {
    var stored = JSON.parse(localStorage.getItem(tbaAccountKey('tba_notif_prefs')) || '{}');
    Object.keys(prefs).forEach(function (k) { if (stored[k] === false) prefs[k] = false; });
  } catch (e) { /* defaults */ }
  return prefs;
}

function tbaSaveNotifPrefs(prefs) {
  localStorage.setItem(tbaAccountKey('tba_notif_prefs'), JSON.stringify(prefs));
}

function tbaNotificationCategory(id) {
  if (id.indexOf('msg-') === 0) return 'messages';
  if (id.indexOf('review-') === 0) return 'reviews';
  if (id.indexOf('verify-') === 0) return 'verification';
  return 'outreach';
}

// Everything tied to this account, as a downloadable snapshot. Never
// includes the password hash.
function tbaExportMyData() {
  var me = localStorage.getItem('tba_username');
  var lower = me.toLowerCase();
  var scoped = {};
  tbaGetKeysOwnedBy(lower).forEach(function (key) {
    if (key.indexOf('tba_password_hash') === 0) return;
    var raw = localStorage.getItem(key);
    try { scoped[key] = JSON.parse(raw); } catch (e) { scoped[key] = raw; }
  });
  return {
    exportedAt: new Date().toISOString(),
    account: { username: me, role: localStorage.getItem('tba_role'), email: tbaGetMyEmail() },
    profile: scoped,
    contracts: tbaGetContracts().filter(function (c) { return c.owner === me; }),
    reviewsWritten: tbaGetReviews().filter(function (r) { return r.fromUsername === me; }),
    reviewsReceived: tbaGetReviewsFor(me),
    outreachPosts: tbaGetOutreachPosts().filter(function (p) { return p.author === me; }),
    briefs: tbaGetBriefs().filter(function (b) { return b.author === me; }),
    briefApplications: tbaGetAllBriefApplications().filter(function (a) { return a.applicant === me; })
  };
}

// Scoped keys are "<base>_<username>", but usernames can contain
// underscores, so a key can end with more than one account's name
// ("bob_alice" ends with "alice" too). Each key belongs to the
// longest username it ends with.
function tbaGetKeysOwnedBy(lowerUsername) {
  var names = tbaGetLocalAccounts().map(function (a) { return a.username.toLowerCase(); })
    .concat(TBA_SEED_USERS.map(function (u) { return u.username.toLowerCase(); }));
  var keys = [];
  Object.keys(localStorage).forEach(function (key) {
    if (key.indexOf('tba_') !== 0) return;
    var owner = null;
    names.forEach(function (n) {
      if (key.length > n.length + 1 && key.slice(-(n.length + 1)) === '_' + n && (!owner || n.length > owner.length)) owner = n;
    });
    if (owner === lowerUsername) keys.push(key);
  });
  return keys;
}

// Removes the account and what it created. Reports about it, and
// moderation records, are kept.
function tbaDeleteMyAccount() {
  var me = localStorage.getItem('tba_username');
  if (!me) return;
  var lower = me.toLowerCase();

  tbaGetKeysOwnedBy(lower).forEach(function (key) { localStorage.removeItem(key); });
  localStorage.removeItem('tba_profile_views_' + lower);
  localStorage.removeItem('tba_account_migrated_' + lower);

  tbaSaveContracts(tbaGetContracts().filter(function (c) { return c.owner !== me; }));
  tbaSaveReviews(tbaGetReviews().filter(function (r) { return r.fromUsername !== me && r.toUsername.toLowerCase() !== lower; }));

  var posts; try { posts = JSON.parse(localStorage.getItem('tba_outreach') || '[]'); } catch (e) { posts = []; }
  localStorage.setItem('tba_outreach', JSON.stringify(posts.filter(function (p) { return p.author !== me; })));
  var briefs; try { briefs = JSON.parse(localStorage.getItem('tba_briefs') || '[]'); } catch (e) { briefs = []; }
  var myBriefIds = briefs.filter(function (b) { return b.author === me; }).map(function (b) { return b.id; });
  localStorage.setItem('tba_briefs', JSON.stringify(briefs.filter(function (b) { return b.author !== me; })));
  localStorage.setItem('tba_brief_applications', JSON.stringify(tbaGetAllBriefApplications().filter(function (a) {
    return a.applicant !== me && myBriefIds.indexOf(a.briefId) === -1;
  })));

  var interest = tbaGetOutreachInterest();
  Object.keys(interest).forEach(function (id) { interest[id] = interest[id].filter(function (u) { return u !== me; }); });
  localStorage.setItem('tba_outreach_interest', JSON.stringify(interest));
  localStorage.setItem('tba_outreach_interest_log', JSON.stringify(tbaGetOutreachInterestLog().filter(function (e) { return e.user !== me; })));

  localStorage.setItem('tba_local_accounts', JSON.stringify(tbaGetLocalAccounts().filter(function (a) { return a.username.toLowerCase() !== lower; })));

  localStorage.removeItem('tba_authed');
  localStorage.removeItem('tba_username');
  localStorage.removeItem('tba_role');
}

// --- Password reset ---
// No email can be sent from here, so the "link" is handed back to the
// page. A backend would email it instead and never return it.
function tbaGetResetTokens() {
  try {
    var map = JSON.parse(localStorage.getItem('tba_reset_tokens') || '{}');
    return map && typeof map === 'object' && !Array.isArray(map) ? map : {};
  } catch (e) {
    return {};
  }
}

function tbaFindAccountByUsernameOrEmail(identifier) {
  var needle = (identifier || '').trim().toLowerCase();
  if (!needle) return null;
  return tbaGetLocalAccounts().find(function (a) {
    return a.username.toLowerCase() === needle || (tbaGetMyEmail(a.username) || '').toLowerCase() === needle;
  }) || null;
}

function tbaCreateResetToken(identifier) {
  var account = tbaFindAccountByUsernameOrEmail(identifier);
  if (!account) return null;
  var bytes = new Uint8Array(12);
  crypto.getRandomValues(bytes);
  var token = Array.prototype.map.call(bytes, function (b) { return ('0' + b.toString(16)).slice(-2); }).join('');
  var map = tbaGetResetTokens();
  var now = Date.now();
  Object.keys(map).forEach(function (t) { if (map[t].expiresAt < now) delete map[t]; });
  map[token] = { username: account.username, expiresAt: now + 30 * 60 * 1000 };
  localStorage.setItem('tba_reset_tokens', JSON.stringify(map));
  return token;
}

function tbaGetResetTokenUser(token) {
  var entry = tbaGetResetTokens()[token];
  return entry && entry.expiresAt > Date.now() ? entry.username : null;
}

function tbaCompleteReset(token, newPassword) {
  var username = tbaGetResetTokenUser(token);
  if (!username) return Promise.resolve({ ok: false, error: 'bad-token' });
  if (!newPassword || newPassword.length < 8) return Promise.resolve({ ok: false, error: 'too-short' });
  return tbaSha256Hex(newPassword).then(function (hash) {
    localStorage.setItem(tbaAccountKey('tba_password_hash', username), hash);
    var map = tbaGetResetTokens();
    delete map[token];
    localStorage.setItem('tba_reset_tokens', JSON.stringify(map));
    return { ok: true, username: username };
  });
}

// --- Calendar ---
// Everything with a date on it, gathered from data that already
// exists: contract deliverable deadlines, events and networking events
// you posted or said you're in for, and the deadlines of briefs you
// posted or applied to.
function tbaDateKey(date) {
  var d = new Date(date);
  var m = d.getMonth() + 1;
  var day = d.getDate();
  return d.getFullYear() + '-' + (m < 10 ? '0' : '') + m + '-' + (day < 10 ? '0' : '') + day;
}

function tbaGetCalendarEvents() {
  var me = localStorage.getItem('tba_username');
  var events = [];
  if (!me) return events;

  tbaGetUpcomingDeadlines().forEach(function (d) {
    events.push({ date: tbaDateKey(d.dueDate), kind: 'contract', title: d.contract.name + ' — deliverable due', link: 'messaging.html?contract=' + encodeURIComponent(d.contract.id) });
  });

  tbaGetOutreachPosts().forEach(function (p) {
    if (!p.date) return;
    var mine = p.author === me;
    if (!mine && tbaGetOutreachInterested(p.id).indexOf(me) === -1) return;
    events.push({ date: p.date, kind: p.kind === 'networking' ? 'networking' : 'event', title: p.title + (mine ? ' (yours)' : ' — you\'re in'), link: 'videos.html?post=' + encodeURIComponent(p.id) + '#outreach' });
  });

  tbaGetBriefs().forEach(function (b) {
    if (!b.deadline) return;
    if (b.author !== me && !tbaGetMyBriefApplication(b.id)) return;
    events.push({ date: b.deadline, kind: 'brief', title: b.title + (b.author === me ? ' — brief due (yours)' : ' — brief due'), link: 'videos.html?brief=' + encodeURIComponent(b.id) + '#briefs' });
  });

  return events.sort(function (a, b) { return a.date < b.date ? -1 : a.date > b.date ? 1 : 0; });
}

// --- Contract templates ---
// Starting points for the common deal shapes. Each fills in the real
// terms already negotiated in the conversation (brand, rate,
// deliverables, timeline) and leaves the rest as ordinary clauses.
var TBA_CONTRACT_TEMPLATES = [
  { id: 'single-post', name: 'Single post', description: 'One sponsored post for a flat fee, with one round of revisions.' },
  { id: 'campaign', name: 'Multi-post campaign', description: 'Several pieces of content over a few weeks, paid in two parts.' },
  { id: 'event', name: 'Event appearance', description: 'Attend or host an event, with content before and after.' },
  { id: 'retainer', name: 'Monthly retainer', description: 'Ongoing content for a fixed monthly fee, with notice to end.' }
];

function tbaGenerateTemplateContract(templateId, myUsername, participantUsername) {
  var today = tbaFormatDateLong(new Date().toISOString());
  var thread = tbaGetMyThread(participantUsername);
  var counterpart = tbaGetUserByUsername(participantUsername);
  var offer = tbaGetCurrentOffer(participantUsername) || { amount: 0, videos: 1 };
  var brand = thread ? thread.deal.brand : (counterpart ? counterpart.name : participantUsername);
  var timeline = offer.timeline || (thread ? thread.deal.timeline : '4 weeks');
  var deliverables = tbaOfferDeliverablesLabel(offer);
  var amount = '$' + (offer.amount || 0).toLocaleString() + ' USD';

  var head = function (title) {
    return title + '\n\nThis Agreement is entered into on ' + today + ' by and between:\n\n' +
      'Creator: @' + myUsername + '\nBrand: ' + brand + ' (@' + participantUsername + ')\n\n';
  };
  var tail = function (n) {
    return n + '. DISCLOSURE\nThe Creator will clearly disclose the paid partnership in each piece of content, as required by applicable advertising rules.\n\n' +
      (n + 1) + '. TERMINATION\nEither party may end this Agreement with written notice if the other fails to meet its obligations.\n\n' +
      (n + 2) + '. ENTIRE AGREEMENT\nThis Agreement is the full understanding between the parties on this collaboration.\n\n' +
      'SIGNATURES\nThis Agreement is not binding until signed by both parties below.';
  };

  if (templateId === 'campaign') {
    return head('MULTI-POST CAMPAIGN AGREEMENT') +
      '1. SCOPE OF WORK\nThe Creator will produce and deliver the following across the campaign: ' + deliverables + '.\n\n' +
      '2. TIMELINE\nAll content will be delivered within ' + timeline + ' of the Effective Date, in the order agreed between the parties.\n\n' +
      '3. COMPENSATION\nThe Brand will pay the Creator ' + amount + ' in total: half on signing, and half within 15 days of final content approval.\n\n' +
      '4. APPROVAL\nThe Brand may request up to two rounds of reasonable revisions on each piece before it is considered final.\n\n' +
      '5. REPORTING\nAfter publishing, the Creator will share basic performance numbers (views, reach, engagement) on request.\n\n' +
      '6. USAGE\nThe Creator keeps ownership of the content. The Brand may repost it on its own channels for the length of the campaign.\n\n' +
      tail(7);
  }
  if (templateId === 'event') {
    return head('EVENT APPEARANCE AGREEMENT') +
      '1. THE EVENT\nThe Creator will attend or host the Brand\'s event on [event date and location].\n\n' +
      '2. CONTENT\nIn connection with the event, the Creator will deliver: ' + deliverables + ', published before, during, or after the event as agreed.\n\n' +
      '3. TIMELINE\nContent will be delivered within ' + timeline + ' of the event.\n\n' +
      '4. COMPENSATION\nThe Brand will pay the Creator ' + amount + ', payable within 15 days after the event.\n\n' +
      '5. EXPENSES\nThe Brand will cover reasonable, pre-approved travel and lodging costs.\n\n' +
      '6. CANCELLATION\nIf either party cancels with less than 7 days\' notice, the other may keep any amounts already paid or incurred.\n\n' +
      tail(7);
  }
  if (templateId === 'retainer') {
    return head('MONTHLY RETAINER AGREEMENT') +
      '1. SCOPE OF WORK\nEach month, the Creator will deliver: ' + deliverables + '.\n\n' +
      '2. TERM\nThis Agreement starts on the Effective Date and runs for three months, renewing monthly after that until either party ends it.\n\n' +
      '3. COMPENSATION\nThe Brand will pay the Creator ' + amount + ' per month, due at the start of each month.\n\n' +
      '4. APPROVAL\nThe Brand may request one round of reasonable revisions on each piece.\n\n' +
      '5. USAGE\nThe Creator keeps ownership of the content. The Brand may repost it on its own channels during the term.\n\n' +
      '6. NOTICE\nEither party may end the retainer with 30 days\' written notice.\n\n' +
      tail(7);
  }
  return head('SINGLE POST AGREEMENT') +
    '1. SCOPE OF WORK\nThe Creator will produce and publish: ' + deliverables + '.\n\n' +
    '2. TIMELINE\nThe content will be delivered within ' + timeline + ' of the Effective Date.\n\n' +
    '3. COMPENSATION\nThe Brand will pay the Creator a flat fee of ' + amount + ', payable within 15 days of final content approval.\n\n' +
    '4. APPROVAL\nThe Brand may request one round of reasonable revisions before the content is considered final.\n\n' +
    '5. USAGE\nThe Creator keeps ownership of the content. The Brand may repost it on its own channels.\n\n' +
    tail(6);
}

// --- Open to work ---
// A creator's own switch for "I'm taking new brand deals right now".
function tbaIsOpenToWork(username) {
  if (!username) return false;
  var seed = TBA_SEED_USERS.find(function (u) { return u.username.toLowerCase() === username.toLowerCase(); });
  if (seed && !tbaFindLocalAccount(username)) return !!seed.openToWork;
  return localStorage.getItem(tbaAccountKey('tba_open_to_work', username)) === '1';
}

function tbaSetOpenToWork(open) {
  if (!tbaIsMyRole('influencer')) return false;
  if (open) localStorage.setItem(tbaAccountKey('tba_open_to_work'), '1');
  else localStorage.removeItem(tbaAccountKey('tba_open_to_work'));
  return true;
}

// --- Invite links ---
// A link that carries the inviter's username into sign-up; when
// someone creates an account through it, it's recorded so the inviter
// can see who joined.
function tbaGetInviteLink() {
  return tbaBuildShareUrl('signup.html', '?invite=' + encodeURIComponent(localStorage.getItem('tba_username') || ''));
}

function tbaGetReferrals() {
  try {
    var list = JSON.parse(localStorage.getItem('tba_referrals') || '[]');
    return Array.isArray(list) ? list : [];
  } catch (e) {
    return [];
  }
}

// Only counts when the inviter is a real account, isn't the new
// account itself, and the new account hasn't already been credited.
function tbaRecordReferral(inviterRaw, invitee) {
  var needle = (inviterRaw || '').trim().toLowerCase();
  if (!needle || !invitee || needle === invitee.toLowerCase()) return false;
  var inviter = tbaGetUserByUsername(needle);
  if (!inviter) return false;
  var list = tbaGetReferrals();
  if (list.some(function (r) { return r.invitee.toLowerCase() === invitee.toLowerCase(); })) return false;
  list.push({ inviter: inviter.username, invitee: invitee, at: new Date().toISOString() });
  localStorage.setItem('tba_referrals', JSON.stringify(list));
  return true;
}

function tbaGetMyReferrals() {
  var me = localStorage.getItem('tba_username');
  return tbaGetReferrals().filter(function (r) { return r.inviter === me; });
}

// --- Installable app ---
// Offline support lives in sw.js; this registers it and holds on to
// the browser's "install" prompt so Settings can offer a button.
if ('serviceWorker' in navigator && location.protocol.indexOf('http') === 0) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('sw.js').catch(function () { /* unsupported here — the site works without it */ });
  });
}

window.addEventListener('beforeinstallprompt', function (e) {
  e.preventDefault();
  window.__tbaInstallPrompt = e;
  document.dispatchEvent(new Event('tba-install-available'));
});

function tbaIsInstalledApp() {
  return (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) || window.navigator.standalone === true;
}

// --- Subscription plan ---
// Every account is on the one plan, and it's free for now. The price
// lives here so the landing pages, sign-up form, and Settings all show
// the same number — change monthlyPrice (in dollars) when pricing is
// decided and every one of them follows.
var TBA_PLAN = { name: 'Standard', monthlyPrice: 0 };

function tbaFormatPlanPrice() {
  return TBA_PLAN.monthlyPrice > 0 ? '$' + TBA_PLAN.monthlyPrice.toLocaleString() + '/month' : 'Free';
}

function tbaSetMyPlan() {
  localStorage.setItem(tbaAccountKey('tba_plan'), JSON.stringify({ name: TBA_PLAN.name, monthlyPrice: TBA_PLAN.monthlyPrice, since: new Date().toISOString() }));
}

// Accounts created before plans existed are on the same plan, free.
function tbaGetMyPlan() {
  try {
    var stored = JSON.parse(localStorage.getItem(tbaAccountKey('tba_plan')) || 'null');
    if (stored) return stored;
  } catch (e) { /* fall through */ }
  return { name: TBA_PLAN.name, monthlyPrice: 0, since: null };
}

function tbaEnsureReportStyles() {
  if (document.getElementById('tba-report-styles')) return;
  var style = document.createElement('style');
  style.id = 'tba-report-styles';
  style.textContent =
    '.tba-modal-overlay { position: fixed; inset: 0; z-index: 10000; background: rgba(10,8,5,0.72); display: flex; align-items: center; justify-content: center; padding: 20px; font-family: "Inter", "Helvetica Neue", Arial, sans-serif; }' +
    '.tba-modal-card { background: #fffbf3; color: #2e2417; max-width: 440px; width: 100%; max-height: 88vh; overflow-y: auto; border-radius: 20px; padding: 28px 26px 22px; box-shadow: 0 30px 70px rgba(0,0,0,0.45); }' +
    '.tba-modal-card h2 { font-size: 19px; margin: 0 0 4px; font-family: Georgia, "Times New Roman", serif; }' +
    '.tba-modal-sub { font-size: 13px; color: #7a6d5a; margin: 0 0 16px; }' +
    '.tba-modal-card label { display: block; font-size: 12.5px; font-weight: 700; color: #7a6d5a; margin-bottom: 14px; }' +
    '.tba-modal-card select, .tba-modal-card textarea { display: block; width: 100%; margin-top: 6px; padding: 10px 12px; border: 1.5px solid #e4d9c3; border-radius: 10px; background: #fff; color: #2e2417; font-family: inherit; font-size: 14px; font-weight: 400; }' +
    '.tba-modal-card textarea { min-height: 80px; resize: vertical; }' +
    '.tba-modal-error { color: #b3402f; font-size: 12.5px; margin: 0 0 12px; }' +
    '.tba-modal-actions { display: flex; gap: 10px; justify-content: flex-end; }' +
    '.tba-modal-actions button { font-family: inherit; font-weight: 700; font-size: 13.5px; padding: 10px 20px; border-radius: 999px; cursor: pointer; border: 1.5px solid transparent; }' +
    '.tba-modal-primary { background: #c1652c; color: #fff; }' +
    '.tba-modal-secondary { background: transparent; border-color: #e4d9c3 !important; color: #7a6d5a; }';
  document.head.appendChild(style);
}

// The shared report dialog every "Report" button opens.
function tbaShowReportModal(opts) {
  tbaEnsureReportStyles();
  var overlay = document.createElement('div');
  overlay.className = 'tba-modal-overlay';
  overlay.innerHTML =
    '<div class="tba-modal-card" role="dialog" aria-modal="true" aria-labelledby="tba-report-title">' +
    '<h2 id="tba-report-title">Report ' + tbaEscapeHtmlForNotif(opts.noun || 'this') + '</h2>' +
    '<p class="tba-modal-sub">Tell us what\'s wrong. An admin will review it — the person you report won\'t be told it was you.</p>' +
    '<label>Reason<select id="tba-report-reason">' +
    Object.keys(TBA_REPORT_REASONS).map(function (k) { return '<option value="' + k + '">' + TBA_REPORT_REASONS[k] + '</option>'; }).join('') +
    '</select></label>' +
    '<label>Details (optional)<textarea id="tba-report-details" maxlength="500" placeholder="Anything that helps us understand."></textarea></label>' +
    '<p class="tba-modal-error" id="tba-report-error" hidden></p>' +
    '<div class="tba-modal-actions">' +
    '<button type="button" class="tba-modal-secondary" id="tba-report-cancel">Cancel</button>' +
    '<button type="button" class="tba-modal-primary" id="tba-report-submit">Send report</button>' +
    '</div></div>';
  document.body.appendChild(overlay);

  function close() { overlay.remove(); }
  overlay.querySelector('#tba-report-cancel').addEventListener('click', close);
  overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });
  overlay.querySelector('#tba-report-submit').addEventListener('click', function () {
    var result = tbaSubmitReport(
      opts.targetType, opts.targetId, opts.targetUser, opts.label,
      overlay.querySelector('#tba-report-reason').value,
      overlay.querySelector('#tba-report-details').value
    );
    if (!result.ok) {
      var err = overlay.querySelector('#tba-report-error');
      err.textContent = result.error === 'duplicate'
        ? 'You\'ve already reported this — an admin will take a look.'
        : 'Couldn\'t send that report.';
      err.hidden = false;
      return;
    }
    close();
    tbaShowToast('Report sent — thank you', 'success');
    if (opts.onDone) opts.onDone();
  });
}

// --- Onboarding ---
// A first-login welcome tour (once per account) and a profile
// checklist on the dashboard. Both are role-aware: a business and a
// creator have different first steps.
function tbaHasOnboarded() {
  return localStorage.getItem(tbaAccountKey('tba_onboarded')) === '1';
}

function tbaSetOnboarded(done) {
  if (done) localStorage.setItem(tbaAccountKey('tba_onboarded'), '1');
  else localStorage.removeItem(tbaAccountKey('tba_onboarded'));
}

// What's still missing from this account's profile, computed from what
// it actually has — nothing to keep in sync.
function tbaGetProfileChecklist() {
  var me = localStorage.getItem('tba_username');
  var isCreator = tbaIsMyRole('influencer');
  var items = [
    { label: 'Add a profile photo', done: !!tbaGetMyProfilePic(), href: 'profile.html' },
    { label: 'Write your bio', done: !!tbaGetMyBio(), href: 'profile.html' },
    { label: 'Set your niche', done: !!tbaGetMyNiche(), href: 'profile.html' },
    { label: 'Add a link', done: tbaGetMyLinks().length > 0, href: 'profile.html' }
  ];
  if (isCreator) {
    items.push({ label: 'Add your follower count', done: tbaGetMyFollowers() > 0, href: 'profile.html' });
    items.push({ label: 'Add a video', done: tbaGetMyVideos().length > 0, href: 'videos.html' });
    items.push({ label: 'Fill in your media kit', done: !tbaMediaKitIsEmpty(tbaGetMediaKit(me)), href: 'profile.html' });
  } else {
    items.push({ label: 'Fill in your company details', done: !tbaBrandProfileIsEmpty(tbaGetBrandProfile(me)), href: 'profile.html' });
    items.push({
      label: 'Post an outreach opportunity',
      done: tbaGetOutreachPosts().some(function (p) { return p.author === me; }),
      href: 'videos.html#outreach'
    });
  }
  return items;
}

function tbaIsChecklistDismissed() {
  return localStorage.getItem(tbaAccountKey('tba_checklist_dismissed')) === '1';
}

function tbaDismissChecklist() {
  localStorage.setItem(tbaAccountKey('tba_checklist_dismissed'), '1');
}

function tbaGetOnboardingSteps() {
  if (tbaIsMyRole('influencer')) {
    return [
      { icon: '👋', title: 'Welcome to THE INTROductory', text: 'This is where brands find creators and make real deals. Here\'s a quick look around.' },
      { icon: '🎬', title: 'Show what you make', text: 'Add up to three videos in the Outreach tab — long-form or short-form — so businesses can see your content before they message you.', href: 'videos.html', cta: 'Add videos' },
      { icon: '💬', title: 'Negotiate in one place', text: 'Offers, counter-offers, and contracts all live in Messaging & Negotiation, right next to the conversation.', href: 'messaging.html', cta: 'Open messaging' },
      { icon: '✨', title: 'Finish your profile', text: 'Add your niche and follower count so you show up when brands filter The Network. Your dashboard has a checklist.' }
    ];
  }
  return [
    { icon: '👋', title: 'Welcome to THE INTROductory', text: 'This is where brands find creators and make real deals. Here\'s a quick look around.' },
    { icon: '🔍', title: 'Find the right creators', text: 'Filter The Network by niche, audience size, deals closed, and ratings, then send a request to message.', href: 'network.html', cta: 'Browse The Network' },
    { icon: '📣', title: 'Post an opportunity', text: 'In the Outreach tab, post a sponsorship call, an event, or a networking event. Creators tap "I\'m in" and you see who\'s interested.', href: 'videos.html#outreach', cta: 'Post outreach' },
    { icon: '📝', title: 'From offer to signed contract', text: 'Negotiate terms in Messaging, accept an offer, and draft a contract in a click. Finish your profile too — your dashboard has a checklist.', href: 'messaging.html', cta: 'Open messaging' }
  ];
}

function tbaEnsureOnboardingStyles() {
  tbaEnsureReportStyles();
  if (document.getElementById('tba-onboarding-styles')) return;
  var style = document.createElement('style');
  style.id = 'tba-onboarding-styles';
  style.textContent =
    '.tba-tour-card { text-align: center; }' +
    '.tba-tour-icon { font-size: 44px; margin-bottom: 8px; }' +
    '.tba-tour-dots { display: flex; gap: 6px; justify-content: center; margin: 16px 0 18px; }' +
    '.tba-tour-dot { width: 7px; height: 7px; border-radius: 50%; background: #e4d9c3; }' +
    '.tba-tour-dot.on { background: #c1652c; }' +
    '.tba-tour-card .tba-modal-actions { justify-content: space-between; }' +
    '.tba-tour-link { display: inline-block; margin-top: 4px; font-size: 13px; font-weight: 700; color: #c1652c; text-decoration: none; }';
  document.head.appendChild(style);
}

// Shows the welcome tour once per account — skipping or finishing both
// count. Waits for the terms gate first so two dialogs never stack.
function tbaMaybeShowOnboardingTour() {
  if (tbaHasOnboarded() || !tbaHasAcceptedTerms()) return;
  tbaEnsureOnboardingStyles();
  var steps = tbaGetOnboardingSteps();
  var index = 0;

  var overlay = document.createElement('div');
  overlay.className = 'tba-modal-overlay';
  document.body.appendChild(overlay);

  function finish() {
    tbaSetOnboarded(true);
    overlay.remove();
  }

  function render() {
    var step = steps[index];
    var last = index === steps.length - 1;
    overlay.innerHTML =
      '<div class="tba-modal-card tba-tour-card" role="dialog" aria-modal="true" aria-labelledby="tba-tour-title">' +
      '<div class="tba-tour-icon">' + step.icon + '</div>' +
      '<h2 id="tba-tour-title">' + tbaEscapeHtmlForNotif(step.title) + '</h2>' +
      '<p class="tba-modal-sub">' + tbaEscapeHtmlForNotif(step.text) + '</p>' +
      (step.href ? '<a class="tba-tour-link" id="tba-tour-cta" href="' + step.href + '">' + tbaEscapeHtmlForNotif(step.cta) + ' &rarr;</a>' : '') +
      '<div class="tba-tour-dots">' + steps.map(function (s, i) { return '<span class="tba-tour-dot' + (i === index ? ' on' : '') + '"></span>'; }).join('') + '</div>' +
      '<div class="tba-modal-actions">' +
      '<button type="button" class="tba-modal-secondary" id="tba-tour-skip">' + (last ? 'Back' : 'Skip tour') + '</button>' +
      '<button type="button" class="tba-modal-primary" id="tba-tour-next">' + (last ? 'Get started' : 'Next') + '</button>' +
      '</div></div>';

    overlay.querySelector('#tba-tour-skip').addEventListener('click', function () {
      if (last) { index--; render(); } else finish();
    });
    overlay.querySelector('#tba-tour-next').addEventListener('click', function () {
      if (last) finish(); else { index++; render(); }
    });
    var cta = overlay.querySelector('#tba-tour-cta');
    if (cta) cta.addEventListener('click', function () { tbaSetOnboarded(true); });
  }
  render();
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

// --- Light / dark / Champion mode ---
// One preference, shared across every page via localStorage. Unset
// means "use this page's own default look" (the designed light or
// dark theme) — picking a mode in the toggle overrides that default
// everywhere until changed again. "champion" is a third option, only
// ever reachable by a Champion account (100 saves in the hidden
// game) — picking it (or even setting it directly) on any other
// account is harmless, but the toggle itself only ever offers it once
// earned.

// The sign-in and admin sign-in screens aren't "inside" any specific
// account yet (and tba_username can still be pointing at whoever was
// last logged in, even after logging out) — so the Champion look
// never renders there regardless of what's stored, no matter whose.
function tbaIsPreAuthPage() {
  var path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  return ['', 'index.html', 'login.html', 'signup.html', 'influencers.html', 'businesses.html', 'admin-signin.html'].indexOf(path) !== -1;
}

// Scoped per account (tbaAccountKey), except on the pre-auth screens,
// which always use one fixed shared key — never tbaAccountKey's own
// fallback to tba_username, since that can still be pointing at
// whoever was last signed in (logging out doesn't clear it), and
// toggling light/dark there before signing in must never clobber that
// account's own saved preference.
function tbaThemeStorageKey() {
  return tbaIsPreAuthPage() ? 'tba_theme' : tbaAccountKey('tba_theme');
}

function tbaGetTheme() {
  var t = localStorage.getItem(tbaThemeStorageKey());
  return (t === 'light' || t === 'dark' || t === 'champion') ? t : null;
}

function tbaSetTheme(theme) {
  if (theme === 'light' || theme === 'dark' || theme === 'champion') {
    localStorage.setItem(tbaThemeStorageKey(), theme);
  } else {
    localStorage.removeItem(tbaThemeStorageKey());
  }
}

// Applied immediately as this script loads (it's a blocking <script>
// in every page's <head>), so the right theme is in place before the
// page paints — no flash of the wrong colors. Champion is re-verified
// here too, not just trusted from storage — it only ever renders for
// the account that actually earned it, on a page where that account
// is actually signed in.
// The one gate both the toggle and tbaApplyTheme check before ever
// treating 'champion' as real, so they can't disagree with each other.
function tbaCanUseChampionTheme() {
  return tbaIsChampion() && !tbaIsPreAuthPage();
}

function tbaApplyTheme() {
  var t = tbaGetTheme();
  if (t === 'champion' && !tbaCanUseChampionTheme()) t = null;
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

// Champion theme's icon — only ever shown to an account that's
// actually unlocked it.
function tbaIconCrown() {
  return '<svg viewBox="0 0 20 20" width="15" height="15" fill="#f3c348" stroke="#a9720f" stroke-width="0.6" stroke-linejoin="round" aria-hidden="true">' +
    '<path d="M2.5 15.5h15l.9-8.2-4.4 3.3L10 4l-4 6.6-4.4-3.3.9 8.2z"/>' +
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
    if (current === 'champion') {
      btn.innerHTML = tbaIconCrown();
    } else {
      btn.innerHTML = current === 'dark' ? tbaIconSun() : tbaIconMoon();
    }
    var label = current === 'champion' ? 'Switch to light mode'
      : current === 'dark' ? 'Switch to light mode'
      : (tbaCanUseChampionTheme() ? 'Switch to Champion theme' : 'Switch to dark mode');
    btn.setAttribute('aria-label', label);
    btn.title = label;
  }

  // Light -> dark -> (Champion theme, only if unlocked and signed in)
  // -> back to light. Everyone else just cycles light/dark same as always.
  btn.addEventListener('click', function () {
    var current = effectiveTheme();
    var next;
    if (current === 'light') next = 'dark';
    else if (current === 'dark') next = tbaCanUseChampionTheme() ? 'champion' : 'light';
    else next = 'light';
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
    return 'Countered with $' + m.amount.toLocaleString() + ' for ' + tbaOfferDeliverablesLabel(m);
  }
  if (m.type === 'offer-decision') {
    return m.decision === 'accepted' ? 'Accepted your offer' : 'Declined your offer';
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

  // Someone tapped "I'm in" on one of your outreach posts.
  var myPostTitles = {};
  tbaGetOutreachPosts().forEach(function (p) {
    if (p.author === myUsername) myPostTitles[p.id] = p.title;
  });
  tbaGetOutreachInterestLog().forEach(function (e) {
    if (!myPostTitles[e.postId] || tbaIsHiddenUser(e.user)) return;
    var who = tbaGetUserByUsername(e.user);
    notifications.push({
      id: 'interest-' + e.postId + '-' + e.user + '-' + e.at,
      icon: '🙋',
      title: 'Outreach',
      text: (who ? who.name : '@' + e.user) + ' is in for "' + myPostTitles[e.postId] + '"',
      date: e.at,
      link: 'videos.html#outreach'
    });
  });

  // Someone joined through your invite link.
  tbaGetMyReferrals().forEach(function (r) {
    notifications.push({
      id: 'invite-' + r.invitee, icon: '🎉', title: 'Invite',
      text: '@' + r.invitee + ' joined using your invite link',
      date: r.at, link: 'settings.html'
    });
  });

  // Someone left you a review.
  tbaGetReviewsFor(myUsername).forEach(function (r) {
    if (tbaIsHiddenUser(r.fromUsername)) return;
    var reviewer = tbaGetUserByUsername(r.fromUsername);
    notifications.push({
      id: 'review-' + r.id,
      icon: '⭐',
      title: 'New review',
      text: (reviewer ? reviewer.name : '@' + r.fromUsername) + ' left you ' + r.rating + (r.rating === 1 ? ' star' : ' stars'),
      date: r.createdAt,
      link: 'profile.html'
    });
  });

  // Applications to your briefs, and decisions on your applications.
  var myBriefTitles = {};
  tbaGetBriefs().forEach(function (b) { if (b.author === myUsername) myBriefTitles[b.id] = b.title; });
  var allBriefs = tbaGetBriefs();
  tbaGetAllBriefApplications().forEach(function (a) {
    if (myBriefTitles[a.briefId] && !tbaIsHiddenUser(a.applicant)) {
      var who = tbaGetUserByUsername(a.applicant);
      notifications.push({
        id: 'briefapp-' + a.id, icon: '📝', title: 'Campaign brief',
        text: (who ? who.name : '@' + a.applicant) + ' applied to "' + myBriefTitles[a.briefId] + '"',
        date: a.createdAt, link: 'videos.html#briefs'
      });
    }
    if (a.applicant === myUsername && a.status !== 'pending') {
      var brief = allBriefs.find(function (b) { return b.id === a.briefId; });
      if (brief) {
        notifications.push({
          id: 'briefdecision-' + a.id + '-' + a.status, icon: a.status === 'accepted' ? '🎉' : '✖️', title: 'Campaign brief',
          text: 'Your application to "' + brief.title + '" was ' + a.status,
          date: a.decidedAt || a.createdAt, link: 'videos.html#briefs'
        });
      }
    }
  });

  // New accounts matching a search you saved.
  tbaGetSavedSearches().forEach(function (ss) {
    var fresh = tbaGetSavedSearchNewMatches(ss);
    if (fresh.length === 0) return;
    var newest = fresh.map(function (u) { return u.joinedAt || ss.createdAt; }).sort().slice(-1)[0];
    notifications.push({
      id: 'savedsearch-' + ss.id + '-' + fresh.map(function (u) { return u.username; }).sort().join('.'),
      icon: '🔖', title: 'Saved search',
      text: fresh.length + ' new ' + (fresh.length === 1 ? 'account matches' : 'accounts match') + ' "' + ss.name + '"',
      date: newest, link: 'network.html?search=' + encodeURIComponent(ss.id)
    });
  });

  var prefs = tbaGetNotifPrefs();
  notifications = notifications.filter(function (n) { return prefs[tbaNotificationCategory(n.id)] !== false; });

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

  tbaGetSupportRequests().filter(function (r) { return !r.handled; }).forEach(function (r) {
    notifications.push({
      id: 'adminsupport-' + r.id, icon: '💬', title: 'Support request',
      text: TBA_SUPPORT_TOPICS[r.topic] + ' — ' + (r.from ? '@' + r.from : r.email),
      date: r.createdAt, link: 'admin-reports.html#support'
    });
  });

  tbaGetOpenReports().forEach(function (r) {
    notifications.push({
      id: 'adminreport-' + r.id,
      icon: '🚩',
      title: 'Report',
      text: TBA_REPORT_REASONS[r.reason] + ' — ' + r.label,
      date: r.createdAt,
      link: 'admin-reports.html'
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

// --- Champion status ---
// Unlocked by hitting 100 saves in the hidden Penalty Saves game on
// the profile page. A real, permanent account flag (scoped the same
// as everything else), not a one-time toast — it's checked wherever
// the verified badge, avatars, and chat messages render, and gates
// the Champion theme option.
function tbaIsChampion(forUsername) {
  return localStorage.getItem(tbaAccountKey('tba_champion', forUsername)) === '1';
}

function tbaUnlockChampion() {
  if (tbaIsChampion()) return false;
  localStorage.setItem(tbaAccountKey('tba_champion'), '1');
  return true;
}

// A class to add onto an avatar element (img or initials div, any
// page) that gives champions a glowing gold ring — returns '' for
// everyone else, so callers can always safely append it to a class
// attribute: class="profile-avatar-lg' + tbaChampionAvatarClass(u.username) + '"
function tbaChampionAvatarClass(forUsername) {
  return tbaIsChampion(forUsername) ? ' tba-champion-avatar' : '';
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
    'nav.main-nav a', '.admin-header nav a', 'a.brand', 'a.diagram-node', 'a.admin-tab', 'a.admin-table-link',
    'a.l-btn', '.l-nav a', 'a.l-brand'
  ];
  var bigger = [
    '.btn-submit', '.notfound-btn', 'a.notfound-btn', 'a.btn-primary',
    '.l-btn.large', '.l-btn-block', 'a.l-choose-card',
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

// --- Champion cosmetics (shared CSS) ---
// One global stylesheet for every Champion-only visual touch — the
// royal verified-badge glow, the gold avatar ring, the VIP chat
// flair, the Champion theme's accent overrides, and the confetti
// burst — injected once, the same pattern as the toast/button-press
// styles above.
function tbaEnsureChampionStyles() {
  if (document.getElementById('tba-champion-styles')) return;
  var style = document.createElement('style');
  style.id = 'tba-champion-styles';
  style.textContent =
    '.verified-badge-royal { filter: drop-shadow(0 0 3px rgba(243,195,72,0.85)); }' +
    '.tba-champion-avatar { box-shadow: 0 0 0 3px #f3c348, 0 0 16px 2px rgba(243,195,72,0.6) !important; border-radius: 50% !important; }' +
    '.tba-champion-flair { display: inline-flex; align-items: center; justify-content: center; width: 14px; height: 14px; margin-left: 4px; vertical-align: -2px; filter: drop-shadow(0 0 2px rgba(243,195,72,0.8)); }' +
    '.tba-confetti-piece { position: fixed; top: -12px; z-index: 10050; pointer-events: none; border-radius: 2px; will-change: transform, opacity; animation: tbaConfettiFall linear forwards; }' +
    '@keyframes tbaConfettiFall { 0% { transform: translateY(0) rotate(0deg); opacity: 1; } 100% { transform: translateY(105vh) rotate(540deg); opacity: 0.2; } }' +
    // Royal red + gold, deliberately not just a faint accent wash —
    // a real third background, not a tint on top of light/dark. Only
    // ever-safe, always-present chrome gets touched directly (body,
    // header/nav, headings, links, primary buttons); content card
    // backgrounds are untouched (they keep whatever paper/panel color
    // light or dark already gave them), which is what keeps this
    // legible everywhere instead of just looking broken.
    'html[data-theme="champion"] body { background-color: #5c0a14 !important; background-image: radial-gradient(circle at 14% 8%, rgba(255,215,120,0.2), transparent 42%), radial-gradient(circle at 88% 86%, rgba(255,215,120,0.16), transparent 46%), repeating-linear-gradient(135deg, rgba(255,215,120,0.05) 0px, rgba(255,215,120,0.05) 2px, transparent 2px, transparent 26px), linear-gradient(160deg, #7a0f1d 0%, #8f1626 42%, #4a0810 100%) !important; background-attachment: fixed !important; }' +
    'html[data-theme="champion"] body::after { content: ""; position: fixed; inset: 0; pointer-events: none; z-index: 9998; border: 4px solid #f3c348; outline: 1px solid rgba(243,195,72,0.55); outline-offset: -9px; box-shadow: inset 0 0 160px rgba(243,195,72,0.18); }' +
    'html[data-theme="champion"] a { color: #ffd76a; }' +
    'html[data-theme="champion"] h1, html[data-theme="champion"] h2, html[data-theme="champion"] h3 { color: #a9720f !important; }' +
    'html[data-theme="champion"] .site-header, html[data-theme="champion"] .admin-header { background: linear-gradient(135deg, rgba(243,195,72,0.32), rgba(90,10,18,0.35)) !important; border-bottom: 1px solid rgba(243,195,72,0.55) !important; box-shadow: 0 2px 18px rgba(0,0,0,0.25); }' +
    'html[data-theme="champion"] nav.main-nav a, html[data-theme="champion"] .admin-header nav a { color: #f3e0ad; }' +
    'html[data-theme="champion"] nav.main-nav a.active, html[data-theme="champion"] .admin-header nav a.active { color: #fff3c4 !important; text-shadow: 0 0 10px rgba(243,195,72,0.7); }' +
    'html[data-theme="champion"] .brand-tagline { color: #f3e0ad; }' +
    'html[data-theme="champion"] .btn-submit, html[data-theme="champion"] .btn-primary, html[data-theme="champion"] .admin-btn, html[data-theme="champion"] .btn-new-contract, html[data-theme="champion"] .btn-sign:not(:disabled) { background: linear-gradient(135deg, #f6d365 0%, #caa23e 60%, #8a6a1c 100%) !important; color: #2a1d02 !important; border-color: #caa23e !important; box-shadow: 0 4px 14px rgba(0,0,0,0.3); }' +
    'html[data-theme="champion"] footer { color: #f3e0ad !important; }' +
    'html[data-theme="champion"] footer a { color: #ffd76a !important; }';
  document.head.appendChild(style);
}
tbaEnsureChampionStyles();

// A brief, lightweight confetti burst — plain DOM pieces, no canvas
// or library — used to celebrate a Champion account's real wins
// (closing a deal, getting a contract fully signed) a little harder
// than the plain toast everyone else gets.
function tbaFireConfetti() {
  tbaEnsureChampionStyles();
  var colors = ['#f3c348', '#ffe08a', '#caa23e', '#fff3c4', '#e8b84b'];
  for (var i = 0; i < 60; i++) {
    (function (i) {
      var piece = document.createElement('div');
      piece.className = 'tba-confetti-piece';
      var size = 6 + Math.random() * 6;
      piece.style.left = Math.random() * 100 + 'vw';
      piece.style.width = size + 'px';
      piece.style.height = (size * 0.4) + 'px';
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      piece.style.animationDuration = (2.2 + Math.random() * 1.4) + 's';
      piece.style.animationDelay = (Math.random() * 0.4) + 's';
      document.body.appendChild(piece);
      setTimeout(function () { piece.remove(); }, 4200);
    })(i);
  }
}

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
