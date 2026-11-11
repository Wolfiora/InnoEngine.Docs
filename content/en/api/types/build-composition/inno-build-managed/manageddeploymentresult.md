---
title: "ManagedDeploymentResult"
description: "Reference for ManagedDeploymentResult in Inno.Build.Managed."
uid: api.inno.build.managed.7fa7025e76d36adc
kind: api
owners:
  - Inno.Build.Managed
apiSurface: source-clr
contracts:
  - project.inno-build-managed
---
# `ManagedDeploymentResult`

This reference describes `ManagedDeploymentResult` in `Inno.Build.Managed`. Read the [shared contract](../../../projects/inno-build-managed.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-7f31c9b0a44f7ed6) | Method |
| [`deployment`](#api-5c2a3a4fa7ac46e3) | Property |
| [`files`](#api-a2b1f3b106165d1e) | Property |
| [`outputDirectory`](#api-0eba48d0d4dd9276) | Property |
| [`sdkIdentity`](#api-17585f78b073ffff) | Property |

## Type declaration

<a id="api-7fa7025e76d36adc"></a>
<!-- api: T:Inno.Build.Managed.ManagedDeploymentResult ff4ccf536893e5cfe43f15bd2c9307b93668c5d7a4d87d848fd9f836ab18ff14 -->

```csharp
public sealed class Inno.Build.Managed.ManagedDeploymentResult
```

Describes verified staging output produced by one managed deployment compiler.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/managed/Inno.Build.Managed/ManagedDeploymentResult.cs#L11).

## `#ctor`

<a id="api-7f31c9b0a44f7ed6"></a>
<!-- api: M:Inno.Build.Managed.ManagedDeploymentResult.#ctor(Inno.Build.Managed.ManagedDeploymentId,System.String,System.String,System.Collections.Generic.IReadOnlyList{System.String}) c3b651fff7eefc63b75903af4eb12428a31b8b14d6636f3e827f4d220ad08baa -->

```csharp
public Inno.Build.Managed.ManagedDeploymentResult.ManagedDeploymentResult(Inno.Build.Managed.ManagedDeploymentId deployment, string outputDirectory, string sdkIdentity, System.Collections.Generic.IReadOnlyList<string> files)
```

Freezes successful publication evidence without granting ownership of the pipeline's staging root.

**Parameter `deployment`:** The compiler identity that produced this output.

**Parameter `outputDirectory`:** The directory containing the completed managed publication.

**Parameter `sdkIdentity`:** The exact managed SDK selected from the entry project's configuration.

**Parameter `files`:** The nonempty set of relative output file paths, copied before returning to the pipeline.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/managed/Inno.Build.Managed/ManagedDeploymentResult.cs#L28).

## `deployment`

<a id="api-5c2a3a4fa7ac46e3"></a>
<!-- api: P:Inno.Build.Managed.ManagedDeploymentResult.deployment 21c8ce0a7f072225f9c7290d6aac3cde8be8daf8d02a777bf7e718b066db9c91 -->

```csharp
public Inno.Build.Managed.ManagedDeploymentId Inno.Build.Managed.ManagedDeploymentResult.deployment { get; }
```

Gets the managed compiler identity that produced this publication.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/managed/Inno.Build.Managed/ManagedDeploymentResult.cs#L51).

## `files`

<a id="api-a2b1f3b106165d1e"></a>
<!-- api: P:Inno.Build.Managed.ManagedDeploymentResult.files b491c7556d73a5573e2af8ef4b58ed5cc52c2011eb7639884b1fdb1b69b44f6a -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Build.Managed.ManagedDeploymentResult.files { get; }
```

Gets the frozen relative output file paths.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/managed/Inno.Build.Managed/ManagedDeploymentResult.cs#L66).

## `outputDirectory`

<a id="api-0eba48d0d4dd9276"></a>
<!-- api: P:Inno.Build.Managed.ManagedDeploymentResult.outputDirectory a5b95c8991e341e76ead778b57c9133c80ae7e08fa5c9b9e0373c6c27f40c212 -->

```csharp
public string Inno.Build.Managed.ManagedDeploymentResult.outputDirectory { get; }
```

Gets the completed build-owned publication directory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/managed/Inno.Build.Managed/ManagedDeploymentResult.cs#L56).

## `sdkIdentity`

<a id="api-17585f78b073ffff"></a>
<!-- api: P:Inno.Build.Managed.ManagedDeploymentResult.sdkIdentity 71094c1cf95a3d072bd17c6a9ca7efe51aaa8a9e8b7725bbd467f386cc849758 -->

```csharp
public string Inno.Build.Managed.ManagedDeploymentResult.sdkIdentity { get; }
```

Gets the project-selected managed SDK identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/managed/Inno.Build.Managed/ManagedDeploymentResult.cs#L61).
