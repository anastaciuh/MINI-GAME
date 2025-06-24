import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { motion } from 'framer-motion';

const nirmanaData = {
    Guardian: {
        'The Observant': {
            nirmanaImage: '/nirmana/theobservant-01.png',
            nirmanaType: 'RD2D Bidang',
            nirmanaPrimer: 'Di karya ini, nirmana bidang terlihat dari susunan kotak-kotak rapi bak layar monitor beresolusi tinggi, setiap "piksel" dicermati dengan teliti, mengamati perubahan warna dan gradasi tanpa terlewat, lalu menyimpan semua data itu sebelum bertindak. Bagi The Observant, komposisi ini persis mencerminkan gaya kerjamu dalam memindai setiap kotak, mengumpulkan data, dan memahami situasi secara menyeluruh sebelum bertindak. Warna-warna lembut memperkuat kesan tenang dan fokus, menegaskan bahwa kamu lebih suka mengamati dan mencatat dulu. Komposisi ini menegaskan peranmu, yaitu berdiri di balik layar, mengamati dan mencatat detail sehingga tim selalu bergerak berdasarkan gambaran situasi yang utuh.'
        },
        'The 911': {
            nirmanaImage: '/nirmana/the911-01.png',
            nirmanaType: 'RD2D Serangga',
            nirmanaPrimer: 'Di RD2D serangga ini, ratusan kupu-kupu tampak terbang berkelindan dalam lapisan lembut berwarna pastel, itulah nirmana serangga yang menggambarkan kerja sama alami tanpa jeda. Sayap-sayap mereka saling bertumpuk dan bersentuhan, seakan membentuk anyaman dukungan yang kuat namun ringan. Bagi The 911, komposisi ini persis memvisualisasikan caramu yang selalu hadir sigap, mengepakkan "sayap" bantuanmu pada titik di mana tim mulai goyah, menutup celah kekurangan dengan sentuhan cepat dan penuh perhatian. Gradasi warna mint, peach, dan lavender menambah kehangatan, menegaskan pendekatanmu yang ramah namun tegas, kamu bagai sandaran bahu yang selalu siap, membuat setiap anggota tim merasa tenang dan percaya diri untuk terbang lebih tinggi bersama-sama.'
        },
        'The Chill Guy': {
            nirmanaImage: '/nirmana/thechillguy-01.png',
            nirmanaType: 'RD2D Bidang',
            nirmanaPrimer: 'Di karya ini, nirmana bidang tampak dari susunan kotak-kotak berwarna yang membentuk dua "zona" kontras, sebelah kiri biru tua dingin, sebelah kanan krem hangat, yang dipisahkan oleh jalur bidang kosong berwarna lembut di tengah. Jalur kosong ini ibarat lapisan udara segar di antara dua ruang, berfungsi sebagai area netral yang memberi jeda mata dan pikiran sebelum berpindah ke sisi lain. Bagi The Chill Guy, komposisi ini memvisualkan caramu meredam konflik: kamu menciptakan "zona penyangga" di tengah ketegangan, memberikan ruang untuk menarik napas dan menenangkan diri, lalu baru mengajak semua pihak untuk melanjutkan pembicaraan. Bidang kosong itu memberi waktu jeda, seperti jeda panjang dalam obrolan agar emosi mereda dan suasana kembali kondusif sebelum diskusi dilanjutkan bersama.'
        },
        'The Backbone': {
            nirmanaImage: '/nirmana/thebackbone-01.png',
            nirmanaType: 'RD2D Primer',
            nirmanaPrimer: 'Pada karya ini, RD2D primer terlihat dari deretan kotak-kotak vertikal yang terstruktur layaknya tiang-tiang pilar, setiap kolom berdiri tegak dan sejajar, tanpa ada yang bergeser. Bentuk blok yang konsisten ini menciptakan kesan fondasi kokoh: sama seperti The Backbone, kamu adalah penopang utama yang menjaga keseimbangan tim. Warna-warna hangat dan stabil dipilih untuk menegaskan keandalanmu, tiap kotak adalah tanggung jawab kecil yang selalu kamu emban, memastikan tidak ada celah atau tugas yang terlewat. Susunan yang simetris dan berulang itu menggambarkan rutinitas kerjamu, hadir tepat waktu, mengambil beban apa pun, dan menopang proses kerja tanpa perlu sorotan. Meski sederhana, pola ini menguatkan keseluruhan struktur, persis seperti peranmu yang tidak mencolok namun sangat penting, membuat tim tetap "tegak" dan berjalan lancar.'
        }
    },
    Artisan: {
        'The Idea Alchemist': {
            nirmanaImage: '/nirmana/theideaalchemist-01.png',
            nirmanaType: 'RD2D Bidang',
            nirmanaPrimer: 'Di karya ini, grid kotak-kotak yang biasanya kaku tiba-tiba merembes dan melengkung, menciptakan garis-garis spontan seakan coretan bebas di sketchbook, komposisi yang menegaskan kebebasan berpikir. Sementara itu, bidangnya ikut terdistorsi dan terpilin, membentuk ruang dinamis di mana imajinasi bisa "leluasa menari." Komposisi ini menangkap momen "eureka", detik ketika ide liar melintas, langsung kamu tuangkan tanpa ragu, persis seperti The Idea Alchemist yang alirkan gagasan lewat visual, seperti doodle spontan. Hasilnya, visual yang hidup dan tak terduga, menggambarkan kreativitasmu yang organik dan selalu siap mengubah garis lurus menjadi petualangan visual.'
        },
        'The Craftsman': {
            nirmanaImage: '/nirmana/thecraftsman-01.png',
            nirmanaType: 'RD2D Tekstur',
            nirmanaPrimer: 'Di karya RD2D ini, kamu langsung merasakan nirmana tekstur lewat kotak-kotak kecil yang permukaannya beragam, ada kilau holografik, serat kertas, dan kertas daur ulang yang terpotong acak. Bagi The Craftsman, tiap kotak seperti potongan material bekas yang kamu susun jadi mosaik baru, menunjukkan betapa kamu lihai memanfaatkan segala bahan, sekecil apa pun, menjadi sesuatu yang menarik. Variasi tekstur di sini mencerminkan caramu bereksperimen, mengutak-atik kardus, kertas, atau stiker, lalu memadukannya hingga jadi prototipe kreatif. Karya ini menangkap spiritmu, melihat potensi di bahan sehari-hari dan menjadikannya seni unik melalui sentuhan tanganmu.'
        },
        'The Puzzle Maestro': {
            nirmanaImage: '/nirmana/thepuzzlemaestro-01.png',
            nirmanaType: 'RD2D Ruang',
            nirmanaPrimer: 'Di karya ini, bentuk-bentuk zig-zag menciptakan ruang terowongan bagaikan lorong labirin mini yang tak berujung. Celah di antara "dinding" membentuk jalur alternatif, sementara volume kosongnya memberi ruang untuk bergerak dan menjelajah. Bagi The Puzzle Maestro, setiap lorong itu adalah opsi solusi: tiap lorong mewakili satu jalur solusi, kamu nggak terpaku pada satu jalan, melainkan menelusuri puluhan alternatif sampai menemukan pintu keluar. Komposisi ruang yang kompleks ini mencerminkan cara kerjamu yang fleksibel, selalu menelusuri volume kemungkinan, dan tak takut menjajal rute-rute baru hingga masalah terselesaikan.'
        },
        'The Influencer': {
            nirmanaImage: '/nirmana/theinfluencer-01.png',
            nirmanaType: 'RD2D Bidang',
            nirmanaPrimer: 'Pada karya RD2D ini, bidang-bidang asimetris yang berlubang dan bertumpuk acak menyapamu seolah menantang aturan grid biasa. Aksen warna mencolok dan kontras pada kompsisi  yang bikin mata otomatis tertarik, layaknya gaya The Influencer yang berani tampil beda dan menyimpang dari standard normal. Susunan yang tak terduga ini menggambarkan caramu untuk selalu memilih jalan unik, menciptakan tren baru, dan memikat perhatian tanpa perlu usaha berlebih. Komposisi anti‐mainstream dan kontras tajam di visual ini persis mencerminkan kepribadianmu, eye-catching, fresh, dan selalu satu langkah di depan.'
        }
    },
    Idealist: {
        'The Dreamer': {
            nirmanaImage: '/nirmana/thedreamer-01.png',
            nirmanaType: 'RD2D Ruang',
            nirmanaPrimer: 'Di karya RD2D ini, kamu langsung merasakan nirmana ruang dengan susunan bidang kotak di dinding dan langit-langit yang menciptakan ilusi kedalaman sementara bola dan kubus mengambang bebas di tengah. Ruang kosong di sekeliling objek-objek itu memberi kesan tak terbatas, seperti halaman lepas untuk ide-ide gila. Gubahan lingkaran melambangkan ide spontan dan aliran imajinasi yang bebas, tanpa sudut tajam, persis seperti caramu memikirkan kemungkinan tanpa batas. Gubahan kubus melambangkan kerangka awal atau pondasi konsep, titik di mana imajinasi mulai "dibingkai" supaya bisa diwujudkan. Bagi The Dreamer, komposisi ini persis menggambarkan caramu untuk selalu melihat peluang di "area kosong" untuk bermimpi, membiarkan gagasan mengambang sebelum diwujudkan, dan berani melompat ke ruang imajinasi yang belum pernah dijelajahi. Sederhana, tapi kuat, kaya ini memvisualkan keyakinanmu bahwa setiap proses kreatif lahir dari eksplorasi tanpa batas.'
        },
        'The Therapist': {
            nirmanaImage: '/nirmana/thetherapist-01.png',
            nirmanaType: 'RD2D Bidang',
            nirmanaPrimer: 'Pada karya RD2D ini, kamu melihat bidang-bidang hangat yang saling tumpang-tindih membentuk pusaran pelukan, tanpa celah di mana pun, bahkan sampai tepinya, seolah menciptakan ruangan tertutup yang sepenuhnya melindungi. Setiap kotak yang rapat mencerminkan cara The Therapist menjaga rahasia dan menciptakan zona nyaman, tidak ada celah untuk kebocoran, semua cerita disambut dengan penuh empati dan aman untuk dibagikan. Nirmana ini menegaskan kehadiranmu yang selalu siap memeluk dan merangkul, menenangkan siapa saja yang butuh tempat curhat. Warna‐warna hangat dengan gradasi lembut menenangkan pandangan, sama seperti alur bicaramu yang menenangkan saat teman bercerita. Nirmana ini cocok mewakili The Therapist, selalu hadir dengan empati, menciptakan "zona nyaman" agar setiap orang merasa didengar, dipahami, dan aman untuk membuka diri.'
        },
        'The Goal Digger': {
            nirmanaImage: '/nirmana/thegoaldigger-01.png',
            nirmanaType: 'RD2D Bidang',
            nirmanaPrimer: 'Pada karya RD2D ini, ratusan modul‐modul kecil menampilkan pola bergelombang berulang, itulah transformasi visual yang mewakili semangat The Goal Digger. Warna biru tua di pinggir berubah perlahan ke ungu, menanjak ke merah muda, lalu meledak jadi kuning cerah di tengah, persis seperti cara kamu menularkan energi, mulai dari sapaan ringan, naik jadi semangat bareng, sampai seluruh tim terasa "meledak" motivasi. Setiap kotak kecil adalah "dorongan", satu dukungan darimu memicu dukungan berikutnya, hingga akhirnya keseluruhan bidang tampak penuh tenaga. Visual ini menggambarkan kumpulan modul‐modul kecil yang berubah warna menjadi gelombang energi, menuntun tim untuk terus maju hingga tujuan tercapai.'
        },
        'The Change Maker': {
            nirmanaImage: '/nirmana/thechangemaker-01.png',
            nirmanaType: 'RD2D Transformasi',
            nirmanaPrimer: 'Pada karya RD2D ini, tampak adanya ratusan modul kecil yang tersusun rapi membentuk gelombang yang berubah warna, sebagaimana setiap langkah kecil yang kamu ambil ikut "menyulut" perubahan. Satu per satu modul menyala, menandakan aksi sederhana yang berdampak besar hingga akhirnya seluruh modul tampak cerah dan penuh energi. Bagi The Change Maker, setiap modul mewakili satu aksi nyata, gerakan kecil yang kamu inisiasi untuk memecah kebekuan. Saat modul-modul ini berbaris dan berpola, mereka menunjukkan bagaimana ide dan upaya sederhana bisa menyebar, saling memicu, dan akhirnya menciptakan dampak yang terlihat. RD2D Transformasi ini menggambarkan semangatmu, tidak menunggu sempurna, tapi berani memulai satu langkah kecil demi satu langkah kecil hingga terwujud perubahan nyata.'
        }
    },
    Rationalist: {
        'The Planner': {
            nirmanaImage: '/nirmana/theplanner-01.png',
            nirmanaType: 'RD2D Ruang',
            nirmanaPrimer: 'Pada pola "maze" isometrik RD2D ini, kamu melihat kotak-kotak pink tampak seperti lego yang tersusun rapi. Setiap "blok" mewakili sesi atau deadline,  persis dengan cara The Planner membagi hari dan memetakan langkah demi langkah supaya semuanya on-track. Setelah satu kotak selesai, kamu pindah ke blok berikutnya, persis seperti menyusun rangkaian jadwal agar berjalan tertib. Susunan baris dan kolom mengarahkan langkah kerja kamu.  Hasilnya, rencana harianmu tersistem dengan sempurna, tinggal jalanin saja tanpa khawatir ada yang terlewat.'
        },
        'The Organizer': {
            nirmanaImage: '/nirmana/theorganizer-01.png',
            nirmanaType: 'RD2D Transformasi',
            nirmanaPrimer: 'Pada karya RD2D ini, kamu melihat kotak-kotak rapi tersusun dalam grid yang kemudian warnanya berganti mengikuti pola yang konsisten seakan menandai alur kerja. Bagi The Organizer, ini ibarat papan sticky note digital, setiap tugas punya kotak sendiri, dan warnanya berubah sesuai status dari biru (belum mulai), menjadi kuning (sedang dikerjakan), lalu ungu (selesai). Susunan bidang membuat tiap pekerjaan tertata di "wadah"nya masing-masing, sedangkan perubahan warna langsung memberi tahu status tugas. Dengan sekali lihat, kamu tahu mana yang harus dikerjakan, mana yang sudah beres, dan semuanya berjalan sesuai rencana tanpa kebingungan.'
        },
        'The Strategist': {
            nirmanaImage: '/nirmana/thestrategist-01.png',
            nirmanaType: 'RD2D Ruang',
            nirmanaPrimer: 'RD2D ini menampilkan kubus‐kubus yang "mengambang" di dalam lengkungan berlapis, membagi ruang jadi beberapa area terpisah, persis seperti cara The Strategist bekerja, yakni memetakan setiap "zona masalah" dulu, baru mengeksekusi satu per satu. Warna ungu di latar memberi kesan tenang dan fokus saat melakukan analisis, sedangkan oranye di kubus menandai keberanian dalam  pengeksekusian setelah pemecahan masalah selesai.Secara keseluruhan, visual ini berfungsi sebagai peta strategi yang memandu langkah "analisis dulu, baru aksi."'
        },
        'The Executor': {
            nirmanaImage: '/nirmana/theexecutor-01.png',
            nirmanaType: 'RD2D Bidang',
            nirmanaPrimer: 'Pada karya RD2D ini, nirmana bidang terlihat dari kotak-kotak solid yang tersusun sangat rapi, posisi tiap bidang tegas dan bersih, mencerminkan langkah-langkah aksi nyata yang langsung tuntas tanpa basa-basi. Lalu, warna oranye yang tersebar di berbagai kotak bagaikan percikan energi dan dorongan, seolah jadi "titik aksi" pertama yang menarik perhatian, lalu menyebar ke kotak-kotak di sekitarnya, menunjukkan bagaimana semangat eksekusi The Executor menular ke seluruh tim. Selain itu, warna oranye yang tersebar melambangkan titik aksi nyata yang langsung dikerjakan tanpa bertele‐tele, Hasilnya terlihat jelas dan konkret. Setiap blok oranye menunjukkan langkah yang tuntas, tanpa drama. Komposisi bidang yang rapi dipadu dengan semburan oranye ini menggambarkan karakter The Executor, sistematis, fokus pada eksekusi, dan selalu menampilkan hasil nyata.'
        }
    }
};


