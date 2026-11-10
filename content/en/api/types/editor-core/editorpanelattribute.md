---
title: "EditorPanelAttribute"
description: "Reference for EditorPanelAttribute in Inno.Editor.Core."
uid: api.inno.editor.core.5ee5255661c07840
kind: api
owners:
  - Inno.Editor.Core
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-core#lifecycle-and-failure-contracts
---
# `EditorPanelAttribute`

This reference describes `EditorPanelAttribute` in `Inno.Editor.Core`. Read the [shared contract](../../projects/inno-editor-core.md#lifecycle-and-failure-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-73994bece100a8c0) | Method |
| [`defaultOpen`](#api-eba562c879bd76ad) | Property |
| [`id`](#api-cc3c3fe6c8baea0c) | Property |
| [`menuPath`](#api-273362142c65aa9a) | Property |
| [`order`](#api-65cd88f0f2f263e5) | Property |
| [`separatorBefore`](#api-dc575ffa6a48c170) | Property |
| [`title`](#api-7441180cea50c370) | Property |

## Type declaration

<a id="api-5ee5255661c07840"></a>
<!-- api: T:Inno.Editor.Core.EditorPanelAttribute 99f5fcb176c53a29520536c3aa63e962951f9dfaf175752e1c6b117ad58c6247 -->

```csharp
public sealed class Inno.Editor.Core.EditorPanelAttribute : System.Attribute
```

Registers an editor panel for automatic discovery.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorPanelAttribute.cs#L9).

## `#ctor`

<a id="api-73994bece100a8c0"></a>
<!-- api: M:Inno.Editor.Core.EditorPanelAttribute.#ctor(System.String,System.String,System.Int32,System.Boolean,System.String,System.Boolean) 347c245bef741eacc6575a0a5d149059eba7f2f5143057f27146d40d926a2c01 -->

```csharp
public Inno.Editor.Core.EditorPanelAttribute.EditorPanelAttribute(string id, string title, int order = 0, bool defaultOpen = true, string menuPath = "", bool separatorBefore = false)
```

Creates a dockable panel registration with stable identity and presentation metadata.

**Parameter `id`:** The stable identity used for Panel-menu routing and reload-state retention.

**Parameter `title`:** The visible dockable-window title.

**Parameter `order`:** The stable panel and generated Panel-menu ordering value.

**Parameter `defaultOpen`:** Whether a newly discovered panel is visible before retained state is available.

**Parameter `menuPath`:** The optional slash-delimited category path under the generated `Panel` menu.

**Parameter `separatorBefore`:** Whether the generated toggle is preceded by a separator within its final menu category.

**Throws `System.ArgumentException`:** Thrown when `id` or `title` is empty, or when
`menuPath` contains an empty segment.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorPanelAttribute.cs#L36).

## `defaultOpen`

<a id="api-eba562c879bd76ad"></a>
<!-- api: P:Inno.Editor.Core.EditorPanelAttribute.defaultOpen 3eb8a394fc8fc5da30fc8b78bd7e29a7a45b22102eb63202ac457aedb799b5d7 -->

```csharp
public bool Inno.Editor.Core.EditorPanelAttribute.defaultOpen { get; }
```

Gets whether a newly discovered panel is open by default.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorPanelAttribute.cs#L74).

## `id`

<a id="api-cc3c3fe6c8baea0c"></a>
<!-- api: P:Inno.Editor.Core.EditorPanelAttribute.id cd29490a84e2afa90fca8959720a57b2a6ccafc4c275c1bc1d8653e117deedf4 -->

```csharp
public string Inno.Editor.Core.EditorPanelAttribute.id { get; }
```

Gets the stable panel identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorPanelAttribute.cs#L59).

## `menuPath`

<a id="api-273362142c65aa9a"></a>
<!-- api: P:Inno.Editor.Core.EditorPanelAttribute.menuPath 4bbf7c0dbec0b8330285e8c583015805c0148ef2daaadcbe8dbd492779806ef1 -->

```csharp
public string Inno.Editor.Core.EditorPanelAttribute.menuPath { get; }
```

Gets the optional category path under the generated `Panel` menu.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorPanelAttribute.cs#L79).

## `order`

<a id="api-65cd88f0f2f263e5"></a>
<!-- api: P:Inno.Editor.Core.EditorPanelAttribute.order ba712d0ae585d3afaca65cde02c61dbb0d6e81d1e9c432db735b0c1373c6d231 -->

```csharp
public int Inno.Editor.Core.EditorPanelAttribute.order { get; }
```

Gets the stable panel ordering value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorPanelAttribute.cs#L69).

## `separatorBefore`

<a id="api-dc575ffa6a48c170"></a>
<!-- api: P:Inno.Editor.Core.EditorPanelAttribute.separatorBefore a268253599342460be327c407cc7b1bc81a787a890bc646b833a8e3a3aca0e49 -->

```csharp
public bool Inno.Editor.Core.EditorPanelAttribute.separatorBefore { get; }
```

Gets whether the generated panel toggle begins a new visual group.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorPanelAttribute.cs#L84).

## `title`

<a id="api-7441180cea50c370"></a>
<!-- api: P:Inno.Editor.Core.EditorPanelAttribute.title 6c250c8ec1d3a58873c8163505cebc7ed37f9683614474e97a0418bf5a948d46 -->

```csharp
public string Inno.Editor.Core.EditorPanelAttribute.title { get; }
```

Gets the visible panel title.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorPanelAttribute.cs#L64).
