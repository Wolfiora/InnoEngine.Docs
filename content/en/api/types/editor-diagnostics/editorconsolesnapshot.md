---
title: "EditorConsoleSnapshot"
description: "Reference for EditorConsoleSnapshot in Inno.Editor.Diagnostics."
uid: api.inno.editor.diagnostics.62973d147e728e83
kind: api
owners:
  - Inno.Editor.Diagnostics
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-diagnostics#lifetime-and-policy
---
# `EditorConsoleSnapshot`

This reference describes `EditorConsoleSnapshot` in `Inno.Editor.Diagnostics`. Read the [shared contract](../../projects/inno-editor-diagnostics.md#lifetime-and-policy) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`groups`](#api-2cbebbe055e7aa7b) | Property |
| [`occurrences`](#api-e923ef6987b13f5c) | Property |
| [`revision`](#api-31d245a5a085b821) | Property |

## Type declaration

<a id="api-62973d147e728e83"></a>
<!-- api: T:Inno.Editor.Diagnostics.EditorConsoleSnapshot 1794700627815f493a038449276f32f82c455b2af384b8a723e9d473b927bfba -->

```csharp
public sealed class Inno.Editor.Diagnostics.EditorConsoleSnapshot
```

Provides one immutable and internally consistent view of editor Console state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Diagnostics/EditorConsoleSnapshot.cs#L9).

## `groups`

<a id="api-2cbebbe055e7aa7b"></a>
<!-- api: P:Inno.Editor.Diagnostics.EditorConsoleSnapshot.groups 4c917775297182cd7b023896216943fd4985dad4febaf0e43f54d164178187a8 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Editor.Diagnostics.EditorConsoleGroup> Inno.Editor.Diagnostics.EditorConsoleSnapshot.groups { get; }
```

Gets global fingerprint groups ordered by their latest occurrence.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Diagnostics/EditorConsoleSnapshot.cs#L34).

## `occurrences`

<a id="api-e923ef6987b13f5c"></a>
<!-- api: P:Inno.Editor.Diagnostics.EditorConsoleSnapshot.occurrences 44025482435e34ae9eadad18aa64c057e2017ab00ee9ad33426291f0b2bac66a -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Editor.Diagnostics.EditorConsoleOccurrence> Inno.Editor.Diagnostics.EditorConsoleSnapshot.occurrences { get; }
```

Gets every current occurrence in chronological arrival order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Diagnostics/EditorConsoleSnapshot.cs#L29).

## `revision`

<a id="api-31d245a5a085b821"></a>
<!-- api: P:Inno.Editor.Diagnostics.EditorConsoleSnapshot.revision 5753667793d15315554a9ef6d9ae405a443f704925ebdaf0167c0c97514b6f3c -->

```csharp
public long Inno.Editor.Diagnostics.EditorConsoleSnapshot.revision { get; }
```

Gets the monotonic revision of the captured Console state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Diagnostics/EditorConsoleSnapshot.cs#L24).
