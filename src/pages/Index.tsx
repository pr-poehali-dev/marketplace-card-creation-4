const Index = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-5xl relative">
        <img 
          src="https://cdn.poehali.dev/files/5a1993d0-1a22-459b-be6e-694f5d4d2bb2.png" 
          alt="Подставка для телефона"
          className="w-full h-auto"
        />
        
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute" style={{ left: '19%', bottom: '13%', backgroundColor: 'white', padding: '2px 4px' }}>
            <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.5vw', fontWeight: 'bold' }}>83мм</span>
          </div>
          
          <div className="absolute" style={{ right: '11%', bottom: '13%', backgroundColor: 'white', padding: '2px 4px' }}>
            <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.5vw', fontWeight: 'bold' }}>67мм</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;