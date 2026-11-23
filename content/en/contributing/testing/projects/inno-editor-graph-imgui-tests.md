---
# Generated metadata. Maintained by project synchronization tooling.
uid: project.inno-editor-graph-imgui-tests
symbol: project:Inno.Editor.Graph.ImGui.Tests
title: Inno.Editor.Graph.ImGui.Tests
kind: project
owners:
- Inno.Editor.Graph.ImGui.Tests
sourceFingerprint: 8b3318803b38254f8ea8cbeb01df075d10ea999a8deb14bef8d0111ad95ac754
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: FLwolfy
description:
- Verify graph canvas projection, hit testing, selection, navigation and port geometry.
outdated: false
---
# Inno.Editor.Graph.ImGui.Tests

`Inno.Editor.Graph.ImGui.Tests` owns graph canvas behavior that requires the actual Graph ImGui implementation. Managed document history and Missing recovery remain in [Graph transaction tests](inno-editor-graph-tests.md), which stay independent of this presentation dependency.

## Behavior covered

Graph canvas fixtures cover projection, hit testing, marquee selection, navigation and port geometry.

## Environment and execution

Inspect [the actual plan](../../validate-change.md) rather than interpreting a layer label as proof of native independence. Test filtering cannot remove a build dependency.

[Browse the pinned graph canvas owner](https://github.com/Wolfiora/InnoEngine/tree/baed28a5cf8aa268df22d254c314f3ec86a8eb2f/tests/composition/editor/presentation/Inno.Editor.Graph.ImGui.Tests).
