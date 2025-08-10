<div align="center">

# RobEn Learning Hub – Site Plan

Version: 1.0 (Draft)  
Last Updated: 2025-08-10

</div>

## 0. Quick Table of Contents
1. Vision & Goals
2. Target Users & Personas (Draft)
3. Success Metrics
4. Information Architecture
5. Key Pages & UX Specifications
6. Feature Matrix & Priorities
7. User Journeys
8. Content Organization Model
9. Design & UX Guidelines
10. Technical Requirements & Architecture (Draft)
11. Data Model (Initial Entities)
12. Implementation Roadmap / Phases
13. Risks & Mitigations
14. Open Questions / Decisions Pending
15. Appendix / Notes

---

## 1. Vision & Goals
Create an engaging, practical STEM learning platform focused on Robotics, Engineering, Programming, and Electronics—combining structured courses, project-based learning, and a collaborative community to accelerate real-world skill development.

### Primary Goals
- Deliver high-quality modular courses with clear progression.
- Enable hands-on learning via final projects and showcases.
- Foster peer interaction (forums, study groups, feedback loops).
- Track measurable progress, mastery, and certifications.
- Provide scalable foundation for future mobile and advanced analytics.

## 2. Target Users & Personas (Draft)
| Persona | Description | Primary Needs | Success Indicator |
|---------|-------------|---------------|------------------|
| Student Starter | 13–18 just entering STEM | Guided path, simple UI | Completes first course |
| Career Switcher | 25–35 reskilling | Efficient filtering, certificates | Adds cert to CV |
| Hobbyist Maker | Tinkering adult | Project ideas, community feedback | Publishes project |
| Instructor | Subject expert | Easy content upload, analytics | Publishes course with enrollments |
| Admin | Ops/QA | Moderation, metrics dashboards | Low churn & healthy forums |

Assumption: Multi-lingual support deferred; initial locale EN.

## 3. Success Metrics
- Course completion rate (%)
- Average time to first enrollment
- Active community participants / month
- Projects submitted per 100 active learners
- Certificate downloads
- Monthly recurring revenue (MRR) / Conversion rate
- 30/90-day retention
- Mobile session share (tracking readiness)

## 4. Information Architecture

### Main Navigation (Nested List Format)
- Home
	- Tracks
		- Browse All Tracks
		- Categories
			- Robotics
			- Engineering
			- Programming
			- Electronics
		- Difficulty Levels
			- Beginner
			- Intermediate
			- Advanced
		- Example Track: Junior Track
			- Topics: Python, Git, Linux Shell
	- My Learning
		- Dashboard
		- My Tracks
		- Progress Tracking
		- Certificates
		- Final Projects
	- About
	- Contact

### Profile Subsections (Nested List Format)
- Profile
	- Personal Information
	- Learning Progress
	- Achievements & Certificates
	- Payment History
	- Account Settings

## 5. Key Pages & UX Specifications

### 5.1 Homepage
Purpose: Welcome + orient + showcase value.
Key Elements:
- Hero (brand, value proposition, primary CTA: Get Started / Browse Courses)
- Featured / Popular courses carousel
- Category overview cards
- Community highlights / project spotlight
- Testimonials / social proof
- Secondary CTA: Join Community / Sign In

### 5.2 Course Catalog
Purpose: Efficient discovery & filtering.
Key Elements:
- Search bar + filters (category, difficulty, duration, price)
- Sort (newest, popularity, rating, price)
- Course cards (thumbnail, title, short desc, rating, difficulty)
- Pagination or infinite scroll (decide: TBD)
- Left sidebar (categories, difficulty, tags)

### 5.3 Individual Course Page
Purpose: Drive enrollment via clarity + trust.
Key Elements:
- Trailer video
- Learning objectives & description
- Curriculum outline (expandable modules/lessons)
- Instructor profile
- Reviews & ratings
- Prerequisites + difficulty badge
- Final project summary
- Pricing & enrollment CTA (sticky)
- Related courses

### 5.4 Learning Dashboard
Purpose: Unified learner control center.
Key Elements:
- Progress overview widgets (in-progress, completed, certificates)
- Continue Learning shortcuts
- Upcoming deadlines / assignments
- Community feed snippet
- Achievement badges & streak tracker

### 5.5 Track Player
Purpose: Seamless focused learning delivery.
Key Elements:
- Video player (speed control, caption toggle)
- Sidebar topic navigation with completion ticks
- Progress bar & module completion percentage
- Interactive exercise embed region
- Quiz panel (modal or inline)
- Discussion thread per topic
- Downloadable resources list

