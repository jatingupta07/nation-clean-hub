import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Play, 
  CheckCircle, 
  Clock, 
  Award, 
  ArrowLeft,
  Star,
  Download,
  Target
} from "lucide-react";
import { Link } from "react-router-dom";

const Training = () => {
  const trainingModules = [
    {
      id: 1,
      title: "Waste Segregation Basics",
      description: "Learn the fundamentals of separating different types of waste",
      duration: "15 min",
      difficulty: "Beginner",
      completed: true,
      score: 95,
      topics: ["Wet vs Dry Waste", "Color-coded Bins", "Common Mistakes"],
      thumbnail: "🗂️"
    },
    {
      id: 2,
      title: "Home Composting Guide",
      description: "Turn your organic waste into valuable compost for plants",
      duration: "20 min",
      difficulty: "Beginner",
      completed: true,
      score: 88,
      topics: ["Composting Methods", "Equipment Needed", "Troubleshooting"],
      thumbnail: "🌱"
    },
    {
      id: 3,
      title: "Plastic Recycling & Reduction",
      description: "Understanding plastic types and how to reduce plastic waste",
      duration: "18 min",
      difficulty: "Intermediate",
      completed: true,
      score: 92,
      topics: ["Plastic Types", "Recycling Codes", "Alternatives"],
      thumbnail: "♻️"
    },
    {
      id: 4,
      title: "Hazardous Waste Management",
      description: "Safe handling and disposal of dangerous materials",
      duration: "25 min",
      difficulty: "Advanced",
      completed: false,
      score: null,
      topics: ["Identification", "Safety Protocols", "Disposal Centers"],
      thumbnail: "⚠️"
    },
    {
      id: 5,
      title: "Community Clean-up Best Practices",
      description: "Organizing and participating in community waste management",
      duration: "30 min",
      difficulty: "Intermediate",
      completed: false,
      score: null,
      topics: ["Planning Events", "Safety Guidelines", "Team Coordination"],
      thumbnail: "🤝"
    },
    {
      id: 6,
      title: "Electronic Waste (E-Waste) Handling",
      description: "Proper disposal of electronic devices and components",
      duration: "22 min",
      difficulty: "Intermediate",
      completed: false,
      score: null,
      topics: ["Device Preparation", "Data Security", "Certified Centers"],
      thumbnail: "📱"
    }
  ];

  const userProgress = {
    completedModules: 3,
    totalModules: 6,
    averageScore: 92,
    certificatesEarned: 2,
    totalPoints: 850
  };

  const achievements = [
    { title: "First Steps", description: "Completed first training module", earned: true },
    { title: "Eco Scholar", description: "Completed 3 training modules", earned: true },
    { title: "Perfect Score", description: "Scored 100% on any module", earned: false },
    { title: "Eco Expert", description: "Completed all training modules", earned: false }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500 text-white';
      case 'Intermediate': return 'bg-yellow-500 text-white';
      case 'Advanced': return 'bg-red-500 text-white';
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
            <h1 className="text-2xl font-bold text-eco-primary">Training Center</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <BookOpen className="h-8 w-8 mx-auto mb-2 text-eco-primary" />
              <div className="text-2xl font-bold">{userProgress.completedModules}/{userProgress.totalModules}</div>
              <div className="text-sm text-muted-foreground">Modules Completed</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Star className="h-8 w-8 mx-auto mb-2 text-eco-secondary" />
              <div className="text-2xl font-bold">{userProgress.averageScore}%</div>
              <div className="text-sm text-muted-foreground">Average Score</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Award className="h-8 w-8 mx-auto mb-2 text-eco-accent" />
              <div className="text-2xl font-bold">{userProgress.certificatesEarned}</div>
              <div className="text-sm text-muted-foreground">Certificates</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Target className="h-8 w-8 mx-auto mb-2 text-eco-success" />
              <div className="text-2xl font-bold">{userProgress.totalPoints}</div>
              <div className="text-sm text-muted-foreground">Eco Points</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Training Modules */}
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Training Progress</CardTitle>
                <CardDescription>
                  Complete all modules to become a certified waste management champion
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Progress 
                  value={(userProgress.completedModules / userProgress.totalModules) * 100} 
                  className="mb-4"
                />
                <p className="text-sm text-muted-foreground">
                  {userProgress.completedModules} of {userProgress.totalModules} modules completed 
                  ({Math.round((userProgress.completedModules / userProgress.totalModules) * 100)}%)
                </p>
              </CardContent>
            </Card>

            <div className="space-y-6">
              {trainingModules.map((module) => (
                <Card key={module.id} className={`transition-all duration-300 hover:shadow-lg ${module.completed ? 'border-eco-success/50' : ''}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className="text-3xl">{module.thumbnail}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <CardTitle className="text-lg">{module.title}</CardTitle>
                            {module.completed && <CheckCircle className="h-5 w-5 text-eco-success" />}
                          </div>
                          <CardDescription className="mb-3">
                            {module.description}
                          </CardDescription>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {module.duration}
                            </span>
                            <Badge className={getDifficultyColor(module.difficulty)}>
                              {module.difficulty}
                            </Badge>
                            {module.completed && module.score && (
                              <span className="text-eco-success font-medium">
                                Score: {module.score}%
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="text-sm font-medium mb-2">Topics Covered:</h4>
                      <div className="flex flex-wrap gap-2">
                        {module.topics.map((topic, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      {module.completed ? (
                        <>
                          <Button variant="outline" className="flex-1">
                            <Play className="mr-2 h-4 w-4" />
                            Review Module
                          </Button>
                          <Button variant="eco">
                            <Download className="h-4 w-4" />
                          </Button>
                        </>
                      ) : (
                        <Button variant="eco" className="flex-1">
                          <Play className="mr-2 h-4 w-4" />
                          Start Module
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Learning Path</CardTitle>
                <CardDescription>Your journey to becoming an eco champion</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-eco-success rounded-full flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Basics Complete</p>
                      <p className="text-sm text-muted-foreground">Waste segregation fundamentals</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-eco-primary rounded-full flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    <div>
                      <p className="font-medium">Intermediate Skills</p>
                      <p className="text-sm text-muted-foreground">Advanced techniques & safety</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold">
                      3
                    </div>
                    <div>
                      <p className="font-medium text-muted-foreground">Expert Certification</p>
                      <p className="text-sm text-muted-foreground">Community leadership</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
                <CardDescription>Milestones in your learning journey</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className={`flex items-center gap-3 p-2 rounded-lg ${achievement.earned ? 'bg-eco-primary/10' : 'bg-gray-50'}`}>
                      <Award className={`h-5 w-5 ${achievement.earned ? 'text-eco-primary' : 'text-gray-400'}`} />
                      <div>
                        <p className={`text-sm font-medium ${achievement.earned ? '' : 'text-muted-foreground'}`}>
                          {achievement.title}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {achievement.description}
                        </p>
                      </div>
                      {achievement.earned && (
                        <CheckCircle className="h-4 w-4 text-eco-success ml-auto" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Next Steps */}
            <Card>
              <CardHeader>
                <CardTitle>Next Steps</CardTitle>
                <CardDescription>Continue your learning journey</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="eco" className="w-full">
                  Start Next Module
                </Button>
                <Button variant="outline" className="w-full">
                  Download Certificate
                </Button>
                <Button variant="outline" className="w-full">
                  Share Progress
                </Button>
              </CardContent>
            </Card>

            {/* Support */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Having trouble with any training module? Our support team is here to help.
                </p>
                <Button variant="outline" className="w-full">
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;