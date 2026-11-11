---
title: "GameBuildPackageContext"
description: "Reference for GameBuildPackageContext in Inno.Build."
uid: api.inno.build.f7b1352fad491a22
kind: api
owners:
  - Inno.Build
apiSurface: source-clr
contracts:
  - project.inno-build
---
# `GameBuildPackageContext`

This reference describes `GameBuildPackageContext` in `Inno.Build`. Read the [shared contract](../../../projects/inno-build.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`contentDirectory`](#api-0c83d12654ae761a) | Property |
| [`managedDeployment`](#api-0bda9970854b612d) | Property |
| [`outputDirectory`](#api-c82b9568a97ba70f) | Property |
| [`profile`](#api-72241322168c98ae) | Property |
| [`supportPackDirectory`](#api-c01a31f80556a563) | Property |

## Type declaration

<a id="api-f7b1352fad491a22"></a>
<!-- api: T:Inno.Build.GameBuildPackageContext f0e785beed09992ef837333b4876980afefd63c2f8d9f7862642904d3a38d9f3 -->

```csharp
public sealed class Inno.Build.GameBuildPackageContext
```

Supplies an isolated staging layout to a replaceable platform packager.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/Game/GameBuildPackageContext.cs#L8).

## `contentDirectory`

<a id="api-0c83d12654ae761a"></a>
<!-- api: P:Inno.Build.GameBuildPackageContext.contentDirectory cfbe0bfdea4afeab97d90fba5b9f0844a08e2bbac41b370b2f188c9696a6a3e3 -->

```csharp
public string Inno.Build.GameBuildPackageContext.contentDirectory { get; }
```

Gets the source-free packaged content directory to deploy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/Game/GameBuildPackageContext.cs#L37).

## `managedDeployment`

<a id="api-0bda9970854b612d"></a>
<!-- api: P:Inno.Build.GameBuildPackageContext.managedDeployment f815ebcb3ad28fccfc7b3c9511a3dd135d9f7469a40938b7cd6cb2cbb7122faa -->

```csharp
public Inno.Build.Managed.ManagedDeploymentResult Inno.Build.GameBuildPackageContext.managedDeployment { get; }
```

Gets the verified managed publication produced independently of platform packaging.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/Game/GameBuildPackageContext.cs#L42).

## `outputDirectory`

<a id="api-c82b9568a97ba70f"></a>
<!-- api: P:Inno.Build.GameBuildPackageContext.outputDirectory d3de75e45ae7ba77ef5ed4ca5559fed37b146e15d6d1848ecc5996d64db1f00d -->

```csharp
public string Inno.Build.GameBuildPackageContext.outputDirectory { get; }
```

Gets the empty staging parent where the target must create exactly one output.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/Game/GameBuildPackageContext.cs#L47).

## `profile`

<a id="api-72241322168c98ae"></a>
<!-- api: P:Inno.Build.GameBuildPackageContext.profile e92567e387e16f970367050b8589760da3976707bde8c20c2d190236a970e6e1 -->

```csharp
public Inno.Build.BuildProfile Inno.Build.GameBuildPackageContext.profile { get; }
```

Gets the validated product profile.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/Game/GameBuildPackageContext.cs#L27).

## `supportPackDirectory`

<a id="api-c01a31f80556a563"></a>
<!-- api: P:Inno.Build.GameBuildPackageContext.supportPackDirectory 3b7e718a7e7bb01f9bb964f4f98e260460407f9b5246ffb0e6ffb6e69a3cbb77 -->

```csharp
public string Inno.Build.GameBuildPackageContext.supportPackDirectory { get; }
```

Gets the verified read-only Support Pack directory for this target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/Game/GameBuildPackageContext.cs#L32).
