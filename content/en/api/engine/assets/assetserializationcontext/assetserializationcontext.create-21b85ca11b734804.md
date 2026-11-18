---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.21b85ca11b734804384e8fee5b36557088ddaff1dcc34c83938cb29a44a2d8c3
symbol: engine:Inno.Assets:M:Inno.Assets.AssetSerializationContext.Create(Inno.Assets.IAssetReferenceResolver,Inno.Assets.AssetDependencyCollection)
title: AssetSerializationContext.Create
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
sourceFingerprint: f382d1fa206c3d9a19b2b1235acef44167d4d58988762d877accec9c9f2ac007
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `references`:** The authoritative asset reference resolver for the operation's complete generation.

**Parameter `dependencies`:** Optional collector that records direct asset dependencies during serialization.

## Returns

A complete immutable asset-aware serialization context.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `references` is null.
