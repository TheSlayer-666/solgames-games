/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
function addEnding(score) {
  if (!document.getElementById("score").classList.contains("end")) {
    document.getElementById("score").innerText = score;
    document.getElementById("score").classList = "end";
    document.getElementById("pause").classList = "pause";
  }
}
function _L(t) {
  const i = {};
  return (
    [
      "iy",
      "ix",
      "iw",
      "io",
      "im",
      "iF",
      "iv",
      "iu",
      "it",
      "il",
      "ik",
      "iE",
      "gq",
      "iD",
      "iC",
      "iB",
      "ie",
      "ih",
      "ij",
      "ir",
      "iJ",
      "iI",
      "iA",
      "ig",
      "ip",
      "ii",
      "iz",
      "iq",
      "iG",
    ].forEach((e, h) => (i[e] = t[h])),
    i
  );
}
let R,
  G,
  W,
  P,
  df,
  fp,
  de,
  fo,
  w = window,
  _a = 1,
  bn = parseFloat(localStorage[1]) || 0.5,
  ai = g,
  bX = [];
(_n = (t, i, e) => (i < t ? t : i > e ? e : i)),
  (_K = (t, i, e) => i >= t && i <= e),
  (F = (t, i) => random() * (i - t) + t),
  (bm = (t) => t[~~(random() * t.length)]),
  (_i = (t, i, e, h) => sqrt(pow(t - e, 2) + pow(i - h, 2))),
  (__ = (t, i) => _i(t.x, t.y, i.x, i.y)),
  (_T = (t) => hT(t, PI)),
  (ah = (t, i) => atan2(i.y - t.y, i.x - t.x)),
  (hT = (t, i) => (
    (t %= 2 * i) > i && (t -= 2 * i), t < -i && (t += 2 * i), t
  ));
let fn = Math;
Object.getOwnPropertyNames(fn).forEach((t) => (w[t] = w[t] || fn[t])),
  (_f = 2 * PI);
let aI = CanvasRenderingContext2D.prototype;
(aI.U = function(t) {
  this.save(), t(), this.restore();
}),
  (aI.fr = aI.fillRect),
  (aI.u = function(t) {
    this.fillStyle = t;
  });
class hS {
  constructor(t) {
    (this._m = t._m),
      (this.v = t.v),
      [_u, M, bl, aH, _S, bX].forEach((t) => t.splice(0, t.length));
  }
  Y(t) {
    P.Y(t), _u.forEach((i) => i.Y(t));
  }
  fl(t, i, e, h, s) {
    if (!(_i(t, i, P.x, P.y) > 1600))
      for (let a = 0; a < h; a++) {
        let h = max(0.2, (0.5 + e / 100) / F(0.4, 0.7)),
          a = 100 * F(0.01, 0.03),
          r = ((e + 50) / 100) * 50,
          o = { _M: 1, hY: a, hX: a, _q: s() };
        M.push(o),
          X(o, "x", t, t + F(-1, 1) * r, h),
          X(o, "y", i, i + F(-1, 1) * r, h),
          X(o, "z", e, -50, h, 0, hQ),
          X(o, "f", 0, 0, h + 0.5, 0, 0, () => J(M, o));
      }
  }
}
(hP = (t, i) => {
  let e = [],
    h = i.getImageData(0, 0, t.width, t.height);
  for (let i = 0; i < t.height; i++) {
    e.push([]);
    for (let s = 0; s < t.width; s++)
      (e[i][s] = h.data[i * t.width * 4 + 4 * s] > 128),
        (h.data[i * t.width * 4 + 4 * s] = 255 * e[i][s]),
        (h.data[i * t.width * 4 + 4 * s + 1] = 255 * e[i][s]),
        (h.data[i * t.width * 4 + 4 * s + 2] = 255 * e[i][s]),
        (h.data[i * t.width * 4 + 4 * s + 3] = 255 * e[i][s]);
  }
  return (
    i.putImageData(h, 0, 0),
    (i.globalCompositeOperation = "source-atop"),
    i.u("#048"),
    i.fr(0, 0, t.width, t.height),
    { _m: e, v: t }
  );
}),
  (hO = () =>
    I(50, 50, (t, i) => {
      t.u("#fff"),
        (fj = (e, h, s, a) => {
          let r = _i(e, h, s, a);
          (t.strokeStyle = "#000"), (t.lineWidth = 2);
          let o = e,
            l = h;
          for (let n = 0; n <= r; n += 5) {
            let f = n / r,
              _ = _n(0, e + (s - e) * f + F(-0.1, 0.1) * r, i.width),
              c = _n(0, h + (a - h) * f + F(-0.1, 0.1) * r, i.height);
            t.beginPath(),
              t.moveTo(o, l),
              t.lineTo(_, c),
              t.stroke(),
              (o = _),
              (l = c);
          }
        }),
        t.fr(0, 0, i.width, i.height),
        t.clearRect(4, 4, 3, 3);
      for (let t = 5; t < i.width; t += 5)
        fj(t, 5, t, i.height - 5), fj(5, t, i.height - 5, t);
      return (
        t.fr(0, 0, i.width, 1),
        t.fr(0, 0, 1, i.height),
        t.fr(0, i.height - 1, i.width, 1),
        t.fr(i.width - 1, 0, 1, i.height),
        t.u("#000"),
        t.beginPath(),
        t.arc(25, 25, 4, 0, _f),
        t.fill(),
        hP(i, t)
      );
    }));
class hN {
  constructor(t, i, e, h, s, a, r, o, l) {
    (this.x = t),
      (this.y = i),
      (this.z = e),
      (this._J = h),
      (this.g = s),
      (this._c = a),
      (this.bW = r),
      (this._s = o),
      (this.af = l),
      (this.bk = G.C),
      (this.hM = P.z),
      M.push(
        (this._ = {
          x: this.x,
          y: this.y,
          z: this.z,
          hY: this._s,
          hX: this._s,
          _q: (r[0], "#ff0"),
        })
      ),
      _u.push(this);
  }
  Y(t) {
    let i = t;
    for (; i > 0 && !this.bV; ) {
      let t = min(i, 20 / this._J);
      (i -= t), this.hK(t), 0;
    }
    (this._.x = this.x), (this._.y = this.y), (this._.z = this.z);
  }
  hK(t) {
    let i = this.x,
      e = this.y;
    if (
      ((this.x += cos(this.g) * this._J * t),
      (this.y += sin(this.g) * this._J * t),
      (this.z -= sin(this._c) * this._J * t),
      ((dc(this.x, this.y, 0) && this.z < 50) ||
        this.z < -50 ||
        G.C - this.bk > 3) &&
        this.J(i, e),
      this.bW.forEach((t) => {
        __(t, this) < t.O &&
          abs(t.z - this.z) < t.O &&
          (this.J(i, e, t), t.ae(this, 0.2, this.g));
      }),
      __(this, P) < 1600)
    ) {
      let t = {
        x: this.x,
        y: this.y,
        z: this.z,
        _M: 1,
        hY: this._s,
        hX: this._s,
        _q: this.bW[0] == P ? "#f00" : "#fff",
      };
      M.push(t),
        X(t, "_M", 1, 0, 0.8, 0, 0, () => J(M, t)),
        X(t, "x", t.x, t.x + F(-5, 5), 0.8),
        X(t, "y", t.y, t.y + F(-5, 5), 0.8),
        X(t, "z", t.z, t.z + F(-5, 5), 0.8);
    }
  }
  J(t, i, e) {
    J(_u, this), J(M, this._);
    let h = this.bW[0] == P,
      s = e && e != P;
    if (this.af && (ff(t, i, this.z), !h)) {
      let h = hJ(t, i, this.z, 50);
      h > 1 && G._e._R("EXPLOSION COMBO X" + h, 50 * h),
        (s = s || h),
        e && G._e._R("DIRECT ROCKET HIT", 50);
    }
    !h &&
      this.hM &&
      e &&
      !e.fe.has(this.bk) &&
      (G._e._R("JUMPSHOT", 10), e.fe.add(this.bk)),
      e || W.fl(t, i, this.z, 2, () => "#ff0"),
      (this.bV = 1);
  }
}
(hJ = (t, i, e, h) => {
  let s = 0;
  return (
    [P].concat(aH).forEach((a) => {
      let r = _i(a.x, a.y, t, i),
        o = 0.9 * (1 - min(1, r / 200));
      o > 0 &&
        abs(e - a.z) < h &&
        (a.ae({ x: t, y: i, z: e }, o, atan2(a.y - i, a.x - t)), a != P && s++);
    }),
    bT(t, i, e, h),
    hI(),
    s
  );
}),
  (bT = (t, i, e, h) => {
    if (!(_i(t, i, P.x, P.y) > 1600)) {
      for (let s = 0; s < 3; s++) {
        let s = F(0.2, 0.4),
          a = {
            x: t + 0.5 * h * F(-1, 1),
            y: i + 0.5 * h * F(-1, 1),
            z: e + 0.5 * h * F(-1, 1),
            _M: 1,
            _: hH,
          };
        M.push(a),
          X(a, "_M", 1, 0, 0.2, s - 0.2, 0, () => J(M, a)),
          X(a, "hY", 0, 2 * h, s),
          X(a, "hX", 0, 2 * h, s);
      }
      for (let s = 0; s < 50; s++) {
        let s = random() * _f,
          a = (F(-1, 1) * PI) / 2,
          r = F(0.2, 0.8) * h,
          o = 0.8 * h,
          l = F(0.2, 0.6),
          n = F(10, 20),
          f = {
            x: t + cos(s) * r * cos(a),
            y: i + sin(s) * r * cos(a),
            z: e + sin(a) * r,
            _M: 1,
            hY: n,
            hX: n,
            _q: bm(["#ff0", "#f00", "#f80"]),
          };
        M.push(f),
          X(f, "_M", 1, 0, l, 0, 0, () => J(M, f)),
          X(f, "x", f.x, f.x + cos(s) * o * cos(a), l),
          X(f, "y", f.y, f.y + sin(s) * o * cos(a), l),
          X(f, "z", f.z, f.z + sin(a) * o, l);
      }
    }
  });
