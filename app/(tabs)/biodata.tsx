import React from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

import { useApp } from '../context/AppContext';

export default function BiodataScreen() {
    const router = useRouter();
    const { biodata } = useApp();

    return (
        <LinearGradient colors={['#0D1117', '#1C2A3A']} style={styles.gradient}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
                {/* Header */}
                <LinearGradient colors={['#073780ff', '#1C2A3A']} style={styles.profileHeader}>
                    {/* Settings Button */}
                    <TouchableOpacity 
                        style={styles.settingsBtn} 
                        onPress={() => router.push('/pengaturan')}
                    >
                        <Ionicons name="settings-outline" size={24} color="#C9A84C" />
                    </TouchableOpacity>

                    <View style={styles.avatarWrapper}>
                        <LinearGradient colors={['#C9A84C', '#A0785A']} style={styles.avatarGradient}>
                            <Ionicons name="person" size={55} color="#fff" />
                        </LinearGradient>
                        <View style={styles.onlineBadge} />
                    </View>
                    <Text style={styles.profileName}>{biodata.name}</Text>
                    <Text style={styles.profileNim}>NIM: {biodata.nim}</Text>
                    <Text style={styles.profileStudy}>{biodata.prodi}</Text>

                    {/* Quick Info Pills */}
                    <View style={styles.pillRow}>
                        <View style={styles.pill}>
                            <Ionicons name="school-outline" size={13} color="#C9A84C" />
                            <Text style={styles.pillText}>Semester 5</Text>
                        </View>
                        <View style={styles.pill}>
                            <Ionicons name="location-outline" size={13} color="#C9A84C" />
                            <Text style={styles.pillText}>Jawa Tengah</Text>
                        </View>
                        <View style={styles.pill}>
                            <Ionicons name="star-outline" size={13} color="#C9A84C" />
                            <Text style={styles.pillText}>GPA 3.7</Text>
                        </View>
                    </View>
                </LinearGradient>

                {/* Biodata Section */}
                <View style={styles.sectionCard}>
                    <View style={styles.sectionHeader}>
                        <Ionicons name="document-text-outline" size={20} color="#C9A84C" />
                        <Text style={styles.sectionTitle}>Data Pribadi</Text>
                    </View>

                    <InfoRow icon="person-outline" label="Nama Lengkap" value={biodata.name} />
                    <InfoRow icon="card-outline" label="NIM" value={biodata.nim} />
                    <InfoRow icon="calendar-outline" label="Tempat, Tgl Lahir" value={biodata.birth} />
                    <InfoRow icon="location-outline" label="Alamat" value={biodata.address} />
                    <InfoRow icon="call-outline" label="Nomor Telepon" value={biodata.phone} />
                    <InfoRow icon="mail-outline" label="Email" value={biodata.email} />
                    <InfoRow icon="globe-outline" label="Program Studi" value={biodata.prodi} />
                    <InfoRow icon="business-outline" label="Universitas" value={biodata.univ} />
                </View>

                {/* Keahlian Section */}
                <View style={styles.sectionCard}>
                    <View style={styles.sectionHeader}>
                        <Ionicons name="code-slash-outline" size={20} color="#C9A84C" />
                        <Text style={styles.sectionTitle}>Keahlian</Text>
                    </View>
                    {biodata.skills.map((skill, i) => (
                        <View key={i} style={styles.skillRow}>
                            <Text style={styles.skillName}>{skill.name}</Text>
                            <View style={styles.skillBarBg}>
                                <LinearGradient
                                    colors={['#C9A84C', '#A0785A']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    style={[styles.skillBarFill, { width: `${skill.level}%` }]}
                                />
                            </View>
                            <Text style={styles.skillPercent}>{skill.level}%</Text>
                        </View>
                    ))}
                </View>

                {/* Hobi Section */}
                <View style={styles.sectionCard}>
                    <View style={styles.sectionHeader}>
                        <Ionicons name="heart-outline" size={20} color="#C9A84C" />
                        <Text style={styles.sectionTitle}>Hobi</Text>
                    </View>
                    <View style={styles.hobbyGrid}>
                        {biodata.hobbies.map((hobby, i) => (
                            <View key={i} style={styles.hobbyChip}>
                                <Text style={styles.hobbyText}>{hobby}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                {/* Logout */}
                <TouchableOpacity onPress={() => router.replace('/login')} style={styles.logoutBtn}>
                    <Ionicons name="log-out-outline" size={18} color="#FF6B6B" />
                    <Text style={styles.logoutText}>Keluar</Text>
                </TouchableOpacity>

                <View style={{ height: 30 }} />
            </ScrollView>
        </LinearGradient>
    );
}

function InfoRow({ icon, label, value }: { icon: string; label: string; value: string }) {
    return (
        <View style={styles.infoRow}>
            <View style={styles.infoIconBox}>
                <Ionicons name={icon as any} size={16} color="#C9A84C" />
            </View>
            <View style={styles.infoContent}>
                <Text style={styles.infoLabel}>{label}</Text>
                <Text style={styles.infoValue}>{value}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    gradient: { flex: 1 },
    scroll: { paddingBottom: 20 },
    profileHeader: {
        alignItems: 'center',
        paddingTop: 50,
        paddingBottom: 30,
        paddingHorizontal: 20,
    },
    settingsBtn: {
        position: 'absolute',
        top: 40,
        right: 20,
        zIndex: 10,
        padding: 8,
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 20,
    },
    avatarWrapper: {
        position: 'relative',
        marginBottom: 14,
    },
    avatarGradient: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: 'rgba(201,168,76,0.4)',
    },
    onlineBadge: {
        position: 'absolute',
        bottom: 4,
        right: 4,
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: '#4CAF50',
        borderWidth: 2,
        borderColor: '#1C2A3A',
    },
    profileName: {
        fontSize: 24,
        fontWeight: '800',
        color: '#fff',
        letterSpacing: 1,
    },
    profileNim: {
        fontSize: 14,
        color: '#C9A84C',
        marginTop: 4,
        letterSpacing: 2,
    },
    profileStudy: {
        fontSize: 13,
        color: '#888',
        marginTop: 4,
    },
    pillRow: {
        flexDirection: 'row',
        gap: 8,
        marginTop: 16,
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    pill: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        backgroundColor: 'rgba(201,168,76,0.12)',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'rgba(201,168,76,0.3)',
    },
    pillText: {
        color: '#E8E8E8',
        fontSize: 12,
    },
    sectionCard: {
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderRadius: 20,
        marginHorizontal: 16,
        marginTop: 16,
        padding: 20,
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
        letterSpacing: 1,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 14,
        gap: 12,
    },
    infoIconBox: {
        width: 34,
        height: 34,
        borderRadius: 10,
        backgroundColor: 'rgba(201,168,76,0.12)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    infoContent: { flex: 1 },
    infoLabel: {
        fontSize: 11,
        color: '#888',
        letterSpacing: 0.5,
        marginBottom: 2,
    },
    infoValue: {
        fontSize: 14,
        color: '#E8E8E8',
        fontWeight: '500',
    },
    skillRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        gap: 10,
    },
    skillName: {
        color: '#E8E8E8',
        fontSize: 13,
        width: 110,
    },
    skillBarBg: {
        flex: 1,
        height: 8,
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 4,
        overflow: 'hidden',
    },
    skillBarFill: {
        height: '100%',
        borderRadius: 4,
    },
    skillPercent: {
        color: '#C9A84C',
        fontSize: 12,
        width: 36,
        textAlign: 'right',
    },
    hobbyGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    hobbyChip: {
        backgroundColor: 'rgba(7,55,128,0.4)',
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'rgba(201,168,76,0.25)',
    },
    hobbyText: {
        color: '#E8E8E8',
        fontSize: 13,
    },
    logoutBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        marginTop: 20,
        marginHorizontal: 16,
        paddingVertical: 14,
        borderRadius: 14,
        backgroundColor: 'rgba(255,107,107,0.1)',
        borderWidth: 1,
        borderColor: 'rgba(255,107,107,0.3)',
    },
    logoutText: {
        color: '#FF6B6B',
        fontWeight: '600',
        fontSize: 15,
    },
});
