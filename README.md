# Da Roça - E-commerce de Produtos Orgânicos Modernizado

Um e-commerce moderno, responsivo e funcional para venda de produtos orgânicos frescos.

## 🌿 Sobre o Projeto

**Da Roça** é uma plataforma digital completa que conecta consumidores aos melhores produtos orgânicos, direto do campo para a mesa. Este projeto foi completamente modernizado com:
- Design responsivo e moderno
- UX/UI aprimorada
- Funcionalidades de e-commerce completas
- Arquitetura organizada e escalável

## 🚀 Funcionalidades Principais

### 🛒 E-commerce Completo
- **Catálogo de Produtos**: Interface moderna com cards responsivos
- **Sistema de Carrinho**: Adicionar, remover e gerenciar produtos
- **Finalização de Pedidos**: Checkout completo com validação
- **Histórico de Pedidos**: Visualização de compras anteriores

### 👤 Sistema de Usuários
- **Cadastro de Usuários**: Formulário com validação completa
- **Login/Logout**: Autenticação persistente
- **Perfil do Usuário**: Gerenciamento de dados pessoais
- **Estados de Sessão**: Guest vs. usuário logado

### 🎨 Interface Moderna
- **Design Responsivo**: Mobile-first, funciona em todos os dispositivos
- **Animações Suaves**: Transições e efeitos visuais
- **Feedback Visual**: Loading, success, error states
- **Acessibilidade**: Navegação por teclado e screen readers

## 📁 Estrutura Modernizada

```
Projeto-Da-Roça/
├── index.html                 # Landing page inicial
├── catalog.html              # Página principal do catálogo
├── assets/
│   ├── css/
│   │   ├── base.css         # Estilos base (variáveis, reset, grid)
│   │   └── catalog.css      # Estilos específicos do catálogo
│   └── images/              # Todas as imagens organizadas
│       ├── daRoca.png       # Logo principal
│       └── produtos/        # Imagens dos produtos
├── js/
│   ├── products.js          # Gerenciamento de produtos (POO)
│   ├── main-modern.js       # App principal e modais
│   ├── auth.js             # Sistema de autenticação
│   ├── cart.js             # Gerenciamento do carrinho
│   └── demo-data.js        # Dados de demonstração
├── pages/
│   ├── login.html          # Página de login
│   ├── register.html       # Página de cadastro
│   ├── contact.html        # Página de contato
│   └── about.html          # Página sobre nós
├── README.md               # Documentação principal
├── INSTRUÇÕES_DE_USO.md    # Guia de uso detalhado
└── DaRoça/                 # Arquivos originais (backup)
```

## 🛠️ Tecnologias e Padrões

### Frontend
- **HTML5**: Estrutura semântica moderna
- **CSS3**: Grid, Flexbox, Custom Properties, Animations
- **JavaScript ES6+**: Classes, Modules, Async/Await, LocalStorage
- **Design System**: Cores, tipografia e componentes padronizados

### Bibliotecas Externas
- **BoxIcons**: Ícones modernos e consistentes
- **Google Fonts**: Poppins (tipografia principal)

### Padrões de Desenvolvimento
- **Programação Orientada a Objetos**: Classes para Products, Cart, Auth
- **Modularização**: Separação clara de responsabilidades
- **Responsive Design**: Mobile-first approach
- **Progressive Enhancement**: Funciona sem JavaScript

## 🎨 Design System

### Paleta de Cores
```css
:root {
  --primary: #4CAF50;          /* Verde principal */
  --primary-dark: #388E3C;     /* Verde escuro */
  --light-green: #C8E6C9;      /* Verde claro */
  --dark: #2C2C2C;             /* Texto principal */
  --gray: #666666;             /* Texto secundário */
  --light-gray: #F5F5F5;       /* Backgrounds */
  --white: #FFFFFF;            /* Backgrounds */
  --success: #4CAF50;          /* Estados de sucesso */
  --warning: #FF9800;          /* Estados de alerta */
  --error: #F44336;            /* Estados de erro */
}
```

