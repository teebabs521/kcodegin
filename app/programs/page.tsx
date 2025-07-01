import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Stethoscope, Users, Award, ArrowRight, CheckCircle } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ProgramsPage() {
  const programs = [
    {
      id: "community health",
      icon: Stethoscope,
      title: "Department of Community Health & Medical Outreach",
      subtitle: "",
      scope:
        "To deliver preventive and curative healthcare services to underserved populations, promote health education, and advocate for public health reforms.",
      image: "/images/gallery/classroom-students.jpg",
      features: [
        "Monthly free medical outreaches in rural and urban communities",
        "Mobile clinics for underserved and remote areas",
        "Public health campaigns on hepatitis, cervical cancer, hygiene, and sanitation",
        "Health education sessions in schools, markets, and religious centers",
        "Collaboration with local health facilities for screenings and immunizations",
        "Health intervention in prisons for inmates, including hygiene kits and treatment",
      ],
      impact: {
        // students: "500+",
        // schools: "15",
        // teachers: "50+",
      },
    },
    {
      id: "health",
      icon: Stethoscope,
      title: "Department of Vulnerable Group Support & Humanitarian Services",
      subtitle: "",
      scope:
        "To provide humanitarian aid and rehabilitative support to society’s most vulnerable including prisoners, drug addicts, the homeless, and disaster-affected communities.",
      image: "/images/gallery/health-screening.jpg",
      features: [
        "Monthly sanitary pad distribution to female inmates",
        "Prison outreaches offering basic needs, medical care, and reintegration support",
        "Planned rehabilitation center for ex-inmates, prostitutes, and drug users",
        "Correctional camps for street children, miscreants, and thugs",
        "Legal aid and psycho-social support for marginalized individuals",
      ],
      impact: {
        // patients: "800+",
        // communities: "25",
        // screenings: "1200+",
      },
    },
    {
      id: "community",
      icon: Users,
      title: "Department of Community Advocacy & Social Impact",
      subtitle: "",
      scope:
        "To drive policy engagement, civic participation, and community mobilization around pressing social issues.",
      image: "/images/gallery/community-registration.jpg",
      features: [
        "Community town hall meetings on governance, peace, and health",
        "Advocacy campaigns for education, infrastructure, and gender justice",
        "Voter education and citizens’ rights awareness",
        "Partnership with traditional leaders and stakeholders",
        "Capacity-building for community-based organizations",
        "Environmental awareness and climate resilience campaigns",
      ],
      impact: {
        // beneficiaries: "600+",
        // projects: "30",
        // communities: "20",
      },
    },
    {
      id: "youth",
      icon: Award,
      title: "Department of Youth & Leadership Development",
      subtitle: "",
      scope:
        "To nurture the potential of young people through mentorship, education, skills development, and civic engagement for nation-building.",
      image: "/images/gallery/certificate-ceremony.jpg",
      features: [
        "Youth leadership boot-camps and training workshops",
        "Community mentorship and peer education programs",
        "Career guidance and soft-skills development",
        "Campus-based engagement for responsible leadership",
        "Drug education and recovery programs for at-risk youth",
        "Establishment of youth innovation hubs and debate clubs",
      ],
      impact: {
        // youth: "400+",
        // programs: "12",
        // mentors: "25",
      },
    },
    {
      id: "women empowerment",
      icon: Users,
      title: "Department of Women’s Empowerment & Sustainable Livelihoods",
      subtitle: "",
      scope:
        "To empower women with economic opportunities, access to healthcare, and skills to live self-sustained and dignified lives.",
      image: "/images/gallery/community-registration.jpg",
      features: [
        "Women’s health education including reproductive and maternal care",
        "Access to small grants and cooperative savings",
        "Female leadership development programs",
        "Awareness on gender-based violence and women’s rights",
        "Partnership with women-led groups and organizations",
      ],
      impact: {
        // beneficiaries: "600+",
        // projects: "30",
        // communities: "20",
      }
    },
    {
      id: "peace building",
      icon: Award,
      title: "Department of Peace-building & Cultural Re-integration",
      subtitle: "",
      scope:
        "To foster peaceful coexistence, reintegrate culturally alienated groups, and promote national unity through shared values and dialogue.",
      image: "/images/gallery/certificate-ceremony.jpg",
      features: [
        "Peace education and interfaith dialogue sessions",
        "Reconciliation programs between conflicting communities",
        "Training in non-violent communication and conflict resolution",
        "Regional peace summits and advocacy for social justice",
      ],
      impact: {
        // youth: "400+",
        // programs: "12",
        // mentors: "25",
      }
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-50 to-yellow-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-amber-100 text-amber-800 mb-4">Our Programs</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            KCODEGIN Program Framework <span className="text-amber-600">by Department</span>
            </h1>
            <p className="text-xl text-gray-600">
            KCODEGIN operates through well-structured departments designed to achieve its mission of healing communities, promoting a culture of responsibility, and enabling sustainable peace and development. Below is a detailed breakdown of each department and its core areas of intervention:
            </p>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {programs.map((program, index) => (
            <div key={program.id} id={program.id} className="mb-20 last:mb-0">
              <div
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-amber-100 p-3 rounded-lg">
                      <program.icon className="h-8 w-8 text-amber-600" />
                    </div>
                    <Badge className="bg-amber-100 text-amber-800">{program.title}</Badge>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{program.subtitle}</h2>
                  <p className="text-gray-600 mb-6">{program.scope}</p>

                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Program Features:</h3>
                    <div className="grid md:grid-cols-2 gap-2">
                      {program.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-amber-600 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(program.impact).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <p className="text-2xl font-bold text-amber-600">{value}</p>
                        <p className="text-gray-600 text-sm capitalize">{key}</p>
                      </div>
                    ))}
                  </div>

                  <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                    <Link href="/get-involved">
                      Support This Program
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <Image
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="relative from-amber-50 to-yellow-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-xl text-gray-600">
            Together, these departments ensure KCODEGIN delivers holistic and impactful interventions aligned with the Sustainable Development Goals (SDGs), national development plans, and the cultural realities of the African people.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Want to Learn More?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get detailed information about our programs, see our impact reports, or discuss partnership opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
              <Link href="/contact">Contact Our Team</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-amber-500 text-amber-600 hover:bg-amber-50" asChild>
              <Link href="/gallery">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
