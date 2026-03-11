import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'أ.د. محمد علي الحسن',
      position: 'مدير عام - مصنع الأدوية الوطني',
      company: 'مصنع الأدوية الوطني - صنعاء',
      text: 'تعاملنا مع شركة السراج في مشروع تحديث مصنعنا، وكانت التجربة استثنائية. الفريق محترف جداً والالتزام بالمواعيد والجودة كان بلا تحفظ. أنصح بهم بشدة.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
    },
    {
      id: 2,
      name: 'م. فاطمة محمود',
      position: 'مدير المشاريع - مصنع الأدوية العربي',
      company: 'مصنع الأدوية العربي - عدن',
      text: 'الشركة قدمت حلولاً متكاملة لتوسعة مصنعنا. الجودة العالية والاهتمام بالتفاصيل جعل المشروع ناجحاً جداً. شكراً لفريق السراج على الإتقان والاحترافية.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
    },
    {
      id: 3,
      name: 'د. أحمد عبدالله',
      position: 'مدير الإنتاج - مصنع أديس أبابا',
      company: 'مصنع الأدوية - أديس أبابا، إثيوبيا',
      text: 'مشروع EPC الذي نفذته السراج كان متميزاً من البداية إلى النهاية. الالتزام بمعايير GMP والمواصفات الدولية كان واضحاً في كل جزء من المشروع.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop'
    },
    {
      id: 4,
      name: 'م. سارة محمد',
      position: 'مهندسة تحكم - شركة صيدلانية',
      company: 'شركة صيدلانية متخصصة',
      text: 'نظام التحكم والأتمتة الذي طبقته السراج حسّن من إنتاجيتنا بشكل كبير. الفريق كان متعاوناً جداً وسهل التعامل معهم طوال فترة المشروع.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
    },
    {
      id: 5,
      name: 'أ. عمر الشرعبي',
      position: 'مدير المرافق - مصنع أدوية',
      company: 'مصنع أدوية متخصص',
      text: 'أنظمة HVAC والمياه النقية التي طبقتها السراج تعمل بكفاءة عالية جداً. الصيانة سهلة والدعم الفني ممتاز. استثمار موفق جداً.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
    },
    {
      id: 6,
      name: 'د. ليلى أحمد',
      position: 'مديرة الجودة - مصنع صيدلاني',
      company: 'مصنع صيدلاني حديث',
      text: 'الغرف النظيفة التي صممتها وطبقتها السراج تتوافق تماماً مع معايير ISO 14644. الاهتمام بالتفاصيل والجودة كان استثنائياً.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cairo font-bold text-[#1e3a8a] mb-4">
            شهادات عملائنا
          </h2>
          <p className="text-xl text-gray-600 font-poppins max-w-2xl mx-auto">
            آراء عملائنا الكرام الذين استفادوا من خدماتنا المتميزة والاحترافية
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id}
              className="border-0 p-6 shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i}
                    size={18} 
                    className="fill-[#ff6b35] text-[#ff6b35]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 font-poppins leading-relaxed mb-6 text-sm">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-cairo font-bold text-[#1e3a8a]">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 font-poppins">
                    {testimonial.position}
                  </p>
                  <p className="text-xs text-gray-500 font-poppins">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="bg-gradient-to-r from-[#1e3a8a] to-[#0c2340] rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-2xl font-cairo font-bold mb-8 text-center">
            لماذا يثق بنا عملاؤنا؟
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-cairo font-bold mb-2">98%</div>
              <p className="font-poppins text-blue-100">رضا العملاء</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-cairo font-bold mb-2">50+</div>
              <p className="font-poppins text-blue-100">مشروع ناجح</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-cairo font-bold mb-2">15+</div>
              <p className="font-poppins text-blue-100">سنة خبرة</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-cairo font-bold mb-2">200+</div>
              <p className="font-poppins text-blue-100">متخصص مدرب</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 font-poppins mb-6">
            هل تريد أن تكون جزءاً من قصة النجاح؟
          </p>
          <a 
            href="https://wa.me/967777603050?text=أود%20معرفة%20المزيد%20عن%20خدماتكم%20والاستفادة%20من%20خبرتكم"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#ff6b35] hover:bg-[#e55a24] text-white font-poppins font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            تواصل معنا الآن
          </a>
        </div>
      </div>
    </section>
  );
}
