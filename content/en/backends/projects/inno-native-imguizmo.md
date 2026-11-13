---
title: ImGuizmo implementation boundary
description: Scene gizmo presentation and its dependency on the host-owned ImGui context.
uid: api.projects.inno-native-imguizmo
kind: project
owners:
  - Inno.Native.ImGuizmo
contracts:
  - api.projects.inno-native-imgui
---
# ImGuizmo implementation boundary

Inno.Native.ImGuizmo supports scene gizmo presentation inside the Editor's ImGui lifecycle. It is an implementation dependency, not a backend-neutral Scene or game-script API. Scene changes and undo/redo remain the responsibility of the Editor's [history transactions](../../extending/editor-history.md).

## Host lifecycle

The presentation owner supplies the current ImGui context and frame, target window and drawing region. Context selection, drawing and shared style changes are serialized on that owner thread. Borrowed frame state and global style are not separately owned resources that an extension may destroy.

Stop drawing and input before ending context use. Keep the native modules available until all consumers have finished. The engine loader establishes the ImGui dependency before the gizmo module, and releases the gizmo API before that dependency. If API unload fails, it retains the dependency and closes further access rather than continuing through a partially released provider.

## Product boundary

The ImGuizmo toolchain supplies the native product artifact. Initialization errors propagate; silently disabling gizmos would conceal an invalid deployment. The internal module provider is not a public extension point.

Use [Editor panels](../../extending/editor-panels.md), [Editor state](../../extending/editor-state.md) and [Scene ownership](../../architecture/scene-lifecycle.md) for engine extension work. Raw matrix pointers, upstream function calls and generated binding members are intentionally outside the engine documentation scope.
