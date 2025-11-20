import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedColor, setSelectedColor] = useState<'black' | 'white'>('black');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-white shadow-2xl overflow-hidden">
        <div className="relative bg-[#7A9FB5] p-12">
          <div className="absolute top-6 right-6">
            <Badge className="bg-emerald-500 text-white text-xs font-semibold px-3 py-1">
              ECO
            </Badge>
          </div>

          <h1 className="text-white text-3xl font-bold text-center mb-12 drop-shadow-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Подставка для телефонов<br />и планшетов
          </h1>

          <div className="relative flex justify-center mb-12">
            <img 
              src="https://cdn.poehali.dev/files/e7be5dab-424e-4819-959f-06218777d1a3.jpg" 
              alt="Подставка для телефона"
              className="w-80 h-80 object-contain drop-shadow-2xl relative z-10"
            />
            
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 20 }}>
              <line x1="15%" y1="80%" x2="5%" y2="92%" stroke="white" strokeWidth="2" markerEnd="url(#arrowhead)" />
              <text x="3%" y="95%" fill="white" fontSize="16" fontWeight="bold" fontFamily="Roboto, sans-serif">
                83мм
              </text>
              <text x="3%" y="98%" fill="white" fontSize="11" opacity="0.9" fontFamily="Roboto, sans-serif">
                Длина
              </text>
              
              <line x1="85%" y1="50%" x2="93%" y2="50%" stroke="white" strokeWidth="2" markerEnd="url(#arrowhead)" />
              <text x="95%" y="51%" fill="white" fontSize="16" fontWeight="bold" fontFamily="Roboto, sans-serif" textAnchor="start">
                67мм
              </text>
              <text x="95%" y="54%" fill="white" fontSize="11" opacity="0.9" fontFamily="Roboto, sans-serif" textAnchor="start">
                Ширина
              </text>
              
              <line x1="50%" y1="15%" x2="50%" y2="5%" stroke="white" strokeWidth="2" markerEnd="url(#arrowhead)" />
              <text x="50%" y="3%" fill="white" fontSize="16" fontWeight="bold" fontFamily="Roboto, sans-serif" textAnchor="middle">
                85мм
              </text>
              <text x="50%" y="5.5%" fill="white" fontSize="11" opacity="0.9" fontFamily="Roboto, sans-serif" textAnchor="middle">
                Высота
              </text>
              
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="white" />
                </marker>
              </defs>
            </svg>
          </div>
        </div>

        <div className="p-8 bg-white">
          <div className="flex items-start gap-3 mb-6 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
            <Icon name="Leaf" size={24} className="text-emerald-600 flex-shrink-0 mt-1" />
            <div>
              <p className="text-slate-800 font-medium" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Современная подставка сделанная из экологически чистых материалов
              </p>
            </div>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-slate-700 font-semibold mb-4 flex items-center gap-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <Icon name="Palette" size={20} />
              Доступные цвета
            </h3>
            <div className="flex gap-4">
              <button
                onClick={() => setSelectedColor('black')}
                className={`flex items-center gap-3 px-6 py-3 rounded-lg border-2 transition-all ${
                  selectedColor === 'black' 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-slate-900 border-2 border-white shadow-md"></div>
                <span className="font-medium text-slate-700" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  Чёрный
                </span>
                {selectedColor === 'black' && (
                  <Icon name="Check" size={20} className="text-blue-500" />
                )}
              </button>
              
              <button
                onClick={() => setSelectedColor('white')}
                className={`flex items-center gap-3 px-6 py-3 rounded-lg border-2 transition-all ${
                  selectedColor === 'white' 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-300 shadow-md"></div>
                <span className="font-medium text-slate-700" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  Белый
                </span>
                {selectedColor === 'white' && (
                  <Icon name="Check" size={20} className="text-blue-500" />
                )}
              </button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Index;