# notgdc-site


## TODO

### Site Visuals

* [x] Update CSS so it's not a nightmare to get center-aligned buttons (see all
  the empty divs being used to force center-alignment
* [ ] Change theme to use locally-hosted fonts instead of Google
  * [x] Download font convert to woff
  * [ ] Update CSS
* [ ] Make sure layout works on mobile
* [x] Clean up some of the layout stuff from 2020 (see default.md)
  * [x] Work out what's going on with the Bootstrap column layout thing.
  * [x] It's kind of gross adding center-aligned buttons stuff
  * [x] Center-aligning buttons
    * NOTE: Cleaned up the layout stuff, instead of using the bootstrap columns we just put them all in the same column, effectively "flexbox-wrap"'ing them.
    * Added some margins so they wrap correctly and don't stuck together
* [ ] Do pass on page speed optimization https://pagespeed.web.dev/report?url=https%3A%2F%2Fnotgdc.io%2F
* [ ] Change smooth scrolling to use standalone script
  * [ ] Remove dependency on jQuery
* [ ] Change main header image to use text + custom font (not static image)
* [ ] Integrate new logo (when we have it)
  * [ ] Update favicon
* [x] Twitch embed
* [x] Add countdown timer javascript thingy
* [x] Fix 2020 archive to not have links to submissions


### Site Backend / Jekyll

* [ ] Generate individual pages from tags, list all entries on them
  * [ ] Need to make a custom generator?
* [ ] Make minimizing .css/.js part of some build step
  * [ ] Have non-minimized .css in the repo
  * [ ] Minimize as part of build (custom GitHub action required?)
  * [ ] Only serve minimized stuff
* [x] Fix 404 not working

### Discord

* [ ] Update site links within Discord


### Other

* [ ] Make repo public
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
 

