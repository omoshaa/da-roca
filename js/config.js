// Configuração central do projeto Da Roça
const CONFIG = {
    // URLs e caminhos
    paths: {
        assets: './assets/',
        images: './assets/images/',
        pages: './pages/',
        js: './js/'
    },
    
    // Cores do design system
    colors: {
        primary: '#4CAF50',
        primaryDark: '#388E3C',
        lightGreen: '#e8f5e8',
        white: '#ffffff',
        gray: '#666666',
        lightGray: '#f5f5f5',
        success: '#28a745',
        error: '#dc3545',
        warning: '#ffc107'
    },
    
    // Configurações do app
    app: {
        name: 'Da Roça',
        version: '1.0.0',
        description: 'Produtos Orgânicos Frescos'
    },
    
    // Dados de demonstração
    demo: {
        user: {
            email: 'usuario@teste.com',
            password: '123456',
            name: 'João Silva'
        }
    },
    
    // Configurações de desenvolvimento
    dev: {
        enableConsoleLog: true,
        enableDebugMode: false
    }
};

// Utilitários globais
const UTILS = {
    // Formatação de preço
    formatPrice: (price) => `R$ ${price.toFixed(2).replace('.', ',')}`,
    
    // Validação de email
    isValidEmail: (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
    
    // Logging condicional
    log: (message, type = 'info') => {
        if (CONFIG.dev.enableConsoleLog) {
            console[type](`[Da Roça] ${message}`);
        }
    },
    
    // Mostrar mensagem para usuário
    showMessage: (element, message, type = 'info') => {
        if (!element) return;
        element.className = `message ${type}`;
        element.textContent = message;
        element.style.display = 'block';
    },
    
    // Loading state para botões
    setButtonLoading: (button, loading = true, originalText = null) => {
        if (loading) {
            button.dataset.originalText = button.innerHTML;
            button.innerHTML = '<i class="bx bx-loader bx-spin"></i> Carregando...';
            button.disabled = true;
        } else {
            button.innerHTML = originalText || button.dataset.originalText || 'Enviar';
            button.disabled = false;
        }
    }
};

// Exportar para uso global
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
    window.UTILS = UTILS;
}

UTILS.log('Configuração carregada com sucesso!', 'success');
