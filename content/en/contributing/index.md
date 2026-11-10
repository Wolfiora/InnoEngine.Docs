---
title: Contributing to InnoEngine
description: Find the authoritative development rules and preserve evidence while changing the engine or docs.
uid: contributing.home
kind: landing
---
# Contributing to InnoEngine

Engine and documentation changes share the same public contracts, but their source ownership is separate. Change engine behavior in InnoEngine and reader-facing documentation in InnoEngine.Docs.

## Start with the right rules

- [Engine contribution guide](https://github.com/Wolfiora/InnoEngine/blob/6315a9eea5a5004e352c8d709f7b5ff2b3469d9c/CONTRIBUTING.md).
- [Documentation contribution guide](https://github.com/Wolfiora/InnoEngine.Docs/blob/main/CONTRIBUTING.md).

The applicable rulebooks are the authority for repository changes. This Manual explains the engine rather than maintaining a second copy of those rules.

## Validate the actual change

Use the engine's unified validation plan for code and contract changes. Preserve the first failure and record why a check is rerun. Missing, canceled, skipped, or unavailable checks are not successful evidence.

Documentation builds consume pinned project/API facts. Editing prose or website presentation should not prepare a native engine product. Executable examples still require the actual references and API surface they claim to use.

Follow [example validation](example-validation.md) to declare host or script context and compile the exact code returned by the canonical documentation snapshot.

## Coordinate behavior and documentation

Public behavior changes use paired PRs and immutable source identities. Preparing a documentation candidate does not automatically make it the published reference for a merged engine version. Publish only a matching, verified pair.

## Branding

The InnoEngine logo was designed by [xdzzyq](https://github.com/XDzzzzzZyq). Its [separate branding license](https://github.com/Wolfiora/InnoEngine.Docs/blob/main/public/branding/LICENSE.txt) applies to the logo and its derivatives; it is not covered by the engine's Apache-2.0 source license.
