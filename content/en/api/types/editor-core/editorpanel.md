---
title: "EditorPanel"
description: "Reference for EditorPanel in Inno.Editor.Core."
uid: api.inno.editor.core.6c44cde3a9f0fdac
kind: api
owners:
  - Inno.Editor.Core
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-core#lifecycle-and-failure-contracts
---
# `EditorPanel`

This reference describes `EditorPanel` in `Inno.Editor.Core`. Read the [shared contract](../../projects/inno-editor-core.md#lifecycle-and-failure-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-3d0bd2d3155ff860) | Method |
| [`Attach`](#api-a9eed9eac9adea2c) | Method |
| [`Capture`](#api-3694992a813ea91f) | Method |
| [`Detach`](#api-8e960e6ebff41f01) | Method |
| [`Draw`](#api-a4f525b647e04bcc) | Method |
| [`OnAttach`](#api-95a893532c21d880) | Method |
| [`OnDetach`](#api-c023cbc68fd90f76) | Method |
| [`OnDraw`](#api-89e615bff6a69406) | Method |
| [`Restore`](#api-b5234148be264088) | Method |
| [`allowScrolling`](#api-2d0048f8b11d4820) | Property |
| [`initialSize`](#api-bafa428cc7d50f1c) | Property |
| [`isOpen`](#api-b36486f687a04231) | Property |
| [`useWindowPadding`](#api-92dc10e8cd8bbff9) | Property |

## Type declaration

<a id="api-6c44cde3a9f0fdac"></a>
<!-- api: T:Inno.Editor.Core.EditorPanel daf5469521ed69f80dfba50e6238ac464d2386e4b26b44a0f4fa6d9ea4c87776 -->

```csharp
public abstract class Inno.Editor.Core.EditorPanel
```

Base class for editor panel implementations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorPanel.cs#L13).

## `#ctor`

<a id="api-3d0bd2d3155ff860"></a>
<!-- api: M:Inno.Editor.Core.EditorPanel.#ctor b8618b5d4b169c221f535f4a034e1259aba6eeb369f34320b2c7e3fc65204dfc -->

```csharp
protected Inno.Editor.Core.EditorPanel.EditorPanel()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorPanel.cs#L13).

## `Attach`

<a id="api-a9eed9eac9adea2c"></a>
<!-- api: M:Inno.Editor.Core.EditorPanel.Attach(Inno.Editor.Core.EditorContext) 5adb34b13429334662625c7c227b991305504c3118cc4985894a3595ac9f2cea -->

```csharp
public void Inno.Editor.Core.EditorPanel.Attach(Inno.Editor.Core.EditorContext context)
```

Attaches the panel after its extension generation becomes active.

**Parameter `context`:** The shared editor context for the active runtime.

**Throws `System.ArgumentNullException`:** Thrown when `context` is `null`.

**Throws `System.InvalidOperationException`:** Thrown when the panel is already attached.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorPanel.cs#L56).

## `Capture`

<a id="api-3694992a813ea91f"></a>
<!-- api: M:Inno.Editor.Core.EditorPanel.Capture(Inno.Editor.Core.EditorState) 2664dffe8a7dfa5712ce000c2172d5f2ce878aac4e39b8821b61cb6cec289587 -->

```csharp
protected virtual void Inno.Editor.Core.EditorPanel.Capture(Inno.Editor.Core.EditorState state)
```

Captures readable project state owned by this panel.

**Constraints:** Overriding this method opts the panel into project-state IO. Panels that keep the base
implementation are never registered with the persistence coordinator and therefore perform
no state reads or writes. Panel visibility is persisted separately for every registered panel.

**Parameter `state`:** The writable parameter that receives the complete readable state for this panel.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorPanel.cs#L168).

## `Detach`

<a id="api-8e960e6ebff41f01"></a>
<!-- api: M:Inno.Editor.Core.EditorPanel.Detach(Inno.Editor.Core.EditorContext) 4dcde96f791b23b97597103892188f3a091de794da734698932129eb0cdac5c9 -->

```csharp
public void Inno.Editor.Core.EditorPanel.Detach(Inno.Editor.Core.EditorContext context)
```

Detaches the panel before its extension generation is released.

**Constraints:** Also compensates partial attachment. Completed detachment is idempotent; a pending panel cannot draw.

**Parameter `context`:** The shared editor context for the runtime being detached.

**Throws `System.ArgumentNullException`:** Thrown when `context` is `null`.

**Throws `Inno.Core.Execution.RetirementPendingException`:** Panel work is still active. The owner must retain the panel and its dependencies and retry detachment.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorPanel.cs#L82).

## `Draw`

<a id="api-a4f525b647e04bcc"></a>
<!-- api: M:Inno.Editor.Core.EditorPanel.Draw(Inno.Editor.Core.EditorContext) cc30af9ffbfe00ddd10bb39816227de3adfdde2bfd88ae2b85206a4bd0d75065 -->

```csharp
public void Inno.Editor.Core.EditorPanel.Draw(Inno.Editor.Core.EditorContext context)
```

Draws the complete dockable contents of the panel for the current frame.

**Parameter `context`:** The shared editor context containing current selection, focus, and frame state.

**Throws `System.ArgumentNullException`:** Thrown when `context` is `null`.

**Throws `System.InvalidOperationException`:** Thrown when the panel is not attached.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorPanel.cs#L117).

## `OnAttach`

<a id="api-95a893532c21d880"></a>
<!-- api: M:Inno.Editor.Core.EditorPanel.OnAttach(Inno.Editor.Core.EditorContext) cb670a6264577edef64595f54667e345e0eb855eee9ffad2f31b4bc38b2dd73b -->

```csharp
protected virtual void Inno.Editor.Core.EditorPanel.OnAttach(Inno.Editor.Core.EditorContext context)
```

Runs after the panel is attached to an active extension generation.

**Parameter `context`:** The shared editor context for the active runtime.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorPanel.cs#L139).

## `OnDetach`

<a id="api-c023cbc68fd90f76"></a>
<!-- api: M:Inno.Editor.Core.EditorPanel.OnDetach(Inno.Editor.Core.EditorContext) 527be3bd689076a58b2a48d9576cc652f9b0e11941cd47bd6adc0da265494eb2 -->

```csharp
protected virtual void Inno.Editor.Core.EditorPanel.OnDetach(Inno.Editor.Core.EditorContext context)
```

Runs before the panel is detached from its active extension generation.

**Constraints:** This includes failed attachment compensation. Retain unfinished resources when throwing
RetirementPendingException and avoid repeating completed cleanup steps on the next attempt.

**Parameter `context`:** The shared editor context for the runtime being detached.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorPanel.cs#L153).

## `OnDraw`

<a id="api-89e615bff6a69406"></a>
<!-- api: M:Inno.Editor.Core.EditorPanel.OnDraw(Inno.Editor.Core.EditorContext) 6592d0de3755e3a35bc095aab0b47fe98eee6ad34de1404adbbf38266b9bee13 -->

```csharp
protected abstract void Inno.Editor.Core.EditorPanel.OnDraw(Inno.Editor.Core.EditorContext context)
```

Draws the complete dockable contents of this panel for the current frame.

**Parameter `context`:** The shared editor context containing current selection, focus, and frame state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorPanel.cs#L131).

## `Restore`

<a id="api-b5234148be264088"></a>
<!-- api: M:Inno.Editor.Core.EditorPanel.Restore(Inno.Editor.Core.EditorState) fb4d7f3bfbc63b2e864575d95fc520b2bf784c3fdd6780b86dbe5b8b60e0377f -->

```csharp
protected virtual void Inno.Editor.Core.EditorPanel.Restore(Inno.Editor.Core.EditorState state)
```

Restores readable project state owned by this panel.

**Constraints:** This method is called only when `Inno.Editor.Core.EditorPanel.Capture(Inno.Editor.Core.EditorState)` is overridden. It runs once after the
panel is attached and before the panel is allowed to capture replacement state.

**Parameter `state`:** The read-only state parameter for this panel. Missing or incompatible values return the
fallback supplied to ```Inno.Editor.Core.EditorState.Get``1(System.String,``0)```.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorPanel.cs#L183).

## `allowScrolling`

<a id="api-2d0048f8b11d4820"></a>
<!-- api: P:Inno.Editor.Core.EditorPanel.allowScrolling 566b4df617ed3ebb2face65a20b8773ae5e38150e6631dc97f4ec261fc68b8e1 -->

```csharp
public virtual bool Inno.Editor.Core.EditorPanel.allowScrolling { get; }
```

Gets whether the presentation backend may create a scroll range for this panel window.

**Constraints:** Full-canvas panels should return `false` and manage navigation inside their
own content instead of allowing the host window to scroll.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorPanel.cs#L31).

## `initialSize`

<a id="api-bafa428cc7d50f1c"></a>
<!-- api: P:Inno.Editor.Core.EditorPanel.initialSize 7880d303fb87d41f11f4e9eb50f388896dad96b93337f0ff67d737676e54123d -->

```csharp
public virtual System.Numerics.Vector2 Inno.Editor.Core.EditorPanel.initialSize { get; }
```

Gets the initial floating size in UI coordinates; zero leaves native auto-sizing in control. Saved layouts take precedence.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorPanel.cs#L36).

## `isOpen`

<a id="api-b36486f687a04231"></a>
<!-- api: P:Inno.Editor.Core.EditorPanel.isOpen 985eb75e51dbe5a9209bd757c1b0746508090d4a0e2070e3ad2dc18b591cff53 -->

```csharp
public bool Inno.Editor.Core.EditorPanel.isOpen { get; set; }
```

Gets or sets whether panel is visible.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorPanel.cs#L41).

## `useWindowPadding`

<a id="api-92dc10e8cd8bbff9"></a>
<!-- api: P:Inno.Editor.Core.EditorPanel.useWindowPadding d9ef6e3a7611884dd4aef8fe2267e079600c0d1c8e6b35073f26d9dd5a84ee3a -->

```csharp
public virtual bool Inno.Editor.Core.EditorPanel.useWindowPadding { get; }
```

Gets whether the presentation backend should inset this panel body by its standard
window padding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorPanel.cs#L22).
