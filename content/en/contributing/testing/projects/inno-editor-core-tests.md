---
# Generated metadata. Maintained by project synchronization tooling.
uid: project.inno-editor-core-tests
symbol: project:Inno.Editor.Core.Tests
title: Inno.Editor.Core.Tests
kind: project
owners:
- Inno.Editor.Core.Tests
sourceFingerprint: dc78ad9095005cad83e643b5962dcc9b6348ba8c2c85601c34956f98af2720a4
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: InnoEngine contributors
description:
- Verify canvas projection, Workbench lifetimes, asset history and Console discovery.
outdated: false
---
# Inno.Editor.Core.Tests

`Inno.Editor.Core.Tests` owns Editor runtime behavior that requires the actual Editor ImGui and Workbench implementations. Domain graph/history/navigation suites remain independent of these native preparation dependencies.

## Behavior covered

Editor runtime fixtures exercise discovery, commands, selection, panel retirement, failure compensation and state restoration. Graph canvas geometry belongs to [Graph canvas tests](inno-editor-graph-imgui-tests.md), asset history to [Editor feature tests](inno-editor-features-tests.md) and settings to [Editor settings tests](inno-editor-settings-tests.md).

## Environment and execution

The project declares the contract layer but consumes the development product's native inputs. Inspect [the actual plan](../../validate-change.md) rather than interpreting a layer label as proof of native independence. Test filtering cannot remove a build dependency.

Class-level scheduling remains serial.

Fixtures own their directories, modules and presentation sessions. Keep release ordering, pending retirement and failed compensation assertions. No production visibility or script surface is widened for these tests.

[Browse the pinned presentation owner](https://github.com/Wolfiora/InnoEngine/tree/baed28a5cf8aa268df22d254c314f3ec86a8eb2f/tests/composition/editor/framework/Inno.Editor.Core.Tests), or start with [adding a panel](../../../extending/editor-panels.md) to understand its user-facing lifecycle.
