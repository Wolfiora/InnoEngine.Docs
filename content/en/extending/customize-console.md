---
title: Customize Console presentation
description: Locate Console-specific styles and preserve the panel's behavior and lifecycle.
uid: extending.console-style
kind: how-to
owners:
  - Inno.Editor.Panel.Logging
contracts:
  - architecture.ownership
  - manual.editor.console
---
# Customize Console presentation

Console-specific appearance belongs to `Inno.Editor.Panel.Logging`. Its internal `Styling/ConsoleStyle` owns level colors, card styling, expansion controls, and auto-scroll tolerance. These values are not script APIs or serialized contracts.

## Locate the actual owner

Inspect the panel's style implementation before changing a shared palette. The general Editor palette expresses reusable base colors; Console policy belongs to the Console.

Distinguish a color adjustment from changes to layout, input, selection, or the rendering lifecycle. Those changes carry different behavioral obligations even when they occur in the same panel.

## Preserve the interaction model

- Keep logs distinct from current diagnostics.
- Keep filtering, Collapse, expanded details, and copy operations consistent.
- Follow new entries only when the reader is already at the bottom.
- Preserve the single scrolling entry region and balanced ImGui scopes.
- Do not persist transient log content or selection state as project data.

Read [logs and diagnostics](../manual/editor/console.md) for user-visible behavior.

## Respect host-driven lifetime

The host creates and drives the panel. `OnDraw` is not a general entry point for another extension. A drawing failure is handled through the existing quarantine and retirement behavior; it must not leave native UI stacks or borrowed references unbalanced.

Entry identities distinguish log and diagnostic sources and preserve the complete sequence identity. Do not replace that identity with a shortened hash that can alias different entries.

## Verify the changed behavior

Use the engine's validation planner to select the owning checks. Verify the actual appearance and any interaction you changed. A local style edit does not, by itself, establish that script export, every build tool, or scale benchmarks changed; broader checks need a real dependency or behavioral reason.
