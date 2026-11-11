---
title: "BuildHostServices"
description: "Reference for BuildHostServices in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.e92d4d6c3d54ce8f
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `BuildHostServices`

This reference describes `BuildHostServices` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-cd5d2ab6015b50a4) | Method |
| [`environmentComparer`](#api-0157b51d7ee7f183) | Property |
| [`executableExtension`](#api-119422d02932c1d1) | Property |
| [`inputPaths`](#api-3eb44661f22ab9b8) | Property |
| [`workspaces`](#api-02015486bc087edb) | Property |

## Type declaration

<a id="api-e92d4d6c3d54ce8f"></a>
<!-- api: T:Inno.Build.Toolchains.BuildHostServices 98a7c3bf4ca21f93132bc8abe63cb53eb164eb72475e8dba81f15da7bcae4356 -->

```csharp
public sealed class Inno.Build.Toolchains.BuildHostServices
```

Freezes host execution capabilities independently of a product target SDK.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Host/BuildHostServices.cs#L10).

## `#ctor`

<a id="api-cd5d2ab6015b50a4"></a>
<!-- api: M:Inno.Build.Toolchains.BuildHostServices.#ctor(Inno.Build.Toolchains.IToolchainWorkspaceProvider,System.StringComparer,System.Collections.Generic.IEnumerable{System.String},System.String) 0bd0d5326898ddfeae103488170b403fe6f0de547231362b7a0a34ce6ef38d68 -->

```csharp
public Inno.Build.Toolchains.BuildHostServices.BuildHostServices(Inno.Build.Toolchains.IToolchainWorkspaceProvider workspaces, System.StringComparer? environmentComparer = null, System.Collections.Generic.IEnumerable<string>? inputPaths = null, string executableExtension = "")
```

Captures execution policy and its implementation inputs.

**Parameter `workspaces`:** The host's scoped execution path provider.

**Parameter `environmentComparer`:** The host's environment variable name semantics.

**Parameter `inputPaths`:** Checkout-relative implementation files included in native recipe identity.

**Parameter `executableExtension`:** The host executable suffix, or an empty string for suffix-free executable names.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Host/BuildHostServices.cs#L27).

## `environmentComparer`

<a id="api-0157b51d7ee7f183"></a>
<!-- api: P:Inno.Build.Toolchains.BuildHostServices.environmentComparer 4196edbe573d6a74b42f47cf071200421b633d13877ae57fc65bdfbbbbcb9c0c -->

```csharp
public System.StringComparer Inno.Build.Toolchains.BuildHostServices.environmentComparer { get; }
```

Gets environment variable name semantics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Host/BuildHostServices.cs#L47).

## `executableExtension`

<a id="api-119422d02932c1d1"></a>
<!-- api: P:Inno.Build.Toolchains.BuildHostServices.executableExtension ef8f564a298b42b6d344d4f489e280d25a805a0ce42737b18d90d41a9afc86e4 -->

```csharp
public string Inno.Build.Toolchains.BuildHostServices.executableExtension { get; }
```

Gets the host-owned executable suffix.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Host/BuildHostServices.cs#L55).

## `inputPaths`

<a id="api-3eb44661f22ab9b8"></a>
<!-- api: P:Inno.Build.Toolchains.BuildHostServices.inputPaths 8ea196dd348df24e42b7cf5d880c90fff45b69e7530a134e949bbaac4155abea -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Build.Toolchains.BuildHostServices.inputPaths { get; }
```

Gets checkout-relative execution implementation inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Host/BuildHostServices.cs#L51).

## `workspaces`

<a id="api-02015486bc087edb"></a>
<!-- api: P:Inno.Build.Toolchains.BuildHostServices.workspaces c978baa65182b27af8269a299b785571fd5fea53228ce7842a65f0a3fa50e03f -->

```csharp
public Inno.Build.Toolchains.IToolchainWorkspaceProvider Inno.Build.Toolchains.BuildHostServices.workspaces { get; }
```

Gets the host's scoped execution path provider.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Host/BuildHostServices.cs#L43).
