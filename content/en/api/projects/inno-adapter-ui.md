---
title: Inno.Adapter.UI
description: Explicit UI backend identities, providers and deterministic product composition.
uid: project.inno-adapter-ui
kind: project
owners:
  - Inno.Adapter.UI
---
# Inno.Adapter.UI

This host-layer project lets a product select an available retained UI implementation by identity. It does not own a global backend singleton, scan arbitrary directories, or choose a fallback implementation.

## Provider and catalog contract

`UiBackendCatalog` receives composition-owned providers and validates their identities before exposing a frozen selection. Null providers and duplicate identities are rejected. Selecting an unavailable backend throws `NotSupportedException`; a provider returning null is an invalid implementation.

`UiBackendProvider.CreateBackend` returns a caller-owned backend. Transfer that responsibility to the runtime that will dispose it, or dispose it at the composing boundary if construction cannot continue. The catalog itself does not dispose providers supplied by its caller.

Identity describes implementation selection; it is not a document handle or a renderer choice. A product must still arrange source-language compatibility, Native deployment and a consumer for render frames.

## Related tasks

Read [UI lifetimes](../../architecture/ui-lifetime.md) and [RmlUi backend requirements](../../backends/rmlui.md). Ordinary scripts use the selected UI service, not this composition API.

## Reference

[Browse types and exact member contracts](../types/adapter-ui/index.md).
