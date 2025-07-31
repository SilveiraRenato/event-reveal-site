import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface ParsedEntry {
  date: string;
  match: string;
  league: string;
  casa1: {
    name: string;
    team: string;
    odds: number;
    value: number;
    profit: number;
    percentage: number;
  };
  casa2: {
    name: string;
    team: string;
    odds: number;
    value: number;
    profit: number;
  };
  totalInvestment: number;
}

const ArbitrageEntry = () => {
  const [entryText, setEntryText] = useState('');
  const [parsedData, setParsedData] = useState<ParsedEntry | null>(null);
  const [selectedHypothesis, setSelectedHypothesis] = useState<1 | 2 | null>(null);
  const [showPrizeDialog, setShowPrizeDialog] = useState(false);
  const [prizeCounter, setPrizeCounter] = useState(0);

  const parseEntry = () => {
    // Simulação baseada no exemplo fornecido
    const mockData: ParsedEntry = {
      date: '2024-07-23 13:30',
      match: 'Barcelona - Real Madrid',
      league: 'Europa - UEFA Conference League',
      casa1: {
        name: 'Betano (BR)',
        team: 'Barcelona classificar',
        odds: 2.6,
        value: 2400,
        profit: 1240,
        percentage: 24.80
      },
      casa2: {
        name: 'Brazino (BR)',
        team: 'Real Madrid classificar',
        odds: 2.4,
        value: 2600,
        profit: 1240
      },
      totalInvestment: 5000
    };
    
    setParsedData(mockData);
  };

  const selectHypothesis = (hypothesis: 1 | 2) => {
    setSelectedHypothesis(hypothesis);
    setShowPrizeDialog(true);
    
    // Animação do contador
    let current = 0;
    const target = 6240;
    const increment = target / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setPrizeCounter(Math.floor(current));
    }, 50);
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5583999658835', '_blank');
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold text-primary">
            🎯 Amostra Grátis - Arbitragem Esportiva
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">
              Cole a entrada da operação:
            </label>
            <Textarea
              value={entryText}
              onChange={(e) => setEntryText(e.target.value)}
              placeholder="Cole aqui a entrada da calculadora do surebet..."
              className="min-h-[100px]"
            />
          </div>
          
          <Button 
            onClick={parseEntry}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            size="lg"
          >
            🔍 Clique em Analisar
          </Button>
        </CardContent>
      </Card>

      {parsedData && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Hipótese 1 */}
          <Card className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-blue-500">
            <CardHeader>
              <CardTitle className="text-lg text-center text-blue-600">
                Hipótese 1 - {parsedData.casa1.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-center">
                <p><strong>Casa:</strong> {parsedData.casa1.name}</p>
                <p><strong>Time Vencedor:</strong> {parsedData.casa1.team}</p>
                <p><strong>Lucro:</strong> R$ {parsedData.casa1.profit.toLocaleString()}</p>
                <p><strong>Retorno:</strong> R$ 6.240</p>
                <p><strong>ROI:</strong> {parsedData.casa1.percentage}%</p>
              </div>
              <Button 
                onClick={() => selectHypothesis(1)}
                className="w-full mt-4 bg-green-600 hover:bg-green-700"
              >
                Escolher esta Hipótese
              </Button>
            </CardContent>
          </Card>

          {/* Hipótese 2 */}
          <Card className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-purple-500">
            <CardHeader>
              <CardTitle className="text-lg text-center text-purple-600">
                Hipótese 2 - {parsedData.casa2.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-center">
                <p><strong>Casa:</strong> {parsedData.casa2.name}</p>
                <p><strong>Time Vencedor:</strong> {parsedData.casa2.team}</p>
                <p><strong>Lucro:</strong> R$ {parsedData.casa2.profit.toLocaleString()}</p>
                <p><strong>Retorno:</strong> R$ 6.240</p>
                <p><strong>ROI:</strong> 24,80%</p>
              </div>
              <Button 
                onClick={() => selectHypothesis(2)}
                className="w-full mt-4 bg-green-600 hover:bg-green-700"
              >
                Escolher esta Hipótese
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Dialog do Prêmio */}
      <Dialog open={showPrizeDialog} onOpenChange={setShowPrizeDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl text-green-600">
              🏆 Parabéns!
            </DialogTitle>
          </DialogHeader>
          <div className="text-center space-y-4">
            <div className="text-4xl font-bold text-green-600">
              R$ {prizeCounter.toLocaleString()}
            </div>
            <p className="text-lg">Seu retorno total!</p>
            <p className="text-sm text-muted-foreground">
              Investimento: R$ 5.000 + Lucro: R$ 1.240
            </p>
            <p className="text-sm font-medium">ROI: 24,80%</p>
            
            <Button 
              onClick={openWhatsApp}
              className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
              size="lg"
            >
              💬 Falar com Especialista
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ArbitrageEntry;