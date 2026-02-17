1️⃣ Project Overview

We are rebuilding the existing website using Astro instead of WordPress.

The goal is:

Maintain the exact same existing design

Make content manageable via CMS

Keep the site fast and lightweight

Add ecommerce functionality later (Phase 2)

PHASE 1 – Core Website & CMS
Tech Stack

Frontend: Astro

CMS: Tina CMS (Git-based CMS)

Hosting: Hostinger

Database: Not required for core CMS (Git content storage)

Scope of Work (Phase 1)
1. Astro Website Implementation

Convert existing HTML/CSS/JS design into Astro components

Maintain same layout and styling

Component-based structure (Header, Footer, Sections)

Fully mobile responsive

2. Works / Portfolio CMS

Create a CMS collection for "Works".

Admin should be able to:

Add new works

Edit existing works

Delete works

Each work item includes:

Title

Description

Image

Category (optional)

Works page dynamically renders content from CMS.

3. Testimonials / Review System
CMS Side:

Create a "Testimonials" collection in Tina CMS.

Admin can:

Add testimonials

Edit testimonials

Delete testimonials

Approve or unapprove testimonials (moderation field)

Each testimonial includes:

Name

YouTube link

Rating (1–5)

Review message

Approval status (boolean)

4. Review Submission (Frontend Form)

Custom "Write a Review" form on frontend

Submissions stored in backend (database or file-based solution)

Reviews should NOT appear publicly until approved

Admin controls approval inside CMS

5. Mobile Responsiveness

Fully responsive layout

Optimized for mobile, tablet, desktop

Maintain existing design consistency

PHASE 2 – Ecommerce & Digital Product Selling (Future Implementation)

To be implemented later:

1. Digital Product Selling

Sell PNG / PSD files

Product listing page

Product detail page

2. Payment Integration

Integration with:

Razorpay (UPI, Cards, Wallets)

3. Guest Checkout

No account required

User enters name + email

Payment processed via Razorpay

4. Automatic File Delivery

After successful payment:

Instant download link shown

Email with download link sent

Download link should be protected

Secure file access (no public direct URL access)

5. File Protection

Files stored securely

Access controlled via payment validation

Optional download limits

Architecture Philosophy

Static-first performance (Astro)

Git-based structured content (Tina CMS)

Modular scalable structure

Ecommerce handled as separate system layer in Phase 2