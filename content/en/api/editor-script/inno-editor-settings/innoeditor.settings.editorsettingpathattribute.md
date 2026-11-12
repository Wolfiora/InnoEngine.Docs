---
title: "EditorSettingPathAttribute"
description: "Reference for EditorSettingPathAttribute in Inno.Editor.Settings."
uid: api.inno.editor.settings.editor-script.8d0b4dff77e75b1e
kind: api
owners:
  - Inno.Editor.Settings
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-settings#identity-and-use-contracts
  - manual.scripting.use-script-api
---
# `EditorSettingPathAttribute`

This reference describes `EditorSettingPathAttribute` in `Inno.Editor.Settings`. Read the [shared contract](../../projects/inno-editor-settings.md#identity-and-use-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-a27fe3105c3140f5) | Method |
| [`order`](#api-b0b55d77d2332419) | Property |
| [`path`](#api-1cc8f8cda76ba19e) | Property |

## Type declaration

<a id="api-8d0b4dff77e75b1e"></a>
<!-- api: T:InnoEditor.Settings.EditorSettingPathAttribute 96ee4474fa40d7c7da72e64b4d80d92c48d51ff8c560e23760a54868b10c45fe -->

```csharp
public sealed class InnoEditor.Settings.EditorSettingPathAttribute : System.Attribute
```

Places an `InnoEditor.Settings.EditorSetting` at an arbitrary string Settings path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingPathAttribute.cs#L9).

## `#ctor`

<a id="api-a27fe3105c3140f5"></a>
<!-- api: M:InnoEditor.Settings.EditorSettingPathAttribute.#ctor(System.String,System.Int32) 98c5b2a47e03e78ee3089cc556625dde072284d6ac39077ade2f1b65c890a7f3 -->

```csharp
public InnoEditor.Settings.EditorSettingPathAttribute.EditorSettingPathAttribute(string path, int order = 0)
```

Creates a path placement. A definition that overrides its drawing method becomes a field;
a definition that keeps the default drawing method describes the page at the complete path.

**Parameter `path`:** The slash-delimited page and field path.

**Parameter `order`:** The stable order among fields with the same section and label.

**Throws `System.ArgumentException`:** Thrown when `path` contains an empty segment or is outside the `Editor` root.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingPathAttribute.cs#L24).

## `order`

<a id="api-b0b55d77d2332419"></a>
<!-- api: P:InnoEditor.Settings.EditorSettingPathAttribute.order d85bb028a3873639ff8085969fba4c74afbb05591aee03d074153b72618db63f -->

```csharp
public int InnoEditor.Settings.EditorSettingPathAttribute.order { get; }
```

Gets the stable order among fields with the same section and label.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingPathAttribute.cs#L48).

## `path`

<a id="api-1cc8f8cda76ba19e"></a>
<!-- api: P:InnoEditor.Settings.EditorSettingPathAttribute.path f3fba57e60982481258dd5910834f3fcf3b69d2fd54ede0eda599732a47fd350 -->

```csharp
public string InnoEditor.Settings.EditorSettingPathAttribute.path { get; }
```

Gets the normalized path including the field label.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingPathAttribute.cs#L43).