class hG {
  constructor(t, i, e) {
    (this.x = t),
      (this.y = i),
      (this.z = 0),
      (this.fd = G.C + e),
      _u.push(this),
      _S.push(this),
      M.push((this._ = { hY: 12, hX: 20, _: fc[0] }));
  }
  Y(t) {
    if (
      ((this._.x = this.x),
      (this._.y = this.y),
      (this._.z = this.z + 10),
      (this._._ = fc[~~(((G.C + this.fd) % 0.5) / 0.25)]),
      G.C > this.fd && this.J(),
      __(this, P) < P.O && abs(this.z - (P.z - 25)) < 50 && G.C - P.d$ > 0.1)
    ) {
      let i = (G.C - P.d$ > 0.1) * t * 1;
      P.ae(this, i, ah(this, P)), i && (P.d$ = G.C);
    }
  }
  J() {
    J(_u, this), J(_S, this), J(M, this._);
  }
}
ff = (t, i, e, h = 3) => {
  for (let s = 0; s < 5; s++) {
    let s = new hG(t + 50 * F(-1, 1), i + 50 * F(-1, 1), h + F(0, 0.3)),
      a = -50;
    X(s, "z", e, a, abs(a - e) / (100 * F(2, 2.5)) || 0.1);
  }
};
class aC {
  constructor(t) {
    (this.B = t),
      (this._Q = -9),
      (this._H = 0.1),
      (this.bS = 1),
      (this._G = 0),
      (this._s = 0.5),
      (this.ac = 1600),
      (this.aB = 1 / 30),
      (this.cZ = 1),
      (this.bk = G.C),
      (this.af = 0);
  }
  Y(t) {}
  bR() {
    G.C - this._Q > this._H &&
      this.B.L > 0 &&
      ((this._Q = G.C), this.bg(), this.aA && this.aA());
  }
  hE() {
    (this.fa = 1), this.bR();
  }
  hD() {
    this.fa = 0;
  }
  bg() {
    (this.cZ = max(0, this.cZ - this.aB)) || this.B.az(new f_(this.B));
    for (let t = 0; t < this.bS; t++)
      new hN(
        this.B.x + 100 * cos(this.B.g) * 0.1,
        this.B.y + 100 * sin(this.B.g) * 0.1,
        this.B.bf() - 10,
        this.ac,
        this.B.f$() + F(-1, 1) * this._G,
        this.B.eZ() + F(-1, 1) * this._G,
        this.B.eY,
        this._s,
        this.af
      );
    this.B == P && cY("#444");
  }
}
class hC extends aC {
  constructor(t) {
    super(t),
      (this._H = 0.5),
      (this._s = 5),
      (this._ = hB),
      (this.ac = 2e3),
      (this.af = 1),
      (this.aA = hA);
  }
}
class hz extends aC {
  constructor(t) {
    super(t),
      (this._H = 0.3),
      (this._G = PI / 64),
      (this.bS = 5),
      (this._ = hy),
      (this.ac = 3e3),
      (this.aA = () => {
        for (let t = 5; --t; ) bQ();
      });
  }
}
class hx extends aC {
  constructor(t) {
    super(t),
      (this._H = 0.1),
      (this._G = PI / 256),
      (this._ = hw),
      (this.ac = 3e3),
      (this.aB = 0.02),
      (this.aA = bQ);
  }
  Y(t) {
    super.Y(t), this.fa && this.bR();
  }
}
class f_ extends aC {
  constructor(t) {
    super(t),
      (this._H = 0.1),
      (this._G = PI / 512),
      (this._ = hv),
      (this.ac = 3e3),
      (this.aB = 0),
      (this.aA = bQ);
  }
}
class hu extends aC {
  constructor(t) {
    super(t),
      (this._H = 1),
      (this.bS = 7),
      (this._ = ht),
      (this.ac = 5e3),
      (this.aA = () => {
        for (let t = 5; --t; ) bQ();
      }),
      (this.aB = 0.15),
      (this.hs = "#f0f");
  }
}
class cX extends aC {
  constructor(t) {
    super(t), (this.hs = "#f00"), (this.aB = 0), (this.ac = 500);
  }
  Y(t) {
    super.Y(t), this.B.ab && this.bR();
  }
  bg() {
    abs(_T(P.g - ah(this.B, P))) < PI / 2 || random() < 0.5
      ? super.bg()
      : (this._Q = G.C);
  }
}
class hr extends cX {
  constructor(t) {
    super(t), (this.bS = 5), (this._G = PI / 64), (this._H = 3), (this._s = 4);
  }
}
class hq extends cX {
  constructor(t) {
    super(t),
      (this._G = PI / 512),
      (this._G = 0),
      (this._H = 0.1),
      (this._s = 4),
      (this.hp = 0);
  }
  bg() {
    super.bg(), ++this.hp % 10 || (this._Q += 4);
  }
}
class ho extends cX {
  constructor(t) {
    super(t),
      (this._G = PI / 512),
      (this._H = 3),
      (this._s = 10),
      (this.af = 1);
  }
}
class eX {
  constructor(t) {
    (this.z = -25),
      M.push(
        (this._ = {
          z: -25,
          hY: 30,
          hX: ((t.height / t.width) * 60) / 2,
          _: t,
        })
      ),
      _u.push(this),
      bl.push(this),
      _S.push(this),
      M.push(
        (this.aa = { x: this.x, y: this.y, z: -50, hY: 30, hX: 8, _: eW })
      );
  }
  enabled() {
    return 1;
  }
  Y() {
    (this._.x = this.x),
      (this._.y = this.y),
      (this._.z = this.z + 2 * sin((G.C * PI * 2) / 2)),
      (this.aa.x = this.x + cos(P.g)),
      (this.aa.y = this.y + sin(P.g)),
      this.enabled() &&
        __(this, P) < 60 &&
        (this.eV(), this.J(), (P.cW = G.C), cY("#440"));
  }
  J() {
    J(_u, this), J(bl, this), J(_S, this), J(M, this._), J(M, this.aa), hn();
  }
}
class hm extends eX {
  constructor() {
    super(hl);
  }
  eV() {
    P.az(new (bm([hC, hz, hx, hu].filter((t) => P.N.constructor != t)))(P));
  }
}
class hk extends eX {
  constructor() {
    super(hj);
  }
  eV() {
    P.L = min(1, P.L + 0.5);
  }
  enabled() {
    return P.L < 1;
  }
}
class eU {
  constructor() {
    (this.x = this.y = this.z = 0),
      (this.ay = -1),
      (this.L = 1),
      (this.g = PI / 4),
      (this._c = 0);
  }
  az(t) {
    this.N = t;
  }
  Y(t) {
    this.N && this.N.Y(t);
  }
  moveBy(t, i) {
    (this.x += t),
      dc(this.x, this.y, this._F || this.O) &&
        this.z < 50 &&
        ((this.x -= t), (this._x = 0)),
      (this.y += i),
      dc(this.x, this.y, this._F || this.O) &&
        this.z < 50 &&
        ((this.y -= i), (this._w = 0));
  }
  eT() {
    return "#f00";
  }
  ae(t, i) {
    this.L &&
      i > 0 &&
      !G.ax &&
      ((this.ay = (i > 0) * G.C),
      (this.L = max(0, this.L - i)),
      this.L || this.be(),
      W.fl(
        this.x + (F(-1, 1) * this.O) / 2,
        this.y + (F(-1, 1) * this.O) / 2,
        this.z,
        30 * !this.L + 10,
        () => this.eT()
      ),
      hi());
  }
  be() {}
  bf() {
    return this.z;
  }
  f$() {
    return this.g;
  }
  eZ() {
    return this._c;
  }
}
class eS extends eU {
  constructor() {
    super();
    let t = bm([
      { eR: hh, z: -50 },
      { eR: hg, z: -50 },
      { eR: hf, z: 100 * F(1.5, 2.5) },
    ]);
    (this.fe = new Set()),
      (this.bd = t.eR[0]),
      (this.eQ = t.eR[1]),
      (this.eP = t.eR[2]),
      (this.width = 0.3 * this.bd.width),
      (this.height = 0.3 * this.bd.height),
      (this.z = t.z + (0.3 * this.bd.height) / 2),
      M.push(
        (this._ = {
          x: this.x,
          y: this.y,
          z: this.z,
          hY: this.width,
          hX: this.height,
          _: this.iO,
        })
      ),
      _u.push(this),
      aH.push(this),
      _S.push(this),
      M.push(
        (this.aa = {
          x: this.x,
          y: this.y,
          z: -50,
          hY: this.width / 2,
          hX: this.height / 8,
          _: eW,
        })
      ),
      (this.eY = [P]),
      (this.eO = 0),
      (this.O = 0.6 * this.width),
      (this._F = 25),
      this.az(new (bm([ho, hq, hr]))(this));
  }
  eT() {
    return bm(["#111", "#333", "#222", "#ff0", "#f80"]);
  }
  az(t) {
    super.az(t), (t.aB = 0);
  }
  Y(t) {
    if ((super.Y(t), G.C >= this.eO || __(this, this._I) < 10)) {
      this.ab || (this.N._Q = G.C + F(1, 2)),
        (this.ab = __(P, this) < 500 && P.L);
      let t = this.ab ? P : this;
      (this._I = {
        x: _n(0, t.x + 100 * F(-1, 1) * 4, 100 * W._m[0].length),
        y: _n(0, t.y + 100 * F(-1, 1) * 4, 100 * W._m.length),
      }),
        (this.eO = G.C + 2),
        (this.ab = __(P, this) < 800);
    }
    let i = _T(ah(this, this._I) - this.g);
    this.g += _n((-t * PI) / 4, i, (t * PI) / 4);
    let e = this.ab ? 200 : 100;
    if (
      (this.moveBy(cos(this.g) * t * e, sin(this.g) * t * e),
      (this._.x = this.x),
      (this._.y = this.y),
      (this._.z = this.z),
      (this.aa.x = this.x + cos(P.g)),
      (this.aa.y = this.y + sin(P.g)),
      __(this, P) < this._F + P._F && this.z - P.z < this.height / 2 && P.L)
    ) {
      let t = ah(this, P),
        i = this.x + cos(t) * (this._F + P._F),
        e = this.y + sin(t) * (this._F + P._F);
      P.moveBy(i - P.x, e - P.y);
    }
    this._._ = G.C - this.ay < 0.05 ? this.eP : this.ab ? this.eQ : this.bd;
  }
  be() {
    super.be(), J(_u, this), J(M, this.aa), J(aH, this), J(_S, this);
    let t = abs(-25 - this.z) / 100;
    X(this._, "z", this.z, (0.3 * this.bd.height) / 2 - 50, t),
      X(this._, "f", 0, 0, 0, t + 0.5, 0, () => {
        J(M, this._), bT(this.x, this.y, -50, 50);
      }),
      ff(this.x, this.y, -50, 0.5),
      (this._._ = this.eP),
      G._e._R("ROBOT PWNED", 10),
      G.C - G._e.eM < 4 && ++G._e.bO > 1
        ? G._e._R("COMBO X" + G._e.bO, 50 * G._e.bO)
        : (G._e.bO = 1),
      (G._e.eM = G.C),
      P.L < 0.3 && G._e._R("NEAR DEATH", 50),
      _K(0.1, G.C - this.eL, 0.7) && G._e._R("QUICK KILL", 50);
  }
  ae(t, i, e) {
    super.ae(t, i, e), (P.eK = G.C), (this.ab = 1), (this.eL = this.eL || G.C);
  }
  f$() {
    return ah(this, P);
  }
  eZ() {
    return atan2(-(P.z - this.z), __(this, P));
  }
}
class hc extends eU {
  constructor() {
    super(),
      (this._x = this._w = 0),
      (this.x = 550),
      (this.y = 550),
      (this.cV = 0),
      (this.iN = 0),
      (this.bc = 0),
      (this.a$ = 0),
      (this.eJ = -1),
      (this.eK = -1),
      (this.cW = -1),
      (this.d$ = -1),
      (this.eY = aH),
      (this.O = 50),
      (this._F = 20),
      (this.iM = 0);
  }
  Y(t) {
    if (!this.L) return;
    super.Y(t);
    let i = this.z;
    (this.g = _T(this.g)), (this._c = _n(-PI / 4, this._c, PI / 4));
    let e = !!w._b[87] + !!w._b[90] + !!w._b[38] - !!w._b[83] - !!w._b[40],
      h = !!w._b[68] + !!w._b[39] - !!w._b[65] - !!w._b[37] - !!w._b[81];
    if ((!e && !h) || G.iL) {
      if (!this.z) {
        let i = atan2(this._w, this._x),
          e = _i(0, 0, this._x, this._w),
          h = max(0, e - 3e3 * t);
        (this._x = cos(i) * h), (this._w = sin(i) * h);
      }
    } else {
      let i = 450 * (0.5 * !!this.z + 1),
        s = atan2(h, e) + this.g,
        a = i * cos(s),
        r = i * sin(s),
        o = 1 - abs(0.7 * !!this.z),
        l = this._x + o * _n(3e3 * -t, a - this._x, 3e3 * t) * abs(cos(s)),
        n = this._w + o * _n(3e3 * -t, r - this._w, 3e3 * t) * abs(sin(s)),
        f = min(i, _i(0, 0, l, n)),
        _ = atan2(n, l);
      (this._x = cos(_) * f), (this._w = sin(_) * f);
    }
    this.moveBy(this._x * t, this._w * t),
      (this.bc +=
        (1 - 0.5 * !!this.z) * (_i(0, 0, this._x, this._w) / 450) * t),
      (this.cV -= (400 * t) / 0.25 / 0.9),
      (this.z = _n(0, this.z + this.cV * t, 50)),
      !this.z && i && (this.eJ = G.C),
      w._b[32] && this.gZ();
    let s = ((!!w._b[65] - !!w._b[68]) * PI) / 100;
    this.a$ = this.a$ + _n((-t * PI) / 8, s - this.a$, (t * PI) / 8);
  }
  gZ() {
    this.z || _a || ((this.cV = 400), (this._x *= 1.5), (this._w *= 1.5));
  }
  bf() {
    return this.L
      ? this.z + 10 * this.eD() + !this.z * (3 * sin(this.bc * PI * 2 * 2))
      : -25;
  }
  eD() {
    return -sin(min(1, (G.C - this.eJ) / 0.3) * PI);
  }
  a$() {
    return ((!!w._b[65] - !!w._b[68]) * PI) / 128;
  }
  be() {
    super.be(),
      (this._c = 0),
      (this.a$ = 0),
      document.exitPointerLock(),
      setTimeout(G.eC, 5e3);
  }
  ae(t, i, e) {
    super.ae(t, 0.3 * i, e);
    let h = { g: e, _M: 1 };
    bX.push(h), X(h, "_M", 1, 0, 1, 0, 0, () => J(bX, h)), cY("#400");
  }
}
(onresize = () => {
  var i,
    e,
    h = innerWidth,
    s = innerHeight,
    a = h / s,
    r = 800 / 600,
    o = t.style;
  a <= r ? (e = (i = h) / r) : (i = (e = s) * r),
    (o.width = i + "px"),
    (o.height = e + "px");
}),
  (gW = (t, i, e, h) => (t / h) * e + i),
  (hQ = (t, i, e, h) =>
    (t /= h) < 1 / 2.75
      ? e * (7.5625 * t * t) + i
      : t < 2 / 2.75
      ? e * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + i
      : t < 2.5 / 2.75
      ? e * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + i
      : e * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + i),
  (gV = (t, i, e, h) => e * (t /= h) * t * t + i),
  (X = (t, i, e, h, s, a, r, o) => {
    var l = {
      o: t,
      p: i,
      a: e,
      b: h,
      d: s,
      l: a || 0,
      f: r || gW,
      e: o || (() => 0),
      t: 0,
      Y: (t) => {
        if (l.l > 0) (l.l -= t), (l.o[l.p] = l.a);
        else if (
          ((l.t = min(l.d, l.t + t)),
          (l.o[l.p] = l.f(l.t, l.a, l.b - l.a, l.d)),
          l.t == l.d)
        ) {
          l.e();
          let t = bM.indexOf(l);
          t >= 0 && bM.splice(t, 1);
        }
      },
    };
    bM.push(l);
  }),
  (bM = []),
  (gU = (t, i, e, h) => {
    let s,
      a = gT(t, i, e, h),
      r = gS(t, i, e, h);
    if (a)
      if (r) {
        s = _i(t, i, a.x, a.y) < _i(t, i, r.x, r.y) ? a : r;
      } else s = a;
    else s = r;
    return (
      _i(t, i, s.x, s.y) > h && (s = { x: t + cos(e) * h, y: i + sin(e) * h }),
      s
    );
  }),
  (gT = (t, i, e, h) => {
    var s = sin(e) > 0,
      a = 100 * ~~(i / 100) + (s ? 100 : -1e-4),
      r = t + (a - i) / tan(e),
      o = s ? 100 : -100,
      l = o / tan(e);
    return ey(r, a, l, o, 1, h);
  }),
  (gS = (t, i, e, h) => {
    var s = cos(e) > 0,
      a = 100 * ~~(t / 100) + (s ? 100 : -1e-4),
      r = i + (a - t) * tan(e),
      o = s ? 100 : -100,
      l = o * tan(e);
    return ey(a, r, o, l, 0, h);
  }),
  (ey = (t, i, e, h, s, a) => {
    let r = t,
      o = i;
    for (let l = 0; _i(r, o, t, i) < a; l++) {
      if (at(r, o)) {
        let t = ~~(r / 100) + ~~(o / 100) * W._m.length;
        return { x: r, y: o, b$: s + "-" + t, as: t };
      }
      if (ev(r, o)) break;
      (r += e), (o += h);
    }
    return { x: r, y: o, b$: "" };
  }),
  (dc = (t, i, e = 0) =>
    at(t, i) || at(t + e, i) || at(t - e, i) || at(t, i - e) || at(t, i + e)),
  (at = (t, i) => !ev(t, i) && W._m[~~(i / 100)][~~(t / 100)]),
  (ev = (t, i) =>
    !_K(0, t, 100 * W._m[0].length - 1) || !_K(0, i, 100 * W._m.length - 1)),
  (J = (t, i) => {
    let e = t.indexOf(i);
    e >= 0 && t.splice(e, 1);
  });
