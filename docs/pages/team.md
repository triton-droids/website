# Team Page

The Team page showcases the members of Triton Droids, organized by roles and responsibilities.

**Location:** `src/pages/Team/Team.tsx`  
**Route:** `/team`

## Overview

The Team page displays information about the organization's members, organized into different categories:

1. **Executive Board** - Leadership team
2. **Team Leads** - Project and department leaders

## Structure

### Hero Section

The page opens with:

- `<HeroHeading>Meet The Team</HeroHeading>`
- `<BodyText size="lg">` descriptive paragraph about the team members
- Team photo (`team-hero.webp`)

### Executive Board Section

Displays members of the executive board with their roles, photos, bios, and LinkedIn profiles using `TeamMemberCard` (rendered via `ExecutiveCard`).

### Team Leads Section

Shows team leads for various engineering subteams and operations:

- Displayed in a responsive 2-column (mobile) to 3-column (desktop) grid.
- Cards can be clicked or activated with keyboard (`Enter`/`Space`) to view an expanded profile modal (`role="dialog"`).
- Keyboard accessible: pressing `Escape` or clicking the close button collapses the card and returns focus to the triggering card button.

## Accessibility & Focus Management

- **Semantic Dialog**: Expanded cards use `<div role="dialog" aria-modal="true">` with a dedicated accessible close button.
- **Dynamic Descriptions**: `aria-describedby` is only bound when `member.bio` contains non-empty text, avoiding dangling ARIA references.
- **Focus Restoration**: A `lastActiveIdRef` tracks which card button was triggered, restoring keyboard focus directly back to the card trigger upon closing.
