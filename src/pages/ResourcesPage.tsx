import { useState, useEffect } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Video, FileText, Download, ExternalLink, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ResourcesPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const resources = [
    {
      id: 1,
      title: "Complete SQL Reference Guide",
      description: "Comprehensive guide covering all SQL concepts from basic to advanced with practical examples.",
      type: "PDF Guide",
      icon: FileText,
      category: "Database",
      downloads: 2540,
      rating: 4.9,
      size: "15 MB"
    },
    {
      id: 2,
      title: "Python Programming Video Series",
      description: "30+ hours of video content covering Python fundamentals to advanced topics.",
      type: "Video Course",
      icon: Video,
      category: "Programming",
      downloads: 3200,
      rating: 4.8,
      size: "12 Hours"
    },
    {
      id: 3,
      title: "Web Development Bootcamp Materials",
      description: "Complete course materials including code samples, projects, and assignments.",
      type: "Course Pack",
      icon: BookOpen,
      category: "Web Development",
      downloads: 1890,
      rating: 4.7,
      size: "25 MB"
    },
    {
      id: 4,
      title: "Data Science Cheat Sheets",
      description: "Quick reference sheets for popular data science libraries and concepts.",
      type: "Cheat Sheet",
      icon: FileText,
      category: "Data Science",
      downloads: 4100,
      rating: 4.9,
      size: "8 MB"
    },
    {
      id: 5,
      title: "Cloud Computing Best Practices",
      description: "Industry best practices and guidelines for cloud architecture and deployment.",
      type: "eBook",
      icon: BookOpen,
      category: "Cloud Computing",
      downloads: 1250,
      rating: 4.6,
      size: "20 MB"
    },
    {
      id: 6,
      title: "Interview Preparation Kit",
      description: "Complete interview preparation materials with common questions and solutions.",
      type: "Study Kit",
      icon: FileText,
      category: "Career",
      downloads: 5600,
      rating: 4.8,
      size: "18 MB"
    }
  ];

  const categories = ["All", "Database", "Programming", "Web Development", "Data Science", "Cloud Computing", "Career"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredResources = selectedCategory === "All" 
    ? resources 
    : resources.filter(resource => resource.category === selectedCategory);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="text-4xl font-orbitron font-bold text-gradient animate-glow mb-4">
            Loading Resources...
          </div>
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-float" 
               style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center animate-slide-up">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              Learning Materials & Tools
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Learning
              <span className="block text-gradient font-orbitron">RESOURCES</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Access our comprehensive collection of study materials, guides, and tools 
              to accelerate your learning journey and master new technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 animate-slide-up">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`${
                  selectedCategory === category 
                    ? "btn-premium" 
                    : "glass hover:bg-primary/10"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource, index) => (
              <div 
                key={resource.id}
                className="p-6 rounded-xl glass border border-border/50 hover:border-primary/30 transition-all duration-300 group animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/30 transition-colors">
                      <resource.icon className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {resource.type}
                    </Badge>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-1" />
                    {resource.rating}
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {resource.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Category:</span>
                    <span className="font-medium">{resource.category}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Size:</span>
                    <span className="font-medium">{resource.size}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Downloads:</span>
                    <span className="font-medium">{resource.downloads.toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" className="flex-1 btn-premium group">
                    <Download className="mr-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
                    Download
                  </Button>
                  <Button size="sm" variant="outline" className="glass">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold text-gradient mb-2">500+</div>
              <div className="text-muted-foreground">Study Materials</div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-gradient mb-2">50K+</div>
              <div className="text-muted-foreground">Downloads</div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold text-gradient mb-2">12</div>
              <div className="text-muted-foreground">Categories</div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl font-bold text-gradient mb-2">4.8</div>
              <div className="text-muted-foreground">Avg Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center p-8 rounded-2xl glass border border-primary/20 animate-slide-up">
            <h2 className="text-3xl font-bold mb-4">
              Need More Resources?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Can't find what you're looking for? Contact our team to get personalized 
              learning materials tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-premium">
                Request Custom Material
              </Button>
              <Button size="lg" variant="outline" className="glass">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResourcesPage;