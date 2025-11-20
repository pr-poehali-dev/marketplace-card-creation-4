import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#7A9FB5] flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="relative p-12">
          <div className="absolute top-6 right-6">
            <Badge className="bg-emerald-500 text-white text-xs font-semibold px-3 py-1">
              ECO
            </Badge>
          </div>

          <h1 className="text-white text-4xl font-bold text-center mb-16 drop-shadow-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Подставка для телефонов<br />и планшетов
          </h1>

          <div className="relative flex justify-center mb-16" style={{ minHeight: '500px' }}>
            <img 
              src="https://cdn.poehali.dev/files/e7be5dab-424e-4819-959f-06218777d1a3.jpg" 
              alt="Подставка для телефона"
              className="w-96 h-96 object-contain drop-shadow-2xl relative z-10"
            />
            
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 20 }}>
              <line x1="25%" y1="85%" x2="20%" y2="85%" stroke="white" strokeWidth="2" />
              <line x1="75%" y1="85%" x2="80%" y2="85%" stroke="white" strokeWidth="2" />
              <line x1="20%" y1="85%" x2="80%" y2="85%" stroke="white" strokeWidth="2.5" markerStart="url(#arrowhead-left)" markerEnd="url(#arrowhead-right)" />
              <text x="50%" y="90%" fill="white" fontSize="20" fontWeight="bold" fontFamily="Roboto, sans-serif" textAnchor="middle">
                83мм
              </text>
              <text x="50%" y="93%" fill="white" fontSize="13" opacity="0.9" fontFamily="Roboto, sans-serif" textAnchor="middle">
                длина
              </text>
              
              <line x1="85%" y1="30%" x2="85%" y2="25%" stroke="white" strokeWidth="2" />
              <line x1="85%" y1="70%" x2="85%" y2="75%" stroke="white" strokeWidth="2" />
              <line x1="85%" y1="25%" x2="85%" y2="75%" stroke="white" strokeWidth="2.5" markerStart="url(#arrowhead-up)" markerEnd="url(#arrowhead-down)" />
              <text x="89%" y="51%" fill="white" fontSize="20" fontWeight="bold" fontFamily="Roboto, sans-serif" textAnchor="start">
                67мм
              </text>
              <text x="89%" y="54%" fill="white" fontSize="13" opacity="0.9" fontFamily="Roboto, sans-serif" textAnchor="start">
                ширина
              </text>
              
              <line x1="15%" y1="40%" x2="15%" y2="35%" stroke="white" strokeWidth="2" />
              <line x1="15%" y1="65%" x2="15%" y2="70%" stroke="white" strokeWidth="2" />
              <line x1="15%" y1="35%" x2="15%" y2="70%" stroke="white" strokeWidth="2.5" markerStart="url(#arrowhead-up)" markerEnd="url(#arrowhead-down)" />
              <text x="11%" y="53%" fill="white" fontSize="20" fontWeight="bold" fontFamily="Roboto, sans-serif" textAnchor="end">
                85мм
              </text>
              <text x="11%" y="56%" fill="white" fontSize="13" opacity="0.9" fontFamily="Roboto, sans-serif" textAnchor="end">
                высота
              </text>
              
              <defs>
                <marker id="arrowhead-right" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="white" />
                </marker>
                <marker id="arrowhead-left" markerWidth="10" markerHeight="10" refX="1" refY="3" orient="auto">
                  <polygon points="10 0, 0 3, 10 6" fill="white" />
                </marker>
                <marker id="arrowhead-down" markerWidth="10" markerHeight="10" refX="3" refY="9" orient="auto">
                  <polygon points="0 0, 3 10, 6 0" fill="white" />
                </marker>
                <marker id="arrowhead-up" markerWidth="10" markerHeight="10" refX="3" refY="1" orient="auto">
                  <polygon points="0 10, 3 0, 6 10" fill="white" />
                </marker>
              </defs>
            </svg>
          </div>

          <div className="flex items-start gap-3 p-6 mb-8">
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
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-slate-900 border-2 border-white shadow-md"></div>
                <span className="text-white font-medium" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  Чёрный
                </span>
              </div>
              
              <div className="flex items-center gap-2">
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