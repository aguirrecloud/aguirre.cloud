import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Phone, Mail, Heart, Users, BookOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">St. Matthäus Gemeinde</h1>
                <p className="text-sm text-gray-600">Evangelische Kirche</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="#home" className="text-gray-700 hover:text-blue-600 font-medium">
                Startseite
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-blue-600 font-medium">
                Über uns
              </Link>
              <Link href="#services" className="text-gray-700 hover:text-blue-600 font-medium">
                Gottesdienste
              </Link>
              <Link href="#events" className="text-gray-700 hover:text-blue-600 font-medium">
                Veranstaltungen
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">
                Kontakt
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Herzlich Willkommen</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Gemeinsam im Glauben wachsen</h2>
              <p className="text-xl text-gray-600 mb-8">
                Wir sind eine lebendige Gemeinde, die Menschen jeden Alters einlädt, Gottes Liebe zu erfahren und
                gemeinsam den christlichen Glauben zu leben.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Calendar className="w-5 h-5 mr-2" />
                  Nächster Gottesdienst
                </Button>
                <Button variant="outline" size="lg">
                  Mehr erfahren
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Kirchengebäude"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Gottesdienst</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">Jeden Sonntag</p>
                <p className="font-semibold text-lg">10:00 Uhr</p>
                <p className="text-sm text-gray-500 mt-2">Kinderbetreuung verfügbar</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Gemeinschaft</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">Hauskreise</p>
                <p className="font-semibold text-lg">Mittwochs 19:30</p>
                <p className="text-sm text-gray-500 mt-2">In verschiedenen Stadtteilen</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Bibelstunde</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">Jeden Donnerstag</p>
                <p className="font-semibold text-lg">19:00 Uhr</p>
                <p className="text-sm text-gray-500 mt-2">Gemeinsam die Bibel entdecken</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Über unsere Gemeinde</h2>
              <p className="text-xl text-gray-600">Seit über 150 Jahren ein Ort des Glaubens und der Gemeinschaft</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Unsere Geschichte</h3>
                <p className="text-gray-600 mb-4">
                  Die St. Matthäus Gemeinde wurde 1870 gegründet und ist seitdem ein wichtiger Teil unserer
                  Stadtgemeinschaft. Wir sind eine evangelische Gemeinde, die sich der Verkündigung des Evangeliums und
                  der praktischen Nächstenliebe verschrieben hat.
                </p>
                <p className="text-gray-600 mb-6">
                  Unsere Gemeinde ist ein Ort, wo Menschen jeden Alters und jeder Lebenssituation willkommen sind. Wir
                  glauben an die transformierende Kraft des Evangeliums und möchten Menschen dabei helfen, eine
                  persönliche Beziehung zu Jesus Christus zu entwickeln.
                </p>
                <Button variant="outline">Unsere Geschichte entdecken</Button>
              </div>
              <div>
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Historisches Kirchenfoto"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Gottesdienste & Veranstaltungen</h2>
            <p className="text-xl text-gray-600">Regelmäßige Termine in unserer Gemeinde</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-blue-600" />
                  Hauptgottesdienst
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">Jeden Sonntag um 10:00 Uhr</p>
                <p className="text-sm text-gray-500">
                  Predigt, Gemeinschaftsgesang und Abendmahl (1. Sonntag im Monat)
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-blue-600" />
                  Kindergottesdienst
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">Jeden Sonntag um 10:00 Uhr</p>
                <p className="text-sm text-gray-500">Parallel zum Hauptgottesdienst für Kinder von 3-12 Jahren</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                  Bibelstunde
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">Donnerstags um 19:00 Uhr</p>
                <p className="text-sm text-gray-500">Gemeinsames Bibelstudium und Gebet im Gemeindehaus</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="w-5 h-5 mr-2 text-blue-600" />
                  Seniorenkreis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">Jeden 2. Dienstag um 15:00 Uhr</p>
                <p className="text-sm text-gray-500">Gemeinschaft, Andacht und Kaffeetrinken für unsere Senioren</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-blue-600" />
                  Jugendgruppe
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">Freitags um 19:00 Uhr</p>
                <p className="text-sm text-gray-500">Für Jugendliche ab 14 Jahren - Spiele, Diskussionen und mehr</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                  Hauskreise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">Mittwochs um 19:30 Uhr</p>
                <p className="text-sm text-gray-500">Kleingruppen in verschiedenen Stadtteilen - Kontakt für Details</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Kommende Veranstaltungen</h2>
            <p className="text-xl text-gray-600">Besondere Termine und Feiern in unserer Gemeinde</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-green-100 text-green-800">15. Dezember</Badge>
                <CardTitle>Weihnachtskonzert</CardTitle>
                <CardDescription>19:00 Uhr in der Kirche</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Unser Gemeindechor und Gastmusiker gestalten einen festlichen Abend mit Weihnachtsliedern und
                  besinnlichen Texten.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-blue-100 text-blue-800">24. Dezember</Badge>
                <CardTitle>Heiligabend-Gottesdienst</CardTitle>
                <CardDescription>16:00 & 22:00 Uhr</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Familiengottesdienst um 16:00 Uhr und traditioneller Christvesper um 22:00 Uhr mit Kerzenschein.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-purple-100 text-purple-800">31. Dezember</Badge>
                <CardTitle>Silvester-Andacht</CardTitle>
                <CardDescription>23:00 Uhr</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Gemeinsamer Jahresrückblick und Segen für das neue Jahr in einer besinnlichen Atmosphäre.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Kontakt & Anfahrt</h2>
            <p className="text-xl text-gray-600">Wir freuen uns auf Ihren Besuch und Ihre Nachricht</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Kontaktinformationen</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-medium">Adresse</p>
                      <p className="text-gray-600">
                        Kirchenstraße 15
                        <br />
                        12345 Musterstadt
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-medium">Telefon</p>
                      <p className="text-gray-600">+49 (0) 123 456789</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-medium">E-Mail</p>
                      <p className="text-gray-600">info@st-matthaeus-gemeinde.de</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Pastor Michael Weber</CardTitle>
                  <CardDescription>Gemeindeleiter</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Für seelsorgerliche Gespräche und alle Fragen rund um Taufe, Konfirmation, Trauung und andere
                    Amtshandlungen stehe ich gerne zur Verfügung.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm">
                      <strong>Sprechzeiten:</strong> Dienstag & Donnerstag 10-12 Uhr
                    </p>
                    <p className="text-sm">
                      <strong>Telefon:</strong> +49 (0) 123 456790
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Anfahrt</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-100 rounded-lg p-8 text-center">
                    <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                    <p className="text-gray-600">Interaktive Karte würde hier angezeigt</p>
                  </div>
                  <div className="mt-6 space-y-3">
                    <div>
                      <p className="font-medium">Öffentliche Verkehrsmittel</p>
                      <p className="text-gray-600 text-sm">Bus Linie 15, Haltestelle "Kirchenplatz" (2 Min. Fußweg)</p>
                    </div>
                    <div>
                      <p className="font-medium">Parkmöglichkeiten</p>
                      <p className="text-gray-600 text-sm">Kostenlose Parkplätze hinter der Kirche verfügbar</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold">St. Matthäus</h3>
                  <p className="text-sm text-gray-400">Gemeinde</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">Eine lebendige evangelische Gemeinde im Herzen der Stadt.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Gottesdienste</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Sonntag 10:00 Uhr</li>
                <li>Kindergottesdienst parallel</li>
                <li>Abendmahl 1. Sonntag/Monat</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Kirchenstraße 15</li>
                <li>12345 Musterstadt</li>
                <li>+49 (0) 123 456789</li>
                <li>info@st-matthaeus-gemeinde.de</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Weitere Termine</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Bibelstunde: Do 19:00</li>
                <li>Hauskreise: Mi 19:30</li>
                <li>Jugendgruppe: Fr 19:00</li>
                <li>Seniorenkreis: 2. Di 15:00</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 St. Matthäus Gemeinde. Alle Rechte vorbehalten. |
              <Link href="#" className="hover:text-white ml-2">
                Impressum
              </Link>{" "}
              |
              <Link href="#" className="hover:text-white ml-2">
                Datenschutz
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
