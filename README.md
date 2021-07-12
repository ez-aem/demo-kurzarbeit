# Site Theme

This is the theme of the AEM:Blueprint site template. 

This theme can be modified to customize the visual appearance of sites created from the basic site template.

## Structure

* `src/components`: This is where the CSS/JS files live. Files are automatically included. See main.css/js to see inclusion.
* `src/resources`: This is where images, fonts, etc live that need to go into your theme
* `src/site`: These are site level CSS/JS that are loaded first within your bundled CSS/JS
* `src/template`: These files are related to the style system and are used in conjunction with PurgeCSS and Tailwind's JIT mode
* `src/main.ts`: This is the main webpack entry file to process the JS & CSS.

## Tailwind
This theme uses tailwind to manage the configuration for many site styles and options. You can customize the tailwind theme, as you need. But you will likely need to make updates to the style system to reflect that.
The style system options for this theme are built with knowledge of the tailwind configurations. Which is why the style system allows for so much customization and configuration by authors.

If you are removing tailwind classes or configurations, be sure to coordinate with the site template authors to not remove needed classes.

## Presets & Utilities
AEM:Blueprint leverages the power of Tailwind's @layer directive to organize CSS into base, components, and utilities @layers. Concurrently, we've organized CSS files into a base, presets and utilities. The base layer is output first, followed by the components layer and finally the utilities layer. This layering of CSS and output allows you to specify the cascade and overwriting of CSS for maximum control.

The base.css file corresponds with the `base` @layer in Tailwind, and is where any default CSS styles should live for that component.

The presets folder corresponds with the `components` @layer in Tailwind. Each file within the presets folder should also correspond with a Preset option within the AEM Style System. Presets differ from utilities in the Style Styem in that they should be a single selectable option that fully styles - or nearly fully styles a component. 

In contrast to Presets are Utilities - which live in the utilities folder and correspond to the `utilities` @layer in Tailwind. Utilities in the Style System are individual settings that can be selected on components and can be used to compose a layout or design. For example, the radius of round corners, the background color, the spacing between elements, etc. These Utility Style System settings are originally generated by the default AEM:Blueprint Tailwind Preset. 

The `components` and `utilities` @layers can be complimentary when building Presets. And Presets can even be made of utility styles to limit the amount of new CSS created during the customization process. Additionally, depending upon how you create Presets, a Preset can still be customized within AEM by using the Utilities options to override Preset CSS.

## Install and Live Theming Mode
1. Initialize the project with following command executed at the /theme root:

```
npm install
```

2. Run the local proxy server while working to preview your changes with the content from the AEM environment.

```
npm run live
```

## Deploy
Deploying your code to AEM cloud instances requires some configuration on Github and in AEM. This guide will walk you through deploying your code to the configured cloud instance. The /theme folder referenced is the root folder if this file was downloaded via the 'theme-sources' option in AEM.

1. From the /theme folder, run `git init`.

2. Go to your Github account and create a new empty repository. Don't add any files. 

3. Back in your terminal, add the remote settings from the Github repository creation screen.

4. Add your /theme files and commit them to the new master or main branch - whichever branch name you choose

5. Push the main/master branch to Github

6. In Github, go to your Developer Settings / Tokens page - https://github.com/settings/tokens

7. Click on Generate new Personal Acces Token - https://github.com/settings/tokens/new

8. Give the token a name - the site name is recommended - and approve access to repo and workflow. Copy the generated value. You will need this value in two places, so don't lose it. Perhaps save it temporarily in your .env file

9. Now go to your repository secrets settings page - https://github.com/[profile]/[repository]/settings/secrets/actions

10. Create three new secrets - GIT_TOKEN, AEM_URL, AEM_SITE

11. The value of `GIT_TOKEN` is the Personal Access Token you've just created.

12. The value of the `AEM_URL` secret is identical to the `AEM_URL` found in the .env file 

13. The value of the `AEM_SITE` secret is identical to the `AEM_SITE` found in the .env file

14. Go to the AEM author environment and sign in. Navigate to the sites root - https://author-[environment].adobeaemcloud.com/sites.html/content

15. Use the keyboard shortcut Alt-4 to open the Site controls, alternatively open the dropdown menu in the top left to access the Site controls

16. Select the checkbox of your site, you will see the Site controls menu propogate with two new options - Download Theme Sources and Update Github Settings. Click Update Github Settings. A modal should appear.

17. Paste in the URL for your newly created Github repository

18. Paste in the Personal Access Token you created earlier.

19. Save and close

20. Return to Github and navigate to the Actions tab - https://github.com/[profile]/[repo]/actions/workflows/deploy.yml

21. Open the Run Workflow dropdwon and click Run Workflow. This will build the theme files and then deploy the build artifacts to your configured AEM environment.

## Update & Policy Style System
You will need to ensure you have the latest style system settings from the production environment to ensure the correct css is created. 
Tailwind's JIT mode combined with PurgeCSS will only output what is needed. It will look at the `src/template/policies.json` file to see what css classes are used within the style system policies.
You can update this file by running `npm run update` for local development or `npm run update:production` for working with a cloud instance.

## Theming
Customizing AEM:Blueprint 