/* ─────────────────────────────────────────────────────────────
   ALTYAZILAR / CAPTIONS — düzenlenebilir (metin). Zamanlar film saniyesidir.
   note: öğretmen için önerilen seslendirme cümlesi.
   Senaryo değişirse: node scripts/build.mjs (zamanlar yeniden hesaplanır).
   ───────────────────────────────────────────────────────────── */
(function (root) {
  const CAPTIONS = [
    { scene: 1, start: 0.9, end: 8.5, tr: "Telefon, tablet, sosyal medya, bulut: hepsi hayatımızda", en: "Phones, tablets, social media, the cloud: all part of our lives",
      note: "Telefon, tablet, sosyal medya, bulut... Bu bilişim teknolojileri artık hayatımızın bir parçası." },
    { scene: 1, start: 9.3, end: 15.9, tr: "Peki bu teknolojilerin hep iyi yanları mı var?", en: "But do these technologies only have good sides?",
      note: "Peki bu teknolojilerin her zaman iyi yanları mı var? Biraz düşünelim: sence hiç zararları olabilir mi?" },
    { scene: 2, start: 18.7, end: 25.2, tr: "Olumlu yönü: hızlı iletişim ve bilgiye erişim", en: "The good side: fast communication and access to information",
      note: "Önce olumlu yönlere bakalım. Görüntülü aramayla uzaktaki dedemizle konuşabiliriz; ödevimiz için bilgiye hızla ulaşabiliriz." },
    { scene: 2, start: 26, end: 32.5, tr: "Olumsuz yönü: gizlilik sorunları ve bağımlılık", en: "The bad side: privacy problems and addiction",
      note: "Olumsuz yönler de var: paylaştığımız bilgiler başkalarının eline geçebilir. Oyunlar ve sosyal medya bağımlılık yapabilir." },
    { scene: 2, start: 33.4, end: 39.4, tr: "Aynı araç hem yarar hem zarar getirebilir", en: "The same tool can bring both benefit and harm",
      note: "Bulut fotoğraflarımızı saklar ama ekran başında çok uzun kalmak zarar verir. Aynı araç hem yarar hem zarar getirebilir; önemli olan nasıl kullandığımızdır." },
    { scene: 3, start: 42.3, end: 47.9, tr: "Uzun süre ekrana bakmak gözleri yorar", en: "Looking at a screen for a long time tires the eyes",
      note: "Teknolojiyi uzun süre kullanmak bedenimizi de etkiler. Ekrana uzun süre bakınca gözlerimiz yorulur, kurur." },
    { scene: 3, start: 48.8, end: 54.4, tr: "Eğik oturmak boynu ve sırtı ağrıtır", en: "Slouching makes the neck and back hurt",
      note: "Telefona eğilerek bakmak ya da kambur oturmak boynumuzu ve sırtımızı ağrıtır." },
    { scene: 3, start: 55.3, end: 60.9, tr: "Gece ekrana bakmak uykuyu kaçırır", en: "Screens at night keep sleep away",
      note: "Yatmadan önce ekrana bakmak uykumuzu kaçırır; ertesi gün yorgun oluruz." },
    { scene: 3, start: 61.8, end: 68.1, tr: "Aşırı kullanım ruh hâlimizi de etkileyebilir", en: "Too much use can affect our mood too",
      note: "Ruh sağlığımız da etkilenir: aşırı kullanımda kendimizi yalnız, öfkeli ya da huzursuz hissedebiliriz." },
    { scene: 3, start: 68.9, end: 75.1, tr: "Ergonomi: aracı bedenimize uygun kullanmak", en: "Ergonomics: using tools in a way that suits our body",
      note: "Ergonomi, araçları bedenimize uygun ve rahat kullanmak demektir. 20 dakikada bir uzağa bakmak, dik oturmak ve yatmadan ekranı kapatmak dijital sağlığımızı korur." },
    { scene: 4, start: 77.9, end: 84.2, tr: "Her araç için farklı güvenlik önlemleri var", en: "Each device needs different safety measures",
      note: "Fiziksel güvenlik için alacağımız önlemler kullandığımız araca göre değişir. Önlemleri gruplara ayıralım." },
    { scene: 4, start: 85, end: 91.3, tr: "Bilgisayar: doğru mesafe, düzenli kablolar", en: "Computer: the right distance, tidy cables",
      note: "Bilgisayarda ekrana kol boyu uzaklıktan bakarız, kabloları geçiş yoluna bırakmayız, havalandırma deliklerini kapatmayız." },
    { scene: 4, start: 92, end: 97.8, tr: "Telefon ve tablet: şarj ederken dikkat", en: "Phone and tablet: take care while charging",
      note: "Telefon ve tablet şarj olurken ısınabilir: yastık altına koymayız, uygun şarj aleti kullanırız. Yürürken ekrana bakmayız." },
    { scene: 4, start: 98.6, end: 104.4, tr: "Kulaklık: sesi kıs, kulağını dinlendir", en: "Headphones: turn it down, rest your ears",
      note: "Kulaklıkla dinlerken sesi yarıdan fazla açmayız ve ara ara kulağımızı dinlendiririz." },
    { scene: 5, start: 107.2, end: 113.7, tr: "Karanlıkta, yatakta saatlerce telefona bakmak", en: "Staring at a phone in bed, in the dark, for hours",
      note: "Şimdi karar verelim. Karanlıkta, yatakta saatlerce telefona bakmak... Bu riskli: gözler yorulur, uyku kaçar." },
    { scene: 5, start: 114.5, end: 120.7, tr: "Her 20 dakikada bir ekrandan uzağa bakmak", en: "Looking away from the screen every 20 minutes",
      note: "Her 20 dakikada bir ekrandan uzağa bakmak sağlıklı bir alışkanlık: gözlerimiz dinlenir." },
    { scene: 5, start: 121.4, end: 127.1, tr: "Oyun oynarken yemeği ve dersi unutmak", en: "Forgetting meals and homework while gaming",
      note: "Oyun oynarken yemeği ve dersi unutmak bağımlılığın bir işareti olabilir; riskli." },
    { scene: 5, start: 127.9, end: 134.2, tr: "Ekran süremi not edip ailemle sınır koymak", en: "Tracking my screen time and setting limits with my family",
      note: "Ekran süremi not etmek ve ailemle birlikte sınır koymak teknolojiyi kontrollü kullanmamı sağlar; sağlıklı." },
    { scene: 6, start: 136.9, end: 143.5, tr: "Aklında kalsın: her teknolojinin iki yüzü var", en: "Remember: every technology has two sides",
      note: "Aklında kalsın: her bilişim teknolojisinin olumlu ve olumsuz yönleri vardır. Kullandığın araca göre güvenlik önlemi al." },
    { scene: 6, start: 144.3, end: 150.3, tr: "Dengeli kullan, bedenini ve ruhunu koru!", en: "Use it in balance, protect your body and mind!",
      note: "Mola ver, dik otur, uykunu koru. Teknolojiyi dengeli kullanırsan bedenini de ruhunu da korursun." },
  ];
  if (typeof module !== 'undefined' && module.exports) module.exports = CAPTIONS;
  else { root.BF = root.BF || {}; root.BF.CAPTIONS = CAPTIONS; }
})(typeof window !== 'undefined' ? window : globalThis);
