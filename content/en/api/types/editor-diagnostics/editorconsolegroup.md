---
title: "EditorConsoleGroup"
description: "Reference for EditorConsoleGroup in Inno.Editor.Diagnostics."
uid: api.inno.editor.diagnostics.5b6004b1aaadc4e4
kind: api
owners:
  - Inno.Editor.Diagnostics
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-diagnostics#lifetime-and-policy
---
# `EditorConsoleGroup`

This reference describes `EditorConsoleGroup` in `Inno.Editor.Diagnostics`. Read the [shared contract](../../projects/inno-editor-diagnostics.md#lifetime-and-policy) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`count`](#api-2612f0c056716db0) | Property |
| [`identity`](#api-757ebc50edbf9ec5) | Property |
| [`latest`](#api-02a6bb4fdc57f0ac) | Property |
| [`occurrences`](#api-59c37af467069de1) | Property |

## Type declaration

<a id="api-5b6004b1aaadc4e4"></a>
<!-- api: T:Inno.Editor.Diagnostics.EditorConsoleGroup 57fcdaea1c474252ded5dac552b4c58c290787e7f1f8933415cf5fdc741adc7a -->

```csharp
public sealed class Inno.Editor.Diagnostics.EditorConsoleGroup
```

Groups equivalent Console occurrences regardless of whether they arrived consecutively.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Diagnostics/EditorConsoleGroup.cs#L9).

## `count`

<a id="api-2612f0c056716db0"></a>
<!-- api: P:Inno.Editor.Diagnostics.EditorConsoleGroup.count c8c35e1761969b0bd3cf4832e752f93b7f72a9285575698605b7fa44ba358f72 -->

```csharp
public int Inno.Editor.Diagnostics.EditorConsoleGroup.count { get; }
```

Gets the total number of matching occurrences.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Diagnostics/EditorConsoleGroup.cs#L38).

## `identity`

<a id="api-757ebc50edbf9ec5"></a>
<!-- api: P:Inno.Editor.Diagnostics.EditorConsoleGroup.identity dbe70ecc458d51b5ef50077fb95647d3df5ae985555e7943fcdcafffbcd8aa5c -->

```csharp
public string Inno.Editor.Diagnostics.EditorConsoleGroup.identity { get; }
```

Gets the deterministic content fingerprint used as the presentation identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Diagnostics/EditorConsoleGroup.cs#L23).

## `latest`

<a id="api-02a6bb4fdc57f0ac"></a>
<!-- api: P:Inno.Editor.Diagnostics.EditorConsoleGroup.latest dec3f3dad9dc322a104ea5d3a2a32de3903d3eb8b72bbaf4632810a8e7c22ce9 -->

```csharp
public Inno.Editor.Diagnostics.EditorConsoleOccurrence Inno.Editor.Diagnostics.EditorConsoleGroup.latest { get; }
```

Gets the most recently received matching occurrence.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Diagnostics/EditorConsoleGroup.cs#L33).

## `occurrences`

<a id="api-59c37af467069de1"></a>
<!-- api: P:Inno.Editor.Diagnostics.EditorConsoleGroup.occurrences 527857ff1db86a80ae9f838391adf0d598bd0cdbf9c74e775ba11ed5b3e201a6 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Editor.Diagnostics.EditorConsoleOccurrence> Inno.Editor.Diagnostics.EditorConsoleGroup.occurrences { get; }
```

Gets every matching occurrence in arrival order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Diagnostics/EditorConsoleGroup.cs#L28).
