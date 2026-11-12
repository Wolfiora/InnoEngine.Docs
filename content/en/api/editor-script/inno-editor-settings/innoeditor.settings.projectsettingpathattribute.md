---
title: "ProjectSettingPathAttribute"
description: "Reference for ProjectSettingPathAttribute in Inno.Editor.Settings."
uid: api.inno.editor.settings.editor-script.77de42bbea0fd54b
kind: api
owners:
  - Inno.Editor.Settings
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-settings#identity-and-use-contracts
  - manual.scripting.use-script-api
---
# `ProjectSettingPathAttribute`

This reference describes `ProjectSettingPathAttribute` in `Inno.Editor.Settings`. Read the [shared contract](../../projects/inno-editor-settings.md#identity-and-use-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e443566d3210a315) | Method |
| [`order`](#api-8a3ee02e35fb2673) | Property |
| [`path`](#api-d28ee8640421e7f6) | Property |

## Type declaration

<a id="api-77de42bbea0fd54b"></a>
<!-- api: T:InnoEditor.Settings.ProjectSettingPathAttribute ae50b015e6b34ffcf87c341749976960a8bd1bcf0b01cd20da6a7305b31fc8c1 -->

```csharp
public sealed class InnoEditor.Settings.ProjectSettingPathAttribute : System.Attribute
```

Places a strongly typed project setting editor under the Project root of the unified Settings window.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/ProjectSettingPathAttribute.cs#L9).

## `#ctor`

<a id="api-e443566d3210a315"></a>
<!-- api: M:InnoEditor.Settings.ProjectSettingPathAttribute.#ctor(System.String,System.Int32) acdf5bdd099016e7229c06e6ad0793166b48a44bd5a33387538e901909d124b8 -->

```csharp
public InnoEditor.Settings.ProjectSettingPathAttribute.ProjectSettingPathAttribute(string path, int order = 0)
```

Creates a project setting placement.

**Parameter `path`:** The slash-delimited field path beginning with `Project/`.

**Parameter `order`:** The stable order among fields in the same section.

**Throws `System.ArgumentException`:** Thrown when `path` is outside the Project root or contains an empty segment.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/ProjectSettingPathAttribute.cs#L23).

## `order`

<a id="api-8a3ee02e35fb2673"></a>
<!-- api: P:InnoEditor.Settings.ProjectSettingPathAttribute.order 5fb5b916b80ded85ef5eb3f53bb78ffbeed690338990d8cf8912011edb3a6bfa -->

```csharp
public int InnoEditor.Settings.ProjectSettingPathAttribute.order { get; }
```

Gets the stable order among fields in the same section.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/ProjectSettingPathAttribute.cs#L46).

## `path`

<a id="api-d28ee8640421e7f6"></a>
<!-- api: P:InnoEditor.Settings.ProjectSettingPathAttribute.path ff4bc01ea69ecb596345c00b0f6e2929baa022d0a61dfe2b977b8cd57f7a0d4b -->

```csharp
public string InnoEditor.Settings.ProjectSettingPathAttribute.path { get; }
```

Gets the normalized complete placement path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Definitions/ProjectSettingPathAttribute.cs#L41).
