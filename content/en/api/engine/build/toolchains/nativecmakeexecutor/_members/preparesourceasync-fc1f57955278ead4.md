---
uid: api.fc1f57955278ead4bb850cb6a910ae8ae61c0ff5682079227398862feb7dd3c8
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeCMakeExecutor.PrepareSourceAsync(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.NativeComponentDescriptor,System.Threading.CancellationToken)"
source: xml
reviewed: 83d753251a94903a98fcb202b9d4b9627ccc51fdf6e02538ae3a3aefb3e460c1
title: "PrepareSourceAsync"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Copies the recipe's declared checkout inputs before a cold CMake invocation.

**Parameter `context`:** The producer scope supplied by NativeArtifactPublisher while holding its intermediate lease.

**Parameter `component`:** The sole owner of the intermediate source copy.

**Parameter `cancellationToken`:** Cancels copying before the source candidate is installed.

**Returns:** The same prepared input descriptor for subsequent invocations in this producer scope.

**Exception `T:System.InvalidOperationException`:** No recipe scope exists or an input changed during copying.

**Exception `T:System.OperationCanceledException`:** Copying was canceled before publication.

**Exception `T:System.ArgumentNullException`:** The context or component is null.
