const basePath = '/happy-birthday-my-lovely/';
const addBasePath = (path) => {
  if (path.startsWith('http')) return path;
  return `${basePath}images/${path.split('/').pop()}`;
};

// data/timeline.js
export const timelineData = [
  {
    id: 1,
    date: "2025-04-02",
    title: "✨First Time We Met💕",
    description: "Hari pertama waktu ituu, kita ketemu😁. Rasanya ga nyangka yaa.... bisa ngajak kamu ketemu, ngobrol, truss liburan ke pantai. Melewati banyak drama, meyakinkanmu kalo aku memang bener' pengen ketemu, memang pengen serius pengen menjalin hubungan sama kamu, Dan akhirnya kamu kasih kesempatan aku buat njelasin apa maksutku pengen deket kamu dan aku rasa kamu dengerin apa yg aku omongin dengan seksama. \nMemang waktu itu masih sedikit canggung satu sama lain, tapi menurutku itu awal yang bagus karena kita bisa saling mengenal satu sama lain, saling bertukar isi kepala dari hiruk pikuk pekerjaan, pengalaman kita masing-masing, dan hal-hal random lainnya. Dan istimewannya kita udah ngobrolin mengenai planning dari masing' kita buat kedepannya. Dari situ kita tahu tujuan kita saling membuka hati satu sama lain❤️",
    images: [
      addBasePath("/images/card_1_1.jpeg"),
      addBasePath("/images/card_1_2.jpeg"),
      addBasePath("/images/card_1_3.mp4"),
      addBasePath("/images/card_1_4.mp4")
    ]
  },
  {
    id: 2,
    date: "2025-04-04",
    title: "Pertama kali diuji jarak tapi kita bisa lewati itu semua💪",
    description: "Ya hari itu tiba, waktu awal kita bertemu lalu diuji dengan jarak. Jaraknya ga main' ya langsung antar pulau😢. Mungkin kebanyakan orang bakal ngomong alah alay besok kan bakalan ketemu lagii. Tapi bukan itu pointnya, pengujian jarak ini bisa kita lewati dengan baik. Dimana aku yang awal' kesulitan buat bagi waktu untuk perform di team lalu harus belajar untuk terus berkabar yang mana notabene nya belum pernah aku alami. Tapi kamu selalu menguatkan, kasih perhatian yang luar biasa dan selalu ngingetin bahwa kasih kabar itu penting buat orang yang sedang menunggu keberadaan kita❤️. Disitu kamu bisa lebih meyakinkanku bahwa kamu itu adalah perempuan yang aku minta lewat doa selama ini😊",
    images: [
      addBasePath("/images/card_2_1.jpeg"),
      addBasePath("/images/card_2_2.jpeg"),
    ]
  },
  {
    id: 3,
    date: "2025-06-28",
    title: "📽️Bioskop Pertamaku Denganmu🍿",
    description: "Tak ingin usai disini, gak tau kenapa judul filmnya cocok banget buat kita yaaa. Kita saling mengusahakan, saling memahami, saling menguatkan, saling support satu sama lain. Oiya trip kali ini ga cuman nonton doang yaaa, tapi moment ini juga pertama kali aku ngenalin orang yang aku sayang ke keluarga hehehe. Rasannya kayak lega gituuu, doa yg selama ini dipanjatkan bisa terkabul dan terwujudnya moment itu bisa ngenalin kamu ke keluargaku😊. Dihari ini juga, kita makan sate kelinci bareng loh wkwkw, walaupun rasanya kureng tapi menurutku tetep istimewa soalnya makannya bareng kamu dan maaf kalo waktu itu bikin kamu deg-degan😁. Pertama kali photobox dan gaya kita dah narsis banget yaah, terbaeek💕",
    images: [
      addBasePath("/images/card_3_1.jpeg"),
      addBasePath("/images/card_3_2.jpeg"),
      addBasePath("/images/card_3_3.jpeg"),
      addBasePath("/images/card_3_4.jpeg"),
      addBasePath("/images/card_3_5.jpeg"),
      addBasePath("/images/card_3_6.mp4")
    ]
  },
  {
    id: 4,
    date: "2025-09-27",
    title: "First Hug from You and a Sweet NickLove 🤗",
    description: "Panggilan mas dan sayaang udah mulai terdengar di moment ini. Rasanya semakin hari semakin hangat dengerin panggilan itu. Sayang kasih burung merpati, mas kasih anak ayam. Waktu yang sangat compact banget dirasakan, berasa padet banget yaaa. Mulai dari pantai yang menurutku tempatnya syahdu, ga panas, bagus lagii, makan bebek ayam goreng, nonton wayang uwong walaupun ceritannya nebak nebak alias kurang deket posisi duduknya 💕, hingga ngejar photobox yang harus keburu-buru dikejar jadwal kereta walaupun dapet cooldown dari es teh yg waktu itu kita beli yaa yaang, jadi moment epic ✨. Satu lagi, permintaan terkahir yg berkesan diakhir hari kita bertemu itu 'Mas, boleh peluk yaa!'🤗",
    images: [
      addBasePath("/images/card_4_1.jpeg"),
      addBasePath("/images/card_4_2.jpeg"),
      addBasePath("/images/card_4_3.jpeg"),
      addBasePath("/images/card_4_4.jpeg"),
      addBasePath("/images/card_4_5.jpeg"),
      addBasePath("/images/card_4_6.jpeg"),
      addBasePath("/images/card_4_7.jpeg"),
      addBasePath("/images/card_4_8.mp4"),
      addBasePath("/images/card_4_9.mp4"),
      addBasePath("/images/card_4_10.mp4"),
      addBasePath("/images/card_4_11.mp4")
    ]
  },
  {
    id: 5,
    date: "2025-12-13",
    title: "Keliling Blok M Sampe Mau Ke arah Bogor 🚲",
    description: "Mas kenalin seafood andalan, sewaktu dulu mas ngekos di Pulo Asem yaaa. Habis itu kita keliling ajaaa ke Jakarta Pusat, liat Monas walaupun harus ngelilingi Monas dua kali karena salah jalan, its okaaayy... itu seru tau💕 apalagi pas maen caplok-caplokan boneka dengan segala teori yg kita curahkan, walaupun hasilnya nol besar. Dari situlah ada hikmahnya, belajar belajar belajar terus belajar dan jangan pantang menyerah😋",
    images: [
      addBasePath("/images/card_5_1.jpeg"),
      addBasePath("/images/card_5_2.jpeg"),
      addBasePath("/images/card_5_3.jpeg"),
      addBasePath("/images/card_5_4.jpeg"),
      addBasePath("/images/card_5_5.jpeg"),
      addBasePath("/images/card_5_6.jpeg"),
      addBasePath("/images/card_5_7.jpeg"),
      addBasePath("/images/card_5_8.jpeg"),
      addBasePath("/images/card_5_9.jpeg"),
      addBasePath("/images/card_5_10.jpeg"),
      addBasePath("/images/card_5_11.jpeg"),
      addBasePath("/images/card_5_11.mp4"),
      addBasePath("/images/card_5_12.mp4")
    ]
  },
  {
    id: 6,
    date: "2026-03-19",
    title: "Moving In Together",
    description: "Hari yang ku tunggu' 😢, hampir selama setahun mas minta buat nganterin sayang ke rumah, dan harus tau rumah sayang buat bisa ketemu sama orang tua mu yaaang. Dan hal itu  semua terjawab dihari ini. Walaupun harus diuji lewat cempogo dulu yang bikin merinding bulu kudug mas, tapi its not problem demi nastar dan oleh oleh surabaya bisa sampai ke rumah sayaang 😁. Kalo dikata deg'an, yaaa sedikit juga soalnya mas dah nyiapin kata' nya setahun yg lalu ~ cieeee💕. Hari itu juga, seneng banget bisa jalan' malam ke kota boyolali, minum susu kesukaaan, jajan pentol yg rasanyaa wueenaak puooolll ditemani dengan sound horeg takbiran🔊. Oiyaaa, maaf kalo kata-kata sungkemannya dulu terlalu panjang... soalnya itu rangkaian kata-kata spesial buat sayang dan sekeluarga😊❤️",
    images: [
      addBasePath("/images/card_6_1.jpeg"),
      addBasePath("/images/card_6_2.jpeg"),
      addBasePath("/images/card_6_3.jpeg"),
      addBasePath("/images/card_6_4.jpeg"),
      addBasePath("/images/card_6_5.jpeg"),
      addBasePath("/images/card_6_6.jpeg"),
      addBasePath("/images/card_6_7.jpeg"),
      addBasePath("/images/card_6_8.jpeg")
    ]
  },
  {
    id: 7,
    date: "2026-05-3",
    title: "Fun Run",
    description: "Gak sabarrrrr dan ditunggu tungguu tauuuuu!!!!!!",
    images: [
    ]
  },
  // {
  //   id: 8,
  //   date: "2024-01-10",
  //   title: "Two Years Anniversary",
  //   description: "Dua tahun sudah kita bersama. Dua tahun penuh cinta, tawa, air mata, dan kebahagiaan. Setiap hari bersamamu adalah anugerah terindah yang pernah kudapatkan. Terima kasih telah memilihku.",
  //   images: [
  //     "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&h=400&fit=crop",
  //     "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop",
  //     "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=600&h=400&fit=crop"
  //   ]
  // },
  // {
  //   id: 9,
  //   date: "2024-04-15",
  //   title: "The Proposal",
  //   description: "Duduk di pantai saat matahari terbenam, kamu mengambil satu napas dalam-dalam dan melamarku. Air mata bahagia tak bisa kutahan. 'Ya' adalah jawabanku, selamanya dan selamanya.",
  //   images: [
  //     "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop",
  //     "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=400&fit=crop",
  //     "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=600&h=400&fit=crop"
  //   ]
  // },
  // {
  //   id: 10,
  //   date: "Today",
  //   title: "Forever & Always",
  //   description: "Perjalanan cinta kita masih terus berlanjut. Setiap hari bersamamu adalah hadiah yang tak ternilai. Aku mencintaimu lebih dari kata-kata bisa ungkapkan, lebih dari yang bisa kubayangkan. Terima kasih sudah menjadi bagian dari hidupku, dan terima kasih telah memilihku untuk menemani setiap langkahmu. Bersamamu, aku menemukan rumah yang sebenarnya.",
  //   images: [
  //     "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=600&h=400&fit=crop",
  //     "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&h=400&fit=crop",
  //     "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&h=400&fit=crop"
  //   ]
  // }
];
