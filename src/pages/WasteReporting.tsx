import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Camera, MapPin, Upload, ArrowLeft, CheckCircle, Clock, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const WasteReporting = () => {
  const [selectedWasteType, setSelectedWasteType] = useState('');
  const [urgency, setUrgency] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      // In real app, redirect to success page or show success message
    }, 2000);
  };

  const wasteTypes = [
    { value: 'mixed', label: 'Mixed Waste', description: 'General household waste' },
    { value: 'plastic', label: 'Plastic Items', description: 'Bottles, containers, packaging' },
    { value: 'organic', label: 'Organic Waste', description: 'Food scraps, garden waste' },
    { value: 'paper', label: 'Paper & Cardboard', description: 'Newspapers, boxes, documents' },
    { value: 'electronic', label: 'Electronic Waste', description: 'Devices, batteries, cables' },
    { value: 'hazardous', label: 'Hazardous Waste', description: 'Chemicals, paint, medical waste' },
    { value: 'construction', label: 'Construction Debris', description: 'Building materials, rubble' },
    { value: 'other', label: 'Other', description: 'Specify in description' }
  ];

  const recentReports = [
    { id: 1, type: 'Mixed Waste', location: 'Main Street', status: 'Collected', date: '2024-01-15' },
    { id: 2, type: 'Plastic Bottles', location: 'Park Area', status: 'In Progress', date: '2024-01-14' },
    { id: 3, type: 'Hazardous', location: 'Near School', status: 'Pending', date: '2024-01-13' }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Collected': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'In Progress': return <Clock className="h-4 w-4 text-yellow-500" />;
      case 'Pending': return <AlertTriangle className="h-4 w-4 text-orange-500" />;
      default: return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Collected': return 'bg-green-500 text-white';
      case 'In Progress': return 'bg-yellow-500 text-white';
      case 'Pending': return 'bg-orange-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-eco-secondary/10 to-eco-accent/10">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/citizen" className="flex items-center gap-2 text-eco-primary hover:opacity-80 transition-opacity">
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Link>
            <h1 className="text-2xl font-bold text-eco-primary">Report Waste Issue</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Report Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Submit New Waste Report</CardTitle>
                <CardDescription>
                  Help keep your community clean by reporting waste issues
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Waste Type Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="wasteType">Type of Waste</Label>
                    <Select value={selectedWasteType} onValueChange={setSelectedWasteType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select waste type" />
                      </SelectTrigger>
                      <SelectContent>
                        {wasteTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            <div>
                              <div className="font-medium">{type.label}</div>
                              <div className="text-sm text-muted-foreground">{type.description}</div>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Location */}
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <div className="flex gap-2">
                      <Input 
                        id="location" 
                        placeholder="Enter address or landmark"
                        className="flex-1"
                        required 
                      />
                      <Button type="button" variant="outline" size="icon">
                        <MapPin className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Or use the map icon to select location automatically
                    </p>
                  </div>

                  {/* Urgency Level */}
                  <div className="space-y-2">
                    <Label htmlFor="urgency">Urgency Level</Label>
                    <Select value={urgency} onValueChange={setUrgency}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select urgency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low - Can wait a few days</SelectItem>
                        <SelectItem value="medium">Medium - Should be addressed within 24 hours</SelectItem>
                        <SelectItem value="high">High - Immediate attention required</SelectItem>
                        <SelectItem value="emergency">Emergency - Health/safety risk</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea 
                      id="description"
                      placeholder="Provide additional details about the waste issue..."
                      rows={4}
                    />
                  </div>

                  {/* Photo Upload */}
                  <div className="space-y-2">
                    <Label>Photo Evidence</Label>
                    <div className="border-2 border-dashed border-muted rounded-lg p-8 text-center">
                      <Camera className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <p className="text-muted-foreground mb-2">
                        Take a photo or upload an image
                      </p>
                      <Button type="button" variant="outline">
                        <Upload className="mr-2 h-4 w-4" />
                        Choose File
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Photos help waste management teams understand the issue better
                    </p>
                  </div>

                  {/* Contact Information */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contactName">Your Name</Label>
                      <Input 
                        id="contactName" 
                        placeholder="John Doe"
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contactPhone">Phone Number</Label>
                      <Input 
                        id="contactPhone" 
                        type="tel"
                        placeholder="+1234567890"
                        required 
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    variant="eco" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting Report..." : "Submit Report"}
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> Photo upload and GPS location features require 
                    additional integration setup. This demo shows the UI structure.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Reporting Tips */}
            <Card>
              <CardHeader>
                <CardTitle>Reporting Tips</CardTitle>
                <CardDescription>How to submit effective reports</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-eco-primary rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">Take clear photos</p>
                    <p className="text-xs text-muted-foreground">Show the waste and surrounding area</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-eco-primary rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">Be specific about location</p>
                    <p className="text-xs text-muted-foreground">Include landmarks or address details</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-eco-primary rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">Describe the waste type</p>
                    <p className="text-xs text-muted-foreground">Help teams bring the right equipment</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-eco-primary rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">Report safety hazards immediately</p>
                    <p className="text-xs text-muted-foreground">Mark as emergency if dangerous</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Reports */}
            <Card>
              <CardHeader>
                <CardTitle>Your Recent Reports</CardTitle>
                <CardDescription>Track the status of your submissions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentReports.map((report) => (
                    <div key={report.id} className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-sm font-medium">{report.type}</h4>
                        <Badge className={getStatusColor(report.status)}>
                          {report.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {report.location}
                        </span>
                        <span>{report.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4" asChild>
                  <Link to="/citizen">View All Reports</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Emergency Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  For urgent waste-related emergencies that pose immediate health or safety risks:
                </p>
                <Button variant="destructive" className="w-full">
                  Call Emergency: 911
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WasteReporting;