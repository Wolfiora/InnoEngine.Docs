---
uid: api.f35d414f7ea0cebca1fa7616ba0b441ecea7bf764683508d6017a859202d18b7
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ProductNativePreparation.FreezeAsync(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.ProductNativeBuildPlan,System.Threading.CancellationToken)"
source: xml
reviewed: ca4b56d65304e16e9a57870109370a03d5d8e0890e36a8aa252c10dcd452ff49
title: "FreezeAsync"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Identifies the explicitly selected recipe, SDK, configuration and component request before preparation.

**Parameter `context`:** The operation with its selected toolchain and binding generator.

**Parameter `plan`:** The complete product closure; recipe declarations remain ordered.

**Parameter `cancellationToken`:** Cancels source, generator and SDK input capture before preparation starts.

**Returns:** A content identity for the frozen request. Consumers still verify freshness after acquiring reading protection.

**Exception `T:System.InvalidOperationException`:** The toolchain or recipe ownership is incomplete.
