# EQUELLA Language Pack

Our en_US language pack for [openEQUELLA](https://openequella.github.io/). Many Australian spellings changed to US English ones, various unclear verbiage changed, branding changed to "VAULT", minor corrections, and a couple JavaScript hacks.

## Building

Run `npm run zip` within this project to create the language pack zip file in a "dist" directory. `npm run open` will open the language pack upload URL for VAULT.

To confirm that changes applied OK, it can be helpful to add the hash of the last commit (e.g. `git rev-parse --short HEAD`) to `com.equella.core.langpack.subheading` in resource-centre.properties. You'll see the heading update and know that the latest language pack was applied. I've provided a pre-commit git hook that performs this edit; you can activate it by putting the script in git's "hooks" directory i.e. `cp pre-commit .git/hooks`. Note that it always adds resource-centre.properties to the files being committed so don't use it if you intend to keep a dirty copy of that file in between commits.

## Updating

openEQUELLA may introduce language pack changes with new versions. I've written a basic script `property-changes.js` to try to identify what properties have been added/removed/edited, since there is no official source for this information. `npm install` will download its dependencies.

In order for property-changes to work, you need to download a copy of the reference language pack for the version you're targeting (located in the "reference" directory in the following example). Then you can run `node property-change.js reference/admin-console.properties pack/admin-console.properties` to see a list of changes you may need to address for a particular file. If there are numerous differences between the two property files, then you will need to alternate running the script and making changes until there is no output, since the script only prints the first hundred entries in the removed/added properties arrays. The script could be easily modified to check for language pack values that have changed as well (see the commented out section at the bottom of the `analyzeDifferences` function).

## JS Hacks

EQUELLA doesn't support a way to inject scripts onto any given page. We can add them to display templates for item summaries and to portlets on the dashboard, but not into places like the login page, settings menu, user profile, etc. Thus when we want to use a JavaScript hack to fix something, we have to insert it as an HTML `<script>` tag in a string definition somewhere. There are a couple hacks in this language pack:

- improved-login.js in `com.equella.core.logon.title`
- disable-cloud.js in `com.equella.core.footer.thankyou`

For new hacks going forward that don't have a particular suitable location, we'll add them to the "thankyou" string that appears near the bottom of the HTML body on every page.

## Links

- Upload language pack: https://vault.cca.edu/access/language.do
- Language pack documentation: https://openequella.github.io/guides/LanguageSettingsConfigurationGuide.html

## LICENSE

[ECL Version 2.0](https://opensource.org/licenses/ECL-2.0)
