---
title: "EditorPanel"
description: "Reference for EditorPanel in Inno.Editor.Core."
uid: api.inno.editor.core.editor-script.c0b1ccfc9472916a
kind: api
owners:
  - Inno.Editor.Core
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-core#lifecycle-and-failure-contracts
  - manual.scripting.use-script-api
---
# `EditorPanel`

This reference describes `EditorPanel` in `Inno.Editor.Core`. Read the [shared contract](../../projects/inno-editor-core.md#lifecycle-and-failure-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-c574a5346607369e) | Method |
| [`Attach`](#api-71acf28dde03e4b8) | Method |
| [`Capture`](#api-aff4c7ae868e489c) | Method |
| [`Detach`](#api-ca9721e9fc5e87fc) | Method |
| [`Draw`](#api-d854855e98d55a32) | Method |
| [`OnAttach`](#api-7e6499a38f056907) | Method |
| [`OnDetach`](#api-9fb2ae712cca6645) | Method |
| [`OnDraw`](#api-069d8246c5ec57ff) | Method |
| [`Restore`](#api-b4e1a1a2420ba638) | Method |
| [`allowScrolling`](#api-adac427a79fb6782) | Property |
| [`initialSize`](#api-30379342c3cc9c81) | Property |
| [`isOpen`](#api-2435989a1aed471c) | Property |
| [`useWindowPadding`](#api-c7a12b77cef95a89) | Property |

## Type declaration

<a id="api-c0b1ccfc9472916a"></a>
<!-- api: T:InnoEditor.Core.EditorPanel 0be85fdada7e2cbeaa6fba9f6df556bdb9770fc1a257e1db75436f5c788e2468 -->

```csharp
public abstract class InnoEditor.Core.EditorPanel
```

Base class for editor panel implementations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorPanel.cs#L13).

## `#ctor`

<a id="api-c574a5346607369e"></a>
<!-- api: M:InnoEditor.Core.EditorPanel.#ctor 1424aaf6adc18f410001bd54c6770965e642a6983c93594ff1c7b917b83e1e8e -->

```csharp
protected InnoEditor.Core.EditorPanel.EditorPanel()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorPanel.cs#L13).

## `Attach`

<a id="api-71acf28dde03e4b8"></a>
<!-- api: M:InnoEditor.Core.EditorPanel.Attach(InnoEditor.Core.EditorContext) f526b4b35beb12a1da3ccee3cdf645abd94c1f3e91922410560d1577bf5bdbfd -->

```csharp
public void InnoEditor.Core.EditorPanel.Attach(InnoEditor.Core.EditorContext context)
```

Attaches the panel after its extension generation becomes active.

**Parameter `context`:** The shared editor context for the active runtime.

**Throws `System.ArgumentNullException`:** Thrown when `context` is `null`.

**Throws `System.InvalidOperationException`:** Thrown when the panel is already attached.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorPanel.cs#L56).

## `Capture`

<a id="api-aff4c7ae868e489c"></a>
<!-- api: M:InnoEditor.Core.EditorPanel.Capture(InnoEditor.Core.EditorState) 512f5c41756fbf13233ba23210ab30f684f93e247b6b22c0efcfb64ffb5911a0 -->

```csharp
protected virtual void InnoEditor.Core.EditorPanel.Capture(InnoEditor.Core.EditorState state)
```

Captures readable project state owned by this panel.

**Constraints:** Overriding this method opts the panel into project-state IO. Panels that keep the base
implementation are never registered with the persistence coordinator and therefore perform
no state reads or writes. Panel visibility is persisted separately for every registered panel.

**Parameter `state`:** The writable parameter that receives the complete readable state for this panel.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorPanel.cs#L168).

## `Detach`

<a id="api-ca9721e9fc5e87fc"></a>
<!-- api: M:InnoEditor.Core.EditorPanel.Detach(InnoEditor.Core.EditorContext) 34e1c841add76ec7aa79107436c7232a77d5b0018ad69deb51aba8a3f4b6c724 -->

```csharp
public void InnoEditor.Core.EditorPanel.Detach(InnoEditor.Core.EditorContext context)
```

Detaches the panel before its extension generation is released.

**Constraints:** Also compensates partial attachment. Completed detachment is idempotent; a pending panel cannot draw.

**Parameter `context`:** The shared editor context for the runtime being detached.

**Throws `System.ArgumentNullException`:** Thrown when `context` is `null`.

**Throws `Inno.Core.Execution.RetirementPendingException`:** Panel work is still active. The owner must retain the panel and its dependencies and retry detachment.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorPanel.cs#L82).

## `Draw`

<a id="api-d854855e98d55a32"></a>
<!-- api: M:InnoEditor.Core.EditorPanel.Draw(InnoEditor.Core.EditorContext) 0321815d34c82894e8ff611a5069e23bc56923fd8c15bc3dc9269b53a5452d8d -->

```csharp
public void InnoEditor.Core.EditorPanel.Draw(InnoEditor.Core.EditorContext context)
```

Draws the complete dockable contents of the panel for the current frame.

**Parameter `context`:** The shared editor context containing current selection, focus, and frame state.

**Throws `System.ArgumentNullException`:** Thrown when `context` is `null`.

**Throws `System.InvalidOperationException`:** Thrown when the panel is not attached.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorPanel.cs#L117).

## `OnAttach`

<a id="api-7e6499a38f056907"></a>
<!-- api: M:InnoEditor.Core.EditorPanel.OnAttach(InnoEditor.Core.EditorContext) 7e2b4b486e0058d22262504243ca42e7dbc3a15265f0385446b5014c5212ee0b -->

```csharp
protected virtual void InnoEditor.Core.EditorPanel.OnAttach(InnoEditor.Core.EditorContext context)
```

Runs after the panel is attached to an active extension generation.

**Parameter `context`:** The shared editor context for the active runtime.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorPanel.cs#L139).

## `OnDetach`

<a id="api-9fb2ae712cca6645"></a>
<!-- api: M:InnoEditor.Core.EditorPanel.OnDetach(InnoEditor.Core.EditorContext) 4854851350add65e5efe85486071c204231bf13422569518f3e89e0f81783b9c -->

```csharp
protected virtual void InnoEditor.Core.EditorPanel.OnDetach(InnoEditor.Core.EditorContext context)
```

Runs before the panel is detached from its active extension generation.

**Constraints:** This includes failed attachment compensation. Retain unfinished resources when throwing
RetirementPendingException and avoid repeating completed cleanup steps on the next attempt.

**Parameter `context`:** The shared editor context for the runtime being detached.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorPanel.cs#L153).

## `OnDraw`

<a id="api-069d8246c5ec57ff"></a>
<!-- api: M:InnoEditor.Core.EditorPanel.OnDraw(InnoEditor.Core.EditorContext) 52c9feb618ff5e27d59ea430bd1fb38f05f2b726a72916df72441c5241407ddf -->

```csharp
protected abstract void InnoEditor.Core.EditorPanel.OnDraw(InnoEditor.Core.EditorContext context)
```

Draws the complete dockable contents of this panel for the current frame.

**Parameter `context`:** The shared editor context containing current selection, focus, and frame state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorPanel.cs#L131).

## `Restore`

<a id="api-b4e1a1a2420ba638"></a>
<!-- api: M:InnoEditor.Core.EditorPanel.Restore(InnoEditor.Core.EditorState) 8b57c765fb8c8129ce918ed333042ef25d0c6b18ee083727da572a31b52a078b -->

```csharp
protected virtual void InnoEditor.Core.EditorPanel.Restore(InnoEditor.Core.EditorState state)
```

Restores readable project state owned by this panel.

**Constraints:** This method is called only when `InnoEditor.Core.EditorPanel.Capture(InnoEditor.Core.EditorState)` is overridden. It runs once after the
panel is attached and before the panel is allowed to capture replacement state.

**Parameter `state`:** The read-only state parameter for this panel. Missing or incompatible values return the
fallback supplied to ```InnoEditor.Core.EditorState.Get``1(System.String,``0)```.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorPanel.cs#L183).

## `allowScrolling`

<a id="api-adac427a79fb6782"></a>
<!-- api: P:InnoEditor.Core.EditorPanel.allowScrolling ade7fb3dafe85eceb0041b60292c5cbb92d5ffe1524f4d95178d9f9de71a2b74 -->

```csharp
public virtual bool InnoEditor.Core.EditorPanel.allowScrolling { get; }
```

Gets whether the presentation backend may create a scroll range for this panel window.

**Constraints:** Full-canvas panels should return `false` and manage navigation inside their
own content instead of allowing the host window to scroll.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorPanel.cs#L31).

## `initialSize`

<a id="api-30379342c3cc9c81"></a>
<!-- api: P:InnoEditor.Core.EditorPanel.initialSize fca8827574313b65dcf89cf79210022525794f42c990193c674222ce0f334b58 -->

```csharp
public virtual System.Numerics.Vector2 InnoEditor.Core.EditorPanel.initialSize { get; }
```

Gets the initial floating size in UI coordinates; zero leaves native auto-sizing in control. Saved layouts take precedence.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorPanel.cs#L36).

## `isOpen`

<a id="api-2435989a1aed471c"></a>
<!-- api: P:InnoEditor.Core.EditorPanel.isOpen 06a841809f032574d576c3500345a992c07bad82b493d0b7628553448b32c41a -->

```csharp
public bool InnoEditor.Core.EditorPanel.isOpen { get; set; }
```

Gets or sets whether panel is visible.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorPanel.cs#L41).

## `useWindowPadding`

<a id="api-c7a12b77cef95a89"></a>
<!-- api: P:InnoEditor.Core.EditorPanel.useWindowPadding 82f2be3b08bbac7b62169a8d9664bfb0a6e6636973c9a3c262c5f36775275105 -->

```csharp
public virtual bool InnoEditor.Core.EditorPanel.useWindowPadding { get; }
```

Gets whether the presentation backend should inset this panel body by its standard
window padding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorPanel.cs#L22).
