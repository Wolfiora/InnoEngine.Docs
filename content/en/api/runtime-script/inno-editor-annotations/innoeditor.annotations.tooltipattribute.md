---
title: "TooltipAttribute"
description: "Reference for TooltipAttribute in Inno.Editor.Annotations."
uid: api.inno.editor.annotations.runtime-script.666f518cec582d95
kind: api
owners:
  - Inno.Editor.Annotations
apiSurface: runtime-script
contracts:
  - api.projects.inno-editor-annotations#loading-and-script-availability
  - manual.scripting.use-script-api
---
# `TooltipAttribute`

This reference describes `TooltipAttribute` in `Inno.Editor.Annotations`. Read the [shared contract](../../projects/inno-editor-annotations.md#loading-and-script-availability) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEditor.Annotations.InspectorPresentationAttribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-f962b4da7664d9dd) | Method |
| [`text`](#api-427ace97f15a6d5d) | Property |

## Type declaration

<a id="api-666f518cec582d95"></a>
<!-- api: T:InnoEditor.Annotations.TooltipAttribute 6cf3a2c86cc5f55d860d24a7d25d3caf1ba9b863f0a4e01aa3bac8b8d5315a8c -->

```csharp
public sealed class InnoEditor.Annotations.TooltipAttribute : InnoEditor.Annotations.InspectorPresentationAttribute
```

Provides hover help for one Inspector property label.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L110).

## `#ctor`

<a id="api-f962b4da7664d9dd"></a>
<!-- api: M:InnoEditor.Annotations.TooltipAttribute.#ctor(System.String) 81df1d5e0f2517716bd990aceff2c6f150110c0905cc73c379b389c5d09806bd -->

```csharp
public InnoEditor.Annotations.TooltipAttribute.TooltipAttribute(string text)
```

Creates property hover help.

**Parameter `text`:** Non-empty tooltip text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L118).

## `text`

<a id="api-427ace97f15a6d5d"></a>
<!-- api: P:InnoEditor.Annotations.TooltipAttribute.text 31139a8f39f3d9b3bf1189347f90068a02456c05309eedff2400deaabef5aac8 -->

```csharp
public string InnoEditor.Annotations.TooltipAttribute.text { get; }
```

Gets the tooltip text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L127).
