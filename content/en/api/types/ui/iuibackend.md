---
title: "IUiBackend"
description: "Reference for IUiBackend in Inno.UI."
uid: api.inno.ui.3c3a34e932be8f46
kind: api
owners:
  - Inno.UI
apiSurface: source-clr
contracts:
  - project.inno-ui#document-and-frame-contract
---
# `IUiBackend`

This reference describes `IUiBackend` in `Inno.UI`. Read the [shared contract](../../projects/inno-ui.md#document-and-frame-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`CloseDocument`](#api-c9564f5b91bf66e4) | Method |
| [`CreateContext`](#api-7f236147ed2fbe5a) | Method |
| [`DestroyContext`](#api-a81fa4e343fc9464) | Method |
| [`DrainEvents`](#api-a2eea65dbd3a8379) | Method |
| [`HasElementAtPoint`](#api-91408311f0710b7b) | Method |
| [`HideDocument`](#api-3d7db7e80d8d59c7) | Method |
| [`LoadDocument`](#api-49843a8ae59a9d08) | Method |
| [`RegisterFont`](#api-ddda6b9f478471b6) | Method |
| [`RegisterTexture`](#api-6a721a8531954866) | Method |
| [`Render`](#api-aa98157bebb89b4b) | Method |
| [`SetAttribute`](#api-3002e60e88e23f52) | Method |
| [`SetClass`](#api-f44a7bf425e22779) | Method |
| [`SetContent`](#api-d53304a7e7cf472b) | Method |
| [`SetText`](#api-81499af7b12968e4) | Method |
| [`SetViewport`](#api-9f20c724fe53c984) | Method |
| [`ShowDocument`](#api-b78135d454bd57ec) | Method |
| [`Update`](#api-c1567b886ff461ae) | Method |
| [`capabilities`](#api-03e29f1cbf38ac5c) | Property |
| [`implementationId`](#api-da467b8a51c5f1d9) | Property |

## Type declaration

<a id="api-3c3a34e932be8f46"></a>
<!-- api: T:Inno.UI.IUiBackend 6f62df37d8b1b67642a58e9e4abc367705cb9a4d19709fdf95625a8feb3c7020 -->

```csharp
public interface Inno.UI.IUiBackend : System.IDisposable
```

Defines the replaceable document, layout, input, and draw-geometry backend boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/IUiBackend.cs#L10).

## `CloseDocument`

<a id="api-c9564f5b91bf66e4"></a>
<!-- api: M:Inno.UI.IUiBackend.CloseDocument(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle) 1eab1158cb4b65de04e0788f0a5d478c8859928a999e852ad309ea06ef92d4d9 -->

```csharp
void Inno.UI.IUiBackend.CloseDocument(Inno.UI.UiContextHandle context, Inno.UI.UiDocumentHandle document)
```

Closes one document.

**Parameter `context`:** The context that owns the requested document or state.

**Parameter `document`:** The document owned by the supplied context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/IUiBackend.cs#L109).

## `CreateContext`

<a id="api-7f236147ed2fbe5a"></a>
<!-- api: M:Inno.UI.IUiBackend.CreateContext(Inno.UI.UiContextOptions) e44daa1fd61067d5b7a4ae0cdd6ae21648270e926e292ed98c2565b1ec94ff79 -->

```csharp
Inno.UI.UiContextHandle Inno.UI.IUiBackend.CreateContext(Inno.UI.UiContextOptions options)
```

Creates one independent UI context.

**Parameter `options`:** Initial layout and density for the new context.

**Returns:** A handle owned by the caller until destruction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/IUiBackend.cs#L29).

## `DestroyContext`

<a id="api-a81fa4e343fc9464"></a>
<!-- api: M:Inno.UI.IUiBackend.DestroyContext(Inno.UI.UiContextHandle) 5c5472a58e187bbd5ef635a3450eb5beadd92de358ce4e1b4f49543969651221 -->

```csharp
void Inno.UI.IUiBackend.DestroyContext(Inno.UI.UiContextHandle context)
```

Destroys one UI context and all of its documents.

**Parameter `context`:** The context that owns the requested document or state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/IUiBackend.cs#L36).

## `DrainEvents`

<a id="api-a2eea65dbd3a8379"></a>
<!-- api: M:Inno.UI.IUiBackend.DrainEvents(Inno.UI.UiContextHandle) 978f9ac1ee044477af9f835a1f459f2da9d08fc9d974bb4a891821ae23f348eb -->

```csharp
System.Collections.Generic.IReadOnlyList<Inno.UI.UiEvent> Inno.UI.IUiBackend.DrainEvents(Inno.UI.UiContextHandle context)
```

Drains document events queued by the preceding updates.

**Parameter `context`:** The context that owns the requested document or state.

**Returns:** Events emitted since the preceding drain, in dispatch order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/IUiBackend.cs#L293).

## `HasElementAtPoint`

<a id="api-91408311f0710b7b"></a>
<!-- api: M:Inno.UI.IUiBackend.HasElementAtPoint(Inno.UI.UiContextHandle,Inno.Core.Mathematics.Vector2) b8c9c58bc57c6b4dbe11d6b8477ca3e1042a9c6607ccad88ca49acf47da23e86 -->

```csharp
bool Inno.UI.IUiBackend.HasElementAtPoint(Inno.UI.UiContextHandle context, Inno.Core.Mathematics.Vector2 position)
```

Tests whether a visible document element receives pointer events at a pixel location.

**Parameter `context`:** The context that owns the requested document or state.

**Parameter `position`:** Pointer position in context pixels.

**Returns:** True when an interactive visible element occupies the location.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/IUiBackend.cs#L257).

## `HideDocument`

<a id="api-3d7db7e80d8d59c7"></a>
<!-- api: M:Inno.UI.IUiBackend.HideDocument(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle) 57c0472344ba2efa873ed2c4e995ecc3a9f9504634dc3d195747e83f1f2f4afe -->

```csharp
void Inno.UI.IUiBackend.HideDocument(Inno.UI.UiContextHandle context, Inno.UI.UiDocumentHandle document)
```

Hides one document.

**Parameter `context`:** The context that owns the requested document or state.

**Parameter `document`:** The document owned by the supplied context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/IUiBackend.cs#L96).

## `LoadDocument`

<a id="api-49843a8ae59a9d08"></a>
<!-- api: M:Inno.UI.IUiBackend.LoadDocument(Inno.UI.UiContextHandle,Inno.UI.UiDocumentSource) 5afc2db7a5e56daa60796cd98fd0bb2736f10eea730c17b4ff0daa035dc49392 -->

```csharp
Inno.UI.UiDocumentHandle Inno.UI.IUiBackend.LoadDocument(Inno.UI.UiContextHandle context, Inno.UI.UiDocumentSource source)
```

Loads one explicitly tagged in-memory document.

**Parameter `context`:** The context that owns the requested document or state.

**Parameter `source`:** Tagged source or named texture source for this operation.

**Returns:** A document handle owned by the supplied context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/IUiBackend.cs#L70).

## `RegisterFont`

<a id="api-ddda6b9f478471b6"></a>
<!-- api: M:Inno.UI.IUiBackend.RegisterFont(Inno.UI.UiFontRegistration) 0e49ad43560ea462f42deb35b72dd48abbafa8dbd3f099bc44071a4821201610 -->

```csharp
void Inno.UI.IUiBackend.RegisterFont(Inno.UI.UiFontRegistration registration)
```

Registers an encoded font face in the document engine.

**Parameter `registration`:** Font bytes and family metadata to register.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/IUiBackend.cs#L227).

## `RegisterTexture`

<a id="api-6a721a8531954866"></a>
<!-- api: M:Inno.UI.IUiBackend.RegisterTexture(Inno.UI.UiContextHandle,System.String,Inno.UI.UiTextureData) 64646af8e542ccd8f8ef1e8318e5709e4ba1942c693a61c14443a43f3e622af9 -->

```csharp
void Inno.UI.IUiBackend.RegisterTexture(Inno.UI.UiContextHandle context, string source, Inno.UI.UiTextureData texture)
```

Registers a named RGBA8 texture source.

**Parameter `context`:** The context that owns the requested document or state.

**Parameter `source`:** Tagged source or named texture source for this operation.

**Parameter `texture`:** Immutable RGBA texture data.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/IUiBackend.cs#L240).

## `Render`

<a id="api-aa98157bebb89b4b"></a>
<!-- api: M:Inno.UI.IUiBackend.Render(Inno.UI.UiContextHandle) 6cf025c074e21847cc9f668bb99d9e93f0188f161f4c0182eb8b4aeef35d0bc0 -->

```csharp
Inno.UI.UiRenderFrame Inno.UI.IUiBackend.Render(Inno.UI.UiContextHandle context)
```

Builds an immutable frame of incremental resources and ordered draws.

**Parameter `context`:** The context that owns the requested document or state.

**Returns:** An immutable frame of ordered UI draws and resources.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/IUiBackend.cs#L283).

## `SetAttribute`

<a id="api-3002e60e88e23f52"></a>
<!-- api: M:Inno.UI.IUiBackend.SetAttribute(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle,System.String,System.String,System.String) 9e121c86defc79aba8926cc79cea18667495a06ac48b42860699f39644725d74 -->

```csharp
bool Inno.UI.IUiBackend.SetAttribute(Inno.UI.UiContextHandle context, Inno.UI.UiDocumentHandle document, string elementId, string name, string value)
```

Sets one element attribute.

**Parameter `context`:** The context that owns the requested document or state.

**Parameter `document`:** The document owned by the supplied context.

**Parameter `elementId`:** The target document element ID.

**Parameter `name`:** Attribute name to change.

**Parameter `value`:** New attribute value.

**Returns:** True when the element exists and the attribute was assigned; false when the element is absent.
This is not a comparison with the preceding value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/IUiBackend.cs#L185).

## `SetClass`

<a id="api-f44a7bf425e22779"></a>
<!-- api: M:Inno.UI.IUiBackend.SetClass(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle,System.String,System.String,System.Boolean) 5968555d83671b99498368801ad5434bbfaebc1669d428c43df8d9e9b9e767d1 -->

```csharp
bool Inno.UI.IUiBackend.SetClass(Inno.UI.UiContextHandle context, Inno.UI.UiDocumentHandle document, string elementId, string className, bool active)
```

Activates or deactivates one element class.

**Parameter `context`:** The context that owns the requested document or state.

**Parameter `document`:** The document owned by the supplied context.

**Parameter `elementId`:** The target document element ID.

**Parameter `className`:** CSS class name to toggle.

**Parameter `active`:** Whether the CSS class is enabled.

**Returns:** True when the element exists and its class state was assigned; false when the element is absent.
This is not a comparison with the preceding state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/IUiBackend.cs#L214).

## `SetContent`

<a id="api-d53304a7e7cf472b"></a>
<!-- api: M:Inno.UI.IUiBackend.SetContent(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle,System.String,Inno.UI.UiDocumentFragment) 0c8ed96156fce9187f31ce69b51457a923f1311215b0a8bacf508ac5ea0d00c1 -->

```csharp
bool Inno.UI.IUiBackend.SetContent(Inno.UI.UiContextHandle context, Inno.UI.UiDocumentHandle document, string elementId, Inno.UI.UiDocumentFragment fragment)
```

Replaces an element's children with an explicitly tagged source-language fragment.

**Parameter `context`:** The context that owns the requested document or state.

**Parameter `document`:** The document owned by the supplied context.

**Parameter `elementId`:** The target document element ID.

**Parameter `fragment`:** Explicitly tagged replacement document fragment.

**Returns:** True when the element exists and the fragment was applied; false when the element is absent.
This is not a comparison with the preceding content.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/IUiBackend.cs#L157).

## `SetText`

<a id="api-81499af7b12968e4"></a>
<!-- api: M:Inno.UI.IUiBackend.SetText(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle,System.String,System.String) 874c04632ba94461ea1f07c118b62a06418e671ccddb8ee6057859b4cdd965d7 -->

```csharp
bool Inno.UI.IUiBackend.SetText(Inno.UI.UiContextHandle context, Inno.UI.UiDocumentHandle document, string elementId, string text)
```

Replaces an element's children with plain Unicode text.

**Parameter `context`:** The context that owns the requested document or state.

**Parameter `document`:** The document owned by the supplied context.

**Parameter `elementId`:** The target document element ID.

**Parameter `text`:** Plain Unicode replacement text; the implementation escapes it for its source language.

**Returns:** True when the element exists and the replacement was applied; false when the element is absent.
This is not a comparison with the preceding text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/IUiBackend.cs#L132).

## `SetViewport`

<a id="api-9f20c724fe53c984"></a>
<!-- api: M:Inno.UI.IUiBackend.SetViewport(Inno.UI.UiContextHandle,System.Int32,System.Int32,System.Single) c877f1ced36ca3a4183ab02ff5cf8a7883acb8e42ab7d8bbb5ed1bd85063af13 -->

```csharp
void Inno.UI.IUiBackend.SetViewport(Inno.UI.UiContextHandle context, int width, int height, float density)
```

Changes one UI context's pixel dimensions and density.

**Parameter `context`:** The context that owns the requested document or state.

**Parameter `width`:** New viewport width in physical pixels.

**Parameter `height`:** New viewport height in physical pixels.

**Parameter `density`:** Physical pixels per logical layout pixel.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/IUiBackend.cs#L52).

## `ShowDocument`

<a id="api-b78135d454bd57ec"></a>
<!-- api: M:Inno.UI.IUiBackend.ShowDocument(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle) 3c252be5b372ea194272c2afef65ad659973d3def1a4eb9b176967b74ad9799a -->

```csharp
void Inno.UI.IUiBackend.ShowDocument(Inno.UI.UiContextHandle context, Inno.UI.UiDocumentHandle document)
```

Shows one document.

**Parameter `context`:** The context that owns the requested document or state.

**Parameter `document`:** The document owned by the supplied context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/IUiBackend.cs#L83).

## `Update`

<a id="api-c1567b886ff461ae"></a>
<!-- api: M:Inno.UI.IUiBackend.Update(Inno.UI.UiContextHandle,Inno.UI.UiInputSnapshot) 00e03e55b978dd26f33b0a6f12d2b6b19ae8a8a02aa3ae166a35f27c712c19d8 -->

```csharp
void Inno.UI.IUiBackend.Update(Inno.UI.UiContextHandle context, Inno.UI.UiInputSnapshot input)
```

Processes input and advances document state.

**Parameter `context`:** The context that owns the requested document or state.

**Parameter `input`:** The input snapshot routed to this context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/IUiBackend.cs#L270).

## `capabilities`

<a id="api-03e29f1cbf38ac5c"></a>
<!-- api: P:Inno.UI.IUiBackend.capabilities ec6c2f6ce09b7392afa2d32a3d7e4af8b2dff483f0060e0adba342d360067f85 -->

```csharp
Inno.UI.UiBackendCapabilities Inno.UI.IUiBackend.capabilities { get; }
```

Gets optional behavior and accepted document languages for this generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/IUiBackend.cs#L19).

## `implementationId`

<a id="api-da467b8a51c5f1d9"></a>
<!-- api: P:Inno.UI.IUiBackend.implementationId c6d6ff8336b6b5a542386a4fc1e61fddcfd715f9d47fada1085416009ad3bb7e -->

```csharp
string Inno.UI.IUiBackend.implementationId { get; }
```

Gets the stable implementation identity used by imported document artifacts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/IUiBackend.cs#L15).
