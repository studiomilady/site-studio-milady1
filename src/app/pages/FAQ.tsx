import { Link } from 'react-router';
import { ChevronDown, ArrowLeft, MessageCircle } from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';

export default function FAQ() {
  const faqs = [
    {
      question: "Quanto tempo leva para criar meu site?",
      answer: "Nosso processo de desenvolvimento leva em média 20 dias úteis, desde a consultoria inicial até o lançamento do site. Este prazo pode variar dependendo da complexidade do projeto."
    },
    {
      question: "Qual é o investimento para ter um site profissional?",
      answer: "Nosso pacote completo está com valor promocional de R$ 589,00, incluindo design personalizado, desenvolvimento, 1 ano de hospedagem gratuita, integração com WhatsApp, Google Analytics, e muito mais. É um investimento único sem mensalidades."
    },
    {
      question: "Eu preciso fornecer textos e imagens?",
      answer: "Sim, você precisa fornecer o conteúdo textual e imagens do seu negócio. Porém, oferecemos orientação completa sobre que tipo de conteúdo funciona melhor."
    },
    {
      question: "O site vai funcionar em celular?",
      answer: "Com certeza! Todos os nossos sites são 100% responsivos, ou seja, se adaptam automaticamente para funcionar perfeitamente em smartphones, tablets e computadores. Hoje, mais de 70% dos acessos vêm de dispositivos móveis, então isso é essencial."
    },
    {
      question: "Vocês oferecem suporte após o lançamento?",
      answer: "Sim! Oferecemos suporte técnico contínuo para resolver quaisquer problemas que possam surgir. Estamos disponíveis via WhatsApp, email e telefone para garantir que seu site funcione sempre perfeitamente."
    },
    {
      question: "Posso fazer alterações no site depois de pronto?",
      answer: "Sim! Após o lançamento, você pode solicitar até 2 alterações simples. Pequenos ajustes de texto e imagens estão inclusos no primeiro mês. Para alterações maiores ou recorrentes, oferecemos planos de manutenção mensal com valores acessíveis."
    },
    {
      question: "O que está incluído na hospedagem gratuita?",
      answer: "A hospedagem gratuita de 1 ano inclui servidor seguro, certificado SSL (cadeado de segurança), domínio (.com.br ou .com) e banda ilimitada. Após o primeiro ano, o custo de renovação é bastante acessível."
    },
    {
      question: "Meu site vai aparecer no Google?",
      answer: "Sim! Todos os nossos sites são otimizados para SEO (otimização para mecanismos de busca), o que ajuda seu site a ser encontrado no Google. Também configuramos o Google Analytics para você acompanhar os resultados e o Google Search Console para monitorar o desempenho nas buscas."
    },
    {
      question: "Posso vender produtos pelo site?",
      answer: "Sim! Podemos integrar um catálogo de produtos com botões de compra que direcionam para WhatsApp. Para e-commerce completo com carrinho e pagamento online, oferecemos um pacote específico com valores e prazos diferenciados."
    },
    {
      question: "Como funciona o processo de criação?",
      answer: "O processo tem 4 etapas: (1) Consultoria inicial onde entendemos seu negócio, (2) Criação e aprovação do design, (3) Desenvolvimento e programação do site, (4) Revisão final e lançamento. Você participa ativamente de cada etapa aprovando o trabalho."
    },
    {
      question: "Preciso pagar tudo de uma vez?",
      answer: "Trabalhamos com uma entrada de 50% para iniciar o projeto e os 50% restantes no momento do lançamento do site. Aceitamos PIX, transferência bancária e cartão de crédito (através de link de pagamento)."
    },
    {
      question: "E se eu não gostar do resultado?",
      answer: "Trabalhamos com aprovação em cada etapa justamente para garantir que você fique satisfeito. Você aprova o design antes de começarmos a programar, e fazemos ajustes até que fique do seu agrado. Nosso objetivo é sua total satisfação com o resultado final."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-secondary backdrop-blur-sm z-50 border-b border-gray-100 bg-[#607047f2]">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2">
              <span className="font-bold text-xl text-white">STUDIO MILADY</span>
            </Link>
            <Link
              to="/"
              className="flex items-center gap-2 text-white hover:text-[#EDE3D1] transition"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Voltar</span>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-[#ede3d1]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-[#607047]">
            Perguntas Frequentes
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Tire suas dúvidas sobre nossos serviços de criação de sites
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Accordion.Root type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <Accordion.Item
                key={index}
                value={`item-${index}`}
                className="bg-[#f3f0e7] rounded-xl overflow-hidden border-2 border-[#ede3d1] hover:border-[#8F966B] transition"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="w-full px-6 py-5 flex items-center justify-between text-left group">
                    <span className="font-bold text-lg text-[#2B3220] pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown className="w-6 h-6 text-[#607047] transition-transform group-data-[state=open]:rotate-180 flex-shrink-0" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="px-6 pb-5 text-gray-700 text-[18px] leading-relaxed data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                  {faq.answer}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>

          {/* CTA Section */}
          <div className="mt-16 bg-[#8F966B] rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4 text-[#ede3d1]">
              Ainda tem dúvidas?
            </h2>
            <p className="text-xl text-[#f3f0e7] mb-8">
              Entre em contato conosco pelo WhatsApp e teremos prazer em ajudar!
            </p>
            <a
              href="https://wa.me/553197796261"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:bg-[#20BD5A] transition text-lg"
            >
              <MessageCircle className="w-6 h-6" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#607047] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4 text-xl">STUDIO MILADY</h3>
              <p className="text-[#ede3d1] text-sm">
                Criando sites profissionais para pequenos e médios negócios desde 2024.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">NAVEGAÇÃO</h3>
              <ul className="space-y-2 text-[#ede3d1]">
                <li><Link to="/" className="hover:text-white transition">Início</Link></li>
                <li><Link to="/#servicos" className="hover:text-white transition">Serviços</Link></li>
                <li><Link to="/#cases" className="hover:text-white transition">Cases</Link></li>
                <li><Link to="/faq" className="hover:text-white transition">FAQ</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">SUPORTE</h3>
              <ul className="space-y-2 text-[#ede3d1]">
                <li><Link to="/faq" className="hover:text-white transition">FAQ</Link></li>
                <li><a href="#" className="hover:text-white transition">Contato</a></li>
                <li><a href="#" className="hover:text-white transition">Termos de Uso</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">CONTATO</h3>
              <ul className="space-y-2 text-[#ede3d1] text-sm">
                <li>studiomilady_comercial@gmail.com</li>
                <li>
                  <a href="https://instagram.com/studio.milady" target="_blank" rel="noopener noreferrer">
                    @studio.milady
                  </a>
                </li>
                <li>+55 31 9779-6261</li>
                <li>Belo Horizonte, MG</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-[#ede3d1] text-sm">
            <p>&copy; 2026 Studio Milady. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/553197796261"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20BD5A] transition-all hover:scale-110 z-50"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}