let I = (t, i, e) => {
    let h = document.createElement("canvas");
    return (h.width = t), (h.height = i), e(h.getContext("2d"), h) || h;
  },
  et = (t, i, e) => {
    let h = I(t, i, e);
    return h.getContext("2d").createPattern(h, "repeat");
  };
(_p = (t, i) => {
  let e = I(t.width / i, t.height / i, (i, e) => {
    (i.imageSmoothingEnabled = 0), i.drawImage(t, 0, 0, e.width, e.height);
  });
  return I(t.width, t.height, (t, i) => {
    (t.imageSmoothingEnabled = 0), t.drawImage(e, 0, 0, i.width, i.height);
  });
}),
  (eq = (t, i) =>
    I(t.width, t.height, (e) => {
      e.drawImage(t, 0, 0),
        (e.globalCompositeOperation = "source-atop"),
        e.u(i),
        e.fr(0, 0, t.width, t.height);
    })),
  (bL = (t, i, e) =>
    I(t.width, t.height, (h) => {
      h.drawImage(t, 0, 0), (h.globalCompositeOperation = "source-atop");
      for (let s = 0; s < t.width; s += i)
        for (let a = 0; a < t.height; a += i) h.u(e()), h.fr(s, a, i, i);
    })),
  (gO = (t, i, e) =>
    I(t.width, t.height, (h) => {
      h.translate(t.width * (0.5 - 0.5 * i), t.height * (0.5 - 0.5 * e)),
        h.scale(i, e),
        h.drawImage(t, 0, 0);
    })),
  (gN = (t) =>
    I(120, 200, (i) => {
      (i.strokeStyle = "#000"),
        (i.lineWidth = 5),
        i.u("#333"),
        i.beginPath(),
        i.arc(60, 60, 60, PI, 0),
        i.fill(),
        i.stroke(),
        i.u("#111"),
        i.beginPath(),
        i.moveTo(0, 60),
        i.lineTo(120, 60),
        i.lineTo(100, 170),
        i.lineTo(20, 170),
        i.closePath(),
        i.fill(),
        i.stroke(),
        i.u("#333"),
        i.fr(42, 170, 36, 30),
        i.strokeRect(42, 170, 36, 30),
        i.u(t),
        i.fr(50, 15, 20, 10);
    })),
  (gM = (t) =>
    I(100, 110, (i) => {
      i.u("#111"),
        i.beginPath(),
        i.arc(20, 20, 20, PI, -PI / 2),
        i.arc(80, 20, 20, -PI / 2, 0),
        i.arc(80, 70, 20, 0, PI / 2),
        i.arc(20, 70, 20, PI / 2, PI),
        i.fill(),
        i.u("#333"),
        i.beginPath(),
        i.arc(30, 30, 20, PI, -PI / 2),
        i.arc(70, 30, 20, -PI / 2, 0),
        i.arc(70, 60, 20, 0, PI / 2),
        i.arc(30, 60, 20, PI / 2, PI),
        i.fill(),
        (i.strokeStyle = "#111"),
        (i.lineWidth = 10),
        i.fr(25, 90, 10, 10),
        i.strokeRect(25, 90, 10, 10),
        i.fr(75, 90, -10, 10),
        i.strokeRect(75, 90, -10, 10),
        i.u("#111"),
        i.fr(25, 25, 20, 20),
        i.fr(75, 25, -20, 20),
        i.u(t),
        i.fr(30, 30, 10, 10),
        i.fr(70, 30, -10, 10);
    })),
  (gL = (t) =>
    I(200, 200, (i) => {
      i.u("#111"),
        i.beginPath(),
        i.arc(100, 100, 100, 0, _f),
        i.fill(),
        i.u("#333"),
        i.beginPath(),
        i.arc(100, 100, 80, 0, _f),
        i.fill(),
        i.u("#111"),
        i.beginPath(),
        i.arc(100, 100, 40, 0, _f),
        i.fill(),
        i.u(t),
        i.beginPath(),
        i.arc(100, 100, 20, 0, _f),
        i.fill();
    })),
  (cQ = (t) => {
    let i = (t) =>
      bL(_p(t, 5), 5, () => "rgba(255,255,255, " + 0.05 * random() + ")");
    return [
      i(t("#0f0")),
      i(t("red")),
      eq(i(t("red")), "rgba(255,255,255,0.5)"),
    ];
  }),
  (hh = cQ(gN)),
  (hg = cQ(gM)),
  (hf = cQ(gL)),
  (eW = _p(
    I(200, 200, (t) => {
      t.u("#000"),
        (t.globalAlpha = 0.5),
        t.beginPath(),
        t.arc(100, 100, 100, 0, _f),
        t.fill();
    }),
    10
  )),
  (cN = _p(
    I(10, 10, (t) => {
      t.u("#fff"), t.beginPath(), t.arc(5, 5, 4.5, 0, _f), t.fill();
    }),
    2
  )),
  (cM = {}),
  (cL = (t) => ((cM[t] = cM[t] || eq(cN, t)), cM[t])),
  (gK = bL(
    I(40, 40, (t) => {
      t.u("#310"),
        t.fr(0, 0, 40, 40),
        t.u("#965"),
        t.fr(0, 20, 40, 1),
        t.u("#531"),
        t.fr(2, 2, 16, 16),
        t.fr(21, 2, 16, 16),
        t.fr(2, 22, 36, 17);
    }),
    1,
    () => "rgba(255,255,255," + F(0.05, 0.1) + ")"
  )),
  (ep = bL(
    I(40, 40, (t) => {
      t.u("#000"),
        t.fr(0, 0, 40, 40),
        (t.globalAlpha = 0.05),
        t.u("#fff"),
        t.fr(0, 0, 40, 1),
        t.fr(19, 0, 2, 40),
        t.fr(0, 19, 40, 2),
        t.fr(0, 39, 40, 1),
        t.fr(39, 0, 1, 40),
        t.fr(0, 0, 1, 40);
    }),
    1,
    () => "rgba(255,255,255," + F(0.05, 0.1) + ")"
  )),
  (cK = () =>
    I(40, 40, (t) => {
      function i() {
        for (let i = 3; i < 17; i += 3)
          for (let e = 3; e < 17; e += 3)
            (t.fillStyle = random() < 0.5 ? "#462" : "#dfb"), t.fr(i, e, 2, 1);
      }
      t.drawImage(ep, 0, 0),
        i(),
        t.translate(20, 0),
        i(),
        t.translate(-20, 20),
        i(),
        t.translate(20, 0),
        i();
    })),
  (eo = [...Array(11)].map((t, i) =>
    i < 6 ? [gK] : i < 10 ? [ep] : [cK(), cK(), cK()]
  )),
  (en = bL(
    I(40, 40, (t, i) => {
      t.u("#000"),
        t.fr(0, 0, 40, 40),
        (t.globalAlpha = 0.1),
        t.u("#fff"),
        t.fr(0, 0, 40, 1),
        t.fr(0, 19, 40, 2),
        t.fr(19, 0, 2, 40),
        t.fr(0, 39, 40, 1),
        t.fr(39, 0, 1, 40),
        t.fr(0, 0, 1, 40);
    }),
    1,
    () => "rgba(255,255,255," + F(0.05, 0.1) + ")"
  )),
  (gJ = I(40, 40, (t, i) => {
    t.drawImage(en, 0, 0), t.u("#000");
    for (let e = 0; e < i.height; e += 2) t.fr(0, e, i.width, 1);
    (t.globalAlpha = 0.1),
      t.u("#fff"),
      t.fr(0, 0, 40, 1),
      t.fr(0, 19, 40, 2),
      t.fr(19, 0, 2, 40),
      t.fr(0, 39, 40, 1),
      t.fr(39, 0, 1, 40),
      t.fr(0, 0, 1, 40);
  })),
  (gI = et(80, 40, (t, i) => {
    (t.imageSmoothingEnabled = 0),
      t.u("#002a50"),
      t.beginPath(),
      t.moveTo(0, 35);
    let e = [
      (t) => (40 * sin((t * _f) / 80)) / 8,
      (t) => (40 * sin((t * _f) / 40)) / 16,
      (t) => (40 * sin((t * _f) / 20)) / 32,
    ];
    for (let i = 0; i <= 80; i += 2)
      t.lineTo(i, e.reduce((t, e) => t + e(i + 10), 10));
    t.lineTo(80, 35), t.fill();
  })),
  (gF = et(15, 15, (t) => {
    t.u("#fff"), (t.globalAlpha = 0.1);
    for (let i = 0; i < 150; i += 15) t.fr(i, 0, 1, 150), t.fr(0, i, 150, 1);
  })),
  (gE = I(1, 1, (t) => {
    let i = t.createRadialGradient(0, 0, 0, 0, 0, 80);
    return (
      i.addColorStop(0, "#fff"), i.addColorStop(1, "rgba(255,255,255, 0)"), i
    );
  })),
  (em = _p(
    I(80, 120, (t) => {
      let i = t.createRadialGradient(40, 84, 0, 40, 84, 40);
      i.addColorStop(0, "#ff0"), i.addColorStop(1, "#f00");
      let e = [];
      for (let t = 0; t <= 1; t += 0.1) {
        let i = 0.5 + 0.2 * sin(t * PI * 3);
        e.unshift({ x: i - t / 2, y: t }), e.push({ x: i + t / 2, y: t });
      }
      t.u(i),
        (t.strokeStyle = "#ff0"),
        (t.lineWidth = 5),
        t.beginPath(),
        e.forEach((i) => t.lineTo(80 * i.x, 120 * i.y)),
        t.stroke(),
        t.fill();
    }),
    10
  )),
  (fc = [em, gO(em, -1, 1)]),
  (hH = _p(
    I(200, 200, (t) => {
      let i = t.createRadialGradient(100, 100, 0, 100, 100, 100);
      i.addColorStop(0, "#fff"),
        i.addColorStop(0.5, "#ff0"),
        i.addColorStop(1, "#f80"),
        t.u(i),
        t.beginPath(),
        t.arc(100, 100, 100, 0, _f),
        t.fill();
    }),
    10
  )),
  (hl = _p(
    I(100, 100, (t) => {
      t.u("#816951"),
        t.beginPath(),
        t.moveTo(0, 100 / 6),
        t.lineTo(50, 100 / 6),
        t.lineTo(50, 100),
        t.lineTo(0, 500 / 6),
        t.fill(),
        t.u("#b09370"),
        t.beginPath(),
        t.moveTo(50, 100 / 3),
        t.lineTo(100, 100 / 6),
        t.lineTo(100, 500 / 6),
        t.lineTo(50, 100),
        t.fill(),
        t.u("#5e503a"),
        t.beginPath(),
        t.moveTo(50, 0),
        t.lineTo(100, 100 / 6),
        t.lineTo(50, 100 / 3),
        t.lineTo(0, 100 / 6),
        t.fill();
    }),
    5
  )),
  (hj = _p(
    I(100, 60, (t) => {
      t.u("#ccc"),
        t.fr(0, 12, 100, 60),
        t.u("#888"),
        t.beginPath(),
        t.moveTo(0, 12),
        t.lineTo(100, 12),
        t.lineTo(80, 0),
        t.lineTo(20, 0),
        t.fill(),
        t.u("#080"),
        t.fr(45, 21, 10, 30),
        t.fr(35, 31, 30, 10);
    }),
    5
  )),
  (hB = _p(
    I(120, 200, (t) => {
      let i = t.createLinearGradient(0, 0, 120, 0);
      i.addColorStop(0.2, "#443"),
        i.addColorStop(0.5, "#676"),
        i.addColorStop(0.8, "#443"),
        t.u(i),
        t.beginPath(),
        t.arc(60, 40, 40, PI, 0, 0),
        t.arc(60, 60, 40, 0, PI, 0),
        t.fill(),
        t.u("#221"),
        t.beginPath(),
        t.arc(60, 60, 40, 0, _f, 0),
        t.fill(),
        t.u(i),
        t.beginPath(),
        t.arc(60, 60, 30, PI, 0, 0),
        t.lineTo(90, 60),
        t.lineTo(110, 200),
        t.lineTo(10, 200),
        t.fill();
    }),
    5
  )),
  (hv = _p(
    I(70, 150, (t) => {
      let i = t.createLinearGradient(0, 0, 70, 0);
      i.addColorStop(0.2, "#000"),
        i.addColorStop(0.5, "#222"),
        i.addColorStop(0.8, "#000"),
        t.u(i),
        t.beginPath(),
        t.arc(35, 25, 20, PI, 0),
        t.arc(35, 80, 35, 0, PI, 1),
        t.fill(),
        t.u("#000"),
        t.fr(32, 40, -10, -5),
        t.fr(38, 40, 10, -5),
        t.fr(32, 0, 6, 10),
        t.beginPath(),
        t.arc(35, 79, 35, PI, 0),
        t.lineTo(70, 150),
        t.lineTo(0, 150),
        t.fill(),
        t.u("#222"),
        t.fr(30, 60, 10, 16),
        t.u("#111"),
        t.fr(0, 80, 5, 100),
        t.fr(65, 80, 5, 100);
    }),
    5
  )),
  (hw = _p(
    I(100, 150, (t) => {
      let i = t.createLinearGradient(0, 0, 100, 0);
      i.addColorStop(0.2, "#000"),
        i.addColorStop(0.5, "#222"),
        i.addColorStop(0.8, "#000"),
        t.u(i),
        t.beginPath(),
        t.arc(50, 30, 20, PI, 0),
        t.lineTo(90, 150),
        t.lineTo(10, 150),
        t.fill(),
        t.u("#000"),
        t.fr(46, 0, 8, 20);
    }),
    5
  )),
  (hy = _p(
    I(165, 150, (t, i) => {
      let e = t.createLinearGradient(0, 0, 82.5, 10);
      e.addColorStop(0, "#765"),
        e.addColorStop(0.7, "#ddd"),
        e.addColorStop(1, "#765");
      let h = () => {
        t.beginPath(),
          t.moveTo(40, 20),
          t.arc(60, 20, 20, PI, 0, 0),
          t.lineTo(80, 150),
          t.lineTo(10, 150),
          t.fill();
      };
      t.u(e), h(), t.translate(165, 0), t.scale(-1, 1), h();
    }),
    5
  )),
  (cJ = _p(
    I(160, 160, (t) => {
      let i = t.createRadialGradient(80, 80, 0, 80, 80, 80);
      i.addColorStop(0, "#fff"),
        i.addColorStop(0.4, "#fff"),
        i.addColorStop(0.6, "#ff0"),
        i.addColorStop(1, "#ff0"),
        t.u(i);
      for (let i = 0; i < 3; i++)
        t.beginPath(),
          t.ellipse(80, 80, 80, 16, (i * PI) / 3, 0, 2 * PI),
          t.fill();
    }),
    5
  )),
  (ht = _p(
    I(80, 160, (t) => {
      let i = t.createLinearGradient(0, 0, 80, 0);
      i.addColorStop(0, "#76f"),
        i.addColorStop(0.5, "#ddf"),
        i.addColorStop(1, "#76f");
      let e = t.createLinearGradient(0, 0, 80, 0);
      e.addColorStop(0, "#f00"),
        e.addColorStop(0.5, "#c0f"),
        e.addColorStop(1, "#f00"),
        t.u(i),
        t.beginPath(),
        t.arc(40, 20, 20, PI, 0),
        t.lineTo(80, 160),
        t.lineTo(0, 160),
        t.fill(),
        t.beginPath(),
        t.u(e),
        t.arc(40, 60, 18, PI, 0),
        t.arc(40, 120, 25, 0, PI, 1),
        t.fill();
    }),
    5
  ));
