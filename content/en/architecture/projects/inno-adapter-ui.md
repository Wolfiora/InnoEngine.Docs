---
# Generated metadata. Maintained by project synchronization tooling.
uid: project.inno-adapter-ui
symbol: project:Inno.Adapter.UI
title: Inno.Adapter.UI
kind: project
owners:
- Inno.Adapter.UI
sourceFingerprint: 1cbbdc19a0d1272d1cd12ff92f2d05de93b332adc6f6566ee0725b5d956deaa3
contracts: []
outdatedFor: 4e4fac99390a1bd39ab8652cd5c700a0ade5ec35a4c927bfb2e1fe5efb9d635b

# Authoring metadata. Edit these fields and the explanation below.
source: InnoEngine contributors
description:
- Explicit UI backend identities, providers and deterministic product composition.
outdated: false
---
# Inno.Adapter.UI

This host-layer project lets a product select an available retained UI implementation by identity. It does not own a global backend singleton, scan arbitrary directories, or choose a fallback implementation.

## Provider and catalog contract

`UiBackendCatalog` receives composition-owned providers and validates their identities before exposing a frozen selection. Null providers and duplicate identities are rejected. Selecting an unavailable backend throws `NotSupportedException`; a provider returning null is an invalid implementation.

`UiBackendProvider.CreateBackend` returns a caller-owned backend. Transfer that responsibility to the runtime that will dispose it, or dispose it at the composing boundary if construction cannot continue. The catalog itself does not dispose providers supplied by its caller.

Identity describes implementation selection; it is not a document handle or a renderer choice. A product must still arrange source-language compatibility, Native deployment and a consumer for render frames.

## Related tasks

Read [UI lifetimes](../ui-lifetime.md) and [RmlUi backend requirements](../../backends/rmlui.md). Ordinary scripts use the selected UI service, not this composition API.

## Reference

[Browse types and exact member contracts](../../api/engine/adapter/ui/index.md).
