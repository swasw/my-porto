'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/animated-section';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function WorkPage() {
  const projects = [
    {
      id: 'e-harmonization-app',
      title: 'E-Harmonisasi App',
      description:
        'A mobile application to monitor staff performance, developed for the Directorate General of Legislation.',
      imageUrl:"/images/e_harmon_thumbnail.png",
      imageHint: 'mobile application interface',
    },
    {
      id: 'aqua-breeding-tech-app',
      title: 'Aqua Breeding App',
      description:
        'A mobile app for a freshwater fish farming research project, with a backend using Python Flask and MongoDB.',
      imageUrl:"/images/aqua_thumbnail.png",
      imageHint: 'fish farming data',
    },
    {
      id: 'in-house-flutter-app',
      title: 'Talent Force App',
      description:
        'A scalable Flutter application built from scratch using Clean Architecture and BLoC.',
      imageUrl:"/images/talentforce_thumbnail.png",
      imageHint: 'clean architecture diagram',
    },
    // {
    //   id: 'portfolio-website',
    //   title: 'Personal Portfolio',
    //   description: 'The very website you are looking at right now.',
    //   imageUrl:
    //     PlaceHolderImages.find((p) => p.id === 'project-4')?.imageUrl ||
    //     'https://picsum.photos/seed/project4/600/400',
    //   imageHint: 'portfolio website screenshot',
    // },
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <AnimatedSection className="mb-8">
        <Button asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </AnimatedSection>

      <AnimatedSection className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          My Work
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
          Here is a selection of projects I've worked on. Click on any project
          to see more details.
        </p>
      </AnimatedSection>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <AnimatedSection key={project.id}>
            <Link href={`/work/${project.id}`} legacyBehavior passHref>
              <a className="block group">
                <Card className="overflow-hidden h-full flex flex-col">
                  <CardHeader className="p-0">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                        data-ai-hint={project.imageHint}
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 flex-grow">
                    <h3 className="text-xl font-bold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button className="w-full">
                      View Details
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </a>
            </Link>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
