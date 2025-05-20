
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Form steps
type Step = "basic" | "skills" | "availability" | "verification" | "complete";

export default function RegistrationForm() {
  const [currentStep, setCurrentStep] = useState<Step>("basic");
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    skills: [] as string[],
    interests: [] as string[],
    weekdayAvailability: [] as string[],
    weekendAvailability: [] as string[],
    phoneNumber: '',
    zipCode: '',
  });
  
  // Skills options
  const skillOptions = [
    "Teaching", "Mentoring", "Programming", "Design", "Writing", "Editing",
    "Marketing", "Social Media", "Photography", "Videography", "Cooking",
    "Gardening", "Construction", "Carpentry", "Medical", "Legal", "Administrative",
    "Event Planning", "Fundraising", "Outreach", "Leadership"
  ];
  
  // Interest options
  const interestOptions = [
    "Education", "Environment", "Health", "Animals", "Arts", "Technology",
    "Social Justice", "Homelessness", "Food Security", "Youth", "Seniors",
    "Disabilities", "Crisis Response", "Community Development"
  ];
  
  // Availability options
  const weekdayOptions = ["Morning", "Afternoon", "Evening"];
  const weekendOptions = ["Morning", "Afternoon", "Evening"];
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    
    if (checked) {
      setFormData(prev => ({
        ...prev,
        [name]: [...prev[name as keyof typeof formData] as string[], value]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: (prev[name as keyof typeof formData] as string[]).filter(item => item !== value)
      }));
    }
  };
  
  const handleContinue = () => {
    const steps: Step[] = ["basic", "skills", "availability", "verification", "complete"];
    const currentIndex = steps.indexOf(currentStep);
    
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1]);
    }
  };
  
  const handleBack = () => {
    const steps: Step[] = ["basic", "skills", "availability", "verification", "complete"];
    const currentIndex = steps.indexOf(currentStep);
    
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1]);
    }
  };
  
  const getFormProgress = () => {
    const steps: Step[] = ["basic", "skills", "availability", "verification", "complete"];
    const currentIndex = steps.indexOf(currentStep);
    return ((currentIndex + 1) / steps.length) * 100;
  };
  
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="h-2 w-full bg-gray-200 rounded-full">
          <div 
            className="h-2 bg-gradient-to-r from-mosaic-purple to-mosaic-blue rounded-full transition-all duration-500 ease-in-out" 
            style={{ width: `${getFormProgress()}%` }}
          ></div>
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-sm text-gray-500">Start</span>
          <span className="text-sm text-gray-500">Complete</span>
        </div>
      </div>
      
      {currentStep === "basic" && (
        <div className="animate-[tile-in_0.3s_ease-out_forwards]">
          <h2 className="text-2xl font-bold mb-6">Basic Information</h2>
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="mosaic-input w-full"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="mosaic-input w-full"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mosaic-input w-full"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="mosaic-input w-full"
                required
              />
              <p className="text-xs text-gray-500 mt-1">Must be at least 8 characters with a number and special character.</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="mosaic-input w-full"
                required
              />
            </div>
          </div>
        </div>
      )}
      
      {currentStep === "skills" && (
        <div className="animate-[tile-in_0.3s_ease-out_forwards]">
          <h2 className="text-2xl font-bold mb-6">Skills & Interests</h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Skills (Select all that apply)</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {skillOptions.map(skill => (
                  <label key={skill} className="flex items-center text-sm">
                    <input
                      type="checkbox"
                      name="skills"
                      value={skill}
                      checked={formData.skills.includes(skill)}
                      onChange={handleCheckboxChange}
                      className="rounded text-mosaic-purple focus:ring-mosaic-purple mr-2"
                    />
                    {skill}
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Interests (Select all that apply)</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {interestOptions.map(interest => (
                  <label key={interest} className="flex items-center text-sm">
                    <input
                      type="checkbox"
                      name="interests"
                      value={interest}
                      checked={formData.interests.includes(interest)}
                      onChange={handleCheckboxChange}
                      className="rounded text-mosaic-purple focus:ring-mosaic-purple mr-2"
                    />
                    {interest}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      
      {currentStep === "availability" && (
        <div className="animate-[tile-in_0.3s_ease-out_forwards]">
          <h2 className="text-2xl font-bold mb-6">Availability</h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Weekdays</label>
              <div className="grid grid-cols-3 gap-2">
                {weekdayOptions.map(time => (
                  <label key={time} className="flex items-center text-sm">
                    <input
                      type="checkbox"
                      name="weekdayAvailability"
                      value={time}
                      checked={formData.weekdayAvailability.includes(time)}
                      onChange={handleCheckboxChange}
                      className="rounded text-mosaic-purple focus:ring-mosaic-purple mr-2"
                    />
                    {time}
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Weekends</label>
              <div className="grid grid-cols-3 gap-2">
                {weekendOptions.map(time => (
                  <label key={time} className="flex items-center text-sm">
                    <input
                      type="checkbox"
                      name="weekendAvailability"
                      value={time}
                      checked={formData.weekendAvailability.includes(time)}
                      onChange={handleCheckboxChange}
                      className="rounded text-mosaic-purple focus:ring-mosaic-purple mr-2"
                    />
                    {time}
                  </label>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Phone Number (Optional)</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="mosaic-input w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Zip Code</label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className="mosaic-input w-full"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      
      {currentStep === "verification" && (
        <div className="animate-[tile-in_0.3s_ease-out_forwards]">
          <h2 className="text-2xl font-bold mb-6">Verification</h2>
          
          <div className="p-6 bg-gray-50 rounded-lg mb-6">
            <h3 className="text-lg font-semibold mb-3">Almost Done!</h3>
            <p className="text-gray-600 mb-4">
              To complete your registration, we need to verify your email address. 
              Please check your inbox for a verification link.
            </p>
            
            <div className="p-4 bg-white rounded-md border border-gray-200 text-center">
              <p className="text-lg font-medium text-gray-700 mb-2">Verification Email Sent!</p>
              <p className="text-gray-600 mb-4">We've sent a verification email to <strong>{formData.email}</strong></p>
              <Button 
                className="bg-mosaic-purple hover:bg-mosaic-purple/90 text-white w-full"
              >
                Resend Email
              </Button>
            </div>
          </div>
          
          <p className="text-sm text-gray-500">
            For this demo, you can click "Continue" without verifying.
          </p>
        </div>
      )}
      
      {currentStep === "complete" && (
        <div className="animate-[tile-in_0.3s_ease-out_forwards] text-center">
          <div className="mb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-2">Registration Complete!</h2>
          <p className="text-gray-600 mb-6">
            Your volunteer profile has been created. Start exploring projects that match your interests and skills!
          </p>
          
          <div className="flex flex-col space-y-3">
            <Button asChild className="bg-mosaic-purple hover:bg-mosaic-purple/90 text-white">
              <a href="/dashboard">Go to Your Dashboard</a>
            </Button>
            <Button asChild variant="outline">
              <a href="/projects">Browse Projects</a>
            </Button>
          </div>
        </div>
      )}
      
      {currentStep !== "complete" && (
        <div className="flex justify-between mt-8">
          {currentStep !== "basic" ? (
            <Button 
              variant="outline" 
              onClick={handleBack}
            >
              Back
            </Button>
          ) : (
            <div></div>
          )}
          
          <Button 
            className="bg-mosaic-purple hover:bg-mosaic-purple/90 text-white"
            onClick={handleContinue}
          >
            Continue <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
}
