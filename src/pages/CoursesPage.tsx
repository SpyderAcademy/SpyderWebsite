import { useState, useEffect } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Database, Code, Globe, Brain, Cloud, Smartphone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CoursesPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const courses = [
    {
      id: 1,
      title: "SQL - Complete Database Training",
      description: "Master SQL from basics to advanced concepts. Learn database design, queries, optimization, and real-world applications.",
      icon: Database,
      category: "Database",
      duration: "12 weeks",
      level: "Beginner to Advanced",
      modules: ["SQL Fundamentals", "Advanced Queries", "Database Design", "Performance Optimization", "Real Projects"],
      skills: ["MySQL", "PostgreSQL", "Database Design", "Query Optimization", "Data Analysis"]
    },
    {
      id: 2,
      title: "Python - Master Programming",
      description: "Complete Python programming course covering web development, data science, automation, and machine learning.",
      icon: Code,
      category: "Programming",
      duration: "16 weeks",
      level: "Beginner to Expert",
      modules: ["Python Basics", "Web Development", "Data Science", "Machine Learning", "Automation"],
      skills: ["Python", "Django", "Flask", "Pandas", "NumPy", "Machine Learning"]
    },
    {
      id: 3,
      title: "Web Development - Frontend & Backend",
      description: "Full-stack web development training covering modern frameworks, databases, and deployment strategies.",
      icon: Globe,
      category: "Web Development",
      duration: "20 weeks",
      level: "Beginner to Professional",
      modules: ["HTML/CSS/JS", "React/Vue", "Node.js", "Databases", "DevOps"],
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "AWS"]
    },
    {
      id: 4,
      title: "Data Science & Analytics",
      description: "Comprehensive data science program covering statistics, machine learning, and big data technologies.",
      icon: Brain,
      category: "Data Science",
      duration: "18 weeks",
      level: "Intermediate to Expert",
      modules: ["Statistics", "Python/R", "Machine Learning", "Big Data", "Visualization"],
      skills: ["Python", "R", "Tableau", "Machine Learning", "Statistics", "Big Data"]
    },
    {
      id: 5,
      title: "Cloud Computing (AWS/Azure)",
      description: "Master cloud platforms with hands-on experience in AWS and Azure services, DevOps, and architecture.",
      icon: Cloud,
      category: "Cloud Computing",
      duration: "14 weeks",
      level: "Intermediate to Advanced",
      modules: ["Cloud Fundamentals", "AWS Services", "Azure Platform", "DevOps", "Architecture"],
      skills: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "CI/CD"]
    },
    {
      id: 6,
      title: "Mobile App Development",
      description: "Build native and cross-platform mobile applications using React Native, Flutter, and native development.",
      icon: Smartphone,
      category: "Mobile Development",
      duration: "16 weeks",
      level: "Intermediate",
      modules: ["React Native", "Flutter", "Native Development", "API Integration", "Publishing"],
      skills: ["React Native", "Flutter", "iOS", "Android", "Firebase", "App Store"]
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="text-4xl font-orbitron font-bold text-gradient animate-glow mb-4">
            Loading Courses...
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
              Our Specialized Training Programs
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Courses
              <span className="block text-gradient font-orbitron">OFFERED</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Gain industry-relevant skills with our expert-led training courses. 
              Enhance your career with in-demand certifications.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div 
                key={course.id}
                className="p-6 rounded-xl glass border border-border/50 hover:border-primary/30 transition-all duration-300 group animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/30 transition-colors">
                    <course.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {course.category}
                  </Badge>
                </div>

                <h3 className="text-xl font-semibold mb-3">{course.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {course.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Level:</span>
                    <span className="font-medium">{course.level}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2">Key Skills:</h4>
                  <div className="flex flex-wrap gap-1">
                    {course.skills.slice(0, 3).map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {course.skills.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{course.skills.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                <Button className="w-full btn-premium group">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center p-8 rounded-2xl glass border border-primary/20 animate-slide-up">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get personalized course recommendations and start building your future today.
              Our expert mentors are here to guide you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-premium">
                Get Course Consultation
              </Button>
              <Button size="lg" variant="outline" className="glass">
                Download Curriculum
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CoursesPage;