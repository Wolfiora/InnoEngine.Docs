---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.6945ec71cccdfd64b603186fa8c11709b3f51827ca5168522b50f2c6b11c034e
symbol: engine:Inno.Assets:M:Inno.Assets.AssetRuntimeOwner.Initialize(Inno.Assets.AssetObject,Inno.Assets.AssetPath,System.String,System.ReadOnlyMemory{System.Byte},System.Boolean,System.Int64)
title: AssetRuntimeOwner.Initialize
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
reviewed: 8fdab0600c879a4b6e0a3e64b273db80636efe7993e661a0eeadf1ef2ec2d3ff
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `asset`:** The instance to initialize; ownership cannot be transferred between databases.

**Parameter `assetPath`:** The current mount-qualified source path.

**Parameter `sourceHash`:** The immutable source fingerprint.

**Parameter `payload`:** Runtime bytes copied before publication.

**Parameter `isMissing`:** Whether the preserved reference is currently unavailable.

**Parameter `version`:** The current content revision used to invalidate runtime caches.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The asset belongs to a different owner.
