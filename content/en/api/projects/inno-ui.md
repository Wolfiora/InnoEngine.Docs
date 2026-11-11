---
title: Inno.UI
description: Backend-neutral retained documents, execution scopes, input, events and immutable rendering deltas.
uid: project.inno-ui
kind: project
owners:
  - Inno.UI
---
# Inno.UI

This project defines the retained UI contract without selecting a native layout library, GPU renderer or scene implementation. Start with [displaying a UI document](../../manual/ui/use-documents.md). Backend authors also use the explicit provider and frame-building interfaces.

## Document and frame contract

Create a context with positive physical pixel dimensions and a finite positive density. Documents belong to that context. Hide preserves document state; close releases it; context destruction ends all of its documents. Handles are assigned only by an owner and must not be serialized as persistent identities or reused after retirement.

Document sources and fragments carry an explicit language identity. Imported documents additionally identify their required implementation. `SetText` accepts plain Unicode; `SetContent` accepts intentional language-specific markup. Mutation booleans report an existing target and applied operation, not an old/new value comparison.

`Update` advances interaction/layout. `DrainEvents` transfers the backend's queued event snapshot. `Render` returns immutable resource deltas and ordered commands; it does not submit GPU work. Consumers preserve retained resources between frames, apply premultiplied RGBA8 texture updates, and retire GPU allocations under their own in-flight protection.

## Host and script surfaces

Host infrastructure uses `IUiService` explicitly. Runtime scripts use the projected `InnoEngine.UI` namespace and a host-bound `UI` facade. The current export manifest includes `UiInputSnapshot`, document/font asset data, handles, events and render-frame data. Backend capabilities, `IUiBackend`, font registration and `UiRenderFrameBuilder` remain host/backend contracts.

Execution scopes bind an owner and must be released in strict last-in-first-out order. They do not make native operations concurrent or move them to an owner thread. No active scope is an explicit failure.

## Ownership and validation

`UiTextureData` copies its input pixels. Backend frame builders take exclusive ownership of supplied update arrays; callers must never mutate them after transfer. Retirement frames copy their supplied handle arrays. Immutable managed data does not extend a native handle's valid lifetime.

Capability selection is explicit. Unsupported languages or face selection must remain visible failures; a backend must not silently choose another implementation. Default/unassigned handle structs are not valid resources.

Read [UI lifetimes](../../architecture/ui-lifetime.md) and [render-frame consumption](../../extending/ui-render-frames.md) before implementing a consumer.

## Reference

[Browse types and exact member contracts](../types/ui/index.md).
