---
title: "ProjectSettingPathAttribute"
description: "Reference for ProjectSettingPathAttribute in Inno.Editor.Settings."
uid: api.inno.editor.settings.12a17d9cb96eea88
kind: api
owners:
  - Inno.Editor.Settings
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-settings#identity-and-use-contracts
---
# `ProjectSettingPathAttribute`

This reference describes `ProjectSettingPathAttribute` in `Inno.Editor.Settings`. Read the [shared contract](../../projects/inno-editor-settings.md#identity-and-use-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-c3c9fa62bd8bdeac) | Method |
| [`order`](#api-ddd7ba010aa95a99) | Property |
| [`path`](#api-0b6dc98f50d8d7c5) | Property |

## Type declaration

<a id="api-12a17d9cb96eea88"></a>
<!-- api: T:Inno.Editor.Settings.ProjectSettingPathAttribute 1207a742ee59ad63ef8a1572108a5f242ccdb8fa302cf1c494f3166f5f202dec -->

```csharp
public sealed class Inno.Editor.Settings.ProjectSettingPathAttribute : System.Attribute
```

Places a strongly typed project setting editor under the Project root of the unified Settings window.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Settings/Definitions/ProjectSettingPathAttribute.cs#L9).

## `#ctor`

<a id="api-c3c9fa62bd8bdeac"></a>
<!-- api: M:Inno.Editor.Settings.ProjectSettingPathAttribute.#ctor(System.String,System.Int32) 245793ec3d939dc8f034bdf7fb35d48adf42ece030ad9c8bab43b6fb4ec8796e -->

```csharp
public Inno.Editor.Settings.ProjectSettingPathAttribute.ProjectSettingPathAttribute(string path, int order = 0)
```

Creates a project setting placement.

**Parameter `path`:** The slash-delimited field path beginning with `Project/`.

**Parameter `order`:** The stable order among fields in the same section.

**Throws `System.ArgumentException`:** Thrown when `path` is outside the Project root or contains an empty segment.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Settings/Definitions/ProjectSettingPathAttribute.cs#L23).

## `order`

<a id="api-ddd7ba010aa95a99"></a>
<!-- api: P:Inno.Editor.Settings.ProjectSettingPathAttribute.order 9d029d3556f488e2f63538b966fd784dcecfb1ee5d5d3d56e91ee85fa3f0fa00 -->

```csharp
public int Inno.Editor.Settings.ProjectSettingPathAttribute.order { get; }
```

Gets the stable order among fields in the same section.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Settings/Definitions/ProjectSettingPathAttribute.cs#L46).

## `path`

<a id="api-0b6dc98f50d8d7c5"></a>
<!-- api: P:Inno.Editor.Settings.ProjectSettingPathAttribute.path 499a5f42c1b3a46b52455c77956fbb5e76becbd8ceae5a5da3d5a3a93b4983da -->

```csharp
public string Inno.Editor.Settings.ProjectSettingPathAttribute.path { get; }
```

Gets the normalized complete placement path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Settings/Definitions/ProjectSettingPathAttribute.cs#L41).
