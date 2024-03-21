
I do not use ViteJS, so i did the styling and Scripts in defult pages!


SO:- not need to ->npm run build and I don't use _scss or an external JS




these steps are only when to using the node.js for additiona scss styling and JS files:-
For Shopify

1. Install NodeJs (version 18 and above is recommended)

2. Place files and folders your local theme folder

3. Run "npm install"

4. Add the following in theme.liquid right above the closing </head> tag:
    4.1 <link href="{{ 'app.css' | asset_url }}" rel="stylesheet" type="text/css" media="all">
    4.2 <script src="{{ 'app.js' | asset_url }}" defer="defer"></script>

5. To compile resources, run "npm run build"