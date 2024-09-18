Dalam mengerjakan proyek ini, ada beberapa kriteria yang perlu Anda penuhi. Kriteria-kriteria ini diperlukan agar Anda dapat lulus dari tugas ini.

Berikut adalah daftar kriteria dari proyek submission yang harus Anda penuhi.

### Kriteria Wajib 1: Pertahankan Kriteria Submission Sebelumnya

Ini adalah lanjutan dari submission sebelumnya. Pastikan proyek yang telah Anda bangun masih memenuhi seluruh kriteria dari submission sebelumnya.

### Kriteria Wajib 2: Memanfaatkan RESTful API sebagai Sumber Data

Aplikasi harus memanfaatkan RESTful API yang telah kami sediakan sebagai sumber data. RESTful API yang digunakan adalah [https://notes-api.dicoding.dev/v2](https://notes-api.dicoding.dev/v2#/). Dokumentasi API bisa Anda akses pada tautan tersebut.

Ada beberapa fitur yang **wajib** Anda adopsi dengan API di atas.

*   Membuat atau menambahkan catatan baru.
    
*   Mendapatkan dan menampilkan daftar catatan.
    
*   Menghapus catatan yang tersimpan.
    

> **Catatan:**Kriteria ini juga menyebabkan data local (data dumi) sudah tidak digunakan lagi. Silakan manfaatkan Notes API sebagai data utama aplikasi notesapp Anda.

### Kriteria Wajib 3: Menggunakan webpack sebagai Module Bundler

Pengembangan aplikasi **Notes App harus menggunakan webpack** sebagai module bundler dengan spesifikasi berikut:

*   Aplikasi harus dapat dijalankan untuk fase development dengan perintah **npm run start-dev** dan memanfaatkan **webpack-dev-server**.
    
*   Aplikasi harus dapat di-build untuk fase production dengan perintah **npm run build**.
    

### Kriteria Wajib 4: Menggunakan Fetch API

Menggunakan Fetch API untuk melakukan Asynchronous JavaScript Request dalam berinteraksi dengan API [https://notes-api.dicoding.dev/v2](https://notes-api.dicoding.dev/v2#/).

### Kriteria Wajib 5: Memiliki Indikator Loading

Anda diwajibkan untuk menampilkan indikator loading saat melakukan proses request HTTP dalam menunggu hasilnya. Contohnya menampilkan indikator loading saat user sedang masuk aplikasi atau buat akun baru.

Sebagai tips, Anda juga dapat membangun indikator loading menggunakan Web component.


Selain kriteria wajib, ada kriteria opsional yang dapat Anda patuhi agar mendapat nilai yang lebih tinggi.

### Kriteria Opsional 1: Memiliki Fitur Arsip Catatan

Disarankan menerapkan fitur arsip (archive) catatan dalam aplikasi. Dokumentasi penerapannya dapat Anda simak di [https://notes-api.dicoding.dev/v2](https://notes-api.dicoding.dev/v2#/).

### Kriteria Opsional 2: Menampilkan Feedback Saat Terjadi Error

Proses request ke network ada kalanya terjadi kegagalan. Kami sangat menyarankan Anda untuk menampilkan pesan jika terjadi kegagalan. Anda dapat memanfaatkan Browser API seperti [alert() method](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert) untuk menampilkan pesan gagal. Jika ingin, Anda dapat memanfaatkan library seperti [sweetalert2](https://sweetalert2.github.io/).

### Kriteria Opsional 3: Memiliki Efek Pergerakan Halus atau Animasi

Bagi user, aplikasi yang memiliki animasi yang halus akan menghilangkan rasa bosan. Anda dapat menerapkan efek ini dengan berbagai macam library pihak ketiga seperti [animejs.com](https://animejs.com/), [motion.dev](https://motion.dev/), [gsap.com](https://gsap.com/), atau lainnya.

### Kriteria Opsional 4: Menerapkan Prettier sebagai Code Formatter

Anda disarankan untuk mengimplementasikan code formatter untuk merapikan karya tulisan kode Anda. Salah satu code formatter yang terkenal adalah Prettier. Cara pemasangan dan penggunaannya sangat mudah. Anda bisa menemukan panduannya di [Prettier Install](https://prettier.io/docs/en/install). Berikut contoh kode yang sudah dirapikan oleh Prettier.