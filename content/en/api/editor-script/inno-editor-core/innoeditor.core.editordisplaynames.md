---
title: "EditorDisplayNames"
description: "Reference for EditorDisplayNames in Inno.Editor.Core."
uid: api.inno.editor.core.editor-script.4e7c77d8b39b0dff
kind: api
owners:
  - Inno.Editor.Core
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-core#lifecycle-and-failure-contracts
  - manual.scripting.use-script-api
---
# `EditorDisplayNames`

This reference describes `EditorDisplayNames` in `Inno.Editor.Core`. Read the [shared contract](../../projects/inno-editor-core.md#lifecycle-and-failure-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Nicify`](#api-7931c64d25ed0f73) | Method |

## Type declaration

<a id="api-4e7c77d8b39b0dff"></a>
<!-- api: T:InnoEditor.Core.EditorDisplayNames 11dbfe92f68ad85431b1cbf676e6783556f0315c6d3f074b0bc8e104097af007 -->

```csharp
public static class InnoEditor.Core.EditorDisplayNames
```

Formats readable Editor labels independently from a native UI context or session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Presentation/EditorDisplayNames.cs#L9).

## `Nicify`

<a id="api-7931c64d25ed0f73"></a>
<!-- api: M:InnoEditor.Core.EditorDisplayNames.Nicify(System.String) b8bf09699e81e56dc5a2981609a5719689ce8449ce0e79cbd96c97c08f796050 -->

```csharp
public static string InnoEditor.Core.EditorDisplayNames.Nicify(string name)
```

Converts an identifier into a readable editor label.

**Parameter `name`:** Source identifier.

**Returns:** A label with identifier separators and lower-to-upper transitions spaced; empty when the input is blank.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Presentation/EditorDisplayNames.cs#L20).
