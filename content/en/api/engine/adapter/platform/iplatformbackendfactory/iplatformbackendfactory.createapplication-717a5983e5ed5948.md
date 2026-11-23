---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.717a5983e5ed59484b3ebd52030ee342488ab1c436876f3cf813fa4902261698
symbol: engine:Inno.Adapter.Platform:M:Inno.Adapter.Platform.IPlatformBackendFactory.CreateApplication(Inno.Adapter.Platform.PlatformBackendID)
title: IPlatformBackendFactory.CreateApplication
kind: api
owners:
- Inno.Adapter.Platform
apiSurface: source-clr
sourceFingerprint: 2d322a1a75f4567de95d49a0362ecfcdc56996520f4966af79ecf2967889d67a
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
