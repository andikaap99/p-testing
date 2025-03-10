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
function openModal(imageSrc) {
    document.getElementById('modalImage').src = imageSrc;
    document.getElementById('imageModal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('imageModal').classList.add('hidden');
}


// dummy json
const materiData = [
    { "judul": "Pre-test Kognitif", "file": "test_kognitif.html", 
        "konten": "Sebelum memulai pembelajaran, setiap peserta didik diwajibkan untuk mengisi pre-test hasil belajar ranah kognitif terlebih dahulu melalui link dibawah ini Pre-Test Hasil Belajar Ranah Kognitif Jawab soal secara mandiri sesuai dengan kemampuan saudara tanpa diskusi dengan teman ataupun meminta bantuan melalui google"},
    { "judul": "Pre-test Kreatif", "file": "test_kreatif.html", "konten": "Sebelum memulai pembelajaran, setiap peserta didik diwajibkan untuk mengisi pre-test berpikir kreatif terlebih dahulu melalui link dibawah ini Pre-Test Berpikir Kreatif Jawab soal secara mandiri sesuai dengan kemampuan saudara tanpa diskusi dengan teman ataupun meminta bantuan melalui google" },
];


//function untuk menampilkan searchbar
searchIcon.addEventListener('click', () => {
    const searchIcon = document.getElementById('searchIcon');
    const searchbar = document.getElementById('searchbar');
    const inputElement = document.getElementById('searchInput');
    const results = document.getElementById('searchResults');
    let isOpenSearchbar = false;

    isOpenSearchbar = !isOpenSearchbar;
    // searchbar.style.width = `${container.offsetWidth}px`;
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
        materi.konten.toLowerCase().includes(input)
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