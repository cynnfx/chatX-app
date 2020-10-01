# ChatX

[![N|Solid](https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-256.png)](https://nodesource.com/products/nsolid)

ChatX is a ReactNative (Android & IOS) Expo app.

  - Type some Markdown on the left
  - See HTML in the right
  - Magic

# Features

  - Loggin /
  - Chat


You can also:
  - Import and save files from GitHub, Dropbox, Google Drive and One Drive
  - Drag and drop markdown and HTML files into Dillinger
  - Export documents as Markdown, HTML and PDF

Markdown is a lightweight markup language based on the formatting conventions that people naturally use in email.  As [John Gruber] writes on the [Markdown site][df1]

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

This text you see here is *actually* written in Markdown! To get a feel for Markdown's syntax, type some text into the left window and watch the results in the right.

### Tech

ChatX uses a number of open source projects to work properly:

* [React-Native] - React-Native

### Installation

ChatX requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd dillinger
$ npm install -d
$ node app
```

For production environments...

```sh
$ npm install --production
$ NODE_ENV=production node app
```

#### Building for source
For production release:
```sh
$ gulp build --prod
```
Generating pre-built zip archives for distribution:
```sh
$ gulp build dist --prod
```

### Todos

 - Write MORE Tests
 - Add Night Mode

License
----

MIT
