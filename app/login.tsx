import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
    KeyboardAvoidingView,
    Platform,
    Image,
    Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const VALID_USERNAME = '23050447';
const VALID_PASSWORD = '23050447';

export default function LoginScreen() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleLogin = () => {
        let valid = true;
        setUsernameError('');
        setPasswordError('');

        if (!username.trim()) {
            setUsernameError('Username tidak boleh kosong');
            valid = false;
        } else if (username !== VALID_USERNAME) {
            setUsernameError('Username tidak valid');
            valid = false;
        }

        if (!password.trim()) {
            setPasswordError('Password tidak boleh kosong');
            valid = false;
        } else if (password !== VALID_PASSWORD) {
            setPasswordError('Password tidak valid');
            valid = false;
        }

        if (valid) {
            router.replace('/(tabs)/biodata');
        }
    };

    return (
        <LinearGradient
            colors={['#0D1117', '#1C2A3A', '#073780ff']}
            locations={[0, 0.5, 1]}
            style={styles.gradient}
        >
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}
            >
                {/* Top decoration circles */}
                <View style={styles.circleTopRight} />
                <View style={styles.circleTopLeft} />

                {/* Logo / Avatar area */}
                <View style={styles.avatarContainer}>
                    <LinearGradient
                        colors={['#C9A84C', '#A0785A']}
                        style={styles.avatarGradient}
                    >
                        <Ionicons name="person" size={60} color="#fff" />
                    </LinearGradient>
                    <Text style={styles.appName}>Profile App</Text>
                    <Text style={styles.appSubtitle}>Profil Pribadi Mahasiswa</Text>
                </View>

                {/* Card */}
                <View style={styles.card}>
                    <Text style={styles.loginTitle}>Masuk ke Akun</Text>
                    <Text style={styles.loginSubtitle}>Gunakan NIM sebagai username & password</Text>

                    {/* Username Input */}
                    <View style={styles.inputWrapper}>
                        <Text style={styles.label}>Username (NIM)</Text>
                        <View style={[styles.inputContainer, usernameError ? styles.inputError : null]}>
                            <Ionicons name="person-outline" size={20} color="#C9A84C" style={styles.inputIcon} />
                            <TextInput
                                style={styles.input}
                                placeholder="Masukkan NIM"
                                placeholderTextColor="#555"
                                value={username}
                                onChangeText={(text) => {
                                    setUsername(text);
                                    setUsernameError('');
                                }}
                                autoCapitalize="none"
                                keyboardType="numeric"
                            />
                        </View>
                        {usernameError ? <Text style={styles.errorText}>{usernameError}</Text> : null}
                    </View>

                    {/* Password Input */}
                    <View style={styles.inputWrapper}>
                        <Text style={styles.label}>Password</Text>
                        <View style={[styles.inputContainer, passwordError ? styles.inputError : null]}>
                            <Ionicons name="lock-closed-outline" size={20} color="#C9A84C" style={styles.inputIcon} />
                            <TextInput
                                style={styles.input}
                                placeholder="Masukkan Password"
                                placeholderTextColor="#555"
                                value={password}
                                onChangeText={(text) => {
                                    setPassword(text);
                                    setPasswordError('');
                                }}
                                secureTextEntry={!showPassword}
                                keyboardType="numeric"
                            />
                            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                <Ionicons
                                    name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                                    size={20}
                                    color="#888"
                                />
                            </TouchableOpacity>
                        </View>
                        {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
                    </View>

                    {/* Login Button */}
                    <TouchableOpacity onPress={handleLogin} activeOpacity={0.85}>
                        <LinearGradient
                            colors={['#C9A84C', '#A0785A']}
                            locations={[0, 1]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.loginButton}
                        >
                            <Text style={styles.loginButtonText}>MASUK</Text>
                            <Ionicons name="arrow-forward" size={20} color="#fff" style={{ marginLeft: 8 }} />
                        </LinearGradient>
                    </TouchableOpacity>

                    {/* NIM hint */}
                    <View style={styles.hintContainer}>
                        <Ionicons name="information-circle-outline" size={16} color="#888" />
                        <Text style={styles.hintText}>Hint: NIM = 23050447</Text>
                    </View>
                </View>

                {/* Bottom decoration */}
                <View style={styles.circleBottomLeft} />
            </KeyboardAvoidingView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 24,
    },
    circleTopRight: {
        position: 'absolute',
        top: -60,
        right: -60,
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: 'rgba(201, 168, 76, 0.08)',
    },
    circleTopLeft: {
        position: 'absolute',
        top: 80,
        left: -80,
        width: 180,
        height: 180,
        borderRadius: 90,
        backgroundColor: 'rgba(7, 55, 128, 0.3)',
    },
    circleBottomLeft: {
        position: 'absolute',
        bottom: -80,
        right: -40,
        width: 220,
        height: 220,
        borderRadius: 110,
        backgroundColor: 'rgba(201, 168, 76, 0.06)',
    },
    avatarContainer: {
        alignItems: 'center',
        marginBottom: 32,
    },
    avatarGradient: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
        elevation: 10,
        shadowColor: '#C9A84C',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },
    appName: {
        fontSize: 28,
        fontWeight: '800',
        color: '#C9A84C',
        letterSpacing: 2,
    },
    appSubtitle: {
        fontSize: 13,
        color: '#888',
        marginTop: 4,
        letterSpacing: 1,
    },
    card: {
        width: '100%',
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderRadius: 24,
        padding: 28,
        borderWidth: 1,
        borderColor: 'rgba(201, 168, 76, 0.2)',
        elevation: 8,
    },
    loginTitle: {
        fontSize: 22,
        fontWeight: '700',
        color: '#fff',
        marginBottom: 6,
    },
    loginSubtitle: {
        fontSize: 12,
        color: '#888',
        marginBottom: 24,
    },
    inputWrapper: {
        marginBottom: 16,
    },
    label: {
        fontSize: 13,
        color: '#C9A84C',
        marginBottom: 8,
        fontWeight: '600',
        letterSpacing: 0.5,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.08)',
        borderRadius: 12,
        paddingHorizontal: 14,
        paddingVertical: 12,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)',
    },
    inputError: {
        borderColor: '#FF6B6B',
    },
    inputIcon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        color: '#fff',
        fontSize: 15,
    },
    errorText: {
        color: '#FF6B6B',
        fontSize: 12,
        marginTop: 4,
        marginLeft: 4,
    },
    loginButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        borderRadius: 14,
        marginTop: 8,
        elevation: 6,
        shadowColor: '#C9A84C',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 8,
    },
    loginButtonText: {
        color: '#fff',
        fontWeight: '800',
        fontSize: 16,
        letterSpacing: 2,
    },
    hintContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
        gap: 4,
    },
    hintText: {
        color: '#888',
        fontSize: 12,
    },
});
