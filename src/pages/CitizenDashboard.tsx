import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Camera, 
  Award, 
  MapPin, 
  BarChart3, 
  Clock,
  CheckCircle,
  Star,
  Recycle,
  Leaf
} from "lucide-react";
import { Link } from "react-router-dom";

const CitizenDashboard = () => {
  // Mock data - will be replaced with real data from Supabase
  const userStats = {
    name: "John Doe",
    points: 1250,
    level: "Eco Champion",
    completedTraining: 3,
    totalTraining: 5,
    reportsSubmitted: 12,
    wasteCollected: "45.2 kg"
  };

  const recentReports = [
    { id: 1, type: "Mixed Waste", location: "Main Street", status: "Collected", date: "2024-01-15" },
    { id: 2, type: "Plastic Bottles", location: "Park Area", status: "Pending", date: "2024-01-14" },
    { id: 3, type: "Hazardous", location: "Near School", status: "In Progress", date: "2024-01-13" }
  ];

  const availableTraining = [
    { id: 1, title: "Waste Segregation Basics", duration: "15 min", completed: true },
    { id: 2, title: "Composting at Home", duration: "20 min", completed: true },
    { id: 3, title: "Plastic Recycling", duration: "18 min", completed: true },
    { id: 4, title: "Hazardous Waste Management", duration: "25 min", completed: false },
    { id: 5, title: "Community Clean-up Best Practices", duration: "30 min", completed: false }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Collected': return 'bg-eco-success text-white';
      case 'In Progress': return 'bg-eco-warning text-white';
      case 'Pending': return 'bg-gray-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-eco-secondary/10 to-eco-accent/10">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Leaf className="h-8 w-8 text-eco-primary" />
            <h1 className="text-2xl font-bold text-eco-primary">Citizen Portal</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm text-muted-foreground">Welcome back,</p>
              <p className="font-semibold">{userStats.name}</p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/">Logout</Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Award className="h-8 w-8 mx-auto mb-2 text-eco-primary" />
              <div className="text-2xl font-bold text-eco-primary">{userStats.points}</div>
              <div className="text-sm text-muted-foreground">Eco Points</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Star className="h-8 w-8 mx-auto mb-2 text-eco-secondary" />
              <div className="text-2xl font-bold">{userStats.level}</div>
              <div className="text-sm text-muted-foreground">Current Level</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Camera className="h-8 w-8 mx-auto mb-2 text-eco-accent" />
              <div className="text-2xl font-bold">{userStats.reportsSubmitted}</div>
              <div className="text-sm text-muted-foreground">Reports Submitted</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Recycle className="h-8 w-8 mx-auto mb-2 text-eco-success" />
              <div className="text-2xl font-bold">{userStats.wasteCollected}</div>
              <div className="text-sm text-muted-foreground">Waste Recycled</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common tasks for citizens</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="eco" className="w-full justify-start" asChild>
                  <Link to="/report-waste">
                    <Camera className="mr-2 h-4 w-4" />
                    Report Waste Issue
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/training">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Continue Training
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MapPin className="mr-2 h-4 w-4" />
                  Find Recycling Centers
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  View My Impact
                </Button>
              </CardContent>
            </Card>

            {/* Training Progress */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Training Progress</CardTitle>
                <CardDescription>
                  {userStats.completedTraining} of {userStats.totalTraining} modules completed
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Progress 
                  value={(userStats.completedTraining / userStats.totalTraining) * 100} 
                  className="mb-4"
                />
                <div className="space-y-2">
                  {availableTraining.slice(0, 3).map((training) => (
                    <div key={training.id} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        {training.completed ? (
                          <CheckCircle className="h-4 w-4 text-eco-success" />
                        ) : (
                          <Clock className="h-4 w-4 text-muted-foreground" />
                        )}
                        <span className={training.completed ? "text-muted-foreground" : ""}>
                          {training.title}
                        </span>
                      </div>
                      <span className="text-muted-foreground">{training.duration}</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4" asChild>
                  <Link to="/training">View All Modules</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Recent Reports */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Waste Reports</CardTitle>
                <CardDescription>Track the status of your submitted reports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentReports.map((report) => (
                    <div key={report.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium">{report.type}</h4>
                          <Badge className={getStatusColor(report.status)}>
                            {report.status}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {report.location}
                          </span>
                          <span>{report.date}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        View Details
                      </Button>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4" asChild>
                  <Link to="/reports">View All Reports</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Recent Achievements</CardTitle>
                <CardDescription>Your latest environmental contributions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-eco-primary/10 rounded-lg">
                    <Award className="h-8 w-8 text-eco-primary" />
                    <div>
                      <p className="font-medium">Training Champion</p>
                      <p className="text-sm text-muted-foreground">Completed 3 modules</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-eco-success/10 rounded-lg">
                    <Recycle className="h-8 w-8 text-eco-success" />
                    <div>
                      <p className="font-medium">Recycling Hero</p>
                      <p className="text-sm text-muted-foreground">45kg recycled</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitizenDashboard;