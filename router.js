const ytdl = require("ytdl-core");
const express = require("express");
const router = express.Router();
const {
  IGStalk,
  KBBI,
  Lirik,
  Cuaca,
  IG,
  FB,
  IpLookup,
  Tiktok,
  Vokal,
  Headers,
  Covid,
  Simi,
  Github,
  Shortlink,
  WPUser,
  Emoji,
  Joox,
  ArtiNama,
  ArtiMimpi
} = require("./lib");

const respon = {
  param: {
    status: 400,
    message: "parameter wajib di isi!"
  }
};

router.get("/", async (req, res) => {
  res.redirect("https://www.apimau.ga");
});

router.get("/igs", async (req, res) => {
  var url = req.query.u || req.query.username;
  if (!url) return res.json(respon.param);
  IGStalk(url)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/kbbi", async (req, res) => {
  const kata = req.query.text || req.query.q;
  if (!kata) return res.json(respon.param);
  KBBI(kata)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/lirik", async (req, res) => {
  const musik = req.query.q || req.query.lagu || req.query.musik;
  if (!musik) return res.json(respon.param);
  Lirik(musik)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/ytmp3", async (req, res) => {
  var id = req.query.url || req.query.link;
  if (!id) return res.json(respon.param);
  if (id.includes("youtube")) {
    urls = id;
    var r,
      rx = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
    r = urls.match(rx);
    id = r[1];
  }
  res.header("Content-Disposition", `attachment; filename="audio.mp3"`);
  ytdl(id, {
    format: "mp3",
    filter: "audioonly"
  }).pipe(res);
});

router.get("/ytmp4", async (req, res) => {
  var id = req.query.url || req.query.link;
  if (!id) return res.json(respon.param);
  if (id.includes("youtube")) {
    urls = id;
    var r,
      rx = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
    r = urls.match(rx);
    id = r[1];
  }
  res.header("Content-Disposition", `attachment; filename="video.mp4"`);
  ytdl(id, {
    format: "mp4"
  }).pipe(res);
});

router.get("/cuaca", async (req, res) => {
  var lokasi = req.query.kota || req.query.q;
  if (!lokasi) return res.json(respon.param);
  Cuaca(lokasi)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/ig", async (req, res) => {
  var url = req.query.url || req.query.link;
  if (!url) return res.json(respon.param);
  IG(url)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/fb", async (req, res) => {
  var url = req.query.url || req.query.link;
  if (!url) return res.json(respon.param);
  FB(url)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/iplookup", async (req, res) => {
  const ip = req.query.ip;
  if (!ip) return res.json(respon.param);
  IpLookup(ip)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/tiktok", async (req, res) => {
  const url = req.query.url || req.query.link;
  if (!url) return res.json(respon.param);
  Tiktok(url)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/vokal", async (req, res) => {
  const vokal = req.query.vokal;
  const teks = req.query.teks;
  if (!vokal && !teks) return res.json(respon.param);
  Vokal(vokal, teks)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/http-headers", async (req, res) => {
  const url = req.query.url || req.query.link;
  if (!url) return res.json(respon.param);
  Headers(url)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/covid", async (req, res) => {
  var la = req.query.la;
  var lo = req.query.lo;
  if (!la && !lo) return res.json(respon.param);
  Covid(la, lo)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/simi", async (req, res) => {
  const teks = req.query.teks || req.query.text;
  if (!teks) return res.json(respon.param);
  Simi(teks)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/github", async (req, res) => {
  const user = req.query.user || req.query.u;
  if (!user) return res.json(respon.param);
  Github(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/shortlink", async (req, res) => {
  const url = req.query.url || req.query.link;
  if (!url) return res.json(respon.param);
  Shortlink(url)
    .then((ress) => {
      res.send(ress);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/wpusers", async (req, res) => {
  var url = req.query.link || req.query.url;
  if (!url) return res.json(respon.param);
  WPUser(url)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/emoji", async (req, res) => {
  const ekode = req.query.q || req.query.kode;
  if (!ekode) return res.json(respon.param);
  res.header("Content-Disposition", `attachment; filename="${ekode}.png"`);
  Emoji(ekode)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
});

router.get("/joox", async (req, res) => {
  var query = req.query.q;
  if (!query) return res.json(respon.param);
  Joox(query)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
});

router.get("/artimimpi", async (req, res) => {
  var mimpi = req.query.q;
  if (!mimpi) return res.json(respon.param);
  ArtiMimpi(mimpi)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
});

router.get("/artinama", async (req, res) => {
  var nama = req.query.q;
  if (!nama) return res.json(respon.param);
  ArtiNama(nama)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
});

module.exports = router;
