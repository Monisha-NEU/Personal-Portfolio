import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FileText, Github, Linkedin, Mail, Database, Server, BarChart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ProjectCard } from "@/components/project-card"
import { ExperienceItem } from "@/components/experience-item"
import { EducationItem } from "@/components/education-item"
import { ThemeToggle } from "@/components/theme-toggle"
import { ResumeSection } from "@/components/resume-section"
import { SkillItem } from "@/components/skill-item"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="inline-block font-bold text-primary">Portfolio</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <Link href="#about" className="px-3 py-2 text-sm font-medium nav-link">
                About
              </Link>
              <Link href="#skills" className="px-3 py-2 text-sm font-medium nav-link">
                Skills
              </Link>
              <Link href="#experience" className="px-3 py-2 text-sm font-medium nav-link">
                Experience
              </Link>
              <Link href="#resume" className="px-3 py-2 text-sm font-medium nav-link">
                Resume
              </Link>
              <Link href="#projects" className="px-3 py-2 text-sm font-medium nav-link">
                Projects
              </Link>
              <Link href="#contact" className="px-3 py-2 text-sm font-medium nav-link">
                Contact
              </Link>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section - Adjusted padding to fit better on initial load */}
        <section className="w-full py-8 md:py-16 lg:py-20 xl:py-24 relative overflow-hidden">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_350px] lg:gap-12 xl:grid-cols-[1fr_450px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Hi, I'm <span className="text-primary font-semibold">Monisha Mohan</span>
                  </h1>
                  <h2 className="text-xl font-medium text-muted-foreground sm:text-2xl">Data Engineer</h2>
                  <div className="section-divider"></div>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Specializing in enterprise data architecture, ETL pipeline development, and advanced analytics
                    solutions for data-driven organizations.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#contact">
                    <Button className="gradient-btn text-white relative overflow-hidden group">
                      <span className="relative z-10">Get in Touch</span>
                    </Button>
                  </Link>
                  <Link href="#projects">
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary/10 animated-border"
                    >
                      View Projects
                    </Button>
                  </Link>
                  <Link href="#resume" className="scroll-smooth">
                    <Button variant="ghost" className="text-primary hover:bg-primary/5">
                      <FileText className="mr-2 h-4 w-4" />
                      Resume
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="w-[280px] h-[280px] md:w-[320px] md:h-[320px] relative">
                  <Image
                    src="/images/profile.jpeg"
                    width={400}
                    height={400}
                    alt="Profile photo of Monisha Mohan"
                    className="w-full h-full aspect-square overflow-hidden rounded-full object-cover border-4 border-white/20 object-center relative animate-float"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 grid-background">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-primary">About Me</h2>
              <div className="section-divider"></div>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                I'm a passionate Data Engineer with 2+ years of work experience and an aspiring Data Scientist and Sofware Developer with expertise in designing and
                implementing data infrastructure. With a strong foundation in computer science and a deep understanding
                of data systems, I specialize in creating efficient ETL pipelines, data warehousing solutions, and
                analytics platforms that help organizations make data-driven decisions. I love building AI-driven
                solutions to address complex problems.
              </p>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                My core technical skills include Python, SQL, AWS/GCP/Azure cloud services, and various data processing
                frameworks. I'm passionate about solving complex data problems and continuously learning about emerging
                technologies in the data space.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full max-w-4xl">
                <Card className="glass-card">
                  <CardHeader className="pb-2">
                    <Database className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-primary">Data Engineering</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Building scalable data pipelines and ETL processes to transform raw data into valuable insights.
                    </p>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardHeader className="pb-2">
                    <Server className="h-8 w-8 text-secondary mb-2" />
                    <CardTitle className="text-primary">Cloud Infrastructure</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Designing and implementing cloud-based data solutions on AWS, GCP, and Azure.
                    </p>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardHeader className="pb-2">
                    <BarChart className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-primary">Data Analytics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Transforming data into actionable insights through advanced analytics and visualization.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Rest of the sections remain unchanged */}
        {/* Skills Section */}
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-primary">Skills</h2>
              <div className="section-divider"></div>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mb-6">
                My technical expertise and proficiency in various data engineering technologies.
              </p>
            </div>

            <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-2">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-primary">Programming Languages</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap">
                  <SkillItem name="Python" color="primary" />
                  <SkillItem name="SQL" color="neutral" />
                  <SkillItem name="Java" color="secondary" />
                  <SkillItem name="R" color="accent" />
                  <SkillItem name="JavaScript" color="neutral" />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-primary">Big Data & Analytics Technologies</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap">
                  <SkillItem name="Apache Spark" color="secondary" />
                  <SkillItem name="Hadoop Ecosystem" color="neutral" />
                  <SkillItem name="Kafka" color="accent" />
                  <SkillItem name="Airflow" color="primary" />
                  <SkillItem name="Databricks" color="neutral" />
                  <SkillItem name="Snowflake" color="secondary" />
                  <SkillItem name="Hive" color="accent" />
                  <SkillItem name="NiFi" color="neutral" />
                  <SkillItem name="PowerBI/Tableau" color="primary" />
                  <SkillItem name="Excel" color="secondary" />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-primary">Cloud Platforms</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap">
                  <SkillItem name="AWS" color="primary" />
                  <SkillItem name="Google Cloud Platform" color="neutral" />
                  <SkillItem name="Azure" color="secondary" />
                  <SkillItem name="Kubernetes" color="accent" />
                  <SkillItem name="Docker" color="neutral" />
                  <SkillItem name="Terraform" color="primary" />
                  <SkillItem name="CI/CD" color="secondary" />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-primary">Web Technologies</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap">
                  <SkillItem name="ReactJS" color="secondary" />
                  <SkillItem name="NodeJS" color="primary" />
                  <SkillItem name="TypeScript" color="secondary" />
                  <SkillItem name="HTML" color="primary" />
                  <SkillItem name="Tailwind CSS" color="secondary" />
                  <SkillItem name="Redux" color="primary" />
                  <SkillItem name="Flask" color="primary" />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-primary">Databases</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap">
                  <SkillItem name="MySQL" color="secondary" />
                  <SkillItem name="NoSQL" color="primary" />
                  <SkillItem name="Redis" color="secondary" />
                  <SkillItem name="DynamoDB" color="primary" />
                  <SkillItem name="OracleDB" color="secondary" />
                  <SkillItem name="MongoDB" color="primary" />
                </CardContent>
              </Card>
            </div>

            <div className="mx-auto max-w-4xl mt-10">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-primary">Additional Skills</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap">
                  {[
                    "Git",
                    "DVC",
                    "Machine Learning",
                    "Data Modeling",
                    "ETL Design",
                    "GraphQL",
                    "REST APIs",
                    "Agile/Scrum",
                    "Performance Tuning",
                    "Data Quality",
                    "Data Security",
                    "Microservices",
                    "Real-time Processing",
                    "Data Visualization",
                    "Database Design",
                    "Data Integration",
                    "Data Pipelines",
                  ].map((skill, index) => {
                    const colors = ["primary", "secondary", "neutral", "accent"] as const
                    return <SkillItem key={skill} name={skill} color={colors[index % colors.length]} />
                  })}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="w-full py-12 md:py-24 lg:py-32 grid-background">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-primary">Education</h2>
              <div className="section-divider"></div>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mb-6">
                My academic journey that built the foundation for my career.
              </p>
            </div>
            <div className="mx-auto grid max-w-4xl gap-6 lg:gap-8">
              <EducationItem
                degree="Master of Science in Computer Software Engineering"
                institution="Northeastern University"
                duration="Sept 2021 - May 2025"
                description={[
                  "Specialized in Software Development, Data Science and GenAI",
                  "Relevant coursework: Database Management, Web Design, Data Scructure & Algorithms, Object-Oriented Design, Big Data Systems, Data Science, GenAI,",
                  "NU-AI Club member",
                  "Adobe Student Ambassador",
                  "Instructional Assistant",
                ]}
              />
              <EducationItem
                degree="Bachelor of Engineering in Electronics and Telecommunications"
                institution="Ramaiah Institute Of Technology"
                duration="Aug 2017 - Jun 2021"
                description={[
                  "Dean's Award: Best Major project",
                  "Publication: RFID Based library management system, IEEE Connect Conference",
                ]}
              />
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-primary">Experience</h2>
              <div className="section-divider"></div>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mb-6">
                My professional journey in the world of data engineering and analytics.
              </p>
            </div>
            <div className="mx-auto grid max-w-3xl gap-6 lg:gap-8">
              <ExperienceItem
                title="Data Engineer"
                company="Ernst & Young"
                duration="Oct 2021 - Aug 2023"
                description={[
                  "Designed and implemented CI/CD pipelines to streamline data migration and testing processes.",
                  "Automated ADF pipelines for efficient data extraction, processing, and ingestion into destination tables (SSMS), improving efficiency by 80%.",
                  "Developed Databricks Notebooks using PySpark and SQL scripts within Synapse Analytics for seamless data processing.",
                  "Enhanced data ingestion with automation and SLA-driven scheduling, reducing errors and improving reliability.",
                  "Built Power BI dashboards to track and visualize data refresh progress for each sprint, enhancing monitoring and decision-making.",
                ]}
                technologies={["Python", "Spark", "ADF", "Synapse", "SQL Server", "Databricks"]}
              />
              <ExperienceItem
                title="Data Engineer"
                company="Wipro"
                duration="Jul 2021 - Oct 2021"
                description={[
                  "Developed and optimized Oracle database solutions using PL/SQL, Forms, and Reports, improving query execution time by 30% and enhancing system efficiency.",
                  "Designed and maintained database workflows, implementing stored procedures, triggers, and performance tuning.",
                  "Reduced report generation time by 40% and streamlined data processing for 100K+ records.",
                  "Collaborated with cross-functional teams to ensure data integrity and system performance.",
                ]}
                technologies={["Python", "SQL", "Hadoop", "GCP", "BigQuery", "dbt"]}
              />
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <ResumeSection />

        {/* Projects Section */}
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 grid-background">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-primary">
                Featured Projects
              </h2>
              <div className="section-divider"></div>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mb-6">
                A selection of my recent work in data engineering and analytics.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Fine-Tuned DeepSeek & Llama"
                description="Fine-tuned DeepSeek-R1 and LLaMA-3.2 models using LoRA and PEFT to efficiently train quantized models for text-to-SQL generation. Built a Gradio interface to generate SQL queries with explanations from natural language inputs and database schemas, evaluating models on execution accuracy and syntax correctness."
                tags={["Python", "LoRA", "PyTorch"]}
                image="/images/projects/image1.png"
                sourceLink="https://github.com/Monisha-NEU/Fine-Tune-Deepseek-Llama"
              />
              <ProjectCard
                title="Trouvaille - Travel Website"
                description="Developed a full-stack travel web application using the MERN stack, featuring accommodations, booking, reviews, and a blog. Designed an optimized MongoDB database and built a responsive front end with React, integrating REST APIs for seamless user interactions."
                tags={["React", "JavaScript", "HTML", "CSS", "MongoDB"]}
                image="/images/projects/image2.png"
                sourceLink="https://trouvaille-beige.vercel.app/home"
              />
              <ProjectCard
                title="Trading Platform"
                description="Developed a trading platform with user authentication, cryptocurrency management, wallet operations, and trading features. Integrated a Spring Boot backend with MySQL and Spring Security for security, while building a React-based front end with real-time crypto data and payment processing using CoinGecko, Gemini, Razorpay, and Stripe APIs."
                tags={["Java", "MySQL", "Spring Boot", "React", "Tailwind CSS"]}
                image="/images/projects/image3.png"
                sourceLink="https://github.com/Monisha-NEU/Trading-Platform"
              />
            </div>
            <div className="mt-12 flex justify-center">
              <Link href="/projects">
                <Button variant="outline" className="group animated-border">
                  View All Projects
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
                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-primary">Get in Touch</h2>
              <div className="section-divider"></div>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mb-6">
                Have a project in mind or want to discuss opportunities? Feel free to reach out!
              </p>
            </div>
            <div className="mx-auto grid max-w-4xl gap-10 lg:grid-cols-2">
              <div>
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-primary">Contact Form</CardTitle>
                    <CardDescription>
                      Fill out the form below and I'll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="grid gap-4">
                      <div className="grid gap-2">
                        <label htmlFor="name">Name</label>
                        <Input id="name" placeholder="Your name" className="bg-background/50 border-white/20" />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="email">Email</label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Your email"
                          className="bg-background/50 border-white/20"
                        />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="message">Message</label>
                        <Textarea
                          id="message"
                          placeholder="Your message"
                          className="min-h-[150px] bg-background/50 border-white/20"
                        />
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full gradient-btn">Send Message</Button>
                  </CardFooter>
                </Card>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-primary">Connect With Me</CardTitle>
                    <CardDescription>Reach out through social media or email.</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-6">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-full bg-primary/10">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Email</p>
                        <Link
                          href="mailto:m.mo@northeastern.edu"
                          className="text-sm text-muted-foreground hover:text-primary"
                        >
                          m.mo@northeastern.edu
                        </Link>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-full bg-secondary/10">
                        <Linkedin className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">LinkedIn</p>
                        <Link
                          href="https://www.linkedin.com/in/monisham29/"
                          className="text-sm text-muted-foreground hover:text-primary"
                        >
                          linkedin.com/in/monisham29/
                        </Link>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-full bg-primary/10">
                        <Github className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">GitHub</p>
                        <Link
                          href="https://github.com/Monisha-NEU"
                          className="text-sm text-muted-foreground hover:text-primary"
                        >
                          github.com/Monisha-NEU
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-white/10 py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Monisha Mohan. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/Monisha-NEU"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/monisham29/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-secondary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

