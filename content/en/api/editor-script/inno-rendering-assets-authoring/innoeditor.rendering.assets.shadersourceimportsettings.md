---
title: "ShaderSourceImportSettings"
description: "Reference for ShaderSourceImportSettings in Inno.Rendering.Assets.Authoring."
uid: api.inno.rendering.assets.authoring.editor-script.0103fa65d688d9df
kind: api
owners:
  - Inno.Rendering.Assets.Authoring
apiSurface: editor-script
contracts:
  - project.inno-rendering-assets-authoring
  - manual.scripting.use-script-api
---
# `ShaderSourceImportSettings`

This reference describes `ShaderSourceImportSettings` in `Inno.Rendering.Assets.Authoring`. Read the [shared contract](../../projects/inno-rendering-assets-authoring.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

**Direct interfaces:** `InnoEngine.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b9d74781352a3435) | Method |
| [`catalogOrder`](#api-896ab57f274cb5fd) | Property |
| [`catalogPath`](#api-5804077e434d3e7c) | Property |
| [`exports`](#api-f18b09a43b57c921) | Property |
| [`implementationId`](#api-bf6aae51c39cadaf) | Property |
| [`implementations`](#api-d54bf5cb1eef1695) | Property |
| [`languageId`](#api-23d7664c8e766976) | Property |

## Type declaration

<a id="api-0103fa65d688d9df"></a>
<!-- api: T:InnoEditor.Rendering.Assets.ShaderSourceImportSettings 46dac51109cdba4f9cb2a9f90e924258c91cb72c4c006881ed1e524ae51c8bc1 -->

```csharp
public sealed class InnoEditor.Rendering.Assets.ShaderSourceImportSettings : InnoEngine.Serialization.ISerializable
```

Configures one source-function library through the standard asset import-settings sidecar.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets.Authoring/Importing/ShaderSourceImportSettings.cs#L11).

## `#ctor`

<a id="api-b9d74781352a3435"></a>
<!-- api: M:InnoEditor.Rendering.Assets.ShaderSourceImportSettings.#ctor d369d65748f3bbcd189779ba5e659130338e6386cbcc1e30379a86cf2cb85f2c -->

```csharp
public InnoEditor.Rendering.Assets.ShaderSourceImportSettings.ShaderSourceImportSettings()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets.Authoring/Importing/ShaderSourceImportSettings.cs#L11).

## `catalogOrder`

<a id="api-896ab57f274cb5fd"></a>
<!-- api: P:InnoEditor.Rendering.Assets.ShaderSourceImportSettings.catalogOrder 281b03d2e0d4b448a2157fe6926281337766db9282f2717ed4c9b58274195dc0 -->

```csharp
public int InnoEditor.Rendering.Assets.ShaderSourceImportSettings.catalogOrder { get; set; }
```

Gets or sets the stable ordering value of this library inside its authoring catalog group.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets.Authoring/Importing/ShaderSourceImportSettings.cs#L36).

## `catalogPath`

<a id="api-5804077e434d3e7c"></a>
<!-- api: P:InnoEditor.Rendering.Assets.ShaderSourceImportSettings.catalogPath fb881ce1e969740bae96961340fd1b455ade78acf46681321bea9cf86fb24ac7 -->

```csharp
public string InnoEditor.Rendering.Assets.ShaderSourceImportSettings.catalogPath { get; set; }
```

Gets or sets the slash-delimited authoring catalog path used to group this library in creation UIs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets.Authoring/Importing/ShaderSourceImportSettings.cs#L32).

## `exports`

<a id="api-f18b09a43b57c921"></a>
<!-- api: P:InnoEditor.Rendering.Assets.ShaderSourceImportSettings.exports 65c1b50844e98f6440f8e7c911207334f1f481d75ca100128d8b17ac875c6ce1 -->

```csharp
public string[] InnoEditor.Rendering.Assets.ShaderSourceImportSettings.exports { get; set; }
```

Gets or sets the explicitly exported function names. Unlisted helpers remain private to the source library.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets.Authoring/Importing/ShaderSourceImportSettings.cs#L20).

## `implementationId`

<a id="api-bf6aae51c39cadaf"></a>
<!-- api: P:InnoEditor.Rendering.Assets.ShaderSourceImportSettings.implementationId 7c2db950a8c211925950616fa332b052a228368d0456feaec8df7b28d06ec1dd -->

```csharp
public string InnoEditor.Rendering.Assets.ShaderSourceImportSettings.implementationId { get; set; }
```

Gets or sets the exact implementation key used by the selected rendering backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets.Authoring/Importing/ShaderSourceImportSettings.cs#L24).

## `implementations`

<a id="api-d54bf5cb1eef1695"></a>
<!-- api: P:InnoEditor.Rendering.Assets.ShaderSourceImportSettings.implementations fbb2e7c40d511dd16eabcc17adf549c6c5bac742706cc85560765923f22f8214 -->

```csharp
public InnoEditor.Rendering.Assets.ShaderFunctionAsset[] InnoEditor.Rendering.Assets.ShaderSourceImportSettings.implementations { get; set; }
```

Gets or sets alternate source implementations; all must expose the same public interface with unique backend IDs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets.Authoring/Importing/ShaderSourceImportSettings.cs#L28).

## `languageId`

<a id="api-23d7664c8e766976"></a>
<!-- api: P:InnoEditor.Rendering.Assets.ShaderSourceImportSettings.languageId edefa3632455b3f09f9756dfba2d1423f1a1007259f6a294af85770098ed1acf -->

```csharp
public string InnoEditor.Rendering.Assets.ShaderSourceImportSettings.languageId { get; set; }
```

Gets or sets the registered language identity; an empty selection is an import error.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets.Authoring/Importing/ShaderSourceImportSettings.cs#L16).