const NirmanaPage = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { winner, name } = state || {};

    const data = (winner && name && nirmanaData[winner]?.[name]) || {
        nirmanaImage: '/images/Nirmana.png',
        nirmanaType: 'RD2D Primer',
        nirmanaPrimer: 'deskripsi nirmana'
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-start bg-[url('/images/bgwarna.png')] md:bg-[url('/images/bgwarnadesktop.png')] bg-cover bg-center overflow-hidden">
            <div className="bg-white/30 backdrop-blur-sm rounded-sm p-8 mt-4 ml-4 mr-4 mb-8 text-center max-w-md mx-4 space-y-7 lex flex-col items-center">
                <h1 className="font-oddval text-3xl font-bold text-[#3325bc] mt-2">{data.nirmanaType}</h1>               
                 <p className="font-host text-[#3325bc] drop-shadow-2xl font-semibold text-xs leading-relaxed px-2 md:px-8 flex-justify-text text-justify">{data.nirmanaPrimer}</p>
            </div>
            <motion.img
                src={data.nirmanaImage}
                alt="Nirmana"
                className="max-h-[80vh] w-auto mx-auto drop-shadow-xl -mt-40 md:-mt-45"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'tween', ease: 'easeOut', duration: 1.6 }}
            />
            <div className="flex justify-between mt-5 md:mt-5 px-4 md:px-8 w-full max-w-md mx-auto">
                <Button text="Back" onClick={() => navigate(-1)} variant="secondary" />
                <Button text="Cari RD2D" onClick={() => navigate('/TeknisPengunggahan')} />
            </div>
        </div>
    );
};

export default NirmanaPage;