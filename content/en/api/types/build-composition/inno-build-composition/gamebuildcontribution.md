---
title: "GameBuildContribution"
description: "Reference for GameBuildContribution in Inno.Build.Composition."
uid: api.inno.build.composition.79bc0b2210ad5226
kind: api
owners:
  - Inno.Build.Composition
apiSurface: source-clr
contracts:
  - project.inno-build-composition
---
# `GameBuildContribution`

This reference describes `GameBuildContribution` in `Inno.Build.Composition`. Read the [shared contract](../../../projects/inno-build-composition.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-7b1e44821e5b5183) | Method |
| [`compilerFactory`](#api-1b513b9e6512dcaf) | Property |
| [`platform`](#api-f60b53fc9505370e) | Property |

## Type declaration

<a id="api-79bc0b2210ad5226"></a>
<!-- api: T:Inno.Build.Composition.GameBuildContribution f92b05f4ecf3d6925991b666ec982b001cf98817586baa893a4af6c8d7f02f06 -->

```csharp
public sealed class Inno.Build.Composition.GameBuildContribution
```

Registers a platform contribution with the content implementation selected by a distribution.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/composition/Inno.Build.Composition/GameBuildContribution.cs#L8).

## `#ctor`

<a id="api-7b1e44821e5b5183"></a>
<!-- api: M:Inno.Build.Composition.GameBuildContribution.#ctor(Inno.Build.Composition.BuildPlatformContribution,Inno.Build.Composition.GameContentCompilerFactory) 48095eb420014e83fa126e2ff8497a515d8773f1dd6052d873cd2b8d959bb54a -->

```csharp
public Inno.Build.Composition.GameBuildContribution.GameBuildContribution(Inno.Build.Composition.BuildPlatformContribution platform, Inno.Build.Composition.GameContentCompilerFactory compilerFactory)
```

Captures the complete contribution without instantiating authoring services or tools.

**Parameter `platform`:** The platform-owned target, packaging, Support Pack and SDK contribution.

**Parameter `compilerFactory`:** The selected content implementation factory, invoked once per pipeline composition.

**Throws `System.ArgumentNullException`:** A contribution or factory is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/composition/Inno.Build.Composition/GameBuildContribution.cs#L22).

## `compilerFactory`

<a id="api-1b513b9e6512dcaf"></a>
<!-- api: P:Inno.Build.Composition.GameBuildContribution.compilerFactory 233d9c3b6df4c50bcf5f080f163f110337d523418e0d8b7697aef4a89b91840c -->

```csharp
public Inno.Build.Composition.GameContentCompilerFactory Inno.Build.Composition.GameBuildContribution.compilerFactory { get; }
```

Gets the distribution-selected factory borrowing each pipeline's authoring generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/composition/Inno.Build.Composition/GameBuildContribution.cs#L40).

## `platform`

<a id="api-f60b53fc9505370e"></a>
<!-- api: P:Inno.Build.Composition.GameBuildContribution.platform 9dae79ec6c378ee4df2e23bafb91df7cd700988d17867ee4b5b05347d2b72e55 -->

```csharp
public Inno.Build.Composition.BuildPlatformContribution Inno.Build.Composition.GameBuildContribution.platform { get; }
```

Gets the platform-owned contribution, independent of backend selection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/composition/Inno.Build.Composition/GameBuildContribution.cs#L35).
