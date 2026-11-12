---
title: "EditorViewportNavigationCapabilities"
description: "Reference for EditorViewportNavigationCapabilities in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.editor-script.03e9aba539b0821a
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: editor-script
contracts:
  - project.inno-editor-rendering
  - manual.scripting.use-script-api
---
# `EditorViewportNavigationCapabilities`

This reference describes `EditorViewportNavigationCapabilities` in `Inno.Editor.Rendering`. Read the [shared contract](../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Fly`](#api-2331e0743b935689) | Field |
| [`FrameSelection`](#api-3141937dd8239a3a) | Field |
| [`None`](#api-14daff413b144bca) | Field |
| [`Orbit`](#api-7da51b451a471104) | Field |
| [`Pan`](#api-e613fde53f2f7249) | Field |
| [`Planar`](#api-a7c157f8f5c11729) | Field |
| [`Zoom`](#api-cd3205dc8b996479) | Field |

## Type declaration

<a id="api-03e9aba539b0821a"></a>
<!-- api: T:InnoEditor.Rendering.EditorViewportNavigationCapabilities edf07c4f8fd889333726a88579ba2e0df54fe51ab2f7deb9a7033d128db4e62c -->

```csharp
public enum InnoEditor.Rendering.EditorViewportNavigationCapabilities : int
```

Declares navigation operations supported by one viewport interaction controller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L48).

## `Fly`

<a id="api-2331e0743b935689"></a>
<!-- api: F:InnoEditor.Rendering.EditorViewportNavigationCapabilities.Fly f815d69861b0ed9f86e9dbb509139eede94ec68070806dd5fe829ea18069c35f -->

```csharp
InnoEditor.Rendering.EditorViewportNavigationCapabilities.Fly = 8
```

Allows free-look movement.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L78).

## `FrameSelection`

<a id="api-3141937dd8239a3a"></a>
<!-- api: F:InnoEditor.Rendering.EditorViewportNavigationCapabilities.FrameSelection e6c55df22915220033291c9c5fd268c295b81ed8b15afe7a2105bb59f5355b75 -->

```csharp
InnoEditor.Rendering.EditorViewportNavigationCapabilities.FrameSelection = 16
```

Allows framing a provider-supplied or host-derived selection bound.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L83).

## `None`

<a id="api-14daff413b144bca"></a>
<!-- api: F:InnoEditor.Rendering.EditorViewportNavigationCapabilities.None ed25f106db95db2a34ba119381934c6aad93e86cefb2a870c7f52cc0f06894c2 -->

```csharp
InnoEditor.Rendering.EditorViewportNavigationCapabilities.None = 0
```

Disables host-owned navigation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L53).

## `Orbit`

<a id="api-7da51b451a471104"></a>
<!-- api: F:InnoEditor.Rendering.EditorViewportNavigationCapabilities.Orbit 91a5e96288f9b5ec746fd2068a3529ab791d6464a961b45f831ba5f2625d2db4 -->

```csharp
InnoEditor.Rendering.EditorViewportNavigationCapabilities.Orbit = 4
```

Allows pivot-oriented orbit and dolly.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L73).

## `Pan`

<a id="api-e613fde53f2f7249"></a>
<!-- api: F:InnoEditor.Rendering.EditorViewportNavigationCapabilities.Pan 51ad8e91536b07585a15c6cad07ccf3694d1b120642973f613ebb5aa91c5b834 -->

```csharp
InnoEditor.Rendering.EditorViewportNavigationCapabilities.Pan = 1
```

Allows translating the view parallel to its image plane.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L58).

## `Planar`

<a id="api-a7c157f8f5c11729"></a>
<!-- api: F:InnoEditor.Rendering.EditorViewportNavigationCapabilities.Planar b33ab141c239218417960b7e1cf579804dd5955d26df6a04756eaaced6033a04 -->

```csharp
InnoEditor.Rendering.EditorViewportNavigationCapabilities.Planar = 3
```

Allows the complete plane-oriented pan and zoom interaction model.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L68).

## `Zoom`

<a id="api-cd3205dc8b996479"></a>
<!-- api: F:InnoEditor.Rendering.EditorViewportNavigationCapabilities.Zoom 75df4d21d6b0e4e5f6b2f7aad911b5cf7b1669b79731dcae5ec63647254200c0 -->

```csharp
InnoEditor.Rendering.EditorViewportNavigationCapabilities.Zoom = 2
```

Allows changing orthographic size or perspective focus distance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L63).
