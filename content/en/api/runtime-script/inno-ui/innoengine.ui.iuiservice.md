---
title: "IUiService"
description: "Reference for IUiService in Inno.UI."
uid: api.inno.ui.runtime-script.838d7a57955425ee
kind: api
owners:
  - Inno.UI
apiSurface: runtime-script
contracts:
  - project.inno-ui#document-and-frame-contract
  - manual.scripting.use-script-api
---
# `IUiService`

This reference describes `IUiService` in `Inno.UI`. Read the [shared contract](../../projects/inno-ui.md#document-and-frame-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## Members

| Member | Kind |
| --- | --- |
| [`CloseDocument`](#api-94a49d9564c53fad) | Method |
| [`CreateContext`](#api-0f5361b391f22232) | Method |
| [`DestroyContext`](#api-b46f93b97fb79b3e) | Method |
| [`DrainEvents`](#api-724bb85d2937e97e) | Method |
| [`HasElementAtPoint`](#api-f537e454b8e34d3f) | Method |
| [`HideDocument`](#api-96e4106d9a326542) | Method |
| [`LoadDocument`](#api-8e7363ffc804862a) | Method |
| [`LoadDocument`](#api-26ecc797815ef918) | Method |
| [`RegisterTexture`](#api-a8b46caaaa5c47fe) | Method |
| [`Render`](#api-bfe338c044d820d9) | Method |
| [`SetAttribute`](#api-dabb719bd8a548fd) | Method |
| [`SetClass`](#api-bc9c1e9b14597224) | Method |
| [`SetContent`](#api-1a4b42f7e5299028) | Method |
| [`SetText`](#api-82ce98b4fe2b9ee5) | Method |
| [`SetViewport`](#api-3894a4d9414a4ed8) | Method |
| [`ShowDocument`](#api-77a2050726d549cd) | Method |
| [`Update`](#api-71a2b38b77d3ef64) | Method |
| [`Update`](#api-3ffa327e195634d8) | Method |

## Type declaration

<a id="api-838d7a57955425ee"></a>
<!-- api: T:InnoEngine.UI.IUiService b1cd77920d2b03f1c18979a595b4267345a294f946d55397226f581bc2da4e90 -->

```csharp
public interface InnoEngine.UI.IUiService
```

Provides retained-mode documents and backend-neutral UI frames to scripts and rendering plugins.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/IUiService.cs#L10).

## `CloseDocument`

<a id="api-94a49d9564c53fad"></a>
<!-- api: M:InnoEngine.UI.IUiService.CloseDocument(InnoEngine.UI.UiContextHandle,InnoEngine.UI.UiDocumentHandle) df8e18fab6b62b3b10dfbb5228b9825b6ea69c29020234fbc28ff11189de4fe3 -->

```csharp
void InnoEngine.UI.IUiService.CloseDocument(InnoEngine.UI.UiContextHandle context, InnoEngine.UI.UiDocumentHandle document)
```

Closes one document.

**Parameter `context`:** The context that owns the requested document or state.

**Parameter `document`:** The document owned by the supplied context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/IUiService.cs#L117).

## `CreateContext`

<a id="api-0f5361b391f22232"></a>
<!-- api: M:InnoEngine.UI.IUiService.CreateContext(InnoEngine.UI.UiContextOptions) ac179c2c02bb7c2f7cf6a24588ba09192a4ba4cded859b04dadd59fd5f0cf309 -->

```csharp
InnoEngine.UI.UiContextHandle InnoEngine.UI.IUiService.CreateContext(InnoEngine.UI.UiContextOptions options)
```

Creates one independent UI context.

**Parameter `options`:** Initial layout and density for the new context.

**Returns:** A handle owned by the caller until destruction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/IUiService.cs#L21).

## `DestroyContext`

<a id="api-b46f93b97fb79b3e"></a>
<!-- api: M:InnoEngine.UI.IUiService.DestroyContext(InnoEngine.UI.UiContextHandle) 5d8fc79fdd45e770868bd8f0dd868bc8ebbf54abe1ebcbe268fdbffa2589c92a -->

```csharp
void InnoEngine.UI.IUiService.DestroyContext(InnoEngine.UI.UiContextHandle context)
```

Destroys one UI context and all owned documents.

**Parameter `context`:** The context that owns the requested document or state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/IUiService.cs#L28).

## `DrainEvents`

<a id="api-724bb85d2937e97e"></a>
<!-- api: M:InnoEngine.UI.IUiService.DrainEvents(InnoEngine.UI.UiContextHandle) 4863f3d971667525d7f742c115f84711ccdbb44921e96de6153054ed3dcac521 -->

```csharp
System.Collections.Generic.IReadOnlyList<InnoEngine.UI.UiEvent> InnoEngine.UI.IUiService.DrainEvents(InnoEngine.UI.UiContextHandle context)
```

Drains document events queued by preceding updates.

**Parameter `context`:** The context that owns the requested document or state.

**Returns:** Events emitted since the preceding drain, in dispatch order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/IUiService.cs#L301).

## `HasElementAtPoint`

<a id="api-f537e454b8e34d3f"></a>
<!-- api: M:InnoEngine.UI.IUiService.HasElementAtPoint(InnoEngine.UI.UiContextHandle,InnoEngine.Mathematics.Vector2) ccdfceca6ac51d86f80ec5c3a6de5249bbbbb7152733e1525f4fbe3e44bf5b1e -->

```csharp
bool InnoEngine.UI.IUiService.HasElementAtPoint(InnoEngine.UI.UiContextHandle context, InnoEngine.Mathematics.Vector2 position)
```

Tests whether a visible document element receives pointer events at a pixel location.

**Parameter `context`:** The context that owns the requested document or state.

**Parameter `position`:** Pointer position in context pixels.

**Returns:** True when an interactive visible element occupies the location.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/IUiService.cs#L258).

## `HideDocument`

<a id="api-96e4106d9a326542"></a>
<!-- api: M:InnoEngine.UI.IUiService.HideDocument(InnoEngine.UI.UiContextHandle,InnoEngine.UI.UiDocumentHandle) 50a38d2a8bcd2123d8bdd88a0a02f692a05b7c567013fc37c3eb1c24313f0d39 -->

```csharp
void InnoEngine.UI.IUiService.HideDocument(InnoEngine.UI.UiContextHandle context, InnoEngine.UI.UiDocumentHandle document)
```

Hides one document.

**Parameter `context`:** The context that owns the requested document or state.

**Parameter `document`:** The document owned by the supplied context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/IUiService.cs#L104).

## `LoadDocument`

<a id="api-8e7363ffc804862a"></a>
<!-- api: M:InnoEngine.UI.IUiService.LoadDocument(InnoEngine.UI.UiContextHandle,InnoEngine.UI.UiDocumentAsset) f0a18814b8831878e528fa53b052d132c6a457de8f6ef5dbd5e17e568755fc4a -->

```csharp
InnoEngine.UI.UiDocumentHandle InnoEngine.UI.IUiService.LoadDocument(InnoEngine.UI.UiContextHandle context, InnoEngine.UI.UiDocumentAsset document)
```

Loads one imported document compatible with the selected backend.

**Parameter `context`:** The context that owns the requested document or state.

**Parameter `document`:** The document owned by the supplied context.

**Returns:** A document handle owned by the supplied context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/IUiService.cs#L78).

## `LoadDocument`

<a id="api-26ecc797815ef918"></a>
<!-- api: M:InnoEngine.UI.IUiService.LoadDocument(InnoEngine.UI.UiContextHandle,InnoEngine.UI.UiDocumentSource) edf0fb956847fa0aba6713edbbb0226cb8b19fb83cbfd786bea59524316b0655 -->

```csharp
InnoEngine.UI.UiDocumentHandle InnoEngine.UI.IUiService.LoadDocument(InnoEngine.UI.UiContextHandle context, InnoEngine.UI.UiDocumentSource source)
```

Loads one explicitly tagged in-memory document.

**Parameter `context`:** The context that owns the requested document or state.

**Parameter `source`:** Tagged source or named texture source for this operation.

**Returns:** A document handle owned by the supplied context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/IUiService.cs#L62).

## `RegisterTexture`

<a id="api-a8b46caaaa5c47fe"></a>
<!-- api: M:InnoEngine.UI.IUiService.RegisterTexture(InnoEngine.UI.UiContextHandle,System.String,InnoEngine.UI.UiTextureData) 410e799165a9a3bd901007f589ce657ea1b1d67bf7890cb32e05eae83accc1c1 -->

```csharp
void InnoEngine.UI.IUiService.RegisterTexture(InnoEngine.UI.UiContextHandle context, string source, InnoEngine.UI.UiTextureData texture)
```

Registers one named RGBA8 texture source.

**Parameter `context`:** The context that owns the requested document or state.

**Parameter `source`:** Tagged source or named texture source for this operation.

**Parameter `texture`:** Immutable RGBA texture data.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/IUiService.cs#L241).

## `Render`

<a id="api-bfe338c044d820d9"></a>
<!-- api: M:InnoEngine.UI.IUiService.Render(InnoEngine.UI.UiContextHandle) 1426a18fa53e0bdbfba40e9ba5f35c606781e582fb0ba08ddba8dad2ad760552 -->

```csharp
InnoEngine.UI.UiRenderFrame InnoEngine.UI.IUiService.Render(InnoEngine.UI.UiContextHandle context)
```

Builds an immutable frame of incremental resources and ordered draws.

**Parameter `context`:** The context that owns the requested document or state.

**Returns:** An immutable frame of ordered UI draws and resources.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/IUiService.cs#L291).

## `SetAttribute`

<a id="api-dabb719bd8a548fd"></a>
<!-- api: M:InnoEngine.UI.IUiService.SetAttribute(InnoEngine.UI.UiContextHandle,InnoEngine.UI.UiDocumentHandle,System.String,System.String,System.String) fcc917ddcba05d8af62fadc6e48ce9b6ce90bad8dc4d9f0d9044f0357c7f2e1c -->

```csharp
bool InnoEngine.UI.IUiService.SetAttribute(InnoEngine.UI.UiContextHandle context, InnoEngine.UI.UiDocumentHandle document, string elementId, string name, string value)
```

Sets one element attribute.

**Parameter `context`:** The context that owns the requested document or state.

**Parameter `document`:** The document owned by the supplied context.

**Parameter `elementId`:** The target document element ID.

**Parameter `name`:** Attribute name to change.

**Parameter `value`:** New attribute value.

**Returns:** True when the element exists and the attribute was assigned; false when the element is absent.
This is not a comparison with the preceding value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/IUiService.cs#L193).

## `SetClass`

<a id="api-bc9c1e9b14597224"></a>
<!-- api: M:InnoEngine.UI.IUiService.SetClass(InnoEngine.UI.UiContextHandle,InnoEngine.UI.UiDocumentHandle,System.String,System.String,System.Boolean) 45ce7e04f736aaee86b316eadb2e26046ede87c53c46c6cffd23fd69f3b66b91 -->

```csharp
bool InnoEngine.UI.IUiService.SetClass(InnoEngine.UI.UiContextHandle context, InnoEngine.UI.UiDocumentHandle document, string elementId, string className, bool active)
```

Activates or deactivates one element class.

**Parameter `context`:** The context that owns the requested document or state.

**Parameter `document`:** The document owned by the supplied context.

**Parameter `elementId`:** The target document element ID.

**Parameter `className`:** CSS class name to toggle.

**Parameter `active`:** Whether the CSS class is enabled.

**Returns:** True when the element exists and its class state was assigned; false when the element is absent.
This is not a comparison with the preceding state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/IUiService.cs#L222).

## `SetContent`

<a id="api-1a4b42f7e5299028"></a>
<!-- api: M:InnoEngine.UI.IUiService.SetContent(InnoEngine.UI.UiContextHandle,InnoEngine.UI.UiDocumentHandle,System.String,InnoEngine.UI.UiDocumentFragment) 3e42936d68df3968762c347171c4725e0685bd7499a280ecdb9057c33647ad95 -->

```csharp
bool InnoEngine.UI.IUiService.SetContent(InnoEngine.UI.UiContextHandle context, InnoEngine.UI.UiDocumentHandle document, string elementId, InnoEngine.UI.UiDocumentFragment fragment)
```

Replaces an element's children with an explicitly tagged source-language fragment.

**Parameter `context`:** The context that owns the requested document or state.

**Parameter `document`:** The document owned by the supplied context.

**Parameter `elementId`:** The target document element ID.

**Parameter `fragment`:** Explicitly tagged replacement document fragment.

**Returns:** True when the element exists and the fragment was applied; false when the element is absent.
This is not a comparison with the preceding content.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/IUiService.cs#L165).

## `SetText`

<a id="api-82ce98b4fe2b9ee5"></a>
<!-- api: M:InnoEngine.UI.IUiService.SetText(InnoEngine.UI.UiContextHandle,InnoEngine.UI.UiDocumentHandle,System.String,System.String) ad1040b8cc6ab0283f60fb52047ee5d3b072f574a3f07a81024e407bcf443bf1 -->

```csharp
bool InnoEngine.UI.IUiService.SetText(InnoEngine.UI.UiContextHandle context, InnoEngine.UI.UiDocumentHandle document, string elementId, string text)
```

Replaces an element's children with plain Unicode text.

**Parameter `context`:** The context that owns the requested document or state.

**Parameter `document`:** The document owned by the supplied context.

**Parameter `elementId`:** The target document element ID.

**Parameter `text`:** Plain Unicode replacement text; the backend performs source-language escaping.

**Returns:** True when the element exists and the replacement was applied; false when the element is absent.
This is not a comparison with the preceding text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/IUiService.cs#L140).

## `SetViewport`

<a id="api-3894a4d9414a4ed8"></a>
<!-- api: M:InnoEngine.UI.IUiService.SetViewport(InnoEngine.UI.UiContextHandle,System.Int32,System.Int32,System.Single) d795ba23e70ff61b7763b5b1dc74500f17b002f23426c7c25f058a7e041d95db -->

```csharp
void InnoEngine.UI.IUiService.SetViewport(InnoEngine.UI.UiContextHandle context, int width, int height, float density = 1)
```

Changes one context's pixel dimensions and density.

**Parameter `context`:** The context that owns the requested document or state.

**Parameter `width`:** New viewport width in physical pixels.

**Parameter `height`:** New viewport height in physical pixels.

**Parameter `density`:** Physical pixels per logical layout pixel.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/IUiService.cs#L44).

## `ShowDocument`

<a id="api-77a2050726d549cd"></a>
<!-- api: M:InnoEngine.UI.IUiService.ShowDocument(InnoEngine.UI.UiContextHandle,InnoEngine.UI.UiDocumentHandle) 28cf31a561f8e68e4840b677f2cb13645c3df8b86c73934f93c06f7eec619410 -->

```csharp
void InnoEngine.UI.IUiService.ShowDocument(InnoEngine.UI.UiContextHandle context, InnoEngine.UI.UiDocumentHandle document)
```

Shows one document.

**Parameter `context`:** The context that owns the requested document or state.

**Parameter `document`:** The document owned by the supplied context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/IUiService.cs#L91).

## `Update`

<a id="api-71a2b38b77d3ef64"></a>
<!-- api: M:InnoEngine.UI.IUiService.Update(InnoEngine.UI.UiContextHandle,InnoEngine.UI.UiInputSnapshot) fc9283156db8cd272f9e8c6347e9561ef274deb1727bd5aab29687d2ecfed1e4 -->

```csharp
void InnoEngine.UI.IUiService.Update(InnoEngine.UI.UiContextHandle context, InnoEngine.UI.UiInputSnapshot input)
```

Advances one context with explicitly routed viewport-local input.

**Parameter `context`:** The context that owns the requested document or state.

**Parameter `input`:** The input snapshot routed to this context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/IUiService.cs#L278).

## `Update`

<a id="api-3ffa327e195634d8"></a>
<!-- api: M:InnoEngine.UI.IUiService.Update(InnoEngine.UI.UiContextHandle) 9f61d06c6fa591cfef1a1d0481ac3fcd474ca8e47c959c89b72e19c8f054cc0c -->

```csharp
void InnoEngine.UI.IUiService.Update(InnoEngine.UI.UiContextHandle context)
```

Processes current-frame input and advances one context.

**Parameter `context`:** The context that owns the requested document or state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/IUiService.cs#L268).
