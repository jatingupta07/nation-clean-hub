import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart3, 
  Users, 
  Truck, 
  MapPin, 
  AlertTriangle,
  TrendingUp,
  Recycle,
  Leaf,
  Award,
  FileText,
  Settings
} from "lucide-react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  // Mock data - will be replaced with real data from Supabase
  const systemStats = {
    totalUsers: 15420,
    activeWorkers: 89,
    vehiclesActive: 34,
    wasteCollected: "2,340 tons",
    recyclingRate: 78,
    pendingReports: 23,
    trainedCitizens: 12680,
    facilities: 45
  };

  const recentAlerts = [
    { id: 1, type: "Vehicle Breakdown", location: "Route 12A", priority: "High", time: "2 hrs ago" },
    { id: 2, type: "Missed Collection", location: "Green Valley", priority: "Medium", time: "4 hrs ago" },
    { id: 3, type: "Facility Capacity", location: "Recycling Center B", priority: "Low", time: "6 hrs ago" }
  ];

  const performanceMetrics = [
    { title: "Collection Efficiency", value: 94, target: 95, unit: "%" },
    { title: "Training Completion", value: 82, target: 90, unit: "%" },
    { title: "Citizen Satisfaction", value: 88, target: 85, unit: "%" },
    { title: "Recycling Rate", value: 78, target: 80, unit: "%" }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-500 text-white';
      case 'Medium': return 'bg-yellow-500 text-white';
      case 'Low': return 'bg-green-500 text-white';
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
            <h1 className="text-2xl font-bold text-eco-primary">Admin Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
            <Button variant="outline" asChild>
              <Link to="/">Logout</Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 mx-auto mb-2 text-eco-primary" />
              <div className="text-2xl font-bold">{systemStats.totalUsers.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">Total Users</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Truck className="h-8 w-8 mx-auto mb-2 text-eco-accent" />
              <div className="text-2xl font-bold">{systemStats.vehiclesActive}</div>
              <div className="text-sm text-muted-foreground">Active Vehicles</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Recycle className="h-8 w-8 mx-auto mb-2 text-eco-success" />
              <div className="text-2xl font-bold">{systemStats.wasteCollected}</div>
              <div className="text-sm text-muted-foreground">Waste Collected</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-8 w-8 mx-auto mb-2 text-eco-secondary" />
              <div className="text-2xl font-bold">{systemStats.recyclingRate}%</div>
              <div className="text-sm text-muted-foreground">Recycling Rate</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* System Overview */}
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>System Performance</CardTitle>
                <CardDescription>Key performance indicators and targets</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {performanceMetrics.map((metric, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{metric.title}</span>
                        <span className="text-sm text-muted-foreground">
                          {metric.value}{metric.unit} / {metric.target}{metric.unit}
                        </span>
                      </div>
                      <Progress 
                        value={(metric.value / metric.target) * 100} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent System Alerts</CardTitle>
                <CardDescription>Issues requiring attention</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAlerts.map((alert) => (
                    <div key={alert.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <AlertTriangle className="h-5 w-5 text-yellow-500" />
                        <div>
                          <h4 className="font-medium">{alert.type}</h4>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="h-3 w-3" />
                            {alert.location}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className={getPriorityColor(alert.priority)}>
                          {alert.priority}
                        </Badge>
                        <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Alerts
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions & Tools */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Administrative tools and controls</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="eco" className="w-full justify-start">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Generate Reports
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MapPin className="mr-2 h-4 w-4" />
                  Facility Management
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="mr-2 h-4 w-4" />
                  User Management
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Truck className="mr-2 h-4 w-4" />
                  Vehicle Tracking
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Award className="mr-2 h-4 w-4" />
                  Rewards & Penalties
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Training Overview</CardTitle>
                <CardDescription>System-wide training statistics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Citizens Trained</span>
                    <span className="font-semibold">{systemStats.trainedCitizens.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Active Workers</span>
                    <span className="font-semibold">{systemStats.activeWorkers}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Completion Rate</span>
                    <span className="font-semibold">82%</span>
                  </div>
                  <Progress value={82} className="h-2" />
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Training Analytics
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>System Health</CardTitle>
                <CardDescription>Overall system status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Database</span>
                    <Badge className="bg-green-500 text-white">Healthy</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">API Services</span>
                    <Badge className="bg-green-500 text-white">Online</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">GPS Tracking</span>
                    <Badge className="bg-yellow-500 text-white">Warning</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Storage</span>
                    <Badge className="bg-green-500 text-white">76% Free</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Reports Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Available Reports</CardTitle>
            <CardDescription>Download comprehensive system reports</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-auto p-4 flex-col">
                <FileText className="h-6 w-6 mb-2" />
                <span className="font-medium">Waste Collection Report</span>
                <span className="text-xs text-muted-foreground">Monthly summary</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex-col">
                <BarChart3 className="h-6 w-6 mb-2" />
                <span className="font-medium">Performance Analytics</span>
                <span className="text-xs text-muted-foreground">KPI dashboard</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex-col">
                <Users className="h-6 w-6 mb-2" />
                <span className="font-medium">User Activity Report</span>
                <span className="text-xs text-muted-foreground">Engagement metrics</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;