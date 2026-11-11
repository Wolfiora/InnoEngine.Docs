---
title: "ManagedBuildExecution"
description: "Reference for ManagedBuildExecution in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.183523c1327d4db8
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `ManagedBuildExecution`

This reference describes `ManagedBuildExecution` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`Dispose`](#api-78b3e9457ef820a9) | Method |
| [`VerifyAsync`](#api-85e27d4b4be26385) | Method |
| [`engineRoot`](#api-4d0370e0bcf703a0) | Property |
| [`project`](#api-3a6d8d6d2cbb4ea6) | Property |

## Type declaration

<a id="api-183523c1327d4db8"></a>
<!-- api: T:Inno.Build.Toolchains.ManagedBuildExecution 8dc3fe2c048444f0a07bd480631e10fd86b70754467cac016e47bc287ea9a2ac -->

```csharp
public sealed class Inno.Build.Toolchains.ManagedBuildExecution : System.IDisposable
```

Owns a reusable, exclusively leased source workspace containing verified copies of an operation's inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Managed/ManagedBuildExecution.cs#L17).

## `Dispose`

<a id="api-78b3e9457ef820a9"></a>
<!-- api: M:Inno.Build.Toolchains.ManagedBuildExecution.Dispose c976da93de5786ac3d6b78ce178fca7bc6929602ade2fefb465dde77d6462110 -->

```csharp
public void Inno.Build.Toolchains.ManagedBuildExecution.Dispose()
```

Releases exclusive workspace ownership after every compiler and source consumer has finished.
Repeated disposal has no effect; reusable owned files remain available for the next operation.

**Throws `System.IO.IOException`:** Completed workspace ownership metadata cannot be recorded; the execution lease is still released.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Managed/ManagedBuildExecution.cs#L93).

## `VerifyAsync`

<a id="api-85e27d4b4be26385"></a>
<!-- api: M:Inno.Build.Toolchains.ManagedBuildExecution.VerifyAsync(System.Threading.CancellationToken) e83bc411715a34029808eba0833efb1f36a05d6e118f437aa4c00b2e314785f0 -->

```csharp
public System.Threading.Tasks.ValueTask Inno.Build.Toolchains.ManagedBuildExecution.VerifyAsync(System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Checks that owned source copies still match the bytes accepted before compilation.

**Parameter `cancellationToken`:** Cancels complete source verification before the consumer publishes its output.

**Returns:** Completion only when every owned input remains unchanged.

**Throws `System.InvalidOperationException`:** A tool changed a fixed input during execution.

**Throws `System.ObjectDisposedException`:** This execution no longer owns the workspace.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Managed/ManagedBuildExecution.cs#L73).

## `engineRoot`

<a id="api-4d0370e0bcf703a0"></a>
<!-- api: P:Inno.Build.Toolchains.ManagedBuildExecution.engineRoot 728c14bb98cd462bbfb89cb6801dc860aae7552077b60024e776d6917d120a40 -->

```csharp
public string Inno.Build.Toolchains.ManagedBuildExecution.engineRoot { get; }
```

Gets the fixed source root used by compilation and source extraction until disposal.
SDKs and restored packages retain their explicitly selected external locations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Managed/ManagedBuildExecution.cs#L51).

## `project`

<a id="api-3a6d8d6d2cbb4ea6"></a>
<!-- api: P:Inno.Build.Toolchains.ManagedBuildExecution.project 5d90400b6a416d1f3eda9c1b54720adbe8c900d9b4c593bfb4e02284350e91c0 -->

```csharp
public string Inno.Build.Toolchains.ManagedBuildExecution.project { get; }
```

Gets the entry project within this execution's copied source root.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Managed/ManagedBuildExecution.cs#L56).
