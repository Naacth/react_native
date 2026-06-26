import React, { createContext, useContext, useState } from 'react';

// TypeScript Interfaces
export interface Skill {
    name: string;
    level: number;
}

export interface Biodata {
    name: string;
    nim: string;
    birth: string;
    address: string;
    phone: string;
    email: string;
    prodi: string;
    univ: string;
    skills: Skill[];
    hobbies: string[];
}

export interface Pendidikan {
    level: string;
    icon: string;
    name: string;
    year: string;
    major: string;
    color: string;
    description: string;
    current?: boolean;
}

export interface Aktivitas {
    time: string;
    period: string;
    name: string;
    icon: string;
    color: string;
    category: string;
    duration: string;
}

export interface Praktikum {
    id: number;
    title: string;
    description: string;
    tech: string[];
    icon: string;
    color: string;
    status: string;
    week: string;
    screenshot: string | null;
    isFinal?: boolean;
}

interface AppContextType {
    biodata: Biodata;
    setBiodata: React.Dispatch<React.SetStateAction<Biodata>>;
    pendidikan: Pendidikan[];
    setPendidikan: React.Dispatch<React.SetStateAction<Pendidikan[]>>;
    aktivitas: Aktivitas[];
    setAktivitas: React.Dispatch<React.SetStateAction<Aktivitas[]>>;
    praktikum: Praktikum[];
    setPraktikum: React.Dispatch<React.SetStateAction<Praktikum[]>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// Initial Data
const initialBiodata: Biodata = {
    name: 'Muhammad Fariz',
    nim: '23050447',
    birth: 'Semarang, 15 Maret 2005',
    address: 'Jl. Pemuda No. 12, Semarang, Jawa Tengah',
    phone: '+62 812-3456-7890',
    email: 'fariz23050447@student.ac.id',
    prodi: 'Teknik Informatika',
    univ: 'Universitas Example',
    skills: [
        { name: 'React Native', level: 80 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 70 },
        { name: 'HTML & CSS', level: 90 },
        { name: 'Node.js', level: 65 },
        { name: 'Git & GitHub', level: 75 },
    ],
    hobbies: ['💻 Coding', '🎮 Gaming', '📚 Membaca', '🎵 Musik', '🏊 Berenang', '✈️ Travelling'],
};

const initialPendidikan: Pendidikan[] = [
    {
        level: 'SD',
        icon: 'school-outline',
        name: 'SD Negeri 01 Semarang',
        year: '2011 – 2017',
        major: '-',
        color: '#4CAF50',
        description: 'Sekolah Dasar',
    },
    {
        level: 'SMP',
        icon: 'library-outline',
        name: 'SMP Negeri 02 Semarang',
        year: '2017 – 2020',
        major: '-',
        color: '#2196F3',
        description: 'Sekolah Menengah Pertama',
    },
    {
        level: 'SMA',
        icon: 'book-outline',
        name: 'SMA Negeri 03 Semarang',
        year: '2020 – 2023',
        major: 'MIPA (Matematika dan IPA)',
        color: '#FF9800',
        description: 'Sekolah Menengah Atas',
    },
    {
        level: 'S1',
        icon: 'ribbon-outline',
        name: 'Universitas Example',
        year: '2023 – Sekarang',
        major: 'Teknik Informatika',
        color: '#C9A84C',
        description: 'Perguruan Tinggi',
        current: true,
    },
];

const initialAktivitas: Aktivitas[] = [
    {
        time: '05:00',
        period: 'Pagi',
        name: 'Sholat Subuh & Mengaji',
        icon: 'moon-outline',
        color: '#9C27B0',
        category: 'Ibadah',
        duration: '30 menit',
    },
    {
        time: '05:30',
        period: 'Pagi',
        name: 'Olahraga Pagi',
        icon: 'fitness-outline',
        color: '#4CAF50',
        category: 'Kesehatan',
        duration: '30 menit',
    },
    {
        time: '06:30',
        period: 'Pagi',
        name: 'Mandi & Sarapan',
        icon: 'water-outline',
        color: '#2196F3',
        category: 'Rutinitas',
        duration: '30 menit',
    },
    {
        time: '07:30',
        period: 'Pagi',
        name: 'Berangkat Kuliah',
        icon: 'bicycle-outline',
        color: '#FF9800',
        category: 'Akademik',
        duration: '30 menit',
    },
    {
        time: '08:00',
        period: 'Pagi',
        name: 'Perkuliahan (Kelas)',
        icon: 'school-outline',
        color: '#C9A84C',
        category: 'Akademik',
        duration: '2–3 jam',
    },
    {
        time: '12:00',
        period: 'Siang',
        name: 'Sholat Dzuhur & Makan Siang',
        icon: 'sunny-outline',
        color: '#FF5722',
        category: 'Ibadah',
        duration: '1 jam',
    },
    {
        time: '13:00',
        period: 'Siang',
        name: 'Praktikum / Lab',
        icon: 'laptop-outline',
        color: '#00BCD4',
        category: 'Akademik',
        duration: '2 jam',
    },
    {
        time: '15:00',
        period: 'Sore',
        name: 'Sholat Ashar & Istirahat',
        icon: 'cafe-outline',
        color: '#795548',
        category: 'Ibadah',
        duration: '30 menit',
    },
    {
        time: '15:30',
        period: 'Sore',
        name: 'Belajar Mandiri / Tugas',
        icon: 'book-outline',
        color: '#3F51B5',
        category: 'Akademik',
        duration: '2 jam',
    },
    {
        time: '17:30',
        period: 'Sore',
        name: 'Kegiatan Organisasi',
        icon: 'people-outline',
        color: '#E91E63',
        category: 'Organisasi',
        duration: '1 jam',
    },
    {
        time: '19:00',
        period: 'Malam',
        name: 'Sholat Maghrib & Isya',
        icon: 'star-outline',
        color: '#9C27B0',
        category: 'Ibadah',
        duration: '30 menit',
    },
    {
        time: '20:00',
        period: 'Malam',
        name: 'Coding & Side Project',
        icon: 'code-slash-outline',
        color: '#C9A84C',
        category: 'Produktif',
        duration: '2 jam',
    },
    {
        time: '22:00',
        period: 'Malam',
        name: 'Hiburan / Gaming',
        icon: 'game-controller-outline',
        color: '#4CAF50',
        category: 'Hiburan',
        duration: '1 jam',
    },
    {
        time: '23:00',
        period: 'Malam',
        name: 'Tidur',
        icon: 'bed-outline',
        color: '#607D8B',
        category: 'Rutinitas',
        duration: '6 jam',
    },
];

const initialPraktikum: Praktikum[] = [
    {
        id: 1,
        title: 'Praktikum 1 - Hello World',
        description: 'Perkenalan dasar React Native Expo dengan membuat aplikasi Hello World pertama, memahami struktur proyek dan menjalankan di emulator.',
        tech: ['React Native', 'Expo', 'JSX'],
        icon: 'rocket-outline',
        color: '#4CAF50',
        status: 'Selesai',
        week: 'Minggu 1',
        screenshot: null,
    },
    {
        id: 2,
        title: 'Praktikum 2 - Basic Components',
        description: 'Mempelajari komponen dasar React Native seperti View, Text, Image, Button, dan ScrollView untuk membangun antarmuka aplikasi sederhana.',
        tech: ['View', 'Text', 'Image', 'Button'],
        icon: 'layers-outline',
        color: '#2196F3',
        status: 'Selesai',
        week: 'Minggu 2',
        screenshot: null,
    },
    {
        id: 3,
        title: 'Praktikum 3 - Styling & Flexbox',
        description: 'Memahami konsep styling di React Native menggunakan StyleSheet dan Flexbox layout untuk membuat tampilan responsif pada berbagai ukuran layar.',
        tech: ['StyleSheet', 'Flexbox', 'LinearGradient'],
        icon: 'color-palette-outline',
        color: '#9C27B0',
        status: 'Selesai',
        week: 'Minggu 3',
        screenshot: null,
    },
    {
        id: 4,
        title: 'Praktikum 4 - State & Props',
        description: 'Penerapan manajemen state dengan useState Hook dan pengiriman data antar komponen menggunakan props dalam React Native.',
        tech: ['useState', 'Props', 'Hooks'],
        icon: 'git-branch-outline',
        color: '#FF9800',
        status: 'Selesai',
        week: 'Minggu 4',
        screenshot: null,
    },
    {
        id: 5,
        title: 'Praktikum 5 - Navigation',
        description: 'Implementasi navigasi antar halaman menggunakan Expo Router dengan Tab Navigation dan Stack Navigation, serta pembuatan layout yang kompleks.',
        tech: ['Expo Router', 'Stack', 'Tabs', 'useRouter'],
        icon: 'navigate-outline',
        color: '#F44336',
        status: 'Selesai',
        week: 'Minggu 5',
        screenshot: null,
    },
    {
        id: 6,
        title: 'Praktikum 6 - API & Fetch Data',
        description: 'Mengambil data dari REST API menggunakan Axios dan menampilkan data dinamis pada FlatList dengan loading state dan error handling.',
        tech: ['Axios', 'REST API', 'FlatList', 'useEffect'],
        icon: 'cloud-download-outline',
        color: '#00BCD4',
        status: 'Selesai',
        week: 'Minggu 6',
        screenshot: null,
    },
    {
        id: 7,
        title: 'Praktikum 7 - Forms & Validation',
        description: 'Membuat form input dengan TextInput, implementasi validasi data, dan penanganan keyboard untuk pengalaman pengguna yang lebih baik.',
        tech: ['TextInput', 'Validation', 'KeyboardAvoidingView'],
        icon: 'create-outline',
        color: '#E91E63',
        status: 'Selesai',
        week: 'Minggu 7',
        screenshot: null,
    },
    {
        id: 8,
        title: 'Praktikum 8 - Project Akhir',
        description: 'Mengintegrasikan seluruh materi pembelajaran dalam sebuah aplikasi profil pribadi lengkap yang mencakup Login, Biodata, Pendidikan, Aktivitas, dan Portofolio Praktikum.',
        tech: ['React Native', 'Expo Router', 'Axios', 'TypeScript', 'LinearGradient'],
        icon: 'trophy-outline',
        color: '#C9A84C',
        status: 'Selesai',
        week: 'Minggu 8',
        screenshot: null,
        isFinal: true,
    },
];

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [biodata, setBiodata] = useState<Biodata>(initialBiodata);
    const [pendidikan, setPendidikan] = useState<Pendidikan[]>(initialPendidikan);
    const [aktivitas, setAktivitas] = useState<Aktivitas[]>(initialAktivitas);
    const [praktikum, setPraktikum] = useState<Praktikum[]>(initialPraktikum);

    return (
        <AppContext.Provider value={{
            biodata, setBiodata,
            pendidikan, setPendidikan,
            aktivitas, setAktivitas,
            praktikum, setPraktikum
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useApp must be used within an AppProvider');
    }
    return context;
};

// Fix expo-router warning for non-route files in app folder
export default function DummyContext() { return null; }
