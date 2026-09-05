// supabaseClient.js
// ─────────────────────────────────────────────────────────────
// Preencha com os dados do seu projeto no Supabase:
//   supabase.com → Settings → API
// ─────────────────────────────────────────────────────────────

const _SUPABASE_URL = 'https://twyxjwsbhtveuzxykuxv.supabase.co';
const _SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR3eXhqd3NiaHR2ZXV6eHlrdXh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg2MTgwODYsImV4cCI6MjEwNDE5NDA4Nn0.s7-AHnEU3Xt49ijtTw9kdPxd_s3klWvRsw2ijuC7Aww';

if (typeof window.supabase === 'undefined' || !window.supabase.createClient) {
    console.error('ERRO CRÍTICO: Biblioteca Supabase não carregou. Verifique sua conexão.');
    // Não usa alert() — apenas loga. O checkUser() vai redirecionar para login se supa for null.
} else {
    window.supa = window.supabase.createClient(_SUPABASE_URL, _SUPABASE_KEY);
    console.log('Banco iniciado.');
}

async function checkUser() {
    try {
        if (!window.supa) {
            console.error('checkUser: cliente Supabase não inicializado.');
            window.location.href = 'login.html';
            return null;
        }
        const { data: { session } } = await window.supa.auth.getSession();
        if (!session) {
            window.location.href = 'login.html';
            return null;
        }
        return session;
    } catch(e) {
        console.error('checkUser error:', e);
        window.location.href = 'login.html';
        return null;
    }
}