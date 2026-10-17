// Shared mock user directory for THE INTROductory demo.
// In a real app this would come from a database — here it's a fixed
// seed list plus whoever has signed up in this browser.

var TBA_SEED_USERS = [
  {
    username: "skylinecoffee", name: "Skyline Coffee Co.", role: "business",
    tagline: "Small-batch coffee brand, Pacific Northwest.",
    bio: "Small-batch coffee roaster based in the Pacific Northwest, partnering with creators who love a good cup and an honest story.",
    links: [
      { label: "Website", url: "https://skylinecoffee.com" },
      { label: "Instagram", url: "https://instagram.com/skylinecoffeeco" }
    ]
  },
  {
    username: "riversidegear", name: "Riverside Outdoor Gear", role: "business",
    tagline: "Outdoor apparel and camping gear.",
    bio: "Outdoor apparel and camping gear built for real trips, not just photos. We work with adventure creators who actually use our stuff.",
    links: [
      { label: "Website", url: "https://riversidegear.com" },
      { label: "Instagram", url: "https://instagram.com/riversidegear" }
    ]
  },
  {
    username: "pearandco", name: "Pear & Co. Skincare", role: "business",
    tagline: "Clean skincare, cruelty-free.",
    bio: "Clean, cruelty-free skincare made in small batches. We love collaborating with creators who care about what goes on their skin.",
    links: [
      { label: "Website", url: "https://pearandco.com" },
      { label: "TikTok", url: "https://tiktok.com/@pearandco" }
    ]
  },
  {
    username: "thecraftedtable", name: "The Crafted Table", role: "business",
    tagline: "Artisan home goods & tableware.",
    bio: "Artisan home goods and tableware, handmade by independent makers. Looking for creators who love slow living and good design.",
    links: [
      { label: "Website", url: "https://thecraftedtable.com" },
      { label: "Instagram", url: "https://instagram.com/thecraftedtable" }
    ]
  },
  {
    username: "brightlinestudio", name: "Brightline Studio", role: "business",
    tagline: "Independent design & branding studio.",
    bio: "Independent design and branding studio helping small businesses look as good as they are. Open to creator collabs on case studies.",
    links: [
      { label: "Website", url: "https://brightlinestudio.co" }
    ]
  },
  {
    username: "marencole", name: "Maren Cole", role: "influencer",
    tagline: "Lifestyle & coffee content · 210K followers.",
    bio: "Lifestyle and coffee content creator sharing slow mornings and honest reviews with 210K people who feel the same way.",
    links: [
      { label: "Instagram", url: "https://instagram.com/marencole" },
      { label: "TikTok", url: "https://tiktok.com/@marencole" },
      { label: "YouTube", url: "https://youtube.com/@marencole" }
    ]
  },
  {
    username: "jordanblake", name: "Jordan Blake", role: "influencer",
    tagline: "Outdoor & adventure creator · 85K followers.",
    bio: "Outdoor and adventure creator documenting real trips, real gear tests, and the occasional disaster. 85K people come along for the ride.",
    links: [
      { label: "Instagram", url: "https://instagram.com/jordanblake" },
      { label: "YouTube", url: "https://youtube.com/@jordanblake" }
    ]
  },
  {
    username: "ninareyes", name: "Nina Reyes", role: "influencer",
    tagline: "Beauty & skincare reviews · 340K followers.",
    bio: "Beauty and skincare reviews with zero filter — if it doesn't work, I'll say so. 340K followers trust me to tell them the truth.",
    links: [
      { label: "Instagram", url: "https://instagram.com/ninareyes" },
      { label: "TikTok", url: "https://tiktok.com/@ninareyes" }
    ]
  },
  {
    username: "leoortiz", name: "Leo Ortiz", role: "influencer",
    tagline: "Fitness & wellness · 122K followers.",
    bio: "Fitness and wellness creator helping 122K people build habits that actually stick. Big on honest brand partnerships, not hype.",
    links: [
      { label: "Instagram", url: "https://instagram.com/leoortiz" },
      { label: "YouTube", url: "https://youtube.com/@leoortiz" }
    ]
  },
  {
    username: "avaqian", name: "Ava Qian", role: "influencer",
    tagline: "Travel & food content · 96K followers.",
    bio: "Travel and food creator finding the best small-town spots and local makers worth knowing about. 96K people exploring along with me.",
    links: [
      { label: "Instagram", url: "https://instagram.com/avaqian" },
      { label: "TikTok", url: "https://tiktok.com/@avaqian" }
    ]
  }
];

var TBA_MAX_LINKS = 7;

function tbaUsernameTaken(username) {
  var lower = username.toLowerCase();
  return TBA_SEED_USERS.some(function (u) { return u.username.toLowerCase() === lower; });
}

function tbaGetMyBio() {
  return localStorage.getItem('tba_bio') || '';
}

function tbaGetMyLinks() {
  try {
    return JSON.parse(localStorage.getItem('tba_links') || '[]').slice(0, TBA_MAX_LINKS);
  } catch (e) {
    return [];
  }
}