let _E,
  cI = 44100,
  aY = 2,
  aX = 33;
function cH(t) {
  return sin(6.283184 * t);
}
function gD(t) {
  return cH(t) < 0 ? -1 : 1;
}
function gC(t) {
  return (t % 1) - 0.5;
}
function gB(t) {
  let i = (t % 1) * 4;
  return i < 2 ? i - 1 : 3 - i;
}
let cG = [cH, gD, gC, gB];
function ej(t) {
  return 0.00390625 * pow(1.059463094, t - 128);
}
function cF(t, i) {
  setTimeout(() => {
    var e = new Uint8Array(t * aY * 2),
      h = e.length - 2,
      s = () => {
        for (var t = new Date(), a = 0; h >= 0; )
          if (
            ((e[h] = 0),
            (e[h + 1] = 128),
            (h -= 2),
            (a += 1) % 1e3 == 0 && new Date() - t > aX)
          )
            return void setTimeout(s, 0);
        setTimeout(() => i(e), 0);
      };
    setTimeout(s, 0);
  }, 0);
}
function ei(t, i, e, h, s) {
  let a = (e.iJ * h) >> 1,
    r = e.iI / 255,
    o = 0,
    l = () => {
      let e = new Date(),
        h = 0;
      for (; o < i - a; ) {
        var n = 4 * o,
          f = 4 * (o + a),
          _ = t[f] + (t[f + 1] << 8) + (t[n + 2] + (t[n + 3] << 8) - 32768) * r;
        if (
          ((t[f] = 255 & _),
          (t[f + 1] = (_ >> 8) & 255),
          (_ =
            t[f + 2] + (t[f + 3] << 8) + (t[n] + (t[n + 1] << 8) - 32768) * r),
          (t[f + 2] = 255 & _),
          (t[f + 3] = (_ >> 8) & 255),
          ++o,
          (h += 1) % 1e3 == 0 && new Date() - e > aX)
        )
          return void setTimeout(l, 0);
      }
      setTimeout(s, 0);
    };
  setTimeout(l, 0);
}
class eg {
  constructor(t) {
    (this.V = t), (this._k = t.length / aY / 2);
  }
  iH() {
    let t,
      i,
      e,
      h,
      s,
      a,
      r,
      o = this.V,
      l = this._k * aY * 2;
    for (
      a = (s = l - 8) - 36,
        h = String.fromCharCode(
          82,
          73,
          70,
          70,
          255 & s,
          (s >> 8) & 255,
          (s >> 16) & 255,
          (s >> 24) & 255,
          87,
          65,
          86,
          69,
          102,
          109,
          116,
          32,
          16,
          0,
          0,
          0,
          1,
          0,
          2,
          0,
          68,
          172,
          0,
          0,
          16,
          177,
          2,
          0,
          4,
          0,
          16,
          0,
          100,
          97,
          116,
          97,
          255 & a,
          (a >> 8) & 255,
          (a >> 16) & 255,
          (a >> 24) & 255
        ),
        t = 0;
      t < l;

    ) {
      for (e = "", i = 0; i < 256 && t < l; ++i, t += 2)
        (r =
          (r = 4 * (o[t] + (o[t + 1] << 8) - 32768)) < -32768
            ? -32768
            : r > 32767
            ? 32767
            : r),
          (e += String.fromCharCode(255 & r, (r >> 8) & 255));
      h += e;
    }
    return h;
  }
  ef(t) {
    _E || (_E = new AudioContext());
    let i = this.V,
      e = this._k,
      h = _E.createBuffer(aY, this._k, cI),
      s = h.getChannelData(0),
      a = h.getChannelData(1),
      r = 0,
      o = () => {
        for (var l = new Date(), n = 0; r < e; ) {
          var f = 4 * (i[4 * r] + (i[4 * r + 1] << 8) - 32768);
          if (
            ((f = f < -32768 ? -32768 : f > 32767 ? 32767 : f),
            (s[r] = f / 32768),
            (f =
              (f = 4 * (i[4 * r + 2] + (i[4 * r + 3] << 8) - 32768)) < -32768
                ? -32768
                : f > 32767
                ? 32767
                : f),
            (a[r] = f / 32768),
            (r += 1),
            (n += 1) % 1e3 == 0 && new Date() - l > aX)
          )
            return void setTimeout(o, 0);
        }
        setTimeout(() => t(h), 0);
      };
    setTimeout(o, 0);
  }
}
class ee {
  constructor(t, i) {
    (this.D = t),
      (this._o = i || 5605),
      (this.gx = cG[t.iG]),
      (this.gw = cG[t.iF]),
      (this.gv = cG[t.iE]),
      (this.attack = t.iD),
      (this.bF = t.iC),
      (this.release = t.iB),
      (this.gu = pow(2, t.iA - 8) / this._o),
      (this.gt = pow(2, t.iz - 8) / this._o);
  }
  ed(t, i, e) {
    for (
      var h = 0,
        s = 0,
        a = ej(t + 12 * (this.D.iy - 8) + this.D.ix) * (1 + 8e-4 * this.D.iw),
        r = ej(t + 12 * (this.D.iv - 8) + this.D.iu) * (1 + 8e-4 * this.D.it),
        o = this.D.ir / 255,
        l = 0,
        n = 0,
        f = this.attack + this.bF + this.release - 1;
      f >= 0;
      --f
    ) {
      let t = f + e,
        b = (this.gx(t * this.gt) * this.D.iq) / 512 + 0.5,
        P = 1;
      f < this.attack
        ? (P = f / this.attack)
        : f >= this.attack + this.bF &&
          (P -= (f - this.attack - this.bF) / this.release);
      var _ = a;
      this.D.ip && (_ += b), this.D.io && (_ *= P * P), (h += _);
      var c = this.gw(h) * this.D.im;
      (_ = r),
        this.D.il && (_ *= P * P),
        (s += _),
        (c += this.gv(s) * this.D.ik),
        this.D.gq && (c += (2 * random() - 1) * this.D.gq * P),
        (c *= P / 255);
      var d = this.D.ij;
      this.D.ii && (d *= b);
      var g = o * (c - n) - (l += (d = 1.5 * sin((3.141592 * d) / cI)) * n);
      switch (((n += d * g), this.D.ih)) {
        case 1:
          c = g;
          break;
        case 2:
          c = l;
          break;
        case 3:
          c = n;
          break;
        case 4:
          c = l + g;
      }
      if (
        ((_ = (cH(t * this.gu) * this.D.ig) / 512 + 0.5),
        (c *= 39 * this.D.ie),
        (t *= 4) + 3 < i.length)
      ) {
        var u = i[t] + (i[t + 1] << 8) + c * (1 - _);
        (i[t] = 255 & u),
          (i[t + 1] = (u >> 8) & 255),
          (u = i[t + 2] + (i[t + 3] << 8) + c * _),
          (i[t + 2] = 255 & u),
          (i[t + 3] = (u >> 8) & 255);
      }
    }
  }
  cC(t, i) {
    this.cB(t, (t) => {
      t.ef(i);
    });
  }
  cB(t, i) {
    var e = this.attack + this.bF + this.release - 1 + 32 * this._o,
      h = this;
    cF(e, (s) => {
      h.ed(t, s, 0),
        ei(s, e, h.D, h._o, function() {
          i(new eg(s));
        });
    });
  }
}
class gp {
  constructor(t) {
    (this._U = t), (this._k = cI * t.ic);
  }
  gn(t, i, e) {
    cF(this._k, (h) => {
      var s = this._k,
        a = this._k * aY * 2,
        r = this._U._o,
        o = this._U.e_,
        l = new ee(t, r);
      let n = 0,
        f = 0,
        _ = 0,
        c = () => {
          for (var i = new Date(); ; )
            if (32 !== _) {
              if (f === o - 1) return void setTimeout(d, 0);
              var e = t.p[f];
              if (e) {
                var s = t.c[e - 1].n[_];
                s && l.ed(s, h, n);
              }
              if (((n += r), (_ += 1), new Date() - i > aX))
                return void setTimeout(c, 0);
            } else (_ = 0), (f += 1);
        },
        d = () => ei(h, s, t, r, u);
      var g = 0;
      let u = () => {
        let t = new Date(),
          s = 0;
        for (; g < a; ) {
          var r = i[g] + (i[g + 1] << 8) + h[g] + (h[g + 1] << 8) - 32768;
          if (
            ((i[g] = 255 & r),
            (i[g + 1] = (r >> 8) & 255),
            (g += 2),
            (s += 1) % 1e3 == 0 && new Date() - t > aX)
          )
            return void setTimeout(u, 0);
        }
        setTimeout(e, 0);
      };
      setTimeout(c, 0);
    });
  }
  cB(t) {
    cF(this._k, (i) => {
      let e = 0,
        h = () => {
          e < this._U.gk.length
            ? ((e += 1), this.gn(this._U.gk[e - 1], i, h))
            : t(new eg(i));
        };
      h();
    });
  }
  cC(t) {
    this.cB((i) => i.ef(t));
  }
}
(gj = {
  n: [
    137,
    0,
    139,
    0,
    137,
    0,
    0,
    139,
    0,
    0,
    137,
    0,
    0,
    139,
    0,
    0,
    137,
    0,
    139,
    0,
    137,
    0,
    0,
    139,
    0,
    0,
    137,
    0,
    0,
    139,
    0,
    0,
  ],
}),
  (gi = {
    n: [
      137,
      139,
      137,
      0,
      137,
      139,
      137,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      137,
      139,
      137,
      0,
      137,
      139,
      137,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
    ],
  }),
  (aU = _L([
    8,
    0,
    0,
    0,
    0,
    0,
    8,
    0,
    0,
    0,
    0,
    0,
    60,
    50,
    419,
    4607,
    130,
    1,
    10332,
    120,
    4,
    16,
    5,
    108,
    0,
    0,
    5,
    187,
    0,
  ])),
  (cz = _L([
    7,
    0,
    0,
    1,
    255,
    0,
    7,
    0,
    0,
    1,
    255,
    0,
    0,
    50,
    150,
    4800,
    200,
    2,
    600,
    254,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ])),
  (cw = _L([
    8,
    0,
    0,
    1,
    82,
    2,
    8,
    0,
    0,
    0,
    0,
    0,
    255,
    100,
    0,
    9090,
    232,
    3,
    5200,
    63,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ])),
  (cv = _L([
    6,
    0,
    0,
    0,
    192,
    1,
    8,
    0,
    8,
    0,
    82,
    2,
    0,
    100,
    4545,
    2727,
    192,
    3,
    2700,
    85,
    6,
    60,
    6,
    86,
    0,
    1,
    7,
    106,
    0,
  ])),
  (aU.c = cz.c = cv.c = [gj]),
  (cw.c = [gi]),
  (aU.p = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]),
  (cz.p = [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]),
  (cw.p = [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]),
  (cv.p = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0]),
  new gp({
    _o: 5513,
    e_: aU.p.length,
    gk: [aU, cz, cw, cv],
    ic: 4 * (aU.p.length - 1),
  }).cC((t) => {
    let i = _E.createBufferSource();
    (i.buffer = t), (i.loop = 1), i.connect(_E.destination), i.start();
  }),
  (aT = (t, i, e = 1) => {
    let h = 0,
      s = [...Array(e)].map(() => gf(t, i));
    return () => s[h++ % s.length]();
  }),
  (gf = (t, i) => {
    let e;
    return (
      new ee(t).cC(i, (t) => {
        e = t;
      }),
      () => {
        if (e) {
          let t = _E.createBufferSource();
          (t.buffer = e), t.connect(_E.destination), t.start();
        }
      }
    );
  });
