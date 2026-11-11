---
title: Inno.Adapter.UI.RmlUi
description: Managed RmlUi backend with native session ownership, document mutation and complete frame transfers.
uid: project.inno-adapter-ui-rmlui
kind: project
owners:
  - Inno.Adapter.UI.RmlUi
---
# Inno.Adapter.UI.RmlUi

The RmlUi adapter implements `IUiBackend` for RML documents using InnoEngine's native facade. It owns a native session and converts native layout output into the neutral UI frame model. Read [RmlUi backend requirements](../../backends/rmlui.md) before constructing it.

## Native session and transfer contract

Create, use and destroy the backend on the selected native owner thread. The execution scope does not marshal calls. Capabilities explicitly include RML and exclude arbitrary font collection-face selection; nonzero face selection fails with `UiCapabilityUnavailableException`.

Context and document handles must belong to this active backend. Unassigned handles are rejected before native calls; native invalid/stale-handle and operation failures become labeled managed failures. Setter success indicates an applied operation on an existing element, not a value comparison.

Plain text is HTML-encoded before inner-markup replacement. Intentional content must carry the RML language identity. Font families are mapped into private native names; caller data is copied by the native boundary rather than retained as a movable managed pointer.

Render transfer copies changed mesh/texture data, releases and ordered commands. The adapter acknowledges the native frame only after building the complete managed frame. A failed transfer keeps native deltas pending. Event draining has different semantics: the queue is cleared in `finally`, even after a failed copy; it is not a replay log.

## Shutdown limitation

Disposal marks the adapter disposed before native session destruction. If destruction fails, repeated disposal does not retry it. Preserve and report that failure. Do not reuse handles or describe a failed session as cleanly released.

Native resource ownership and renderer GPU ownership remain separate. See [consuming UI frames](../../extending/ui-render-frames.md).

## Reference

[Browse types and exact member contracts](../types/rmlui/index.md).
