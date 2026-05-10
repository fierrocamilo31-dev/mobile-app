import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';

type HomeScreenProps = {
  userName: string;
  onLogout: () => void;
};

export default function HomeScreen({ userName, onLogout }: HomeScreenProps) {
  const [activeAccount, setActiveAccount] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        
        {/* ========== HEADER SECTION ========== */}
        <View style={styles.headerSection}>
          <View style={styles.headerLeft}>
            <Text style={styles.greeting}>¡Hola, {userName}!</Text>
            <Text style={styles.subheading}>Tu banca en tus manos</Text>
          </View>
          <Pressable style={styles.profileBadge}>
            <Text style={styles.profileInitial}>
              {userName.charAt(0).toUpperCase()}
            </Text>
          </Pressable>
        </View>

        {/* ========== BALANCE CARD ========== */}
        <View style={styles.balanceCard}>
          <View style={styles.balanceHeader}>
            <View>
              <Text style={styles.balanceLabel}>Saldo Disponible</Text>
              <Text style={styles.balanceValue}>$12,450.75</Text>
            </View>
            <MaterialIcons name="account-balance-wallet" size={40} color="#06B6D4" />
          </View>
          <View style={styles.balanceDivider} />
          <View style={styles.balanceFooter}>
            <View style={styles.balanceDetail}>
              <MaterialIcons name="info-outline" size={16} color="#94A3B8" />
              <Text style={styles.balanceDetailText}>Cuenta corriente • CTA: 1234</Text>
            </View>
          </View>
        </View>

        {/* ========== QUICK ACTIONS ========== */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Acciones Rápidas</Text>
            <View style={styles.titleIcon} />
          </View>
          
          <View style={styles.actionsGrid}>
            <Pressable style={({ pressed }) => [styles.actionCard, styles.actionCardPay, pressed && styles.actionCardPressed]}>
              <View style={styles.actionIconBox}>
                <MaterialIcons name="payment" size={28} color="#FFFFFF" />
              </View>
              <Text style={styles.actionLabel}>Pagar</Text>
              <Text style={styles.actionSubtext}>Servicios</Text>
            </Pressable>

            <Pressable style={({ pressed }) => [styles.actionCard, styles.actionCardSend, pressed && styles.actionCardPressed]}>
              <View style={styles.actionIconBox}>
                <MaterialIcons name="send" size={28} color="#FFFFFF" />
              </View>
              <Text style={styles.actionLabel}>Enviar</Text>
              <Text style={styles.actionSubtext}>Dinero</Text>
            </Pressable>

            <Pressable style={({ pressed }) => [styles.actionCard, styles.actionCardCard, pressed && styles.actionCardPressed]}>
              <View style={styles.actionIconBox}>
                <MaterialIcons name="credit-card" size={28} color="#FFFFFF" />
              </View>
              <Text style={styles.actionLabel}>Tarjeta</Text>
              <Text style={styles.actionSubtext}>Gestión</Text>
            </Pressable>
          </View>
        </View>

        {/* ========== ACCOUNTS SECTION ========== */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Mis Cuentas</Text>
            <MaterialIcons name="account-balance" size={20} color="#EC4899" />
          </View>

          <Pressable 
            style={({ pressed }) => [
              styles.accountCardContainer,
              activeAccount === 0 && styles.accountCardActive,
              pressed && styles.accountCardPressed
            ]}
            onPress={() => setActiveAccount(0)}
          >
            <View style={styles.accountCardContent}>
              <View style={styles.accountIconBox}>
                <MaterialIcons name="savings" size={24} color="#10B981" />
              </View>
              <View style={styles.accountInfo}>
                <Text style={styles.accountName}>Ahorros</Text>
                <Text style={styles.accountSubtext}>Cuenta de ahorros</Text>
              </View>
            </View>
            <View style={styles.accountAmountBox}>
              <Text style={styles.accountAmount}>$8,320.40</Text>
              <View style={styles.accountTrend}>
                <MaterialIcons name="trending-up" size={16} color="#10B981" />
                <Text style={styles.trendText}>+2.5%</Text>
              </View>
            </View>
          </Pressable>

          <Pressable 
            style={({ pressed }) => [
              styles.accountCardContainer,
              activeAccount === 1 && styles.accountCardActive,
              pressed && styles.accountCardPressed
            ]}
            onPress={() => setActiveAccount(1)}
          >
            <View style={styles.accountCardContent}>
              <View style={styles.accountIconBox}>
                <MaterialIcons name="show-chart" size={24} color="#F59E0B" />
              </View>
              <View style={styles.accountInfo}>
                <Text style={styles.accountName}>Inversiones</Text>
                <Text style={styles.accountSubtext}>Portafolio activo</Text>
              </View>
            </View>
            <View style={styles.accountAmountBox}>
              <Text style={styles.accountAmount}>$14,950.00</Text>
              <View style={styles.accountTrend}>
                <MaterialIcons name="trending-up" size={16} color="#F59E0B" />
                <Text style={styles.trendText}>+5.3%</Text>
              </View>
            </View>
          </Pressable>
        </View>

        {/* ========== TRANSACTIONS ========== */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Últimas Transacciones</Text>
            <MaterialIcons name="history" size={20} color="#8B5CF6" />
          </View>

          <View style={styles.transactionsList}>
            <Pressable style={({ pressed }) => [styles.transactionCard, pressed && styles.transactionCardPressed]}>
              <View style={[styles.transactionIconBg, { backgroundColor: '#E0E7FF' }]}>
                <MaterialIcons name="receipt" size={20} color="#6366F1" />
              </View>
              <View style={styles.transactionInfo}>
                <Text style={styles.transactionTitle}>Pago servicios</Text>
                <Text style={styles.transactionSubtext}>Telefónico e internet</Text>
                <Text style={styles.transactionDate}>10 may 2026</Text>
              </View>
              <Text style={[styles.transactionAmount, styles.negative]}>- $180.00</Text>
            </Pressable>

            <Pressable style={({ pressed }) => [styles.transactionCard, pressed && styles.transactionCardPressed]}>
              <View style={[styles.transactionIconBg, { backgroundColor: '#CFFAFE' }]}>
                <MaterialIcons name="add-circle" size={20} color="#06B6D4" />
              </View>
              <View style={styles.transactionInfo}>
                <Text style={styles.transactionTitle}>Depósito recibido</Text>
                <Text style={styles.transactionSubtext}>Salario mensual</Text>
                <Text style={styles.transactionDate}>08 may 2026</Text>
              </View>
              <Text style={[styles.transactionAmount, styles.positive]}>+ $2,500.00</Text>
            </Pressable>

            <Pressable style={({ pressed }) => [styles.transactionCard, pressed && styles.transactionCardPressed]}>
              <View style={[styles.transactionIconBg, { backgroundColor: '#FEF3C7' }]}>
                <MaterialIcons name="shopping-cart" size={20} color="#F59E0B" />
              </View>
              <View style={styles.transactionInfo}>
                <Text style={styles.transactionTitle}>Compra con tarjeta</Text>
                <Text style={styles.transactionSubtext}>Supermercado</Text>
                <Text style={styles.transactionDate}>07 may 2026</Text>
              </View>
              <Text style={[styles.transactionAmount, styles.negative]}>- $65.50</Text>
            </Pressable>
          </View>
        </View>

        {/* ========== LOGOUT BUTTON ========== */}
        <Pressable 
          style={({ pressed }) => [
            styles.logoutButton,
            pressed && styles.logoutButtonPressed
          ]}
          onPress={onLogout}
        >
          <MaterialIcons name="logout" size={20} color="#FFFFFF" />
          <Text style={styles.logoutButtonText}>Cerrar Sesión</Text>
        </Pressable>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    paddingBottom: 40,
  },

  /* ========== HEADER ========== */
  headerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 32,
    marginTop: 8,
  },
  headerLeft: {
    flex: 1,
  },
  greeting: {
    fontSize: 28,
    fontWeight: '900',
    color: '#1E293B',
    letterSpacing: -0.5,
    marginBottom: 4,
  },
  subheading: {
    fontSize: 14,
    color: '#64748B',
    fontWeight: '500',
  },
  profileBadge: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#EC4899',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#EC4899',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 6,
  },
  profileInitial: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  /* ========== BALANCE CARD ========== */
  balanceCard: {
    backgroundColor: '#1E293B',
    borderRadius: 20,
    paddingVertical: 24,
    paddingHorizontal: 20,
    marginBottom: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 4,
  },
  balanceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  balanceLabel: {
    fontSize: 13,
    color: '#94A3B8',
    fontWeight: '600',
    letterSpacing: 0.3,
    marginBottom: 8,
  },
  balanceValue: {
    fontSize: 40,
    fontWeight: '900',
    color: '#06B6D4',
    letterSpacing: -1,
  },
  balanceDivider: {
    height: 1,
    backgroundColor: '#334155',
    marginVertical: 16,
  },
  balanceFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  balanceDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  balanceDetailText: {
    fontSize: 12,
    color: '#94A3B8',
    fontWeight: '500',
  },

  /* ========== SECTION CONTAINER ========== */
  sectionContainer: {
    marginBottom: 32,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#1E293B',
    letterSpacing: -0.3,
  },
  titleIcon: {
    width: 4,
    height: 24,
    backgroundColor: '#6366F1',
    borderRadius: 2,
  },

  /* ========== ACTIONS GRID ========== */
  actionsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  actionCard: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 12,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  actionCardPay: {
    backgroundColor: '#10B981',
  },
  actionCardSend: {
    backgroundColor: '#8B5CF6',
  },
  actionCardCard: {
    backgroundColor: '#F59E0B',
  },
  actionCardPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.95 }],
  },
  actionIconBox: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.25)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  actionLabel: {
    fontSize: 14,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  actionSubtext: {
    fontSize: 11,
    color: 'rgba(255,255,255,0.7)',
    fontWeight: '500',
  },

  /* ========== ACCOUNT CARDS ========== */
  accountCardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderLeftWidth: 5,
    borderLeftColor: '#06B6D4',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  accountCardActive: {
    borderLeftColor: '#6366F1',
    backgroundColor: '#F5F3FF',
    shadowOpacity: 0.12,
  },
  accountCardPressed: {
    transform: [{ scale: 0.98 }],
  },
  accountCardContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  accountIconBox: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#F1F5F9',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  accountInfo: {
    flex: 1,
  },
  accountName: {
    fontSize: 15,
    fontWeight: '800',
    color: '#1E293B',
    marginBottom: 4,
  },
  accountSubtext: {
    fontSize: 12,
    color: '#94A3B8',
    fontWeight: '500',
  },
  accountAmountBox: {
    alignItems: 'flex-end',
  },
  accountAmount: {
    fontSize: 16,
    fontWeight: '900',
    color: '#1E293B',
    marginBottom: 6,
  },
  accountTrend: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#ECFDF5',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
  },
  trendText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#10B981',
  },

  /* ========== TRANSACTIONS ========== */
  transactionsList: {
    gap: 10,
  },
  transactionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftWidth: 4,
    borderLeftColor: '#E2E8F0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  transactionCardPressed: {
    transform: [{ scale: 0.97 }],
    backgroundColor: '#F8FAFC',
  },
  transactionIconBg: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  transactionInfo: {
    flex: 1,
  },
  transactionTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: '#1E293B',
    marginBottom: 2,
  },
  transactionSubtext: {
    fontSize: 11,
    color: '#94A3B8',
    fontWeight: '500',
    marginBottom: 4,
  },
  transactionDate: {
    fontSize: 10,
    color: '#CBD5E1',
    fontWeight: '500',
  },
  transactionAmount: {
    fontSize: 13,
    fontWeight: '900',
    marginLeft: 8,
  },
  positive: {
    color: '#10B981',
  },
  negative: {
    color: '#EF4444',
  },

  /* ========== LOGOUT BUTTON ========== */
  logoutButton: {
    flexDirection: 'row',
    backgroundColor: '#EF4444',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    shadowColor: '#EF4444',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 4,
  },
  logoutButtonPressed: {
    transform: [{ scale: 0.96 }],
    opacity: 0.9,
  },
  logoutButtonText: {
    fontSize: 15,
    fontWeight: '800',
    color: '#FFFFFF',
    marginLeft: 10,
    letterSpacing: 0.3,
  },
});
