import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram, Mail, Users, Award, Sparkles } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image src="/logo.jpg" alt="Minervy Logo" width={70} height={70} className="rounded-full" />
            <span className="text-2xl font-bold text-gray-900">Minervy</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="text-gray-600 hover:text-pink-600 transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-pink-600 transition-colors">
              About
            </Link>
          </nav>
          <Button className="bg-pink-600 hover:bg-pink-700 text-white">Get Started</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-to-br from-pink-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to <span className="text-pink-600">Minervy</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover excellence in every detail. We bring creativity, innovation, and passion to everything we do,
              creating memorable experiences that inspire and delight.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3">
                Explore Our Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-pink-600 text-pink-600 hover:bg-pink-50 px-8 py-3 bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-pink-600">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-pink-600">1000+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-pink-600">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-pink-600">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Minervy</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Minervy, we believe in the power of creativity and innovation. Our team is dedicated to delivering
              exceptional results that exceed expectations and create lasting impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Creative Excellence</h3>
                <p className="text-gray-600">
                  We bring fresh perspectives and innovative solutions to every project, ensuring unique and memorable
                  results.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Client-Focused</h3>
                <p className="text-gray-600">
                  Your success is our priority. We work closely with you to understand your vision and bring it to life.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Driven</h3>
                <p className="text-gray-600">
                  We maintain the highest standards in everything we do, delivering quality that stands the test of
                  time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="bg-white p-1 rounded-full">
                <Image src="/logo.jpg" alt="Minervy Logo" width={40} height={40} className="rounded-full" />
              </div>
              <span className="text-xl font-bold">Minervy</span>
            </div>
            <div className="flex items-center space-x-6">
              <Link
                href="https://www.instagram.com/theminervy"
                target="_blank"
                className="text-gray-400 hover:text-pink-400 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </Link>
              <Link href="mailto:hello@minervy.com" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Mail className="w-6 h-6" />
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Minervy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}