// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  branch: "main",
  clientId: process.env.TINA_PUBLIC_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "works",
        label: "Works",
        path: "content/works",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "image",
            name: "image",
            label: "Image/Video"
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            options: [
              {
                label: "Thumbnails",
                value: "thumbnails"
              },
              {
                label: "Reels",
                value: "reels"
              },
              {
                label: "Posters",
                value: "posters"
              },
              {
                label: "Logos",
                value: "logos"
              }
            ]
          },
          {
            type: "string",
            name: "type",
            label: "Type",
            options: [
              {
                label: "Image",
                value: "image"
              },
              {
                label: "Video",
                value: "video"
              }
            ]
          },
          {
            type: "number",
            name: "order",
            label: "Display Order"
          }
        ]
      },
      {
        name: "testimonials",
        label: "Testimonials",
        path: "content/testimonials",
        format: "md",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Name",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "youtubeLink",
            label: "YouTube Channel"
          },
          {
            type: "number",
            name: "rating",
            label: "Rating (1-5)"
          },
          {
            type: "string",
            name: "message",
            label: "Review",
            required: true,
            ui: {
              component: "textarea"
            }
          },
          {
            type: "boolean",
            name: "approved",
            label: "Approved",
            description: "Only approved reviews appear on site"
          },
          {
            type: "datetime",
            name: "date",
            label: "Date"
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
