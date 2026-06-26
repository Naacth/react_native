import React from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useApp } from '../context/AppContext';
import { useRouter } from 'expo-router';

export default function PendidikanScreen() {
    const { pendidikan, biodata } = useApp();
    const router = useRouter();

    return (
        <LinearGradient colors={['#0D1117', '#1C2A3A']} style={styles.gradient}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
                {/* Top Header */}
                <LinearGradient colors={['#073780ff', '#1C2A3A']} style={styles.topHeader}>
                    {/* Settings Button */}
                    <TouchableOpacity 
                        style={styles.settingsBtn} 
                        onPress={() => router.push('/pengaturan')}
                    >
                        <Ionicons name="settings-outline" size={24} color="#C9A84C" />
                    </TouchableOpacity>

                    <Ionicons name="school" size={40} color="#C9A84C" />
                    <Text style={styles.headerTitle}>Riwayat Pendidikan</Text>
                    <Text style={styles.headerSubtitle}>{biodata.name} · NIM {biodata.nim}</Text>
                </LinearGradient>

                {/* Timeline */}
                <View style={styles.timelineContainer}>
                    {pendidikan.map((edu, index) => (
                        <View key={index} style={styles.timelineItem}>
                            {/* Left: line + dot */}
                            <View style={styles.timelineLeft}>
                                <View style={[styles.timelineDot, { backgroundColor: edu.color }]}>
                                    <Ionicons name={edu.icon as any} size={16} color="#fff" />
                                </View>
                                {index < pendidikan.length - 1 && (
                                    <View style={styles.timelineLine} />
                                )}
                            </View>

                            {/* Right: Card */}
                            <View style={[styles.eduCard, edu.current && styles.eduCardCurrent]}>
                                {edu.current && (
                                    <View style={styles.currentBadge}>
                                        <Text style={styles.currentBadgeText}>● Saat Ini</Text>
                                    </View>
                                )}
                                <View style={[styles.levelBadge, { backgroundColor: edu.color + '20', borderColor: edu.color + '50' }]}>
                                    <Text style={[styles.levelText, { color: edu.color }]}>{edu.level}</Text>
                                </View>
                                <Text style={styles.schoolName}>{edu.name}</Text>
                                <Text style={styles.schoolDesc}>{edu.description}</Text>

                                <View style={styles.metaRow}>
                                    <View style={styles.metaItem}>
                                        <Ionicons name="calendar-outline" size={13} color="#888" />
                                        <Text style={styles.metaText}>{edu.year}</Text>
                                    </View>
                                </View>

                                {edu.major !== '-' && (
                                    <View style={styles.majorRow}>
                                        <Ionicons name="bookmark-outline" size={13} color="#C9A84C" />
                                        <Text style={styles.majorText}>{edu.major}</Text>
                                    </View>
                                )}
                            </View>
                        </View>
                    ))}
                </View>

                {/* Summary Card */}
                <View style={styles.summaryCard}>
                    <Ionicons name="stats-chart-outline" size={22} color="#C9A84C" />
                    <Text style={styles.summaryTitle}>Ringkasan</Text>
                    <View style={styles.summaryGrid}>
                        <SummaryItem value="13" label="Tahun Belajar" />
                        <SummaryItem value="4" label="Jenjang Ditempuh" />
                        <SummaryItem value="2023" label="Mulai Kuliah" />
                        <SummaryItem value="3.7" label="IPK Saat Ini" />
                    </View>
                </View>

                <View style={{ height: 30 }} />
            </ScrollView>
        </LinearGradient>
    );
}

function SummaryItem({ value, label }: { value: string; label: string }) {
    return (
        <View style={styles.summaryItem}>
            <Text style={styles.summaryValue}>{value}</Text>
            <Text style={styles.summaryLabel}>{label}</Text>
        </View>
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
    timelineContainer: {
        paddingHorizontal: 16,
        marginTop: 20,
    },
    timelineItem: {
        flexDirection: 'row',
        gap: 16,
        marginBottom: 4,
    },
    timelineLeft: {
        alignItems: 'center',
        width: 44,
    },
    timelineDot: {
        width: 44,
        height: 44,
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
    },
    timelineLine: {
        width: 2,
        flex: 1,
        backgroundColor: 'rgba(201,168,76,0.2)',
        marginTop: 4,
        marginBottom: 4,
        minHeight: 30,
    },
    eduCard: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.08)',
    },
    eduCardCurrent: {
        borderColor: 'rgba(201,168,76,0.4)',
        backgroundColor: 'rgba(201,168,76,0.06)',
    },
    currentBadge: {
        position: 'absolute',
        top: 12,
        right: 12,
    },
    currentBadgeText: {
        fontSize: 11,
        color: '#4CAF50',
        fontWeight: '600',
    },
    levelBadge: {
        alignSelf: 'flex-start',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 8,
        borderWidth: 1,
        marginBottom: 8,
    },
    levelText: {
        fontSize: 12,
        fontWeight: '700',
        letterSpacing: 1,
    },
    schoolName: {
        fontSize: 15,
        fontWeight: '700',
        color: '#fff',
        marginBottom: 4,
    },
    schoolDesc: {
        fontSize: 12,
        color: '#888',
        marginBottom: 10,
    },
    metaRow: {
        flexDirection: 'row',
        gap: 12,
    },
    metaItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    metaText: {
        fontSize: 12,
        color: '#888',
    },
    majorRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        marginTop: 8,
        backgroundColor: 'rgba(201,168,76,0.1)',
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 8,
    },
    majorText: {
        fontSize: 12,
        color: '#C9A84C',
        fontWeight: '500',
    },
    summaryCard: {
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderRadius: 20,
        marginHorizontal: 16,
        marginTop: 8,
        padding: 20,
        borderWidth: 1,
        borderColor: 'rgba(201,168,76,0.2)',
        alignItems: 'center',
        gap: 12,
    },
    summaryTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#C9A84C',
    },
    summaryGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
        justifyContent: 'center',
    },
    summaryItem: {
        width: '44%',
        backgroundColor: 'rgba(7,55,128,0.3)',
        borderRadius: 14,
        padding: 14,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(201,168,76,0.15)',
    },
    summaryValue: {
        fontSize: 22,
        fontWeight: '800',
        color: '#C9A84C',
    },
    summaryLabel: {
        fontSize: 12,
        color: '#888',
        marginTop: 4,
        textAlign: 'center',
    },
});
