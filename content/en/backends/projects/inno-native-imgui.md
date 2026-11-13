---
title: ImGui implementation boundary
description: Editor presentation context, frame borrowing and shutdown responsibilities.
uid: api.projects.inno-native-imgui
kind: project
owners:
  - Inno.Native.ImGui
contracts:
  - architecture.ownership
---
# ImGui implementation boundary

Inno.Native.ImGui supplies the native implementation for the engine's Editor presentation adapters. Editor extensions should start with [adding an Editor panel](../../extending/editor-panels.md) and use the host's presentation lifecycle. They should not establish a second context manager or add native dependencies to runtime scripts.

## Context and frame ownership

The presentation owner creates and selects its context, synchronizes window metrics and input, and drives layout on its owner thread. The process's current context is not a durable session identity. Draw data, lists, vertices and indices are borrowed from that context's current frame; copying a wrapper does not retain them for another frame or generation.

Callbacks retain their managed owners until unregistration and draining complete. Exceptions must not cross the native callback boundary. The platform callback adapter preserves the actual target ABI instead of interpreting an opaque address as an arbitrary managed callback signature.

## Close viewports in dependency order

Stop routing input and submitting work before retiring a viewport's rendering surface. The window owner destroys the native window only after the renderer confirms retirement. Shutdown then drains viewport work and unregisters callbacks and fonts before destroying the context and releasing dependent modules.

An active callback, wrong thread, wrong context or pending retirement prevents premature destruction. Keep the relevant owners alive and report the failure; do not convert a pending state into successful shutdown. [Editor generation ownership](../../architecture/editor-generations.md) explains the wider reload boundary.

## Deployment and scope

The product supplies the matching library and deployment index. Missing mappings or required exports are errors. The engine's managed presentation contracts remain documented separately; third-party cimgui functions, generated types and binding examples are outside this documentation scope. A host reference does not establish cross-platform or physical-device acceptance.
