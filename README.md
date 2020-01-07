
**(this repo is old/unused and archived)**

----

Repro for webpack-dev-server#1644


Install and run

 1. Clone repo
 2. `npm i`
 3. `npm start`

Steps:

 1. Open page in browser
 2. Edit and save `foo.js`
 3. Note that page hard-reloads
 4. Comment out the syntax error in `foo.js`
 5. Reload page in browser
 6. Edit and save `foo.js`
 7. Note that HMR now works normally

