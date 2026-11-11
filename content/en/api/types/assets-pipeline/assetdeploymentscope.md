---
title: "AssetDeploymentScope"
description: "Reference for AssetDeploymentScope in Inno.Assets.Pipeline."
uid: api.inno.assets.pipeline.9dc7438b2bdceb9c
kind: api
owners:
  - Inno.Assets.Pipeline
apiSurface: source-clr
contracts:
  - project.inno-assets-pipeline
---
# `AssetDeploymentScope`

This reference describes `AssetDeploymentScope` in `Inno.Assets.Pipeline`. Read the [shared contract](../../projects/inno-assets-pipeline.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`AuthoringOnly`](#api-9b19cd5ec4c608ed) | Field |
| [`Runtime`](#api-0770cffdae936766) | Field |

## Type declaration

<a id="api-9dc7438b2bdceb9c"></a>
<!-- api: T:Inno.Assets.Pipeline.AssetDeploymentScope d6fe0ca2ac2f02399be2f2cddabc9e5f06f3de0f34a138a9bed720cf0d3bce1c -->

```csharp
public enum Inno.Assets.Pipeline.AssetDeploymentScope : int
```

Defines whether an imported asset participates in deployed runtime content.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetDeploymentScope.cs#L6).

## `AuthoringOnly`

<a id="api-9b19cd5ec4c608ed"></a>
<!-- api: F:Inno.Assets.Pipeline.AssetDeploymentScope.AuthoringOnly b28ea4f963cd82c25f677fe1bed692a432db3e234a1f619ca6438b66b1bc9ded -->

```csharp
Inno.Assets.Pipeline.AssetDeploymentScope.AuthoringOnly = 1
```

The asset exists only for authoring workflows and is omitted from deployed catalogs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetDeploymentScope.cs#L16).

## `Runtime`

<a id="api-0770cffdae936766"></a>
<!-- api: F:Inno.Assets.Pipeline.AssetDeploymentScope.Runtime ab68ebfb373b6e89f16754ee78063a8f33c8548d58750e47be949f499458ad60 -->

```csharp
Inno.Assets.Pipeline.AssetDeploymentScope.Runtime = 0
```

The asset is deployed and must produce a named `runtime` artifact output.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetDeploymentScope.cs#L11).
