# DestinAI: Sistem Analisis Sentimen dan Rekomendasi

## Gambaran Umum

DestinAI adalah aplikasi yang dirancang untuk merekomendasikan destinasi dan menyediakan analisis sentimen berdasarkan masukan pengguna. Berbeda dengan sistem yang mengandalkan Generative AI, proyek ini memanfaatkan pendekatan Natural Language Processing (NLP) tradisional menggunakan TF-IDF (Term Frequency-Inverse Document Frequency) untuk ekstraksi fitur dan Regresi Logistik untuk klasifikasi sentimen serta pembuatan rekomendasi. Aplikasi ini memiliki frontend berbasis React dan backend FastAPI.

## Fitur

DestinAI menawarkan dua mode utama untuk interaksi pengguna: **Untuk Wisatawan** dan **Untuk Pengelola**.

*   **Untuk Wisatawan (Pencarian Destinasi)**:
    *   **Rekomendasi Destinasi**: Memungkinkan pengguna untuk mencari destinasi berdasarkan kueri natural seperti "tempat adem dan sejuk" atau "pemandangan indah". Sistem akan merekomendasikan daftar destinasi beserta relevansi, sentimen rata-rata, dan skor gabungan.

*   **Untuk Pengelola (Analytics Dashboard)**:
    *   **Dasbor Analitik**: Menyediakan dasbor komprehensif untuk destinasi tertentu. Pengelola dapat memasukkan nama destinasi (misalnya, "Bukit Senyum") untuk melihat:
        *   **Distribusi Sentimen**: Visualisasi persentase ulasan positif dan negatif.
        *   **Kata Kunci Teratas**: Daftar kata kunci yang sering muncul dalam ulasan, yang dapat diklik untuk melihat ulasan spesifik yang mengandung kata kunci tersebut.
    *   **Pencarian Ulasan Berdasarkan Kata Kunci**: Setelah melihat dasbor, pengelola dapat mengklik kata kunci teratas untuk menampilkan daftar ulasan yang relevan dengan kata kunci tersebut untuk destinasi yang dipilih.

## Tech Stack
### Backend

Backend dibangun dengan Python dan FastAPI, menangani model NLP, pemrosesan data, dan endpoint API.

*   **Kerangka Kerja**: FastAPI
*   **NLP/Pembelajaran Mesin**: scikit-learn, pandas, numpy, joblib, nltk
*   **Server**: Uvicorn
*   **Dependensi**: `requirements.txt`

### Frontend

Frontend adalah aplikasi web modern yang dikembangkan dengan React, menyediakan antarmuka pengguna yang interaktif.

*   **Kerangka Kerja**: React.js
*   **Alat Build**: Vite
*   **Styling**: TailwindCSS
*   **Komponen UI**: Radix UI
*   **Grafik**: Recharts
*   **Klien HTTP**: Axios
*   **Dependensi**: `package.json`

## Struktur Proyek

Repositori diorganisir ke dalam direktori utama berikut:

*   `backend/`: Berisi aplikasi FastAPI, dan skrip Python terkait.
    *   `app/`: Kode aplikasi FastAPI, termasuk aplikasi utama, pemuat ML, pra-pemrosesan, dan router API.
    *   `requirements.txt`: Dependensi Python.
*   `models/`: Menyimpan model pembelajaran mesin yang telah dilatih (`.joblib` files) dan dataset yang telah dibersihkan (`.csv`).
*   `src/`: Berisi kode sumber aplikasi frontend React.
    *   `app/`: Komponen React utama, termasuk `App.jsx` dan komponen UI.
    *   `styles/`: Konfigurasi CSS dan TailwindCSS.
*   `public/`: Aset statis untuk frontend.

## Instalasi

Untuk mengatur dan menjalankan DestinAI secara lokal, ikuti langkah-langkah berikut:

### Prasyarat

Pastikan Anda telah menginstal yang berikut:

*   **Python 3.8+**
*   **Node.js (LTS)** dan **npm** (atau **pnpm** / **yarn**)
*   **Git**

### 1. Kloning Repositori

Pertama, kloning repositori GitHub ke mesin lokal Anda:

```bash
git clone https://github.com/adibahhusna/Project_pijak.git
cd Project_pijak
```

### 2. Penyiapan Backend

Navigasi ke direktori `backend` dan instal dependensi Python:

```bash
cd backend
pip install -r requirements.txt
```

**Catatan tentang Model**: Direktori `models/` (yang berada di root proyek) berisi model sentimen dan rekomendasi yang telah dilatih sebelumnya (`sentiment_model.joblib`, `recommender.joblib`) dan dataset yang diproses (`clean_dataset_final.csv`). Ini penting agar backend berfungsi. Pastikan file-file ini ada di direktori `models` setelah kloning.

### 3. Penyiapan Frontend

Navigasi kembali ke direktori root proyek dan instal dependensi Node.js:

```bash
cd .. # Jika Anda berada di direktori backend
npm install # atau pnpm install / yarn install
```

**Penting: Konfigurasi URL Dasar API Frontend**

Frontend (`src/app/App.jsx`) saat ini dikonfigurasi untuk menggunakan URL ngrok yang di-hardcode untuk API backend. Untuk menjalankan aplikasi secara lokal, Anda **harus** memperbarui URL ini agar mengarah ke server backend lokal Anda.

