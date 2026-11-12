---
title: "AssetDeploymentScope"
description: "Reference for AssetDeploymentScope in Inno.Assets.Pipeline."
uid: api.inno.assets.pipeline.editor-script.fa5c381f86114a5b
kind: api
owners:
  - Inno.Assets.Pipeline
apiSurface: editor-script
contracts:
  - project.inno-assets-pipeline
  - manual.scripting.use-script-api
---
# `AssetDeploymentScope`

This reference describes `AssetDeploymentScope` in `Inno.Assets.Pipeline`. Read the [shared contract](../../projects/inno-assets-pipeline.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`AuthoringOnly`](#api-5190c8d02012a912) | Field |
| [`Runtime`](#api-fe06c3213d810349) | Field |

## Type declaration

<a id="api-fa5c381f86114a5b"></a>
<!-- api: T:InnoEditor.Assets.AssetDeploymentScope aea0e02e3c41081561d76615f58518a49cee2f0472c386778234cc25007a0c76 -->

```csharp
public enum InnoEditor.Assets.AssetDeploymentScope : int
```

Defines whether an imported asset participates in deployed runtime content.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/AssetDeploymentScope.cs#L6).

## `AuthoringOnly`

<a id="api-5190c8d02012a912"></a>
<!-- api: F:InnoEditor.Assets.AssetDeploymentScope.AuthoringOnly 92ace22f6d52e6a9124f1c49cf3c9a4431e8621d1963302fcb61c0bc40da0987 -->

```csharp
InnoEditor.Assets.AssetDeploymentScope.AuthoringOnly = 1
```

The asset exists only for authoring workflows and is omitted from deployed catalogs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/AssetDeploymentScope.cs#L16).

## `Runtime`

<a id="api-fe06c3213d810349"></a>
<!-- api: F:InnoEditor.Assets.AssetDeploymentScope.Runtime 9546dc9dbb778a512e148911b000fcda6f6907e9eb7826fa8120600643107971 -->

```csharp
InnoEditor.Assets.AssetDeploymentScope.Runtime = 0
```

The asset is deployed and must produce a named `runtime` artifact output.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/AssetDeploymentScope.cs#L11).
