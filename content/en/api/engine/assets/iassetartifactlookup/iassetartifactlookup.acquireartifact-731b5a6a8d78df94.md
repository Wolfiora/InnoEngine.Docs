---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.731b5a6a8d78df9453510134b6415c3b058018e82ba842bfe7de874c01f8161d
symbol: engine:Inno.Assets:M:Inno.Assets.IAssetArtifactLookup.AcquireArtifact(System.Guid,System.String)
title: IAssetArtifactLookup.AcquireArtifact
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
sourceFingerprint: 03518c35cdbf737ca9a4eb3f745c96ae14711da988d555549e1213f3f3769564
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `persistentID`:** The persistent asset identity.

**Parameter `outputName`:** The required output protocol.

## Returns

A caller-owned immutable artifact lease.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The requested output is unavailable or invalid.
