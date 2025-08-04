# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website for "Unconventional Neuroscientists" - a community platform founded by Nayanika Biswas. The site serves as a landing page and information hub for neuroscientists with non-traditional backgrounds and career paths.

## Project Structure

This is a simple static HTML website with the following structure:

- `index.html` - Main landing page with hero section, founder's story, vision, meetups, and community sections
- `team.html` - Team/founder page with detailed information about Nayanika Biswas
- `README.md` - Basic project description
- `crumpled-paper.jpg` - Background image for the handwritten letter section
- `Lite Saturation - Hope.mp3` - Audio file used as optional soundtrack

## Development Commands

This is a static website with no build process or package management. Files can be served directly:

- **Local development**: Open `index.html` directly in a browser or use any static file server
- **No build process**: Pure HTML/CSS/JavaScript - no compilation needed
- **No dependencies**: All styling is inline CSS, fonts loaded from Google Fonts CDN

## Architecture & Key Features

### Design System
- **Primary Color**: `#D2691E` (chocolate/orange) used throughout for branding
- **Typography**: Inter and Poppins font families from Google Fonts
- **Handwritten sections**: Uses Great Vibes and Alex Brush cursive fonts for the founder's letter

### Key Sections
- **Hero with animated logo**: CSS-only brain/neuron logo with floating animation
- **Handwritten letter**: Special styling with crumpled paper background and cursive fonts
- **Background text effects**: Large typography watermarks ("BELONG", "VISION", etc.)
- **Responsive design**: Mobile-optimized with grid layouts that stack on smaller screens

### Navigation
- Fixed header with smooth scroll navigation
- Cross-page navigation between `index.html` and `team.html`
- Footer with Discord join link (placeholder)

### Interactive Elements
- Smooth scrolling navigation
- Header opacity changes on scroll
- Hover effects on buttons and links
- Audio player for optional background music

## Content Areas

### Placeholder Content
Several sections contain placeholder text that should be replaced with actual content:
- Founder's detailed biography on `team.html:491-504`
- Vision statements on `team.html:524-531`
- Community tagline on `index.html:642`
- Contact links (currently point to placeholders)

### Contact Information
- Email: `nayanika@example.com` (placeholder)
- Social media links are placeholder `#` URLs
- Discord invite link is placeholder

## File Modification Guidelines

When editing this codebase:
- Maintain the consistent color scheme (`#D2691E` primary, `#111` dark backgrounds)
- Preserve the handwritten letter styling which uses special CSS classes
- Keep responsive design patterns intact
- Maintain the background text watermark effects
- Audio and image references should remain functional

## Common Tasks

- **Update content**: Replace placeholder text in HTML files
- **Add images**: Reference new images directly in HTML img tags or CSS backgrounds
- **Update contact info**: Modify email and social media links in both HTML files
- **Color adjustments**: Update the `#D2691E` color values consistently across both files

Key Questions Before Redesigning:

  1. Target Audience: Who are your primary visitors? 
  Everyone interested in neuroscience including just curious but not practicing, well into the field and renowned, previously  \in neuroscience but currently doing something else. I want to attract the younger generation that is very interested in building, breaking norms and barriers, just pursuing their passion without traditional paths. 

  2. Main Goals: What should visitors do after visiting? 
  Join Discord, follow social media channels, attend meetups, learn about the community

  3. Content Priorities: What information is most important to include about:
    - Since this is a new community I want people to know about it, the motivation, vision, mission. I want them to be moved to join and follow everywhere
    - I also want information about uncoming events, current event series (current news monday), and all the initiatives like monthly meetups, twitter summer courses handle, weekly series
    - my story
  4. Professional Tone: Do you want to maintain the personal tone that is visionary, inspiring and motivating
  5. Functionality: Do you need features like:
    - Event calendar/registration
    - Member counter
    - Follow on all social
  6. Branding: I want it to be black, white and orange.

Mission and Vision:
What is my long term mission for Unconventional Neuroscience?
1.  Make neuroscience mainstream.
2. Create a community where people feel they belong, feel inspired
3. Make neuroscience accessible and less gatekept.
4. lower the average age of innovation in neuroscience to mid 20s 
5. Reform narrative that you need to be a scientist, have a traditional degree, conventional path
6. Make sure that the people inclined to innovate, choose to do so in neuroscience 
7. build a community that bring together both types of groups - people with diverse background getting into neuroscience and people in neuroscience using it to contribute it other fields.
8. Expose to the world how the smartest brains in the world are interested in solving the brain, have studied the field in spite of going on to do different things or have not studied in it but are getting involved in it
    
Tagline: A Social Engine redefining “Neuroscientist”

Short bio:
We’re not your typical platform. We’re a movement. A home for the outsiders, the self-taught, the mission-driven misfits who believe neuroscience is too important to be gatekept.
Most of us didn’t start in neuroscience. We arrived through a moment — a health crisis, a random paper, a conversation that stuck. Something clicked, and the brain became the mission. But without a traditional degree or “right” background, many of us still don’t feel we belong.
We’re here to change that.
Neuroscience should be accessible, and driven by diverse perspectives. Whether you're self-taught, have a PhD, pivoted from another field, or pivoted to another field — you belong here.
Some of the world’s brightest minds are already obsessed with the brain — founders, artists, engineers, even if they never studied it formally.
We're building a home for them, And for you.
A platform for stories, connections, and people who learn what they need to build, discover and innovate what they believe in.
If that’s not who a scientist is, what is?