let bQ = aT(
    _L([
      7,
      0,
      0,
      1,
      255,
      0,
      7,
      0,
      0,
      1,
      255,
      0,
      0,
      0,
      0,
      7505,
      254,
      2,
      500,
      254,
      0,
      27,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
    ]),
    151,
    10
  ),
  hi = aT(
    _L([
      7,
      0,
      0,
      0,
      192,
      1,
      6,
      0,
      9,
      0,
      192,
      1,
      0,
      137,
      2e3,
      4611,
      192,
      1,
      982,
      89,
      6,
      25,
      6,
      77,
      0,
      1,
      3,
      69,
      0,
    ]),
    99,
    5
  ),
  hn = aT(
    _L([
      7,
      0,
      0,
      0,
      255,
      3,
      8,
      0,
      0,
      0,
      255,
      0,
      127,
      22,
      22,
      2193,
      255,
      3,
      4067,
      176,
      4,
      12,
      2,
      84,
      0,
      1,
      3,
      96,
      0,
    ]),
    159,
    2
  ),
  hI = aT(
    _L([
      8,
      0,
      0,
      1,
      82,
      2,
      8,
      0,
      0,
      0,
      0,
      0,
      255,
      0,
      11601,
      22456,
      232,
      3,
      4798,
      63,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
    ]),
    187,
    2
  ),
  hA = aT(
    _L([
      8,
      0,
      0,
      1,
      82,
      2,
      8,
      0,
      0,
      0,
      0,
      0,
      255,
      0,
      12631,
      12110,
      232,
      3,
      2183,
      63,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
    ]),
    183,
    2
  );
