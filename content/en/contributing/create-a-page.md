---
# Identity metadata. Set once; other pages reference uid through contracts.
uid: contributing.create-a-page
kind: how-to

# Authoring metadata. Edit these fields and the text below.
title: Create a documentation page
description: Add a hand-written page with valid metadata, a navigation position and passing checks.
---
# Create a documentation page

Tutorials, how-to guides, explanations, landing pages and troubleshooting pages are ordinary Markdown files under `content/en/`. You create and maintain them by hand; API synchronization never creates, rewrites or deletes them. API pages and registered project guides are created by synchronization instead: follow [Maintain API documentation](api-documentation.md) for those.

## Choose the page kind

Every page has one primary purpose. Choose it before writing; `kind` records the choice.

| `kind` | Use it for |
| --- | --- |
| `tutorial` | A guided first experience with one complete outcome |
| `how-to` | The steps for one task the reader already wants to perform |
| `explanation` | The model, ownership or lifetime rules behind a feature |
| `troubleshooting` | Symptoms, their causes and the corrective action |
| `landing` | The entry page of a section that directs readers to its pages |
| `project` | The hand-written guide for exactly one engine project |

`api` is reserved for synchronized API pages.

## Create the file

1. Start a branch from `draft`.
2. Add `content/en/<section>/<name>.md`. Use lowercase words separated by hyphens. The path below `content/en/` becomes the address; a directory's own page is `index.md`.
3. Copy the metadata below, keep the three comment lines and replace the values. Remove the relation group when the page has no relation fields.
4. Write exactly one first-level heading, then the text.

```yaml
---
# Identity metadata. Set once; other pages reference uid through contracts.
uid: manual.audio.play-audio
kind: how-to

# Relation metadata. Name actual engine projects and page identities; validation rejects unknown values.
owners:
  - Inno.Audio
contracts:
  - architecture.audio-lifetime#ownership-and-generation-contract
exampleMode: runtime-script
exampleProjects:
  - Inno.Audio

# Authoring metadata. Edit these fields and the text below.
title: Play and control audio
description: Play an imported clip, observe preparation and completion, and release preload ownership.
---
# Play and control audio
```

This is a shortened form of the metadata of [Play and control audio](../manual/audio/play-audio.md). A page without engine-specific content needs only the identity and authoring groups, as in [Prepare your environment](../getting-started/prerequisites.md).

## Fill in the metadata

The three groups differ in how often they change and in what happens when a value is wrong.

| Group | Field | Required | Rule |
| --- | --- | --- | --- |
| Identity | `uid` | Yes | Unique across the site. Lowercase letters, digits, `.`, `_`, `/` and `-`. The usual form is the section and file name joined by dots. Keep it after publication: `contracts` on other pages and documentation queries refer to it. |
| Identity | `kind` | Yes | One value from the table above. |
| Relation | `owners` | No | Exact engine project names, as listed in `reference/projects/catalog.json`. They attach the page to those projects for project search and filtering. A `project` page names exactly one. |
| Relation | `contracts` | No | The `uid`, or `uid#section-anchor`, of each page the reader must know before acting on this one. Queries return these pages together with this page. |
| Relation | `exampleMode`, `exampleProjects` | With C# code | Required together when the page contains a `csharp` or `cs` code block. [Validate documentation examples](example-validation.md) explains the modes. |
| Authoring | `title` | Yes | The page label in navigation and search. |
| Authoring | `description` | No | One sentence stating what the reader learns or accomplishes. |
| Authoring | `aliases` | No | Additional search terms that readers use for the topic. |
| Authoring | `source` | No | The author's name. The page footer then reads "Page written by" followed by that name. |

Relation fields are the only ones that depend on other files. A project that the engine renames or removes leaves its old name in `owners` and `exampleProjects` of hand-written pages, because synchronization does not edit them. Validation then stops with `Unknown project owner` or `Unknown example project` until a Docs change replaces the name.

## Place the page in navigation

`navigation/en.yml` declares the sidebar. Add the page as a `slug` entry in the group where readers expect it. The slug is the path below `content/en/` without `.md`; an `index.md` uses its directory.

```yaml
- label: Documentation workflow
  items:
    - slug: contributing/create-a-page
```

A page without an entry is still published. It is appended below the nearest page above it in its directory, or below its section when no such page exists. A declared slug without a page, or a slug declared twice, fails the site check.

## Write the text

- Begin with what the reader can learn or accomplish.
- Link other pages with relative `.md` paths. Each target and each `#anchor` must exist in `content/en/`.
- Section anchors derive from heading text, so renaming a heading changes its anchor. Search for references before renaming one.
- Markdown only. HTML other than comments is rejected.
- Link the lifecycle, threading, failure and ownership contracts that the task depends on instead of restating them.

## Check and deliver

Use the Node version in `.node-version`.

```text
npm ci
npm run docs:prepare
npm run build
```

`npm run docs:prepare` reads every page and stops at the first invalid one, naming its path.

| Message | Cause |
| --- | --- |
| `Missing page uid` | The metadata has no `uid`. |
| `Unknown documentation page kind` | `kind` is absent or not a listed value. |
| `Documentation requires exactly one H1` | The text has no first-level heading, or several. |
| `Unknown project owner` | An `owners` value is not a current engine project name. |
| `Unknown example project` | An `exampleProjects` value is not a current engine project name. |
| `Examples require an explicit reference mode and unique project identities` | Only one of `exampleMode` and `exampleProjects` is present, or a project repeats. |
| `Missing associated contract` | A `contracts` value names no existing `uid` or section anchor. |
| `Missing documentation link` | A relative link has no target file. |
| `Missing documentation anchor` | A link's `#anchor` is not a section of its target. |

Run `npm run test:browser` as well after a navigation change. Open a pull request into `draft`. Its checks also compile the C# examples; that step needs an engine development host and is not part of the commands above. [Publish documentation from draft](publish-documentation.md) describes previews and the release merge.
