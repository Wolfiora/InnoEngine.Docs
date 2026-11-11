---
title: ImGui deployment and ABI tests
description: Verify native layouts, context lifetime and selected symbol loading.
uid: project.inno-native-imgui-tests
kind: project
owners:
  - Inno.Native.ImGui.Tests
---
# ImGui deployment and ABI tests

`Inno.Native.ImGui.Tests` checks the engine's ImGui deployment boundary. It retains real native correctness evidence without documenting third-party binding members as engine APIs.

## Behavior covered

- `ExplicitManagedLayoutsMatchNativeHeaders` checks the explicitly declared managed layouts against the native header contracts.
- `CreateAndDestroyContext_ShouldSucceed` exercises an actual native context lifetime.
- `TextDisabled_UsesTheLoadedCimguiSymbol` verifies dispatch through the loaded native symbol.

## Required product and execution

The suite requests the `editor` native product for the same target and configuration as its formal build. Use [the validation plan](../validate-change.md#native-and-process-requirements); the selected deployment index is authoritative. A DLL from another output or cache cannot fill a missing deployment.

Fixtures release their own contexts and preserve thread and failure cleanup. These checks do not certify full Editor layout, user interaction or device behavior; those remain with their relevant presentation and product owners.

[Browse the pinned assertions](https://github.com/Wolfiora/InnoEngine/tree/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/backends/ImGui/tests/Inno.Native.ImGui.Tests) and [engine integration boundary](../../api/projects/inno-native-imgui.md).
