---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.afcff300db32376c53681800a979babb26ce6c3d547e36b37f0d91d85d7789cd
symbol: engine:Inno.Adapter.Platform:M:Inno.Adapter.Platform.IPlatformBackendFactory.CreateApplication(Inno.Adapter.Platform.PlatformBackendId)
title: IPlatformBackendFactory.CreateApplication
kind: api
owners:
- Inno.Adapter.Platform
apiSurface: source-clr
sourceFingerprint: 288cda3cd0eb7ad07d3919c5a37146a610ba48237b41ed203b38935b7c4bfd6a
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
