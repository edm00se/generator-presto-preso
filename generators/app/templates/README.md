## ReadMe

This is a reveal.js based presentation, capable of both live serving with joined slide state pushed from a `/control` endpoint via websocket and basic auth, or generated into a static site format in `docs/`, making it easy for simple deploy to GitHub Pages (or other static host) for permanence.

### Commands

- clone
- `npm install`
- `npm start` runs the server version, with web sockets enabled and `/control` route
- `npm run build` builds a static copy into `docs/`, making it easy to host on GitHub Pages

#### Local Preview

When run locally, unless an environment variable is set, the application will run on port `5001`.

#### Server

On the server, the app will try to pull, in order, the port number from an environment variable set of `PORT` or `VCAP_APP_PORT`.

##### Controlling the Presentation
The node app uses basic auth to protect the _/control_ end point. By default, these credentials (which are embedded in the _/routes/index.js_ file). The values are settable via the `CONTROLLER_NAME` and `CONTROLLER_PW` environment variables, with defaults of :

```
username: admin
password: someAmazingP@$$w0rd
```

All those connected to your instance will receive the stateful changes in your current slide via the [socket.io](http://socket.io/) implementation.

### Format of This Slide Deck
This is a [reveal.js](http://lab.hakim.se/reveal-js/) presentation, with the content primarily in markdown (GitHub flavored, which allows pass-through HTML). It scales (pretty well) on all devices and is served on top of a NodeJS/Express server stack. This Express app implements a socket.io connection, allowing the presenter to control (with authorization) the status and progression through the slides during the session. On completion, the presenter disconnects, and all viewers of the slides are given full and independent movement throughout.

This application stack is loosely based on the [Revealer.js app](https://github.com/shameerc/Revealer.js) in addition to elements taken from a couple other projects which achieved similar results but didn't quite make the cut. I couldn't find a single project which achieved all of:

1. using (a current version of) Express
2. using a web socket with Express (that wasn't outdated under the current API)
3. pushed more than just the event, but the actual slide (e.g.- #/1/2) state to the "current" slide
4. used templating other than jade (which is apparently popular, but I prefer EJS); this lets the base presentation and _/control_ users see the same presentation

At best I was getting 2 / 4 features, so I hacked together this, then eventually turned it into a [yeoman](http://yeoman.io/) [generator](http://yeoman.io/generators/). The content of the slides is written fully in GitHub flavored markdown (via a reveal.js plugin).

## License

MIT
