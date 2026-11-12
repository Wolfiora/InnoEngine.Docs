---
title: "ProjectSettingEditor"
description: "Reference for ProjectSettingEditor in Inno.Editor.Settings."
uid: api.inno.editor.settings.editor-script.fc420efe748dfb1b
kind: api
owners:
  - Inno.Editor.Settings
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-settings#identity-and-use-contracts
  - manual.scripting.use-script-api
---
# `ProjectSettingEditor`

This reference describes `ProjectSettingEditor` in `Inno.Editor.Settings`. Read the [shared contract](../../projects/inno-editor-settings.md#identity-and-use-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-7b29b9d0e9f19f9f) | Method |
| [`Draw`](#api-a1efde2a879281fe) | Method |
| [`ValuesEqual`](#api-63957d81b203f897) | Method |
| [`description`](#api-abf590eb0d748809) | Property |
| [`label`](#api-b88fa1b87fd511e1) | Property |
| [`order`](#api-a6ab456f4b42a65b) | Property |
| [`pagePath`](#api-3f4a75a92c08746e) | Property |
| [`path`](#api-6fa4278625725530) | Property |
| [`section`](#api-2f79c4dad2ba7203) | Property |
| [`settingId`](#api-c059c8feb57abb4a) | Property |

## Type declaration

<a id="api-fc420efe748dfb1b"></a>
<!-- api: T:InnoEditor.Settings.ProjectSettingEditor fca5b533b8b082b7f614e9075d94245d4b2d33708a4da609f4176cab84d69b1a -->

```csharp
public abstract class InnoEditor.Settings.ProjectSettingEditor
```

Describes one Editor presentation for a strongly typed runtime project setting.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/ProjectSettingEditor.cs#L13).

## `#ctor`

<a id="api-7b29b9d0e9f19f9f"></a>
<!-- api: M:InnoEditor.Settings.ProjectSettingEditor.#ctor dc708fbcdd8909eb024af88ae553fa6e2d23082c4357bce80d6518e6664e595c -->

```csharp
protected InnoEditor.Settings.ProjectSettingEditor.ProjectSettingEditor()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/ProjectSettingEditor.cs#L13).

## `Draw`

<a id="api-a1efde2a879281fe"></a>
<!-- api: M:InnoEditor.Settings.ProjectSettingEditor.Draw(InnoEngine.Serialization.ISerializable) 87c4314264d6fa60dea585e93d67faea94e6b304dfa42d22bea7b6dc23f15e7b -->

```csharp
public bool InnoEditor.Settings.ProjectSettingEditor.Draw(InnoEngine.Serialization.ISerializable value)
```

Draws one isolated staged value through this presentation.

**Parameter `value`:** The exact setting type owned by this presentation.

**Returns:** `true` when the value differs from its first drawn state.

**Throws `System.ArgumentException`:** Thrown when `value` has another runtime type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/ProjectSettingEditor.cs#L71).

## `ValuesEqual`

<a id="api-63957d81b203f897"></a>
<!-- api: M:InnoEditor.Settings.ProjectSettingEditor.ValuesEqual(InnoEngine.Serialization.ISerializable,InnoEngine.Serialization.ISerializable) 397abfb33678b28bb69d1f40880c43ca641daa80ee58a94e7a87f0afe3b0df75 -->

```csharp
public bool InnoEditor.Settings.ProjectSettingEditor.ValuesEqual(InnoEngine.Serialization.ISerializable left, InnoEngine.Serialization.ISerializable right)
```

Compares two exact-type values through their native serialized property data.

**Parameter `left`:** The first setting value.

**Parameter `right`:** The second setting value.

**Returns:** `true` when both values contain equal serialized properties.

**Throws `System.ArgumentException`:** Thrown when either value has another runtime type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/ProjectSettingEditor.cs#L89).

## `description`

<a id="api-abf590eb0d748809"></a>
<!-- api: P:InnoEditor.Settings.ProjectSettingEditor.description 1179be2b6e2b3b52c44ed18405eec0ad7abe1c30bb559bc725fab6a1691d0164 -->

```csharp
public virtual string InnoEditor.Settings.ProjectSettingEditor.description { get; }
```

Gets the explanation displayed by the unified Settings frontend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/ProjectSettingEditor.cs#L56).

## `label`

<a id="api-b88fa1b87fd511e1"></a>
<!-- api: P:InnoEditor.Settings.ProjectSettingEditor.label 0da63b67f926cf9b5807b72c8ba57f880622272caaa4cade43c2082049c3dbe6 -->

```csharp
public string InnoEditor.Settings.ProjectSettingEditor.label { get; }
```

Gets the display label derived from the final path segment.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/ProjectSettingEditor.cs#L41).

## `order`

<a id="api-a6ab456f4b42a65b"></a>
<!-- api: P:InnoEditor.Settings.ProjectSettingEditor.order 54159503181b1bfb3f663fe195f752ff27c0bfdb67a7c02e6074426a1f6fa2a2 -->

```csharp
public int InnoEditor.Settings.ProjectSettingEditor.order { get; }
```

Gets the stable order among fields in the same section.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/ProjectSettingEditor.cs#L46).

## `pagePath`

<a id="api-3f4a75a92c08746e"></a>
<!-- api: P:InnoEditor.Settings.ProjectSettingEditor.pagePath e3478f2eb6a666316973a31874127f784a7f59482e76b363b44f6c6bf5fc2599 -->

```csharp
public string InnoEditor.Settings.ProjectSettingEditor.pagePath { get; }
```

Gets the page that owns this field.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/ProjectSettingEditor.cs#L36).

## `path`

<a id="api-6fa4278625725530"></a>
<!-- api: P:InnoEditor.Settings.ProjectSettingEditor.path 999a5adf85984a0faa77500750a323b4969174a763a43dd6649c66b66d4c9522 -->

```csharp
public string InnoEditor.Settings.ProjectSettingEditor.path { get; }
```

Gets the complete slash-delimited placement path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/ProjectSettingEditor.cs#L31).

## `section`

<a id="api-2f79c4dad2ba7203"></a>
<!-- api: P:InnoEditor.Settings.ProjectSettingEditor.section fdb6c0e790c5e6872e7a1a931d0827464bfe1342420684e0a9fc56a52dd594d1 -->

```csharp
public virtual string InnoEditor.Settings.ProjectSettingEditor.section { get; }
```

Gets the section heading used to group this field.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/ProjectSettingEditor.cs#L51).

## `settingId`

<a id="api-c059c8feb57abb4a"></a>
<!-- api: P:InnoEditor.Settings.ProjectSettingEditor.settingId 7a058480c025e7b473fbed3517a797437a0ef8bacb24b1cec801ac27d85357ce -->

```csharp
public InnoEngine.Settings.ProjectSettingId InnoEditor.Settings.ProjectSettingEditor.settingId { get; }
```

Gets the stable runtime project setting protocol read from the target setting type's
`InnoEngine.Settings.ProjectSettingDefinitionAttribute` by the Editor catalog.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/ProjectSettingEditor.cs#L26).
