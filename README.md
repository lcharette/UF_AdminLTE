# UF_AdminLTE
AdminLTE sprinkle/theme for Userfrosting V4. Based on the theme from Almsaeedstudio (https://almsaeedstudio.com).

## Install
### Clone Sprinkle as Submodule
`cd` into the `/app/sprinkles` folder of UserFrosting and clone as submodule:
```
git submodule add git@github.com:lcharette/UF_AdminLTE.git AdminLTE
```

### Update composer
From the UserFrosting `/app` folder, run `composer update`

### Update the assets build
From the UserFrosting `/build` folder, run `npm run uf-assets-install`

### Add AdminLTE to the sprinkle list
Edit UserFrosting `app/sprinkles/sprinkles.json` file and add `AdminLTE` to the sprinkle list to enable it globaly.

