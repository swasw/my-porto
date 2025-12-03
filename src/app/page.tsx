import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section id="hero" className="w-full py-20 md:py-32 lg:py-40 bg-secondary/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                    Your Name
                  </h1>
                  <h2 className="text-2xl font-medium text-primary/80">
                    Frontend Developer & UI/UX Enthusiast
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    I build beautiful, responsive, and user-friendly web applications. Passionate about creating seamless digital experiences.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="#contact">Contact Me</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="#projects">View My Work</Link>
                  </Button>
                </div>
              </div>
              <Image
                src="https://picsum.photos/seed/1/600/600"
                width="600"
                height="600"
                alt="Your Name"
                className="mx-auto aspect-square overflow-hidden rounded-full object-cover"
                data-ai-hint="profile picture"
              />
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
                 <p className="max-w-[600px] text-muted-foreground md:text-lg">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
               <Image
                src="https://picsum.photos/seed/2/600/400"
                width="600"
                height="400"
                alt="About me"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                data-ai-hint="person working"
              />
            </div>
          </div>
        </section>

        <section id="projects" className="w-full py-20 md:py-32 bg-secondary/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">My Projects</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                Here are some of the projects I've worked on.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <CardHeader>
                    <Image
                      src={`https://picsum.photos/seed/project${i}/600/400`}
                      width="600"
                      height="400"
                      alt={`Project ${i}`}
                      className="mb-4 aspect-video overflow-hidden rounded-t-lg object-cover"
                      data-ai-hint="website technology"
                    />
                    <CardTitle>Project {i}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      A brief description of the project goes here. Highlighting the technologies used and the problems solved.
                    </p>
                    <Button asChild variant="outline">
                      <Link href="#">View Project</Link>
                    </Button>
                  </CardContent>
                </Card>
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
                <Link href="mailto:your-email@example.com" aria-label="Email">
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
