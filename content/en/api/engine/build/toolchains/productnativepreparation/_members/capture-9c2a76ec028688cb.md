---
uid: api.9c2a76ec028688cbeec3b30675a02155b43b0e8d5500695c88f880a0ef01442b
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ProductNativePreparation.Capture(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.ProductNativeBuildPlan,Inno.Build.Toolchains.ProductNativeBuildResult,System.String)"
source: xml
reviewed: 390ce032f2eb8ccafd9db91a943818c5d93cca50aba3a195588577a0a844d364
title: "Capture"
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
