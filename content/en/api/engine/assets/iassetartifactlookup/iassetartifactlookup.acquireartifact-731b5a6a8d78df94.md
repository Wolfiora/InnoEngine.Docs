---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.731b5a6a8d78df9453510134b6415c3b058018e82ba842bfe7de874c01f8161d
symbol: engine:Inno.Assets:M:Inno.Assets.IAssetArtifactLookup.AcquireArtifact(System.Guid,System.String)
title: IAssetArtifactLookup.AcquireArtifact
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
reviewed: b3bc1f10f2f29984ffc76717d5072c7658e0b7f41bcd8f8fbf2c3bd6384b9f78
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `persistentId`:** The persistent asset identity.

**Parameter `outputName`:** The required output protocol.

## Returns

A caller-owned immutable artifact lease.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The requested output is unavailable or invalid.
