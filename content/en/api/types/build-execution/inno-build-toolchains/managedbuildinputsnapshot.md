---
title: "ManagedBuildInputSnapshot"
description: "Reference for ManagedBuildInputSnapshot in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.aeec2a83d9fbd462
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `ManagedBuildInputSnapshot`

This reference describes `ManagedBuildInputSnapshot` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`CaptureAsync`](#api-5b97ec83aab40d09) | Method |
| [`CreateExecutionAsync`](#api-76596c5f15a51378) | Method |
| [`VerifyAsync`](#api-143a96305b558618) | Method |
| [`fingerprint`](#api-b6ab62e23c48e13b) | Property |

## Type declaration

<a id="api-aeec2a83d9fbd462"></a>
<!-- api: T:Inno.Build.Toolchains.ManagedBuildInputSnapshot aec906b298d735ae3f2b57a18728869fa43a0658f4cdb9dff766ac1799b27e16 -->

```csharp
public sealed class Inno.Build.Toolchains.ManagedBuildInputSnapshot
```

Freezes the selected SDK's evaluated managed source graph without compiling a product.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Managed/ManagedBuildInputSnapshot.cs#L15).

## `CaptureAsync`

<a id="api-5b97ec83aab40d09"></a>
<!-- api: M:Inno.Build.Toolchains.ManagedBuildInputSnapshot.CaptureAsync(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.DotNetSdkDescriptor,System.String,System.Collections.Generic.IReadOnlyDictionary{System.String,System.String},System.Threading.CancellationToken) 4a613fb88971963e161df9ddb179a8586639e1b3b66499de11d2408775956d3a -->

```csharp
public static System.Threading.Tasks.ValueTask<Inno.Build.Toolchains.ManagedBuildInputSnapshot> Inno.Build.Toolchains.ManagedBuildInputSnapshot.CaptureAsync(Inno.Build.Toolchains.NativeBuildContext context, Inno.Build.Toolchains.DotNetSdkDescriptor sdk, string project, System.Collections.Generic.IReadOnlyDictionary<string, string> properties, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Evaluates an explicit managed graph using its frozen SDK and hashes its declared compilation inputs.

**Parameter `context`:** The borrowed operation that owns phase-local content reads and tool statistics.

**Parameter `sdk`:** The SDK already selected for this project; evaluation must use its exact CLI entry.

**Parameter `project`:** The existing entry project whose references define the managed source closure.

**Parameter `properties`:** The immutable compiler and product properties also passed to the actual managed build.

**Parameter `cancellationToken`:** Cancels SDK evaluation, drains its process and removes this operation's request directory.

**Returns:** A snapshot that can be freshly verified after waiting or executing; no Player compilation is performed.

**Constraints:** Restore and evaluation use an owned SDK output layout, independently of ordinary IDE outputs.
An explicit ArtifactsPath remains the caller's responsibility, including its concurrency protection.

**Throws `System.ArgumentNullException`:** A required operation, SDK or property collection is null.

**Throws `System.IO.FileNotFoundException`:** A required source, compiler, restored package input or SDK declaration is absent.

**Throws `System.IO.IOException`:** The source entry escapes the physical checkout or a filesystem alias cannot be resolved.

**Throws `System.InvalidOperationException`:** The selected SDK cannot evaluate the declared graph.

**Throws `System.OperationCanceledException`:** Evaluation or hashing was canceled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Managed/ManagedBuildInputSnapshot.cs#L102).

## `CreateExecutionAsync`

<a id="api-76596c5f15a51378"></a>
<!-- api: M:Inno.Build.Toolchains.ManagedBuildInputSnapshot.CreateExecutionAsync(System.Threading.CancellationToken) b817d3b59b0c738e96777f9587ab7d17938846b6fc0decd4a7f23ee29b468509 -->

```csharp
public System.Threading.Tasks.ValueTask<Inno.Build.Toolchains.ManagedBuildExecution> Inno.Build.Toolchains.ManagedBuildInputSnapshot.CreateExecutionAsync(System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Materializes the operation's declared repository inputs into an exclusively owned source workspace.
Compilers and source extraction must use the returned project and root, never the mutable checkout.

**Parameter `cancellationToken`:** Cancels ownership acquisition or verified copying before execution ownership is returned.

**Returns:** Caller-owned fixed execution inputs. Dispose only after all compiler and source consumers finish.

**Throws `System.InvalidOperationException`:** An input differs from its planned bytes while being copied.

**Throws `System.ArgumentException`:** The project does not belong to the operation's source root.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Managed/ManagedBuildInputSnapshot.cs#L59).

## `VerifyAsync`

<a id="api-143a96305b558618"></a>
<!-- api: M:Inno.Build.Toolchains.ManagedBuildInputSnapshot.VerifyAsync(System.Threading.CancellationToken) 6d9b81235a90223e8d7ce5fa1d005fbf33334bc88f2fe61d5b43b8da9913eee4 -->

```csharp
public System.Threading.Tasks.ValueTask Inno.Build.Toolchains.ManagedBuildInputSnapshot.VerifyAsync(System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Re-evaluates the graph and re-reads its current bytes in a fresh verification phase.

**Parameter `cancellationToken`:** Cancels evaluation and verification without changing any published output.

**Returns:** Completion when the complete current input identity still matches this snapshot.

**Throws `System.InvalidOperationException`:** The graph, SDK, source, resource, analyzer or reference inputs changed.

**Throws `System.OperationCanceledException`:** Verification was canceled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Managed/ManagedBuildInputSnapshot.cs#L140).

## `fingerprint`

<a id="api-b6ab62e23c48e13b"></a>
<!-- api: P:Inno.Build.Toolchains.ManagedBuildInputSnapshot.fingerprint c4333a4c2c0476eb4d6894caab3db6f1061047a048e11a39b5aa619eef0581c5 -->

```csharp
public string Inno.Build.Toolchains.ManagedBuildInputSnapshot.fingerprint { get; }
```

Gets the content identity of the evaluated graph, compiler inputs and selected SDK.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Managed/ManagedBuildInputSnapshot.cs#L41).
