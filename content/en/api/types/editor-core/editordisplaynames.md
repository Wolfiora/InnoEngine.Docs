---
title: "EditorDisplayNames"
description: "Reference for EditorDisplayNames in Inno.Editor.Core."
uid: api.inno.editor.core.b255d4065d822813
kind: api
owners:
  - Inno.Editor.Core
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-core#lifecycle-and-failure-contracts
---
# `EditorDisplayNames`

This reference describes `EditorDisplayNames` in `Inno.Editor.Core`. Read the [shared contract](../../projects/inno-editor-core.md#lifecycle-and-failure-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Nicify`](#api-f91c1219569b1ccc) | Method |

## Type declaration

<a id="api-b255d4065d822813"></a>
<!-- api: T:Inno.Editor.Core.EditorDisplayNames d93a9107d36a437dc21cc76d1f8d579e6383ca8bf6c80f1c8c2d192013afc0da -->

```csharp
public static class Inno.Editor.Core.EditorDisplayNames
```

Formats readable Editor labels independently from a native UI context or session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Core/Presentation/EditorDisplayNames.cs#L9).

## `Nicify`

<a id="api-f91c1219569b1ccc"></a>
<!-- api: M:Inno.Editor.Core.EditorDisplayNames.Nicify(System.String) c939b9dc71fac1432103d3af965edd77c36da70780be4d308b3cd4edff989f32 -->

```csharp
public static string Inno.Editor.Core.EditorDisplayNames.Nicify(string name)
```

Converts an identifier into a readable editor label.

**Parameter `name`:** Source identifier.

**Returns:** A label with identifier separators and lower-to-upper transitions spaced; empty when the input is blank.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Core/Presentation/EditorDisplayNames.cs#L20).
