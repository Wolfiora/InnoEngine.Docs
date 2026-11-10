---
title: "EditorMenuContext"
description: "Reference for EditorMenuContext in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.4cb200d2d9eaeae0
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `EditorMenuContext`

This reference describes `EditorMenuContext` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-dc9c5b120fd004fa) | Method |
| [`area`](#api-668b857fb09fbdec) | Property |
| [`editor`](#api-716c97a48da91387) | Property |
| [`interactions`](#api-64782b4655b3865f) | Property |
| [`target`](#api-32487f23a1b25c99) | Property |

## Type declaration

<a id="api-4cb200d2d9eaeae0"></a>
<!-- api: T:Inno.Editor.Interactions.EditorMenuContext 48085a2cf906f91fa4268bc1e467bf5edd89a5f120029714fd14be2ddc75cf85 -->

```csharp
public sealed class Inno.Editor.Interactions.EditorMenuContext
```

Provides contextual state while constructing an editor menu.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuContext.cs#L10).

## `#ctor`

<a id="api-dc9c5b120fd004fa"></a>
<!-- api: M:Inno.Editor.Interactions.EditorMenuContext.#ctor(Inno.Editor.Core.EditorContext,Inno.Editor.Interactions.EditorInteractions,System.String,System.Object) ef5c268b5077dec3b8b124a5e6d1e07705835dd522c05c71ed59088c6f652348 -->

```csharp
public Inno.Editor.Interactions.EditorMenuContext.EditorMenuContext(Inno.Editor.Core.EditorContext editor, Inno.Editor.Interactions.EditorInteractions interactions, string area, object? target = null)
```

Creates a contextual menu request.

**Parameter `editor`:** The shared passive editor context.

**Parameter `interactions`:** The active interaction entry point.

**Parameter `area`:** The exact menu area being requested.

**Parameter `target`:** The optional object the menu operates on.

**Throws `System.ArgumentNullException`:** Thrown when `editor` or `interactions` is `null`.

**Throws `System.ArgumentException`:** Thrown when `area` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuContext.cs#L33).

## `area`

<a id="api-668b857fb09fbdec"></a>
<!-- api: P:Inno.Editor.Interactions.EditorMenuContext.area 9f9907108381a2f4b94f70d9315c99e8a410a164cc80c685c9f1ad85f81c2473 -->

```csharp
public string Inno.Editor.Interactions.EditorMenuContext.area { get; }
```

Gets the requested menu area.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuContext.cs#L59).

## `editor`

<a id="api-716c97a48da91387"></a>
<!-- api: P:Inno.Editor.Interactions.EditorMenuContext.editor de1f6a5f1b6b32756f8c2ae5707e6570f74c88af5b46732ad21a1e9ead294fd2 -->

```csharp
public Inno.Editor.Core.EditorContext Inno.Editor.Interactions.EditorMenuContext.editor { get; }
```

Gets the shared passive editor context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuContext.cs#L49).

## `interactions`

<a id="api-64782b4655b3865f"></a>
<!-- api: P:Inno.Editor.Interactions.EditorMenuContext.interactions c033d2581e8d38b463d7d9b936ab145fa684370c65254f175de665630ce1a6b7 -->

```csharp
public Inno.Editor.Interactions.EditorInteractions Inno.Editor.Interactions.EditorMenuContext.interactions { get; }
```

Gets the active interaction entry point.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuContext.cs#L54).

## `target`

<a id="api-32487f23a1b25c99"></a>
<!-- api: P:Inno.Editor.Interactions.EditorMenuContext.target f874e5e1dedb09706dd050a793c6a9e6aa2a3a44502753af046ccd7bca84c5cb -->

```csharp
public object? Inno.Editor.Interactions.EditorMenuContext.target { get; }
```

Gets the contextual menu target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuContext.cs#L64).
