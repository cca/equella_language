# EQUELLA Language Pack

Our en_US language pack for openEQUELLA. Many Australian spellings changed to US English ones, various unclear verbiage changed, branding changed to "VAULT", minor corrections.

## Building

Run `npm run zip` within this project to create the language pack zip file. `npm run open` will open the language pack upload URL.

To confirm that the edits applied OK, it can be helpful to edit the very first string in resource-centre.properties `com.equella.core.langpack.subheading` by adding the hash of the last commit in this repo (e.g. `git rev-parse --short HEAD`). You'll see the heading update and know that the latest language pack has been applied.

## Updating

openEQUELLA may introduce language pack changes with new versions. I've written a basic script `property-changes.js` to try to identify what properties have been added/removed/edited, since there is no official source for this information. `npm install` will download its dependencies.

In order for property-changes to work, you need to download a copy of the reference language pack for the version you're targeting (locafted in the "reference" directory in the following example). Then you can run `node property-change.js reference/admin-console.properties pack/admin-console.properties` to see a list of changes you may need to address. If there are numerous differences between the two property files, then you will need to alternate running the script and making changes until there is no output, since the script only prints the first hundred entries in the removed/added properties arrays.

## JS Hacks

EQUELLA doesn't support a way to inject scripts onto any given page. We can add them to display templates for item summaries and to portlets on the dashboard, but not into places like the login page, settings menu, user profile, etc. Thus when we want to use a JavaScript hack to fix something, we have to insert it as an HTML `<script>` tag in a string definition somewhere. There are a couple hacks in this language pack:

- improved-login.js in `com.equella.core.logon.title`
- disable-cloud.js in `com.equella.core.footer.thankyou`

For new hacks going forward that don't have a particular suitable location, we'll add them to the "thankyou" string that appears near the bottom of the HTML body on every page.

## Links

- Upload language pack: https://vault.cca.edu/access/language.do
- Language pack documentation: https://equella.github.io/guides/LanguageSettingsConfigurationGuide.html

## LICENSE

[ECL Version 2.0](https://opensource.org/licenses/ECL-2.0)
