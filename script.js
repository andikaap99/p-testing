// function untuk logout
function logout() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'index.html';
}


// function untuk menampilkan menu dropdown
let activeMenu = null;

function toggleMenu(id) {
    const submenu = document.getElementById(id);

    //tutup menu yang terbuka
    if (activeMenu && activeMenu !== submenu) {
            activeMenu.classList.add("hidden");
    }

    //toggle menu yang di klik
    submenu.classList.toggle("hidden");

    //simpan active menu
    activeMenu = submenu.classList.contains("hidden") ? null : submenu;
}


let activeMenu2 = null;

function toggleMenu2(id) {
    const submenu = document.getElementById(id);

    //tutup menu yang terbuka
    if (activeMenu2 && activeMenu2 !== submenu) {
        activeMenu2.classList.add("hidden");
    }

    //toggle menu yang di klik
    submenu.classList.toggle("hidden");

    //simpan active menu
    activeMenu2 = submenu.classList.contains("hidden") ? null : submenu;
}


let activeMenu3 = null;

function toggleMenu3(id) {
    const submenu = document.getElementById(id);

    //tutup menu yang terbuka
    if (activeMenu3 && activeMenu3 !== submenu) {
        activeMenu3.classList.add("hidden");
    }

    //toggle menu yang di klik
    submenu.classList.toggle("hidden");

    //simpan active menu
    activeMenu3 = submenu.classList.contains("hidden") ? null : submenu;
}


//function untuk menampilkan sidebar
const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
let isOpenSideBar = false;

menuBtn.addEventListener('click', () => {
    isOpenSideBar = !isOpenSideBar;
    sidebar.classList.toggle('slide-in');
    sidebar.classList.toggle('slide-out');
    menuBtn.innerHTML = isOpenSideBar ? '&times;' : '☰';
});


// function untuk menampilkan konten
function loadContent(page) {
    fetch(page)
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
        })
        .catch(error => console.error('Gagal memuat konten:', error));
}


// function untuk zoom gambar
function openModal(imageSrc, scale = 1, type = 'tinggi') {
  const modalImage = document.getElementById('modalImage');

  // Cek ukuran layar
  if ((window.innerWidth >= 320 && window.innerWidth < 360) && type == 'tinggi') {
    scale = scale - 0.4;
  } else if ((window.innerWidth >= 320 && window.innerWidth < 360) && type == 'lebar') {
    scale = scale - 0.8;
  } else if ((window.innerWidth >= 360 && window.innerWidth < 410) && type == 'tinggi') {
    scale = scale - 0.2;
  } else if ((window.innerWidth >= 360 && window.innerWidth < 410) && type == 'lebar') {
    scale = scale - 0.7;
  } else if ((window.innerWidth >= 410 && window.innerWidth < 640) && type == 'tinggi') {
    scale = scale - 0.1;
  } else if ((window.innerWidth >= 410 && window.innerWidth < 640) && type == 'lebar') {
    scale = scale - 0.6;
  } else {
    scale = scale + 0.2
  }

  modalImage.src = imageSrc;
  modalImage.style.transform = `scale(${scale})`;
  document.getElementById('imageModal').classList.remove('hidden');
}

function openModal2(imageSrc, scale = 10) {
  const modalImage = document.getElementById('modalImage');

  modalImage.src = imageSrc;
  modalImage.style.transform = `scale(${scale})`;
  document.getElementById('imageModal').classList.remove('hidden');
}


function closeModal() {
  document.getElementById('imageModal').classList.add('hidden');
}