class ge {
  constructor() {
    this.cs = this.eM = this.bO = 0;
  }
  _R(t, i) {
    (this.cs += i), G.aS(t, "+" + i);
  }
}
(w._b = {}),
  (onkeydown = (t) => {
    (w._b[t.keyCode] = 1), 27 == t.keyCode && dV();
  }),
  (onkeyup = (t) => {
    w._b[t.keyCode] = 0;
  }),
  (dV = () => {
    (_a = !_a) || G.dU();

    document.getElementById("pause").classList = "pause";
  }),
  (cY = (t) => {
    (document.body.style.backgroundColor = !_a && t),
      (document.body.style.transition = 0),
      clearTimeout(fo),
      (fo = setTimeout(() => {
        (document.body.style.transition = "background 0.1s"),
          (document.body.style.backgroundColor = 0);
      }, 50));
  });
class gd {
  constructor() {
    ((G = this).C = 0), (G.bC = []), G.eC();
  }
  Y(t) {
    if (
      ((t *= G.ax ? 0.3 : !_a * (P.L < 0.2 && G.C - P.ay < 1.5 ? 0.4 : 1)),
      (G.C += t),
      P.L && G.C > G.bB && !_a && G.dT(),
      W.Y(t),
      G.ax)
    ) {
      let t = G.C / 2 + 2;
      (P.x = 2500 + 200 * cos(t)),
        (P.y = 2500 + 200 * sin(t)),
        (P.g = t + PI),
        (P.bc = P.a$ = 0);
    }
    bM.slice().forEach((i) => i.Y(t)),
      U(() => {
        if (
          (G.C - P.ay < 0.2 && !_a && translate(F(-20, 20), F(-20, 20)),
          (G.cr = measure(() => U(cr))),
          P.L && !_a)
        ) {
          U(() => {
            translate(400, 300),
              rotate(PI / 4),
              (R.globalAlpha = 1 - min(1, (G.C - P.eK - 0.1) / 0.15)),
              R.u("#f00");
            for (let t = 0; t < 4; t++) rotate(PI / 2), fr(5, -1, 6, 2);
          }),
            u("#fff"),
            fr(395, 299, 10, 2),
            fr(399, 295, 2, 10);
          let t = 10 * sin(P.bc * PI * 2),
            i =
              10 * cos(P.bc * PI * 4) +
              50 * max(0, 1 - (G.C - P.N._Q) / 0.15) +
              30 +
              20 * P.eD() +
              max(0, 1 - (G.C - P.N.bk) / 0.5) * P.N._.height;
          G.C - P.N._Q < 0.1 &&
            U(() => {
              translate(t + 400, i + 600 - P.N._.height),
                rotate(PI * P.N._Q * 99),
                drawImage(cJ, -cJ.width / 2, -cJ.height / 2);
            }),
            U(() => {
              translate(t, i),
                drawImage(P.N._, (800 - P.N._.width) / 2, 600 - P.N._.height);
            }),
            (G.cq = measure(() => U(cq))),
            (G.co = measure(() => U(co)));
        }
        P.L ||
          _a ||
          ((R.font = "48pt Impact"),
          (R.textAlign = "center"),
          u("#fff"),
          fillText("FINAL SCORE", 400, 250),
          addEnding(G._e.cs),
          fillText(G._e.cs, 400, 350)),
          (G.C - max(P.ay, P.cW) < 0.35 || P.L < 0.2) &&
            U(() => {
              (R.globalAlpha = 0.2),
                u(P.L < 0.2 || P.ay > P.cW ? "#f00" : "#fff"),
                fr(0, 0, 800, 600);
            });
      }),
      _a && U(gc);
  }
  dU() {
    G.ax && G.dL(), (_a = 0);

    document.getElementById("pause").classList = "";

    if (document.getElementById("score").classList.value) {
      document.getElementById("score").classList = "";
    }
  }
  dL() {
    (G._e = new ge()),
      (G.ax = 0),
      (P = new hc()).az(new f_(P)),
      (W = new hS(hO())),
      G.aS("PAUSE", "ESC", 5),
      G.aS("JUMP", "SPACE", 5),
      G.aS("AIM/SHOOT", "MOUSE", 5),
      G.aS("MOVE", "WASD/ARROW KEYS", 5),
      (G.bA = 0),
      G.dT(),
      (G.bB = G.C + 10);
  }
  eC() {
    G.dL(), (_a = 1), (G.ax = 1), (G.bC = []);

    for (let t = 0; t < 10; t++) {
      let t = random() * _f,
        i = F(200, 350),
        e = new eS();
      (e.x = 2500 + cos(t) * i),
        (e.y = 2500 + sin(t) * i),
        (e._._ = e.eQ),
        e.N.bR();
    }
  }
  dT() {
    G.bB = G.C + 90;

    for (let t = 1; t < W._m.length; t++)
      for (let i = 1; i < W._m[0].length; i++) {
        if (W._m[t][i]) continue;
        let e = 100 * (i + 0.5),
          h = 100 * (t + 0.5),
          s =
            (W._m[t - 1][i] ? 1 : 0) +
            (W._m[t + 1][i] ? 1 : 0) +
            (W._m[t][i - 1] ? 1 : 0) +
            (W._m[t][i + 1] ? 1 : 0);
        if (
          1 != G.bA &&
          s > 1 &&
          random() < 0.25 &&
          !bl.filter((t) => t.x == e && t.y == h).length
        ) {
          let t = new (bm([hm, hk]))();
          (t.x = e), (t.y = h), bT(e, h, -50, 50);
        }
        if (G.bA && random() < 0.05 + 0.005 * G.bA) {
          let s = new eS();
          (s.x = 100 * (i + 0.5)), (s.y = 100 * (t + 0.5)), bT(e, h, s.z, 50);
        }
      }
    ++G.bA > 2 && G._e._R("SURVIVED WAVE", 500);
  }
  aS(t, i, e = 2) {
    let h = { dJ: t, dI: i };
    G.bC.unshift(h),
      X(h, "ao", -1, 0, 0.3, 0, 0, () => {
        setTimeout(() => {
          X(h, "ao", 0, 1, 0.3, 0, 0, () => J(G.bC, h));
        }, 1e3 * e);
      });
  }
}
(onload = () => {
  onresize(),
    (ai.width = 800),
    (ai.height = 600),
    ((R = ai.getContext("2d", { _M: 0 })).imageSmoothingEnabled = 0),
    Object.getOwnPropertyNames(aI).forEach((t) => {
      R[t].call && (w[t] = aI[t].bind(R));
    }),
    new gd();
  let t = Date.now(),
    i = () => {
      let e = Date.now(),
        h = (e - t) / 1e3;
      (t = e), G.Y(h), requestAnimationFrame(i);
    };
  i(),
    (dF = (t) => {
      if (!df || !_a) return;
      let i = ai.getBoundingClientRect(),
        e = (((t.clientX - i.left) / i.width) * 800 - 250) / 300,
        h = (((t.clientY - i.top) / i.height) * 600 - 490) / 20;
      _K(0, e, 1) && _K(0, h, 1) && ((bn = e), (localStorage[1] = bn));
    }),
    (onmousemove = (t) => {
      (ai.style.cursor = _a || !P.L ? "default" : "none"),
        _a
          ? ((de = fZ(t)) && (ai.style.cursor = "pointer"), dF(t))
          : P.L &&
            ((P.g += t.movementX / (1e3 * max(1 - bn, 0.01))),
            (P._c += t.movementY / (1e3 * max(1 - bn, 0.01))));
    }),
    (onmousedown = (t) => {
      (df = 1), _a ? de && G.dU() : P.N && P.N.hE(), dF(t);
    }),
    (onmouseup = () => {
      P.N && P.N.hD(), (df = 0);
    }),
    (onclick = () => !_a && P.L && document.body.requestPointerLock()),
    (document.onpointerlockchange = () => {
      let t = document.pointerLockElement;
      fp && !t && P.L && dV(), (fp = t);
    }),
    (fZ = (t) => {
      let i = ai.getBoundingClientRect(),
        e = ((t.clientX - i.left) / i.width) * 800,
        h = ((t.clientY - i.top) / i.height) * 600;
      return _K(350, h, 400) && _K(250, e, 550);
    });
}),
  (aR = (t, i, e) => {
    let h = { x: t, y: i, z: isNaN(e) ? -50 : e },
      s = ah(P, h),
      a = _T(s - P.g),
      r = 400 + (400 * a) / 0.5,
      o = aQ(h, 100),
      l = 300 - ((1 - P.bf() / 50) * o) / 2,
      n = ((50 - h.z) / 100) * (l + o - l) + l,
      f = _$[~~(r / 2)],
      _ = !f || __(f, P) + 1 > __(h, P);
    return {
      x: r,
      y: n,
      ap: abs(a) < PI / 2 && _ && _K(0, r, 800) && _K(0, n + aN(), 600),
    };
  }),
  (aN = () => -~~((P._c / (0.28 * PI)) * 600)),
  (dB = (t, i, e, h, s, a, r) => {
    let o = __(t, P),
      l = ah(P, t),
      n = _T(l - P.g);
    if (o > s || abs(n) > 0.55) return;
    let f = aR(t.x, t.y, t.z);
    if (!f.ap && !r) return;
    let _ = aQ(t, i),
      c = aQ(t, e),
      d = 1 - _n(0, (o - h) / (s - h), 1);
    U(() => a(f.x, f.y, _, c, d));
  }),
  (du = (t, i) => {
    _$[i] = gU(P.x, P.y, t, 1600);
  }),
  (aQ = (t, i) => {
    let e = atan2(t.y - P.y, t.x - P.x);
    return (i / (cos(e - P.g) * __(t, P))) * fS;
  }),
  (fR = (t, i, e) => t + e * (i - t)),
  (cf = (t, i) => {
    if (t > i) return;
    let e = P.g - 0.5,
      h = e + (t / _A) * 1;
    du(h, t);
    let s = e + (i / _A) * 1;
    if ((du(s, i), _$[t].b$ != _$[i].b$ || !_$[i].b$)) {
      let e = ~~(t + (i - t) / 2);
      return cf(t + 1, e), void cf(e + 1, i - 1);
    }
    for (let e = t + 1; e < i; e++) {
      let a,
        r,
        o = fR(h, s, (e - t) / (i - t));
      _$[i].y === _$[t].y
        ? (a = ((r = _$[t].y) - P.y) / tan(o) + P.x)
        : ((a = _$[t].x), (r = tan(o) * (a - P.x) + P.y)),
        (_$[e].x = a),
        (_$[e].y = r),
        (_$[e].i$ = 1),
        (_$[e].b$ = _$[t].b$),
        (_$[e].as = _$[t].as);
    }
  }),
  (_u = []),
  (aH = []),
  (bl = []),
  (_S = []),
  (M = []),
  (fS = 400 / tan(0.5)),
  (_A = 400),
  (_$ = []);
