import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const questions = [
  {
    question: "Hore! Kamu telah berhasil menjadi mahasiswa TPB FSRD ITB 2025~ Hari pertama masuk kelas, suasana masih canggung banget... Hal pertama yang kamu lakukan?",
    image: "/gif/satu.gif",
    options: [
      { text: "Buka sketchbook dan doodling sambil menunggu orang lain menyapamu", type: "Artisan", score: 4 },
      { text: "Tersenyum dan menyapa teman baru di sampingmu", type: "Guardian", score: 3 },
      { text: "Mengamati suasana dan mengenali pola interaksi teman baru", type: "Rationalist", score: 2 },
      { text: "Merenung tentang pencapaianmu menjadi \"maba\" di kampus impian", type: "Idealist", score: 1 },
    ],
  },
  {
    question: "Kamu memasuki kelas... dosen memaparkan materi dan tanpa basa-basi langsung memberi tugas kelompok pertama, topiknya bebas! Gaya kamu di awal brainstorming seperti apa?",
    image: "/gif/dua.gif",
    options: [
      { text: "Biar nggak awkward, kenalan bareng dulu aja, sambil diskusi santai", type: "Guardian", score: 2 },
      { text: "Keluarin sketchbook atau iPad, spontan coret-coret ide visual dan tunjukkin ke kelompok", type: "Artisan", score: 3 },
      { text: "Ajak kelompok mikir gimana ide kita bisa memberi dampak kecil yang berarti", type: "Idealist", score: 4 },
      { text: "Merancang timeline, pembagian tugas, dan rundown step-by-step biar semua jelas", type: "Rationalist", score: 1 },
    ],
  },
  {
    question: "Setelah berdiskusi dengan kelompok, kalian melakukan asistensi kepada dosen terhadap ide yang kalian kembangkan. Namun, tiba-tiba, dosen memberi revisi besar-besaran. Apa respon pertamamu?",
    image: "/gif/tiga.gif",
    options: [
      { text: "Menganalisis feedback dan membuat catatan revisi", type: "Rationalist", score: 3 },
      { text: "Evaluasi bareng teman, saling menguatkan, dan brainstorming solusi", type: "Guardian", score: 4 },
      { text: "Eksperimen mengganti konsep atau teknik yang lebih seru dan beda", type: "Artisan", score: 2 },
      { text: "Refleksi revisian dari dosen, \"Kira-kira kenapa dosen minta revisi, ya? Jangan-jangan ada nilai yang belum tersampaikan.\"", type: "Idealist", score: 1 },
    ],
  },
  {
    question: "Disaat kelompok lain sudah selesai, kelompokmu justru \"mentok\". Bagaimana cara kamu menghadapinya?",
    image: "/gif/empat.gif",
    options: [
      { text: "Membuka sesi brainstorming bebas, siapa pun boleh kasih ide \"gila\"", type: "Artisan", score: 2 },
      { text: "Mengatur ulang pembagian tugas dan cek progres satu-satu", type: "Rationalist", score: 4 },
      { text: "Memberi semangat dan mengingatkan tujuan awal kelompok", type: "Idealist", score: 3 },
      { text: "Menciptakan suasana santai, ajak istirahat sejenak bareng", type: "Guardian", score: 1 },
    ],
  },
  {
    question: "SUDAH TIBA SAATNYA KELOMPOKMU AKAN MELAKUKAN PRESENTASI DI DEPAN KELAS!! Apa peranmu biasanya dalam kelompok?",
    image: "/gif/lima.gif",
    options: [
      { text: "Bikin visual presentasi sekreatif dan seunik mungkin", type: "Artisan", score: 1 },
      { text: "Membuat script & membagi giliran presentasi", type: "Rationalist", score: 2 },
      { text: "Menyemangati teman yang gugup", type: "Guardian", score: 3 },
      { text: "Membuka presentasi dengan cerita pengalaman pribadi yang relate ke tema, biar audiens merasakan makna dan relevansi karya kita", type: "Idealist", score: 4 },
    ],
  },
  {
    question: "Saat kamu melihat ke sebelahmu, ada satu temanmu gugup berat. Apa yang kamu lakukan?",
    image: "/gif/enam.gif",
    options: [
      { text: "Menawari diri untuk menemani dan siap jadi backup kalau ia tiba-tiba blank.", type: "Guardian", score: 3 },
      { text: "Menyusun ulang flow presentasi agar dia mendapat giliran setelah melihat contoh dari yang lain dulu, biar lebih siap secara teknis.", type: "Rationalist", score: 4 },
      { text: "Membuat stiker meme lucu dan kirimkan ke dia, agar suasana lebih santai", type: "Artisan", score: 2 },
      { text: "Memastikan dia tahu dia tidak sendiri dan kita semua ada di sini untuk membantunya.", type: "Idealist", score: 1 },
    ],
  },
  {
    question: "\"Aduh! presentasi kita kurang maksimal nih! Makanya dosen kasih kita feedback banyak banget\" ucap salah satu temanmu dengan nada sebal dan kelompok saling menyalahkan satu dengan yang lain, mengakibatkan konflik kecil. Apa yang kamu lakukan?",
    image: "/gif/tujuh.gif",
    options: [
      { text: "Mengusulkan sesi sharing dan refleksi bareng-bareng", type: "Idealist", score: 4 },
      { text: "Mempertemukan semua pihak, cari solusi bareng", type: "Guardian", score: 2 },
      { text: "Membuat analisis akar masalah dan alternatif jalan keluar", type: "Rationalist", score: 1 },
      { text: "Menginisiasi memperbaiki desain bareng menggunakan pendekatan baru agar tidak terlalu lama larut dalam konflik", type: "Artisan", score: 3 },
    ],
  },
  {
    question: "Phew... akhirnya, setelah kelas yang melelahkan, tiba waktu istirahat makan siang. Biasanya kamu?",
    image: "/gif/delapan.gif",
    options: [
      { text: "Eksplor spot unik sekitar kampus untuk mencari inspirasi sketching", type: "Artisan", score: 2 },
      { text: "Nongkrong rame-rame bareng kelompok sambil cerita-cerita", type: "Guardian", score: 4 },
      { text: "Menyelesaikan menyatat feedback dan to-do list sebelum akirnya bergegas istirahat", type: "Rationalist", score: 3 },
      { text: "Ngobrol ringan bareng teman soal hidup dan cita-cita", type: "Idealist", score: 1 }, //
    ],
  },
  {
    question: "\"Sudah jam berapa ini? OH GAWAT , SUDAH PUKUL 1 SIANG!\" jam istirahat berjalan begitu saja dan bentar lagi mulai memasuki mata kuliah selanjutnya, tapi... kamu belum makan apa-apa. Makanan apa yang akan kamu pilih?",
    image: "/gif/sembilan.gif",
    options: [
      { text: "Snack bar karena praktis, bisa dimakan sambil jalan ke kelas", type: "Rationalist", score: 1 },
      { text: "Beli gorengan satu kresek, sekalian buat dibagi ke teman-teman yang lain", type: "Guardian", score: 3 },
      { text: "Beli snack ringan yang banyak lalu racik sendiri di kelas, soalnya ga ada makanan yang menarik", type: "Artisan", score: 4 },
      { text: "Aku sih bawa bekal dari rumah, soalnya rasanya lebih ngena kalo dibuat oleh sendiri", type: "Idealist", score: 2 },
    ],
  },
  {
    question: "Untungnya, kamu memasuki kelas tepat waktu. Namun.... hoam... kelas terasa membosankan, kira-kira ngapain ya?",
    image: "/gif/sepuluh.gif",
    options: [
      { text: "Rancang catatan ringkas untuk mengalihkan bosannya dengan cara yang bermanfaat", type: "Rationalist", score: 2 },
      { text: "Melakukan sketsa iseng di catatan", type: "Artisan", score: 4 },
      { text: "Mengingatkan dirimu dan lain agar tetap fokus untuk menghargai dosen", type: "Guardian", score: 1 },
      { text: "Aktif bertanya atau sharing insight kepada teman di sebelahmu", type: "Idealist", score: 3 },
    ],
  },
  {
    question: "Di tengah-tengah kelas, kamu kepikiran akan tugasmu yang mulai numpuk dan harus mulai nyicil. Kira-kira tempat ideal seperti apa yang akan kamu pilih untuk mengerjakan tugasmu setelah kelas?",
    image: "/gif/sebelas.gif",
    options: [
      { text: "Nongkrong sambil mengerjakan tugas bareng teman di basecamp", type: "Guardian", score: 3 },
      { text: "Tempat yang tenang dan teratur, seperti kamarku!", type: "Rationalist", score: 4 },
      { text: "Tempat dengan banyak inspirasi visual, mungkin seperti taman kampus", type: "Artisan", score: 1 },
      { text: "Café yang cozy dan penuh suasana", type: "Idealist", score: 2 },
    ],
  },
  {
    question: "Tentunya, kamu merasa jenuh dan overwhelmed karena tugas yang terus masuk tanpa henti. Bagaimana kamu mengatasinya?",
    image: "/gif/duabelas.gif",
    options: [
      { text: "Mengubah suasana workspace dan mencoba teknik mengerjakan yang baru supaya lebih enjoy", type: "Artisan", score: 4 },
      { text: "Menyusun to-do-list dan susun prioritas agar tujuan jelas", type: "Rationalist", score: 2 },
      { text: "Jalan-jalan bareng teman atau sekadar ngobrol santai untuk membersihkan pikiran", type: "Guardian", score: 3 },
      { text: "Tuangkan pikiranmu ke dalam journal atau media sosial  sebagai bentuk refleksi dan pelampiasan", type: "Idealist", score: 1 },
    ],
  },
  {
    question: "Kamu diajak oleh temanmu mengikuti lomba desain secara mendadak, apa yang kamu lakukan?",
    image: "/gif/tigabelas.gif",
    options: [
      { text: "Langsung daftar, tantangan baru = peluang eksplorasi!", type: "Artisan", score: 4 },
      { text: "Cek jadwal untuk menyesuaikan dengan tugas dan kelompok", type: "Rationalist", score: 2 },
      { text: "Mengajak semua anggota ngobrol bareng, memastikan semua merasa siap untuk mengikuti lombanya", type: "Guardian", score: 1 },
      { text: "Bertanya dulu apa makna lomba ini bagi diri sendiri", type: "Idealist", score: 3 },
    ],
  },
  {
    question: "Di luar tugas dan keperluan kuliah, kamu sering…",
    image: "/gif/empatbelas.gif",
    options: [
      { text: "Membuat personal project di rumah", type: "Artisan", score: 2 },
      { text: "Mengajak teman jalan-jalan", type: "Guardian", score: 4 },
      { text: "Merancang jadwal mingguan", type: "Rationalist", score: 3 },
      { text: "Bertukar cerita dengan teman", type: "Idealist", score: 1 },
    ],
  },
  {
    question: "Menjelang akhir semester, nilai apa yang paling kamu syukuri?",
    image: "/gif/limabelas.gif",
    options: [
      { text: "Kreativitas tanpa batas", type: "Artisan", score: 3 },
      { text: "Kompak dan saling dukung", type: "Guardian", score: 2 },
      { text: "Disiplin dan sistem yang efektif", type: "Rationalist", score: 4 },
      { text: "Tetap setia pada nilai dan mimpi", type: "Idealist", score: 1 },
    ],
  },
  {
    question: "Akhirnya, setelah melewati semester satu yang cukup hectic, libur semester dimulai~ Agenda pertama yang kamu rencanakan adalah…",
    image: "/gif/enambelas.gif",
    options: [
      { text: "Bereksplorasi bikin project seni personal dan mengembangkan skill", type: "Artisan", score: 1 },
      { text: "Menulis refleksi tentang perjalanan satu semester", type: "Idealist", score: 4 },
      { text: "Mengatur jadwal baru untuk resolusi semester depan", type: "Rationalist", score: 3 },
      { text: "Membuat rencana reunion bareng sahabat-sahabatmu", type: "Guardian", score: 2 },
    ],
  },
  {
    question: "Jika harus merefleksikan satu semester yang kamu lewati, satu hal yang paling mungkin kamu pelajari sebagai mahasiswa baru TPB FSRD?",
    image: "/gif/tujuhbelas.gif",
    options: [
      { text: "Pentingnya menjaga hubungan baik dengan semua orang", type: "Guardian", score: 2 },
      { text: "Selalu berani keluar dari zona nyaman, mencoba hal baru, dan mengekspresikan id-ide unikmu", type: "Artisan", score: 3 },
      { text: "Makna proses dan value dalam berkarya", type: "Idealist", score: 4 },
      { text: "Cara mengatur waktu dan prioritas dengan lebih baik", type: "Rationalist", score: 1 },
    ],
  }
];

