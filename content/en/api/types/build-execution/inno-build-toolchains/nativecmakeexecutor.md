---
title: "NativeCMakeExecutor"
description: "Reference for NativeCMakeExecutor in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.6c92d470e8438f79
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `NativeCMakeExecutor`

This reference describes `NativeCMakeExecutor` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`BuildAsync`](#api-14bdcd9fd75aa45d) | Method |
| [`FindOutput`](#api-d53481ca50889aaf) | Method |
| [`PrepareSourceAsync`](#api-bfbfc1efd560fbd9) | Method |

## Type declaration

<a id="api-6c92d470e8438f79"></a>
<!-- api: T:Inno.Build.Toolchains.NativeCMakeExecutor 5bb757768d0cbf4afb80f4a3348620dc5d0266aeda08e7add233228a6f7a52b4 -->

```csharp
public static class Inno.Build.Toolchains.NativeCMakeExecutor
```

Executes component-owned CMake definitions using an already frozen target SDK selection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeCMakeExecutor.cs#L13).

## `BuildAsync`

<a id="api-14bdcd9fd75aa45d"></a>
<!-- api: M:Inno.Build.Toolchains.NativeCMakeExecutor.BuildAsync(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.NativeComponentDescriptor,System.String,System.String,System.Collections.Generic.IReadOnlyList{System.String},System.Threading.CancellationToken) 2aaf3909dff949a8fcf184cd2abd5810d07a322f90988289596a5f4e675984ed -->

```csharp
public static System.Threading.Tasks.Task<string> Inno.Build.Toolchains.NativeCMakeExecutor.BuildAsync(Inno.Build.Toolchains.NativeBuildContext context, Inno.Build.Toolchains.NativeComponentDescriptor component, string sourceDirectory, string? target, System.Collections.Generic.IReadOnlyList<string> componentArguments, System.Threading.CancellationToken cancellationToken)
```

Configures and builds an explicit component target without detecting the current platform.

**Parameter `context`:** The recipe-owned producer scope supplied by NativeArtifactPublisher, with frozen tools and inputs.

**Parameter `component`:** The unique component owner of target-scoped intermediate output.

**Parameter `sourceDirectory`:** The declared component-owned source directory, resolved to the operation's independent copy.

**Parameter `target`:** The declared CMake build target, or null for the complete selected project.

**Parameter `componentArguments`:** Semantic component options; SDK and generator arguments come from the selection.

**Parameter `cancellationToken`:** Cancels and drains the complete tool process tree.

**Returns:** The owned CMake build directory after successful compilation.

**Throws `System.InvalidOperationException`:** Tools are unassigned or configuration or compilation fails.

**Throws `System.OperationCanceledException`:** The operation was canceled.

**Throws `System.ArgumentException`:** Product definitions conflict with a semantic definition owned by the component recipe.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeCMakeExecutor.cs#L86).

## `FindOutput`

<a id="api-d53481ca50889aaf"></a>
<!-- api: M:Inno.Build.Toolchains.NativeCMakeExecutor.FindOutput(Inno.Build.Toolchains.NativeBuildContext,System.String,System.String) af9d21b3e7ba6bd8119fec0cd7dd40f4a804e93bf73d3a367fb6ae9eb7a40fb0 -->

```csharp
public static string Inno.Build.Toolchains.NativeCMakeExecutor.FindOutput(Inno.Build.Toolchains.NativeBuildContext context, string buildDirectory, string filePattern)
```

Selects one declared output while excluding CMake's compiler probes and other build configurations.

**Parameter `context`:** The selected configuration and target generator policy.

**Parameter `buildDirectory`:** The component-owned CMake intermediate directory.

**Parameter `filePattern`:** The component's exact basename or bounded filename pattern.

**Returns:** The sole matching output, or an explicit failure for a missing or ambiguous result.

**Throws `System.IO.FileNotFoundException`:** The component did not produce exactly one expected output.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeCMakeExecutor.cs#L171).

## `PrepareSourceAsync`

<a id="api-bfbfc1efd560fbd9"></a>
<!-- api: M:Inno.Build.Toolchains.NativeCMakeExecutor.PrepareSourceAsync(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.NativeComponentDescriptor,System.Threading.CancellationToken) 7ce40f73e5da3e880d205e7e96b40dae4a07f33860f14856536b0ccb1be272f2 -->

```csharp
public static System.Threading.Tasks.Task<Inno.Build.Toolchains.NativeCMakeSource> Inno.Build.Toolchains.NativeCMakeExecutor.PrepareSourceAsync(Inno.Build.Toolchains.NativeBuildContext context, Inno.Build.Toolchains.NativeComponentDescriptor component, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Copies the recipe's declared checkout inputs before a cold CMake invocation.

**Parameter `context`:** The producer scope supplied by NativeArtifactPublisher while holding its intermediate lease.

**Parameter `component`:** The sole owner of the intermediate source copy.

**Parameter `cancellationToken`:** Cancels copying before the source candidate is installed.

**Returns:** The same prepared input descriptor for subsequent invocations in this producer scope.

**Throws `System.InvalidOperationException`:** No recipe scope exists or an input changed during copying.

**Throws `System.OperationCanceledException`:** Copying was canceled before publication.

**Throws `System.ArgumentNullException`:** The context or component is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeCMakeExecutor.cs#L39).
