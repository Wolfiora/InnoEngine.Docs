---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.49b7104c542d05260fa3edd2dd8b59ec56e91db69f5f029b2de5655335aba31e
symbol: engine:Inno.Adapter.Platform:M:Inno.Adapter.Platform.PlatformBackendCatalog.CreateApplication(Inno.Adapter.Platform.PlatformBackendID)
title: PlatformBackendCatalog.CreateApplication
kind: api
owners:
- Inno.Adapter.Platform
apiSurface: source-clr
sourceFingerprint: 4e464f2883525401d6de5c91af59bdfcea039bcc8bfb35a3d31ecfd4ccd8ad36
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `backend`:** platform implementation selected by the composition root.

## Returns

A caller-owned backend-neutral platform application.

## Exceptions

**Exception `T:System.NotSupportedException`:** Thrown when the catalog does not contain the selected backend.

**Exception `T:System.InvalidOperationException`:** The selected provider returned no service.
