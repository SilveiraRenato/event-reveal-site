// Chat fake com 50 conversas sobre mentoria, IA de arbitragem esportiva e Surentrix
class FakeLiveChat {
    constructor() {
        this.messages = [
            { user: "Maria Silva", message: "Pessoal, amei a mentoria! Agregou muito, já fiz R$ 5.000 só em casa...", time: "agora" },
            { user: "José Santos", message: "É bom mesmo? Tô pensando em entrar mas tô com dúvidas", time: "agora" },
            { user: "Maria Silva", message: "Olha, eu fiz uma consultoria antes, me explicaram tudo certinho grátis antes, aí sim eu entrei!", time: "1 min" },
            { user: "Gustavo Lima", message: "Nossa gente demais aqui kkkkk", time: "1 min" },
            { user: "Luana Costa", message: "Como faço para colocar a entrada no scanner???", time: "2 min" },
            { user: "Arnaldo Pereira", message: "É difícil galera?", time: "2 min" },
            { user: "Gustavo Lima", message: "Não é não mano, primeiro dia já tô lucrando", time: "3 min" },
            { user: "Marcos Antonio", message: "Quanto é bom pra investir?", time: "3 min" },
            { user: "Anderson Oliveira", message: "Eu comecei com 300 pra testar, já tô em 1500 com uma semana... Surpreso", time: "4 min" },
            { user: "Farley Rodrigues", message: "A IA realmente é boa viu, tô de cara aqui", time: "4 min" },
            { user: "Rangel Souza", message: "Gente, quem entrou hoje ??? Manda oi aqui", time: "5 min" },
            { user: "Fernanda Alves", message: "Oiiii 👋", time: "5 min" },
            { user: "Cleber Nascimento", message: "Opa! 🙋‍♂️", time: "6 min" },
            { user: "Claudia Ferreira", message: "Gostei demais do vídeo e da entrada grátis, já deu pra ter uma noção", time: "6 min" },
            { user: "Ana Paula", message: "Obrigada! Dona de casa e consegui minha renda, nunca vou esquecer disso. R$ 3.500 em um mês já", time: "7 min" },
            { user: "Marcelo Dias", message: "Dá pra fazer do celular?", time: "7 min" },
            { user: "Gustavo Lima", message: "Dá sim man, só opero por celular tb", time: "8 min" },
            { user: "Roberta Mendes", message: "O Surentrix é fácil de usar? Nunca usei software assim", time: "8 min" },
            { user: "Carlos Eduardo", message: "Super fácil! Interface muito intuitiva, aprendi em 1 dia", time: "9 min" },
            { user: "Patricia Gonçalves", message: "A consultoria gratuita vale a pena mesmo?", time: "9 min" },
            { user: "Roberto Silva", message: "Vale demais! Eles explicam tudo sem comprometer em nada", time: "10 min" },
            { user: "Juliana Barbosa", message: "Pessoal, a IA realmente funciona 24h?", time: "10 min" },
            { user: "Fernando Castro", message: "Sim! Ela trabalha enquanto você dorme, é impressionante", time: "11 min" },
            { user: "Camila Rocha", message: "Quanto tempo demora pra ver resultado?", time: "11 min" },
            { user: "Diego Martins", message: "Comigo foi 3 dias pra primeira entrada positiva", time: "12 min" },
            { user: "Leticia Nunes", message: "O suporte responde rápido?", time: "12 min" },
            { user: "Ricardo Torres", message: "Responderam em menos de 1h quando tive dúvida", time: "13 min" },
            { user: "Vanessa Campos", message: "Gente, consegui R$ 800 hoje só com a arbitragem! 🎉", time: "13 min" },
            { user: "Bruno Cardoso", message: "Parabéns! Eu tô em R$ 1.200 essa semana", time: "14 min" },
            { user: "Luciana Reis", message: "Como funciona o sistema de arbitragem esportiva?", time: "14 min" },
            { user: "Thiago Moreira", message: "A IA encontra diferenças de odds entre casas e você lucra na diferença", time: "15 min" },
            { user: "Amanda Santos", message: "É seguro? Não vou perder dinheiro?", time: "15 min" },
            { user: "Pedro Henrique", message: "Zero risco Amanda! Arbitragem é matemática pura", time: "16 min" },
            { user: "Gabriela Lima", message: "O Surentrix tem app mobile?", time: "16 min" },
            { user: "Lucas Barbosa", message: "Tem sim! Uso no iPhone e funciona perfeito", time: "17 min" },
            { user: "Renata Coelho", message: "Precisa de muito capital inicial?", time: "17 min" },
            { user: "Fabio Andrade", message: "Comecei com R$ 500, hoje tenho R$ 3.500", time: "18 min" },
            { user: "Isabela Costa", message: "A mentoria ensina do zero mesmo?", time: "18 min" },
            { user: "Sergio Oliveira", message: "Do zero total! Eu não sabia nem o que era odds", time: "19 min" },
            { user: "Monica Ferreira", message: "Quanto tempo dura a mentoria?", time: "19 min" },
            { user: "Henrique Silva", message: "São 6 semanas intensivas + suporte vitalício", time: "20 min" },
            { user: "Carla Souza", message: "Pessoal, vale muito a pena! Mudou minha vida financeira", time: "20 min" },
            { user: "Rafael Santos", message: "Também mudou a minha! Saí das dívidas em 2 meses", time: "21 min" },
            { user: "Adriana Lima", message: "Como agendar a consultoria gratuita?", time: "21 min" },
            { user: "Paulo Roberto", message: "Clica no botão ali, eles entram em contato rapidinho", time: "22 min" },
            { user: "Tatiana Neves", message: "A IA funciona em finais de semana também?", time: "22 min" },
            { user: "Guilherme Costa", message: "24/7 Tatiana! Inclusive nos feriados", time: "23 min" },
            { user: "Priscila Dias", message: "Gente, estou impressionada com os resultados! R$ 2.100 essa semana 😱", time: "23 min" },
            { user: "Rodrigo Alves", message: "Parabéns Pri! Eu tô chegando nos R$ 10k no mês", time: "24 min" },
            { user: "Silvia Martins", message: "10k?! Quanto você investiu inicial?", time: "24 min" },
            { user: "Rodrigo Alves", message: "Comecei com R$ 1.000, mas reinvesti os lucros", time: "25 min" }
        ];
        
        this.currentIndex = 0;
        this.chatContainer = null;
        this.isActive = false;
        this.messageInterval = null;
    }