### Tipografia
- **Família**: Poppins (Google Fonts)
- **Pesos**: 400 (regular), 500 (medium), 600 (semibold)
- **Escala**: Responsiva com clamp()

### Componentes
- **Cards**: Produtos, categorias, informações
- **Botões**: Primários, secundários, ícones
- **Modais**: Carrinho, checkout, confirmações
- **Formulários**: Validação e feedback visual

## 📱 Responsividade

### Breakpoints
- **Mobile**: 0 - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

### Características Responsivas
- Grid adaptável (1-4 colunas conforme tela)
- Menu mobile com drawer
- Imagens responsivas com srcset
- Tipografia fluida
- Touch-friendly (botões 44px+)

## 🚀 Como Usar

### 1. Instalação
```bash
# Clone ou baixe o projeto
# Não requer instalação, funciona diretamente no navegador
```

### 2. Execução
- Abra `index.html` em qualquer navegador moderno
- Ou use um servidor local (Live Server, etc.)

### 3. Navegação
- **Início**: `index.html` - Landing page
- **Catálogo**: `catalog.html` - Loja principal
- **Login**: `pages/login.html`
- **Contato**: `pages/contact.html`

### 4. Teste de Funcionalidades
Para testar o sistema, use as credenciais:
- **Email**: `usuario@teste.com`
- **Senha**: `123456`

## 🧪 Dados de Demonstração

O projeto inclui dados de exemplo:
- 10+ produtos orgânicos
- Usuário de teste pré-cadastrado
- Pedidos de exemplo
- Diferentes categorias

## ✅ Melhorias Implementadas

### Organização e Estrutura
- ✅ Reorganização completa de arquivos
- ✅ Nomenclatura consistente e clara
- ✅ Separação de responsabilidades
- ✅ Estrutura escalável

### Design e UX
- ✅ Interface completamente modernizada
- ✅ Design system consistente
- ✅ Animações e micro-interações
- ✅ Estados de loading e feedback
- ✅ Acessibilidade melhorada

### Funcionalidades
- ✅ Sistema de autenticação completo
- ✅ Carrinho com persistência
- ✅ Checkout funcional
- ✅ Histórico de pedidos
- ✅ Validação de formulários
- ✅ Estados de sessão

### Performance
- ✅ Imagens otimizadas
- ✅ CSS e JS organizados
- ✅ Loading assíncrono
- ✅ LocalStorage eficiente

## 📋 Documentação Adicional

- **[INSTRUÇÕES_DE_USO.md](./INSTRUÇÕES_DE_USO.md)**: Guia completo de uso
- **Comentários no código**: Documentação inline
- **README técnico**: Arquitetura e padrões

## 🎯 Futuras Melhorias

### Curto Prazo
- [ ] Sistema de busca/filtros
- [ ] Favoritos/Wishlist
- [ ] Avaliações de produtos
- [ ] Cupons de desconto

### Médio Prazo
- [ ] Integração com API backend
- [ ] Sistema de pagamento real
- [ ] Notificações push
- [ ] PWA (Progressive Web App)

### Longo Prazo
- [ ] Área administrativa
- [ ] Multi-idiomas
- [ ] Sistema de afiliados
- [ ] Analytics avançado

## 👥 Equipe de Desenvolvimento

- **Daniel da Silva Bisco** — RA: 25560
- **Henrique Silva Pereira dos Santos** — RA: 25326
- **Moisés Filipe Telis de Lima** — RA: 25344

## 📞 Contato e Suporte

Para dúvidas sobre o projeto:
- **Email do projeto**: contato@daroca.com.br
- **Telefone**: (11) 9999-8888
- **Website**: [Da Roça - Produtos Orgânicos]

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais como parte da disciplina **Prática Profissional**.

---

**Da Roça** - Conectando você aos melhores produtos orgânicos 🌱

*Última atualização: Outubro 2025*
