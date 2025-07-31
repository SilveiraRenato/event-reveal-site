import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface Testimonial {
  id: number;
  name: string;
  action: string;
  icon: string;
  color: string;
}

const testimonials: Testimonial[] = [
  { id: 1, name: "Maria Santos", action: "acabou de assinar a IA", icon: "🤖", color: "bg-blue-500" },
  { id: 2, name: "João Silva", action: "comprou a mentoria", icon: "📚", color: "bg-green-500" },
  { id: 3, name: "Ana Costa", action: "entrou online no chat", icon: "💬", color: "bg-purple-500" },
  { id: 4, name: "Carlos Oliveira", action: "adquiriu o Surentrix", icon: "⚡", color: "bg-orange-500" },
  { id: 5, name: "Fernanda Lima", action: "marcou consultoria gratuita", icon: "📞", color: "bg-pink-500" },
  { id: 6, name: "Ricardo Souza", action: "baixou o software", icon: "📱", color: "bg-indigo-500" },
  { id: 7, name: "Lucia Mendes", action: "ativou a IA de arbitragem", icon: "🎯", color: "bg-red-500" },
  { id: 8, name: "Paulo Santos", action: "se inscreveu na mentoria", icon: "✅", color: "bg-teal-500" },
];

const TestimonialPopups = () => {
  const [visiblePopups, setVisiblePopups] = useState<Testimonial[]>([]);

  useEffect(() => {
    const showRandomPopup = () => {
      const randomTestimonial = testimonials[Math.floor(Math.random() * testimonials.length)];
      
      setVisiblePopups(prev => {
        const newPopups = [...prev, randomTestimonial].slice(-3); // Máximo 3 popups
        return newPopups;
      });

      setTimeout(() => {
        setVisiblePopups(prev => prev.filter(popup => popup.id !== randomTestimonial.id));
      }, 4000);
    };

    const interval = setInterval(showRandomPopup, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-4 left-4 z-50 space-y-2 w-80">
      {visiblePopups.map((popup, index) => (
        <Card 
          key={`${popup.id}-${Date.now()}`}
          className="animate-fade-in shadow-lg border-l-4 border-l-primary"
          style={{ 
            animationDelay: `${index * 0.2}s`,
            transform: `translateY(-${index * 10}px)`
          }}
        >
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 ${popup.color} rounded-full flex items-center justify-center text-white text-lg`}>
                {popup.icon}
              </div>
              <div className="flex-1">
                <p className="font-medium text-sm">{popup.name}</p>
                <p className="text-xs text-muted-foreground">{popup.action}</p>
              </div>
              <div className="text-xs text-muted-foreground">agora</div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TestimonialPopups;