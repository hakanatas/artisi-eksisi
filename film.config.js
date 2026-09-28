/* ─────────────────────────────────────────────────────────────
   FİLM KİMLİĞİ / Film identity — scripts/build.mjs ile scenes/film.js'ten üretilir.
   Süreler altyazı uzunluğundan hesaplanır (okuma hızı: ~10 harf/sn).
   ───────────────────────────────────────────────────────────── */
(function (root) {
  const META = {
    "slug": "artisi-eksisi",
    "title": "Artısı ve Eksisi",
    "titleEn": "Pluses and Minuses",
    "grade": 5,
    "theme": "Bilişim Teknolojilerinin Hayatımızdaki Yeri",
    "code": "BTY.5.1.2",
    "outcome": "Bilişim teknolojilerinin birey ve toplum üzerindeki etkilerini özetleyebilme",
    "outcomeEn": "Summarising the effects of information technologies on individuals and society",
    "duration": 151.6,
    "tempo": 1
  };
  const SCENES = [
    {
      "id": "s0",
      "t0": 0,
      "t1": 17.2,
      "name": "",
      "en": "",
      "concept": "",
      "noHeader": true
    },
    {
      "id": "s1",
      "t0": 17.2,
      "t1": 40.8,
      "name": "Olumlu mu, olumsuz mu?",
      "en": "Good or bad?",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s2",
      "t0": 40.8,
      "t1": 76.5,
      "name": "Beden ve ruh sağlığı",
      "en": "Body and mind",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s3",
      "t0": 76.5,
      "t1": 105.8,
      "name": "Güvenlik önlemleri",
      "en": "Safety measures",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s4",
      "t0": 105.8,
      "t1": 135.5,
      "name": "Sağlıklı mı?",
      "en": "Healthy?",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s5",
      "t0": 135.5,
      "t1": 151.6,
      "name": "Aklında kalsın",
      "en": "Remember",
      "concept": "",
      "noHeader": false
    }
  ];
  if (typeof module !== 'undefined' && module.exports) module.exports = { META, SCENES };
  else { root.BF = root.BF || {}; root.BF.META = META; root.BF.SCENES = SCENES; }
})(typeof window !== 'undefined' ? window : globalThis);
