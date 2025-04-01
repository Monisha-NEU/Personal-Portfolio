"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Download, Eye } from "lucide-react"
import Link from "next/link"

export function ResumeSection() {
  const [isOpen, setIsOpen] = useState(false)
  // Path to your pre-uploaded resume
  const resumePath = "/resume/your-resume.pdf"

  return (
    <section id="resume" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-primary">Resume</h2>
          <div className="section-divider"></div>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            View or download my resume to learn more about my skills, experience, and qualifications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 animated-border">
                  <Eye className="mr-2 h-4 w-4" />
                  Preview Resume
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-auto glass-card">
                <DialogHeader>
                  <DialogTitle className="text-primary">Professional Resume</DialogTitle>
                  <DialogDescription>Monisha Mohan - Data Engineer</DialogDescription>
                </DialogHeader>
                <div className="mt-4 h-[60vh]">
                  <object
                    data={resumePath}
                    type="application/pdf"
                    width="100%"
                    height="100%"
                    className="border border-border rounded-md"
                  >
                    <p>
                      Your browser does not support PDFs.
                      <a href={resumePath} target="_blank" rel="noopener noreferrer">
                        Click here to view the PDF
                      </a>
                    </p>
                  </object>
                </div>
                <div className="mt-6 flex justify-end">
                  <Button onClick={() => setIsOpen(false)} className="mr-2" variant="outline">
                    Close
                  </Button>
                  <Link href={resumePath} download>
                    <Button className="gradient-btn">
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </Button>
                  </Link>
                </div>
              </DialogContent>
            </Dialog>

            <Link href={resumePath} download>
              <Button className="gradient-btn">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

