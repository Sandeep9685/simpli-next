import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Clock, Users, Award, CheckCircle, Play, BookOpen, Globe } from "lucide-react"

export default function CourseLandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">LearnTech</div>
          <nav className="hidden md:flex space-x-6">
            <a href="https://www.simplilearn.com/courses" className="text-gray-600 hover:text-blue-600">
              Courses
            </a>
            <a href="https://www.simplilearn.com/about-us" target="_blank" className="text-gray-600 hover:text-blue-600">
              About
            </a>
            <a href="https://www.simplilearn.com/contact-us" className="text-gray-600 hover:text-blue-600">
              Contact
            </a>
          </nav>
          <div className="flex space-x-2">
            <Button variant="outline" asChild>
              <a href="/login">Sign In</a>
            </Button>
            <Button asChild>
              <a href="/signup">Sign Up</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="mb-4 bg-yellow-500 text-black">Most Popular</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Data Analytics Certification Training Course</h1>
              <p className="text-xl mb-6 text-blue-100">
                Master data visualization, analytics, and business intelligence with hands-on projects and expert
                guidance
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 mr-1" />
                  <span>4.8 (2,847 reviews)</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-1" />
                  <span>15,000+ enrolled</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-1" />
                  <span>40 hours</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400">
                  Enroll Now - $299
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <img src="/placeholder.svg?height=400&width=600" alt="Course preview" className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose This Course?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Award className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>Industry Certification</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Get certified with industry-recognized credentials that boost your career prospects</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>Hands-on Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Work on real-world projects and build a portfolio that showcases your skills</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Globe className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>Lifetime Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Access course materials, updates, and community support for life</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Course Curriculum</h2>
          <Tabs defaultValue="overview" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Course Overview</CardTitle>
                  <CardDescription>What you'll learn in this comprehensive program</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Skills You'll Gain:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Data Visualization
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Business Intelligence
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Dashboard Creation
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Data Analysis
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Course Features:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          40+ Hours of Content
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Live Sessions
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Expert Mentorship
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Career Support
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="curriculum" className="mt-8">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="module1">
                  <AccordionTrigger>Module 1: Introduction to Data Analytics</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 ml-4">
                      <li>• Understanding Data Analytics Fundamentals</li>
                      <li>• Types of Data Analysis</li>
                      <li>• Industry Applications</li>
                      <li>• Setting up Your Environment</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="module2">
                  <AccordionTrigger>Module 2: Data Visualization Basics</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 ml-4">
                      <li>• Chart Types and When to Use Them</li>
                      <li>• Design Principles</li>
                      <li>• Color Theory in Visualization</li>
                      <li>• Interactive Elements</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="module3">
                  <AccordionTrigger>Module 3: Advanced Analytics</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 ml-4">
                      <li>• Statistical Analysis</li>
                      <li>• Predictive Modeling</li>
                      <li>• Time Series Analysis</li>
                      <li>• Performance Optimization</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
            <TabsContent value="projects" className="mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Sales Dashboard Project</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Build a comprehensive sales dashboard with real-time data visualization and KPI tracking.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Customer Analytics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Analyze customer behavior patterns and create segmentation models for targeted marketing.</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Your Instructor</h2>
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <Avatar className="w-24 h-24">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">John Doe</h3>
                  <p className="text-blue-600 font-semibold mb-2">Senior Data Analyst</p>
                  <p className="text-gray-600 mb-4">
                    10+ years of experience in data analytics and business intelligence. Former consultant at top tech
                    companies with expertise in enterprise solutions.
                  </p>
                  <div className="flex justify-center md:justify-start">
                    <Badge variant="secondary">Expert Instructor</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "This course completely transformed my career. The hands-on approach and real-world projects gave me
                    the confidence to excel in my new role."
                  </p>
                  <div className="flex items-center">
                    <Avatar className="w-10 h-10 mr-3">
                      <AvatarFallback>S{i}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">Student {i}</p>
                      <p className="text-sm text-gray-500">Data Analyst</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Start Your Journey?</h2>
          <div className="max-w-md mx-auto">
            <Card className="bg-white text-gray-900">
              <CardHeader>
                <CardTitle className="text-2xl">Complete Course Package</CardTitle>
                <CardDescription>Everything you need to succeed</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-4">$299</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    40+ Hours of Content
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Lifetime Access
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Certificate of Completion
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Career Support
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Enroll Now</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="max-w-2xl mx-auto">
            <AccordionItem value="faq1">
              <AccordionTrigger>How long do I have access to the course?</AccordionTrigger>
              <AccordionContent>
                You have lifetime access to all course materials, including future updates and new content additions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq2">
              <AccordionTrigger>Do I need prior experience?</AccordionTrigger>
              <AccordionContent>
                No prior experience is required. This course is designed for beginners and will take you from basics to
                advanced concepts.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq3">
              <AccordionTrigger>Is there a certificate upon completion?</AccordionTrigger>
              <AccordionContent>
                Yes, you'll receive a certificate of completion that you can add to your LinkedIn profile and resume.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq4">
              <AccordionTrigger>What if I'm not satisfied with the course?</AccordionTrigger>
              <AccordionContent>
                We offer a 30-day money-back guarantee. If you're not satisfied, you can request a full refund within 30
                days of purchase.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">LearnTech</h3>
              <p className="text-gray-400">Empowering careers through quality education and certification programs.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Courses</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Data Analytics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Digital Marketing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 LearnTech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
