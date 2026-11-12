---
title: "EditorShortcutAttribute"
description: "Reference for EditorShortcutAttribute in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.ce2804cb50fe6511
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# `EditorShortcutAttribute`

This reference describes `EditorShortcutAttribute` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-254dd96e301867c5) | Method |
| [`#ctor`](#api-449d19086c696b82) | Method |
| [`area`](#api-7573029717d6d91d) | Property |
| [`key`](#api-70d4d7e7e9b3ca02) | Property |
| [`modifiers`](#api-b7ea71d3b37d9b03) | Property |
| [`primary`](#api-170aff0b42f8d1a5) | Property |

## Type declaration

<a id="api-ce2804cb50fe6511"></a>
<!-- api: T:InnoEditor.Interactions.EditorShortcutAttribute 6e56caf2091583f418ccca71c687db89077073ad0023f81627765d0bd4ac9db5 -->

```csharp
public sealed class InnoEditor.Interactions.EditorShortcutAttribute : System.Attribute
```

Associates an editor action with a keyboard shortcut.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorShortcutAttribute.cs#L11).

## `#ctor`

<a id="api-254dd96e301867c5"></a>
<!-- api: M:InnoEditor.Interactions.EditorShortcutAttribute.#ctor(InnoEngine.Input.KeyCode,InnoEngine.Input.KeyModifier,System.Boolean) 4ebc15d039732106797630f60e6b9297fb99517b1e7370f4a2053da61e4500d1 -->

```csharp
public InnoEditor.Interactions.EditorShortcutAttribute.EditorShortcutAttribute(InnoEngine.Input.KeyCode key, InnoEngine.Input.KeyModifier modifiers = InnoEngine.Input.KeyModifier.None, bool primary = false)
```

Creates a shortcut that can be dispatched from any focused interaction surface.

**Parameter `key`:** The non-modifier key that triggers the action.

**Parameter `modifiers`:** The exact additional modifier keys required by the gesture.

**Parameter `primary`:** Whether the platform primary modifier, Command on macOS or Control elsewhere, is required.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorShortcutAttribute.cs#L25).

## `#ctor`

<a id="api-449d19086c696b82"></a>
<!-- api: M:InnoEditor.Interactions.EditorShortcutAttribute.#ctor(System.String,InnoEngine.Input.KeyCode,InnoEngine.Input.KeyModifier,System.Boolean) 87d6b22d36837875f215965a89b80dae07315372d7e8ece724e79285dbda5d25 -->

```csharp
public InnoEditor.Interactions.EditorShortcutAttribute.EditorShortcutAttribute(string area, InnoEngine.Input.KeyCode key, InnoEngine.Input.KeyModifier modifiers = InnoEngine.Input.KeyModifier.None, bool primary = false)
```

Creates a shortcut scoped to an exact interaction area.

**Parameter `area`:** The exact focused area that accepts the shortcut, or an empty string for any area.

**Parameter `key`:** The non-modifier key that triggers the action.

**Parameter `modifiers`:** The exact additional modifier keys required by the gesture.

**Parameter `primary`:** Whether the platform primary modifier, Command on macOS or Control elsewhere, is required.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorShortcutAttribute.cs#L49).

## `area`

<a id="api-7573029717d6d91d"></a>
<!-- api: P:InnoEditor.Interactions.EditorShortcutAttribute.area 6b72fe7be8ac3032c5ba24c19dc8a4a14f2a748d668f00069cc1848744f4097b -->

```csharp
public string InnoEditor.Interactions.EditorShortcutAttribute.area { get; }
```

Gets the optional exact interaction area.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorShortcutAttribute.cs#L64).

## `key`

<a id="api-70d4d7e7e9b3ca02"></a>
<!-- api: P:InnoEditor.Interactions.EditorShortcutAttribute.key 224b72c03851021cac85bc787b6474da965ce9dba6769412b9c554695cf72de6 -->

```csharp
public InnoEngine.Input.KeyCode InnoEditor.Interactions.EditorShortcutAttribute.key { get; }
```

Gets the shortcut key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorShortcutAttribute.cs#L69).

## `modifiers`

<a id="api-b7ea71d3b37d9b03"></a>
<!-- api: P:InnoEditor.Interactions.EditorShortcutAttribute.modifiers 9d2976a449811a6e03ef657e376c597d5dffddb83c9230dd3fb062f76c2fd02a -->

```csharp
public InnoEngine.Input.KeyModifier InnoEditor.Interactions.EditorShortcutAttribute.modifiers { get; }
```

Gets additional shortcut modifiers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorShortcutAttribute.cs#L74).

## `primary`

<a id="api-170aff0b42f8d1a5"></a>
<!-- api: P:InnoEditor.Interactions.EditorShortcutAttribute.primary d323c23e06da2a8c55f3a8f6af35e6bc072d71f3e8ccdbfab44dc3d0cfac463b -->

```csharp
public bool InnoEditor.Interactions.EditorShortcutAttribute.primary { get; }
```

Gets whether the platform primary modifier is required.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorShortcutAttribute.cs#L79).
