# EQUELLA Language Pack

Our en_US language pack for EQUELLA. Many Australian spellings changed to US English ones, various unclear verbiage changed, minor corrections.

## Building

Run `make` within this project to create the language pack zip file. `make open` will open the language pack upload URL.

## JS Hacks

EQUELLA doesn't support a way to inject scripts onto any given page. We can add them to display templates for item summaries and to portlets on the dashboard, but not into places like the login page, settings menu, user profile, etc. Thus when we want to use a JavaScript hack to fix something, we have to insert it as an HTML `<script>` tag in a string definition somewhere. There are a couple hacks in this language pack:

- improved-login.js in `com.tle.web.sections.equella.logon.title`
- disable-cloud.js in `com.tle.web.sections.equella.footer.thankyou`

For new hacks going forward that don't have a particular suitable location, we'll add them to the "thankyou" string that appears near the bottom of the HTML body on every page.

## Links

- Upload language pack: https://vault.cca.edu/access/language.do
- Language pack documentation: https://equella.github.io/guides/LanguageSettingsConfigurationGuide.html

## LICENSE

[ECL Version 2.0](https://opensource.org/licenses/ECL-2.0)
