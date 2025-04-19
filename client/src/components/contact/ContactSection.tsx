import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { CONTACT_INFO, CONTACT_SUBJECTS } from "@/lib/constants";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", data);
      
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We will contact you soon!",
        variant: "default",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-inter text-primary mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Reach out to our team for inquiries, quotes, or to discuss your welding service needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Card className="bg-gray-50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold font-inter text-primary mb-6">Send Us a Message</h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 font-medium">Full Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="John Doe" 
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 font-medium">Email Address</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="john@example.com" 
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 font-medium">Phone Number</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="(123) 456-7890" 
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 font-medium">Subject</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value || undefined}>
                              <FormControl>
                                <SelectTrigger className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                                  <SelectValue placeholder="Select a subject" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {CONTACT_SUBJECTS.map((subject) => (
                                  <SelectItem key={subject.value} value={subject.value}>
                                    {subject.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-medium">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Please describe your requirements or questions..." 
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                              rows={5}
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="bg-primary hover:bg-primary-light text-white font-medium py-3 px-6 rounded-md transition duration-300 shadow-md"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="bg-gray-50 mb-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold font-inter text-primary mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-accent-500 mt-1 mr-4">
                      <i className="fas fa-map-marker-alt text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Address</h4>
                      <p className="text-gray-600">
                        {CONTACT_INFO.address.split('\n').map((line, i) => (
                          <span key={i}>
                            {line}
                            {i < CONTACT_INFO.address.split('\n').length - 1 && <br />}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-accent-500 mt-1 mr-4">
                      <i className="fas fa-phone-alt text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Phone</h4>
                      {CONTACT_INFO.phone.map((number, index) => (
                        <p key={index} className="text-gray-600">{number}</p>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-accent-500 mt-1 mr-4">
                      <i className="fas fa-envelope text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Email</h4>
                      {CONTACT_INFO.email.map((email, index) => (
                        <p key={index} className="text-gray-600">{email}</p>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-accent-500 mt-1 mr-4">
                      <i className="fas fa-clock text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Business Hours</h4>
                      {CONTACT_INFO.hours.map((hour, index) => (
                        <p key={index} className="text-gray-600">{hour}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold font-inter text-primary mb-6">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-primary hover:bg-primary-light text-white h-10 w-10 rounded-full flex items-center justify-center transition duration-300">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="bg-primary hover:bg-primary-light text-white h-10 w-10 rounded-full flex items-center justify-center transition duration-300">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="bg-primary hover:bg-primary-light text-white h-10 w-10 rounded-full flex items-center justify-center transition duration-300">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="bg-primary hover:bg-primary-light text-white h-10 w-10 rounded-full flex items-center justify-center transition duration-300">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
