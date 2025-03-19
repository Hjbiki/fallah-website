import Image from 'next/image';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  return (
    <div className="lbp-world h-full flex flex-col pt-12">
      {/* Games Section - Vertical Cards */}
      <section className="compact-section flex-1 relative overflow-hidden main-content-area">
        <div className="container mx-auto px-4 h-full flex flex-col">
          {/* Game Grid - Side by Side */}
          <div className="game-grid flex-2">
            <ProjectCard
              title="لعبة حروف"
              description="لعبة تفاعلية للحروف العربية والمواضيع"
              link="/hroof"
              imageUrl="/images/hroof-preview.png"
              tags={["ألعاب"]}
            />
            
            <ProjectCard
              title="موسوعة الأسئلة والأجوبة"
              description="منصة أسئلة تفاعلية متنوعة"
              link="/questions"
              imageUrl="/images/questions-preview.png"
              tags={["أسئلة"]}
              isBlueprint={true}
            />
          </div>
        </div>
      </section>

      {/* Footer - Enhanced */}
      <footer className="relative p-0 m-0 bg-cardboard-texture">
        <div className="cardboard-footer">
          <div className="cardboard py-6 px-4">
            <div className="container mx-auto relative z-10">
              <div className="flex justify-center items-center">
                {/* Developer Info */}
                <div className="text-center flex-initial">
                  <div className="flex flex-col items-center gap-4">
                    <a 
                      href="https://tip.dokan.sa/hibiki"
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="footer-dev-name text-2xl hover:text-blue-600 transition-colors"
                    >
                      عناد عسكر
                    </a>
                    
                    {/* Social Links */}
                    <div className="flex gap-3">
                      <a 
                        href="https://x.com/Hjbiki" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="footer-button"
                        aria-label="تويتر"
                      >
                        @Hjbiki
                      </a>
                      
                      <a 
                        href="https://tip.dokan.sa/hibiki" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="footer-button support"
                        aria-label="Dokan - دعم المطور"
                      >
                        دعم
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-sm mt-3 opacity-80 text-black font-bold">كل الحقوق محفوظة © 2025</p>
                </div>
              </div>
            </div>
            
            {/* Cardboard lighting effect */}
            <div className="cardboard-lighting"></div>
          </div>
        </div>
      </footer>
    </div>
  );
} 