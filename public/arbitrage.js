// Arbitrage Entry Logic
class ArbitrageEntry {
    constructor() {
        this.entryData = null;
        this.setupEventListeners();
        this.setupTestimonialPopups();
    }

    setupEventListeners() {
        const analyzeBtn = document.getElementById('analyzeBtn');
        if (analyzeBtn) {
            analyzeBtn.addEventListener('click', () => this.analyzeEntry());
        }
    }

    analyzeEntry() {
        const entryText = document.getElementById('entryInput').value.trim();
        
        if (!entryText) {
            alert('Por favor, cole a entrada para análise');
            return;
        }

        // Parse the entry data (simplified for this demo)
        this.entryData = {
            match: "Barcelona - Real Madrid",
            league: "Europa - UEFA Conference League",
            date: "2024-07-23 13:30",
            house1: "Betano (BR)",
            house2: "Brazino (BR)",
            odd1: 2.6,
            odd2: 2.4,
            investment: 5000,
            profit: 1240,
            roi: 24.80
        };

        this.showHypotheses();
    }

    showHypotheses() {
        const hypothesesContainer = document.getElementById('hypotheses');
        hypothesesContainer.innerHTML = `
            <div class="hypotheses-grid">
                <div class="hypothesis" onclick="arbitrageEntry.selectHypothesis(1)">
                    <h4>Hipótese 1 - ${this.entryData.house1}</h4>
                    <div class="hypothesis-content">
                        <p><strong>Casa vencedora:</strong> ${this.entryData.house1}</p>
                        <p><strong>Time vencedor:</strong> Barcelona</p>
                        <p><strong>Lucro:</strong> R$ ${this.entryData.profit.toLocaleString('pt-BR')}</p>
                        <p><strong>Retorno:</strong> R$ ${(this.entryData.investment + this.entryData.profit).toLocaleString('pt-BR')}</p>
                        <p><strong>ROI:</strong> ${this.entryData.roi}%</p>
                    </div>
                </div>
                
                <div class="hypothesis" onclick="arbitrageEntry.selectHypothesis(2)">
                    <h4>Hipótese 2 - ${this.entryData.house2}</h4>
                    <div class="hypothesis-content">
                        <p><strong>Casa vencedora:</strong> ${this.entryData.house2}</p>
                        <p><strong>Time vencedor:</strong> Real Madrid</p>
                        <p><strong>Lucro:</strong> R$ ${this.entryData.profit.toLocaleString('pt-BR')}</p>
                        <p><strong>Retorno:</strong> R$ ${(this.entryData.investment + this.entryData.profit).toLocaleString('pt-BR')}</p>
                        <p><strong>ROI:</strong> ${this.entryData.roi}%</p>
                    </div>
                </div>
            </div>
        `;
        hypothesesContainer.style.display = 'block';
    }

    selectHypothesis(hypothesisNumber) {
        const winnerHouse = hypothesisNumber === 1 ? this.entryData.house1 : this.entryData.house2;
        const winnerTeam = hypothesisNumber === 1 ? 'Barcelona' : 'Real Madrid';
        
        this.showPrizePopup(winnerHouse, winnerTeam);
    }

    showPrizePopup(winnerHouse, winnerTeam) {
        const popup = document.createElement('div');
        popup.className = 'prize-popup';
        popup.innerHTML = `
            <div class="prize-popup-content">
                <div class="prize-popup-header">
                    <h3>🎉 Parabéns!</h3>
                    <button class="close-popup" onclick="this.parentElement.parentElement.parentElement.remove()">×</button>
                </div>
                <div class="prize-details">
                    <p><strong>Casa vencedora:</strong> ${winnerHouse}</p>
                    <p><strong>Time vencedor:</strong> ${winnerTeam}</p>
                    <div class="prize-amount">
                        <span class="prize-label">Seu prêmio:</span>
                        <span class="prize-value" id="prizeCounter">R$ 0</span>
                    </div>
                    <div class="profit-breakdown">
                        <p>Investimento: R$ ${this.entryData.investment.toLocaleString('pt-BR')}</p>
                        <p>Lucro: R$ ${this.entryData.profit.toLocaleString('pt-BR')}</p>
                        <p><strong>ROI: ${this.entryData.roi}%</strong></p>
                    </div>
                </div>
                <button class="whatsapp-btn" onclick="window.open('https://wa.me/5583999658835', '_blank')">
                    Falar com especialista
                </button>
            </div>
        `;
        
        document.body.appendChild(popup);
        this.animatePrizeCounter(this.entryData.investment + this.entryData.profit);
    }

    animatePrizeCounter(finalValue) {
        const counter = document.getElementById('prizeCounter');
        let current = 0;
        const increment = finalValue / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= finalValue) {
                current = finalValue;
                clearInterval(timer);
            }
            counter.textContent = `R$ ${Math.floor(current).toLocaleString('pt-BR')}`;
        }, 30);
    }

    setupTestimonialPopups() {
        const testimonials = [
            { name: "Maria Silva", message: "Consegui R$ 3.500 no primeiro mês!", type: "depoimento" },
            { name: "João Santos", message: "A IA funciona perfeitamente!", type: "depoimento" },
            { name: "Ana Costa", message: "Comprou a mentoria agora!", type: "compra" },
            { name: "Carlos Lima", message: "Assinou a IA de arbitragem!", type: "assinatura" },
            { name: "Fernanda Oliveira", message: "Entrou no chat ao vivo!", type: "entrada" },
            { name: "Roberto Alves", message: "ROI de 35% no último mês!", type: "depoimento" },
            { name: "Juliana Pereira", message: "Adquiriu o software Surentrix!", type: "compra" },
            { name: "Pedro Henrique", message: "Está online no chat!", type: "entrada" }
        ];

        setInterval(() => {
            this.showTestimonialPopup(testimonials[Math.floor(Math.random() * testimonials.length)]);
        }, 5000);
    }

    showTestimonialPopup(testimonial) {
        const popup = document.createElement('div');
        popup.className = 'testimonial-popup';
        
        const icons = {
            depoimento: '💬',
            compra: '🛒',
            assinatura: '✅',
            entrada: '🟢'
        };
        
        popup.innerHTML = `
            <div class="testimonial-content">
                <span class="testimonial-icon">${icons[testimonial.type]}</span>
                <div class="testimonial-text">
                    <strong>${testimonial.name}</strong>
                    <p>${testimonial.message}</p>
                </div>
            </div>
        `;
        
        document.body.appendChild(popup);
        
        // Remove popup after 4 seconds
        setTimeout(() => {
            if (popup.parentNode) {
                popup.remove();
            }
        }, 4000);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.arbitrageEntry = new ArbitrageEntry();
});