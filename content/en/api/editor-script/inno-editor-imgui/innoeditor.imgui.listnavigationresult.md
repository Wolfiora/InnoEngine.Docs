---
title: "ListNavigationResult"
description: "Reference for ListNavigationResult in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.editor-script.b622613560d7d619
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
---
# `ListNavigationResult`

This reference describes `ListNavigationResult` in `Inno.Editor.ImGui`. Read the [shared contract](../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`activate`](#api-b57ca02520f11e7b) | Property |
| [`additive`](#api-cbd6c38da68b912a) | Property |
| [`cancel`](#api-b9a71f0d648b9e3c) | Property |
| [`extendRange`](#api-852017ec61e27107) | Property |
| [`focusChanged`](#api-01bca74bbbcf85a1) | Property |
| [`focusedIndex`](#api-74b14c3217768b2e) | Property |
| [`selectionRequested`](#api-1ded2d4a5bdaac34) | Property |
| [`toggle`](#api-1bb4804c1461e0ab) | Property |

## Type declaration

<a id="api-b622613560d7d619"></a>
<!-- api: T:InnoEditor.ImGui.ListNavigationResult ff4f1a5ead3534e231c195b0134f768e55663c34bf896e840b8449bdc45d5dc1 -->

```csharp
public readonly struct InnoEditor.ImGui.ListNavigationResult
```

Carries frame-local list navigation intents over visible indices without owning objects or selection state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Selection.cs#L167).

## `activate`

<a id="api-b57ca02520f11e7b"></a>
<!-- api: P:InnoEditor.ImGui.ListNavigationResult.activate c23949a4dd2206162ca7ab1a4d3beba030984ed60269ec8796f7626a3066176b -->

```csharp
public bool InnoEditor.ImGui.ListNavigationResult.activate { get; }
```

Gets whether Enter requests activation of the focused entry.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Selection.cs#L216).

## `additive`

<a id="api-cbd6c38da68b912a"></a>
<!-- api: P:InnoEditor.ImGui.ListNavigationResult.additive 52deaf993441a849d8ee735ed87ea89ce6f8cf23389eddbe8ab571838992f0fd -->

```csharp
public bool InnoEditor.ImGui.ListNavigationResult.additive { get; }
```

Gets whether the product's primary modifier requests preserving other selected entries.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Selection.cs#L208).

## `cancel`

<a id="api-b9a71f0d648b9e3c"></a>
<!-- api: P:InnoEditor.ImGui.ListNavigationResult.cancel d2edbaec9042205b729d2107e7f791214879d011b660ae2b98e2e8938027b5a5 -->

```csharp
public bool InnoEditor.ImGui.ListNavigationResult.cancel { get; }
```

Gets whether Escape requests canceling the current list workflow.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Selection.cs#L220).

## `extendRange`

<a id="api-852017ec61e27107"></a>
<!-- api: P:InnoEditor.ImGui.ListNavigationResult.extendRange 0bee0681f31b2f7c5bd8fc861266dca1d00d831e5fd3a86059dd247bcc1baba9 -->

```csharp
public bool InnoEditor.ImGui.ListNavigationResult.extendRange { get; }
```

Gets whether the selection should extend from its existing anchor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Selection.cs#L204).

## `focusChanged`

<a id="api-01bca74bbbcf85a1"></a>
<!-- api: P:InnoEditor.ImGui.ListNavigationResult.focusChanged ead2b1fc9bafe01d3084db55234768588932f2f463a45584557faa44bbba99ca -->

```csharp
public bool InnoEditor.ImGui.ListNavigationResult.focusChanged { get; }
```

Gets whether the visible focus index changed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Selection.cs#L196).

## `focusedIndex`

<a id="api-74b14c3217768b2e"></a>
<!-- api: P:InnoEditor.ImGui.ListNavigationResult.focusedIndex a1d71d88ff42160ad8f6de989b2949babba693e710a90de6816d992c6c8c5402 -->

```csharp
public int InnoEditor.ImGui.ListNavigationResult.focusedIndex { get; }
```

Gets the resulting visible focus index, or minus one for no focus.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Selection.cs#L192).

## `selectionRequested`

<a id="api-1ded2d4a5bdaac34"></a>
<!-- api: P:InnoEditor.ImGui.ListNavigationResult.selectionRequested 7c35a9cf5cee50813894bf9fb42382ef309c4fada2d239eff92c453d16133223 -->

```csharp
public bool InnoEditor.ImGui.ListNavigationResult.selectionRequested { get; }
```

Gets whether the caller should apply a domain selection operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Selection.cs#L200).

## `toggle`

<a id="api-1bb4804c1461e0ab"></a>
<!-- api: P:InnoEditor.ImGui.ListNavigationResult.toggle 4bf764a2868965cb66c70d3e1de3061188a7a5a969b67ef0383f14c4f4462b53 -->

```csharp
public bool InnoEditor.ImGui.ListNavigationResult.toggle { get; }
```

Gets whether Space with the primary modifier requests toggling the focused entry.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Selection.cs#L212).
