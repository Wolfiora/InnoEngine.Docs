---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.fc1f57955278ead4bb850cb6a910ae8ae61c0ff5682079227398862feb7dd3c8
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeCMakeExecutor.PrepareSourceAsync(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.NativeComponentDescriptor,System.Threading.CancellationToken)
title: NativeCMakeExecutor.PrepareSourceAsync
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
reviewed: 24816100b1e09d40b6fe044f30efaf9309af79179f9d22e909ff9f14efddf121
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** The producer scope supplied by NativeArtifactPublisher while holding its intermediate lease.

**Parameter `component`:** The sole owner of the intermediate source copy.

**Parameter `cancellationToken`:** Cancels copying before the source candidate is installed.

## Returns

The same prepared input descriptor for subsequent invocations in this producer scope.

## Exceptions

**Exception `T:System.InvalidOperationException`:** No recipe scope exists or an input changed during copying.

**Exception `T:System.OperationCanceledException`:** Copying was canceled before publication.

**Exception `T:System.ArgumentNullException`:** The context or component is null.
