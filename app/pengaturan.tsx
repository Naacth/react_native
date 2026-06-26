import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Alert,
    KeyboardAvoidingView,
    Platform
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useApp } from './context/AppContext';

export default function PengaturanScreen() {
    const router = useRouter();
    const { biodata, pendidikan, aktivitas, praktikum, setBiodata, setPendidikan, setAktivitas, setPraktikum } = useApp();

    // Local state for forms
    const [formBiodata, setFormBiodata] = useState(biodata);
    const [formPendidikan, setFormPendidikan] = useState(pendidikan);
    const [formAktivitas, setFormAktivitas] = useState(aktivitas);
    const [formPraktikum, setFormPraktikum] = useState(praktikum);

    useEffect(() => {
        setFormBiodata(biodata);
        setFormPendidikan(JSON.parse(JSON.stringify(pendidikan)));
        setFormAktivitas(JSON.parse(JSON.stringify(aktivitas)));
        setFormPraktikum(JSON.parse(JSON.stringify(praktikum)));
    }, [biodata, pendidikan, aktivitas, praktikum]);

    const handleSave = () => {
        setBiodata(formBiodata);
        setPendidikan(formPendidikan);
        setAktivitas(formAktivitas);
        setPraktikum(formPraktikum);

        Alert.alert('Sukses', 'Pengaturan berhasil disimpan!', [
            { text: 'OK', onPress: () => router.back() }
        ]);
    };

    // Update handlers for arrays
    const updatePendidikan = (index: number, field: string, value: string) => {
        const newArr = [...formPendidikan];
        newArr[index] = { ...newArr[index], [field]: value };
        setFormPendidikan(newArr);
    };

    const updateAktivitas = (index: number, field: string, value: string) => {
        const newArr = [...formAktivitas];
        newArr[index] = { ...newArr[index], [field]: value };
        setFormAktivitas(newArr);
    };

    const updatePraktikum = (index: number, field: string, value: string) => {
        const newArr = [...formPraktikum];
        newArr[index] = { ...newArr[index], [field]: value };
        setFormPraktikum(newArr);
    };

    return (
        <LinearGradient colors={['#0D1117', '#1C2A3A']} style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
                    <Ionicons name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Pengaturan Data</Text>
                <TouchableOpacity onPress={handleSave} style={styles.saveBtn}>
                    <Ionicons name="checkmark" size={24} color="#4CAF50" />
                </TouchableOpacity>
            </View>

            <KeyboardAvoidingView 
                style={{ flex: 1 }} 
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
                    
                    {/* Biodata Section */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="person-outline" size={20} color="#C9A84C" />
                            <Text style={styles.sectionTitle}>Biodata (CV)</Text>
                        </View>
                        
                        <InputField label="Nama Lengkap" value={formBiodata.name} onChangeText={(t) => setFormBiodata({...formBiodata, name: t})} />
                        <InputField label="NIM" value={formBiodata.nim} onChangeText={(t) => setFormBiodata({...formBiodata, nim: t})} />
                        <InputField label="Tempat, Tgl Lahir" value={formBiodata.birth} onChangeText={(t) => setFormBiodata({...formBiodata, birth: t})} />
                        <InputField label="Alamat" value={formBiodata.address} onChangeText={(t) => setFormBiodata({...formBiodata, address: t})} />
                        <InputField label="Telepon" value={formBiodata.phone} onChangeText={(t) => setFormBiodata({...formBiodata, phone: t})} />
                        <InputField label="Email" value={formBiodata.email} onChangeText={(t) => setFormBiodata({...formBiodata, email: t})} />
                        <InputField label="Program Studi" value={formBiodata.prodi} onChangeText={(t) => setFormBiodata({...formBiodata, prodi: t})} />
                        <InputField label="Universitas" value={formBiodata.univ} onChangeText={(t) => setFormBiodata({...formBiodata, univ: t})} />
                    </View>

                    {/* Pendidikan Section */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="school-outline" size={20} color="#C9A84C" />
                            <Text style={styles.sectionTitle}>Riwayat Pendidikan</Text>
                        </View>
                        {formPendidikan.map((item, idx) => (
                            <View key={idx} style={styles.cardItem}>
                                <Text style={styles.cardItemTitle}>{item.level}</Text>
                                <InputField label="Jenjang (ex: SD, SMP)" value={item.level} onChangeText={(t) => updatePendidikan(idx, 'level', t)} />
                                <InputField label="Nama Instansi" value={item.name} onChangeText={(t) => updatePendidikan(idx, 'name', t)} />
                                <InputField label="Tahun" value={item.year} onChangeText={(t) => updatePendidikan(idx, 'year', t)} />
                                <InputField label="Jurusan" value={item.major} onChangeText={(t) => updatePendidikan(idx, 'major', t)} />
                            </View>
                        ))}
                    </View>

                    {/* Aktivitas Section */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="calendar-outline" size={20} color="#C9A84C" />
                            <Text style={styles.sectionTitle}>Aktivitas Harian</Text>
                        </View>
                        {formAktivitas.map((item, idx) => (
                            <View key={idx} style={styles.cardItem}>
                                <Text style={styles.cardItemTitle}>{item.time} - {item.name}</Text>
                                <InputField label="Waktu (ex: 08:00)" value={item.time} onChangeText={(t) => updateAktivitas(idx, 'time', t)} />
                                <InputField label="Nama Aktivitas" value={item.name} onChangeText={(t) => updateAktivitas(idx, 'name', t)} />
                                <InputField label="Kategori" value={item.category} onChangeText={(t) => updateAktivitas(idx, 'category', t)} />
                                <InputField label="Durasi" value={item.duration} onChangeText={(t) => updateAktivitas(idx, 'duration', t)} />
                            </View>
                        ))}
                    </View>

                    {/* Praktikum Section */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="trophy-outline" size={20} color="#C9A84C" />
                            <Text style={styles.sectionTitle}>Modul Praktikum</Text>
                        </View>
                        {formPraktikum.map((item, idx) => (
                            <View key={idx} style={styles.cardItem}>
                                <Text style={styles.cardItemTitle}>{item.week}</Text>
                                <InputField label="Minggu Praktikum" value={item.week} onChangeText={(t) => updatePraktikum(idx, 'week', t)} />
                                <InputField label="Judul" value={item.title} onChangeText={(t) => updatePraktikum(idx, 'title', t)} />
                                <InputField label="Status (ex: Selesai, Belum)" value={item.status} onChangeText={(t) => updatePraktikum(idx, 'status', t)} />
                                <InputField label="Deskripsi" value={item.description} onChangeText={(t) => updatePraktikum(idx, 'description', t)} />
                            </View>
                        ))}
                    </View>

                    <View style={{ height: 40 }} />
                </ScrollView>
            </KeyboardAvoidingView>
        </LinearGradient>
    );
}

function InputField({ label, value, onChangeText }: { label: string, value: string, onChangeText: (t: string) => void }) {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>{label}</Text>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor="#666"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 50,
        paddingBottom: 16,
        paddingHorizontal: 20,
        backgroundColor: 'rgba(7,55,128,0.5)',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(201,168,76,0.2)',
    },
    backBtn: { padding: 8 },
    saveBtn: { padding: 8 },
    headerTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#fff',
    },
    scroll: { padding: 20 },
    section: {
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderRadius: 16,
        padding: 16,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: 'rgba(201,168,76,0.15)',
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 16,
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(201,168,76,0.2)',
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#C9A84C',
    },
    cardItem: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        padding: 14,
        borderRadius: 12,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.05)'
    },
    cardItemTitle: {
        color: '#A0785A',
        fontWeight: 'bold',
        marginBottom: 12,
        fontSize: 14,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255,255,255,0.05)',
        paddingBottom: 6
    },
    inputContainer: {
        marginBottom: 14,
    },
    inputLabel: {
        color: '#888',
        fontSize: 12,
        marginBottom: 6,
        marginLeft: 4,
    },
    input: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)',
        borderRadius: 10,
        paddingHorizontal: 14,
        paddingVertical: 12,
        color: '#fff',
        fontSize: 14,
    }
});
