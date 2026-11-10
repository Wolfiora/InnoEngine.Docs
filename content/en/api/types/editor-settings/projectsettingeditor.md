---
title: "ProjectSettingEditor"
description: "Reference for ProjectSettingEditor in Inno.Editor.Settings."
uid: api.inno.editor.settings.4e80e324a6987f6f
kind: api
owners:
  - Inno.Editor.Settings
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-settings#identity-and-use-contracts
---
# `ProjectSettingEditor`

This reference describes `ProjectSettingEditor` in `Inno.Editor.Settings`. Read the [shared contract](../../projects/inno-editor-settings.md#identity-and-use-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-953a34deadff7a5a) | Method |
| [`Draw`](#api-398232a83e308a89) | Method |
| [`ValuesEqual`](#api-0509e5363cca3275) | Method |
| [`description`](#api-cd29ab35e3b25599) | Property |
| [`label`](#api-f4181d3e8547f17a) | Property |
| [`order`](#api-82578bd99d6707b0) | Property |
| [`pagePath`](#api-b54534bc83ef8b74) | Property |
| [`path`](#api-b3fa6495838b37d4) | Property |
| [`section`](#api-aec42cb9cc8f323f) | Property |
| [`settingId`](#api-b85e48a182be2801) | Property |

## Type declaration

<a id="api-4e80e324a6987f6f"></a>
<!-- api: T:Inno.Editor.Settings.ProjectSettingEditor e6035c01966848d035ffbf2ca0b0e55a3ec394571fa842e4a2de915434c8fae8 -->

```csharp
public abstract class Inno.Editor.Settings.ProjectSettingEditor
```

Describes one Editor presentation for a strongly typed runtime project setting.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Settings/Definitions/ProjectSettingEditor.cs#L13).

## `#ctor`

<a id="api-953a34deadff7a5a"></a>
<!-- api: M:Inno.Editor.Settings.ProjectSettingEditor.#ctor 4cda19a183024ccfa6c9b63b3928061242dbd7d04678cc31c246554bb1d269fc -->

```csharp
protected Inno.Editor.Settings.ProjectSettingEditor.ProjectSettingEditor()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Settings/Definitions/ProjectSettingEditor.cs#L13).

## `Draw`

<a id="api-398232a83e308a89"></a>
<!-- api: M:Inno.Editor.Settings.ProjectSettingEditor.Draw(Inno.Core.Serialization.ISerializable) 3d9eb44bf90db054cdeb745283dd507d2914061ebd679eb2211609ed94142594 -->

```csharp
public bool Inno.Editor.Settings.ProjectSettingEditor.Draw(Inno.Core.Serialization.ISerializable value)
```

Draws one isolated staged value through this presentation.

**Parameter `value`:** The exact setting type owned by this presentation.

**Returns:** `true` when the value differs from its first drawn state.

**Throws `System.ArgumentException`:** Thrown when `value` has another runtime type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Settings/Definitions/ProjectSettingEditor.cs#L71).

## `ValuesEqual`

<a id="api-0509e5363cca3275"></a>
<!-- api: M:Inno.Editor.Settings.ProjectSettingEditor.ValuesEqual(Inno.Core.Serialization.ISerializable,Inno.Core.Serialization.ISerializable) 14e2b1f88572e0db6855d84bc3798d52797f4f654aeaeb5c62a8f58134012cbe -->

```csharp
public bool Inno.Editor.Settings.ProjectSettingEditor.ValuesEqual(Inno.Core.Serialization.ISerializable left, Inno.Core.Serialization.ISerializable right)
```

Compares two exact-type values through their native serialized property data.

**Parameter `left`:** The first setting value.

**Parameter `right`:** The second setting value.

**Returns:** `true` when both values contain equal serialized properties.

**Throws `System.ArgumentException`:** Thrown when either value has another runtime type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Settings/Definitions/ProjectSettingEditor.cs#L89).

## `description`

<a id="api-cd29ab35e3b25599"></a>
<!-- api: P:Inno.Editor.Settings.ProjectSettingEditor.description 849ed897d68fbfdccfae3ee4961c9278936ddebf9f7cb5013becff2f12c27bbc -->

```csharp
public virtual string Inno.Editor.Settings.ProjectSettingEditor.description { get; }
```

Gets the explanation displayed by the unified Settings frontend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Settings/Definitions/ProjectSettingEditor.cs#L56).

## `label`

<a id="api-f4181d3e8547f17a"></a>
<!-- api: P:Inno.Editor.Settings.ProjectSettingEditor.label 056738687c2cd3075dd34bbee1ab990a96e559fa49041facb5859784f39280c0 -->

```csharp
public string Inno.Editor.Settings.ProjectSettingEditor.label { get; }
```

Gets the display label derived from the final path segment.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Settings/Definitions/ProjectSettingEditor.cs#L41).

## `order`

<a id="api-82578bd99d6707b0"></a>
<!-- api: P:Inno.Editor.Settings.ProjectSettingEditor.order ada7a421cfc3edfc80946b60f6a13de77f90c31456a02c33c37c5aa7fb6ec95f -->

```csharp
public int Inno.Editor.Settings.ProjectSettingEditor.order { get; }
```

Gets the stable order among fields in the same section.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Settings/Definitions/ProjectSettingEditor.cs#L46).

## `pagePath`

<a id="api-b54534bc83ef8b74"></a>
<!-- api: P:Inno.Editor.Settings.ProjectSettingEditor.pagePath d74028bc9cebeed9391eb9018ca90e47a7e099f7963613a2f9829a5055914d18 -->

```csharp
public string Inno.Editor.Settings.ProjectSettingEditor.pagePath { get; }
```

Gets the page that owns this field.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Settings/Definitions/ProjectSettingEditor.cs#L36).

## `path`

<a id="api-b3fa6495838b37d4"></a>
<!-- api: P:Inno.Editor.Settings.ProjectSettingEditor.path cda3eb3964dadfe13f1407043239a52359fa004b78f186caec721559248fef6a -->

```csharp
public string Inno.Editor.Settings.ProjectSettingEditor.path { get; }
```

Gets the complete slash-delimited placement path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Settings/Definitions/ProjectSettingEditor.cs#L31).

## `section`

<a id="api-aec42cb9cc8f323f"></a>
<!-- api: P:Inno.Editor.Settings.ProjectSettingEditor.section e05b27aab12f9cec4f051d322a7a5634dfbb0165f8cfc24a786231c505453068 -->

```csharp
public virtual string Inno.Editor.Settings.ProjectSettingEditor.section { get; }
```

Gets the section heading used to group this field.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Settings/Definitions/ProjectSettingEditor.cs#L51).

## `settingId`

<a id="api-b85e48a182be2801"></a>
<!-- api: P:Inno.Editor.Settings.ProjectSettingEditor.settingId 82b2cbb88f8ef907064b02701e84131df12b27d30ed7d82c6f5f71a68a438ccd -->

```csharp
public Inno.Core.Settings.ProjectSettingId Inno.Editor.Settings.ProjectSettingEditor.settingId { get; }
```

Gets the stable runtime project setting protocol read from the target setting type's
`Inno.Core.Settings.ProjectSettingDefinitionAttribute` by the Editor catalog.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Settings/Definitions/ProjectSettingEditor.cs#L26).
