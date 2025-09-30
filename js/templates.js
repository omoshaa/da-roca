// Template Engine Simples para Da Roça
class TemplateEngine {
    static render(template, data = {}) {
        return template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
            return data[key] || match;
        });
    }
    
    static renderList(template, items = []) {
        return items.map(item => this.render(template, item)).join('');
    }
}

// Templates prontos
const TEMPLATES = {
    // Template de produto
    product: `
        <div class="product-card" data-category="{{category}}">
            <img src="{{image}}" alt="{{name}}" class="product-image">
            <div class="product-name">{{name}}</div>
            <div class="product-price">{{price}}</div>
            <button class="add-to-cart" data-id="{{id}}">Adicionar ao Carrinho</button>
        </div>
    `,
    
    // Template de item do carrinho
    cartItem: `
        <div class="cart-item" data-id="{{id}}">
            <img src="{{image}}" alt="{{name}}" class="cart-item-image">
            <div class="cart-item-info">
                <div class="cart-item-name">{{name}}</div>
                <div class="cart-item-price">{{price}}</div>
            </div>
            <div class="cart-item-quantity">
                <button class="qty-btn minus" data-id="{{id}}">-</button>
                <span class="quantity">{{quantity}}</span>
                <button class="qty-btn plus" data-id="{{id}}">+</button>
            </div>
            <button class="remove-item" data-id="{{id}}">×</button>
        </div>
    `,
    
    // Template de mensagem
    message: `
        <div class="message {{type}}" style="display: block;">
            {{text}}
        </div>
    `,
    
    // Template de loading
    loading: `
        <div class="loading-spinner">
            <i class="bx bx-loader bx-spin"></i>
            <span>{{text}}</span>
        </div>
    `
};

// Componentes reutilizáveis
const COMPONENTS = {
    // Criar modal genérico
    createModal: (id, title, content) => {
        return `
            <div id="${id}" class="modal">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2>${title}</h2>
                        <span class="close">&times;</span>
                    </div>
                    <div class="modal-body">
                        ${content}
                    </div>
                </div>
            </div>
        `;
    },
    
    // Criar botão
    createButton: (text, classes = 'btn-primary', icon = null) => {
        const iconHtml = icon ? `<i class="bx bx-${icon}"></i>` : '';
        return `<button class="${classes}">${iconHtml} ${text}</button>`;
    }
};

// Exportar
if (typeof window !== 'undefined') {
    window.TemplateEngine = TemplateEngine;
    window.TEMPLATES = TEMPLATES;
    window.COMPONENTS = COMPONENTS;
}

UTILS.log('Template Engine carregado!', 'success');
