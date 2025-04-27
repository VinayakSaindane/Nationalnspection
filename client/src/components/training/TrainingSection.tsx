import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { COURSES, COURSE_CATEGORIES } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const TrainingSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(COURSE_CATEGORIES[0]);

  return (
    <section id="training" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
       
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold font-inter text-primary mb-4">Course Categories</h3>
                <ul className="space-y-3">
                  {COURSE_CATEGORIES.map((category, index) => (
                    <li 
                      key={index} 
                      className={`${
                        selectedCategory === category 
                          ? 'bg-primary text-white' 
                          : 'hover:bg-gray-100'
                      } py-2 px-4 rounded-md cursor-pointer transition duration-300`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8">
                  <h3 className="text-xl font-bold font-inter text-primary mb-4">Training Approach</h3>
                  <div className="flex items-center mb-4">
                    <div className="text-accent-500 mr-3">
                      <i className="fas fa-chalkboard-teacher"></i>
                    </div>
                    <span className="text-gray-600">Expert-led instruction</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="text-accent-500 mr-3">
                      <i className="fas fa-hands"></i>
                    </div>
                    <span className="text-gray-600">Hands-on practical training</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="text-accent-500 mr-3">
                      <i className="fas fa-clipboard-check"></i>
                    </div>
                    <span className="text-gray-600">Performance evaluation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="text-accent-500 mr-3">
                      <i className="fas fa-award"></i>
                    </div>
                    <span className="text-gray-600">Industry-recognized certification</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-2">
            {COURSES.filter(course => 
              selectedCategory === "Basic Welding Techniques" || course.category === selectedCategory
            ).map((course) => (
              <Card key={course.id} className="mb-8">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold font-inter text-primary mb-2">{course.title}</h3>
                      <p className="text-sm text-accent-500 mb-4">
                        {course.category} • {course.duration} • {course.level}
                      </p>
                    </div>
                    {course.popular && (
                      <div className="bg-primary text-white py-1 px-3 rounded-md text-sm">
                        <i className="fas fa-star mr-1"></i> Popular
                      </div>
                    )}
                    {course.certification && (
                      <div className="bg-accent-500 text-white py-1 px-3 rounded-md text-sm">
                        <i className="fas fa-certificate mr-1"></i> Certification
                      </div>
                    )}
                  </div>
                  
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-primary mb-2">What You'll Learn</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {course.learningOutcomes.map((outcome, index) => (
                        <li key={index} className="flex items-center">
                          <i className="fas fa-check text-green-500 mr-2"></i>
                          <span className="text-gray-600">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col md:flex-row justify-between items-center bg-gray-50 p-4 rounded-lg">
                    <div className="mb-4 md:mb-0">
                      <span className="text-2xl font-bold text-primary">${course.price}</span>
                      <span className="text-gray-500"> / participant</span>
                    </div>
                    <div className="flex space-x-4">
                      <a href="#" className="text-primary hover:text-accent-500 font-medium transition duration-300">
                        <i className="far fa-file-alt mr-1"></i> Course Details
                      </a>
                      <Button asChild className="bg-accent-500 hover:bg-accent-600 text-white font-medium">
                        <Link href="/contact">
                          <a>Enroll Now</a>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <div className="text-center mt-8">
              <Link href="/training">
                <a className="inline-flex items-center text-primary hover:text-accent-500 font-medium transition duration-300">
                  View All Courses <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
