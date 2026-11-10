---
title: "EditorShortcutAttribute"
description: "Reference for EditorShortcutAttribute in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.fc45943e651691e5
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `EditorShortcutAttribute`

This reference describes `EditorShortcutAttribute` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-ddb4080323af04c6) | Method |
| [`#ctor`](#api-77fc037fcb818a1b) | Method |
| [`area`](#api-67c686f9254975fd) | Property |
| [`key`](#api-03690846a10d765c) | Property |
| [`modifiers`](#api-8df0c24489be6ea8) | Property |
| [`primary`](#api-4520aa0ff1fe4b64) | Property |

## Type declaration

<a id="api-fc45943e651691e5"></a>
<!-- api: T:Inno.Editor.Interactions.EditorShortcutAttribute 947390faf291792cb015fe612301a7405e5d408e3811a4cfc3800238349c141e -->

```csharp
public sealed class Inno.Editor.Interactions.EditorShortcutAttribute : System.Attribute
```

Associates an editor action with a keyboard shortcut.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorShortcutAttribute.cs#L11).

## `#ctor`

<a id="api-ddb4080323af04c6"></a>
<!-- api: M:Inno.Editor.Interactions.EditorShortcutAttribute.#ctor(Inno.Core.Input.KeyCode,Inno.Core.Input.KeyModifier,System.Boolean) 0d468e7c09ebcacf4852746ac2c84edf3a6a32fdba9f7c2f6439f51dd2a81ab4 -->

```csharp
public Inno.Editor.Interactions.EditorShortcutAttribute.EditorShortcutAttribute(Inno.Core.Input.KeyCode key, Inno.Core.Input.KeyModifier modifiers = Inno.Core.Input.KeyModifier.None, bool primary = false)
```

Creates a shortcut that can be dispatched from any focused interaction surface.

**Parameter `key`:** The non-modifier key that triggers the action.

**Parameter `modifiers`:** The exact additional modifier keys required by the gesture.

**Parameter `primary`:** Whether the platform primary modifier, Command on macOS or Control elsewhere, is required.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorShortcutAttribute.cs#L25).

## `#ctor`

<a id="api-77fc037fcb818a1b"></a>
<!-- api: M:Inno.Editor.Interactions.EditorShortcutAttribute.#ctor(System.String,Inno.Core.Input.KeyCode,Inno.Core.Input.KeyModifier,System.Boolean) 5c8ac783d9f2676a0f26c50074662c858c5717df1ebdd3da5b3ab9c87693680b -->

```csharp
public Inno.Editor.Interactions.EditorShortcutAttribute.EditorShortcutAttribute(string area, Inno.Core.Input.KeyCode key, Inno.Core.Input.KeyModifier modifiers = Inno.Core.Input.KeyModifier.None, bool primary = false)
```

Creates a shortcut scoped to an exact interaction area.

**Parameter `area`:** The exact focused area that accepts the shortcut, or an empty string for any area.

**Parameter `key`:** The non-modifier key that triggers the action.

**Parameter `modifiers`:** The exact additional modifier keys required by the gesture.

**Parameter `primary`:** Whether the platform primary modifier, Command on macOS or Control elsewhere, is required.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorShortcutAttribute.cs#L49).

## `area`

<a id="api-67c686f9254975fd"></a>
<!-- api: P:Inno.Editor.Interactions.EditorShortcutAttribute.area ed666a89d40eae142b2769383ab5ddb7fbe763661d079a92960012edf688781f -->

```csharp
public string Inno.Editor.Interactions.EditorShortcutAttribute.area { get; }
```

Gets the optional exact interaction area.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorShortcutAttribute.cs#L64).

## `key`

<a id="api-03690846a10d765c"></a>
<!-- api: P:Inno.Editor.Interactions.EditorShortcutAttribute.key a5178b2544589c594d62400403b1b8edec2d7c958520d734bfc408826cf79167 -->

```csharp
public Inno.Core.Input.KeyCode Inno.Editor.Interactions.EditorShortcutAttribute.key { get; }
```

Gets the shortcut key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorShortcutAttribute.cs#L69).

## `modifiers`

<a id="api-8df0c24489be6ea8"></a>
<!-- api: P:Inno.Editor.Interactions.EditorShortcutAttribute.modifiers dfae8881c0468d4ac2b82a1c93f7b4c38a1f37cee64f7a53c0318b369b241a1d -->

```csharp
public Inno.Core.Input.KeyModifier Inno.Editor.Interactions.EditorShortcutAttribute.modifiers { get; }
```

Gets additional shortcut modifiers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorShortcutAttribute.cs#L74).

## `primary`

<a id="api-4520aa0ff1fe4b64"></a>
<!-- api: P:Inno.Editor.Interactions.EditorShortcutAttribute.primary d5485107edbb17660a9a4f9906d8f5906d1e0ecde4427c082d0c922a87c41579 -->

```csharp
public bool Inno.Editor.Interactions.EditorShortcutAttribute.primary { get; }
```

Gets whether the platform primary modifier is required.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorShortcutAttribute.cs#L79).
