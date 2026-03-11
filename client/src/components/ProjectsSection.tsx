import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Users, Zap } from 'lucide-react';

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'مصنع الأدوية - أديس أبابا، إثيوبيا',
      category: 'pharmaceutical',
      location: 'أديس أبابا، إثيوبيا',
      year: 2023,
      description: 'مشروع EPC كامل لبناء مصنع أدوية متكامل بمساحة 5000 متر مربع',
      achievements: [
        'نظام GMP كامل',
        'غرف نظيفة ISO 14644',
        'أنظمة HVAC متقدمة',
        'أنظمة مياه نقية'
      ],
      team: 25,
      duration: '18 شهر',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop',
      status: 'مكتمل'
    },
    {
      id: 2,
      title: 'مصنع الأدوية الوطني - صنعاء',
      category: 'pharmaceutical',
      location: 'صنعاء، اليمن',
      year: 2022,
      description: 'تجهيز وتحديث مصنع الأدوية الوطني بأحدث المعايير الدولية',
      achievements: [
        'تحديث أنظمة كهربائية',
        'تركيب غرف نظيفة جديدة',
        'أنظمة تحكم ذكية',
        'معايير FDA'
      ],
      team: 20,
      duration: '12 شهر',
      image: 'https://images.unsplash.com/photo-1576091160550-112173f7f869?w=600&h=400&fit=crop',
      status: 'مكتمل'
    },
    {
      id: 3,
      title: 'مصنع الأدوية العربي - عدن',
      category: 'pharmaceutical',
      location: 'عدن، اليمن',
      year: 2021,
      description: 'توسعة وتطوير مصنع الأدوية العربي مع إضافة خطوط إنتاج جديدة',
      achievements: [
        'توسعة المساحة 40%',
        'خطوط إنتاج جديدة',
        'أنظمة أمان متقدمة',
        'معايير WHO'
      ],
      team: 30,
      duration: '14 شهر',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
      status: 'مكتمل'
    },
    {
      id: 4,
      title: 'نظام HVAC متقدم - مصنع صيدلاني',
      category: 'hvac',
      location: 'صنعاء، اليمن',
      year: 2023,
      description: 'تصميم وتنفيذ نظام تهوية وتكييف متقدم للغرف النظيفة',
      achievements: [
        'تحكم دقيق بالرطوبة',
        'كفاءة طاقة عالية',
        'نظام مراقبة ذكي',
        'توفير 30% من الطاقة'
      ],
      team: 12,
      duration: '6 أشهر',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop',
      status: 'مكتمل'
    },
    {
      id: 5,
      title: 'نظام المياه النقية - مصنع أدوية',
      category: 'water',
      location: 'صنعاء، اليمن',
      year: 2023,
      description: 'تركيب نظام تنقية مياه متقدم (PW و WFI) بمعايير عالمية',
      achievements: [
        'معايير USP و EP',
        'نقاء 99.99%',
        'نظام توزيع ستانلس',
        'مراقبة مستمرة'
      ],
      team: 10,
      duration: '4 أشهر',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop',
      status: 'مكتمل'
    },
    {
      id: 6,
      title: 'نظام التحكم والأتمتة - مصنع صيدلاني',
      category: 'automation',
      location: 'عدن، اليمن',
      year: 2022,
      description: 'تطبيق نظام تحكم ذكي (PLC و SCADA) لتحسين الإنتاجية',
      achievements: [
        'أتمتة كاملة',
        'تقليل الأخطاء 95%',
        'زيادة الإنتاجية 40%',
        'واجهة مستخدم حديثة'
      ],
      team: 8,
      duration: '3 أشهر',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop',
      status: 'مكتمل'
    }
  ];

  const categories = [
    { id: 'all', label: 'جميع المشاريع' },
    { id: 'pharmaceutical', label: 'مصانع الأدوية' },
    { id: 'hvac', label: 'أنظمة التهوية' },
    { id: 'water', label: 'أنظمة المياه' },
    { id: 'automation', label: 'الأتمتة' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cairo font-bold text-[#1e3a8a] mb-4">
            مشاريعنا والإنجازات
          </h2>
          <p className="text-xl text-gray-600 font-poppins max-w-2xl mx-auto">
            مجموعة من المشاريع الناجحة التي نفذناها بكفاءة عالية والتزام تام بمعايير الجودة العالمية
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-poppins font-semibold transition-all duration-300 ${
                selectedCategory === cat.id
                  ? 'bg-[#ff6b35] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id}
              className="border-0 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48 bg-gray-200">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-[#ff6b35] text-white font-poppins">
                    {project.status}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-cairo font-bold text-[#1e3a8a] mb-3">
                  {project.title}
                </h3>

                {/* Meta Info */}
                <div className="space-y-2 mb-4 text-sm text-gray-600 font-poppins">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-[#ff6b35]" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-[#ff6b35]" />
                    <span>{project.year} • {project.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-[#ff6b35]" />
                    <span>فريق من {project.team} متخصص</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 font-poppins text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Achievements */}
                <div className="space-y-2">
                  <h4 className="font-cairo font-semibold text-[#1e3a8a] text-sm">الإنجازات:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.achievements.map((achievement, idx) => (
                      <Badge 
                        key={idx}
                        className="bg-blue-50 text-[#1e3a8a] border border-blue-200 font-poppins text-xs"
                      >
                        <Zap size={12} className="mr-1" />
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-[#1e3a8a]/5 to-[#ff6b35]/5 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-cairo font-bold text-[#ff6b35] mb-2">50+</div>
              <p className="text-gray-700 font-poppins">مشروع منجز</p>
            </div>
            <div>
              <div className="text-4xl font-cairo font-bold text-[#1e3a8a] mb-2">200+</div>
              <p className="text-gray-700 font-poppins">متخصص وفني</p>
            </div>
            <div>
              <div className="text-4xl font-cairo font-bold text-[#ff6b35] mb-2">15+</div>
              <p className="text-gray-700 font-poppins">سنة خبرة</p>
            </div>
            <div>
              <div className="text-4xl font-cairo font-bold text-[#1e3a8a] mb-2">100%</div>
              <p className="text-gray-700 font-poppins">رضا العملاء</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
