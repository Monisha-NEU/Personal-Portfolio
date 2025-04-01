import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import Link from "next/link"

export default function ProjectsPage() {
  // Updated projects array with real image paths
  const projects = [
    {
      title: "Fine-Tuned DeepSeek & Llama",
      description:
        "Fine-tuned DeepSeek-R1 and LLaMA-3.2 models using LoRA and PEFT to efficiently train quantized models for text-to-SQL generation. Built a Gradio interface to generate SQL queries with explanations from natural language inputs and database schemas, evaluating models on execution accuracy and syntax correctness.",
      tags: ["Python", "LoRA", "PyTorch"],
      image: "/images/projects/image1.png",
      sourceLink: "https://github.com/Monisha-NEU/Fine-Tune-Deepseek-Llama",
    },
    {
      title: "Trouvaille - Travel Website",
      description:
        "Developed a full-stack travel web application using the MERN stack, featuring accommodations, booking, reviews, and a blog. Designed an optimized MongoDB database and built a responsive front end with React, integrating REST APIs for seamless user interactions.",
      tags: ["React", "JavaScript", "HTML", "CSS", "MongoDB"],
      image: "/images/projects/image2.png",
      sourceLink: "https://trouvaille-beige.vercel.app/home",
    },
    {
      title: "Trading Platform",
      description:
        "Developed a trading platform with user authentication, cryptocurrency management, wallet operations, and trading features. Integrated a Spring Boot backend with MySQL and Spring Security for security, while building a React-based front end with real-time crypto data and payment processing using CoinGecko, Gemini, Razorpay, and Stripe APIs.",
      tags: ["Java", "MySQL", "Spring Boot", "React", "Tailwind CSS"],
      image: "/images/projects/image3.png",
      sourceLink: "https://github.com/Monisha-NEU/Trading-Platform",
    },
    {
      title: "BERT-Based News Classification with SVC",
      description:
        "Fine-tuned the BERT-base-uncased model on the AG News dataset to classify news articles into four categories. Extracted vector embeddings to train a Linear SVC, optimizing tokenization and attention mechanisms to achieve 96.40% train accuracy and 89.40% test accuracy.",
      tags: ["Python", "PyTorch", "SVC"],
      image: "/images/projects/image4.png",
      sourceLink: "https://github.com/Monisha-NEU/BERT-BASED-ENCODER",
    },
    {
      title: "Forest Fire Predictor",
      description:
        "Conducted exploratory data analysis using Seaborn and Matplotlib to identify patterns and key features. Applied feature engineering techniques and trained multiple regression models, achieving R-squared scores between 87% and 98.4% for improved accuracy and generalization.",
      tags: ["Python", "NumPy", "Pandas", "Matplotlib", "Scikit-Learn"],
      image: "/images/projects/image5.png",
      sourceLink: "https://github.com/Monisha-NEU/Algerian-Forest-Fire-prediction",
    },
    {
      title: "Face Recognition System",
      description:
        "Developed a face recognition system using Keras for deep learning and OpenCV for real-time image processing. Trained CNNs on a custom dataset to achieve high accuracy in face detection and recognition, ensuring efficient performance in dynamic environments.",
      tags: ["Python", "OpenCV", "Keras", "CNN"],
      image: "/images/projects/image6.png",
      sourceLink: "https://github.com/Monisha-NEU/Face-Recognition-",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="inline-block font-bold">Portfolio</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <Link href="/#about" className="px-3 py-2 text-sm font-medium nav-link">
                About
              </Link>
              <Link href="/#experience" className="px-3 py-2 text-sm font-medium nav-link">
                Experience
              </Link>
              <Link href="/#projects" className="px-3 py-2 text-sm font-medium nav-link">
                Projects
              </Link>
              <Link href="/#contact" className="px-3 py-2 text-sm font-medium nav-link">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h1 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-primary">All Projects</h1>
              <div className="section-divider"></div>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mb-6">
                A comprehensive showcase of my work in data engineering, analytics, and machine learning.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  image={project.image}
                  sourceLink={project.sourceLink}
                />
              ))}
            </div>
            <div className="mt-12 flex justify-center">
              <Link href="/">
                <Button variant="outline" className="group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
                  >
                    <path d="m12 19-7-7 7-7" />
                    <path d="M19 12H5" />
                  </svg>
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

