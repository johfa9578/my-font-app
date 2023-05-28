// Replace this with your api key from the "API Key Manager" at the tiny.cloud account page
exports.apiKey = 'nf1nkug1cgls1c0uvervcbidtgvxto5wulhzflc94087w508';

// Replace the contents of the private.key file with the one from the "JWT Key Manager" at the tiny.cloud account page
exports.privateKeyFile = '/private.key';

// This is the fake database that the login authenticates against
exports.users = [
  { username: 'Johanna', password: 'Markus1982!!!!!', fullname: 'Johanna' },
  { username: 'Guest', password: 'Guest', fullname: 'Guest' }
];

// If this is enabled the root of Tiny Drive will be within a directory named as the user login
exports.scopeUser = false;
