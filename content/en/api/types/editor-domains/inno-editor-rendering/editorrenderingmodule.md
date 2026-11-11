---
title: "EditorRenderingModule"
description: "Reference for EditorRenderingModule in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.1efeec8fe71cd832
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: source-clr
contracts:
  - project.inno-editor-rendering
---
# `EditorRenderingModule`

This reference describes `EditorRenderingModule` in `Inno.Editor.Rendering`. Read the [shared contract](../../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Editor.Core.EditorModule`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-0b57168384a0229b) | Method |
| [`CollectGizmos`](#api-71c9f7275905aace) | Method |
| [`Draw`](#api-0cb9b245f164f9c7) | Method |
| [`DrawControllerToolbar`](#api-a512e9f53a4dd332) | Method |
| [`GetCompositionError`](#api-f8d08bbd05100bd7) | Method |
| [`GetNavigationState`](#api-a56541e7760b04f8) | Method |
| [`HandlePointer`](#api-8c257bac92186716) | Method |
| [`HasContributors`](#api-354f48ba52bcbe21) | Method |
| [`OnDispose`](#api-15dfda10fae375a0) | Method |
| [`OnStart`](#api-d6a0a5cc605d2f8a) | Method |
| [`OnStop`](#api-1212c4fa171c3bcb) | Method |
| [`OnUpdate`](#api-0ead42a98167b70d) | Method |
| [`Release`](#api-92c0dc5507871261) | Method |
| [`SetContentScope`](#api-2db4dee303636fee) | Method |
| [`SetOutputInput`](#api-948841933b860263) | Method |
| [`SetOutputRoute`](#api-9de2fb8aa76de2d5) | Method |
| [`SetPresentation`](#api-49d59e885ba9d447) | Method |
| [`TryConfigureNavigation`](#api-305f0623ba8a47b1) | Method |
| [`TryGetManipulationSpace`](#api-d344e1aa596e40e0) | Method |
| [`TrySubmit`](#api-a51e340aba879e38) | Method |

## Type declaration

<a id="api-1efeec8fe71cd832"></a>
<!-- api: T:Inno.Editor.Rendering.EditorRenderingModule 6fa891be3b5c5cd2796be8113e4c09a0f866b03fdf2b6c70e244343c161ef3c3 -->

```csharp
public sealed class Inno.Editor.Rendering.EditorRenderingModule : Inno.Editor.Core.EditorModule
```

Composes reloadable rendering-model contributors while retaining only opaque presentation outputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorRenderingModule.cs#L22).

## `#ctor`

<a id="api-0b57168384a0229b"></a>
<!-- api: M:Inno.Editor.Rendering.EditorRenderingModule.#ctor(Inno.Editor.Rendering.IEditorRenderingHost,Inno.Editor.Interactions.EditorInteractions,Inno.Extensibility.Types.TypeCatalog) 011bdfcdac93a1bc3827586c65767fe6d62c9de15da2c528422043c091fe12fa -->

```csharp
public Inno.Editor.Rendering.EditorRenderingModule.EditorRenderingModule(Inno.Editor.Rendering.IEditorRenderingHost host, Inno.Editor.Interactions.EditorInteractions interactions, Inno.Extensibility.Types.TypeCatalog types)
```

Creates the composition host around stable rendering and interaction services.

**Parameter `host`:** Host-owned target and opaque texture bridge.

**Parameter `interactions`:** Shared Editor interaction and selection service.

**Parameter `types`:** The type catalog that owns viewport contributor generations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorRenderingModule.cs#L56).

## `CollectGizmos`

<a id="api-71c9f7275905aace"></a>
<!-- api: M:Inno.Editor.Rendering.EditorRenderingModule.CollectGizmos(System.String,System.Int32,System.Int32) 1044c16a48e1a55fba586b55825e5339bf2fed83f5a91e905092cef22c05c512 -->

```csharp
public Inno.Editor.Rendering.EditorGizmoFrame Inno.Editor.Rendering.EditorRenderingModule.CollectGizmos(string viewportId, int pixelWidth, int pixelHeight)
```

Collects Editor-only icons and bounds for the current Scene viewport.

**Parameter `viewportId`:** The Scene viewport identity.

**Parameter `pixelWidth`:** The viewport width.

**Parameter `pixelHeight`:** The viewport height.

**Returns:** Transient gizmo primitives for the submitted frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorRenderingModule.cs#L84).

## `Draw`

<a id="api-0cb9b245f164f9c7"></a>
<!-- api: M:Inno.Editor.Rendering.EditorRenderingModule.Draw(Inno.Editor.Rendering.EditorViewportOutput,System.Numerics.Vector2) b918223cdfda7f2c17b0888048deab192bb41edeb477c8e9d66247064995a906 -->

```csharp
public void Inno.Editor.Rendering.EditorRenderingModule.Draw(Inno.Editor.Rendering.EditorViewportOutput output, System.Numerics.Vector2 logicalSize)
```

Draws a ready output in the current panel.

**Parameter `output`:** Opaque output returned by `Inno.Editor.Rendering.EditorRenderingModule.TrySubmit(Inno.Editor.Rendering.EditorViewportKindId,System.String,System.Int32,System.Int32,Inno.Editor.Rendering.EditorViewportOutput@)`.

**Parameter `logicalSize`:** Destination size in logical UI pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorRenderingModule.cs#L558).

## `DrawControllerToolbar`

<a id="api-a512e9f53a4dd332"></a>
<!-- api: M:Inno.Editor.Rendering.EditorRenderingModule.DrawControllerToolbar(Inno.Editor.Rendering.EditorViewportKindId,System.String,System.Int32,System.Int32) 0d9a99a0b6d4a377b59ac595f9723f7b9387c3c84e87daf0346420a212f3ddc4 -->

```csharp
public void Inno.Editor.Rendering.EditorRenderingModule.DrawControllerToolbar(Inno.Editor.Rendering.EditorViewportKindId kind, string viewportId, int pixelWidth, int pixelHeight)
```

Draws toolbar controls owned by the selected model controller.

**Parameter `kind`:** Open viewport purpose.

**Parameter `viewportId`:** Stable panel viewport identity.

**Parameter `pixelWidth`:** Current target width.

**Parameter `pixelHeight`:** Current target height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorRenderingModule.cs#L319).

## `GetCompositionError`

<a id="api-f8d08bbd05100bd7"></a>
<!-- api: M:Inno.Editor.Rendering.EditorRenderingModule.GetCompositionError(System.String) 01558213aad476cf6831c28c383ad66d92a48637b60bba8efba9558922cbacfa -->

```csharp
public string? Inno.Editor.Rendering.EditorRenderingModule.GetCompositionError(string viewportId)
```

Gets the most recent isolated contribution or composition failure for one stable viewport.

**Parameter `viewportId`:** Stable panel viewport identity.

**Returns:** The failure message, or null when no current failure exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorRenderingModule.cs#L158).

## `GetNavigationState`

<a id="api-a56541e7760b04f8"></a>
<!-- api: M:Inno.Editor.Rendering.EditorRenderingModule.GetNavigationState(System.String) 954a67f8c747f49164bd7ef8f8bccc53d43bc14d87849417fd87633132b3ffa2 -->

```csharp
public Inno.Editor.Rendering.EditorViewportNavigationState Inno.Editor.Rendering.EditorRenderingModule.GetNavigationState(string viewportId)
```

Gets the host-owned neutral navigation state for one stable Editor viewport.

**Parameter `viewportId`:** Stable panel viewport identity.

**Returns:** The reusable navigation state owned by the Editor host.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorRenderingModule.cs#L174).

## `HandlePointer`

<a id="api-8c257bac92186716"></a>
<!-- api: M:Inno.Editor.Rendering.EditorRenderingModule.HandlePointer(Inno.Editor.Rendering.EditorViewportKindId,System.String,System.Int32,System.Int32,System.Single,System.Single,System.Int32) c56affe6aa34fcaa50b958c03a8d3ffe295f42f6d7f1543f4bfb0a9b2cba695f -->

```csharp
public void Inno.Editor.Rendering.EditorRenderingModule.HandlePointer(Inno.Editor.Rendering.EditorViewportKindId kind, string viewportId, int pixelWidth, int pixelHeight, float x, float y, int button)
```

Forwards a normalized click to the selected model controller.

**Parameter `kind`:** Open viewport purpose.

**Parameter `viewportId`:** Stable panel viewport identity.

**Parameter `pixelWidth`:** Current target width.

**Parameter `pixelHeight`:** Current target height.

**Parameter `x`:** Normalized horizontal position.

**Parameter `y`:** Normalized vertical position.

**Parameter `button`:** Platform-independent pointer button index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorRenderingModule.cs#L518).

## `HasContributors`

<a id="api-354f48ba52bcbe21"></a>
<!-- api: M:Inno.Editor.Rendering.EditorRenderingModule.HasContributors(Inno.Editor.Rendering.EditorViewportKindId) b6a886d08cd51a1de668b5c45c1ee8af180ad10691fb3f31d2bda8ad77101b57 -->

```csharp
public bool Inno.Editor.Rendering.EditorRenderingModule.HasContributors(Inno.Editor.Rendering.EditorViewportKindId kind)
```

Gets whether the current extension generation contributes to one viewport purpose.

**Parameter `kind`:** Open viewport purpose.

**Returns:** `true` when at least one contributor is registered.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorRenderingModule.cs#L110).

## `OnDispose`

<a id="api-15dfda10fae375a0"></a>
<!-- api: M:Inno.Editor.Rendering.EditorRenderingModule.OnDispose b796ca91d98c8c0617199a3f4fa1df4a2ae5eb3061e7c8030425ff5aa9f95512 -->

```csharp
protected override void Inno.Editor.Rendering.EditorRenderingModule.OnDispose()
```

Releases resources retained by this feature after it has stopped.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorRenderingModule.cs#L672).

## `OnStart`

<a id="api-d6a0a5cc605d2f8a"></a>
<!-- api: M:Inno.Editor.Rendering.EditorRenderingModule.OnStart(Inno.Editor.Core.EditorContext) 29a3a6bdb8311d7888635ac8614d22dba69fa702beafd971a21022a86ca534b1 -->

```csharp
protected override void Inno.Editor.Rendering.EditorRenderingModule.OnStart(Inno.Editor.Core.EditorContext context)
```

Initializes this feature when its owning runtime becomes active.

**Parameter `context`:** The context that supplies state and services for this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorRenderingModule.cs#L587).

## `OnStop`

<a id="api-1212c4fa171c3bcb"></a>
<!-- api: M:Inno.Editor.Rendering.EditorRenderingModule.OnStop(Inno.Editor.Core.EditorContext) 460b2830d7e099a1d28931ca7ca243b1d7d95c4a8b01d8c75575cb0d53cd837a -->

```csharp
protected override void Inno.Editor.Rendering.EditorRenderingModule.OnStop(Inno.Editor.Core.EditorContext context)
```

Stops this feature before its owning runtime releases the active generation.

**Parameter `context`:** The context that supplies state and services for this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorRenderingModule.cs#L654).

## `OnUpdate`

<a id="api-0ead42a98167b70d"></a>
<!-- api: M:Inno.Editor.Rendering.EditorRenderingModule.OnUpdate(Inno.Editor.Core.EditorContext) 5986aba6010200ffe8b8228da96bb0edc91502029f86bf44ba28a8d06e4f8767 -->

```csharp
protected override void Inno.Editor.Rendering.EditorRenderingModule.OnUpdate(Inno.Editor.Core.EditorContext context)
```

Advances this feature using the current runtime state.

**Parameter `context`:** The context that supplies state and services for this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorRenderingModule.cs#L599).

## `Release`

<a id="api-92c0dc5507871261"></a>
<!-- api: M:Inno.Editor.Rendering.EditorRenderingModule.Release(System.String) e0c1033678885d0561a3a1fbe85502895704335d64560a39393a57ed6cb81ba3 -->

```csharp
public void Inno.Editor.Rendering.EditorRenderingModule.Release(string viewportId)
```

Stops retaining one viewport target.

**Parameter `viewportId`:** Stable viewport identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorRenderingModule.cs#L569).

## `SetContentScope`

<a id="api-2db4dee303636fee"></a>
<!-- api: M:Inno.Editor.Rendering.EditorRenderingModule.SetContentScope(System.String,Inno.References.ContentReadScope) a807a9f14acf21ceb1b5acc076ed949c5d0344a929033001c55ab67f1d59ef63 -->

```csharp
public void Inno.Editor.Rendering.EditorRenderingModule.SetContentScope(string viewportId, Inno.References.ContentReadScope content)
```

Sets the explicit ordered host content visible to one Editor viewport.

**Parameter `viewportId`:** Stable panel viewport identity.

**Parameter `content`:** Current frame-safe content scope.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorRenderingModule.cs#L195).

## `SetOutputInput`

<a id="api-948841933b860263"></a>
<!-- api: M:Inno.Editor.Rendering.EditorRenderingModule.SetOutputInput(System.String,Inno.Rendering.Runtime.RenderOutputInput) 7d0570660975e588d94bdbd81cab6e252e35b14beab20f0bd4177b150a440ac6 -->

```csharp
public void Inno.Editor.Rendering.EditorRenderingModule.SetOutputInput(string viewportId, Inno.Rendering.Runtime.RenderOutputInput input)
```

Supplies viewport-local input captured by the output panel for this frame.

**Parameter `viewportId`:** Stable output identity.

**Parameter `input`:** Physical-pixel input snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorRenderingModule.cs#L121).

## `SetOutputRoute`

<a id="api-9de2fb8aa76de2d5"></a>
<!-- api: M:Inno.Editor.Rendering.EditorRenderingModule.SetOutputRoute(System.String,Inno.Rendering.Runtime.RenderOutputRoute) 927aabf76c96e651c3813795510b44f436dbf7dd322457b14b1e0b101498a7fa -->

```csharp
public void Inno.Editor.Rendering.EditorRenderingModule.SetOutputRoute(string viewportId, Inno.Rendering.Runtime.RenderOutputRoute? route)
```

Sets the exact model contributor order for an output with several applicable models.

**Parameter `viewportId`:** Stable output identity.

**Parameter `route`:** Explicit contributor route, or null for single-model selection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorRenderingModule.cs#L138).

## `SetPresentation`

<a id="api-49d59e885ba9d447"></a>
<!-- api: M:Inno.Editor.Rendering.EditorRenderingModule.SetPresentation(System.String,Inno.Editor.Rendering.EditorViewportPresentation) 308c73b2221a81e7d4a1b86a33395a39d07f37d501d2d4db86db5539b13861cb -->

```csharp
public void Inno.Editor.Rendering.EditorRenderingModule.SetPresentation(string viewportId, Inno.Editor.Rendering.EditorViewportPresentation presentation)
```

Sets presentation preferences supplied to every contributor for one Editor viewport.

**Parameter `viewportId`:** Stable panel viewport identity.

**Parameter `presentation`:** Current host-owned presentation preferences.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorRenderingModule.cs#L275).

## `TryConfigureNavigation`

<a id="api-305f0623ba8a47b1"></a>
<!-- api: M:Inno.Editor.Rendering.EditorRenderingModule.TryConfigureNavigation(Inno.Editor.Rendering.EditorViewportKindId,System.String,System.Int32,System.Int32,Inno.Editor.Rendering.EditorViewportNavigationProfile@) 91f9d47923528915a4b661bc1391dc5413d01a2c6ec4b281de7568569d3d2eff -->

```csharp
public bool Inno.Editor.Rendering.EditorRenderingModule.TryConfigureNavigation(Inno.Editor.Rendering.EditorViewportKindId kind, string viewportId, int pixelWidth, int pixelHeight, out Inno.Editor.Rendering.EditorViewportNavigationProfile profile)
```

Queries the selected controller's navigation contract before viewport input is processed.

**Parameter `kind`:** Open viewport purpose.

**Parameter `viewportId`:** Stable panel viewport identity.

**Parameter `pixelWidth`:** Positive target width.

**Parameter `pixelHeight`:** Positive target height.

**Parameter `profile`:** Receives the selected controller profile.

**Returns:** True when a contributor returned a usable navigation profile and became the controller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorRenderingModule.cs#L227).

## `TryGetManipulationSpace`

<a id="api-d344e1aa596e40e0"></a>
<!-- api: M:Inno.Editor.Rendering.EditorRenderingModule.TryGetManipulationSpace(System.String,Inno.Editor.Rendering.EditorViewportManipulationSpace@) c7094ab5a9d76699fd92d17fb044308c48dee32819e9c9c6194f89713da43b57 -->

```csharp
public bool Inno.Editor.Rendering.EditorRenderingModule.TryGetManipulationSpace(string viewportId, out Inno.Editor.Rendering.EditorViewportManipulationSpace space)
```

Tries to get the manipulation space from the selected controller's latest contribution.

**Parameter `viewportId`:** Stable panel viewport identity.

**Parameter `space`:** Receives the latest exact view/projection contract.

**Returns:** `true` when the selected controller supplied a manipulation space.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorRenderingModule.cs#L296).

## `TrySubmit`

<a id="api-a51e340aba879e38"></a>
<!-- api: M:Inno.Editor.Rendering.EditorRenderingModule.TrySubmit(Inno.Editor.Rendering.EditorViewportKindId,System.String,System.Int32,System.Int32,Inno.Editor.Rendering.EditorViewportOutput@) 954787a1d911673e6936d3f3f75080afd0bbc4bd2129f99dbddd6d458bc788b6 -->

```csharp
public bool Inno.Editor.Rendering.EditorRenderingModule.TrySubmit(Inno.Editor.Rendering.EditorViewportKindId kind, string viewportId, int pixelWidth, int pixelHeight, out Inno.Editor.Rendering.EditorViewportOutput output)
```

Builds, composes, submits, and returns one host-owned offscreen viewport.

**Parameter `kind`:** Open viewport purpose.

**Parameter `viewportId`:** Stable panel viewport identity.

**Parameter `pixelWidth`:** Positive target width.

**Parameter `pixelHeight`:** Positive target height.

**Parameter `output`:** Receives the opaque viewport output.

**Returns:** `true` when at least one model contribution was accepted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorRenderingModule.cs#L368).
