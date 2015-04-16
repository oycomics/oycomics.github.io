#"WholeBuffalo" - an Oy Comics&trade; UI
###

> A Jekyll / Bootstrap theme for publishing comics on GitHub Pages.

##Content

All comic images and related content &copy; 2001 - 2015 Danny Burleson.

##Code

You are free to copy and re-use the generic site code for your own purposes.

The latest public release version can be obtained here: https://github.com/oycomics/oycomics.github.io/releases

This does NOT include the right to re-use content that is unique to the actual comics and related content published via this UI, including:

* The domain name - get your own!
* Describing verbiage (e.g., About) - write your own!
* The comic images and characters themselves - create your own!
* Any other content that is obviously not generic (e.g., social URLs, showcased products, etc.).

##Support

The support is . . . there is no support. This was all built from scratch for publishing my own comics. If you would like to do something similar, go for it, but I'll be too busy drawing to help out with questions or customizations.

##Okay, okay, here are some tips . . .

To get started you will need:

* a GitHub Pages repository ( http://pages.github.com ). If you're reading this, I'll assume you're already familiar with GitHub.
* Jeykll ( http://jekyllrb.com ). You'll want to familiarize yourself with their documentation ( http://jekyllrb.com/docs ). A lot of the magic that happens is thanks to this really simple-to-use "file-based CMS".
* Knowledge of writing CSS, HTML, Markdown, and the Bootstrap framework.
* Optional: CloudFlare ( https://www.cloudflare.com ). I use this for page/image caching, DDOS protection, and other services. Your mileage may vary.

###COMIC FORMAT EXAMPLES 

####FILENAME

	YYYY-MM-DD-TITLE.md
or

	YYYY-MM-DD-TITLE.markdown

####COMIC MARKDOWN
	---
	layout: comic
	title: "TITLE"
	date: YYYY-MM-DD 00:00:47
	image: "IMAGE_NAME.png"
	---
	![ALT TEXT]({{ site.url }}/comics/IMAGE_NAME.png)
