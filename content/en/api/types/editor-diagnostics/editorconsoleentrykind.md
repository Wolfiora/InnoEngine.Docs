---
title: "EditorConsoleEntryKind"
description: "Reference for EditorConsoleEntryKind in Inno.Editor.Diagnostics."
uid: api.inno.editor.diagnostics.bb386b982bf37b2e
kind: api
owners:
  - Inno.Editor.Diagnostics
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-diagnostics#lifetime-and-policy
---
# `EditorConsoleEntryKind`

This reference describes `EditorConsoleEntryKind` in `Inno.Editor.Diagnostics`. Read the [shared contract](../../projects/inno-editor-diagnostics.md#lifetime-and-policy) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Diagnostic`](#api-61e5a017d674b960) | Field |
| [`Log`](#api-539279507005bfa8) | Field |

## Type declaration

<a id="api-bb386b982bf37b2e"></a>
<!-- api: T:Inno.Editor.Diagnostics.EditorConsoleEntryKind 629ab13b9ff477b5bc7ad0603620b36fc270dd7d5977dda5cb7a252ccaf54188 -->

```csharp
public enum Inno.Editor.Diagnostics.EditorConsoleEntryKind : int
```

Identifies the source protocol represented by one editor Console occurrence.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Diagnostics/EditorConsoleEntryKind.cs#L6).

## `Diagnostic`

<a id="api-61e5a017d674b960"></a>
<!-- api: F:Inno.Editor.Diagnostics.EditorConsoleEntryKind.Diagnostic 3239cc0f1cd241f23fddad8236e09484e2ab14374cf2f413765de658e874be97 -->

```csharp
Inno.Editor.Diagnostics.EditorConsoleEntryKind.Diagnostic = 1
```

The occurrence represents current state from a diagnostic producer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Diagnostics/EditorConsoleEntryKind.cs#L16).

## `Log`

<a id="api-539279507005bfa8"></a>
<!-- api: F:Inno.Editor.Diagnostics.EditorConsoleEntryKind.Log 784b1ee078d607165f0fdd3874079500711f7a637fbbf7caf21669691d3884dc -->

```csharp
Inno.Editor.Diagnostics.EditorConsoleEntryKind.Log = 0
```

The occurrence was emitted through the runtime logging pipeline.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Diagnostics/EditorConsoleEntryKind.cs#L11).
