---
uid: api.6945ec71cccdfd64b603186fa8c11709b3f51827ca5168522b50f2c6b11c034e
symbol: "engine:Inno.Assets:M:Inno.Assets.AssetRuntimeOwner.Initialize(Inno.Assets.AssetObject,Inno.Assets.AssetPath,System.String,System.ReadOnlyMemory{System.Byte},System.Boolean,System.Int64)"
source: xml
reviewed: 122cfb141f25243c38167bb2b696e95f318fb25f8378a560a23c17877e33f16d
title: "Initialize"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Claims an unowned asset or commits new runtime state to an already owned instance.

**Parameter `asset`:** The instance to initialize; ownership cannot be transferred between databases.

**Parameter `assetPath`:** The current mount-qualified source path.

**Parameter `sourceHash`:** The immutable source fingerprint.

**Parameter `payload`:** Runtime bytes copied before publication.

**Parameter `isMissing`:** Whether the preserved reference is currently unavailable.

**Parameter `version`:** The current content revision used to invalidate runtime caches.

**Exception `T:System.InvalidOperationException`:** The asset belongs to a different owner.
