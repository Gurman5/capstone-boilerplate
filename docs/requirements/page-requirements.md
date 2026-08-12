# Team Login and Landing Page Requirements

## Overview

For the Mock Sprint, our team will create a styled login page that leads to a team landing page.

The purpose of the feature is to let a user log in and then view information about our team. The team page will show our team name and information about each team member, including their photo, name, role and a short introduction.

## Main Requirements

The feature will have two main pages:

1. Login Page
2. Team Landing Page

The expected flow is:

Login Page → Successful Login → Team Landing Page

If the login is unsuccessful, the user should stay on the login page and see an error message.

---

## Login Page

The login page should be simple and easy to understand.

It should include:

- Email input
- Password input
- Login button
- Clear error message if the login fails
- A consistent design that matches the team page

### Login Functionality

The user should be able to enter their email and password and press the login button.

If the login details are correct, the user should be taken to the team landing page.

If the login details are incorrect, the user should be shown an appropriate error message and remain on the login page.

The login should use the authentication system already available in the project boilerplate.

---

## Team Landing Page

After logging in, the user should be taken to the team landing page.

The page should include:

- Team name
- Short introduction about the team
- All team members
- Photo of each team member
- Name of each team member
- Role of each team member
- Short blurb about each team member

### Team Members
 
|Name|Role|
|------|-----|
|Darian Rishon Albuquerque | Project Manager |
|Gurman Bedi | Developer |
|Humaid Shamil Jiffrey | Developer |
|Zac Antoniou | UX |
|Yu Ray Goh | Business Analyst |

> Each team member will provide their own photo and short blurb for the final page.

---

## Theme and Design

The login page and team page should have the same overall theme so the website feels consistent.

The design should be:

- Clean and simple
- Professional
- Easy to read
- Easy to navigate
- Consistent between both pages
- Suitable for desktop and smaller screens

The UX designer will decide the final:

- Colours
- Fonts
- Layout
- Button styles
- Team member card design
- Photo styling
- Spacing

The final UX design should still meet the requirements in this document.

---

## Team Member Cards

Each team member should have their own section or card on the team page.

Each card should show:

- Photo
- Name
- Role
- Short introduction/blurb

The cards should use the same design and be easy to read.

---

## Responsive Design

The pages should work on different screen sizes.

On smaller screens, the layout should adjust so that the content is still readable and the user does not need to zoom in to use the page.

---

## Error Handling

If something goes wrong during login, the user should receive a clear message explaining that the login was unsuccessful.

Error messages should be simple and understandable and should not display technical or sensitive information.

---

## Acceptance Criteria

The feature will be considered complete when:

- [ ] A styled login page has been created
- [ ] The login page has an email field
- [ ] The login page has a password field
- [ ] The login page has a login button
- [ ] A user can submit their login details
- [ ] A successful login takes the user to the team page
- [ ] An unsuccessful login shows an error message
- [ ] The team name is displayed
- [ ] All team members are displayed
- [ ] Each member has a photo
- [ ] Each member's name is displayed
- [ ] Each member's role is displayed
- [ ] Each member has a short blurb
- [ ] The login and team pages use a consistent theme
- [ ] The pages are usable on desktop and smaller screens
- [ ] The final implementation follows the agreed UX design

---

## Out of Scope

For this Mock Sprint, we are only focusing on the login and team landing page.

Features such as the following are not required:

- Admin dashboard
- User profile editing
- Advanced account management
- Features unrelated to the team page
- Features for our actual Open Editor Bot client project

The Open Editor Bot project will be handled separately as part of the real client project.

---

## Handoff to UX

The UX designer can use these requirements to create the design for the login and team landing page.

The UX designer can decide the exact colours, fonts, layout and visual style while making sure the required information and functionality are included.

## Handoff to Developers

The developers can use this requirements document together with the UX design when building the feature.

If something in the requirements is unclear or needs to be changed, it should be discussed with the BA and the rest of the team before making a major change.

---

## Document Information

**Prepared by:** Yu Ray Goh  
**Role:** Business Analyst (BA)  
**Task:** Task 2 — Mock Sprint  
**Feature:** Login Page and Team Landing Page  
**Status:** Draft for team review
