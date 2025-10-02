// App.js
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';

const isWeb = Platform.OS === 'web';

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <View style={styles.logo} accessibilityLabel="logo" />
            <Text style={styles.title}>Connectway</Text>
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity accessible accessibilityRole="button">
              <Text style={styles.smallBtnText}>Acessibilidade</Text>
            </TouchableOpacity>
            <TouchableOpacity accessible accessibilityRole="button">
              <Text style={styles.smallBtnText}>Idioma</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Login Card */}
        <View style={styles.loginCard}>
          <Text style={styles.loginTitle}>ConnectWay</Text>

          <View style={styles.form}>
            <TextInput style={styles.input} placeholder="E-mail" placeholderTextColor="#6b6b6b" />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#6b6b6b"
              secureTextEntry
            />
            <TouchableOpacity style={styles.primaryBtn} accessibilityRole="button">
              <Text style={styles.primaryBtnText}>Entrar</Text>
            </TouchableOpacity>

            <View style={styles.linksRow}>
              <Text style={styles.linkText}>Esqueceu sua senha?</Text>
              <Text style={styles.linkText}>Crie uma Conta</Text>
            </View>

            <Text style={styles.googleText}>Entre com o Google</Text>
            <View style={styles.googleCircle}>
              <Text style={{fontWeight: '700'}}>G</Text>
            </View>
          </View>
        </View>

        {/* Select Problem */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Abrir Chamado</Text>
          <Text style={styles.sectionSubtitle}>Selecione o seu problema:</Text>

          <View style={styles.problemGrid}>
            {[
              'Erro de login',
              'Problemas com a impressora',
              'Falha de rede',
              'Instalação ou Atualização',
              'Bugs ou Travamento',
              'Outros',
            ].map((item, idx) => (
              <TouchableOpacity key={idx} style={styles.problemItem} accessibilityRole="button">
                <View style={styles.problemIcon}>
                  <Text style={styles.problemIconText}>{idx + 1}</Text>
                </View>
                <Text style={styles.problemText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity style={[styles.primaryBtn, {marginTop: 12}]} accessibilityRole="button">
            <Text style={styles.primaryBtnText}>Continue</Text>
          </TouchableOpacity>
        </View>

        {/* Troubleshoot Steps */}
        <View style={styles.troubleshoot}>
          <Text style={styles.troubleshootTitle}>
            Problema apresentado:{' '}
            <Text style={styles.alertText}>Falha de Rede</Text>
          </Text>

          <View style={styles.stepsBox}>
            {[
              {
                title: '1 - Verifique os cabos e conexões',
                text: 'Confirme se o cabo de rede está corretamente conectado ao computador e ao roteador.',
              },
              {
                title: '2 - Teste outro dispositivo',
                text: 'Você consegue acessar a internet por outro celular ou computador na mesma rede? Isso ajuda a identificar se o problema é com seu dispositivo ou com a rede geral.',
              },
              {
                title: '3 - Reinicie seu roteador/modem',
                text: 'Desligue o roteador da tomada, aguarde 30 segundos e ligue novamente. Aguarde até todas as luzes acenderem.',
              },
              {
                title: '4 - Desative e ative a conexão',
                text: 'Tente desativar o Wi-Fi ou cabo de rede e ativar novamente nas configurações do seu computador.',
              },
              {
                title: '5 - Verifique configurações de proxy ou VPN',
                text: 'Se estiver usando proxy ou VPN, tente desativar temporariamente e testar novamente.',
              },
            ].map((s, i) => (
              <View key={i} style={styles.step}>
                <Text style={styles.stepTitle}>{s.title}</Text>
                <Text style={styles.stepText}>{s.text}</Text>
              </View>
            ))}
          </View>

          <View style={styles.buttonsRow}>
            <TouchableOpacity style={styles.resolvedBtn} accessibilityRole="button">
              <Text style={styles.resolvedText}>Resolvido!</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondaryBtn} accessibilityRole="button">
              <Text style={styles.secondaryText}>Preciso de mais ajuda</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Problem Form */}
        <View style={styles.problemForm}>
          <View style={styles.formLeft}>
            <Text style={styles.formLeftTitle}>Formulário de descrição do Problema</Text>
          </View>

          <View style={styles.formRight}>
            <Text style={styles.label}>Descrição do problema</Text>
            <TextInput
              style={[styles.input, styles.textarea]}
              placeholder="Descreva detalhadamente..."
              placeholderTextColor="#6b6b6b"
              multiline
              numberOfLines={6}
            />

            <TextInput style={styles.input} placeholder="Título" placeholderTextColor="#6b6b6b" />

            <View style={styles.priorityRow}>
              <Text style={styles.label}>Nível de prioridade</Text>
              <View style={styles.priorityOptions}>
                <TouchableOpacity style={styles.priorityBtn}><Text>Baixo</Text></TouchableOpacity>
                <TouchableOpacity style={styles.priorityBtn}><Text>Médio</Text></TouchableOpacity>
                <TouchableOpacity style={styles.priorityBtn}><Text>Alto</Text></TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity style={[styles.primaryBtn, {alignSelf: 'flex-end', marginTop: 12}]}>
              <Text style={styles.primaryBtnText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{height: 30}} />
        <Text style={styles.footer}>© Connectway</Text>
        <View style={{height: 40}} />
      </ScrollView>
    </SafeAreaView>
  );
}

const baseGreen = '#0F5132';
const lightGreen = '#EAF6F0'; // background-ish
const cardBg = '#FFFFFF';
const paleBg = '#DFE9E5';

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: paleBg,
  },
  container: {
    alignItems: 'center',
    paddingBottom: 40,
    paddingTop: isWeb ? 20 : 0,
  },

  /* Header */
  header: {
    width: '100%',
    paddingHorizontal: isWeb ? 28 : 16,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  logo: {
    width: 44,
    height: 44,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: 'rgba(6,68,32,0.12)',
    backgroundColor: '#F6FBF9',
  },
  title: {
    fontSize: 26,
    color: baseGreen,
    fontWeight: '700',
    fontFamily: Platform.select({ ios: 'Georgia', android: 'serif', default: 'Georgia' }),
  },
  headerRight: { flexDirection: 'row', alignItems: 'center' },
  smallBtnText: { marginLeft: 10, color: '#15362d' },

  /* Login */
  loginCard: {
    width: isWeb ? 760 : '92%',
    backgroundColor: paleBg,
    borderRadius: 8,
    padding: 20,
    marginTop: 18,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 18,
    elevation: 6,
  },
  loginTitle: {
    fontSize: 36,
    color: baseGreen,
    fontWeight: '700',
    textAlign: 'center',
  },
  form: { marginTop: 14, alignSelf: 'center', width: '92%' },
  input: {
    width: '100%',
    padding: 12,
    borderRadius: 6,
    backgroundColor: '#fff',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.06)',
  },
  textarea: {
    height: 140,
    textAlignVertical: 'top',
  },
  primaryBtn: {
    alignSelf: 'center',
    backgroundColor: baseGreen,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  primaryBtnText: { color: '#fff', fontWeight: '700' },
  linksRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 },
  linkText: { color: '#184b3a' },
  googleText: { marginTop: 14, textAlign: 'center', color: '#163a2b' },
  googleCircle: {
    marginTop: 8,
    alignSelf: 'center',
    width: 44,
    height: 44,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: '#cfe6dc',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  /* Problems grid */
  section: { width: isWeb ? '92%' : '94%', marginTop: 10, alignItems: 'center' },
  sectionTitle: { fontSize: 32, color: baseGreen, fontWeight: '700' },
  sectionSubtitle: { color: '#184b3a', marginTop: 6 },
  problemGrid: {
    width: '100%',
    marginTop: 12,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  problemItem: {
    width: isWeb ? '16%' : '48%',
    minWidth: 120,
    backgroundColor: cardBg,
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
  },
  problemIcon: {
    width: 48,
    height: 48,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: baseGreen,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  problemIconText: { color: baseGreen, fontWeight: '700' },
  problemText: { fontWeight: '700', color: '#0e3f2e', textAlign: 'center' },

  /* Troubleshoot */
  troubleshoot: {
    width: isWeb ? 900 : '94%',
    backgroundColor: cardBg,
    borderRadius: 10,
    padding: 16,
    marginTop: 14,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 10,
  },
  troubleshootTitle: { fontSize: 20, color: baseGreen, fontWeight: '700' },
  alertText: { color: '#c87e1f', fontWeight: '800' },
  stepsBox: { marginTop: 12, backgroundColor: '#eef6f3', padding: 12, borderRadius: 8 },
  step: { marginBottom: 8 },
  stepTitle: { fontWeight: '700', color: baseGreen },
  stepText: { color: '#2b5346' },
  buttonsRow: { flexDirection: 'row', marginTop: 12, gap: 8 },
  resolvedBtn: {
    backgroundColor: baseGreen,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  resolvedText: { color: '#fff', fontWeight: '700' },
  secondaryBtn: {
    backgroundColor: '#e9f2ef',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginLeft: 8,
  },
  secondaryText: { color: baseGreen, fontWeight: '700' },

  /* Problem form */
  problemForm: {
    width: isWeb ? 1000 : '94%',
    marginTop: 18,
    borderRadius: 12,
    overflow: 'hidden',
    flexDirection: isWeb ? 'row' : 'column',
    backgroundColor: '#fff',
  },
  formLeft: {
    flex: 1,
    backgroundColor: baseGreen,
    padding: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formLeftTitle: { color: '#fff', fontSize: 20, fontWeight: '700' },
  formRight: { flex: 2, padding: 16, backgroundColor: '#fff' },
  label: { fontWeight: '700', color: baseGreen },

  priorityRow: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  priorityOptions: { flexDirection: 'row', alignItems: 'center' },
  priorityBtn: {
    marginLeft: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.06)',
    backgroundColor: '#fff',
  },

  footer: { marginTop: 12, color: baseGreen, fontWeight: '700' },
});
