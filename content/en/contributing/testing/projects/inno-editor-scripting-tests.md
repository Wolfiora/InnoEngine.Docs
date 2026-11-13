---
title: Editor scripting and authoring workflow tests
description: Verify script projection, Inspector layout, viewport composition and shader editing.
uid: project.inno-editor-scripting-tests
kind: project
owners:
  - Inno.Editor.Scripting.Tests
---
# Editor scripting and authoring workflow tests

`Inno.Editor.Scripting.Tests` checks actual Editor workflows that cross scripting, inspection, rendering and asset authoring. These are separate from the managed compiler's language and cache tests.

## Scripting and execution context

Source-local asset paths retain compile-time ownership across deployments, installed plugins, IDE references and project mapping. Generated registration uses the target framework's reference contracts. Project-settings facades fail outside an execution scope, restore nested scopes correctly, reject out-of-order disposal without losing the active scope and isolate parallel async flows.

## Inspector and viewport behavior

Style tests scale dimensions and fonts together, preserve ratios, clamp/reset zoom and render wrapped text through a safe literal path. Inspection tests balance read-only/disabled scopes after a child failure, end a failed panel window and permit later content, and scope text-edit state by renderer owner and property path. Presentation attributes compose while custom drawers remain extensible.

Native layout tests cover floating-panel close on release, tooltips within viewport bounds, wrapped help boxes without horizontal overflow and continuous opaque rounded title/body coverage. Viewport composition snapshots and canonicalizes model layers, rejects null or duplicate entries, and keeps capability, mode and projection validation atomic.

## Shader authoring workflows

Parameter presentation round-trips without changing runtime definitions or the semantic program. Invalid bounds fail before graph mutation. Diagnostic checks use the standard transient modal without altering selection or history. Import-settings Undo/Redo restores valid and invalid states accurately.

## Environment and execution

Use [the validation plan](../../validate-change.md#native-and-process-requirements) to prepare the actual Editor native closure and selected SDK context. Do not reuse unrelated output DLLs or treat missing libraries, tools or windows as passing evidence. A focused filter cannot replace required owner results.

Native UI fixtures disable default `imgui.ini` persistence. Layout and state assertions use memory or owned temporary inputs; no runtime state is written to compilation output. Fixtures release their own projects, modules and contexts in dependency order.

[Browse the pinned workflow assertions](https://github.com/Wolfiora/InnoEngine/tree/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/scripting/Inno.Editor.Scripting.Tests). See [compiler tests](inno-scripting-compiler-tests.md) for language acceptance that does not require Editor presentation.
