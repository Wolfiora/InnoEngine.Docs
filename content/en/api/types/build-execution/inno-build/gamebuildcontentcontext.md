---
title: "GameBuildContentContext"
description: "Reference for GameBuildContentContext in Inno.Build."
uid: api.inno.build.1fa6413f61e74eca
kind: api
owners:
  - Inno.Build
apiSurface: source-clr
contracts:
  - project.inno-build
---
# `GameBuildContentContext`

This reference describes `GameBuildContentContext` in `Inno.Build`. Read the [shared contract](../../../projects/inno-build.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`outputDirectory`](#api-4af1589354039879) | Property |
| [`profile`](#api-bbe891bde9795425) | Property |
| [`serialization`](#api-ce33738d7f2ea673) | Property |

## Type declaration

<a id="api-1fa6413f61e74eca"></a>
<!-- api: T:Inno.Build.GameBuildContentContext 1b988a85321c2de2a59ca2b4b71dafed98a2dbb41cd57149d6d5b61e8703c279 -->

```csharp
public sealed class Inno.Build.GameBuildContentContext
```

Supplies isolated staging and profile data for target-specific offline artifact generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/Game/GameBuildContentContext.cs#L9).

## `outputDirectory`

<a id="api-4af1589354039879"></a>
<!-- api: P:Inno.Build.GameBuildContentContext.outputDirectory 1a98c0905f2017ebba257429cc06f8db017e52e8dcf05905a5ac1974edd685a8 -->

```csharp
public string Inno.Build.GameBuildContentContext.outputDirectory { get; }
```

Gets the empty staging directory that receives source-free target artifacts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/Game/GameBuildContentContext.cs#L29).

## `profile`

<a id="api-bbe891bde9795425"></a>
<!-- api: P:Inno.Build.GameBuildContentContext.profile 598e2915e79a7a8d7fba1e8aa7d8bb419121c656f4485769f7c8b222d18365f1 -->

```csharp
public Inno.Build.BuildProfile Inno.Build.GameBuildContentContext.profile { get; }
```

Gets the validated product and target profile.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/Game/GameBuildContentContext.cs#L24).

## `serialization`

<a id="api-ce33738d7f2ea673"></a>
<!-- api: P:Inno.Build.GameBuildContentContext.serialization 824a8c1922646fde2ea3f8069d5875025786e2252268cb6f10251c8e8ac5d227 -->

```csharp
public Inno.Core.Serialization.SerializationGeneration Inno.Build.GameBuildContentContext.serialization { get; }
```

Gets the immutable converter generation pinned by the surrounding build transaction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/Game/GameBuildContentContext.cs#L34).
