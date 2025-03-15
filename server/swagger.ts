
import { type Express } from "express";
import swaggerUi from "swagger-ui-express";

export const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "Wealth Navigator API",
    version: "1.0.0",
    description: "API documentation for Wealth Navigator"
  },
  paths: {
    "/api/register": {
      post: {
        tags: ["Auth"],
        summary: "Register a new admin",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  username: { type: "string" },
                  password: { type: "string" }
                }
              }
            }
          }
        }
      }
    },
    "/api/login": {
      post: {
        tags: ["Auth"],
        summary: "Login to get access token",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  username: { type: "string" },
                  password: { type: "string" }
                }
              }
            }
          }
        }
      }
    },
    "/api/contact": {
      post: {
        tags: ["Contact"],
        summary: "Submit contact form",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  name: { type: "string" },
                  email: { type: "string" },
                  message: { type: "string" }
                }
              }
            }
          }
        }
      }
    },
    "/api/blogs": {
      get: {
        tags: ["Blog"],
        summary: "Get all blogs"
      },
      post: {
        tags: ["Blog"],
        summary: "Create a new blog post",
        security: [{ bearerAuth: [] }]
      }
    },
    "/api/blogs/{id}": {
      get: {
        tags: ["Blog"],
        summary: "Get blog by ID",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "integer" }
          }
        ]
      },
      put: {
        tags: ["Blog"],
        summary: "Update blog by ID",
        security: [{ bearerAuth: [] }],
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "integer" }
          }
        ]
      },
      delete: {
        tags: ["Blog"],
        summary: "Delete blog by ID",
        security: [{ bearerAuth: [] }],
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "integer" }
          }
        ]
      }
    }
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT"
      }
    }
  }
};

export function setupSwagger(app: Express) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument, {
    explorer: true,
    swaggerOptions: {
      persistAuthorization: true,
    }
  }));
}
