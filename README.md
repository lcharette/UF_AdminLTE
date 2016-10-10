# UF_AdminTLE
AdminLTE sprinkle/theme for Userfrosting V4 https://almsaeedstudio.com

## Install
`cd` into the sprinkle directory of UserFrosting and clone as submodule:
```
git submodule add git@github.com:lcharette/UF_AdminLTE.git AdminLTE
```

Edit UserFrosting `public/index.php` file and add `AdminLTE` to the sprinkle list.

## bundle.config.json
```
    "css/AdminLTE": {
        "styles": [
            "css/AdminLTE.min.css",
            "css/skins/_all-skins.min.css",
            "vendor/select2/select2.min.css"
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
    "css/iCheck": {
        "styles": [
            "vendor/iCheck/square/blue.css"
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
            "vendor/select2/select2.full.min.js"
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
    },
    "js/iCheck": {
        "scripts": [
            "vendor/iCheck/icheck.min.js"
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