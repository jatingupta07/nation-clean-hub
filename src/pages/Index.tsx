import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Users, Recycle, BarChart3, ArrowRight, Shield, Award, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const userRoles = [
    {
      title: "Citizen Portal",
      description: "Learn waste management, report waste issues, and earn rewards",
      icon: Users,
      link: "/citizen",
      features: ["Training & Certification", "Report Waste Issues", "Scrap Marketplace", "Rewards System"]
    },
    {
      title: "Waste Worker",
      description: "Access training materials and manage collection tasks",
      icon: Shield,
      link: "/login?role=worker",
      features: ["Safety Training", "Task Management", "Progress Tracking", "Route Optimization"]
    },
    {
      title: "Green Champions",
      description: "Monitor waste processes and community compliance",
      icon: Award,
      link: "/login?role=committee",
      features: ["Area Monitoring", "Compliance Checklist", "Issue Reporting", "Community Oversight"]
    },
    {
      title: "Admin Dashboard",
      description: "Comprehensive waste management system oversight",
      icon: BarChart3,
      link: "/admin",
      features: ["System Analytics", "Facility Management", "Penalties & Rewards", "Performance Reports"]
    }
  ];

  const features = [
    {
      icon: Recycle,
      title: "Smart Waste Tracking",
      description: "Track waste from source to disposal with real-time monitoring"
    },
    {
      icon: MapPin,
      title: "Facility Locator",
      description: "Find nearby recycling centers, waste-to-energy plants, and biogas facilities"
    },
    {
      icon: Leaf,
      title: "Environmental Impact",
      description: "Monitor your community's environmental footprint and improvement metrics"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-eco-secondary/10 to-eco-accent/10">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Leaf className="h-8 w-8 text-eco-primary" />
            <h1 className="text-2xl font-bold text-eco-primary">EcoWaste Manager</h1>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button variant="eco" asChild>
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-eco-primary to-eco-accent bg-clip-text text-transparent">
              Transform Your Community's Waste Management
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A comprehensive platform connecting citizens, workers, committees, and government 
              for effective waste management, environmental protection, and sustainable communities.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button variant="hero" size="lg" asChild>
                <Link to="/signup">
                  Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/training">View Training Modules</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* User Roles Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Choose Your Role</h3>
            <p className="text-muted-foreground">Access features designed for your specific needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {userRoles.map((role, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-eco-primary/50 cursor-pointer">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-eco-primary/10 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-eco-primary/20 transition-colors">
                    <role.icon className="h-8 w-8 text-eco-primary" />
                  </div>
                  <CardTitle className="text-xl">{role.title}</CardTitle>
                  <CardDescription>{role.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {role.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-eco-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="eco" className="w-full" asChild>
                    <Link to={role.link}>
                      Access Portal <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Key Features</h3>
            <p className="text-muted-foreground">Comprehensive tools for effective waste management</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-eco-primary/10 to-eco-accent/10 rounded-full w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-10 w-10 text-eco-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-eco-primary to-eco-accent text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of citizens creating cleaner, more sustainable communities
          </p>
          <Button variant="glass" size="lg" asChild>
            <Link to="/signup">
              Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Leaf className="h-6 w-6" />
            <span className="text-lg font-semibold">EcoWaste Manager</span>
          </div>
          <p className="text-gray-400">
            Building sustainable communities through smart waste management
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;