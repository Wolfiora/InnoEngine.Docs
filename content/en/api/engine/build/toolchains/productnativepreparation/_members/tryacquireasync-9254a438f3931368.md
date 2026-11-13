---
uid: api.9254a438f3931368b11a96248be6945758b96a33ec70b42778aa4f702a796477
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ProductNativePreparation.TryAcquireAsync(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.ProductNativeBuildPlan,System.String[][],System.String,System.Threading.CancellationToken)"
source: xml
reviewed: 5d7fb043368613a49aa0de060a08ad688de22c034ab37729be1247ae4f79ab49
title: "TryAcquireAsync"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Acquires a new consumer's complete reading protection and verifies mutable inputs after acquisition.

**Parameter `context`:** The consumer operation with its own selected SDK and statistics.

**Parameter `plan`:** The consumer's current complete product declaration.

**Parameter `rows`:** Neutral data captured by a successful preparation in the same root build.

**Parameter `requestIdentity`:** The captured request identity, recomputed from current source, generator, SDK and recipe inputs after acquiring protection.

**Parameter `cancellationToken`:** Cancels acquisition or hashing; partial reading protection is always released.

**Returns:** An independently owned result, or null when inputs, membership or immutable publications no longer match. Null requires normal preparation; it is never evidence that a native build passed.

**Exception `T:System.OperationCanceledException`:** The consumer cancels before completing its reading protection.
