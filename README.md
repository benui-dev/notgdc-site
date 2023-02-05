# notgdc-site

notGDC is a development non-conference, for everyone!

The site runs using Jekyll, and is open-source, in the hope that the project
continues to be maintained by the community. For ever✨

## TODO

Look, we're task managing!

### Site Visuals

* [ ] Download new fonts, store local
  * [ ] Fredoka one (header)
  * [ ] Lexend (body)
* [ ] Make sure layout works on mobile
  * [ ] Set simple breakpoints using minimal-mistakes
* [ ] Clean up CSS
  * [ ] Remove bootstrap mess
* [ ] Integrate new logo (when we have it)
  * [ ] Update favicon
  * [ ] Update Discord logo
  * [ ] Update Twitter logo
  * [ ] Update Mastodon logo
  * [ ] Update Twitch logo
* [ ] Make checkboxes and tags like 20% bigger
* [ ] Hide "Read submissions" if there are no submissions yet
* [ ] Make big juicy buttons for "get involved" listing Discord, Twitter and
  Mastodon
* [ ] Fix deselecting last selected tag still showing "tag=blah" in the URL
* [ ] Remove explicit "12px" in HTML
* [ ] Make big juicy "none yet" text for when there are no submissions yet
* [ ] Fix hover on tags:
  * [ ] Show border or background change on hover
  * [ ] Don't show blue underscore on hover
* [ ] Consolidate URLs with archive
  * [ ] Remove separate URLs for 2022, 2021 etc.
  * [ ] Instead there should be a single point of interaction: /archive/?year=blah
  * [ ] Simple urls like /2022/ should forward to archive
* [ ] Work out what is causing the unknown checkbox that is last in the list on
  the archive page
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

* [ ] Make minimizing .css/.js part of some build step
  * [ ] Have non-minimized .css in the repo
  * [ ] Minimize as part of build (custom GitHub action required?)
  * [ ] Only serve minimized stuff
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
 

