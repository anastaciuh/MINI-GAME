import React, { useMemo, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const subcatConfig = {
    Guardian: {
        key: 'Guardian',
        subcategories: [
            { 
                max: 11, 
                name: 'The Observant', 
                src: '/nirmana/observantreal-01.png',
                desc: 'Kayanya mending aku liat-liat dulu deh, biar ngerti dulu situasinya. Menjaga, mengamati, dan mencatat... tapi belum tentu ikut turun tangan. Kamu selalu tahu situasi terbaru, sigap membaca dinamika kelompok, dan piawai menangkap detail. Lebih suka jadi pengamat dibanding terjun langsung, tapi perannya krusial dalam menjaga stabilitas.'
            },
            { 
                max: 22, 
                name: 'The 911', 
                src: '/nirmana/911real-01.png',
                desc: 'Sini aku bantuin, kamu butuh bantuan di bagian apa? Gercep saat temanmu minta bantuan, selalu bisa diandalkan. Kamu memiliki julukan "Si paling siap sedia" untuk membantu siapa pun dan menjadi andalan dalam urusan pertolongan dan teamwork. Pasti ada kalau kelompok lagi butuh sandaran bahu ekstra.'
            },
            { 
                max: 33, 
                name: 'The Chill Guy', 
                src: '/nirmana/chillguyreal-01.png',
                desc: 'Udah udah, jangan berantem. Tenangin diri dulu yuk, abis itu kita coba bahas lagi. Kamu bagaikan AC dalam ruangan... kalau suasana mulai memanas, langsung jadi penetral suasana. Ahli dalam mencairkan suasana dan menengahi konflik. Selalu berusaha menjaga harmoni dalam tim, tahu kapan harus bicara dan kapan cukup mendengarkan. Sosok asli penyejuk di tengah drama kampus.'
            },
            { 
                max: 45, 
                name: 'The Backbone', 
                src: '/nirmana/backbonereal-01.png',
                desc: 'Kalau ada yang belum beres, kasih tau aja ya. Harus kompak semuanya, oke? Kamu yang dinamakan pilar kelompok yang sesungguhnya. Konsisten, bisa diandalkan kapan saja, dan jadi fondasi setiap kerjasama. Nggak selalu jadi pusat perhatian, tapi tanpa kehadirannya, kelompok sering kehilangan arah.'
            },
        ],
    },
    Artisan: {
        key: 'Artisan',
        subcategories: [
            { 
                max: 11, 
                name: 'The Idea Alchemist', 
                src: '/nirmana/ideaalchemistreal-01.png',
                desc: 'Eh bentar aku kebayang sesuatu, tapi aku jelasinnya pake gambar ya. Idemu selalu mengalir. Setiap diskusi, tangan refleks menuangkan gagasan lewat gambar. Doodle spontanmu sering jadi pemicu inspirasi visual bagi teman-teman. Tak jarang, coretan isengmu justru jadi awal dari konsep besar yang dikembangkan bareng-bareng satu kelompok.'
            },
            { 
                max: 22, 
                name: 'The Craftsman', 
                src: '/nirmana/craftsmanreal-01.png',
                desc: 'Eh, ini kardus bekas jangan dibuang dulu. Bisa nih kalo dibikin jadi prototipe produk. Kamu ahli mengubah hal sederhana jadi sesuatu yang menarik. Saat bosan, selalu menemukan cara kreatif untuk berkreasi bahkan barang tak terpakai pun bisa disulap jadi karya museum worthy. Buatmu, setiap benda punya potensi dan ide segar sering muncul dari hal-hal yang dianggap sepele oleh orang lain.'
            },
            { 
                max: 33, 
                name: 'The Puzzle Maestro', 
                src: '/nirmana/puzzlemaestroreal-01.png',
                desc: 'Ada masalah? Santai, aku punya 10 cara lainnya, siapa tau aja berhasil. Andalan di saat situasi serba buntu. Otaknya selalu punya cara alternatif dan inovatif, nggak takut ambil risiko, dan siap jadi sumber solusi dengan ide-ide out of the box. Sering jadi tempat bertanya saat kelompok kehabisan akal, karena solusi unik yang kamu tawarkan kadang justru jadi jawaban paling efektif di kondisi darurat.'
            },
            { 
                max: 45, 
                name: 'The Influencer', 
                src: '/nirmana/influencerreal-01.png',
                desc: 'Aku coba konsep yang sedikit beda ya, kayanya kalo ngikutin yang lama agak bosen. Satu langkah di depan urusan gaya dan inovasi, alias the trendsetter. Kamu sering jadi inspirasi teman tanpa perlu effort berlebihan, selalu up-to-date dengan tren, dan berani tampil beda. Kamu kerap menjadi pencetus tren, entah soal style, karya, atau cara kerja di kelas. Karena itu, keunikan dan keberanianmu selalu menarik perhatian, baik di lingkup studio maupun media sosial!'
            },
        ],
    },
    Idealist: {
        key: 'Idealist',
        subcategories: [
            { 
                max: 11, 
                name: 'The Dreamer', 
                src: '/nirmana/dreamerreal-01.png',
                desc: 'Emang terlalu liar ya idenya? Keren nggak sih kalau hasilnya terwujudkan. Visioner yang suka berpikir jauh ke depan. Punya sudut pandang unik dalam melihat tugas, selalu mencari makna lebih dalam setiap proses. Ide-ide kreatif sering kamu awali dengan imajinasi yang luas, dan nggak jarang keberanianmu bermimpi membawa kelompok ke arah yang nggak terpikirkan sebelumnya. Bagi kamu, karya terbaik lahir dari eksplorasi tanpa batas dan keyakinan bahwa setiap proses punya cerita sendiri.'
            },
            { 
                max: 22, 
                name: 'The Therapist', 
                src: '/nirmana/therapistreal-01.png',
                desc: 'Kamu kenapa? lagi ada masalah ya? Keliatan soalnya, sini cerita. Kamu teman curhat sejuta umat, selalu hadir buat dengerin cerita dan memberi rasa aman. Empatinya tinggi, jago menjaga rahasia, dan gampang nyambung sama siapa pun.'
            },
            { 
                max: 33, 
                name: 'The Goal Digger', 
                src: '/nirmana/goaldiggerreal-01.png',
                desc: 'Ayo semangat guys, dikit lagi kelar kok! Abis ini kita healing ya! Kamu bagaikan virus yang menularkan energi positif. Teman-teman sering recharge motivasi dari kamu karena kamu mood booster andalan, selalu menebar energi positif ke sekitar. Sering jadi motivator dadakan dan penyemangat di tengah tugas yang menumpuk.'
            },
            { 
                max: 45, 
                name: 'The Change Maker', 
                src: '/nirmana/changemakerreal-01.png',
                desc: 'Daripada cuman ngomel, mending kita mulai gerak, kadang satu langkah kecil aja udah bisa bikin beda. Bukan sekadar mengajak, tapi menunjukkan keberanian menginisiasi perubahan dan memberi dampak nyata. Kamu nggak bisa liat sistem nggak adil, selalu terdorong untuk melakukan perubahan. Kalo diem, pasti lagi merancang gebrakan baru. Nggak pernah betah di zona nyaman, paling cepat gerak kalau ada masalah atau ketidakadilan. Orang-orang di sekitarmu mengagumi niat kuatmu buat bikin perubahan nyata.'
            },
        ],
    },
    Rationalist: {
        key: 'Rationalist',
        subcategories: [
            { 
                max: 11, 
                name: 'The Planner', 
                src: '/nirmana/plannerreal-01.png',
                desc: 'Bikin jadwal bareng yuk! Biar semua kebagian tugas dan nggak kepepet deadline. Kamu rajin merancang jadwal dan tugas biar semua terorganisir. Ahli manajemen waktu, anti drama mepet deadline, pokoknya kerjaan selalu on track dan on point. Tanpa kamu, deadline bisa berantakan, organisasi adalah koentji!'
            },
            { 
                max: 22, 
                name: 'The Organizer', 
                src: '/nirmana/organizerreal-01.png',
                desc: 'Sabar ya, aku lagi rapihin sketsa dan moodboard, biar nanti ga pusing. Semua tugasmu ditulis rapi di sticky notes. Notifikasi kalender jadi sarapanmu, ingetin mulainya meeting sampai waktu janjian sama temen. Di tengah obrolan santai, kamu pasti sempatin catet ide penting di notebook, memastikan semuanya terjadwal, terorganisir, dan… yang paling penting, berjalan lancar tanpa drama.'
            },
            { 
                max: 33, 
                name: 'The Strategist', 
                src: '/nirmana/strategistreal-01.png',
                desc: 'Coba kita pecah dulu masalahnya satu-satu deh, kalau udah ketahuan penyebabnya, gampang cari solusinya. Jago baca situasi, analisis masalah, dan nyusun strategi dengan membedah masalah jadi bagian-bagian kecil. Setiap tantangan dihadapi dengan analisis mendalam, lalu dirancang strategi terbaik sebelum bergerak. "Analisis dulu, baru aksi" adalah moto hidupmu.'
            },
            { 
                max: 45, 
                name: 'The Executor', 
                src: '/nirmana/executorreal-01.png',
                desc: 'Kalau udah fix, aku langsung kerjain aja ya. Biar cepet kelar, nanti baru kita review bareng. Buatmu, aksi nyata selalu jadi prioritas. Kamu nggak suka bertele-tele, lebih suka langsung turun tangan dan membuktikan lewat hasil. Setiap target yang kamu pegang biasanya tuntas tanpa drama, dan kerja kerasmu sering jadi panutan buat yang lain. Singkatnya, kamu nggak banyak basa-basi, langsung eksekusi. Result speaks louder than words.'
            },
        ],
    },
};

const backgroundImages = {
    Artisan: {
        mobile: '/images/bgartisan.PNG',
        desktop: '/images/bgartisandesktop.PNG',
    },
    Guardian: {
        mobile: '/images/bgguardian.png',
        desktop: '/images/bgguardiandesktop.png',
    },
    Idealist: {
        mobile: '/images/bgidealist.PNG',
        desktop: '/images/bgidealistdesktop.PNG',
    },
    Rationalist: {
        mobile: '/images/bgrationalist.PNG',
        desktop: '/images/bgrationalistdesktop.PNG',
    },
};

export default function ResultPage() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const answers = state?.answers || {};

    // Calculate total points per type
    const totals = useMemo(() => {
        const acc = { Guardian: 0, Artisan: 0, Idealist: 0, Rationalist: 0 };
        for (const key in answers) {
            const answer = answers[key];
            if (answer && answer.type && answer.score) {
                if (acc[answer.type] !== undefined) {
                    acc[answer.type] += answer.score;
                }
            }
        }
        return acc;
    }, [answers]);

    // Find the type with the highest total
    const winner = useMemo(() => {
        return Object.keys(totals).reduce((a, b) => (totals[a] >= totals[b] ? a : b), 'Artisan');
    }, [totals]);


    const { name, src, desc } = useMemo(() => {
        const config = subcatConfig[winner];
        if (!config) {
            return { name: 'Unknown', src: '', desc: 'No result found.' };
        }
        const totalScore = totals[winner];
        const subcategory = config.subcategories.find(item => totalScore <= item.max);

        return subcategory || { name: 'Unknown', src: '', desc: 'No subcategory found.' };
    }, [winner, totals]);

    const [bgImage, setBgImage] = useState('');

    useEffect(() => {
        const updateBgImage = () => {
            const selectedBgs = backgroundImages[winner];
            if (selectedBgs) {
                if (window.innerWidth >= 768) { // md breakpoint in Tailwind
                    setBgImage(selectedBgs.desktop);
                } else {
                    setBgImage(selectedBgs.mobile);
                }
            }
        };

        updateBgImage();
        window.addEventListener('resize', updateBgImage);

        return () => window.removeEventListener('resize', updateBgImage);
    }, [winner]);

    return (
        <div
          className="flex flex-col h-screen p-6 bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          {/* ==== Konten Utama ==== */}
          <div className="relative z-10 flex-1 flex flex-col items-center justify-center w-full">
            <img
              src={src}
              alt={`${winner} – ${name}`}
              className="w-full max-w-md md:max-w-lg lg:max-w-md mx-auto mb-10 md:-mt-30"
            />
          </div>
    
          {/* ==== Tombol di Bawah ==== */}
          <div className="relative z-10 flex justify-center w-full md:-mt-20">
            <Button
              onClick={() => navigate('/NirmanaPage', { state: { winner, name } })}
              text="Lihat RD2D"
              className="px-8 py-3 mx-auto block"
            />
          </div>
        </div>
      );
    }