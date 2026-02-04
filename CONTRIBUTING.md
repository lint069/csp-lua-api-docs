# CONTRIBUTING

## Overview

This guide describes how to contribute documentation to this project.
It applies to all changes submitted through GitHub, including new pages,
edits to existing content, and example additions.

Contributions that do not follow these guidelines may be rejected without review.

> [!TIP]
> For contribution workflow, see the [community contributing guide](https://lint069.github.io/csp-lua-api-docs/community/contributing/).

## Ways to Contribute

Contributions are accepted in the following areas:

- New API reference pages
- Corrections or clarifications to existing documentation
- Additional usage examples
- Typographical or formatting fixes

Requests for new ideas, behavioral changes, or undocumented features should
be raised as GitHub issues before documentation is submitted.

## Contributing via GitHub

All contributions are made through GitHub pull requests.

1. Fork the repository.
2. Create a new branch from `main`.
3. Make your changes following the documentation standards below.
4. Commit your changes with a clear, descriptive message.
5. Open a pull request targeting the `main` branch.

Pull requests should be focused. Do not bundle unrelated changes together.

## Documentation Standards

### Page Types

Documentation in this project generally falls into one of the following categories:

- **Reference**: Describes APIs, types, functions, and primitives.
- **Explanation**: Describes behavior, rationale, or internal concepts.
- **How-to**: Describes a specific task or workflow.

Most API pages are **reference-first**. Avoid mixing tutorials or extended explanations
into reference pages unless explicitly required.

### Page Structure

Most reference pages follow this general order:

1. Frontmatter (`title`, `description`)
2. One- or two-sentence summary
3. Contextual asides (if needed)
4. Usage Patterns
5. Description
6. Parameters / Properties / Methods
7. Examples

Not all sections are required, but ordering should be preserved when present.

### Writing Style

All documentation should follow these rules:

- Use plain, declarative sentences.
- Avoid conversational language and rhetorical questions.
- Avoid excessive emphasis (bold, italics).
- Do not use lead-in labels such as “Feature:”, “Note:”, or “Behavior:” in body text.
- Prefer prose over bullet lists unless listing discrete items (parameters, properties).
- Avoid promotional or opinionated language.

Write as if the reader is already technically competent.

### Asides

Asides (Astro/Starlight callouts) should be used sparingly and only when they add clear value.

- Use `note` for clarifications or contextual information.
- Use `tip` for optional guidance.
- Use `caution` or `danger` only for correctness or safety concerns.

Aside titles should be neutral and descriptive. Avoid questions or comparisons.

### Code Examples

Code examples should:

- Demonstrate a single concept.
- Be minimal but realistic.
- Avoid unnecessary scaffolding.
- Follow existing formatting conventions.

Code examples should not:

- Be pseudocode.
- Explain basic Lua syntax.
- Include debug logging unless relevant.
- Rely on undocumented or unstable behavior.

## What Not to Do

Do not:

- Explain basic Lua concepts.
- Add tutorial-style walkthroughs to reference pages.
- Introduce stylistic patterns not already used in the documentation.
- Add screenshots or media without clear justification.
- Reformat large sections of unrelated content.

## Review Process

All contributions are reviewed for:

- Technical accuracy
- Consistency with existing documentation
- Clarity and tone
- Adherence to this contribution guide

Maintainers may request changes or reject contributions that do not meet these criteria.
