---
title: Consume UI render frames
description: Apply retained mesh and texture deltas, preserve draw order, and
  retire renderer-owned resources.
uid: extending.ui-render-frames
kind: how-to
owners:
  - Inno.UI
contracts:
  - project.inno-ui#document-and-frame-contract
---
# Consume UI render frames

A UI backend produces layout and rendering data without owning a GPU device. Your product's rendering integration consumes `UiRenderFrame`, owns its graphics resources and submits drawing through its selected renderer. InnoEngine does not implicitly import a separate consumer repository's renderer.

## Maintain resource state per context lifetime

A frame contains changed mesh and texture generations, released handles, and ordered draw commands. It is not a complete replacement resource catalog. A mesh used again without changes may appear only in the command list.

Keep a renderer-owned map for the active context/session. A UI resource handle is not a GPU handle or persistent identity. Do not mix maps from unrelated contexts or retain them across backend retirement.

For each frame:

1. Create or replace the GPU resources identified by mesh and texture updates.
2. Preserve the supplied command order and apply each command's clipping state.
3. Interpret untextured commands according to the handle contract rather than resolving an unrelated fallback texture.
4. Retire released resources under your renderer's in-flight frame protection.

Coordinate update, draw and retirement ordering with the actual renderer. A release list does not mean that an earlier submitted GPU frame has finished using the object.

## Preserve pixel and geometry conventions

Texture updates contain tightly packed **premultiplied RGBA8** pixels. Use a compatible blend setup. The RmlUi registration boundary takes straight RGBA8 source pixels and premultiplies them when copying into native storage; do not premultiply that input twice.

Mesh updates contain immutable vertices and triangle indices. Commands reference those stable resources and a UI-surface clipping rectangle. Keep long-lived GPU allocations out of the UI data model; renderer ownership belongs to the rendering integration.

## Build frames in a custom backend

`UiRenderFrameBuilder` is a host/backend SPI, not an ordinary script export. `AddMeshUpdate` and `AddTextureUpdate` take exclusive ownership of their arrays. Do not mutate or return those arrays to a pool afterward. `Build` freezes the result and the builder cannot be reused.

The builder validates assigned handles, positive revisions, nonempty mesh data, index bounds, positive texture dimensions and exact pixel length. It does not validate your complete retained-resource state machine or GPU completion rules.

## Shut down without leaking GPU resources

Destroying a UI context releases its backend documents and resources; it does not dispose allocations owned by your renderer. Keep enough renderer state to retire all of its resources when the context ends. `UiRenderFrame.CreateRetirement` creates a command-free retirement message from assigned handles and copies the supplied handle arrays.

Stop accepting new frames before retiring the consumer. Preserve necessary reading/in-flight protection until the renderer finishes using old resources. Never infer successful retirement merely from an empty last frame.

## Handle partial transfer failures

The RmlUi adapter copies pending native deltas into a managed frame and acknowledges the transfer only after that frame has been built. A failed copy leaves native deltas pending. This protects transfer completeness, but does not make your GPU upload or draw submission transactional. Report and recover at the consumer's own boundary.

See the [UI reference](../architecture/projects/inno-ui.md) and [lifetime model](../architecture/ui-lifetime.md) for the shared contract.
