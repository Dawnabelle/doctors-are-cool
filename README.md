<!-- Twitter icon from https://github.com/carlsednaoui/gitsocial -->
[1.1]: http://i.imgur.com/tXSoThF.png (twitter icon with padding)

# _Doctors are Cool_

#### _Epicodus Code Review_
_JavaScript - Week 2: Asynchrony and API, Doctor Lookup_ :hospital:

#### **Dawn Mott** :sunrise_over_mountains: _April 27, 2018_

## Description

_Everybody needs to see a doctor sometimes, this app will help locate one that can treat a specific issue._ :mask:

#### Planning

* Begin planning and specs
* Update README
* Double check dependencies
* Review API lessons
* Obtain API key
* Research Doctor API
   * Available info
   * Filter info
* Update specs
* Ensure API callback works
* Build backend
* Plan UI layout
* Polish
 * Delete unused/commented out code
 * Make final README edits
 * Design UI layout if additional time

### Specs

A user should be able to enter a medical issue to receive a list of doctors in the Portland area that fit the search query.

Input: "PTSD" Output: List of qualified doctors

A user should be able to to enter a name to receive a list of doctors in the Portland area that fit the search query.

Input: "Johnson" Output: List of doctors named Johnson

If the query response includes any doctors, display: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients.

Input: "Johnson" Output: "Dr. Landon Johnson, 414 N Apple St, 503.000.0808, drljohnson.com, accepting new patients"

If the API call results in an error, the application should return a notification that states what the error is.

Input: click Output: "I'm sorry... I'm so, so sorry. There has been an error accessing the database."

If the query response doesn't include any doctors, the application should return a notification that states that no doctors meet the criteria.

Input: "Doctor Who" Output: "I'm sorry... I'm so, so sorry. No results have appeared for your search."


## Setup/Installation Requirements

* _Clone this repository to your computer_
* _Run "npm install" in CLI_
* _Run "npm run build" in CLI_
* _{if running api, directions for api key}_
* _Open index.html in browser_


## Known Bugs

_There are no known :bug: at this time._

## Support and contact details

_If you'd like to chat, please contact_ @dawnrparty _on_ ![alt text][1.1].

## Technologies Used

_HTML, CSS, JavaScript, jQuery, Bootstrap, and webpack._

### License

*This page is licensed under the MIT license.*

&copy; 2018 **Dawn Mott** :sunrise_over_mountains:
