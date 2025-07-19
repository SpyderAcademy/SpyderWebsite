import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, BarChart, BookOpen, Target, ArrowRight } from 'lucide-react';

interface CourseDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  course: {
    id: number;
    title: string;
    description: string;
    icon: any;
    category: string;
    duration: string;
    level: string;
    modules: string[];
    skills: string[];
  };
}

const CourseDetailsModal = ({ isOpen, onClose, course }: CourseDetailsModalProps) => {
  const handleEnrollNow = () => {
    const courseDetails = `
🎓 *Course Enrollment Request*

📚 *Course:* ${course.title}
📝 *Description:* ${course.description}
⏱️ *Duration:* ${course.duration}
📊 *Level:* ${course.level}
🏷️ *Category:* ${course.category}

💡 *Key Skills:*
${course.skills.map((skill: string) => `• ${skill}`).join('\n')}

📋 *Course Modules:*
${course.modules.map((module: string) => `• ${module}`).join('\n')}

Please provide me with more details about enrollment process and pricing.
    `;

    const phoneNumber = "917871801331"; // Indian number format
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(courseDetails.trim())}`;
    
    window.open(whatsappUrl, '_blank');
  };
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card/95 backdrop-blur-lg border-primary/20">
        <DialogHeader>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center">
              <course.icon className="w-8 h-8 text-primary" />
            </div>
            <div>
              <DialogTitle className="text-2xl font-bold text-gradient mb-2">
                {course.title}
              </DialogTitle>
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                {course.category}
              </Badge>
            </div>
          </div>
          <DialogDescription className="text-lg text-muted-foreground">
            {course.description}
          </DialogDescription>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-8 mt-6">
          {/* Course Info */}
          <div className="space-y-6">
            <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Course Details
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Duration:</span>
                  <span className="font-medium">{course.duration}</span>
                </div>
                <div className="flex items-center gap-3">
                  <BarChart className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Level:</span>
                  <span className="font-medium">{course.level}</span>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Modules:</span>
                  <span className="font-medium">{course.modules.length} modules</span>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
              <h3 className="text-xl font-semibold mb-4">Skills You'll Learn</h3>
              <div className="flex flex-wrap gap-2">
                {course.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Course Modules */}
          <div className="space-y-6">
            <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
              <h3 className="text-xl font-semibold mb-4">Course Modules</h3>
              <div className="space-y-3">
                {course.modules.map((module, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-background/50 rounded-lg border border-border/50">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-sm font-semibold text-primary">
                      {index + 1}
                    </div>
                    <span className="font-medium">{module}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-6 border border-primary/20">
              <h3 className="text-xl font-semibold mb-2">Ready to Start?</h3>
              <p className="text-muted-foreground mb-4">
                Join thousands of students who have transformed their careers with this course.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="btn-premium flex-1" onClick={handleEnrollNow}>
                  Enroll Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" className="flex-1 border-primary/20 text-primary hover:bg-primary/10">
                  Download Syllabus
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CourseDetailsModal;
