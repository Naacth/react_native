import React, { useState } from 'react';
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

const categories = ['Semua', 'Akademik', 'Ibadah', 'Organisasi', 'Produktif', 'Kesehatan', 'Rutinitas', 'Hiburan'];

export default function AktivitasScreen() {
    const { aktivitas, biodata } = useApp();
    const router = useRouter();
    const [selectedCategory, setSelectedCategory] = useState('Semua');

    const filtered = selectedCategory === 'Semua'
        ? aktivitas
        : aktivitas.filter(a => a.category === selectedCategory);

    return (
        <LinearGradient colors={['#0D1117', '#1C2A3A']} style={styles.gradient}>
            {/* Header */}
            <LinearGradient colors={['#073780ff', '#1C2A3A']} style={styles.topHeader}>
                {/* Settings Button */}
                <TouchableOpacity 
                    style={styles.settingsBtn} 
                    onPress={() => router.push('/pengaturan')}
                >
                    <Ionicons name="settings-outline" size={24} color="#C9A84C" />
                </TouchableOpacity>

                <Ionicons name="calendar" size={36} color="#C9A84C" />
                <Text style={styles.headerTitle}>Aktivitas Harian</Text>
                <Text style={styles.headerSubtitle}>Jadwal rutin {biodata.name}</Text>
            </LinearGradient>

            {/* Category Filter */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.filterRow}
                style={styles.filterScroll}
            >
                {categories.map((cat) => (
                    <TouchableOpacity
                        key={cat}
                        onPress={() => setSelectedCategory(cat)}
                        style={[styles.filterChip, selectedCategory === cat && styles.filterChipActive]}
                    >
                        <Text style={[styles.filterChipText, selectedCategory === cat && styles.filterChipTextActive]}>
                            {cat}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {/* Activities List */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.listContent}
            >
                {filtered.map((activity, index) => (
                    <View key={index} style={styles.activityItem}>
                        {/* Time column */}
                        <View style={styles.timeCol}>
                            <Text style={styles.timeText}>{activity.time}</Text>
                            <Text style={styles.periodText}>{activity.period}</Text>
                        </View>

                        {/* Connector dot */}
                        <View style={styles.connectorCol}>
                            <View style={[styles.connectorDot, { backgroundColor: activity.color }]} />
                            {index < filtered.length - 1 && <View style={styles.connectorLine} />}
                        </View>

                        {/* Content card */}
                        <View style={styles.activityCard}>
                            <View style={[styles.iconBox, { backgroundColor: activity.color + '20' }]}>
                                <Ionicons name={activity.icon as any} size={20} color={activity.color} />
                            </View>
                            <View style={styles.activityContent}>
                                <Text style={styles.activityName}>{activity.name}</Text>
                                <View style={styles.activityMeta}>
                                    <View style={[styles.categoryBadge, { borderColor: activity.color + '50' }]}>
                                        <Text style={[styles.categoryBadgeText, { color: activity.color }]}>
                                            {activity.category}
                                        </Text>
                                    </View>
                                    <View style={styles.durationBadge}>
                                        <Ionicons name="time-outline" size={11} color="#888" />
                                        <Text style={styles.durationText}>{activity.duration}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                ))}
                <View style={{ height: 30 }} />
            </ScrollView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    gradient: { flex: 1 },
    topHeader: {
        alignItems: 'center',
        paddingTop: 50,
        paddingBottom: 20,
        paddingHorizontal: 20,
        gap: 6,
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
    filterScroll: {
        maxHeight: 56,
    },
    filterRow: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        gap: 8,
        alignItems: 'center',
    },
    filterChip: {
        paddingHorizontal: 14,
        paddingVertical: 6,
        borderRadius: 16,
        backgroundColor: 'rgba(255,255,255,0.08)',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)',
    },
    filterChipActive: {
        backgroundColor: 'rgba(201,168,76,0.2)',
        borderColor: '#C9A84C',
    },
    filterChipText: {
        color: '#888',
        fontSize: 12,
        fontWeight: '600',
    },
    filterChipTextActive: {
        color: '#C9A84C',
    },
    listContent: {
        paddingHorizontal: 16,
        paddingTop: 8,
    },
    activityItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 4,
        gap: 8,
    },
    timeCol: {
        width: 44,
        alignItems: 'flex-end',
        paddingTop: 10,
    },
    timeText: {
        fontSize: 12,
        fontWeight: '700',
        color: '#C9A84C',
    },
    periodText: {
        fontSize: 10,
        color: '#555',
    },
    connectorCol: {
        alignItems: 'center',
        width: 24,
    },
    connectorDot: {
        width: 14,
        height: 14,
        borderRadius: 7,
        marginTop: 13,
    },
    connectorLine: {
        width: 2,
        flex: 1,
        minHeight: 20,
        backgroundColor: 'rgba(255,255,255,0.1)',
        marginVertical: 2,
    },
    activityCard: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderRadius: 14,
        padding: 12,
        marginBottom: 8,
        gap: 12,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.06)',
        alignItems: 'center',
    },
    iconBox: {
        width: 40,
        height: 40,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    activityContent: { flex: 1 },
    activityName: {
        fontSize: 14,
        fontWeight: '600',
        color: '#E8E8E8',
        marginBottom: 6,
    },
    activityMeta: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    categoryBadge: {
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 8,
        borderWidth: 1,
        backgroundColor: 'transparent',
    },
    categoryBadgeText: {
        fontSize: 10,
        fontWeight: '600',
    },
    durationBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 3,
    },
    durationText: {
        fontSize: 11,
        color: '#888',
    },
});
