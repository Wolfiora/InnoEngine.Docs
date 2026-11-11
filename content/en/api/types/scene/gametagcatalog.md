---
title: "GameTagCatalog"
description: "Reference for GameTagCatalog in Inno.Scene."
uid: api.inno.scene.a261e179a8be25ca
kind: api
owners:
  - Inno.Scene
apiSurface: source-clr
contracts:
  - project.inno-scene#scene-ownership-contract
---
# `GameTagCatalog`

This reference describes `GameTagCatalog` in `Inno.Scene`. Read the [shared contract](../../projects/inno-scene.md#scene-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Core.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`settingProtocolId`](#api-b7e01cb15066d27e) | Field |
| [`#ctor`](#api-e5d4dc4ec853b47b) | Method |
| [`Add`](#api-73ae95f41f064f0f) | Method |
| [`Clone`](#api-954a1f32cc4f4acc) | Method |
| [`GetId`](#api-b14254ee7fe60ab8) | Method |
| [`GetLocalId`](#api-22e3f22985e3064b) | Method |
| [`GetTags`](#api-f78c1475c45e6a81) | Method |
| [`IsDefined`](#api-d4d7e0188ae472d6) | Method |
| [`Remove`](#api-0ab578893c030ff6) | Method |
| [`settingId`](#api-e5bd1eeeb2da478c) | Property |

## Type declaration

<a id="api-a261e179a8be25ca"></a>
<!-- api: T:Inno.Scene.GameTagCatalog ad6bbfdec27542420d446c3e199be8b84f6c094560d4b23ef99221bcd932ad8c -->

```csharp
public sealed class Inno.Scene.GameTagCatalog : Inno.Core.Serialization.ISerializable
```

Stores the project-wide tag definitions used to author and validate scene object assignments.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameTagCatalog.cs#L16).

## `settingProtocolId`

<a id="api-b7e01cb15066d27e"></a>
<!-- api: F:Inno.Scene.GameTagCatalog.settingProtocolId 6000f0c33b85998f12924e91bfa04144c1017be7a428c5fadb309725960b458f -->

```csharp
public const string Inno.Scene.GameTagCatalog.settingProtocolId = "inno.scene.tags"
```

Gets the immutable project-setting protocol value used by discovery metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameTagCatalog.cs#L21).

## `#ctor`

<a id="api-e5d4dc4ec853b47b"></a>
<!-- api: M:Inno.Scene.GameTagCatalog.#ctor ab87ebfe2e4542dad3c843cfe8820a1c0bdda6a60aba071327bd34283629f440 -->

```csharp
public Inno.Scene.GameTagCatalog.GameTagCatalog()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameTagCatalog.cs#L16).

## `Add`

<a id="api-73ae95f41f064f0f"></a>
<!-- api: M:Inno.Scene.GameTagCatalog.Add(System.String) bad026d8f90564c24232063b01c14777ca442f060cb5f100c2f5abd81167cf88 -->

```csharp
public bool Inno.Scene.GameTagCatalog.Add(string tag)
```

Adds one normalized project tag definition.

**Parameter `tag`:** The unique tag to define.

**Returns:** `true` when a definition was added.

**Throws `System.ArgumentException`:** Thrown when `tag` is empty or invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameTagCatalog.cs#L108).

## `Clone`

<a id="api-954a1f32cc4f4acc"></a>
<!-- api: M:Inno.Scene.GameTagCatalog.Clone b92dfbff9b7a7367c5d14a721e95672a99353484dff248cdfead7f583fc6a1b7 -->

```csharp
public Inno.Scene.GameTagCatalog Inno.Scene.GameTagCatalog.Clone()
```

Creates a detached mutable copy of this catalog.

**Returns:** An independently owned catalog with the same definitions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameTagCatalog.cs#L155).

## `GetId`

<a id="api-b14254ee7fe60ab8"></a>
<!-- api: M:Inno.Scene.GameTagCatalog.GetId(Inno.Core.Settings.ProjectId,System.String) a9ae12d0ea10a435ba21fe2636f2b31c6ad2489ff1ba63fae30c648e687b0988 -->

```csharp
public Inno.Core.Settings.ProjectScopedId Inno.Scene.GameTagCatalog.GetId(Inno.Core.Settings.ProjectId projectId, string tag)
```

Gets the complete project-scoped identity of a defined tag.

**Parameter `projectId`:** The current project namespace.

**Parameter `tag`:** The configured tag name.

**Returns:** The canonical `projectId.name` identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameTagCatalog.cs#L72).

## `GetLocalId`

<a id="api-22e3f22985e3064b"></a>
<!-- api: M:Inno.Scene.GameTagCatalog.GetLocalId(System.String) 5ef0198c7cac0bda0fb84d61536ad63df0041232366397cca724aa00b73da701 -->

```csharp
public Inno.Core.Settings.ProjectLocalId Inno.Scene.GameTagCatalog.GetLocalId(string tag)
```

Gets the stable project-independent identity of a defined tag.

**Parameter `tag`:** The configured tag name.

**Returns:** The deterministic local identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameTagCatalog.cs#L52).

## `GetTags`

<a id="api-f78c1475c45e6a81"></a>
<!-- api: M:Inno.Scene.GameTagCatalog.GetTags 5b8782252fde0462aec979877d477fe19612fc80dcd9f43ed6af685765d43bf4 -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Scene.GameTagCatalog.GetTags()
```

Gets the defined tags with the immutable default tag first.

**Returns:** An independently owned deterministic tag snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameTagCatalog.cs#L37).

## `IsDefined`

<a id="api-d4d7e0188ae472d6"></a>
<!-- api: M:Inno.Scene.GameTagCatalog.IsDefined(System.String) 55e95095035424f791077a3b17ed37ed3d858bb030a7b5c0ecf7dc8aaec5e8ba -->

```csharp
public bool Inno.Scene.GameTagCatalog.IsDefined(string tag)
```

Determines whether an ordinal tag is defined by the project.

**Parameter `tag`:** The tag to resolve.

**Returns:** `true` when the normalized tag is defined.

**Throws `System.ArgumentException`:** Thrown when `tag` is empty or invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameTagCatalog.cs#L89).

## `Remove`

<a id="api-0ab578893c030ff6"></a>
<!-- api: M:Inno.Scene.GameTagCatalog.Remove(System.String) d2fe3e79fcf3c5d3ddaa8c6eae24787dd84bf683fd4564281f725cec54e4c32d -->

```csharp
public bool Inno.Scene.GameTagCatalog.Remove(string tag)
```

Removes one custom project tag definition without rewriting scene assignments.

**Parameter `tag`:** The custom tag to remove.

**Returns:** `true` when an existing definition was removed.

**Throws `System.ArgumentException`:** Thrown when `tag` is empty or invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameTagCatalog.cs#L134).

## `settingId`

<a id="api-e5bd1eeeb2da478c"></a>
<!-- api: P:Inno.Scene.GameTagCatalog.settingId 79beab2d6297badc950fad66c9e46d2785df6da91621114b5e7c03b6b5d11d4c -->

```csharp
public static Inno.Core.Settings.ProjectSettingId Inno.Scene.GameTagCatalog.settingId { get; }
```

Gets the stable project setting protocol for the project-wide tag catalog.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameTagCatalog.cs#L29).
