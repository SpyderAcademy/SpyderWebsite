import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const faqs = [
	{
		question: "Learning Formats",
		answer: "Spyder Academy offers live instructor-led classes, self-paced recorded sessions, hybrid programs, and hands-on project workshops."
	},
	{
		question: "No Coding Experience?",
		answer: "Yes! Our beginner-friendly courses start from the basics and build your skills with practical learning."
	},
	{
		question: "Tech Interview Prep",
		answer: "We provide aptitude tests, coding challenges, mock interviews, resume workshops, and mentorship with industry experts."
	},
	{
		question: "Internship Benefits",
		answer: "Gain real-world project exposure, mentorship, and build a strong portfolio to boost your confidence and employability."
	},
	{
		question: "Career Guidance",
		answer: "We offer career counseling, resume support, LinkedIn optimization, personal branding, and job search strategies."
	},
	{
		question: "Placement Guarantee?",
		answer: "We offer placement assistance and regular drives, but do not guarantee 100% placement. Our support maximizes your opportunities."
	},
	{
		question: "Career Gap Support",
		answer: "Yes! We help with skill-refresh programs, interview coaching, and career re-entry guidance for candidates with gaps."
	},
	{
		question: "Experienced Professionals",
		answer: "Definitely. Our programs are for freshers and experienced professionals looking to upskill or switch domains."
	},
	{
		question: "Course Domains",
		answer: "Courses offered: IT, HR, Finance, Digital Marketing, Leadership Training—designed for freshers and professionals."
	}
];

