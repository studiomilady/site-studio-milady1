import image_65f23853394151342e067dca37d3becfbf26bca3 from 'figma:asset/65f23853394151342e067dca37d3becfbf26bca3.png'
import image_d73147ad67fe138cead250dc0e2c2ec8460383d5 from 'figma:asset/d73147ad67fe138cead250dc0e2c2ec8460383d5.png'
import image_06deaf737f3a4224c11c078753d3068fcdeb7b0e from 'figma:asset/06deaf737f3a4224c11c078753d3068fcdeb7b0e.png'
import image_f2b8462bbaf87aa38066e2f3f23f431f9c3ff866 from 'figma:asset/f2b8462bbaf87aa38066e2f3f23f431f9c3ff866.png'
import image_4ca01eec179cd6ebc7bf6736d15ebf16401029f7 from 'figma:asset/4ca01eec179cd6ebc7bf6736d15ebf16401029f7.png'
import image_3fc386ab8ef355d77a5943d2a7c1defb3ee0310e from 'figma:asset/3fc386ab8ef355d77a5943d2a7c1defb3ee0310e.png'
import image_2d6d1e42310b5c103aa1c685edbd2b01db2e667f from 'figma:asset/2d6d1e42310b5c103aa1c685edbd2b01db2e667f.png'
import image_b2f0bc03e6be590ab2838737791aa92c02be566c from 'figma:asset/b2f0bc03e6be590ab2838737791aa92c02be566c.png'
import { useState } from 'react';
import { Menu, X, Check, Rocket, Code, Zap, TrendingUp, ArrowRight, Palette, Smartphone, Server, Lock, Mail, BarChart, MessageCircle, Wrench } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-secondary backdrop-blur-sm z-50 border-b border-gray-100 bg-[#607047f2]">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              
              <span className="font-bold text-xl">STUDIO MILADY</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('intro')} className="text-foreground/70-600 hover:text-foreground/70-900 transition">
                Sobre
              </button>
              <button onClick={() => scrollToSection('servicos')} className="text-foreground/70-600 hover:text-foreground/70-900 transition">
                Serviços
              </button>
              <button onClick={() => scrollToSection('cases')} className="text-foreground/70-600 hover:text-foreground/70-900 transition">
                Cases
              </button>
              <button
                onClick={() => scrollToSection('comprar')}
                className="bg-[#EDE3D1] text-[#607047] px-6 py-2 rounded-full hover:opacity-90 transition"
              >
                Começar Agora
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col gap-4">
                <button onClick={() => scrollToSection('intro')} className="text-left text-foreground/70-600 hover:text-foreground/70-900">
                  Sobre
                </button>
                <button onClick={() => scrollToSection('servicos')} className="text-left text-foreground/70-600 hover:text-foreground/70-900">
                  Serviços
                </button>
                <button onClick={() => scrollToSection('cases')} className="text-left text-foreground/70-600 hover:text-foreground/70-900">
                  Cases
                </button>
                <button
                  onClick={() => scrollToSection('comprar')}
                  className="bg-primary text-white px-6 py-2 rounded-full hover:bg-blue-700 transition text-center"
                >
                  Começar Agora
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section - Capa */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-[#ede3d1]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-[#8F966B] rounded-full text-xl mb-6 text-[#ede3d1] font-medium">
                ✨ Transforme seu negócio online
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight font-[Montserrat_Alternates] text-[#607047]">Sites profissionais para <span className="text-[#2B3220]-600">pequenos e médios negócios</span></h1>
              <p className="text-xl text-foreground/70-600 mb-8 font-medium">Criamos sites modernos, rápidos e otimizados que convertem visitantes em clientes. Presença digital profissional sem complicação.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                
                <button className="bg-[#607047] text-background px-6 py-3 rounded-full font-bold hover:opacity-90 transition text-[#ede1d3]">
  Criar Meu Site →
</button>
                <button
                  onClick={() => scrollToSection('cases')}
                  className="border-2 border-[#8F966B] text-foreground/70-700 px-8 py-4 rounded-full hover:border-gray-400 transition text-lg text-[#607047] font-bold"
                >Ver Projetos</button>
              </div>
              <div className="mt-12 flex items-center gap-8">
                <div>
                  
                  
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground/70-900 text-[#ede3d1]">20 dias</div>
                  
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground/70-900 text-[#ede3d1]">24h</div>
                  
                </div>
              </div>
            </div>
            <div className="relative scale-70">
              <div className="absolute inset-0 bg-[#607047] rounded-3xl transform rotate-3"></div>
              <ImageWithFallback
                src={image_d73147ad67fe138cead250dc0e2c2ec8460383d5}
                alt="Website em laptop"
                className="relative rounded-3xl shadow-2xl w-full aspect-[3/4] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Introdução */}
      <section id="intro" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#8f966b]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6 text-[#ede1d3]">POR QUE ESCOLHER O STUDIO MILADY?</h2>
            <p className="text-xl text-foreground/70-600 text-[#ffffff]">Somos especializados em criar sites que realmente funcionam para pequenos e médios negócios. Combinamos design moderno, tecnologia de ponta e estratégia digital para fazer seu negócio crescer online.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 bg-[#ede1d300]">
            <div className="bg-[#ede3d1] p-8 rounded-2xl border-2 border-gray-100 hover:border-blue-200 transition bg-[#f3f0e7]">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-[#8f996b]">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">RÁPIDO E EFICIENTE</h3>
              <p className="text-foreground/70-600 font-bold text-[20px] mx-[0px] my-[12px]">Seu site pronto em até 20 dias. Sites otimizados com carregamento ultrarrápido que melhoram sua posição no Google.</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/70-600 font-medium text-[20px]">Entrega em 20 dias</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/70-600 font-medium text-[20px]">Performance otimizada</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/70-600 font-medium text-[20px]">SEO otimizado</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#ede3d1] p-8 rounded-2xl border-2 border-gray-100 hover:border-blue-200 transition bg-[#f3f0e7]">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-[#8f996b]">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">DESIGN PROFISSIONAL</h3>
              <p className="text-foreground/70-600 font-bold text-[20px] mx-[0px] my-[12px]">
                Designs exclusivos que refletem a identidade do seu negócio e conquistam a 
                confiança dos seus clientes.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/70-600 font-medium text-[20px]">Design personalizado</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/70-600 font-medium text-[20px]">100% responsivo</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/70-600 font-medium text-[20px]">Moderno e atrativo</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#ede3d1] p-8 rounded-2xl border-2 border-gray-100 hover:border-blue-200 transition bg-[#f3f0e7]">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-[#8f996b]">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">RESULTADOS REAIS</h3>
              <p className="text-foreground/70-600 font-bold text-[20px] mx-[0px] my-[12px]">
                Sites focados em conversão. Cada elemento é pensado para transformar 
                visitantes em clientes do seu negócio.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/70-600 font-medium text-[20px]">Foco em conversão</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/70-600 font-medium text-[20px]">Integração com WhatsApp</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/70-600 font-medium text-[20px]">Google Analytics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nosso Serviço */}
      <section id="servicos" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#ede1d3]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">O QUE ESTÁ INCLUSO</h2>
            <p className="text-xl text-foreground/70-600 max-w-3xl mx-auto font-bold">
              Tudo o que você precisa para ter uma presença online profissional e começar a vender mais.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl shadow-sm bg-[#f3f0e7]">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-3 bg-[#8f996b]">
                <Palette className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold mb-2 text-[24px]">DESIGN PERSONALIZADO</h3>
              <p className="text-foreground/70-600 text-[20px]">Layout exclusivo criado especialmente para seu negócio</p>
            </div>

            <div className="p-6 rounded-xl shadow-sm bg-[#f3f0e7]">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-3 bg-[#8f996b]">
                <Smartphone className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold mb-2 text-[24px]">TOTALMENTE RESPONSIVO</h3>
              <p className="text-foreground/70-600 text-[20px]">Funciona perfeitamente em celular, tablet e desktop</p>
            </div>

            <div className="p-6 rounded-xl shadow-sm bg-[#f3f0e7]">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-3 bg-[#8f996b]">
                <Server className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold mb-2 text-[24px]">HOSPEDAGEM GRATUITA*</h3>
              <p className="text-foreground/70-600 text-[20px]">1 ano de hospedagem grátis inclusa no pacote</p>
            </div>

            

            <div className="p-6 rounded-xl shadow-sm bg-[#f3f0e7]">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-3 bg-[#8f996b]">
                <Mail className="w-7 h-7 text-white" />
              </div>
             
              <h3 className="font-bold mb-2 text-[24px]">GOOGLE ANALYTCS</h3>
              <p className="text-foreground/70-600 text-[20px]">Acompanhe visitantes e resultados do seu site</p>
            </div>

            <div className="p-6 rounded-xl shadow-sm bg-[#f3f0e7]">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-3 bg-[#8f996b]">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold mb-2 text-[24px]">BOTÃO WHATSAPP</h3>
              <p className="text-foreground/70-600 text-[20px]">Facilite o contato direto com seus clientes</p>
            </div>

            <div className="p-6 rounded-xl shadow-sm bg-[#f3f0e7]">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-3 bg-[#8f996b]">
                <Wrench className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold mb-2 text-[24px]">SUPORTE 24/7</h3>
              <p className="text-foreground/70-600 text-[20px]">Estamos sempre disponíveis para ajudar você</p>
            </div>
          </div>

          <div className="mt-16 bg-[#8F966B] rounded-3xl p-8 md:p-12 tex[#EDE1D3]te">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4 text-[#ede1d3]">PROCESSO SIMPLES EM 4 PASSOS</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-[24px] text-[#2b3220]">CONSULTORIA INICIAL</h4>
                      <p className="text-[#ede1d3] text-[24px]">Entendemos seu negócio e suas necessidades</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-[24px] text-[#2b3220]">DESIGN E APROVAÇÃO</h4>
                      <p className="text-[#ede1d3] text-[24px]">Criamos o layout e você aprova</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-[24px] text-[#2b3220]">DESENVOLVIMENTO</h4>
                      <p className="text-[#ede1d3] text-[24px]">Programamos e otimizamos seu site</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-[24px] text-[#2b3220]">LANÇAMENTO</h4>
                      <p className="text-[#ede1d3] text-[24px]">Seu site no ar e pronto para receber clientes</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 bg-[#607047]">
                  <div className="text-center">
                    <div className="text-5xl font-bold mb-2 text-[#ede1d3]">20 dias</div>
                    <div className="text-xmb-6 text-[#f3f0e7]">Do briefing ao ar</div>
                    <div className="inline-block px-6 py-3 bg-whitrounded-full font-bold text-[#607047]ld">
                      Entrega Garantida
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cases de Sucesso */}
      <section id="cases" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto b-[#D3C6A3]">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-[#607047]">CASES DE SUCESSO</h2>
            <p className="text-xl text-foreground/70-600 max-w-3xl mx-auto">
              Veja como ajudamos pequenos negócios a crescerem online com sites profissionais.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Case 1 */}
            <div className="bg-[#ede3D1] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition group">
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={image_b2f0bc03e6be590ab2838737791aa92c02be566c}
                  alt="Urban Barber."
                  className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-sm font-semibold mb-2 text-[#607047]">Barbearia</div>
                <h3 className="font-bold mb-2 text-[24px]">URBAN BARBER</h3>
                <p className="text-foreground/70-600 mb-4 font-medium text-[20px]">Site moderno com integração de agendamento.</p>
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between text-sm">
                   <a 
  href="https://urban-barber-barbearia.figma.site/" 
  target="_blank" 
  rel="noopener noreferrer"
  className="text-foreground/70-500 text-center hover:underline text-[20px] font-bold"
>
  Veja o site
</a>
                    
                  </div>
                </div>
              </div>
            </div>

            {/* Case 2 */}
            <div className="bg-[#ede3D1] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition group">
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={image_2d6d1e42310b5c103aa1c685edbd2b01db2e667f}
                  alt="Salão Belle Femme"
                  className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-sm font-semibold mb-2 text-[#607047]">Salão de Beleza</div>
                <h3 className="font-bold mb-2 text-[24px]">BELLE FEMME</h3>
                <p className="text-foreground/70-600 mb-4 font-medium text-[20px]">Site personalizado com agendamento via Whatsapp.</p>
                <div className="border-t pt-4">
                  <a 
                    href="https://salao-belle-femme.figma.site/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-sm hover:text-[#607047] transition-colors cursor-pointer group"
                  >
                    <span className="text-foreground/70-500 group-hover:text-[#607047] font-bold text-left text-[20px]">Veja o site</span>
                    
                  </a>
                </div>
              </div>
            </div>

            {/* Case 3 */}
            <div className="bg-[#ede3D1] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition group">
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={image_3fc386ab8ef355d77a5943d2a7c1defb3ee0310e}
                  alt="Saão Doces Sonhos"
                  className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-sm font-semibold mb-2 text-[#607047]">Salão Infantil</div>
                <h3 className="font-bold mb-2 text-[24px]">DOCES SONHOS</h3>
                <p className="text-foreground/70-600 mb-4 font-medium text-[20px]">Site institucional com agendamento via Whatsapp.</p>
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between text-sm">
                  <a 
                    href="https://cello-erase-34615921.figma.site" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-sm hover:text-[#607047] transition-colors cursor-pointer group"
                  >
                    <span className="text-foreground/70-500 group-hover:text-[#607047] font-bold text-[20px]">Veja o site</span>
                    
                  </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Case 4 */}
            <div className="bg-[#ede3D1] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition group">
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={image_65f23853394151342e067dca37d3becfbf26bca3}
                  alt="Boutique Estilo"
                  className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-sm font-semibold mb-2 text-[#607047]">Moda</div>
                <h3 className="font-bold mb-2 text-[24px]">LA SENSUALITÁ</h3>
                <p className="text-foreground/70-600 mb-4 font-medium text-[20px]">Site essencial com catálogo e vendas online.</p>
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between text-sm">
                                      <a 
                    href="https://decoy-pack-19257958.figma.site" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-sm hover:text-[#607047] transition-colors cursor-pointer group"
                  >
                    <span className="text-foreground/70-500 group-hover:text-[#607047] text-[20px] font-bold">Veja o site</span>
                    
                  </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Depoimentos */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-[#f3f0e7]">
              <div className="text-yellow-400 text-2xl mb-3">★★★★★</div>
              <p className="text-foreground/70-700 mb-4 text-[20px]">"O site ficou incrível! Meus clientes agora me encontram facilmente no Google e os agendamentos aumentaram bastante."</p>
              <div className="font-bold text-[18px]">Pedro Augusto</div>
              <div className="text-foreground/70-500 text-[16px]">Urban Barber</div>
            </div>

            <div className="p-6 rounded-2xl bg-[#f3f0e7]">
              <div className="text-yellow-400 text-2xl mb-3">★★★★★</div>
              <p className="text-foreground/70-700 mb-4 text-[20px]">"Processo super rápido e profissional. Em menos de um mês meu site estava no ar e funcionando perfeitamente!"</p>
              <div className="font-bold text-[18px]">Jessica Santos</div>
              <div className="text-foreground/70-500 text-[16px]">Belle Femme</div>
            </div>

            <div className="p-6 rounded-2xl bg-[#f3f0e7]">
              <div className="text-yellow-400 text-2xl mb-3">★★★★★</div>
              <p className="text-foreground/70-700 mb-4 text-[20px]">
                "Melhor investimento que fiz! O retorno foi imediato e o suporte é excelente. Super recomendo!"
              </p>
              <div className="font-bold text-[18px]">Janny Felix</div>
              <div className="text-foreground/70-500 text-[16px]">La Sensualità Boutique</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Comprar */}
      <section id="comprar" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#8F966B]">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#f3f0e7]">PRONTO PARA CRESCER ONLINE?</h2>
          <p className="text-xl md:text-2xl mb-12 text-[#f3f0e7]">Comece hoje mesmo e tenha seu site profissional em 20 dias!</p>

          <div className="bg-[#ede1d3] rounded-3xl p-8 md:p-12 max-w-2xl mx-auto bg-[#ede1d3]">
            <div className="text-foreground/70-900 mb-8">
              <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
                🔥 Oferta Especial de Lançamento
              </div>
              <div className="mb-4"><span className="text-[#607047] text-2xl">A partir de</span></div>
              <div className="text-6xl font-bold mb-2 text-[#607047]">R$ 598,00</div>
              <div className="text-foreground/70-600 mb-6 text-[#ede1d3]">-</div>
              <div className="text-left rounded-xl p-6 mb-6 bg-[#f3f0e7]">
                <div className="font-bold text-lg mb-4 text-[#607047]">Incluso no Pacote:</div>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-900 flex-shrink-0" />
                    <span className="text-[#607047] text-[20px]">Design Personalizado</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-900 flex-shrink-0" />
                    <span className="text-[#607047] text-[20px]">Site Responsivo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-900 flex-shrink-0" />
                    <span className="text-[#607047] text-[20px]">1 Ano de Hospedagem</span>
                  </div>
                  
                  
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-900 flex-shrink-0" />
                    <span className="text-[#607047] text-[20px]">Google Analytics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-900 flex-shrink-0" />
                    <span className="text-[#607047] text-[20px]">Botão WhatsApp</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-900 flex-shrink-0" />
                    <span className="text-[#607047] text-[20px]">Suporte 24/7</span>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full bg-[#607047] text-white px-8 py-5 rounded-full hover:bg-primary-700 transition text-xl font-bold flex items-center justify-center gap-3 mb-4 text-[#F3F0E7]">
              Criar Meu Site Agora <ArrowRight className="w-6 h-6" />
            </button>
            
            <div className="text-foreground/70-500 mb-4 text-[#607047] text-[16px] font-bold">✓ Garantia de 30 dias&nbsp;&nbsp;•&nbsp;&nbsp;✓ Sem taxas escondidas&nbsp;&nbsp;•&nbsp;&nbsp;✓ Cancele quando quiser</div>

            <div className="flex items-center justify-center gap-8 text-foreground/70-600 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#607047]">
                  <Check className="w-5 h-5 text-white-600" />
                </div>
                <span className="text-[#607047] text-[15px] font-bold">Pagamento Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#607047]">
                  <Rocket className="w-5 h-5 text-white-600" />
                </div>
                <span className="text-[#607047] text-[15px] font-bold">Início Imediato</span>
              </div>
            </div>
          </div>

          <div className="mt-12 text-blue-100">
            <p className="text-lg">...</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white py-12 px-4 l:px-6 lg:px-8 bg-[#607047]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                
                <span className="font-bold text-xl">Studio Milady</span>
              </div>
              <p className="text-foreground/70-400 text-l">
                Sites profissionais para pequenos negócios que querem crescer online.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">EMPRESA</h3>
              <ul className="space-y-2 text-foreground/70-400 text-l">
                <li><button onClick={() => scrollToSection('intro')} className="hover:text-white transition">Sobre Nós</button></li>
                <li><button onClick={() => scrollToSection('servicos')} className="hover:text-white transition">Serviços</button></li>
                <li><button onClick={() => scrollToSection('cases')} className="hover:text-white transition">Portfolio</button></li>
                <li></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">SUPORTE</h3>
              <ul className="space-y-2 text-foreground/70-400 text-l">
                <li></li>
                <li><Link to="/faq" className="hover:text-white transition">FAQ</Link></li>
                <li><a href="#" className="hover:text-white transition">Contato</a></li>
                <li><a href="#" className="hover:text-white transition">Termos de Uso</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">CONTATO</h3>
              <ul className="space-y-2 text-foreground/70-400 text-l">
                <li>studiomilady_comercial@gmail.com</li>
               
                <li>
  <a href="https://instagram.com/studio.milady" target="_blank">
    @studio.milady
  </a>
</li>
                <li>+55 31 9779-6261</li>                
                <li>Belo Horizonte, MG</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-foreground/70-400 text-sm">
            <p>&copy; 2026 Studio Milady. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Botão Flutuante WhatsApp */}
      <a
        href="https://wa.me/553197796261"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-[#20BA5A] transition-all duration-300 hover:scale-110 z-50"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="w-8 h-8" fill="currentColor" />
      </a>
    </div>
  );
}
