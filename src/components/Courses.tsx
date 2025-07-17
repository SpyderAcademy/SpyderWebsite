import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, ArrowRight } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      description: "Master modern web development with React, Node.js, and cloud technologies",
      duration: "6 months",
      students: "2.5K+",
      rating: "4.9",
      level: "Intermediate",
      logo: "/fwd.jpg", // changed line
      technologies: ["React", "Node.js", "MongoDB", "AWS"]
    },
    {
      id: 2,
      title: "Data Science & Machine Learning",
      description: "Learn Python, statistics, ML algorithms, and data visualization",
      duration: "8 months",
      students: "1.8K+",
      rating: "4.8",
      level: "Beginner",
      logo: "/ml.png",
      technologies: ["Python", "TensorFlow", "Pandas", "Tableau"]
    },
    {
      id: 3,
      title: "Artificial Intelligence",
      description: "Deep learning, neural networks, and AI model development",
      duration: "10 months",
      students: "1.2K+",
      rating: "4.9",
      level: "Advanced",
      logo: "/ai.jpg",
      technologies: ["PyTorch", "OpenCV", "NLP", "Computer Vision"]
    },
    {
      id: 4,
      title: "Cloud Computing & DevOps",
      description: "AWS, Azure, Docker, Kubernetes, and modern deployment strategies",
      duration: "5 months",
      students: "1.5K+",
      rating: "4.7",
      level: "Intermediate",
      logo: "/cc.jpeg",
      technologies: ["AWS", "Docker", "Kubernetes", "Jenkins"]
    },
    {
      id: 5,
      title: "Mobile App Development",
      description: "Build native and cross-platform mobile applications",
      duration: "6 months",
      students: "2K+",
      rating: "4.8",
      level: "Intermediate",
      logo: "/map.jpg",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"]
    },
    {
      id: 6,
      title: "Cybersecurity Specialist",
      description: "Ethical hacking, network security, and digital forensics",
      duration: "7 months",
      students: "900+",
      rating: "4.9",
      level: "Advanced",
      logo: "/cs.jpg",
      technologies: ["Penetration Testing", "CISSP", "CEH", "Security+"]
    }
  ];

  return (
    <section id="courses" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-primary/3 rounded-full blur-3xl animate-float" 
             style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Courses Offered
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our Specialized Training
            <span className="block text-gradient font-orbitron">PROGRAMS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Gain industry-relevant skills with our expert-led training courses. 
            Enhance your career with in-demand certifications.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card 
              key={course.id} 
              className="group hover:scale-105 transition-all duration-500 border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="relative">
                {/* Course Logo/Image Top for all courses */}
                <div className="w-full h-40 flex items-center justify-center mb-4">
                  {typeof course.logo === "string" && course.logo.startsWith("/") ? (
                    <img
                      src={course.logo}
                      alt={course.title}
                      className="object-cover w-full h-full rounded-3xl"
                    />
                  ) : (
                    <span className="text-4xl">{course.logo}</span>
                  )}
                </div>

                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {course.level}
                  </Badge>
                  <div className="flex items-center text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm ml-1">{course.rating}</span>
                  </div>
                </div>

                <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors">
                  {course.title}
                </CardTitle>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {course.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Course Meta */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {course.students}
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {course.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="text-xs bg-primary/10 text-primary border-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Removed Learn More Button */}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button - Removed as per suggestion */}
      </div>
    </section>
  );
};

export default Courses;