function FAQButtons({ faqs }: { faqs: { question: string; answer: string }[] }) {
    const [openIdx, setOpenIdx] = useState<number | null>(null);

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-8">
            {faqs.map((faq, idx) => (
                <div key={idx}>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                    >
                        {faq.question}
                    </Button>
                    {openIdx === idx && (
                        <div className="mt-2 p-3 bg-background/80 rounded shadow text-left text-sm max-w-xs mx-auto">
                            {faq.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		course: '',
		message: ''
	});
	
	const { toast } = useToast();

	const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone, course, message } = formData;
    const whatsappMessage = 
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCourse: ${course}\nMessage: ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/7871801331?text=${encodedMessage}`, "_blank");
    setFormData({ name: '', email: '', phone: '', course: '', message: '' });
};

	const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  setFormData(prev => ({
    ...prev,
    [e.target.name]: e.target.value
  }));
};

	const contactInfo = [
		{
			icon: <Mail className="w-6 h-6" />,
			title: "Email Us",
			value: "admin@spyderacademy.in",
			description: "Get instant support"
		},
		{
			icon: <Phone className="w-6 h-6" />,
			title: "Call Us",
			value: "+91 -7871801331",
			description: "24/7 support available"
		},
		{
			icon: <MapPin className="w-6 h-6" />,
			title: "Visit Us",
			value: "42-8, 3rd St, near karuvatupalam, Devendrapuram, Kitchipalayam, Salem, Tamil Nadu 636001",
			description: "Come for a campus tour"
		}
	];

	return (
		<section id="contact" className="py-20 relative overflow-hidden">
			{/* Background effects */}
			<div className="absolute inset-0">
				<div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
				<div className="absolute bottom-20 left-20 w-64 h-64 bg-primary/3 rounded-full blur-3xl animate-float" 
					 style={{ animationDelay: '1.5s' }} />
			</div>

			<div className="container mx-auto px-4 relative z-10">
				{/* Section Header */}
				<div className="text-center mb-16 animate-slide-up">
					<Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
						Get In Touch
					</Badge>
					<h2 className="text-4xl lg:text-5xl font-bold mb-6">
						Ready to Start Your
						<span className="block text-gradient font-orbitron">JOURNEY?</span>
					</h2>
					<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
						Having questions about our courses? Want to discuss your career goals? 
						Our expert counselors are here to guide you every step of the way.
					</p>
				</div>

				<div className="grid lg:grid-cols-3 gap-12">
					{/* Contact Information */}
					<div className="lg:col-span-1 space-y-6 animate-slide-left">
						<div className="glass p-6 rounded-2xl border border-border/50">
							<h3 className="text-2xl font-bold mb-6 text-gradient">
								Let's Connect
							</h3>
							<p className="text-muted-foreground mb-8">
								We're here to help you choose the right course and kickstart your tech career.
							</p>

							<div className="space-y-6">
								{contactInfo.map((info, index) => (
									<div 
										key={info.title}
										className="flex items-start space-x-4 p-4 rounded-lg hover:bg-primary/5 transition-all duration-300 animate-slide-up"
										style={{ animationDelay: `${index * 150}ms` }}
									>
										<div className="text-primary mt-1">
											{info.icon}
										</div>
										<div>
											<h4 className="font-semibold mb-1">{info.title}</h4>
											<p className="text-foreground font-medium">{info.value}</p>
											<p className="text-muted-foreground text-sm">{info.description}</p>
										</div>
									</div>
								))}
							</div>

							{/* Quick Actions */}
							<div className="mt-8 space-y-3">
								<a
									href="https://wa.me/7871801331"
									target="_blank"
									rel="noopener noreferrer"
									className="w-full btn-premium flex items-center justify-center px-4 py-2 rounded-lg font-semibold border border-primary/20"
								>
									<MessageCircle className="w-4 h-4 mr-2" />
									Live Chat Support
								</a>
							</div>
						</div>
					</div>

					{/* Contact Form */}
					<div className="lg:col-span-2 animate-slide-right">
						<Card className="glass border-border/50">
							<CardHeader>
								<CardTitle className="text-2xl">Send us a Message</CardTitle>
								<p className="text-muted-foreground">
									Fill out the form below and we'll get back to you within 24 hours.
								</p>
							</CardHeader>
							<CardContent>
								<form onSubmit={handleSubmit} className="space-y-6">
									<div className="grid md:grid-cols-2 gap-6">
										<div>
											<label className="block text-sm font-medium mb-2">
												Full Name *
											</label>
											<Input
												name="name"
												value={formData.name}
												onChange={handleChange}
												placeholder="Enter your full name"
												required
												className="bg-background/50"
											/>
										</div>
										<div>
											<label className="block text-sm font-medium mb-2">
												Email Address *
											</label>
											<Input
												name="email"
												type="email"
												value={formData.email}
												onChange={handleChange}
												placeholder="Enter your email"
												required
												className="bg-background/50"
											/>
										</div>
									</div>

									<div className="grid md:grid-cols-2 gap-6">
										<div>
											<label className="block text-sm font-medium mb-2">
												Phone Number
											</label>
											<Input
												name="phone"
												value={formData.phone}
												onChange={handleChange}
												placeholder="Enter your phone number"
												className="bg-background/50"
											/>
										</div>
										<div>
											<label className="block text-sm font-medium mb-2">
												Interested Course
											</label>
											<select
												name="course"
												value={formData.course}
												onChange={handleChange}
												required
												className="bg-background/50 w-full px-3 py-2 rounded border"
											>
												<option value="">-- Select Course --</option>
												<option value="Java">Java</option>
												<option value="Python">Python</option>
												<option value="Full Stack Developer">Full Stack Developer</option>
												<option value="Software Testing">Software Testing</option>
												<option value="Data Analytics">Data Analytics</option>
												<option value="Cyber Security">Cyber Security</option>
												<option value="UI/UX">UI/UX</option>
												<option value="AWS &amp; DevOps">AWS &amp; DevOps</option>
												<option value="Software Development">Software Development</option>
												<option value="C &amp; C++">C &amp; C++</option>
												<option value=".NET">.NET</option>
												<option value="Core Java">Core Java</option>
												<option value="Hibernate">Hibernate</option>
												<option value="Spring">Spring</option>
												<option value="React / Angular">React / Angular</option>
												<option value="Node JS / Django">Node JS / Django</option>
												<option value="HTML5 / CSS / JS">HTML5 / CSS / JS</option>
												<option value="PHP / WordPress">PHP / WordPress</option>
												<option value="SEO / SMM">SEO / SMM</option>
												<option value="Google Ads">Google Ads</option>
												<option value="Content Writing">Content Writing</option>
												<option value="AWS / Azure">AWS / Azure</option>
												<option value="Google Cloud">Google Cloud</option>
												<option value="Cloud Computing">Cloud Computing</option>
												<option value="Spoken English">Spoken English</option>
												<option value="IELTS / TOEFL">IELTS / TOEFL</option>
												<option value="German / French">German / French</option>
												<option value="Artificial Intelligence">Artificial Intelligence</option>
												<option value="Python with ML">Python with ML</option>
												<option value="Power BI / Tableau">Power BI / Tableau</option>
												<option value="Tally">Tally</option>
												<option value="GST">GST</option>
												<option value="CCNA / CCNP">CCNA / CCNP</option>
												<option value="Ethical Hacking">Ethical Hacking</option>
												<option value="Android / iOS">Android / iOS</option>
												<option value="Flutter / Kotlin">Flutter / Kotlin</option>
												<option value="Graphic Design">Graphic Design</option>
												<option value="Photoshop / Video Editing">Photoshop / Video Editing</option>
											</select>
										</div>
									</div>

									<div>
										<label className="block text-sm font-medium mb-2">
											Message
										</label>
										<Textarea
											name="message"
											value={formData.message}
											onChange={handleChange}
											placeholder="Tell us about your goals and how we can help..."
											rows={5}
											className="bg-background/50"
										/>
									</div>

									<Button type="submit" size="lg" className="w-full btn-premium">
										<Send className="w-5 h-5 mr-2" />
										Send Message
									</Button>
								</form>
							</CardContent>
						</Card>
					</div>
				</div>

				{/* FAQ Quick Links */}
				<div className="mt-16 text-center animate-slide-up">
					<div className="glass p-8 rounded-2xl border border-border/50">
						<h3 className="text-xl font-bold mb-4">
							Frequently Asked Questions
						</h3>
						<p className="text-muted-foreground mb-6">
							Find quick answers to common questions about our courses and programs.
						</p>
						<FAQButtons faqs={faqs} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;