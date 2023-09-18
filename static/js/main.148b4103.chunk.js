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
                  Object(a.jsx)("div", {
                    className: "My YT Feed",
                    children: "My YT Feed",
                  }),
                ],
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
          let keys = [
            "AIzaSyD74F79HW2sAUup5Zu5ZK8cauhIdzc_LzA",
            "AIzaSyB8Fk-MWT_r8nVgG35gIZoP-DhJYpJ_tZ0",
          ];
          var itemKey = keys[Math.floor(Math.random() * keys.length)];

          return (
            Object(u.a)(c, [
              {
                key: "componentDidMount",
                value: function () {
                  v(
                    this,
                    "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&type=video&order=viewCount&q=Linux%20Experiment&key=" +
                      itemKey
                  );
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  e.urlSearch !== this.props.urlSearch &&
                    (v(
                      this,
                      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&type=video&q=" +
                        this.props.urlSearch +
                        "&key=" +
                        itemKey
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

          const channels = [
            "Bharat Desai-BK Songs",
            "Think School",
            "Bulldog Mindset",
            "DigitalOcean",
            "Microsoft for Startups",
            "Yan Cui",
            "Adobe Experience Cloud",
            "Amazon Web Services",
            "Google for Developers",
            "Google Cloud APAC",
            "Google Cloud Events",
            "Gomathi's Kitchen",
            "HomeCooking Tamil",
            "Recipe Checkr",
            "Akshya veetu samayal",
            "Vidya Subramanian",
            "Munch &amp; Mull",
            "Village Kitchen",
            "HomeCookingShow",
            "Gita's Kitchen",
            "Bk Arti Cooking Classes",
            "Skinny Recipes",
            "Cook with Sangeetha",
            "Amma samayal",
            "Shantha Paati Samayal",
            "Ilaya Bharatham-இளைய பாரதம் ",
            "Maridhas Answers",
            "Abhi and Niyu",
            "Brut India",
            "Tamil Guitar Lessons",
            "Your Guitar Academy",
            "techiesms",
            "MrDIY",
            "ExplainingComputers",
            "Gary Explains",
            "Electronics&amp;Computers",
            "Tech StudyCell",
            "Techno Tim",
            "village Electrician 007",
            "Free Documentary - History",
            "Free Documentary",
            "Let's Make Education Simple",
            "BRIGHT SIDE",
            "Avatar Live",
            "Birlas Parvai",
            "ffreedom app - Money (Tamil)",
            "Investment Insights Tamil",
            "Finance With Sharan",
            "BehindwoodsTV",
            "JD Comedies",
            "Flowers Comedy",
            "AskDoctorJo",
            "Dr Pal",
            "மருந்தில்லா மருத்துவம்",
            "Natural Cures",
            "WeShape",
            "Yoga with Urmi Pandya",
            "Fit Tuber Hindi",
            "The Yoga Institute",
            "Tamil 4 Health",
            "BodyWisdom",
            "GET FIT JANANI",
            "Lakshmi andiappan yoga",
            "Keerthi History",
            "Naveen Research Tamil",
            "Mr. Macintosh",
            "BKRahulHealingMeditation",
            "Tamil Motivation Life History",
            "Motivation Ark",
            "Tamil cinema",
            "Rajshri Tamil",
            "Tamil Movies",
            "Ilaiyaraaja Official",
            "RagamalikaTV",
            "Shweta Mohan",
            "Veena Music",
            "Sudha Ragunathan",
            "ISRO Official",
            "Narendra Modi",
            "String",
            "Chanakyaa",
            "Tnnews24 digital",
            "Oneindia Tamil",
            "Pesu Tamizha Pesu",
            "Cauvery News",
            "BBC News Tamil",
            "Doordarshan Podhigai",
            "The Economic Times",
            "DD Podhigai News ",
            "Awesome Open Source",
            "It's FOSS - Linux Portal",
            "🔥Annamalai I.P.S. leader🔥",
            "Arasiyal Sadhurangam",
            "Ali Abdaal",
            "ProgrammingKnowledge",
            "Coding with Lewis",
            "Josh tried coding",
            "Janakiram MSV",
            "Microsoft Power Platform",
            "Noise and Grains",
            "Net Ninja",
            "TechWithRita",
            "Souvik Biswas",
            "Codepur",
            "Sindre Sorhus",
            "HTML All The Things",
            "PWA Summit",
            "Scott Hanselman",
            "Modern Web",
            "Created Tech",
            "CS in Tamil",
            "CodeTime",
            "Swift Guy",
            "Tailwind Labs",
            "Women of React Conference",
            "React Native School",
            "TechWorld with Nana",
            "Ali Spittel",
            "Programming Line",
            "Coder Coder",
            "Marques Brownlee",
            "Loud Oli Tech",
            "GYANMOTI",
            "Engineering Facts",
            "Vox",
            "Real Engineering",
            "Farming Engineer",
            "Simon Sinek",
            "Without Makeup with Vishwa",
            "Awakening TV",
            "Yoga With Adriene",
            "BK Dr. Damini",
            "Strumm Spiritual",
            "Sounds of Isha",
            "Uthara Unnikrishnan - Topic",
            "Sivasri Skandaprasad",
            "Kuldeep M Pai",
            "Rahul Vellal",
            "Sharanya Srinivas Official",
            "Gaiea Sanskrit",
            "Mahatria Tamil",
            "Sadhguru",
            "Sadhguru Tamil",
            "Azhaikkiran Madhavan",
            "Eppo Varuvaro",
            "Sky Vethathriya Treasures by Rajalakshmi Suthakar",
            "BK Aditi",
            "Precious Treasures",
            "Sri Ramakrishna Math Chennai",
            "Shemaroo Spiritual Life",
            "Wisdom of Sages",
            "VivekaVani",
            "Beyond The Ordinary - Tamil Audiobooks",
            "Linus Tech Tips",
            "daily dev",
            "freeCodeCamp.org",
            "Chris Titus Tech",
            "Appwrite",
            "Flutter Explained",
            "Apple Explained",
            "ChatGPT Tutorials",
            "Tamil Trekker",
            "Japan Tamil Bros",
            "Chennai Girl In London",
          ];
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
                          style: { maxHeight: "100px", overflow: "scroll" },
                          children: channels.map((ch) => {
                            const item = Object(a.jsx)("button", {
                              className: "HTbuttons",
                              value: ch,
                              type: "Submit",
                              onClick: this.clickHandler,
                              children: ch,
                            });
                            return item;
                          }),
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
