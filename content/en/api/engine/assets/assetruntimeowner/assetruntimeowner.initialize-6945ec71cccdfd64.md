---
uid: api.6945ec71cccdfd64b603186fa8c11709b3f51827ca5168522b50f2c6b11c034e
symbol: "engine:Inno.Assets:M:Inno.Assets.AssetRuntimeOwner.Initialize(Inno.Assets.AssetObject,Inno.Assets.AssetPath,System.String,System.ReadOnlyMemory{System.Byte},System.Boolean,System.Int64)"
source: xml
reviewed: 72415d01f07c9d31d682e04c48f721463ed72634c8cbac660f4bbc241b79d756
title: "AssetRuntimeOwner.Initialize"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Claims an unowned asset or commits new runtime state to an already owned instance.

## Parameters

**Parameter `asset`:** The instance to initialize; ownership cannot be transferred between databases.

**Parameter `assetPath`:** The current mount-qualified source path.

**Parameter `sourceHash`:** The immutable source fingerprint.

**Parameter `payload`:** Runtime bytes copied before publication.

**Parameter `isMissing`:** Whether the preserved reference is currently unavailable.

**Parameter `version`:** The current content revision used to invalidate runtime caches.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The asset belongs to a different owner.
