// Configuração do contador decrescente
class CountdownTimer {
    constructor(targetDate) {
        this.targetDate = new Date(targetDate).getTime();
        this.elements = {
            days: document.getElementById('days'),
            hours: document.getElementById('hours'),
            minutes: document.getElementById('minutes'),
            seconds: document.getElementById('seconds')
        };
        
        this.init();
    }

    init() {
        // Atualiza o contador imediatamente
        this.updateCountdown();
        
        // Atualiza a cada segundo
        this.interval = setInterval(() => {
            this.updateCountdown();
        }, 1000);
    }

    updateCountdown() {
        const now = new Date().getTime();
        const distance = this.targetDate - now;

        if (distance < 0) {
            // Se a data passou, parar o contador
            clearInterval(this.interval);
            this.displayZeros();
            return;
        }

        // Calcular tempo restante
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Atualizar elementos
        this.elements.days.textContent = this.formatNumber(days);
        this.elements.hours.textContent = this.formatNumber(hours);
        this.elements.minutes.textContent = this.formatNumber(minutes);
        this.elements.seconds.textContent = this.formatNumber(seconds);
    }

    formatNumber(num) {
        return num.toString().padStart(2, '0');
    }

    displayZeros() {
        Object.values(this.elements).forEach(element => {
            element.textContent = '00';
        });
    }
}

// Utilitários para animações suaves
class AnimationUtils {
    static observeElements() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observar elementos que devem animar
        document.querySelectorAll('.video-container, .chat-placeholder, .react-placeholder').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    static addScrollEffect() {
        let ticking = false;

        function updateScrollEffect() {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.hero');
            
            if (parallax) {
                const speed = scrolled * 0.5;
                parallax.style.transform = `translateY(${speed}px)`;
            }
            
            ticking = false;
        }

        function requestTick() {
            if (!ticking) {
                requestAnimationFrame(updateScrollEffect);
                ticking = true;
            }
        }

        window.addEventListener('scroll', requestTick);
    }
}

// Manipulador de eventos do botão CTA
class CTAHandler {
    static init() {
        const ctaButton = document.querySelector('.cta-button');
        
        if (ctaButton) {
            ctaButton.addEventListener('click', this.handleCTAClick);
            
            // Adicionar efeito de ripple
            ctaButton.addEventListener('click', this.addRippleEffect);
        }
    }

    static handleCTAClick(event) {
        event.preventDefault();
        
        // Aqui você pode adicionar a lógica do botão
        console.log('CTA Button clicked!');
        
        // Exemplo de ação (scroll suave para próxima seção)
        const nextSection = document.querySelector('.react-section');
        if (nextSection) {
            nextSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    static addRippleEffect(event) {
        const button = event.currentTarget;
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            background-color: rgba(255, 255, 255, 0.6);
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
        `;
        
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
}

// Header scroll effect
class HeaderEffects {
    static init() {
        const header = document.querySelector('.header');
        let lastScrollTop = 0;

        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Adicionar/remover classe baseada no scroll
            if (scrollTop > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.98)';
                header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = 'none';
            }

            lastScrollTop = scrollTop;
        });
    }
}

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    // Definir data alvo para o countdown (30 dias a partir de hoje como exemplo)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);
    
    // Inicializar componentes
    new CountdownTimer(targetDate);
    CTAHandler.init();
    HeaderEffects.init();
    AnimationUtils.observeElements();
    AnimationUtils.addScrollEffect();
    
    // Adicionar CSS para animação de ripple
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        .cta-button {
            position: relative;
            overflow: hidden;
        }
    `;
    document.head.appendChild(style);
    
    console.log('Landing page inicializada com sucesso!');
});

// Tratamento de erros global
window.addEventListener('error', function(event) {
    console.error('Erro na landing page:', event.error);
});

// Utilitário para debug (remover em produção)
if (window.location.hostname === 'localhost') {
    window.landingPageDebug = {
        countdown: CountdownTimer,
        animations: AnimationUtils,
        cta: CTAHandler
    };
}