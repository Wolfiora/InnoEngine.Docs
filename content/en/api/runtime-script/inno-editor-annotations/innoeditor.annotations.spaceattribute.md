---
title: "SpaceAttribute"
description: "Reference for SpaceAttribute in Inno.Editor.Annotations."
uid: api.inno.editor.annotations.runtime-script.218da31eccad9389
kind: api
owners:
  - Inno.Editor.Annotations
apiSurface: runtime-script
contracts:
  - api.projects.inno-editor-annotations#loading-and-script-availability
  - manual.scripting.use-script-api
---
# `SpaceAttribute`

This reference describes `SpaceAttribute` in `Inno.Editor.Annotations`. Read the [shared contract](../../projects/inno-editor-annotations.md#loading-and-script-availability) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEditor.Annotations.InspectorPresentationAttribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-0aeb4455960543df) | Method |
| [`height`](#api-05987a1a2f07db0b) | Property |

## Type declaration

<a id="api-218da31eccad9389"></a>
<!-- api: T:InnoEditor.Annotations.SpaceAttribute 98d1063355e7aadf23cf1f90bb8dfa1c22ff3594620c0c0cb30ba955febb0500 -->

```csharp
public sealed class InnoEditor.Annotations.SpaceAttribute : InnoEditor.Annotations.InspectorPresentationAttribute
```

Inserts vertical spacing before the annotated Inspector property.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L86).

## `#ctor`

<a id="api-0aeb4455960543df"></a>
<!-- api: M:InnoEditor.Annotations.SpaceAttribute.#ctor(System.Single) ecf006eab07c171e40bf2d1a42f74b7d516a2f5e7ed3133a1674b920a4a0d485 -->

```csharp
public InnoEditor.Annotations.SpaceAttribute.SpaceAttribute(float height = 8)
```

Creates a spacing decorator.

**Parameter `height`:** Non-negative logical pixel height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L94).

## `height`

<a id="api-05987a1a2f07db0b"></a>
<!-- api: P:InnoEditor.Annotations.SpaceAttribute.height b8b37df90d6f082ed5f3f0301a0f53697ec7c2767de20d8cad8baaa15502fbd9 -->

```csharp
public float InnoEditor.Annotations.SpaceAttribute.height { get; }
```

Gets the logical pixel height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L103).
