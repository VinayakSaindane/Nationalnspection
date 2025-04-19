import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const contactData = insertContactSchema.parse(req.body);
      
      // Store the contact submission
      const contact = await storage.createContactSubmission(contactData);
      
      // Return success response
      res.status(201).json({
        message: "Contact form submitted successfully",
        contact: {
          id: contact.id,
          submittedAt: contact.submittedAt
        }
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Invalid form data",
          errors: error.errors
        });
      } else {
        console.error("Error submitting contact form:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // Get all contact submissions (could be used for an admin panel)
  app.get("/api/contact", async (req, res) => {
    try {
      const contacts = await storage.getContactSubmissions();
      res.status(200).json({ contacts });
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
