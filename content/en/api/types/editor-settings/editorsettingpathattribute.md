---
title: "EditorSettingPathAttribute"
description: "Reference for EditorSettingPathAttribute in Inno.Editor.Settings."
uid: api.inno.editor.settings.2da3dcf9bd18d135
kind: api
owners:
  - Inno.Editor.Settings
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-settings#identity-and-use-contracts
---
# `EditorSettingPathAttribute`

This reference describes `EditorSettingPathAttribute` in `Inno.Editor.Settings`. Read the [shared contract](../../projects/inno-editor-settings.md#identity-and-use-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-adfe8559cc6fd72d) | Method |
| [`order`](#api-7e20abebb148fb4a) | Property |
| [`path`](#api-0249aec9eab02a48) | Property |

## Type declaration

<a id="api-2da3dcf9bd18d135"></a>
<!-- api: T:Inno.Editor.Settings.EditorSettingPathAttribute f01838160201844be96fc6c6380d9716947427299fd8de692dc07920e752ab8b -->

```csharp
public sealed class Inno.Editor.Settings.EditorSettingPathAttribute : System.Attribute
```

Places an `Inno.Editor.Settings.EditorSetting` at an arbitrary string Settings path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingPathAttribute.cs#L9).

## `#ctor`

<a id="api-adfe8559cc6fd72d"></a>
<!-- api: M:Inno.Editor.Settings.EditorSettingPathAttribute.#ctor(System.String,System.Int32) fb69c26ed33800b8a9923fa895ae3b895cb9dafbeaf4bf8b3530ae56bdb4c14b -->

```csharp
public Inno.Editor.Settings.EditorSettingPathAttribute.EditorSettingPathAttribute(string path, int order = 0)
```

Creates a path placement. A definition that overrides its drawing method becomes a field;
a definition that keeps the default drawing method describes the page at the complete path.

**Parameter `path`:** The slash-delimited page and field path.

**Parameter `order`:** The stable order among fields with the same section and label.

**Throws `System.ArgumentException`:** Thrown when `path` contains an empty segment or is outside the `Editor` root.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingPathAttribute.cs#L24).

## `order`

<a id="api-7e20abebb148fb4a"></a>
<!-- api: P:Inno.Editor.Settings.EditorSettingPathAttribute.order c7267dc658290f6b31c8afe5c3a0475e0e22b4ec7d6a0a26e6bf12d9a14f1867 -->

```csharp
public int Inno.Editor.Settings.EditorSettingPathAttribute.order { get; }
```

Gets the stable order among fields with the same section and label.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingPathAttribute.cs#L48).

## `path`

<a id="api-0249aec9eab02a48"></a>
<!-- api: P:Inno.Editor.Settings.EditorSettingPathAttribute.path fc71c2f5b226e858b50144e355463f93a489e8935358bfd54d9b9fd028ff08c1 -->

```csharp
public string Inno.Editor.Settings.EditorSettingPathAttribute.path { get; }
```

Gets the normalized path including the field label.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Settings/Definitions/EditorSettingPathAttribute.cs#L43).
