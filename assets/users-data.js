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
  var users = TBA_SEED_USERS.slice();
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
      isYou: true
    };
  }

  var seedMatch = TBA_SEED_USERS.find(function (u) { return u.username.toLowerCase() === lower; });
  return seedMatch || null;
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
