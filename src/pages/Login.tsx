import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Leaf, ArrowLeft } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [searchParams] = useSearchParams();
  const defaultRole = searchParams.get('role') || 'citizen';
  const [selectedRole, setSelectedRole] = useState(defaultRole);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // This will require Supabase integration for authentication
    console.log('Login attempted with role:', selectedRole);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-eco-secondary/10 to-eco-accent/10 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-eco-primary hover:opacity-80 transition-opacity">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>

        <Card className="border-2 shadow-xl">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 p-3 bg-eco-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
              <Leaf className="h-8 w-8 text-eco-primary" />
            </div>
            <CardTitle className="text-2xl">Welcome Back</CardTitle>
            <CardDescription>Login to access your EcoWaste Manager portal</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="role">User Role</Label>
                <Select value={selectedRole} onValueChange={setSelectedRole}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="citizen">Citizen</SelectItem>
                    <SelectItem value="worker">Waste Worker</SelectItem>
                    <SelectItem value="committee">Green Champion</SelectItem>
                    <SelectItem value="admin">Admin (ULB/Govt)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email or Phone</Label>
                <Input 
                  id="email" 
                  type="text" 
                  placeholder="Enter your email or phone number"
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="Enter your password"
                  required 
                />
              </div>

              <Button type="submit" variant="eco" className="w-full">
                Login
              </Button>

              <div className="text-center space-y-2">
                <Link to="/forgot-password" className="text-sm text-eco-primary hover:underline">
                  Forgot your password?
                </Link>
                <div className="text-sm text-muted-foreground">
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-eco-primary hover:underline">
                    Sign up here
                  </Link>
                </div>
              </div>
            </form>

            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>Note:</strong> Full authentication requires Supabase integration. 
                This demo shows the UI structure for the login system.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;