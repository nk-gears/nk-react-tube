(this.webpackJsonpreacttube = this.webpackJsonpreacttube || []).push([
  [0],
  {
    27: function (e, t, c) {},
    46: function (e, t, c) {
      "use strict";
      c.r(t);
      var a = c(0),
        s = c(1),
        i = c.n(s),
        n = c(19),
        l = c.n(n),
        r = (c(25), c(26), c(27), c.p + "static/media/logo.6ce24c58.svg"),
        o = function () {
          return Object(a.jsxs)("header", {
            className: "row AppHeader",
            children: [
              Object(a.jsxs)("div", {
                className: "col-2",
                children: [
                  Object(a.jsx)("img", {
                    src: r,
                    className: "App-logo",
                    alt: "logo",
                  }),
                  Object(a.jsx)("div", {
                    className: "ReactTube",
                    children: "ReactTube",
                  }),
                ],
              }),
              Object(a.jsx)("div", {
                className: "col-8",
                children: Object(a.jsx)("div", {
                  className: "header-text",
                  children: "React Tutorials 1",
                }),
              }),
              Object(a.jsx)("div", {
                className: "col-2",
              }),
            ],
          });
        },
        d = c(4),
        u = c(5),
        j = c(3),
        b = c(7),
        h = c(6),
        p = c(10),
        m = c.n(p);

      function v(e, t) {
        m.a
          .get(t)
          .then(function (t) {
            e.setState({
              isLoaded: !0,
              data: t.data,
            });
          })
          .catch(function (t) {
            e.setState({
              isLoaded: !1,
              error: t,
            });
          });
      }
      var O = function (e) {
          var t = e.videoItem,
            c = t.snippet.title;
          c.length > 53 && (c = c.substring(0, 50) + "...");
          var i = new Date(),
            n = new Date(t.snippet.publishTime.slice(0, 10)),
            l = Math.floor((i - n) / 864e5),
            r = "\u2022 today";
          if (l / 365 > 1)
            r = "\u2022 " + Math.floor(l / 365).toString() + " years ago";
          else if (l / 31 > 1) {
            r = "\u2022 " + Math.floor(l / 31).toString() + " months ago";
          } else l > 1 && (r = "\u2022 " + l.toString() + " days ago");
          return (
            1 === parseInt(r.charAt(2)) && (r = r.replace(/s/g, "")),
            Object(a.jsxs)(s.Fragment, {
              children: [
                Object(a.jsx)("img", {
                  src: t.snippet.thumbnails.medium.url,
                  alt: "videoimage",
                  className: "video img-fluid rounded cursor",
                }),
                Object(a.jsx)("div", {
                  className: "videoName",
                  children: c,
                }),
                Object(a.jsx)("a", {
                  href: "https://youtube.com/channel/" + t.snippet.channelId,
                  className: "channelName",
                  children: t.snippet.channelTitle,
                }),
                Object(a.jsx)("div", {
                  className: "uploaded",
                  children: r,
                }),
              ],
            })
          );
        },
        x = function (e) {
          return Object(a.jsx)("div", {
            className: "container Error",
            children: Object(a.jsxs)("div", {
              className: "",
              children: ["Error: ", e.error],
            }),
          });
        },
        g = function (e) {
          var t = e.videoItem,
            c = new Date(t.snippet.publishTime.slice(0, 10));
          c = c
            .toLocaleDateString("en-US")
            .replace(/\//g, ", ")
            .replace(",", " ");
          for (
            var s = [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
              ],
              i = 0;
            i < s.length;
            i++
          )
            0 === parseInt(c.charAt(1))
              ? (c = "\u2022 Oct" + c.slice(2, 12))
              : 1 === parseInt(c.charAt(1))
              ? (c = "\u2022 Nov" + c.slice(2, 12))
              : 2 === parseInt(c.charAt(1))
              ? (c = "\u2022 Dec" + c.slice(2, 12))
              : i + 1 === parseInt(c.charAt(0)) &&
                (c = "\u2022 " + s[i] + c.slice(1, 11));
          return Object(a.jsxs)("div", {
            className: "videoPlayer",
            children: [
              Object(a.jsx)("div", {
                className: "embed-responsive embed-responsive-16by9",
                children: Object(a.jsx)("iframe", {
                  title: t.id.videoId,
                  className: "embed-responsive-item",
                  src:
                    "https://onion.tube/embed/" + t.id.videoId + "?autoplay=1",
                  allowFullScreen: !0,
                }),
              }),
              Object(a.jsx)("div", {
                children: t.snippet.title,
              }),
              Object(a.jsx)("div", {
                children: c,
              }),
              Object(a.jsx)("a", {
                href: "https://youtube.com/channel/" + t.snippet.channelId,
                className: "channelName",
                children: t.snippet.channelTitle,
              }),
              Object(a.jsx)("div", {
                children: t.snippet.description,
              }),
            ],
          });
        },
        y = (function (e) {
          Object(b.a)(c, e);
          var t = Object(h.a)(c);

          function c(e) {
            var a;
            return (
              Object(d.a)(this, c),
              ((a = t.call(this, e)).clickHandler = function (e) {
                a.setState({
                  playVideo: !a.state.playVideo,
                  videoToPlay: e,
                });
              }),
              (a.state = {
                isLoaded: !1,
                data: {},
                error: null,
                playVideo: !1,
                videoToPlay: null,
              }),
              (a.clickHandler = a.clickHandler.bind(Object(j.a)(a))),
              a
            );
          }
          return (
            Object(u.a)(c, [
              {
                key: "componentDidMount",
                value: function () {
                  v(
                    this,
                    "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&type=video&order=viewCount&q=ReactJS%20Tutorial&key=AIzaSyB8Fk-MWT_r8nVgG35gIZoP-DhJYpJ_tZ0"
                  );
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  e.urlSearch !== this.props.urlSearch &&
                    (v(
                      this,
                      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&type=video&q=ReactJS%20Tutorial%20" +
                        this.props.urlSearch +
                        "&key=AIzaSyB8Fk-MWT_r8nVgG35gIZoP-DhJYpJ_tZ0"
                    ),
                    this.setState({
                      playVideo: !1,
                    }));
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.state.data.items;
                  return this.state.isLoaded && !1 === this.state.playVideo
                    ? Object(a.jsxs)("div", {
                        className: "container-fluid Main",
                        children: [
                          Object(a.jsx)("div", {
                            className: "row",
                            children: t.slice(0, 3).map(function (t) {
                              return Object(a.jsx)(
                                "div",
                                {
                                  className: "col-md-4",
                                  children: Object(a.jsx)(
                                    "div",
                                    {
                                      onClick: function () {
                                        return e.clickHandler(t);
                                      },
                                      children: Object(a.jsx)(
                                        O,
                                        {
                                          videoItem: t,
                                        },
                                        t.etag
                                      ),
                                    },
                                    t.etag
                                  ),
                                },
                                t.etag
                              );
                            }),
                          }),
                          Object(a.jsx)("div", {
                            className: "row",
                            children: t.slice(3, 6).map(function (t) {
                              return Object(a.jsx)(
                                "div",
                                {
                                  className: "col-md-4",
                                  children: Object(a.jsx)(
                                    "div",
                                    {
                                      onClick: function () {
                                        return e.clickHandler(t);
                                      },
                                      children: Object(a.jsx)(
                                        O,
                                        {
                                          videoItem: t,
                                        },
                                        t.etag
                                      ),
                                    },
                                    t.etag
                                  ),
                                },
                                t.etag
                              );
                            }),
                          }),
                          Object(a.jsx)("div", {
                            className: "row",
                            children: t.slice(6, 9).map(function (t) {
                              return Object(a.jsx)(
                                "div",
                                {
                                  className: "col-md-4",
                                  children: Object(a.jsx)(
                                    "div",
                                    {
                                      onClick: function () {
                                        return e.clickHandler(t);
                                      },
                                      children: Object(a.jsx)(
                                        O,
                                        {
                                          videoItem: t,
                                        },
                                        t.etag
                                      ),
                                    },
                                    t.etag
                                  ),
                                },
                                t.etag
                              );
                            }),
                          }),
                          Object(a.jsx)("div", {
                            className: "row",
                            children: t.slice(9, 12).map(function (t) {
                              return Object(a.jsx)(
                                "div",
                                {
                                  className: "col-md-4",
                                  children: Object(a.jsx)(
                                    "div",
                                    {
                                      onClick: function () {
                                        return e.clickHandler(t);
                                      },
                                      children: Object(a.jsx)(
                                        O,
                                        {
                                          videoItem: t,
                                        },
                                        t.etag
                                      ),
                                    },
                                    t.etag
                                  ),
                                },
                                t.etag
                              );
                            }),
                          }),
                        ],
                      })
                    : this.state.playVideo
                    ? Object(a.jsx)("div", {
                        className: "container-fluid Main",
                        children: Object(a.jsx)(g, {
                          videoItem: this.state.videoToPlay,
                        }),
                      })
                    : this.state.error
                    ? Object(a.jsx)(x, {
                        error: this.state.error.message,
                      })
                    : Object(a.jsx)("div", {
                        className: "container",
                        children: "test",
                      });
                },
              },
            ]),
            c
          );
        })(s.Component),
        f = (function (e) {
          Object(b.a)(c, e);
          var t = Object(h.a)(c);

          function c(e) {
            var a;
            return (
              Object(d.a)(this, c),
              ((a = t.call(this, e)).clickHandler = function (e) {
                a.setState({
                  clickedVal: e.target.value,
                });
              }),
              (a.state = {
                clickedVal: null,
              }),
              (a.clickHandler = a.clickHandler.bind(Object(j.a)(a))),
              a
            );
          }
          return (
            Object(u.a)(c, [
              {
                key: "render",
                value: function () {
                  return Object(a.jsxs)(s.Fragment, {
                    children: [
                      Object(a.jsx)("div", {
                        className: "row HeaderTopics",
                        children: Object(a.jsxs)("div", {
                          className: "col-12",
                          children: [
                            Object(a.jsx)("button", {
                              className: "HTbuttons",
                              value: "",
                              type: "Submit",
                              onClick: this.clickHandler,
                              children: "All",
                            }),
                            Object(a.jsx)("button", {
                              className: "HTbuttons",
                              value: "JSX",
                              type: "Submit",
                              onClick: this.clickHandler,
                              children: "JSX",
                            }),
                            Object(a.jsx)("button", {
                              className: "HTbuttons",
                              value: "Componenets",
                              type: "Submit",
                              onClick: this.clickHandler,
                              children: "Components",
                            }),
                            Object(a.jsx)("button", {
                              className: "HTbuttons",
                              value: "Props",
                              type: "Submit",
                              onClick: this.clickHandler,
                              children: "Props",
                            }),
                            Object(a.jsx)("button", {
                              className: "HTbuttons",
                              value: "State",
                              type: "Submit",
                              onClick: this.clickHandler,
                              children: "State",
                            }),
                            Object(a.jsx)("button", {
                              className: "HTbuttons",
                              value: "Lifecycle%20Methods",
                              type: "Submit",
                              onClick: this.clickHandler,
                              children: "Lifecycle Methods",
                            }),
                            Object(a.jsx)("button", {
                              className: "HTbuttons",
                              value: "Event%Handling",
                              type: "Submit",
                              onClick: this.clickHandler,
                              children: "Event Handling",
                            }),
                            Object(a.jsx)("button", {
                              className: "HTbuttons",
                              value: "Hooks",
                              type: "Submit",
                              onClick: this.clickHandler,
                              children: "Hooks",
                            }),
                            Object(a.jsx)("button", {
                              className: "HTbuttons",
                              value: "API",
                              type: "Submit",
                              onClick: this.clickHandler,
                              children: "API",
                            }),
                          ],
                        }),
                      }),
                      Object(a.jsx)(y, {
                        urlSearch: this.state.clickedVal,
                      }),
                    ],
                  });
                },
              },
            ]),
            c
          );
        })(s.Component),
        N = c(8),
        k = function (e) {
          var t = e.playlist.snippet.title.replace(/&amp;/g, "&");
          return (
            t.length > 33 && (t = t.substring(0, 30) + "..."),
            Object(a.jsx)("a", {
              className: "sideNavLink",
              href:
                "https://www.youtube.com/playlist?list=" +
                e.playlist.id.playlistId,
              children: Object(a.jsxs)("div", {
                className: "sideNavItem",
                children: [
                  Object(a.jsx)("div", {
                    className: "playlistLink",
                    children: t,
                  }),
                  Object(a.jsx)("div", {
                    children: Object(a.jsx)("span", {
                      className: "playlistChannel",
                      children: e.playlist.snippet.channelTitle,
                    }),
                  }),
                ],
              }),
            })
          );
        },
        S = function () {
          var e = Object(s.useState)(!1),
            t = Object(N.a)(e, 2),
            c = t[0],
            i = t[1],
            n = Object(s.useState)(null),
            l = Object(N.a)(n, 2),
            r = l[0],
            o = l[1],
            d = Object(s.useState)(null),
            u = Object(N.a)(d, 2),
            j = u[0],
            b = u[1];
          return (
            Object(s.useEffect)(function () {
              !(function (e, t, c, a) {
                m.a
                  .get(a)
                  .then(function (c) {
                    e(!0), t(c.data);
                  })
                  .catch(function (e) {
                    c(e);
                  });
              })(
                i,
                o,
                b,
                "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&order=viewCount&type=playlist&q=React%20Tutorial%20for%20Beginners&key=AIzaSyB8Fk-MWT_r8nVgG35gIZoP-DhJYpJ_tZ0"
              );
            }, []),
            c && null != r
              ? Object(a.jsxs)("div", {
                  className: "SideNav",
                  children: [
                    Object(a.jsx)("div", {
                      className: "sideNavHeader",
                      children: Object(a.jsx)("a", {
                        href: "https://reactjs.org/",
                        className: "sideNavLink",
                        children: "View React Documentation",
                      }),
                    }),
                    Object(a.jsx)("div", {
                      className: "sideNavHeader",
                      children: "Popular Tutorial Playlists",
                    }),
                    r.items.map(function (e) {
                      return Object(a.jsx)(
                        k,
                        {
                          playlist: e,
                        },
                        e.etag
                      );
                    }),
                  ],
                })
              : j
              ? Object(a.jsx)("div", {
                  children: j.message,
                })
              : Object(a.jsx)("div", {})
          );
        };
      var H = function () {
          return Object(a.jsxs)("div", {
            className: "App container-fluid",
            children: [
              Object(a.jsx)(o, {}),
              Object(a.jsx)(f, {}),
              Object(a.jsx)(S, {}),
            ],
          });
        },
        I = function (e) {
          e &&
            e instanceof Function &&
            c
              .e(3)
              .then(c.bind(null, 47))
              .then(function (t) {
                var c = t.getCLS,
                  a = t.getFID,
                  s = t.getFCP,
                  i = t.getLCP,
                  n = t.getTTFB;
                c(e), a(e), s(e), i(e), n(e);
              });
        };
      l.a.render(
        Object(a.jsx)(i.a.StrictMode, {
          children: Object(a.jsx)(H, {}),
        }),
        document.getElementById("root")
      ),
        I();
    },
  },
  [[46, 1, 2]],
]);
//# sourceMappingURL=main.148b4103.chunk.js.map
