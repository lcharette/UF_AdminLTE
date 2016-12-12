# UF_AdminTLE
AdminLTE sprinkle/theme for Userfrosting V4. Based on the theme from Almsaeedstudio (https://almsaeedstudio.com).

## Install
### Clone Sprinkle as Submodule
`cd` into the sprinkle directory of UserFrosting and clone as submodule:
```
git submodule add git@github.com:lcharette/UF_AdminLTE.git AdminLTE
```

### Update composer
From the UserFrosting `/app` folder, run `composer update`

### Edit index.php
Edit UserFrosting `public/index.php` file and add `AdminLTE` to the sprinkle list to enable it.

### Add the js bundle
Edit the `build/bundle.config.json` and add this at the end
```
    "css/AdminLTE": {
        "styles": [
            "css/AdminLTE.min.css",
            "css/skins/_all-skins.min.css",
            "css/Select2-custom.css",
            "vendor/select2/select2.min.css",
            "vendor/iCheck/square/_all.css"
        ],
        "options": {
            "result": {
                "type": {
                  "styles": "plain"
                }
            }
        }
    },
    "css/AdminLTE-dashboard": {
        "styles": [
            "vendor/jvectormap/jquery-jvectormap-1.2.2.css"
        ],
        "options": {
            "result": {
                "type": {
                  "styles": "plain"
                }
            }
        }
    },
    "js/AdminLTE": {
        "scripts": [
            "js/app.min.js",
            "js/userfrosting.min.js",
            "vendor/select2/select2.full.min.js",
            "vendor/slimScroll/jquery.slimscroll.min.js",
            "vendor/iCheck/icheck.min.js"
        ],
        "options": {
            "result": {
                "type": {
                  "styles": "plain"
                }
            }
        }
    },
    "js/AdminLTE-demo": {
        "scripts": [
            "vendor/sparkline/jquery.sparkline.min.js",
            "vendor/jvectormap/jquery-jvectormap-1.2.2.min.js",
            "vendor/jvectormap/jquery-jvectormap-world-mill-en.js",
            "vendor/slimScroll/jquery.slimscroll.min.js",
            "vendor/fastclick/fastclick.js",
            "vendor/chartjs/Chart.min.js",
            "js/pages/dashboard2.js",
            "js/demo.js"
        ],
        "options": {
            "result": {
                "type": {
                  "styles": "plain"
                }
            }
        }
    }
```