const materiData = [
    {
        "judul": "Pendahuluan",
        "file": "Pendahuluan.html",
        "keywords": ["kebutuhan gizi", "gangguan pencernaan", "proses pencernaan", "sumber energi", "organ pencernaan"]
      },
      {
        "judul": "Pengertian Sistem Pencernaan",
        "file": "Pengertian_Sistem_Pencernaan.html",
        "keywords": ["sistem organ", "enzim", "hormon", "kerongkongan", "lambung", "usus halus", "hati", "pankreas", "empedu"]
      },
      {
        "judul": "Zat Makanan",
        "file": "Zat_Makanan.html",
        "keywords": ["zat makanan makro", "zat makanan mikro"]
      },
      {
        "judul": "Karbohidrat",
        "file": "Karbohidrat.html",
        "keywords": ["monosakarida", "disakarida", "polisakarida", "glukosa", "fruktosa", "pati", "glikogen", "Zat Makanan Makro"]
      },
      {
        "judul": "Protein",
        "file": "Protein.html",
        "keywords": ["asam amino", "protein hewani", "protein nabati", "struktur protein", "enzim protein", "Zat Makanan Makro"]
      },
      {
        "judul": "Lemak",
        "file": "Lemak.html",
        "keywords": ["asam lemak jenuh", "asam lemak tak jenuh", "trigliserida", "kolesterol", "lipid", "Zat Makanan Makro"]
      },
      {
        "judul": "Vitamin",
        "file": "Vitamin.html",
        "keywords": ["vitamin A", "vitamin B", "vitamin C", "vitamin D", "vitamin E", "vitamin K", "Zat Makanan Mikro"]
      },
      {
        "judul": "Mineral",
        "file": "Mineral.html",
        "keywords": ["kalsium", "zat besi", "fosfor", "kalium", "magnesium", "seng", "Zat Makanan Mikro"]
      },
      {
        "judul": "Saluran Pencernaan",
        "file": "Saluran_Pencernaan.html",
        "keywords": ["mulut", "gigi", "lidah", "kerongkongan", "lambung", "usus halus", "usus besar", "anus"]
      },
      {
        "judul": "Proses Pencernaan Makanan",
        "file": "Proses_Pencernaan_Makanan.html",
        "keywords": ["pencernaan mekanik", "pencernaan kimiawi", "enzim", "amylase", "pepsin", "lipase"]
      },
      {
        "judul": "Gangguan Pencernaan",
        "file": "gangguan.html",
        "keywords": ["gizi buruk", "diare", "maag", "gondok", "sariawan"]
      },
      {
        "judul": "Gizi Buruk",
        "file": "gangguan1.html",
        "keywords": ["kwashiorkor", "marasmus", "kekurangan nutrisi", "berat badan rendah"]
      },
      {
        "judul": "Diare",
        "file": "gangguan2.html",
        "keywords": ["dehidrasi", "infeksi", "buang air besar cair", "gangguan pencernaan"]
      },
      {
        "judul": "Maag",
        "file": "gangguan3.html",
        "keywords": ["gastritis", "asam lambung", "nyeri ulu hati", "mual"]
      },
      {
        "judul": "Gondok",
        "file": "gangguan4.html",
        "keywords": ["pembesaran kelenjar tiroid", "kekurangan yodium", "gangguan hormon"]
      },
      {
        "judul": "Sariawan",
        "file": "gangguan5.html",
        "keywords": ["luka mulut", "infeksi", "nyeri saat makan", "kekurangan vitamin C"]
      }
];


//function untuk menampilkan searchbar
searchIcon.addEventListener('click', () => {
    const searchIcon = document.getElementById('searchIcon');
    const searchbar = document.getElementById('searchbar');
    const inputElement = document.getElementById('searchInput');
    const results = document.getElementById('searchResults');
    let isOpenSearchbar = false;

    isOpenSearchbar = !isOpenSearchbar;
    searchbar.classList.toggle('hidden');
    results.classList.add('hidden');
    inputElement.value = '';
});


// function untuk search materi dari keyword
function searchMateri() {
    const inputElement = document.getElementById('searchInput');
    const input = inputElement.value.toLowerCase();
    const results = document.getElementById('searchResults');
    results.innerHTML = '';

    if (input === '') {
        results.classList.add('hidden');
        return;
    }

    const filtered = materiData.filter(materi => 
        materi.judul.toLowerCase().includes(input) ||
        (materi.keywords && materi.keywords.some(keyword => keyword.toLowerCase().includes(input)))
    );

    filtered.forEach(materi => {
        const li = document.createElement('li');
        li.className = 'p-2 hover:bg-gray-200 cursor-pointer border-1 border-black';
        li.textContent = `${input} in ${materi.judul}`;
        li.onclick = () => {
            loadContent(materi.file);
            inputElement.value = ''; // Kosongkan search bar
            results.classList.add('hidden'); // Sembunyikan saran
            searchbar.classList.add('hidden');
        };
        results.appendChild(li);
    });

    results.classList.toggle('hidden', filtered.length === 0);
}