function tbaSaveMyProfile(bio, links) {
  localStorage.setItem('tba_bio', bio || '');
  localStorage.setItem('tba_links', JSON.stringify((links || []).slice(0, TBA_MAX_LINKS)));
}

function tbaGetMyProfilePic() {
  return localStorage.getItem('tba_profile_pic') || '';
}

function tbaSaveMyProfilePic(dataUrl) {
  if (dataUrl) {
    localStorage.setItem('tba_profile_pic', dataUrl);
  } else {
    localStorage.removeItem('tba_profile_pic');
  }
}

function tbaGetAllUsers() {
  var users = TBA_SEED_USERS.map(function (u) {
    var copy = {};
    for (var k in u) copy[k] = u[k];
    copy.verified = tbaIsVerified(u.username);
    return copy;
  });
  var myUsername = localStorage.getItem('tba_username');
  if (myUsername) {
    users.unshift({
      username: myUsername,
      name: '@' + myUsername,
      role: localStorage.getItem('tba_role') || 'business',
      tagline: 'This is you.',
      bio: tbaGetMyBio(),
      links: tbaGetMyLinks(),
      avatar: tbaGetMyProfilePic(),
      verified: tbaIsVerified(myUsername),
      isYou: true
    });
  }
  return users;
}

// Looks up a single user by username — your own account (editable,
// backed by localStorage) or a seed account (read-only demo data).
function tbaGetUserByUsername(username) {
  if (!username) return null;
  var lower = username.toLowerCase();
  var myUsername = localStorage.getItem('tba_username');

  if (myUsername && myUsername.toLowerCase() === lower) {
    return {
      username: myUsername,
      name: '@' + myUsername,
      role: localStorage.getItem('tba_role') || 'business',
      tagline: 'This is you.',
      bio: tbaGetMyBio(),
      links: tbaGetMyLinks(),
      avatar: tbaGetMyProfilePic(),
      verified: tbaIsVerified(myUsername),
      isYou: true
    };
  }

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
  var myUsername = localStorage.getItem('tba_username');

  if (myUsername && myUsername.toLowerCase() === lower) {
    return localStorage.getItem('tba_verification_status') === 'approved';
  }

  var overrides = tbaGetVerificationOverrides();
  if (overrides[lower]) return overrides[lower] === 'approved';

  return TBA_VERIFIED_SEED_USERNAMES.some(function (u) { return u.toLowerCase() === lower; });
}

function tbaGetMyVerificationStatus() {
  return localStorage.getItem('tba_verification_status') || 'none';
}

function tbaGetMyVerificationReason() {
  return localStorage.getItem('tba_verification_reason') || '';
}

function tbaSubmitVerificationApplication(reason) {
  localStorage.setItem('tba_verification_status', 'pending');
  localStorage.setItem('tba_verification_reason', reason || '');
  localStorage.setItem('tba_verification_submitted_at', new Date().toISOString());
}

// Admin: every verification application currently awaiting a
// decision — the seed demo requests (unless this browser's admin
// already decided them) plus "your" own request, if you've applied
// and are still pending.
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
  if (myUsername && tbaGetMyVerificationStatus() === 'pending') {
    requests.unshift({
      username: myUsername,
      name: '@' + myUsername,
      role: localStorage.getItem('tba_role') || 'business',
      avatar: tbaGetMyProfilePic(),
      reason: tbaGetMyVerificationReason(),
      submittedAt: localStorage.getItem('tba_verification_submitted_at') || new Date().toISOString(),
      isYou: true
    });
  }

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
// a seed demo account).
function tbaDecideVerification(username, decision) {
  var myUsername = localStorage.getItem('tba_username');
  var user = tbaGetUserByUsername(username);

  if (myUsername && myUsername.toLowerCase() === username.toLowerCase()) {
    localStorage.setItem('tba_verification_status', decision);
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
    return JSON.parse(localStorage.getItem('tba_message_requests') || '[]');
  } catch (e) {
    return [];
  }
}

