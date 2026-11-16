---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.afcff300db32376c53681800a979babb26ce6c3d547e36b37f0d91d85d7789cd
symbol: engine:Inno.Adapter.Platform:M:Inno.Adapter.Platform.IPlatformBackendFactory.CreateApplication(Inno.Adapter.Platform.PlatformBackendId)
title: IPlatformBackendFactory.CreateApplication
kind: api
owners:
- Inno.Adapter.Platform
apiSurface: source-clr
reviewed: fa1d2e59c7fda46cda50c57e7b0aa116f5c6181cf7cfd7377dfd94cf70d4f353
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
