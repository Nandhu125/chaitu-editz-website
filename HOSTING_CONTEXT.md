# Hosting & Deployment Context (Hostinger + TinaCMS)

## 1. Hosting Environment (Hostinger Shared)
- **Web Root**: `public_html/` is the standard directory where the live website files reside.
- **Access**: Files are accessible via FTP/SFTP or the Hostinger File Manager.
- **URL Structure**: A file at `public_html/images/logo.png` is accessible at `https://yourdomain.com/images/logo.png`.

## 2. TinaCMS "Database" Concept
- **Source of Truth**: The GitHub repository is the database.
- **Content Storage**: Text content (blogs, portfolio items) is stored as Markdown/JSON files in `src/content/`.
- **Media Storage (Current)**: Images uploaded via TinaCMS are committed to the Git repository in `public/uploads/`.
- **Sync**: 
  - **Local**: Edits save to local file system.
  - **Production**: Edits save to GitHub via Tina Cloud, triggering a deployment.

## 3. Deployment Workflow (GitHub -> Hostinger)
The standard workflow for static sites (Astro) on shared hosting:
1. **Build**: `npm run build` generates a `dist/` folder containing the full static site.
2. **Deploy**: The contents of `dist/` are uploaded to `public_html/` on Hostinger.
   - **Manual**: Upload via File Manager/FTP.
   - **Automated (Recommended)**: GitHub Actions builds and syncs via FTP.

## 4. Critical Deployment Consideration (Media Persistence)
- **The Issue**: Automated deployments often "sync" folders, meaning they delete files on the server that don't exist in the Git repository.
- **The Risk**: If you manually upload images to `public_html/uploads/` on Hostinger (bypassing Git), a fresh deployment from GitHub might **delete** them because they are missing from the repo.
- **The Solution**: Configure deployment tools (e.g., `ftp-deploy-action`) to **exclude** the `/uploads` folder from deletion/syncing. This preserves media files on the server across deployments.

## 5. Media Strategy for "Chaitu Editz"
- **Videos**: Embed from YouTube/Vimeo (do NOT host on shared hosting).
- **Images**: 
  - **Option A (Simpler)**: Store in Git repo (`public/uploads`). Good for < 500MB total.
  - **Option B (Scalable)**: Use Cloudinary/AWS S3 for unlimited media storage.
  - **Option C (Custom)**: Build custom API to upload to Hostinger via FTP (complex).
