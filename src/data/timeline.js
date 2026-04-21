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
    title: "Pertama kali diuji jarak tapi kita bisa melewati semua💪",
    description: "Ya hari itu tiba, waktu awal kita bertemu lalu diuji dengan jarak. Jaraknya ga main' ya langsung antar pulau😢. Mungkin kebanyakan orang bakal ngomong alah alay besok kan bakalan ketemu lagii. Tapi bukan itu pointnya, pengujian jarak ini bisa kita lewati dengan baik. Dimana aku yang awal' kesulitan buat bagi waktu untuk perform di team lalu harus belajar untuk terus berkabar yang mana notabene nya belum pernah aku alami. Tapi kamu selalu menguatkan, kasih perhatian yang luar biasa dan selalu ngingetin bahwa kasih kabar itu penting buat orang yang sedang menunggu keberadaan kita❤️. Disitu kamu bisa lebih meyakinkanku bahwa kamu itu adalah perempuan yang aku minta lewat doa selama ini😊",
    images: [
      addBasePath("/images/card_2_1.jpeg"),
      addBasePath("/images/card_2_2.jpeg"),
    ]
  },
  {
    id: 3,
    date: "2022-05-20",
    title: "Our First Trip",
    description: "Perjalanan pertama kita bersama ke pantai. Menikmati matahari terbenam, berjalan di pasir sambil berpegangan tangan. Momen yang tak terlupakan, di mana aku tahu kamulah tempat pulangku.",
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
    date: "2022-08-15",
    title: "First 'I Love You'",
    description: "Tiga kata ajaib yang mengubah segalanya. Saat kamu mengatakannya, waktu seolah berhenti. Detak jantungku semakin kencang, dan aku tahu inilah cinta yang sejati yang selalu kucari.",
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
    date: "2022-12-25",
    title: "Christmas Together",
    description: "Natal pertama kita rayakan bersama di tengah hangatnya pohon Natal dan lampu-lampu gemerlap. Kamu adalah kado terindah yang pernah kuterima dalam hidupku.",
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
    date: "2023-03-10",
    title: "Moving In Together",
    description: "Hari di mana kita mulai hidup bersama. Setiap sudut rumah kita menjadi saksi kisah cinta kita. Membangun rumah kecil yang penuh cinta dan tawa bersamamu adalah impian yang menjadi nyata.",
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
    date: "2023-08-20",
    title: "Getting Through Hard Times",
    description: "Setiap hubungan ada naik turunnya. Tapi kita berhasil melewatinya bersama. Kamu tetap di sampingku saat segalanya berat, dan aku bersamamu. Itu bukti cinta kita nyata dan kuat.",
    images: [
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400&fit=crop"
    ]
  },
  {
    id: 8,
    date: "2024-01-10",
    title: "Two Years Anniversary",
    description: "Dua tahun sudah kita bersama. Dua tahun penuh cinta, tawa, air mata, dan kebahagiaan. Setiap hari bersamamu adalah anugerah terindah yang pernah kudapatkan. Terima kasih telah memilihku.",
    images: [
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=600&h=400&fit=crop"
    ]
  },
  {
    id: 9,
    date: "2024-04-15",
    title: "The Proposal",
    description: "Duduk di pantai saat matahari terbenam, kamu mengambil satu napas dalam-dalam dan melamarku. Air mata bahagia tak bisa kutahan. 'Ya' adalah jawabanku, selamanya dan selamanya.",
    images: [
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=600&h=400&fit=crop"
    ]
  },
  {
    id: 10,
    date: "Today",
    title: "Forever & Always",
    description: "Perjalanan cinta kita masih terus berlanjut. Setiap hari bersamamu adalah hadiah yang tak ternilai. Aku mencintaimu lebih dari kata-kata bisa ungkapkan, lebih dari yang bisa kubayangkan. Terima kasih sudah menjadi bagian dari hidupku, dan terima kasih telah memilihku untuk menemani setiap langkahmu. Bersamamu, aku menemukan rumah yang sebenarnya.",
    images: [
      "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&h=400&fit=crop"
    ]
  }
];
