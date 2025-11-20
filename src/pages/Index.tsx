import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedColor, setSelectedColor] = useState<'black' | 'white'>('black');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-white shadow-2xl overflow-hidden">
        <div className="relative bg-gradient-to-br from-sky-400 via-blue-500 to-purple-600 p-12">
          <div className="absolute top-6 right-6">
            <Badge className="bg-emerald-500 text-white text-xs font-semibold px-3 py-1">
              ECO
            </Badge>
          </div>

          <h1 className="text-white text-3xl font-bold text-center mb-8 drop-shadow-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Подставка для телефонов<br />и планшетов
          </h1>

          <div className="flex justify-center mb-8">
            <img 
              src="https://cdn.poehali.dev/files/e7be5dab-424e-4819-959f-06218777d1a3.jpg" 
              alt="Подставка для телефона"
              className="w-80 h-80 object-contain drop-shadow-2xl"
            />
          </div>

          <div className="grid grid-cols-3 gap-4 text-white">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <Icon name="MoveHorizontal" size={24} className="mx-auto mb-2" />
              <div className="text-2xl font-bold" style={{ fontFamily: 'Roboto, sans-serif' }}>83мм</div>
              <div className="text-xs opacity-90">Длина</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <Icon name="MoveVertical" size={24} className="mx-auto mb-2" />
              <div className="text-2xl font-bold" style={{ fontFamily: 'Roboto, sans-serif' }}>67мм</div>
              <div className="text-xs opacity-90">Ширина</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <Icon name="ArrowUpDown" size={24} className="mx-auto mb-2" />
              <div className="text-2xl font-bold" style={{ fontFamily: 'Roboto, sans-serif' }}>85мм</div>
              <div className="text-xs opacity-90">Высота</div>
            </div>
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
