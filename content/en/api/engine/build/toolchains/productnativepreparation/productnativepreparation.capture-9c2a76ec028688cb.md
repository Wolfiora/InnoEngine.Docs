---
uid: api.9c2a76ec028688cbeec3b30675a02155b43b0e8d5500695c88f880a0ef01442b
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ProductNativePreparation.Capture(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.ProductNativeBuildPlan,Inno.Build.Toolchains.ProductNativeBuildResult,System.String)"
source: xml
reviewed: ccb88e469dc9949e7f3c45e9d2ac101d84cfbcaa358b7f1096b81f5d856f3d50
title: "ProductNativePreparation.Capture"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Captures successful immutable publications and the content inputs actually read during their preparation.

**Parameter `context`:** The completed operation, whose recorded input hashes are still owned by this preparation.

**Parameter `plan`:** The matching declaration-order product plan.

**Parameter `products`:** The live successful result, retained until the neutral capture finishes.

**Parameter `requestIdentity`:** The identity returned by freezing this operation before preparation.

**Returns:** BCL-only rows suitable for the MSBuild build-lifetime registry, or null for an aggregate or unowned binding publication. The rows contain no leases, delegates, plugin objects or private assembly types.
