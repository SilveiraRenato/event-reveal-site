import ArbitrageEntry from '@/components/ArbitrageEntry';
import TestimonialPopups from '@/components/TestimonialPopups';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header com countdown - copiado do HTML existente */}
      <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b z-50 p-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <p className="text-lg font-medium text-muted-foreground">
              APROVEITE A OPORTUNIDADE - Termina em:
            </p>
            <div className="flex gap-4">
              <div className="text-center p-2 bg-primary/10 rounded-lg min-w-[60px]">
                <span className="block text-xl font-bold text-primary">00</span>
                <span className="text-xs text-muted-foreground">Dias</span>
              </div>
              <div className="text-center p-2 bg-primary/10 rounded-lg min-w-[60px]">
                <span className="block text-xl font-bold text-primary">00</span>
                <span className="text-xs text-muted-foreground">Horas</span>
              </div>
              <div className="text-center p-2 bg-primary/10 rounded-lg min-w-[60px]">
                <span className="block text-xl font-bold text-primary">00</span>
                <span className="text-xs text-muted-foreground">Min</span>
              </div>
              <div className="text-center p-2 bg-primary/10 rounded-lg min-w-[60px]">
                <span className="block text-xl font-bold text-primary">00</span>
                <span className="text-xs text-muted-foreground">Seg</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 text-center bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-foreground">
            Ative a IA de arbitragem para te GERAR R$ 15.000 em 30 dias com 0 RISCO e SEM APARECER
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mesmo começando do zero
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-8 items-start">
            {/* Video Column */}
            <div className="space-y-6">
              {/* Video Container */}
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <div style={{position:'relative', paddingTop:'56.25%'}}>
                  <iframe 
                    src="https://iframe.mediadelivery.net/embed/471287/ef51040e-8048-40d4-a5bb-67093cca1ad9?autoplay=true&loop=false&muted=false&preload=true&responsive=true"
                    loading="lazy" 
                    style={{border:0, position:'absolute', top:0, height:'100%', width:'100%'}} 
                    allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" 
                    allowFullScreen
                  />
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="text-center">
                <button 
                  onClick={() => window.open('https://wa.me/5583999658835', '_blank')}
                  className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg text-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  💬 Falar com o especialista
                </button>
              </div>
            </div>

            {/* Chat Column (30%) */}
            <div className="lg:sticky lg:top-32">
              <div className="bg-card border rounded-xl p-4 h-[500px] overflow-y-auto">
                <h3 className="font-bold text-lg mb-4 text-center">💬 Chat ao Vivo</h3>
                <div className="space-y-3 text-sm">
                  <div className="bg-muted p-2 rounded">
                    <strong>Maria:</strong> pessoal, amei a mentoria agregou muito já fiz 5000 só em casa...
                  </div>
                  <div className="bg-muted p-2 rounded">
                    <strong>José:</strong> É bom mesmo? Tô pensando em entrar mas tô com dúvidas
                  </div>
                  <div className="bg-muted p-2 rounded">
                    <strong>Maria:</strong> Olha, eu fiz uma consultoria antes, me explicaram tudo certinho grátis antes aí sim eu entrei!
                  </div>
                  <div className="bg-muted p-2 rounded">
                    <strong>Gustavo:</strong> Nossa gente demais aqui kkkkk
                  </div>
                  <div className="bg-muted p-2 rounded">
                    <strong>Luana:</strong> Como faço para colocar a entrada no scanner???
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Entrada de Arbitragem */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <ArbitrageEntry />
        </div>
      </section>

      {/* Popups de Depoimentos */}
      <TestimonialPopups />
    </div>
  );
};

export default Index;
