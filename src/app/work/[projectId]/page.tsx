'use client';

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/animated-section';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function ProjectDetailPage() {
  const router = useRouter();
  const params = useParams();
  const projectId = params.projectId;

  const projects = [
    {
      id: 'e-harmonization-app',
      title: 'E-Harmonization App',
      description:
        'A comprehensive mobile application developed for the Directorate General of Legislation to monitor staff performance. The app was built using Flutter, focusing on a clean user interface and real-time data synchronization.',
      longDescription:
        'This project involved the full development cycle, from requirement gathering to deployment. I was responsible for designing and implementing the front-end using Flutter and Dart. The application helps in tracking daily tasks, reporting, and overall performance management of the staff, thereby increasing transparency and efficiency within the department.',
      imageUrl:
        PlaceHolderImages.find((p) => p.id === 'project-1')?.imageUrl ||
        'https://picsum.photos/seed/project1/1200/800',
      imageHint: 'mobile application dashboard',
      technologies: ['Flutter', 'Dart', 'Firebase'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      id: 'aqua-breeding-tech-app',
      title: 'Aqua Breeding Tech App',
      description:
        'A full-stack solution for a freshwater fish farming research project. It includes a mobile app for data collection and a backend for data processing and analysis.',
      longDescription:
        "In this project, I handled both front-end and back-end development. The mobile application, built with Flutter, allows researchers to input data directly from the field. The back-end, powered by Python (Flask) and MongoDB, processes this data, providing valuable insights through a web-based dashboard. I was also involved in API debugging, database schema design, and ensuring data integrity.",
      imageUrl:
        PlaceHolderImages.find((p) => p.id === 'project-2')?.imageUrl ||
        'https://picsum.photos/seed/project2/1200/800',
      imageHint: 'data analytics dashboard',
      technologies: ['Flutter', 'Python', 'Flask', 'MongoDB', 'PyMongo'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      id: 'in-house-flutter-app',
      title: 'PT. Indi Teknokreasi App',
      description:
        'Developed a scalable in-house Flutter application applying Clean Architecture and BLoC state management for improved performance and maintainability.',
      longDescription:
        "The primary goal was to create a robust and scalable foundation for the company's future mobile applications. By implementing Clean Architecture, we separated the business logic from the UI and data layers, making the codebase easier to test and maintain. The BLoC pattern was used for predictable and efficient state management, which is crucial for complex applications.",
      imageUrl:
        PlaceHolderImages.find((p) => p.id === 'project-3')?.imageUrl ||
        'https://picsum.photos/seed/project3/1200/800',
      imageHint: 'code structure diagram',
      technologies: ['Flutter', 'Dart', 'BLoC', 'Clean Architecture'],
      githubUrl: '#',
      liveUrl: '#',
    },
     {
      id: 'portfolio-website',
      title: 'Personal Portfolio',
      description: 'A responsive and animated personal portfolio to showcase my skills and projects.',
      longDescription:
        'This website was built using Next.js, React, and Tailwind CSS. I focused on creating a clean, modern design with smooth animations to provide a pleasant user experience. It is fully responsive and showcases my journey, skills, and work in a structured manner. This project itself is a testament to my web development abilities.',
      imageUrl:
        PlaceHolderImages.find((p) => p.id === 'project-4')?.imageUrl ||
        'https://picsum.photos/seed/project4/1200/800',
      imageHint: 'website hero section',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
      githubUrl: '#',
      liveUrl: '#',
    },
  ];

  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 text-center">
        <h1 className="text-4xl font-bold">Project Not Found</h1>
        <p className="mt-4 text-muted-foreground">
          The project you are looking for does not exist.
        </p>
        <Button asChild className="mt-8">
          <Link href="/work">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to My Work
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <AnimatedSection className="mb-8">
        <Button asChild variant="outline">
          <Link href="/work">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to My Work
          </Link>
        </Button>
      </AnimatedSection>

      <Card>
        <CardHeader>
            <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
                <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover"
                data-ai-hint={project.imageHint}
                />
            </div>
        </CardHeader>
        <CardContent className="p-6 md:p-8">
            <AnimatedSection>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                    {project.title}
                </h1>
            </AnimatedSection>
            
            <AnimatedSection>
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                        {tech}
                    </Badge>
                    ))}
                </div>
            </AnimatedSection>
            
            <AnimatedSection>
                <p className="text-muted-foreground md:text-lg mb-6">
                    {project.longDescription}
                </p>
            </AnimatedSection>
            
            <AnimatedSection>
                <div className="flex gap-4">
                    <Button asChild disabled={project.githubUrl === '#'}>
                        <Link href={project.githubUrl} target="_blank">
                            <Github className="mr-2 h-4 w-4" />
                            View on GitHub
                        </Link>
                    </Button>
                    <Button asChild variant="outline" disabled={project.liveUrl === '#'}>
                        <Link href={project.liveUrl} target="_blank">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                        </Link>
                    </Button>
                </div>
            </AnimatedSection>
        </CardContent>
      </Card>

    </div>
  );
}
