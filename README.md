# mitch.cx web source
This is the source for my resume/portfolio website, [mitch.cx](https://mitch.cx/).

The goal of this project is to make it extremely simple to make changes to my website. For this reason, nearly all source files are in Markdown format, which then get parsed and piped through Pug into the final HTML files.

For now, the webserver is a simple Nginx box that I FTP into and drag and drop new site files. Future plans include streamlining this so the site is just built and updated on a push to the repo.

To set up:
```
$ git clone https://github.com/Mitchell-Nuckols/mitch.cx
$ cd mitch.cx && npm i
```
To build:
```
$ gulp build
```
To watch and rebuild on source changes:
```
$ gulp
```