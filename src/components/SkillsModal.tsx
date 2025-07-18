import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Code } from 'lucide-react';

interface SkillsModalProps {
  isOpen: boolean;
  onClose: () => void;
  skills: string[];
  courseTitle: string;
}

const SkillsModal = ({ isOpen, onClose, skills, courseTitle }: SkillsModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-card/95 backdrop-blur-lg border-primary/20">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
              <Code className="w-6 h-6 text-primary" />
            </div>
            <div>
              <DialogTitle className="text-xl font-bold text-gradient">
                All Skills
              </DialogTitle>
              <p className="text-sm text-muted-foreground">{courseTitle}</p>
            </div>
          </div>
        </DialogHeader>

        <div className="mt-6">
          <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
            <h3 className="text-lg font-semibold mb-4">Skills You'll Master</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-sm py-2 px-3"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/20">
            <p className="text-sm text-muted-foreground">
              These skills are carefully curated to match current industry demands and will help you excel in your career.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SkillsModal;