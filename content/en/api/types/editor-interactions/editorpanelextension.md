---
title: "EditorPanelExtension"
description: "Reference for EditorPanelExtension in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.d99ab915f62861b8
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `EditorPanelExtension`

This reference describes `EditorPanelExtension` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Draw`](#api-7bddc496338e0c09) | Method |
| [`TakeFocusRequest`](#api-870e5254d8f3910f) | Method |
| [`TryGetWindowPresentation`](#api-59fafdc5da258cde) | Method |
| [`id`](#api-16bd49064bd3bd72) | Property |
| [`isOpen`](#api-55028ca2ccac00ff) | Property |
| [`order`](#api-93062be4382d0edb) | Property |
| [`title`](#api-ef1a3a44f1448412) | Property |

## Type declaration

<a id="api-d99ab915f62861b8"></a>
<!-- api: T:Inno.Editor.Interactions.EditorPanelExtension 185352d1ead3ad51310db71ade2b61f5503552c438dc38a02d596a1796a70171 -->

```csharp
public sealed class Inno.Editor.Interactions.EditorPanelExtension
```

Describes one active dockable panel extension.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorPanelExtension.cs#L11).

## `Draw`

<a id="api-7bddc496338e0c09"></a>
<!-- api: M:Inno.Editor.Interactions.EditorPanelExtension.Draw(Inno.Editor.Core.EditorContext) 0a914dd0d3f397f7b9551135fd046faa6d77194d7bdae6dad518af7c3c7f1542 -->

```csharp
public bool Inno.Editor.Interactions.EditorPanelExtension.Draw(Inno.Editor.Core.EditorContext context)
```

Safely draws the panel body and quarantines a failing extension instance.

**Parameter `context`:** The active editor context supplied by the presentation backend.

**Returns:** `true` when the panel completed drawing without being quarantined.

**Throws `System.ArgumentNullException`:** Thrown when `context` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorPanelExtension.cs#L118).

## `TakeFocusRequest`

<a id="api-870e5254d8f3910f"></a>
<!-- api: M:Inno.Editor.Interactions.EditorPanelExtension.TakeFocusRequest 3a22b3bf86a514cab62ca2e72755ace0269006896319f092642ce4f691b70b14 -->

```csharp
public bool Inno.Editor.Interactions.EditorPanelExtension.TakeFocusRequest()
```

Consumes a pending request to focus this panel window.

**Returns:** `true` once for each accepted focus request.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorPanelExtension.cs#L64).

## `TryGetWindowPresentation`

<a id="api-59fafdc5da258cde"></a>
<!-- api: M:Inno.Editor.Interactions.EditorPanelExtension.TryGetWindowPresentation(System.Boolean@,System.Boolean@,System.Numerics.Vector2@) 06c62c9ef6fc7dac32cb19c75a7eb8eda7ba596c712a3fb9d44cc3644d0fb8f1 -->

```csharp
public bool Inno.Editor.Interactions.EditorPanelExtension.TryGetWindowPresentation(out bool useWindowPadding, out bool allowScrolling, out System.Numerics.Vector2 initialSize)
```

Safely reads the panel window-presentation policy through the active extension boundary.

**Parameter `useWindowPadding`:** The requested padding policy, or the safe default when the panel is quarantined.

**Parameter `allowScrolling`:** The requested scrolling policy, or the safe default when the panel is quarantined.

**Parameter `initialSize`:** The preferred first-use floating size, or zero when native sizing is requested.

**Returns:** `true` when the policy was read without quarantining the panel.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorPanelExtension.cs#L81).

## `id`

<a id="api-16bd49064bd3bd72"></a>
<!-- api: P:Inno.Editor.Interactions.EditorPanelExtension.id 296cc01b0664aaf635766349e923b9cdca8d64f715a2ac93694e940ca0089c8b -->

```csharp
public string Inno.Editor.Interactions.EditorPanelExtension.id { get; }
```

Gets the stable panel identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorPanelExtension.cs#L37).

## `isOpen`

<a id="api-55028ca2ccac00ff"></a>
<!-- api: P:Inno.Editor.Interactions.EditorPanelExtension.isOpen d60e53c41cf9d46a5c5a85ae0d003770994ed59fc98109d1c529070cbf3b94e8 -->

```csharp
public bool Inno.Editor.Interactions.EditorPanelExtension.isOpen { get; set; }
```

Gets or sets whether this panel is open in the current extension generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorPanelExtension.cs#L52).

## `order`

<a id="api-93062be4382d0edb"></a>
<!-- api: P:Inno.Editor.Interactions.EditorPanelExtension.order 66d69974995429af2354b52319f059b7a0691f6a15cd97f95142901ea363a0bb -->

```csharp
public int Inno.Editor.Interactions.EditorPanelExtension.order { get; }
```

Gets the stable panel ordering value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorPanelExtension.cs#L47).

## `title`

<a id="api-ef1a3a44f1448412"></a>
<!-- api: P:Inno.Editor.Interactions.EditorPanelExtension.title 70e5363fa996073e2a34f246ade872625e9d2a998c5284feb8f2601905f4aed1 -->

```csharp
public string Inno.Editor.Interactions.EditorPanelExtension.title { get; }
```

Gets the visible panel title.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorPanelExtension.cs#L42).
