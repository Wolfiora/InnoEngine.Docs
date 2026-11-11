---
title: "ManagedDeploymentCapabilities"
description: "Reference for ManagedDeploymentCapabilities in Inno.Build.Managed."
uid: api.inno.build.managed.3fd177d3b264a5aa
kind: api
owners:
  - Inno.Build.Managed
apiSurface: source-clr
contracts:
  - project.inno-build-managed
---
# `ManagedDeploymentCapabilities`

This reference describes `ManagedDeploymentCapabilities` in `Inno.Build.Managed`. Read the [shared contract](../../../projects/inno-build-managed.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-8ccc55ed52c80941) | Method |
| [`aheadOfTime`](#api-966062c6eb6397b3) | Property |
| [`dynamicCode`](#api-ba499725cc1d03b2) | Property |
| [`nativeStaticLinking`](#api-28d9e5d8e0741371) | Property |
| [`runtimeIdentifiers`](#api-28f886c39fd737a0) | Property |

## Type declaration

<a id="api-3fd177d3b264a5aa"></a>
<!-- api: T:Inno.Build.Managed.ManagedDeploymentCapabilities eefd86ac318fd4f132f660395535075496ed508215a535b7a38f715fa6a73c26 -->

```csharp
public sealed class Inno.Build.Managed.ManagedDeploymentCapabilities
```

Describes the execution and native-link capabilities of one publisher over explicit runtime targets.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/managed/Inno.Build.Managed/ManagedDeploymentCapabilities.cs#L10).

## `#ctor`

<a id="api-8ccc55ed52c80941"></a>
<!-- api: M:Inno.Build.Managed.ManagedDeploymentCapabilities.#ctor(System.Collections.Generic.IReadOnlyList{System.String},System.Boolean,System.Boolean,System.Boolean) 1ec928cb3fa62ab3fdca29167b8a92685eaec962ce04b39e675fe5d1ad795eca -->

```csharp
public Inno.Build.Managed.ManagedDeploymentCapabilities.ManagedDeploymentCapabilities(System.Collections.Generic.IReadOnlyList<string> runtimeIdentifiers, bool dynamicCode, bool aheadOfTime, bool nativeStaticLinking)
```

Freezes the execution policy and supported runtime identifiers declared by a provider.

**Parameter `runtimeIdentifiers`:** The exact runtime identifiers accepted by the selected managed toolchain.

**Parameter `dynamicCode`:** Whether the deployed runtime supports generating executable managed code.

**Parameter `aheadOfTime`:** Whether this publisher compiles managed code before deployment.

**Parameter `nativeStaticLinking`:** Whether native object inputs can participate in the runtime's final link.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/managed/Inno.Build.Managed/ManagedDeploymentCapabilities.cs#L27).

## `aheadOfTime`

<a id="api-966062c6eb6397b3"></a>
<!-- api: P:Inno.Build.Managed.ManagedDeploymentCapabilities.aheadOfTime 8fd4a98ae546027060f3ee083d16171c7850c165be2f266812be62ed58e6b11a -->

```csharp
public bool Inno.Build.Managed.ManagedDeploymentCapabilities.aheadOfTime { get; }
```

Gets whether managed code is compiled ahead of runtime execution.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/managed/Inno.Build.Managed/ManagedDeploymentCapabilities.cs#L56).

## `dynamicCode`

<a id="api-ba499725cc1d03b2"></a>
<!-- api: P:Inno.Build.Managed.ManagedDeploymentCapabilities.dynamicCode 760ff6f17b4b64c884a8e2cc9d1b0004a3989c260f998afdb1936e67fead050d -->

```csharp
public bool Inno.Build.Managed.ManagedDeploymentCapabilities.dynamicCode { get; }
```

Gets whether the deployed runtime permits dynamic executable code generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/managed/Inno.Build.Managed/ManagedDeploymentCapabilities.cs#L51).

## `nativeStaticLinking`

<a id="api-28d9e5d8e0741371"></a>
<!-- api: P:Inno.Build.Managed.ManagedDeploymentCapabilities.nativeStaticLinking 006777093d6d1a918a6df49b79ce8e2aa0fadf2878a6e3e323d8ce0ab07fcce1 -->

```csharp
public bool Inno.Build.Managed.ManagedDeploymentCapabilities.nativeStaticLinking { get; }
```

Gets whether native objects participate in final linking.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/managed/Inno.Build.Managed/ManagedDeploymentCapabilities.cs#L61).

## `runtimeIdentifiers`

<a id="api-28f886c39fd737a0"></a>
<!-- api: P:Inno.Build.Managed.ManagedDeploymentCapabilities.runtimeIdentifiers 9997d0b2f1926216e06ade067bb2139ff3d022eaecfde5ae5d473da6db94be97 -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Build.Managed.ManagedDeploymentCapabilities.runtimeIdentifiers { get; }
```

Gets the immutable supported runtime identifiers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/managed/Inno.Build.Managed/ManagedDeploymentCapabilities.cs#L46).
