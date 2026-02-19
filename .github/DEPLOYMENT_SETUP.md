# GitHub Actions Deployment Setup

## Overview
This GitHub Actions workflow automatically builds and deploys your Astro site to Hostinger whenever you push to the `main` branch.

**Deployment Target**: `https://chaitueditzdigitalmedia.com/new`

## Setup Steps

### 1. Get FTP Credentials from Hostinger
1. Log in to your Hostinger control panel (hpanel)
2. Navigate to **Files → FTP Accounts**
3. Either use existing FTP account or create a new one
4. Note down:
   - **FTP Server/Host** (e.g., `ftp.example.com` or IP address)
   - **FTP Username**
   - **FTP Password**

### 2. Add GitHub Secrets
1. Go to your GitHub repository
2. Click **Settings → Secrets and variables → Actions**
3. Click **New repository secret**
4. Add three secrets:

| Secret Name | Value |
|-------------|-------|
| `FTP_SERVER` | Your Hostinger FTP server hostname |
| `FTP_USERNAME` | Your Hostinger FTP username |
| `FTP_PASSWORD` | Your Hostinger FTP password |

### 3. Verify Workflow

Push a commit to `main` branch:
```bash
git add .
git commit -m "chore: setup github actions deployment"
git push origin main
```

Watch the deployment:
- Go to **Actions** tab on GitHub
- Click the "Deploy to Hostinger" workflow
- View logs in real-time

Expected output: ✅ Deployment to Hostinger successful!

## How It Works

1. **Trigger**: Push to `main` branch
2. **Build**: Runs `npm run build` → creates `dist/` folder
3. **Deploy**: Uploads `dist/` contents to `public_html/new/` via FTP
4. **Preserve Media**: `/uploads` folder is excluded from sync, preserving user-uploaded media

## Important Notes

⚠️ **Sensitive Data**: Never commit FTP credentials to Git. Always use GitHub Secrets.

📁 **Upload Directory**: The workflow deploys to `public_html/new/` on Hostinger, which corresponds to `chaitueditzdigitalmedia.com/new`.

🎥 **Media Preservation**: The workflow is configured to **exclude** `/uploads` and `/videos` from deletion. This means:
- User-uploaded files on the server are **preserved** across deployments
- Local files in `dist/uploads/` will be synced
- Media files uploaded via Tina CMS (on the server) won't be deleted

## Troubleshooting

### Deployment fails with "Connection refused"
- Check FTP credentials in GitHub Secrets
- Verify FTP is enabled in Hostinger panel
- Try manually connecting via FTP client to test credentials

### Deployment succeeds but changes don't appear on site
- Check if files were uploaded to correct directory (`public_html/new/`)
- Clear browser cache or wait a few minutes for CDN cache to clear
- Verify `astro.config.mjs` has `base: '/new'` configured

### /uploads folder is deleted after deployment
- This shouldn't happen with current `exclude` configuration
- If it does, check the workflow logs for errors
- Ensure GitHub Secrets are set correctly
