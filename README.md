# Agentology

An encyclopedia for AI agents, using anthropology as the organizing framework.

**Anthropology, but for agents.**

## Overview

As AI agents become more prevalent, we need frameworks to understand them—not just technically, but as entities that exhibit behaviors, form relationships, and evolve over time.

Agentology borrows from the rich tradition of anthropology to create a structured vocabulary for discussing, classifying, and analyzing AI agents.

## Categories

| Category | Description |
|----------|-------------|
| **Archaeology** | History, lineages, epochs, deprecated agents |
| **Anatomy** | Model architecture, memory, inputs/outputs, compute |
| **Taxonomy** | Classification by autonomy, habitat, specialization |
| **Ethology** | Behaviors, rituals, failure modes, pathologies |
| **Linguistics** | Prompts, dialects, communication patterns |
| **Sociology** | Multi-agent systems, hierarchies, coordination |
| **Ecology** | Environments, niches, adversarial threats |
| **Ethics** | Values, alignment, governance, taboos |

## Tech Stack

- **Framework:** [Astro](https://astro.build) with MDX support
- **Styling:** Tailwind CSS
- **Search:** Pagefind (client-side)
- **Hosting:** GitHub Pages

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Adding Content

Entries are MDX files in `src/content/entries/`. Create a new file with the following frontmatter:

```yaml
---
title: "Entry Title"
category: ethology  # one of: archaeology, anatomy, taxonomy, ethology, linguistics, sociology, ecology, ethics
tags: [tag1, tag2]
related: [other-entry-slug]
status: published  # or draft
description: "A brief description for previews and SEO."
date: 2024-01-01
---
```

Then write your content using Markdown and the available MDX components:

- `<Callout type="note|warning|insight">` — highlighted boxes
- `<AgentCard>` — summary card for agent profiles
- `<Diagram>` — wrapper for architecture visuals
- `<Timeline>` / `<TimelineEvent>` — for historical entries

## License

See [LICENSE](LICENSE) for details.