### 5.6 Community & Groups (Per-Track Question)
For each track, consider:
- Should this track have a dedicated community or group feature?
- If yes, what form should it take (forum, study group, project showcase)?
- What are the goals for community engagement within this track?

### 5.7 Assessment System
Key Elements:
- Multi-question types (MCQ, code input, short answer, file upload)
- Timers (optional per quiz)
- Instant feedback & explanations
- Attempt history & analytics
- Final project submission workflow (upload + rubric view)
- Peer review (optional phase) + instructor override
- Auto scoring + manual grading blend

### 5.8 Profile & Account Management
Key Elements:
- Editable personal info & avatar
- Learning analytics (time spent, streaks, completion %)
- Certificate downloads (PDF with verification code)
- Payment methods & transaction history
- Notification & privacy preferences
- Security (password reset, sessions management)

## 6. Feature Matrix & Priorities (MoSCoW Draft)
| Feature Group | Feature | Priority | Phase |
|---------------|---------|----------|-------|
| Auth | Registration/Login/Password Reset | Must | 1 |
| Auth | Email Verification | Must | 1 |
| Auth | Role-Based Access (student/instructor/admin) | Must | 1 |
| Courses | Catalog Browse & Filter | Must | 1 |
| Courses | Course Page & Enrollment | Must | 1 |
| Courses | Video Player | Must | 1 |
| Courses | Curriculum Outline | Must | 1 |
| Payment | One-time Purchase | Must | 1 |
| Payment | Refund Processing | Should | 2 |
| Learning | Progress Tracking | Must | 2 |
| Learning | Certificates Generation | Should | 2 |
| Learning | Interactive Exercises | Should | 2 |
| Learning | Quizzes/Assessments | Must | 2 |
| Community | Basic Forums | Should | 2 |
| Community | Study Groups | Could | 3 |
| Community | Project Showcase | Should | 3 |
| Engagement | Badges & Streaks | Could | 3 |
| Analytics | Learner Analytics Dashboard | Could | 3 |
| Platform | Real-time Notifications | Should | 3 |
| Platform | Mobile App (Native) | Won't (Now) | Future |

## 7. User Journeys
### 7.1 New Visitor
1. Discovery → Homepage / Catalog  
2. Exploration → Filters, course previews  
3. Decision → Reviews + objectives  
4. Registration → Account created  
5. Purchase → Payment success  
6. Onboarding → Dashboard intro / first lesson prompt  
7. Engagement → Community invite / first badge  

### 7.2 Returning Student
1. Login → Dashboard  
2. Resume → Continue last lesson  
3. Assess → Quiz or project submission  
4. Interact → Forum / group discussion  
5. Review → Progress & certificates  

## 8. Content Organization Model
### 8.1 Track Structure (Under Review)
> Note: The structure for tracks (formerly courses) is still under consideration and will not be finalized first. Best practices and user needs are being evaluated.

Example (subject to change):
- Track (e.g., Junior Track)
	- Topics
		- Python
		- Git
		- Linux Shell
	- [Further structure TBD]

### 8.2 Categorization System
- Primary Categories: Robotics, Engineering, Programming, Electronics
- Difficulty Levels: Beginner, Intermediate, Advanced
- Duration Bands: Short (<2h), Medium (2–10h), Long (10h+)
- Tags: Technologies, skills, project types

## 9. Design & UX Guidelines
### 9.1 Visual Identity
- Primary Brand Color: RobEn Blue (exact hex TBD)
- Typography: Clean, accessible sans-serif (e.g., Inter / Roboto) + monospace for code snippets
- Layout: Card-based grids, consistent spacing scale, responsive breakpoints (xs < 600, sm < 960, md < 1280, lg < 1920)
- Iconography: Unified set (e.g., Feather / custom line icons)

### 9.2 UX Principles
- Intuitive Navigation: Persistent top bar + breadcrumb in deep views
- Progressive Disclosure: Collapse advanced details by default
- Accessibility: WCAG 2.1 AA targets (contrast, keyboard nav, captions)
- Feedback: Loading states, skeleton screens, inline validation
- Gamification: Badges, streak, progress bars (Phase 3)

## 10. Technical Requirements & Architecture (Draft)
### 10.1 Core Feature Domains
1. User Management
2. Content Delivery & Curriculum
3. Assessment & Progress Tracking
4. Payment & Monetization
5. Community & Communication
6. Certification & Achievement

### 10.2 Functional Highlights
- Video hosting & streaming (consider external service: e.g., Vimeo API / AWS CloudFront)
- Exercise & quiz builder (question bank + versioning)
- Progress tracking (per lesson completion + quiz scores)
- Certificate generation (templated PDF with hash verification)
- Real-time messaging (WebSocket or Pub/Sub) – deferred to Phase 3