    init() {
        this.createChatInterface();
        this.startChat();
    }

    createChatInterface() {
        const chatColumn = document.querySelector('.chat-column');
        if (!chatColumn) return;

        chatColumn.innerHTML = `
            <div class="live-chat">
                <div class="chat-header">
                    <div class="live-indicator">
                        <span class="live-dot"></span>
                        <span class="live-text">AO VIVO</span>
                    </div>
                    <div class="viewers-count">
                        <span class="viewers-icon">👁</span>
                        <span class="viewers-number" id="viewersCount">247</span>
                    </div>
                </div>
                <div class="chat-messages" id="chatMessages">
                    <!-- Mensagens aparecerão aqui -->
                </div>
                <div class="chat-input-area">
                    <input type="text" placeholder="Diga algo..." class="chat-input" disabled>
                    <button class="chat-send" disabled>💬</button>
                </div>
            </div>
        `;

        this.chatContainer = document.getElementById('chatMessages');
    }

    startChat() {
        this.isActive = true;
        this.showMessage();
        
        // Variar o número de visualizadores
        this.updateViewersCount();
        
        // Adicionar algumas mensagens iniciais
        this.addInitialMessages();
    }

    showMessage() {
        if (!this.isActive || this.currentIndex >= this.messages.length) {
            this.currentIndex = 0; // Recomeçar do início
        }

        const message = this.messages[this.currentIndex];
        this.addMessageToChat(message);
        this.currentIndex++;

        // Próxima mensagem em intervalo aleatório (2-8 segundos)
        const nextDelay = Math.random() * 6000 + 2000;
        this.messageInterval = setTimeout(() => this.showMessage(), nextDelay);
    }

    addMessageToChat(messageData) {
        if (!this.chatContainer) return;

        const messageElement = document.createElement('div');
        messageElement.className = 'chat-message';
        
        // Cores aleatórias para os nomes de usuário
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        messageElement.innerHTML = `
            <div class="message-content">
                <span class="username" style="color: ${randomColor}">${messageData.user}</span>
                <span class="message-text">${messageData.message}</span>
                <span class="message-time">${messageData.time}</span>
            </div>
        `;

        this.chatContainer.appendChild(messageElement);
        
        // Auto scroll para a última mensagem
        this.chatContainer.scrollTop = this.chatContainer.scrollHeight;
        
        // Remover mensagens antigas se houver muitas (manter últimas 20)
        const messages = this.chatContainer.children;
        if (messages.length > 20) {
            this.chatContainer.removeChild(messages[0]);
        }
    }

    addInitialMessages() {
        // Adicionar algumas mensagens já existentes para dar sensação de chat ativo
        const initialMessages = this.messages.slice(0, 5);
        initialMessages.forEach((msg, index) => {
            setTimeout(() => this.addMessageToChat(msg), index * 500);
        });
        this.currentIndex = 5;
    }

    updateViewersCount() {
        const viewersElement = document.getElementById('viewersCount');
        if (!viewersElement) return;

        setInterval(() => {
            // Variar entre 220-280 visualizadores
            const viewers = Math.floor(Math.random() * 60) + 220;
            viewersElement.textContent = viewers;
        }, 15000);
    }

    stop() {
        this.isActive = false;
        if (this.messageInterval) {
            clearTimeout(this.messageInterval);
        }
    }
}

// Inicializar o chat quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    const chat = new FakeLiveChat();
    chat.init();
    
    // Disponibilizar globalmente para debug
    window.liveChat = chat;
});