for (let t = -1; t <= _A; t++) _$[t] = {};
function dn(t, i) {
  if (i && t.z < 50) return;
  let e = __(P, t);
  dB(
    t,
    t.hY,
    t.hX,
    1500,
    1600,
    (h, s, a, r, o) => {
      if (((R.globalAlpha = (isNaN(t._M) ? 1 : t._M) * o), t._)) {
        let o = ~~(h - a / 2),
          l = ~~(h + a / 2);
        for (let h = o; h < l; h += 2) {
          let l = ~~((h / 800) * 1 * _A),
            n = _$[l];
          if ((n && __(n, P) > e) || i) {
            let i = (h - o) / a,
              e = i + 2 / a;
            drawImage(
              t._,
              i * t._.width,
              0,
              (e - i) * t._.width,
              t._.height,
              h,
              s - r / 2,
              2,
              r
            );
          }
        }
      } else
        translate(h, s),
          scale(a / cN.width, r / cN.width),
          drawImage(cL(t._q), 0, 0);
    },
    t._ || i
  );
}
(ce = (t, i, e) => {
  let h = random();
  return () => t + sin((h + G.C * PI * 2) / e) * i;
}),
  (fM = [...Array(200)].map(() => ({
    offsetX: ce(600 * random(), F(5, 20), F(20, 40)),
    offsetY: ce(600 * random(), F(5, 20), F(20, 40)),
    hZ: ce(F(-50, 50), F(5, 20), F(20, 40)),
    dw: (t, i, e, h, s) => {
      u("#fff"), (R.globalAlpha = 0.2 * s), fr(t - e / 2, i - h / 2, e, h);
    },
  }))),
  (measure = (t) => {
    t();
  }),
  (cr = () => {
    (G.gb = measure(() => cf(-1, _A + 1))),
      (G.ga = measure(() => M.sort((t, i) => __(i, P) - __(t, P)))),
      translate(400, 300),
      rotate(P.a$),
      translate(-400, -300);
    let t = ~~(aN() + 300);
    u("#000010"),
      fr(0, 0, 800, t),
      u("#000"),
      fr(0, t, 800, 600 - t),
      [
        () => {
          U(() => {
            let i = 2 * (_f / 1),
              e = (-(_T(P.g) + _f) / 1) * 800;
            translate(e, t - ~~(20 * i)),
              scale(i, i),
              u(gI),
              fr(-e / i, 0, 800 / i, 20);
          });
        },
        () => translate(0, aN()),
        () => M.forEach((t) => dn(t, 1)),
        dN,
        fJ,
        dO,
        () => M.forEach((t) => dn(t)),
        fI,
        () =>
          fM.forEach((t) => {
            (t.x = 600 * round((P.x - t.offsetX()) / 600) + t.offsetX()),
              (t.y = 600 * round((P.y - t.offsetY()) / 600) + t.offsetY()),
              (t.z = t.hZ()),
              dB(t, 1, 1, 0, 600, t.dw);
          }),
      ].forEach((t) => t());
  }),
  (dO = () => {
    u("#000");
    for (let t = 0; t < _A; t++) {
      let i = _$[t],
        e = eo[~~(185.346 * (i.as || 0)) % eo.length],
        h = e[~~(3 * G.C + 238.489 * i.as) % e.length];
      fD(t, i, h);
    }
  }),
  (fD = (t, i, e) => {
    if (!i) return;
    let h,
      s = __(i, P),
      a = (800 * t) / _A,
      r = ~~aQ(i, 100),
      o = 300 - ((1 - P.bf() / 50) * r) / 2,
      l = 100 * round(i.x / 100),
      n = 100 * round(i.y / 100);
    (h = abs(l - i.x) > abs(n - i.y) ? (i.x % 100) / 100 : (i.y % 100) / 100),
      s < 1600 && drawImage(e, ~~(h * e.width), 0, 1, e.height, a, o, 2, r),
      U(() => {
        (R.globalAlpha = gV(s / 1600, 0, 1, 1)), fr(a, o, 2, r);
      });
  }),
  (fJ = () => {
    drawImage(cL("#ff0"), (_T(-P.g) / 1) * 800 - 30, 70, 60, 60);
  }),
  (fI = () => {
    let t = ~~((_T(-P.g) * _A) / 1),
      i = _$[t];
    if (!i) return;
    let e = ~~aQ(i, 100),
      h = 300 - ((1 - P.bf() / 50) * e) / 2;
    if (100 > -aN() && 100 < h) {
      let i = (800 * t) / _A,
        e = 400 - i,
        h = 200 - aN(),
        s = 1 - _n(0, _i(0, 0, e, h) / (G.ax ? 500 : 250), 1);
      for (let t = 0; t < 1; t += 0.15) {
        let a = ((56 * t) % 1) * 35;
        (R.globalAlpha = 0.5 * s),
          drawImage(
            cL("#ff0"),
            i + 2 * t * e - a / 2,
            100 + 2 * t * h - a / 2,
            a,
            a
          );
      }
    }
  }),
  (dN = () => {
    for (let t = 100 * ~~((P.x - 500) / 100); t < P.x + 500; t += 25)
      for (let i = 100 * ~~((P.y - 500) / 100); i < P.y + 500; i += 25) {
        let e = ~~(t / 100) % 3 || ~~(i / 100) % 3 ? en : gJ,
          h = (t % 100) / 100,
          s = (i % 100) / 100,
          a = aR(t, i, -50),
          r = aR(t, i + 25, -50),
          o = aR(t + 25, i, -50),
          l = aR(t + 25, i + 25, -50);
        (a.ap || o.ap || r.ap) &&
          ((R.globalAlpha = 1 - _n(0, _i(P.x, P.y, t, i) / 500, 1)),
          dh(
            e,
            a.x,
            a.y,
            o.x,
            o.y,
            r.x,
            r.y,
            e.width * h,
            e.height * s,
            e.width * (h + 0.25),
            e.height * s,
            e.height * h,
            e.height * (s + 0.25)
          )),
          (l.ap || o.ap || r.ap) &&
            ((R.globalAlpha = 1 - _n(0, _i(P.x, P.y, t, i) / 500, 1)),
            dh(
              e,
              l.x,
              l.y,
              o.x,
              o.y,
              r.x,
              r.y,
              e.width * (h + 0.25),
              e.height * (s + 0.25),
              e.width * (h + 0.25),
              e.height * s,
              e.height * h,
              e.height * (s + 0.25)
            ));
      }
    R.globalAlpha = 1;
  }),
  (dh = (t, i, e, h, s, a, r, o, l, n, f, _, c) => {
    U(() => {
      beginPath(), moveTo(i, e), lineTo(h, s), lineTo(a, r), clip();
      let d = 1 / ((n -= o) * (c -= l) - (_ -= o) * (f -= l)),
        g = d * (c * (h -= i) - f * (a -= i)),
        u = d * (c * (s -= e) - f * (r -= e)),
        b = d * (n * a - _ * h),
        P = d * (n * r - _ * s);
      transform(g, u, b, P, i - g * o - b * l, e - u * o - P * l),
        drawImage(t, 0, 0);
    });
  }),
  (dg = (t, i, e) => {
    (R.imageSmoothingEnabled = 1),
      transform(1, -0.15, 0, 1, 0, 0),
      (R.globalAlpha = 0.5),
      R.u("#000"),
      fr(0, 0, 195, 40),
      translate(10, 10),
      R.u(t),
      fr(25, 0, 150, 20),
      (R.globalAlpha = 1),
      e(),
      fr(25, 0, 150 * i, 20);
  }),
  (cq = () => {
    U(() => {
      translate(20, 540),
        dg("#0be", P.L, () => {
          fr(7, 0, 6, 20), fr(0, 7, 20, 6);
        });
    }),
      U(() => {
        translate(780, 540),
          scale(-1, 1),
          dg("#e50", P.N.cZ, () => {
            fr(0, 0, 4, 20), fr(8, 0, 4, 20), fr(16, 0, 4, 20);
          });
      }),
      bX.forEach((t) => {
        U(() => {
          (R.globalAlpha = t._M),
            translate(400, 300),
            rotate(t.g - P.g + PI - PI / 2),
            translate(100, 0),
            u("#f00"),
            beginPath(),
            moveTo(0, -20),
            lineTo(20, 0),
            lineTo(0, 20),
            fill();
        });
      }),
      (R.textAlign = "center"),
      (R.font = "24pt Impact"),
      u("#fff"),
      fillText(G._e.cs, 400, 50),
      u(G.bB - G.C < 10 ? "#f00" : "#fff"),
      (R.font = "12pt Impact"),
      (R.textBaseline = "bottom"),
      fillText("NEXT WAVE", 700, 35),
      (R.font = "24pt Impact");
    let t = round(10 * (G.bB - G.C)) / 10;
    t % 1 || (t += ".0"),
      fillText(t, 700, 75),
      (R.font = "12pt Courier"),
      G.bC.forEach((t, i) =>
        U(() => {
          i > 5 ||
            ((R.globalAlpha = 1 - abs(t.ao)),
            translate(100 * t.ao, 340 + 25 * i),
            (R.textAlign = "right"),
            u("#fff"),
            fillText(t.dJ, 390, 0),
            (R.textAlign = "left"),
            u("#ff0"),
            fillText(t.dI, 410, 0));
        })
      );
  }),
  (co = () => {
    translate(20, 20),
      u("#454"),
      (R.globalAlpha = 0.5),
      beginPath(),
      rect(0, 0, 150, 150),
      fill(),
      clip(),
      translate(75, 120),
      rotate(-PI / 2),
      (R.globalAlpha = 1),
      U(() => {
        rotate(-P.g),
          scale(15, 15),
          translate(-P.x / 100, -P.y / 100),
          drawImage(W.v, 0, 0),
          U(() => {
            scale(1 / 15, 1 / 15),
              _S.forEach((t) =>
                U(() => {
                  let i = t._._;
                  i &&
                    (translate(0.15 * t.x, 0.15 * t.y),
                    rotate(P.g + PI / 2),
                    scale(15 / i.width, 15 / i.width),
                    drawImage(i, -i.width / 2, -i.height / 2));
                })
              );
          }),
          scale(1 / 15, 1 / 15),
          u(gF),
          fr(0, 0, 15 * W.v.width, 15 * W.v.height);
      }),
      u(gE),
      (R.globalAlpha = 0.5),
      beginPath(),
      moveTo(0, 0),
      arc(0, 0, 80, -0.5, 0.5),
      closePath(),
      fill();
  }),
  (gc = () => {
    (R.imageSmoothingEnabled = 1),
      (R.globalAlpha = 1),
      (R.font = "72pt Impact"),
      (R.textAlign = "center"),
      (R.textBaseline = "middle"),
      u("#fff"),
      fillText("[SWAGSHOT]", 400, 180),
      (R.font = "14pt Courier"),
      fillText("TAKE THE STATION BACK... WITH SWAG", 400, 240),
      fillText("MOUSE SENSITIVITY: " + round(100 * bn) + "%", 400, 470),
      fr(250, 497.5, 300, 5),
      fr(250 + 300 * bn - 10, 490, 20, 20),
      (R.textBaseline = "middle"),
      U(() => {
        (R.globalAlpha = 1 - 0.2 * de),
          u("#A20"),
          fr(250, 350, 300, 50),
          (R.font = "24pt Courier"),
          R.u("#fff"),
          fillText("PLAY", 400, 375);
      });
  });