1.  Buka `src/app/App.jsx`.
2.  Temukan konstanta `BASE_URL` (sekitar baris 5):

    ```javascript
    const BASE_URL = 'https://pamela-unguinous-kaci.ngrok-free.dev';
    ```

3.  Ubah ini ke alamat backend lokal Anda, biasanya `http://localhost:8000` (dengan asumsi backend berjalan di port 8000):

    ```javascript
    const BASE_URL = 'http://localhost:8000';
    ```

    Anda juga dapat menghapus konstanta `HEADERS` jika Anda tidak menggunakan ngrok atau layanan serupa yang memerlukan header spesifik.

## Menjalankan Aplikasi Secara Lokal

Ikuti langkah-langkah ini untuk memulai server backend dan frontend.

### 1. Mulai Server Backend

Buka terminal baru, navigasi ke direktori `backend`, dan jalankan aplikasi FastAPI:

```bash
cd Project_pijak/backend
uvicorn app.main:app --host 0.0.0.0 --port 8000
```

Ini akan memulai server backend, biasanya dapat diakses di `http://localhost:8000`.

### 2. Mulai Server Pengembangan Frontend

Buka terminal lain, navigasi ke direktori root proyek, dan mulai server pengembangan React:

```bash
cd Project_pijak
npm run dev # atau pnpm dev / yarn dev
```

Ini biasanya akan membuka aplikasi frontend di browser Anda di `http://localhost:5173` (atau port lain yang tersedia).

## Endpoint API

Backend mengekspos endpoint API utama berikut di bawah prefiks `/api/v1`:

*   **`GET /health`**
    *   **Deskripsi**: Memeriksa status kesehatan API.
    *   **Respons**: `{"status": "ok", "version": "1.0.0"}`

*   **`GET /api/v1/destinations`**
    *   **Deskripsi**: Mengambil daftar semua destinasi yang tersedia.
    *   **Respons**: `{"destinations": ["Destinasi A", "Destinasi B", ...]}`

*   **`POST /api/v1/recommend`**
    *   **Deskripsi**: Memberikan rekomendasi destinasi berdasarkan kueri pengguna.
    *   **Body Permintaan**: 
        ```json
        {
          "query": "string (maks 200 karakter, tidak boleh kosong)",
          "top_n": "integer (1-10, default 5)"
        }
        ```
    *   **Respons**: 
        ```json
        {
          "query": "string",
          "hasil": [
            {
              "destinasi": "string",
              "relevansi": "float",
              "sentimen": "float",
              "skor": "float"
            }
          ],
          "total": "integer"
        }
        ```

*   **`GET /api/v1/dashboard/{destinasi}`**
    *   **Deskripsi**: Mengambil informasi dasbor untuk destinasi tertentu, termasuk rincian sentimen dan kata kunci teratas.
    *   **Parameter Path**: `destinasi` (misalnya, `Taman Bungkul`)
    *   **Respons**: 
        ```json
        {
          "destinasi": "string",
          "total_ulasan": "integer",
          "sentimen": {
            "Positive": "integer",
            "Negative": "integer"
          },
          "top_keywords": [
            "string"
          ]
        }
        ```

*   **`GET /api/v1/reviews/{destinasi}?keyword={keyword}`**
    *   **Deskripsi**: Mengambil ulasan untuk destinasi tertentu yang mengandung kata kunci yang diberikan.
    *   **Parameter Path**: `destinasi`
    *   **Parameter Kueri**: `keyword`
    *   **Respons**: 
        ```json
        {
          "destinasi": "string",
          "keyword": "string",
          "ulasan": [
            "string"
          ],
          "total": "integer"
        }
        ```

## Detail Model

Inti dari kemampuan rekomendasi dan analisis sentimen DestinAI terletak pada model NLP-nya:

*   **Analisis Sentimen**: Model Regresi Logistik digunakan untuk mengklasifikasikan sentimen ulasan sebagai Positif atau Negatif. Model ini dilatih pada fitur yang diekstraksi menggunakan TF-IDF.
*   **Sistem Rekomendasi**: Sistem rekomendasi juga menggunakan TF-IDF untuk merepresentasikan profil destinasi dan kueri pengguna. Kesamaan kosinus kemudian digunakan untuk menemukan destinasi yang paling relevan, dikombinasikan dengan skor sentimen untuk skor rekomendasi gabungan.
*   **Pra-pemrosesan Teks**: Skrip `backend/app/preprocess_clean.py` menangani pembersihan teks, termasuk:
    *   Penghapusan sebutan (mentions), hashtag, RT, URL, dan angka.
    *   Konversi ke huruf kecil.
    *   Normalisasi kata slang menggunakan kamus khusus (`colloquial-indonesian-lexicon.csv`).
    *   Penghapusan stopword (stopword Bahasa Indonesia, dengan negasi dipertahankan).

## Pengujian

Backend mencakup pengujian unit dan integrasi. Untuk menjalankannya, navigasi ke direktori `backend` dan eksekusi:

```bash
cd DestinAI/backend
pytest
```

## Deployment

Meskipun README ini berfokus pada penyiapan lokal, repositori ini menyertakan file konfigurasi untuk potensi deployment:

*   `backend/render.yaml`: Konfigurasi untuk deployment backend ke Render.
*   `backend/Dokerfile`: Dockerfile (perhatikan kesalahan penulisan nama file) untuk meng-container-kan aplikasi backend.
