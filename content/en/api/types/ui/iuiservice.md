---
title: "IUiService"
description: "Reference for IUiService in Inno.UI."
uid: api.inno.ui.bbd7db1ad0963475
kind: api
owners:
  - Inno.UI
apiSurface: source-clr
contracts:
  - project.inno-ui#document-and-frame-contract
---
# `IUiService`

This reference describes `IUiService` in `Inno.UI`. Read the [shared contract](../../projects/inno-ui.md#document-and-frame-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`CloseDocument`](#api-6c2637da0455babb) | Method |
| [`CreateContext`](#api-41c4ba7ae7a4314e) | Method |
| [`DestroyContext`](#api-aed90191b0b97f1f) | Method |
| [`DrainEvents`](#api-ad68ccb596ac3714) | Method |
| [`HasElementAtPoint`](#api-a9d2769ff278b946) | Method |
| [`HideDocument`](#api-c4680ef755a9a6ec) | Method |
| [`LoadDocument`](#api-ed1533f655339b49) | Method |
| [`LoadDocument`](#api-5868adcb758759db) | Method |
| [`RegisterTexture`](#api-c0330459bbab41a5) | Method |
| [`Render`](#api-6c83953ae39baf14) | Method |
| [`SetAttribute`](#api-70a6a480fcb7d2a3) | Method |
| [`SetClass`](#api-42ee72d6e3aa3aff) | Method |
| [`SetContent`](#api-588b99472472bcfc) | Method |
| [`SetText`](#api-ffaa051b6e6882af) | Method |
| [`SetViewport`](#api-d46000fc3c6b4498) | Method |
| [`ShowDocument`](#api-3be1aeaf62c417b6) | Method |
| [`Update`](#api-9f6207df3765650f) | Method |
| [`Update`](#api-fb5491fe9aa4f914) | Method |

## Type declaration

<a id="api-bbd7db1ad0963475"></a>
<!-- api: T:Inno.UI.IUiService 431e83960c3dbb4c1d5f13e4c03b8e2d1d27d24317ffe79ab2c70c6569c2e87f -->

```csharp
public interface Inno.UI.IUiService
```

Provides retained-mode documents and backend-neutral UI frames to scripts and rendering plugins.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/IUiService.cs#L10).

## `CloseDocument`

<a id="api-6c2637da0455babb"></a>
<!-- api: M:Inno.UI.IUiService.CloseDocument(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle) 7e1647f15187ce822ac674cd4a521358e8944a77c2af00822c3e5994e6d0c90d -->

```csharp
void Inno.UI.IUiService.CloseDocument(Inno.UI.UiContextHandle context, Inno.UI.UiDocumentHandle document)
```

Closes one document.

**Parameter `context`:** The context that owns the requested document or state.

**Parameter `document`:** The document owned by the supplied context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/IUiService.cs#L117).

## `CreateContext`

<a id="api-41c4ba7ae7a4314e"></a>
<!-- api: M:Inno.UI.IUiService.CreateContext(Inno.UI.UiContextOptions) fdece6e174d013def21a92d8f091450f452862b2726a59475c617f485aa9afcb -->

```csharp
Inno.UI.UiContextHandle Inno.UI.IUiService.CreateContext(Inno.UI.UiContextOptions options)
```

Creates one independent UI context.

**Parameter `options`:** Initial layout and density for the new context.

**Returns:** A handle owned by the caller until destruction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/IUiService.cs#L21).

## `DestroyContext`

<a id="api-aed90191b0b97f1f"></a>
<!-- api: M:Inno.UI.IUiService.DestroyContext(Inno.UI.UiContextHandle) ce2b35fd844cc1237fdb842336347349853cc127d720ccc0a32d710d4a78efc4 -->

```csharp
void Inno.UI.IUiService.DestroyContext(Inno.UI.UiContextHandle context)
```

Destroys one UI context and all owned documents.

**Parameter `context`:** The context that owns the requested document or state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/IUiService.cs#L28).

## `DrainEvents`

<a id="api-ad68ccb596ac3714"></a>
<!-- api: M:Inno.UI.IUiService.DrainEvents(Inno.UI.UiContextHandle) e689f9f74c92f5b3ac586895ebce5d43aff1c29156368cdb49e88c44cd352cba -->

```csharp
System.Collections.Generic.IReadOnlyList<Inno.UI.UiEvent> Inno.UI.IUiService.DrainEvents(Inno.UI.UiContextHandle context)
```

Drains document events queued by preceding updates.

**Parameter `context`:** The context that owns the requested document or state.

**Returns:** Events emitted since the preceding drain, in dispatch order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/IUiService.cs#L301).

## `HasElementAtPoint`

<a id="api-a9d2769ff278b946"></a>
<!-- api: M:Inno.UI.IUiService.HasElementAtPoint(Inno.UI.UiContextHandle,Inno.Core.Mathematics.Vector2) bcaf94a0720c596d70b60154ec42e3797e2a3787d707a8c55236e94e15f5798b -->

```csharp
bool Inno.UI.IUiService.HasElementAtPoint(Inno.UI.UiContextHandle context, Inno.Core.Mathematics.Vector2 position)
```

Tests whether a visible document element receives pointer events at a pixel location.

**Parameter `context`:** The context that owns the requested document or state.

**Parameter `position`:** Pointer position in context pixels.

**Returns:** True when an interactive visible element occupies the location.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/IUiService.cs#L258).

## `HideDocument`

<a id="api-c4680ef755a9a6ec"></a>
<!-- api: M:Inno.UI.IUiService.HideDocument(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle) b1da5630d484325018cd8dfbfcf463317a563e4f4dd6c1a424c8cb988a3e2ff1 -->

```csharp
void Inno.UI.IUiService.HideDocument(Inno.UI.UiContextHandle context, Inno.UI.UiDocumentHandle document)
```

Hides one document.

**Parameter `context`:** The context that owns the requested document or state.

**Parameter `document`:** The document owned by the supplied context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/IUiService.cs#L104).

## `LoadDocument`

<a id="api-ed1533f655339b49"></a>
<!-- api: M:Inno.UI.IUiService.LoadDocument(Inno.UI.UiContextHandle,Inno.UI.UiDocumentAsset) 74e2c294361c10e56b8905bab80d20f0fba058ab0ede8a5374ecbae9761a7597 -->

```csharp
Inno.UI.UiDocumentHandle Inno.UI.IUiService.LoadDocument(Inno.UI.UiContextHandle context, Inno.UI.UiDocumentAsset document)
```

Loads one imported document compatible with the selected backend.

**Parameter `context`:** The context that owns the requested document or state.

**Parameter `document`:** The document owned by the supplied context.

**Returns:** A document handle owned by the supplied context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/IUiService.cs#L78).

## `LoadDocument`

<a id="api-5868adcb758759db"></a>
<!-- api: M:Inno.UI.IUiService.LoadDocument(Inno.UI.UiContextHandle,Inno.UI.UiDocumentSource) 559480d9ed280e8f8571a255e62fae9303b9deef1c62e0ae9a7fdff5d16370b2 -->

```csharp
Inno.UI.UiDocumentHandle Inno.UI.IUiService.LoadDocument(Inno.UI.UiContextHandle context, Inno.UI.UiDocumentSource source)
```

Loads one explicitly tagged in-memory document.

**Parameter `context`:** The context that owns the requested document or state.

**Parameter `source`:** Tagged source or named texture source for this operation.

**Returns:** A document handle owned by the supplied context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/IUiService.cs#L62).

## `RegisterTexture`

<a id="api-c0330459bbab41a5"></a>
<!-- api: M:Inno.UI.IUiService.RegisterTexture(Inno.UI.UiContextHandle,System.String,Inno.UI.UiTextureData) 589387c603b0d18ca76695f6ef47942a5a9893954c9a1b1df0dd281f94c90544 -->

```csharp
void Inno.UI.IUiService.RegisterTexture(Inno.UI.UiContextHandle context, string source, Inno.UI.UiTextureData texture)
```

Registers one named RGBA8 texture source.

**Parameter `context`:** The context that owns the requested document or state.

**Parameter `source`:** Tagged source or named texture source for this operation.

**Parameter `texture`:** Immutable RGBA texture data.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/IUiService.cs#L241).

## `Render`

<a id="api-6c83953ae39baf14"></a>
<!-- api: M:Inno.UI.IUiService.Render(Inno.UI.UiContextHandle) b809e6d5e31e08cf632d263266018e1eeb31c9f2cc123dc2c73ff75396712e04 -->

```csharp
Inno.UI.UiRenderFrame Inno.UI.IUiService.Render(Inno.UI.UiContextHandle context)
```

Builds an immutable frame of incremental resources and ordered draws.

**Parameter `context`:** The context that owns the requested document or state.

**Returns:** An immutable frame of ordered UI draws and resources.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/IUiService.cs#L291).

## `SetAttribute`

<a id="api-70a6a480fcb7d2a3"></a>
<!-- api: M:Inno.UI.IUiService.SetAttribute(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle,System.String,System.String,System.String) f20c9bec107666b5f6ffa20e169427262c6b1564ccce662903c56e55adb59c1e -->

```csharp
bool Inno.UI.IUiService.SetAttribute(Inno.UI.UiContextHandle context, Inno.UI.UiDocumentHandle document, string elementId, string name, string value)
```

Sets one element attribute.

**Parameter `context`:** The context that owns the requested document or state.

**Parameter `document`:** The document owned by the supplied context.

**Parameter `elementId`:** The target document element ID.

**Parameter `name`:** Attribute name to change.

**Parameter `value`:** New attribute value.

**Returns:** True when the element exists and the attribute was assigned; false when the element is absent.
This is not a comparison with the preceding value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/IUiService.cs#L193).

## `SetClass`

<a id="api-42ee72d6e3aa3aff"></a>
<!-- api: M:Inno.UI.IUiService.SetClass(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle,System.String,System.String,System.Boolean) 03b8bf9016326a242296d19d4302a7e5763fad2f9bbad38cf48d9fc3684db617 -->

```csharp
bool Inno.UI.IUiService.SetClass(Inno.UI.UiContextHandle context, Inno.UI.UiDocumentHandle document, string elementId, string className, bool active)
```

Activates or deactivates one element class.

**Parameter `context`:** The context that owns the requested document or state.

**Parameter `document`:** The document owned by the supplied context.

**Parameter `elementId`:** The target document element ID.

**Parameter `className`:** CSS class name to toggle.

**Parameter `active`:** Whether the CSS class is enabled.

**Returns:** True when the element exists and its class state was assigned; false when the element is absent.
This is not a comparison with the preceding state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/IUiService.cs#L222).

## `SetContent`

<a id="api-588b99472472bcfc"></a>
<!-- api: M:Inno.UI.IUiService.SetContent(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle,System.String,Inno.UI.UiDocumentFragment) 91a040a47e344e4214c2353c37dd37eea282e3c09c51d677bca86ee9abf338a1 -->

```csharp
bool Inno.UI.IUiService.SetContent(Inno.UI.UiContextHandle context, Inno.UI.UiDocumentHandle document, string elementId, Inno.UI.UiDocumentFragment fragment)
```

Replaces an element's children with an explicitly tagged source-language fragment.

**Parameter `context`:** The context that owns the requested document or state.

**Parameter `document`:** The document owned by the supplied context.

**Parameter `elementId`:** The target document element ID.

**Parameter `fragment`:** Explicitly tagged replacement document fragment.

**Returns:** True when the element exists and the fragment was applied; false when the element is absent.
This is not a comparison with the preceding content.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/IUiService.cs#L165).

## `SetText`

<a id="api-ffaa051b6e6882af"></a>
<!-- api: M:Inno.UI.IUiService.SetText(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle,System.String,System.String) 1f71716a84d6e1e6d675b2e27697dbf791a666b67e479374107d7235618f231f -->

```csharp
bool Inno.UI.IUiService.SetText(Inno.UI.UiContextHandle context, Inno.UI.UiDocumentHandle document, string elementId, string text)
```

Replaces an element's children with plain Unicode text.

**Parameter `context`:** The context that owns the requested document or state.

**Parameter `document`:** The document owned by the supplied context.

**Parameter `elementId`:** The target document element ID.

**Parameter `text`:** Plain Unicode replacement text; the backend performs source-language escaping.

**Returns:** True when the element exists and the replacement was applied; false when the element is absent.
This is not a comparison with the preceding text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/IUiService.cs#L140).

## `SetViewport`

<a id="api-d46000fc3c6b4498"></a>
<!-- api: M:Inno.UI.IUiService.SetViewport(Inno.UI.UiContextHandle,System.Int32,System.Int32,System.Single) 8ffd6965a850cab600aa0f74f6f23cfe0f24239ff810dfb811e629f1cbb92bc9 -->

```csharp
void Inno.UI.IUiService.SetViewport(Inno.UI.UiContextHandle context, int width, int height, float density = 1)
```

Changes one context's pixel dimensions and density.

**Parameter `context`:** The context that owns the requested document or state.

**Parameter `width`:** New viewport width in physical pixels.

**Parameter `height`:** New viewport height in physical pixels.

**Parameter `density`:** Physical pixels per logical layout pixel.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/IUiService.cs#L44).

## `ShowDocument`

<a id="api-3be1aeaf62c417b6"></a>
<!-- api: M:Inno.UI.IUiService.ShowDocument(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle) 65586e48736fdf712bcb3f892c53e7e975794dd11b826a626cfd369ffeb2cd29 -->

```csharp
void Inno.UI.IUiService.ShowDocument(Inno.UI.UiContextHandle context, Inno.UI.UiDocumentHandle document)
```

Shows one document.

**Parameter `context`:** The context that owns the requested document or state.

**Parameter `document`:** The document owned by the supplied context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/IUiService.cs#L91).

## `Update`

<a id="api-9f6207df3765650f"></a>
<!-- api: M:Inno.UI.IUiService.Update(Inno.UI.UiContextHandle,Inno.UI.UiInputSnapshot) 589ff5660be38370d1a429f332c2a0b9070eedcb268b7be7d6913f8bba61777b -->

```csharp
void Inno.UI.IUiService.Update(Inno.UI.UiContextHandle context, Inno.UI.UiInputSnapshot input)
```

Advances one context with explicitly routed viewport-local input.

**Parameter `context`:** The context that owns the requested document or state.

**Parameter `input`:** The input snapshot routed to this context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/IUiService.cs#L278).

## `Update`

<a id="api-fb5491fe9aa4f914"></a>
<!-- api: M:Inno.UI.IUiService.Update(Inno.UI.UiContextHandle) 518fc634187eeac806d44deacaafe59e3c8c17c8e4e9d3ad8a97dd2593e5ce69 -->

```csharp
void Inno.UI.IUiService.Update(Inno.UI.UiContextHandle context)
```

Processes current-frame input and advances one context.

**Parameter `context`:** The context that owns the requested document or state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/IUiService.cs#L268).
