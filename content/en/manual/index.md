---
title: InnoEngine Manual
description: Find a workflow by what you want to accomplish in the engine.
uid: manual.home
kind: landing
---
# InnoEngine Manual

[Read keyboard, pointer and text input](input/read-input.md) during an active runtime frame, with explicit session and event-consumption boundaries.

The Manual explains how to use the engine's implemented capabilities. Start with a task, then follow its links to the exact contracts and architectural concepts it relies on.

## Editor and projects

- [Start the Editor](../getting-started/first-editor-session.md) and recognize its default workspace.
- [Open a project](../getting-started/first-project.md) without assuming that templates have been created.
- [Read logs and current diagnostics](editor/console.md), filter entries, copy details, and control clearing on Play.
- [Read and publish statistics](editor/statistics.md) through stable feature contributions.
- [Change settings](editor/settings.md) in the scope that owns their persistence.

## State, references, and lifetime

- [Understand identity and Missing states](identity-and-missing.md).
- [Understand ownership](../architecture/ownership.md) before retaining resources or participating in reload.

## Extending and deploying

- [Extend InnoEngine](../extending/index.md) through the boundary appropriate to your task.
- [Customize Console presentation](../extending/customize-console.md) without changing its public logging contract.
- [Choose a platform and product](../platforms/index.md).
- [Understand a backend's responsibilities](../backends/index.md).

## Using reference material

The [API reference](../api/index.md) distinguishes host, script, backend/native, and tooling surfaces. A public CLR member is not necessarily available to scripts. Read the linked shared contract as well as a member's declaration.