function tbaAddSentRequest(username) {
  var sent = tbaGetSentRequests();
  if (sent.indexOf(username) === -1) {
    sent.push(username);
    localStorage.setItem('tba_message_requests', JSON.stringify(sent));
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
  var key = 'tba_thread_' + username.toLowerCase();
  try {
    var stored = JSON.parse(localStorage.getItem(key));
    if (stored) return stored;
  } catch (e) { /* fall through to seed */ }
  var seed = tbaGetMyThread(username);
  return seed ? seed.messages.slice() : [];
}

function tbaSaveMyThreadMessages(username, messages) {
  localStorage.setItem('tba_thread_' + username.toLowerCase(), JSON.stringify(messages));
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
  var stored = localStorage.getItem('tba_progress_' + username.toLowerCase());
  if (stored !== null) return parseInt(stored, 10);
  var seed = tbaGetMyThread(username);
  return seed ? seed.deal.progress : 0;
}

function tbaSaveMyThreadProgress(username, progress) {
  localStorage.setItem('tba_progress_' + username.toLowerCase(), String(progress));
}

function tbaAppendMyThreadMessage(username, message) {
  var messages = tbaGetMyThreadMessages(username);
  messages.push(message);
  tbaSaveMyThreadMessages(username, messages);
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

function tbaGetContracts() {
  try {
    return JSON.parse(localStorage.getItem('tba_contracts') || '[]');
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
  return tbaGetContracts().filter(function (c) { return c.username === username; });
}

function tbaNewContractId() {
  return 'c_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function tbaFormatDateLong(iso) {
  return new Date(iso).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
}

// A lightweight stand-in for an AI drafting assistant: it pulls the
// real terms already on the table for this thread (current offer,
// brand, timeline) into a standard sponsorship-contract shape. There's
// no backend here to actually call a model from, so this is an
// honest "smart template," not a live AI call.
function tbaGenerateContractDraft(myUsername, counterpartUsername) {
  var thread = tbaGetMyThread(counterpartUsername);
  var counterpart = tbaGetUserByUsername(counterpartUsername);
  var offer = tbaGetCurrentOffer(counterpartUsername);
  var today = tbaFormatDateLong(new Date().toISOString());
  var brand = thread ? thread.deal.brand : (counterpart ? counterpart.name : counterpartUsername);
  var timeline = thread ? thread.deal.timeline : '4 weeks';
  var videosLabel = offer.videos + ' video' + (offer.videos === 1 ? '' : 's');

  return (
    'SPONSORSHIP AGREEMENT\n\n' +
    'This Sponsorship Agreement ("Agreement") is entered into on ' + today + ' by and between:\n\n' +
    'Creator: @' + myUsername + '\n' +
    'Brand: ' + brand + ' (@' + counterpartUsername + ')\n\n' +
    '1. SCOPE OF WORK\n' +
    'The Creator agrees to produce and deliver ' + videosLabel + ' promoting the Brand, in line with the ' +
    'creative direction discussed between the parties.\n\n' +
    '2. COMPENSATION\n' +
    'The Brand agrees to pay the Creator a total of $' + offer.amount.toLocaleString() + ' USD for the deliverables ' +
    'described in this Agreement, payable within 15 days of final content approval.\n\n' +
    '3. TIMELINE\n' +
    'All deliverables shall be completed and submitted for review within ' + timeline + ' of the Effective Date.\n\n' +
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

function tbaBlankContractTemplate(myUsername, counterpartUsername) {
  var thread = tbaGetMyThread(counterpartUsername);
  var brand = thread ? thread.deal.brand : counterpartUsername;
  var today = tbaFormatDateLong(new Date().toISOString());

  return (
    'SPONSORSHIP AGREEMENT\n\n' +
    'This Agreement is entered into on ' + today + ' by and between:\n\n' +
    'Creator: @' + myUsername + '\n' +
    'Brand: ' + brand + ' (@' + counterpartUsername + ')\n\n' +
    '1. SCOPE OF WORK\n[Describe the deliverables here]\n\n' +
    '2. COMPENSATION\n[Describe payment terms here]\n\n' +
    '3. TIMELINE\n[Describe the delivery timeline here]\n\n' +
    'SIGNATURES\n' +
    'This Agreement is not binding until signed by both parties below.'
  );
}

// A small, plausible edit to simulate the other side revising a
// contract you sent them — nudges the compensation line if present,
// and adds a short note, rather than rewriting the whole document.
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

function tbaGetMyNetwork() {
  try {
    return JSON.parse(localStorage.getItem('tba_network') || '[]');
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
    localStorage.setItem('tba_network', JSON.stringify(network));
  }
}

function tbaRemoveFromMyNetwork(username) {
  var lower = username.toLowerCase();
  var network = tbaGetMyNetwork().filter(function (u) { return u.toLowerCase() !== lower; });
  localStorage.setItem('tba_network', JSON.stringify(network));
}

function tbaGetNetworkRequestDecisions() {
  try {
    return JSON.parse(localStorage.getItem('tba_network_request_decisions') || '{}');
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
  localStorage.setItem('tba_network_request_decisions', JSON.stringify(decisions));
  if (decision === 'accepted') tbaAddToMyNetwork(username);
}

// Manual, non-deal network requests you send from the directory.
// There's no backend to actually deliver these to another real
// account and get a reply, so — while the app is still in testing —
// sending one adds them to your network immediately instead of
// leaving it stuck pending forever.
function tbaGetSentNetworkRequests() {
  try {
    return JSON.parse(localStorage.getItem('tba_sent_network_requests') || '[]');
  } catch (e) {
    return [];
  }
}

function tbaSendNetworkRequest(username) {
  var sent = tbaGetSentNetworkRequests();
  if (sent.indexOf(username) === -1) {
    sent.push(username);
    localStorage.setItem('tba_sent_network_requests', JSON.stringify(sent));
  }
  tbaAddToMyNetwork(username);
}

// The network shown on any account's profile page — seed demo
// connections, plus "you" if you've accepted a connection with them.
function tbaGetNetworkFor(username) {
  if (!username) return [];
  var lower = username.toLowerCase();
  var myUsername = localStorage.getItem('tba_username');

  if (myUsername && myUsername.toLowerCase() === lower) {
    return tbaGetMyNetwork()
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
