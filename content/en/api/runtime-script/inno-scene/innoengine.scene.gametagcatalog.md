---
title: "GameTagCatalog"
description: "Reference for GameTagCatalog in Inno.Scene."
uid: api.inno.scene.runtime-script.3177b8d67aa09c9e
kind: api
owners:
  - Inno.Scene
apiSurface: runtime-script
contracts:
  - project.inno-scene#scene-ownership-contract
  - manual.scripting.use-script-api
---
# `GameTagCatalog`

This reference describes `GameTagCatalog` in `Inno.Scene`. Read the [shared contract](../../projects/inno-scene.md#scene-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

**Direct interfaces:** `InnoEngine.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`settingProtocolId`](#api-0a1effe5ea7da85d) | Field |
| [`#ctor`](#api-f24f047bae260867) | Method |
| [`Add`](#api-7b5c99a5a81e9eca) | Method |
| [`Clone`](#api-c39dfb7ea83f6ba0) | Method |
| [`GetId`](#api-1ce21e1247211973) | Method |
| [`GetLocalId`](#api-8b3c3208367fa30b) | Method |
| [`GetTags`](#api-0c34868c35170f74) | Method |
| [`IsDefined`](#api-78fc97ea8edafa0c) | Method |
| [`Remove`](#api-8882989ee05a094a) | Method |
| [`settingId`](#api-76cea2ce04973de4) | Property |

## Type declaration

<a id="api-3177b8d67aa09c9e"></a>
<!-- api: T:InnoEngine.Scene.GameTagCatalog 1d9dc5994922e7bb87bd24682874387cb4d71a6f11ab6e12a1cc2fbb7ba9ba76 -->

```csharp
public sealed class InnoEngine.Scene.GameTagCatalog : InnoEngine.Serialization.ISerializable
```

Stores the project-wide tag definitions used to author and validate scene object assignments.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameTagCatalog.cs#L16).

## `settingProtocolId`

<a id="api-0a1effe5ea7da85d"></a>
<!-- api: F:InnoEngine.Scene.GameTagCatalog.settingProtocolId bd837222269c36b5d6c2b7c4ec3091ceb292b9785e2f325ece9a2ed0b8524984 -->

```csharp
public const string InnoEngine.Scene.GameTagCatalog.settingProtocolId = "inno.scene.tags"
```

Gets the immutable project-setting protocol value used by discovery metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameTagCatalog.cs#L21).

## `#ctor`

<a id="api-f24f047bae260867"></a>
<!-- api: M:InnoEngine.Scene.GameTagCatalog.#ctor e8145ba876e9f8e6d59e55209d68a22e668b8cc395f7338f40ccf83f5049abac -->

```csharp
public InnoEngine.Scene.GameTagCatalog.GameTagCatalog()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameTagCatalog.cs#L16).

## `Add`

<a id="api-7b5c99a5a81e9eca"></a>
<!-- api: M:InnoEngine.Scene.GameTagCatalog.Add(System.String) 1bcc65ca027b289309aa2ecf40e093a0d64e8fcc9520ed958cecf533e384de92 -->

```csharp
public bool InnoEngine.Scene.GameTagCatalog.Add(string tag)
```

Adds one normalized project tag definition.

**Parameter `tag`:** The unique tag to define.

**Returns:** `true` when a definition was added.

**Throws `System.ArgumentException`:** Thrown when `tag` is empty or invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameTagCatalog.cs#L108).

## `Clone`

<a id="api-c39dfb7ea83f6ba0"></a>
<!-- api: M:InnoEngine.Scene.GameTagCatalog.Clone a53ffb86d33cd578f9b47bde4ebc391acf42ef733d0fb08fa3d1adb6f95f63cd -->

```csharp
public InnoEngine.Scene.GameTagCatalog InnoEngine.Scene.GameTagCatalog.Clone()
```

Creates a detached mutable copy of this catalog.

**Returns:** An independently owned catalog with the same definitions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameTagCatalog.cs#L155).

## `GetId`

<a id="api-1ce21e1247211973"></a>
<!-- api: M:InnoEngine.Scene.GameTagCatalog.GetId(InnoEngine.Settings.ProjectId,System.String) a5904a3767044c7fdc6b4a1c5de675eafbead6d4df35c88ddd59d5cab07cd9a5 -->

```csharp
public InnoEngine.Settings.ProjectScopedId InnoEngine.Scene.GameTagCatalog.GetId(InnoEngine.Settings.ProjectId projectId, string tag)
```

Gets the complete project-scoped identity of a defined tag.

**Parameter `projectId`:** The current project namespace.

**Parameter `tag`:** The configured tag name.

**Returns:** The canonical `projectId.name` identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameTagCatalog.cs#L72).

## `GetLocalId`

<a id="api-8b3c3208367fa30b"></a>
<!-- api: M:InnoEngine.Scene.GameTagCatalog.GetLocalId(System.String) 128d90a46f8a51758b1d8a836057029e0c97d7f4175f7d820d0179aa9a4126dd -->

```csharp
public InnoEngine.Settings.ProjectLocalId InnoEngine.Scene.GameTagCatalog.GetLocalId(string tag)
```

Gets the stable project-independent identity of a defined tag.

**Parameter `tag`:** The configured tag name.

**Returns:** The deterministic local identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameTagCatalog.cs#L52).

## `GetTags`

<a id="api-0c34868c35170f74"></a>
<!-- api: M:InnoEngine.Scene.GameTagCatalog.GetTags b0c73d9c813f01e1327ef91b0a0f41cc4fa951a579b60c9f0df6c6b5b7fd0b38 -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> InnoEngine.Scene.GameTagCatalog.GetTags()
```

Gets the defined tags with the immutable default tag first.

**Returns:** An independently owned deterministic tag snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameTagCatalog.cs#L37).

## `IsDefined`

<a id="api-78fc97ea8edafa0c"></a>
<!-- api: M:InnoEngine.Scene.GameTagCatalog.IsDefined(System.String) ad4ba96deb543188f0495c8d3300fb1141e6fccd02728930d0ac88f09ba0c35e -->

```csharp
public bool InnoEngine.Scene.GameTagCatalog.IsDefined(string tag)
```

Determines whether an ordinal tag is defined by the project.

**Parameter `tag`:** The tag to resolve.

**Returns:** `true` when the normalized tag is defined.

**Throws `System.ArgumentException`:** Thrown when `tag` is empty or invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameTagCatalog.cs#L89).

## `Remove`

<a id="api-8882989ee05a094a"></a>
<!-- api: M:InnoEngine.Scene.GameTagCatalog.Remove(System.String) 946cc08d8484996d66c9303422adc6eaebab127156f39c5a6a6b448c17f52139 -->

```csharp
public bool InnoEngine.Scene.GameTagCatalog.Remove(string tag)
```

Removes one custom project tag definition without rewriting scene assignments.

**Parameter `tag`:** The custom tag to remove.

**Returns:** `true` when an existing definition was removed.

**Throws `System.ArgumentException`:** Thrown when `tag` is empty or invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameTagCatalog.cs#L134).

## `settingId`

<a id="api-76cea2ce04973de4"></a>
<!-- api: P:InnoEngine.Scene.GameTagCatalog.settingId 2da4e4be2f185f2583589dbc7d5db25b823e7e89689a35d0e50182509c2eab9d -->

```csharp
public static InnoEngine.Settings.ProjectSettingId InnoEngine.Scene.GameTagCatalog.settingId { get; }
```

Gets the stable project setting protocol for the project-wide tag catalog.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameTagCatalog.cs#L29).