### 10.3 Non-Functional
- Responsive design for all screen sizes
- Performance: Lazy load media, CDN, caching, DB indexing
- Scalability: Horizontal scaling for stateless services; separate media storage
- Security: OWASP Top 10 awareness, encryption at rest for sensitive data
- Privacy: GDPR-ready data export/delete (Phase 3 consideration)

### 10.4 Performance Considerations
- Video streaming optimization (adaptive bitrate if possible)
- CDN for static & media assets
- Caching (HTTP + application layer + precomputed aggregates)
- Load balancing across app servers

### 10.5 (Placeholder) Proposed Tech Stack
| Layer | Option (Draft) | Notes |
|-------|----------------|-------|
| Frontend | React / Next.js | SSR/ISR for SEO-friendly course pages |
| Styling | TailwindCSS / Design System tokens | Consistency & speed |
| Backend | Node.js (NestJS / Express) OR Django | Choose based on team skill |
| DB | PostgreSQL | Relational, strong consistency |
| Caching | Redis | Sessions, rate limiting, queues |
| Media | AWS S3 + CloudFront | Scalable storage & delivery |
| Realtime | WebSocket (Socket.io) | Phase 3 features |
| Auth | JWT + Refresh tokens / OAuth provider | Security & scalability |
| Payments | Stripe | Subscriptions + one-time |
| Messaging/Queue | (Future) RabbitMQ / SQS | Async tasks |

## 11. Data Model (Initial Entities Snapshot)
Entities (high-level):
- User (roles, profile, preferences)
- Course (metadata, category, difficulty)
- Module (order, title)
- Lesson (video, content blocks)
- Quiz (version, timing)
- Question (type, body, options, answer key)
- Submission (quiz attempt, score)
- Project (final project submission, assets, status)
- Certificate (user, course, issue date, verification code)
- Enrollment (user, course, progress)
- Payment (transaction, amount, status)
- ForumThread / Post / Comment
- StudyGroup (members, messages)
- Badge (type, criteria) – Phase 3

## 12. Implementation Roadmap / Phases
### Phase 1 (MVP) – Core Platform
- Auth (registration, login, verification, password reset)
- Basic course catalog + filtering
- Course detail & enrollment flow
- Video player + curriculum structure baseline
- Payment processing (one-time purchases)

### Phase 2 – Learning Depth
- Progress tracking (lesson completion, quiz scores)
- Quizzes & interactive exercises
- Certificates generation
- Basic forums (text threads)
- Instructor content management improvements

### Phase 3 – Engagement & Expansion
- Study groups (basic collaboration)
- Project showcase (gallery + voting)
- Peer review system
- Badges / achievements / streaks
- Advanced analytics dashboards
- Real-time notifications & messaging
- Future: Mobile app exploration

## 13. Risks & Mitigations
| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|-----------|
| Scope Creep | Delays & budget overrun | Medium | Strict phase gating & acceptance criteria |
| Video Cost Scaling | Rising infra cost | Medium | Use adaptive streaming + caching + usage monitoring |
| Low Engagement in Community | Reduced retention | High | Seed content, early moderator involvement |
| Assessment Cheating | Undermines credibility | Medium | Randomize questions, time limits, review flags |
| Payment Failures | Lost revenue | Low | Retry logic, webhook monitoring, status reconciliation |
| Data Model Drift | Technical debt | Medium | Schema migration reviews, versioned APIs |

## 14. Open Questions / Decisions Pending
| Topic | Question | Needed By | Owner |
|-------|----------|-----------|-------|
| Pricing Model | Subscription vs per-course hybrid? | Before Phase 1 billing | Product |
| Video Hosting | Self-host vs 3rd-party (Vimeo/Wistia)? | Prototype cut | Tech Lead |
| Peer Review | Mandatory for final projects? | Phase 2 planning | Instructional Design |
| Mobile Support | Responsive only vs PWA? | Phase 3 start | Engineering |
| Analytics Stack | Build vs integrate (e.g., PostHog) | Before Phase 3 | Data |

## 15. Appendix / Notes
This structured plan consolidates prior raw notes into an actionable blueprint. Sections 2, 10.5, 11, 13, 14 marked Draft / Placeholder expect refinement after stakeholder alignment.

---

Original high-level narrative statement (retained):
> This site plan serves as a comprehensive guide for developing the RobEn Learning Hub platform. Regular reviews and updates should be conducted based on user feedback and evolving requirements.
