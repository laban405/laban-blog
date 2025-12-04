# Sanity Studio Guide

This guide will help you understand and use Sanity Studio in your blog project.

## What is Sanity Studio?

Sanity Studio is a content management interface that runs in your browser. It allows you to create, edit, and manage all your blog content including posts, authors, categories, and work portfolio items.

## Prerequisites

Before you can use Sanity Studio, you need to set up your environment variables:

1. Create a `.env.local` file in the root of your project
2. Add the following variables:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-03-28
   ```

   **To get your project ID:**
   - Go to [sanity.io](https://www.sanity.io)
   - Create a new project or use an existing one
   - Copy the Project ID from your project settings

## Accessing Sanity Studio

1. **Start your development server:**
   ```bash
   pnpm run dev
   ```

2. **Open Sanity Studio in your browser:**
   Navigate to: `http://localhost:3000/studio`

   The studio is mounted at the `/studio` route (as configured in `sanity.config.ts`).

## Available Content Types

Your Sanity Studio includes the following content types:

### 1. **Posts** 📝
Blog posts/articles for your blog.

**Fields:**
- **Title**: The post title
- **Summary**: A brief summary of the post
- **Slug**: URL-friendly identifier (auto-generated from title)
- **Author**: Reference to an author document
- **Main Image**: Featured image with alt text
- **Categories**: Array of category references
- **Published At**: Publication date and time
- **Body**: Rich text content (blockContent) - supports formatting, links, images, code blocks, etc.

**How to create a post:**
1. Click "Post" in the left sidebar
2. Click "Create new" or the "+" button
3. Fill in the title, summary, and other fields
4. Add a main image by clicking the image field
5. Select an author (create one first if needed)
6. Add categories
7. Write your content in the Body field using the rich text editor
8. Set the publication date
9. Click "Publish" when ready

### 2. **Authors** 👤
Author profiles for blog posts.

**Fields:**
- **Name**: Author's full name
- **Slug**: URL-friendly identifier (auto-generated from name)
- **Image**: Author profile picture with alt text
- **Bio**: Rich text biography

**How to create an author:**
1. Click "Author" in the left sidebar
2. Click "Create new"
3. Enter the author's name
4. Upload a profile image
5. Write a bio
6. Click "Publish"

### 3. **Categories** 🏷️
Categories to organize your blog posts.

**Fields:**
- **Title**: Category name
- **Description**: Category description

**How to create a category:**
1. Click "Category" in the left sidebar
2. Click "Create new"
3. Enter a title and description
4. Click "Publish"

### 4. **Work** 💼
Portfolio/work experience items.

**Fields:**
- **Main Title**: Main heading for the work section
- **Main Description**: Overview description
- **Resume**: Array of work experience items, each with:
  - Title
  - Description (rich text)
  - Image
  - Start Date
  - End Date
  - Is Current (checkbox)
- **Tech Stack**: Array of technologies, each with:
  - Language name
  - Image/icon
  - Proficiency (number)

**How to create work content:**
1. Click "Work" in the left sidebar
2. Click "Create new" or edit existing
3. Fill in the main title and description
4. Add resume items using the "+" button
5. Add tech stack items
6. Click "Publish"

### 5. **Block Content** 📄
Rich text content type used in posts. Supports:
- Headings (H1-H6)
- Paragraphs
- Bold, italic, underline
- Links
- Lists (ordered and unordered)
- Code blocks
- Images
- Custom blocks

## Studio Features

### Vision Tool (GROQ Query Tool)
The Vision plugin allows you to query your content using GROQ (Graph-Relational Object Queries) directly in the studio.

**How to use:**
1. Click the "Vision" icon in the top toolbar
2. Write GROQ queries to explore your data
3. Example query: `*[_type == "post"]{title, "author": author->name}`

### Code Input
The code input plugin allows you to add code blocks with syntax highlighting in your content.

### Color Input
The color input plugin allows you to select colors using a color picker (if used in your schemas).

## Tips & Best Practices

1. **Always publish your documents** - Drafts won't appear on your site
2. **Use slugs wisely** - They become part of your URLs, so keep them short and descriptive
3. **Add alt text to images** - Important for accessibility and SEO
4. **Organize with categories** - Create categories before creating posts to keep content organized
5. **Create authors first** - You'll need authors before you can assign them to posts
6. **Use the preview** - Some content types have preview configurations to see how they'll look
7. **Save drafts** - Use "Save" to keep drafts without publishing

## Troubleshooting

### Studio won't load
- Check that your environment variables are set correctly
- Verify your Sanity project ID is correct
- Make sure the development server is running

### Can't see content types
- Check that your schema files are properly imported in `sanity/schema.ts`
- Restart the development server

### Images not uploading
- Verify your Sanity project has the correct permissions
- Check your internet connection
- Ensure you're logged into Sanity (you may need to authenticate)

## Next Steps

- Customize your schemas in `sanity/schemaTypes/` to add more fields
- Add custom preview configurations
- Create custom input components
- Set up webhooks for automatic deployments
- Configure access control and permissions in your Sanity project settings

For more information, visit the [Sanity Documentation](https://www.sanity.io/docs).

