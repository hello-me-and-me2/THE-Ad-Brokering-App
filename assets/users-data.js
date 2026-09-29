// Shared mock user directory for THE BROKER APP demo.
// In a real app this would come from a database — here it's a fixed
// seed list plus whoever has signed up in this browser.

var TBA_SEED_USERS = [
  { username: "skylinecoffee", name: "Skyline Coffee Co.", role: "business", tagline: "Small-batch coffee brand, Pacific Northwest." },
  { username: "riversidegear", name: "Riverside Outdoor Gear", role: "business", tagline: "Outdoor apparel and camping gear." },
  { username: "pearandco", name: "Pear & Co. Skincare", role: "business", tagline: "Clean skincare, cruelty-free." },
  { username: "thecraftedtable", name: "The Crafted Table", role: "business", tagline: "Artisan home goods & tableware." },
  { username: "brightlinestudio", name: "Brightline Studio", role: "business", tagline: "Independent design & branding studio." },
  { username: "marencole", name: "Maren Cole", role: "influencer", tagline: "Lifestyle & coffee content · 210K followers." },
  { username: "jordanblake", name: "Jordan Blake", role: "influencer", tagline: "Outdoor & adventure creator · 85K followers." },
  { username: "ninareyes", name: "Nina Reyes", role: "influencer", tagline: "Beauty & skincare reviews · 340K followers." },
  { username: "leoortiz", name: "Leo Ortiz", role: "influencer", tagline: "Fitness & wellness · 122K followers." },
  { username: "avaqian", name: "Ava Qian", role: "influencer", tagline: "Travel & food content · 96K followers." }
];

function tbaUsernameTaken(username) {
  var lower = username.toLowerCase();
  return TBA_SEED_USERS.some(function (u) { return u.username.toLowerCase() === lower; });
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
      isYou: true
    });
  }
  return users;
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