const QuizPage = () => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isNavigating, setIsNavigating] = useState(false);
  const navigate = useNavigate();

  const handleAnswer = (type, score) => {
    setIsNavigating(true);
    const newAnswers = { ...answers, [current]: { type, score } };
    setAnswers(newAnswers);

    setTimeout(() => {
      if (current < questions.length - 1) {
        setCurrent(current + 1);
      } else {
        navigate('/ResultPage', { state: { answers: newAnswers } });
      }
      setIsNavigating(false);
    }, 300);
  };

  const handleBack = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const handleNext = () => {
    const answeredCount = Object.keys(answers).length;
    if (current < answeredCount) {
      setCurrent(current + 1);
    }
  };

  const answeredQuestions = Object.keys(answers).length;
  const progress = (answeredQuestions / questions.length) * 100;

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-6 bg-cover bg-center bg-[url('/images/bgwarna.png')] md:bg-[url('/images/bgwarnadesktop.png')]"
    >
      <div className="w-full max-w-xl mx-auto mt-2 relative">
        <div className="bg-white/50 rounded-full h-4">
          <div
            className="bg-[#3425ad] h-4 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="flex items-start max-w-md mt-8 mb-4">
        <span className="font-oddval text-[#3325bc] text-3xl font-bold mr-4">Q{current + 1}</span>
        <p className="font-host text-[#3325bc] text-lg font-bold">
          {questions[current].question}
        </p>
      </div>

      {questions[current].image && (
        <img
          src={questions[current].image}
          alt="Question Illustration"
          className="w-60 h-auto mb-4"
        />
      )}

      <div className="space-y-5 w-full max-w-xl mx-auto">
        {questions[current].options.map((opt, idx) => (
          <Button
            key={idx}
            text={opt.text}
            onClick={() => handleAnswer(opt.type, opt.score)}
            variant="quiz"
            className={answers[current]?.type === opt.type ? "ring-2 ring-white" : ""}
          />
        ))}
      </div>

      <div className="flex justify-between w-full max-w-xl mx-auto mt-auto pt-10">
        <button onClick={handleBack} disabled={current === 0} className="quiz-nav-button disabled:opacity-50">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        <button onClick={handleNext} disabled={isNavigating || current >= answeredQuestions} className="quiz-nav-button disabled:opacity-50">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default QuizPage;
