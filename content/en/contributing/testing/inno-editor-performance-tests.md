---
title: Editor scale and interaction performance tests
description: Measure large scenes, asset lists and sustained editing with real native input.
uid: project.inno-editor-performance-tests
kind: project
owners:
  - Inno.Editor.Performance.Tests
---
# Editor scale and interaction performance tests

`Inno.Editor.Performance.Tests` owns scale and performance acceptance for ten thousand scene objects or asset rows, actual native input and sustained editing. Ordinary Play Mode and presentation behavior remain with their contract owners; a private color change does not independently require remeasuring the entire large asset workload.

## Measured journeys

| Workload | Required behavior |
| --- | --- |
| Large scenes and asset lists | Complete dirty checks, serialized snapshots, source freshness and public metadata reads. |
| Input and editing | Real wheel input, search, repeated edits, Undo/Redo and native drawing. |
| Virtualized workflows | Range selection, rename and drag in a large clipped view, retaining functional assertions. |

The three `LargePanelPerformanceTests` source parts share the actual `Inno.Testing.Editor.Native` fixture with Play Mode. They do not copy ImGui, module, asset or scene lifecycle implementations. The test assembly is an explicit discovery root; dynamically discovered types cannot depend on another test assembly accidentally loaded in the process.

## Environment and sample ownership

Use [the validation plan](../validate-change.md) with the matching Editor target, configuration, bindings and native deployment. The performance layer is selected for relevant deep acceptance and changed inputs; the weekly complete performance matrix retains this owner. A missing result is not a pass.

The assembly disables parallel execution to protect the current ImGui context and owner thread. The fixture releases its temporary project. `INNO_UI_PERFORMANCE_INPUT_ROOT` is caller-owned input, not an arbitrary cache that cleanup may delete.

Preserve five default sampling rounds. Record cold build, initialization, operation samples and full process duration separately. Do not reuse an old green performance receipt, shrink the scene, reduce sampling or drop functional assertions to claim faster feedback.

## Diagnose a failure

Use the plan's selected SDK output and product properties for a focused diagnostic. Keep the first failure and already produced raw samples. A rerun needs an explicit reason and comparable machine/input conditions. See [validation results and activity reporting](../validate-change.md#reuse-and-diagnose-results); an ordinary long native build is not a deadline violation.

[Browse the pinned workloads](https://github.com/Wolfiora/InnoEngine/tree/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/editor/Inno.Editor.Performance.Tests).
