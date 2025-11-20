import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-[#7A9FB5] shadow-2xl overflow-hidden">
        <div className="relative p-12">
          <div className="absolute top-6 right-6">
            <Badge className="bg-emerald-500 text-white text-xs font-semibold px-3 py-1">
              ECO
            </Badge>
          </div>

          <h1 className="text-white text-4xl font-bold text-center mb-16 drop-shadow-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Подставка для телефонов<br />и планшетов
          </h1>

          <div className="relative flex justify-center mb-16">
            <img 
              src="https://cdn.poehali.dev/files/e7be5dab-424e-4819-959f-06218777d1a3.jpg" 
              alt="Подставка для телефона"
              className="w-96 h-96 object-contain drop-shadow-2xl relative z-10"
            />
            
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 20 }}>
              <line x1="15%" y1="80%" x2="5%" y2="92%" stroke="white" strokeWidth="2" markerEnd="url(#arrowhead)" />
              <text x="3%" y="95%" fill="white" fontSize="18" fontWeight="bold" fontFamily="Roboto, sans-serif">
                83мм
              </text>
              <text x="3%" y="98%" fill="white" fontSize="12" opacity="0.9" fontFamily="Roboto, sans-serif">
                Длина
              </text>
              
              <line x1="85%" y1="50%" x2="93%" y2="50%" stroke="white" strokeWidth="2" markerEnd="url(#arrowhead)" />
              <text x="95%" y="51%" fill="white" fontSize="18" fontWeight="bold" fontFamily="Roboto, sans-serif" textAnchor="start">
                67мм
              </text>
              <text x="95%" y="54%" fill="white" fontSize="12" opacity="0.9" fontFamily="Roboto, sans-serif" textAnchor="start">
                Ширина
              </text>
              
              <line x1="50%" y1="15%" x2="50%" y2="5%" stroke="white" strokeWidth="2" markerEnd="url(#arrowhead)" />
              <text x="50%" y="3%" fill="white" fontSize="18" fontWeight="bold" fontFamily="Roboto, sans-serif" textAnchor="middle">
                85мм
              </text>
              <text x="50%" y="5.5%" fill="white" fontSize="12" opacity="0.9" fontFamily="Roboto, sans-serif" textAnchor="middle">
                Высота
              </text>
              
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="white" />
                </marker>
              </defs>
            </svg>
          </div>

          <div className="flex items-start gap-3 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 mb-8">
            <Icon name="Leaf" size={28} className="text-emerald-300 flex-shrink-0 mt-1" />
            <div>
              <p className="text-white text-lg font-medium" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Современная подставка сделанная из экологически чистых материалов
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-8">
            <div className="flex items-center gap-3">
              <Icon name="Palette" size={24} className="text-white" />
              <span className="text-white text-lg font-semibold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Доступна в двух цветах:
              </span>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <div className="w-8 h-8 rounded-full bg-slate-900 border-2 border-white shadow-md"></div>
                <span className="text-white font-medium" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  Чёрный
                </span>
              </div>
              
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <div className="w-8 h-8 rounded-full bg-white border-2 border-slate-300 shadow-md"></div>
                <span className="text-white font-medium" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  Белый
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;