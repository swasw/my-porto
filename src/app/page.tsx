import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Linkedin, Mail, Briefcase, GraduationCap, Code } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const skills = [
    'Python',
    'HTML, CSS, PHP',
    'SQL Database',
    'Flutter & Dart',
    'Kotlin',
    'Vala',
    'MongoDB',
    'JavaScript',
    'PyMongo',
    'Flask'
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section id="hero" className="w-full py-20 md:py-32 lg:py-40 bg-secondary/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
              <div className="flex justify-center md:order-last">
                <Image
                  src="https://picsum.photos/seed/aqil/600/600"
                  width="300"
                  height="300"
                  alt="Aqil Aswangga Anggaraksa"
                  className="aspect-square overflow-hidden rounded-full object-cover"
                  data-ai-hint="profile picture"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4 text-center md:text-left">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                    Aqil Aswangga Anggaraksa
                  </h1>
                  <h2 className="text-2xl font-medium text-primary/80">
                    Software Developer
                  </h2>
                  <p className="max-w-[600px] mx-auto md:mx-0 text-muted-foreground md:text-xl">
                    Active in the field of Computer Science, deepening my expertise in Software Development using Flutter and Dart, as well as Web Development with HTML5, PHP, and JavaScript.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center md:justify-start">
                  <Button asChild size="lg">
                    <Link href="#contact">Contact Me</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="#experience">View My Work</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid items-center gap-12">
              <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                  I am active in the field of Computer Science and currently studying various branches of knowledge such as Web Development, Software Development, and Cybersecurity. I am deepening my expertise in Software Development using Flutter and Dart, as well as Web Development with HTML5, PHP, and JavaScript. I have a strong interest in pursuing a career as a Software Developer or Web Developer.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="w-full py-20 md:py-32 bg-secondary/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Experience</h2>
               <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                My professional journey and roles.
              </p>
            </div>
            <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-full before:w-0.5 before:bg-border">
                <div className="grid gap-10">
                    <div className="relative">
                        <div className="absolute -left-9 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                            <Briefcase className="h-4 w-4" />
                        </div>
                        <h3 className="text-xl font-semibold">Direktorat Jendral Peraturan Perundang-undangan (SISINFO DIVISION)</h3>
                        <h4 className="font-medium text-primary/80">Front-End Developer | 2025 - Now</h4>
                        <p className="mt-2 text-muted-foreground">
                           Assigned to develop the E-Harmonization application to monitor staff performance through a mobile application, using Flutter as the main development framework.
                        </p>
                    </div>
                     <div className="relative">
                        <div className="absolute -left-9 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                            <Briefcase className="h-4 w-4" />
                        </div>
                        <h3 className="text-xl font-semibold">Aqua Breeding Tech</h3>
                        <h4 className="font-medium text-primary/80">Full Stack Developer | 2023 - 2024</h4>
                        <p className="mt-2 text-muted-foreground">
                            Served as a Front-End Developer, creating a mobile app with Flutter for a freshwater fish farming research project. Also handled Full-Stack responsibilities, working with Python Flask, PyMongo, and MongoDB on the back-end, including API debugging, testing, and database schema adjustments.
                        </p>
                    </div>
                </div>
            </div>
          </div>
        </section>
        
        <section id="education" className="w-full py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Education</h2>
            </div>
             <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-full before:w-0.5 before:bg-border">
                <div className="grid gap-10">
                    <div className="relative">
                        <div className="absolute -left-9 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                            <GraduationCap className="h-4 w-4" />
                        </div>
                        <h3 className="text-xl font-semibold">Universitas Negeri Jakarta</h3>
                        <h4 className="font-medium text-primary/80">Computer Science | 2022 - Now</h4>
                    </div>
                     <div className="relative">
                        <div className="absolute -left-9 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                            <GraduationCap className="h-4 w-4" />
                        </div>
                        <h3 className="text-xl font-semibold">SMAN 72 Jakarta</h3>
                        <h4 className="font-medium text-primary/80">2019 - 2022</h4>
                    </div>
                </div>
            </div>
          </div>
        </section>

        <section id="skills" className="w-full py-20 md:py-32 bg-secondary/50">
           <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Computer Skills</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                A collection of technologies and tools I'm proficient with.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill) => (
                 <div key={skill} className="flex items-center gap-2 rounded-lg bg-background p-3 shadow-sm">
                    <Code className="h-5 w-5 text-primary" />
                    <span className="font-medium">{skill}</span>
                 </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6 text-center">
             <div className="space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get in Touch</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                I'm currently open to new opportunities. Feel free to reach out.
              </p>
            </div>
            <div className="flex justify-center gap-4">
              <Button asChild variant="outline" size="icon">
                <Link href="#" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="icon">
                <Link href="#" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
               <Button asChild variant="outline" size="icon">
                <Link href="mailto:aqilaswangga1@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
