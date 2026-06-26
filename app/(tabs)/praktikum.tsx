import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useApp } from '../context/AppContext';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

export default function PraktikumScreen() {
    const { praktikum } = useApp();
    const router = useRouter();
    const [expanded, setExpanded] = useState<number | null>(null);

    const toggle = (id: number) => {
        setExpanded(expanded === id ? null : id);
    };

    const done = praktikum.filter(p => p.status === 'Selesai').length;

    return (
        <LinearGradient colors={['#0D1117', '#1C2A3A']} style={styles.gradient}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
                {/* Header */}
                <LinearGradient colors={['#073780ff', '#1C2A3A']} style={styles.topHeader}>
                    {/* Settings Button */}
                    <TouchableOpacity 
                        style={styles.settingsBtn} 
                        onPress={() => router.push('/pengaturan')}
                    >
                        <Ionicons name="settings-outline" size={24} color="#C9A84C" />
                    </TouchableOpacity>

                    <Ionicons name="trophy" size={40} color="#C9A84C" />
                    <Text style={styles.headerTitle}>Portofolio Praktikum</Text>
                    <Text style={styles.headerSubtitle}>Mobile Programming · Expo React Native</Text>

                    {/* Progress bar */}
                    <View style={styles.progressContainer}>
                        <View style={styles.progressRow}>
                            <Text style={styles.progressLabel}>{done} dari {praktikum.length} praktikum selesai</Text>
                            <Text style={styles.progressPercent}>{Math.round((done / praktikum.length) * 100) || 0}%</Text>
                        </View>
                        <View style={styles.progressBg}>
                            <LinearGradient
                                colors={['#C9A84C', '#A0785A']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={[styles.progressFill, { width: `${(done / praktikum.length) * 100 || 0}%` }]}
                            />
                        </View>
                    </View>
                </LinearGradient>

                {/* List */}
                <View style={styles.listContainer}>
                    {praktikum.map((item) => {
                        const isExpanded = expanded === item.id;
                        return (
                            <TouchableOpacity
                                key={item.id}
                                onPress={() => toggle(item.id)}
                                activeOpacity={0.85}
                            >
                                <View style={[styles.card, item.isFinal && styles.cardFinal]}>
                                    {/* Card Header */}
                                    <View style={styles.cardHeader}>
                                        <View style={[styles.iconBox, { backgroundColor: item.color + '20' }]}>
                                            <Ionicons name={item.icon as any} size={22} color={item.color} />
                                        </View>
                                        <View style={styles.cardMeta}>
                                            <View style={styles.cardTopRow}>
                                                <Text style={styles.weekBadge}>{item.week}</Text>
                                                <View style={[styles.statusBadge, { backgroundColor: '#4CAF5020', borderColor: '#4CAF5060' }]}>
                                                    <View style={styles.statusDot} />
                                                    <Text style={styles.statusText}>{item.status}</Text>
                                                </View>
                                            </View>
                                            <Text style={styles.cardTitle}>{item.title}</Text>
                                        </View>
                                        <Ionicons
                                            name={isExpanded ? 'chevron-up' : 'chevron-down'}
                                            size={18}
                                            color="#555"
                                        />
                                    </View>

                                    {/* Expanded content */}
                                    {isExpanded && (
                                        <View style={styles.cardBody}>
                                            <View style={styles.divider} />

                                            <Text style={styles.descText}>{item.description}</Text>

                                            {/* Screenshot placeholder */}
                                            <View style={styles.screenshotPlaceholder}>
                                                <Ionicons name="image-outline" size={32} color="#444" />
                                                <Text style={styles.screenshotText}>Screenshot Hasil Praktikum</Text>
                                                <Text style={styles.screenshotSub}>Implementasi di perangkat Android/iOS</Text>
                                            </View>

                                            {/* Tech stack */}
                                            <Text style={styles.techLabel}>Teknologi yang Digunakan:</Text>
                                            <View style={styles.techRow}>
                                                {item.tech.map((t, i) => (
                                                    <View key={i} style={[styles.techChip, { borderColor: item.color + '50' }]}>
                                                        <Text style={[styles.techChipText, { color: item.color }]}>{t}</Text>
                                                    </View>
                                                ))}
                                            </View>
                                        </View>
                                    )}
                                </View>
                            </TouchableOpacity>
                        );
                    })}
                </View>

                {/* Footer info */}
                <View style={styles.footerCard}>
                    <Ionicons name="information-circle-outline" size={20} color="#C9A84C" />
                    <Text style={styles.footerText}>
                        Seluruh praktikum dikerjakan menggunakan{' '}
                        <Text style={{ color: '#C9A84C', fontWeight: '700' }}>React Native Expo</Text>
                        {' '}dalam mata kuliah Mobile Programming.
                    </Text>
                </View>

                <View style={{ height: 30 }} />
            </ScrollView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    gradient: { flex: 1 },
    scroll: { paddingBottom: 20 },
    topHeader: {
        alignItems: 'center',
        paddingTop: 50,
        paddingBottom: 30,
        paddingHorizontal: 20,
        gap: 8,
        position: 'relative',
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
    headerTitle: {
        fontSize: 22,
        fontWeight: '800',
        color: '#fff',
        letterSpacing: 1,
    },
    headerSubtitle: {
        fontSize: 13,
        color: '#888',
    },
    progressContainer: {
        width: '100%',
        marginTop: 14,
    },
    progressRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 6,
    },
    progressLabel: {
        fontSize: 12,
        color: '#888',
    },
    progressPercent: {
        fontSize: 12,
        color: '#C9A84C',
        fontWeight: '700',
    },
    progressBg: {
        height: 8,
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 4,
        overflow: 'hidden',
    },
    progressFill: {
        height: '100%',
        borderRadius: 4,
    },
    listContainer: {
        paddingHorizontal: 16,
        paddingTop: 16,
        gap: 12,
    },
    card: {
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderRadius: 18,
        padding: 16,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.08)',
    },
    cardFinal: {
        borderColor: 'rgba(201,168,76,0.4)',
        backgroundColor: 'rgba(201,168,76,0.06)',
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    iconBox: {
        width: 46,
        height: 46,
        borderRadius: 13,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardMeta: {
        flex: 1,
        gap: 4,
    },
    cardTopRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    weekBadge: {
        fontSize: 11,
        color: '#888',
        fontWeight: '500',
    },
    statusBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 8,
        borderWidth: 1,
    },
    statusDot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#4CAF50',
    },
    statusText: {
        fontSize: 10,
        color: '#4CAF50',
        fontWeight: '600',
    },
    cardTitle: {
        fontSize: 14,
        fontWeight: '700',
        color: '#E8E8E8',
    },
    cardBody: {
        marginTop: 12,
    },
    divider: {
        height: 1,
        backgroundColor: 'rgba(255,255,255,0.08)',
        marginBottom: 12,
    },
    descText: {
        fontSize: 13,
        color: '#aaa',
        lineHeight: 20,
        marginBottom: 14,
    },
    screenshotPlaceholder: {
        height: 140,
        backgroundColor: 'rgba(255,255,255,0.03)',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.08)',
        borderStyle: 'dashed',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 14,
        gap: 6,
    },
    screenshotText: {
        fontSize: 13,
        color: '#555',
        fontWeight: '600',
    },
    screenshotSub: {
        fontSize: 11,
        color: '#444',
    },
    techLabel: {
        fontSize: 12,
        color: '#888',
        marginBottom: 8,
        fontWeight: '600',
    },
    techRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 6,
    },
    techChip: {
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 8,
        borderWidth: 1,
        backgroundColor: 'transparent',
    },
    techChipText: {
        fontSize: 11,
        fontWeight: '600',
    },
    footerCard: {
        flexDirection: 'row',
        gap: 10,
        backgroundColor: 'rgba(201,168,76,0.08)',
        borderRadius: 14,
        padding: 16,
        marginHorizontal: 16,
        marginTop: 12,
        borderWidth: 1,
        borderColor: 'rgba(201,168,76,0.2)',
        alignItems: 'flex-start',
    },
    footerText: {
        flex: 1,
        fontSize: 13,
        color: '#888',
        lineHeight: 19,
    },
});
