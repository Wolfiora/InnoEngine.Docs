---
title: ImGuizmo loading and borrowed-state tests
description: Verify loading, owned style retirement and parent-state restoration.
uid: project.inno-native-imguizmo-tests
kind: project
owners:
  - Inno.Native.ImGuizmo.Tests
---
# ImGuizmo loading and borrowed-state tests

`Inno.Native.ImGuizmo.Tests` validates the engine's integration lifetime rather than publishing a generated native API manual.

`Init_ShouldLoad` checks actual loading. `OwnedStyleCanRetireWithoutReleasingTheGlobalBorrow` distinguishes an owned style from borrowed global state. `IntegerScopeAndSingleStringIdRestoreTheirParentState` preserves the parent state after scoped selection.

## Required product and execution

The suite requests the `editor` native product for the selected target and configuration. [The unified plan](../../contributing/validate-change.md#native-and-process-requirements) prepares its deployed closure; missing deployment fails instead of searching neighboring outputs for a library.

Keep owned and borrowed state distinct during cleanup, including failure paths. Native smoke tests do not replace gizmo interaction, camera, scene or Editor product acceptance.

[Browse the pinned assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/backends/ImGui/tests/Inno.Native.ImGuizmo.Tests/ImGuizmoInitTests.cs) and [engine integration boundary](inno-native-imguizmo.md).
