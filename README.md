# notgdc-site

notGDC is a development non-conference, for everyone!

The site runs using Jekyll, and is open-source, in the hope that the project
continues to be maintained by the community. For ever✨

## TODO

Look, we're task managing!

### Site Visuals

* [ ] Add an "external link" symbol next to submission links

#### Done

* [x] Add one of those Twitter card preview thingies, for links
* [x] Make the discord card thing have a highlight colour, check out how
  benui.ca does it
* [x] Make sure layout works on mobile
  * [x] Set simple breakpoints using minimal-mistakes
* [x] Remove colours from all tags apart from years
  * [x] Make non-year ones a standard light grey bg, keep icons
* [x] Secondary salmon for links #db4468
* [x] Submission title color #343a40
* [x] Make checkboxes and tags like 20% bigger
* [x] Update tag colour system
  * [x] Make it procedural? Some kind of list of colours and then it
	auto-assigns them?
  * [x] Colours should match new site colours
* [x] Update tags checkbox to cleanup focus visuals
* [x] Update countdown to show number of weeks
* [x] Clean up CSS
  * [x] Remove bootstrap mess
* [x] Remove explicit "12px" in HTML
* [x] Fix hover on tags:
  * [x] Show border or background change on hover
  * [x] Don't show blue underscore on hover
* [x] Work out what is causing the unknown checkbox that is last in the list on
  the archive page
* [x] Make big juicy "none yet" text for when there are no submissions yet
* [x] Make big juicy buttons for "get involved" listing Discord, Twitter and
  Mastodon
* [x] Hide "Read submissions" if there are no submissions yet
* [x] Fix deselecting last selected tag still showing "tag=blah" in the URL
* [x] Download new fonts, store local
  * [x] Fredoka one (header)
  * [x] Lexend (body)
* [x] Consolidate URLs with archive
  * [x] Remove separate URLs for 2022, 2021 etc.
  * [x] Instead there should be a single point of interaction: /archive/?year=blah
  * [x] Simple urls like /2022/ should forward to archive
* [x] Update the branding in the submissions form
* [x] Integrate new logo (when we have it)
  * [x] Update favicon
  * [x] Update Discord logo
  * [x] Update Twitter logo
  * [x] Update Mastodon logo
  * [x] Update Twitch logo
* [x] Make it so checkbox filters show a pointer cursor
  * [x] Make checkbox filters clickable area match visual bg
* [x] Fix horizontal scroll bar appearing
* [x] Add juice to Button on-hover (see terranil.com for example)
* [x] Add way to see previous year submissions pulling from submissions.yaml 
* [x] Update timer to show reduced info based on time remaining
  * [x] Don't show seconds
  * [x] Only show minutes if days == 0
  * [x] Only show hours if days < 3 && hours > 0
  * [x] Only show days if days > 0
* [x] Update CSS so it's not a nightmare to get center-aligned buttons (see all the empty divs being used to force center-alignment
* [x] Change theme to use locally-hosted fonts instead of Google
  * [x] Download font convert to woff
  * [x] Update CSS
* [x] Clean up some of the layout stuff from 2020 (see default.md)
  * [x] Work out what's going on with the Bootstrap column layout thing.
  * [x] It's kind of gross adding center-aligned buttons stuff
  * [x] Center-aligning buttons
    * NOTE: Cleaned up the layout stuff, instead of using the bootstrap columns we just put them all in the same column, effectively "flexbox-wrap"'ing them.
    * Added some margins so they wrap correctly and don't stuck together
* [x] Do pass on page speed optimization https://pagespeed.web.dev/report?url=https%3A%2F%2Fnotgdc.io%2F
* [x] Change smooth scrolling to use standalone script
  * [x] Remove dependency on jQuery
* [x] Change main header image to use text + custom font (not static image)
* [x] Twitch embed
* [x] Add countdown timer javascript thingy
* [x] Fix 2020 archive to not have links to submissions


### Site Backend / Jekyll

* [x] Make minimizing .css/.js part of some build step
  * [x] Have non-minimized .css in the repo
  * [x] Minimize as part of build (custom GitHub action required?)
  * [x] Only serve minimized stuff
* [x] Generate individual pages from tags, list all entries on them
  * [x] Need to make a custom generator?
* [x] Add cute icons next to each tag
* [x] Fix tags not having nice colors
* [x] Remove tags that don't make any sense
* [x] Fix 404 not working
* [x] Add historical data to submissions.yaml
  * [x] 2022
  * [x] 2020
  * [x] 2019
  * [x] 2018
  * [x] 2017

### Discord

* [ ] Update site links within Discord
* [ ] Make fancy inline image header thingies for the intro


### Other

* [x] Fix "www.notgdc.io" with www prefix not working
* [x] 404 event is not being fired when hitting the 404 page??
* [x] Make repo public
* [x] Fix notgdc.io not having HTTPS (certificate is stuck in processing?)
* [x] Set up notgdc.io email address
  * [x] Register
  * [x] Wait for DNS to propagate
  * [x] Test
* [x] Update form link
  * [x] Fix https error on form link
* [x] Add YAML snippet to google form results
* [x] Back up old site into 2020 directory
* [x] Confirm plausible.io works
* [x] Make custom URL forward to form (e.g. form.notgdc.fun) https://docs.google.com/forms/d/e/1FAIpQLScoLHbQXTusJxSran05CTyo_G7vOSCRwxQYylODH547Jp77fg/viewform?usp=sf_link
* [x] Make custom URL forward to discord (e.g. discord.notgdc.fun) https://discord.gg/xqu7gxjpX3
 

