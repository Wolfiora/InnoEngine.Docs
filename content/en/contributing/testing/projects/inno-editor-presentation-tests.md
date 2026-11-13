---
title: Editor panel and presentation tests
description: Verify canvas projection, Workbench lifetimes, asset history and Console discovery.
uid: project.inno-editor-presentation-tests
kind: project
owners:
  - Inno.Editor.Presentation.Tests
---
# Editor panel and presentation tests

`Inno.Editor.Presentation.Tests` owns behavior that requires the actual Graph ImGui, Editor ImGui, Workbench and asset-browser implementations. Domain graph/history/navigation suites remain independent of these native preparation dependencies.

## Behavior covered

Graph canvas fixtures cover projection, hit testing, marquee selection, navigation and port geometry. Editor runtime fixtures exercise discovery, commands, selection, panel retirement, failure compensation, state restoration and performance observations. Asset history covers file/directory undo and redo, identity metadata, FileBrowser drag/drop and failure rollback.

`EditorSettingsTests` retains actual Console module discovery, persistent settings, shared history and failure-event assertions. Its log-panel dependency belongs to this presentation closure; a metadata-only fake would not verify the same behavior.

## Environment and execution

The project declares the contract layer but consumes the development product's native inputs. Inspect [the actual plan](../../validate-change.md) rather than interpreting a layer label as proof of native independence. Test filtering cannot remove a build dependency.

Class-level scheduling remains serial. This owner includes performance sampling and declares results non-reusable across runs. Preserve the existing samples and their environment when comparing changes; do not assume a normal contract receipt certifies a new measurement.

Fixtures own their directories, modules and presentation sessions. Keep release ordering, pending retirement and failed compensation assertions. No production visibility or script surface is widened for these tests.

[Browse the pinned presentation owner](https://github.com/Wolfiora/InnoEngine/tree/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/editor/Inno.Editor.Presentation.Tests), or start with [adding a panel](../../../extending/editor-panels.md) to understand its user-facing lifecycle.
