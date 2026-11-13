---
title: Present a neutral graph canvas
description: Separate geometry, pointer intent and borrowed draw commands from
  domain edits and History.
uid: extending.graph-canvas
kind: how-to
owners:
  - Inno.Editor.Graph.ImGui
contracts:
  - project.inno-editor-graph-imgui
  - project.inno-editor-graph
---
# Present a neutral graph canvas

Graph.ImGui presents nodes, ports, curves, hit tests and selection geometry without knowing Shader, Rendering or a particular panel. [Graph documents](graph-documents.md) own data mutations and History. The canvas emits intent; a domain consumer validates and commits it.

## Freeze geometry for the frame

GraphCanvasView copies pan, zoom, origin and size at construction, so later navigation cannot change an in-progress projection. It rejects missing navigation state and nonfinite/negative geometry rather than silently repairing input. Screen coordinates remain frame-local.

GraphCanvasLayout stores neutral IDs, positions, sizes, text and ports. SetNodes validates an entire candidate atomically and reuses unchanged node values. Pan/zoom and drag previews do not require rebuilding port geometry or retaining callbacks/domain instances. Draw and hit testing use the same connection curve.

## Route input before stepping the gesture

GraphCanvasPointerController accepts input after focus, occlusion and navigation routing. It tracks neutral selection/preview and returns move/connection intent. Cancel leaves the document unchanged. A completed move becomes one logical undo operation through the domain owner.

Before Save, Close, Play or Reload, the consumer uses the existing operation-preparation notification to finish outstanding previews. Failure retains retryable input; the canvas does not silently discard it or create an independent History stack.

## Borrow drawing only while valid

DrawNode/DrawConnection borrow the current window/frame EditorDrawList. They neither retain nor dispose it. Each native operation still validates thread, session, context, window and frame. Node content callbacks run only while intersecting the canvas; the canvas restores its clip before returning, including when the callback throws. The callback must balance its own style and other scopes.

Pure geometry, hit tests and pointer contracts can run without a native frame. Actual drawing requires a valid owner-thread UI scope. Retained state is neutral; generation shutdown releases extension-owned objects and preserves errors rather than treating a failed gesture as complete.
