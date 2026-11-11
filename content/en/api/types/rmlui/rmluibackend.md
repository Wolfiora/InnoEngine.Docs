---
title: "RmlUiBackend"
description: "Reference for RmlUiBackend in Inno.Adapter.UI.RmlUi."
uid: api.inno.adapter.ui.rmlui.58b4adde7d8289b6
kind: api
owners:
  - Inno.Adapter.UI.RmlUi
apiSurface: source-clr
contracts:
  - project.inno-adapter-ui-rmlui#native-session-and-transfer-contract
---
# `RmlUiBackend`

This reference describes `RmlUiBackend` in `Inno.Adapter.UI.RmlUi`. Read the [shared contract](../../projects/inno-adapter-ui-rmlui.md#native-session-and-transfer-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.UI.IUiBackend`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-2afae8bc6561b325) | Method |
| [`CloseDocument`](#api-c05da6c9296f5e1c) | Method |
| [`CreateContext`](#api-ceafa5abaae0610e) | Method |
| [`DestroyContext`](#api-87917827e81a1912) | Method |
| [`Dispose`](#api-6bae8dfa208a2a62) | Method |
| [`DrainEvents`](#api-a7c75eac8a74345f) | Method |
| [`HasElementAtPoint`](#api-efcb2c0d78241c2f) | Method |
| [`HideDocument`](#api-2f86fb87fe6414ff) | Method |
| [`LoadDocument`](#api-9e8a9d48fdf7670c) | Method |
| [`RegisterFont`](#api-1da21c61104f5b9f) | Method |
| [`RegisterTexture`](#api-7faf9695b3b3bf1c) | Method |
| [`Render`](#api-2803f0ee7fa7c720) | Method |
| [`SetAttribute`](#api-4fc50982f9be30e9) | Method |
| [`SetClass`](#api-9c54894f2dd7efa7) | Method |
| [`SetContent`](#api-12ab29b986d8f426) | Method |
| [`SetText`](#api-8fdafb1ac40c9da5) | Method |
| [`SetViewport`](#api-2fbea93a9f0604c0) | Method |
| [`ShowDocument`](#api-77aca56c50a2ab58) | Method |
| [`Update`](#api-7690fa2e3b8d843e) | Method |
| [`capabilities`](#api-0c97b92dccb9d373) | Property |
| [`implementationId`](#api-90d47899cecb71c0) | Property |

## Type declaration

<a id="api-58b4adde7d8289b6"></a>
<!-- api: T:Inno.Adapter.UI.RmlUi.RmlUiBackend 007f6201525f1b4fdf9d83d44c50fb813bb0f1879863e98d066a5665c5bb509e -->

```csharp
public sealed class Inno.Adapter.UI.RmlUi.RmlUiBackend : Inno.UI.IUiBackend
```

Implements retained-mode UI document processing through the pinned RmlUi native bridge.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/runtime/Inno.Adapter.UI.RmlUi/RmlUiBackend.cs#L20).

## `#ctor`

<a id="api-2afae8bc6561b325"></a>
<!-- api: M:Inno.Adapter.UI.RmlUi.RmlUiBackend.#ctor 46e5657a47dfc59f63c6aa6fd246db404ecbb0e7b92a2b09e90599f5e2ce040c -->

```csharp
public Inno.Adapter.UI.RmlUi.RmlUiBackend.RmlUiBackend()
```

Creates and validates one isolated native UI engine.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/runtime/Inno.Adapter.UI.RmlUi/RmlUiBackend.cs#L45).

## `CloseDocument`

<a id="api-c05da6c9296f5e1c"></a>
<!-- api: M:Inno.Adapter.UI.RmlUi.RmlUiBackend.CloseDocument(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle) a1ee4a1f3b7507eb11fc09455050590308aaa2017d093c43a8871fea1c6e230d -->

```csharp
public void Inno.Adapter.UI.RmlUi.RmlUiBackend.CloseDocument(Inno.UI.UiContextHandle context, Inno.UI.UiDocumentHandle document)
```

Closes the selected document and releases its retained state.

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `document`:** The document consumed by close document; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/runtime/Inno.Adapter.UI.RmlUi/RmlUiBackend.cs#L179).

## `CreateContext`

<a id="api-ceafa5abaae0610e"></a>
<!-- api: M:Inno.Adapter.UI.RmlUi.RmlUiBackend.CreateContext(Inno.UI.UiContextOptions) 9b6d62336745bd2de5f7b9b7d490714193a096b080103b603c7c8be59bc18c5b -->

```csharp
public Inno.UI.UiContextHandle Inno.Adapter.UI.RmlUi.RmlUiBackend.CreateContext(Inno.UI.UiContextOptions options)
```

Creates a context using this implementation's validated inputs.

**Parameter `options`:** The validated configuration that controls this operation.

**Returns:** The validated ui context handle that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/runtime/Inno.Adapter.UI.RmlUi/RmlUiBackend.cs#L61).

## `DestroyContext`

<a id="api-87917827e81a1912"></a>
<!-- api: M:Inno.Adapter.UI.RmlUi.RmlUiBackend.DestroyContext(Inno.UI.UiContextHandle) 4957b038b739d4c8b6c3a3ab9de84dc3390dc3e0dfad6609a05243b626119a25 -->

```csharp
public void Inno.Adapter.UI.RmlUi.RmlUiBackend.DestroyContext(Inno.UI.UiContextHandle context)
```

Destroys the context after its in-flight references retire.

**Parameter `context`:** The context that supplies state and services for this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/runtime/Inno.Adapter.UI.RmlUi/RmlUiBackend.cs#L76).

## `Dispose`

<a id="api-6bae8dfa208a2a62"></a>
<!-- api: M:Inno.Adapter.UI.RmlUi.RmlUiBackend.Dispose ac2a90c00dac47936860aef06afbca731a320a6742b27cc1f199a0f70b4c7b76 -->

```csharp
public void Inno.Adapter.UI.RmlUi.RmlUiBackend.Dispose()
```

Releases every native context and document owned by this backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/runtime/Inno.Adapter.UI.RmlUi/RmlUiBackend.cs#L593).

## `DrainEvents`

<a id="api-a7c75eac8a74345f"></a>
<!-- api: M:Inno.Adapter.UI.RmlUi.RmlUiBackend.DrainEvents(Inno.UI.UiContextHandle) ad7bf73a099b9f8513749a84c1b46feea3a7e49aafd171263038fb5bdf081112 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.UI.UiEvent> Inno.Adapter.UI.RmlUi.RmlUiBackend.DrainEvents(Inno.UI.UiContextHandle context)
```

Returns and clears events emitted by this UI context.

**Parameter `context`:** The context that supplies state and services for this operation.

**Returns:** An immutable snapshot of the values selected by the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/runtime/Inno.Adapter.UI.RmlUi/RmlUiBackend.cs#L558).

## `HasElementAtPoint`

<a id="api-efcb2c0d78241c2f"></a>
<!-- api: M:Inno.Adapter.UI.RmlUi.RmlUiBackend.HasElementAtPoint(Inno.UI.UiContextHandle,Inno.Core.Mathematics.Vector2) 4889b2c8a8e506440cacd27d40820bb4508bf71070192d8eb60f0543f7cecaea -->

```csharp
public bool Inno.Adapter.UI.RmlUi.RmlUiBackend.HasElementAtPoint(Inno.UI.UiContextHandle context, Inno.Core.Mathematics.Vector2 position)
```

Tests whether an interactive document element occupies the supplied point.

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `position`:** The position consumed by has element at point; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/runtime/Inno.Adapter.UI.RmlUi/RmlUiBackend.cs#L424).

## `HideDocument`

<a id="api-2f86fb87fe6414ff"></a>
<!-- api: M:Inno.Adapter.UI.RmlUi.RmlUiBackend.HideDocument(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle) 24d3db18436c86a9aa773c22d0214900cfaf0ef02e243f05f4669fd400555cd9 -->

```csharp
public void Inno.Adapter.UI.RmlUi.RmlUiBackend.HideDocument(Inno.UI.UiContextHandle context, Inno.UI.UiDocumentHandle document)
```

Hides the selected document while retaining its state.

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `document`:** The document consumed by hide document; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/runtime/Inno.Adapter.UI.RmlUi/RmlUiBackend.cs#L162).

## `LoadDocument`

<a id="api-9e8a9d48fdf7670c"></a>
<!-- api: M:Inno.Adapter.UI.RmlUi.RmlUiBackend.LoadDocument(Inno.UI.UiContextHandle,Inno.UI.UiDocumentSource) 762f9ebd49656901cdf3519465bb1c07971ab5cd6a7b0ff92afe11e3455be8c7 -->

```csharp
public Inno.UI.UiDocumentHandle Inno.Adapter.UI.RmlUi.RmlUiBackend.LoadDocument(Inno.UI.UiContextHandle context, Inno.UI.UiDocumentSource source)
```

Loads a document into the specified independent UI context.

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `source`:** The source value or location read by this operation.

**Returns:** The validated ui document handle that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/runtime/Inno.Adapter.UI.RmlUi/RmlUiBackend.cs#L123).

## `RegisterFont`

<a id="api-1da21c61104f5b9f"></a>
<!-- api: M:Inno.Adapter.UI.RmlUi.RmlUiBackend.RegisterFont(Inno.UI.UiFontRegistration) 69dd1c553a7d5da1e24aa97a40ea928a1076ddad213251568111031acd13e34c -->

```csharp
public void Inno.Adapter.UI.RmlUi.RmlUiBackend.RegisterFont(Inno.UI.UiFontRegistration registration)
```

Registers a font face for document text rendering.

**Parameter `registration`:** The registration consumed by register font; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/runtime/Inno.Adapter.UI.RmlUi/RmlUiBackend.cs#L351).

## `RegisterTexture`

<a id="api-7faf9695b3b3bf1c"></a>
<!-- api: M:Inno.Adapter.UI.RmlUi.RmlUiBackend.RegisterTexture(Inno.UI.UiContextHandle,System.String,Inno.UI.UiTextureData) 2d1a1e1b72e50ffc009534a3b47cc28a8159e2ba6c32ff15afec7bfc3fbddc29 -->

```csharp
public void Inno.Adapter.UI.RmlUi.RmlUiBackend.RegisterTexture(Inno.UI.UiContextHandle context, string source, Inno.UI.UiTextureData texture)
```

Registers a named RGBA texture source for UI document drawing.

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `source`:** The source value or location read by this operation.

**Parameter `texture`:** The texture consumed by register texture; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/runtime/Inno.Adapter.UI.RmlUi/RmlUiBackend.cs#L389).

## `Render`

<a id="api-2803f0ee7fa7c720"></a>
<!-- api: M:Inno.Adapter.UI.RmlUi.RmlUiBackend.Render(Inno.UI.UiContextHandle) b851a0a6cfb98c19e425243fdfb3b837273443e7a5b0a6a7dbd13c4130904a1c -->

```csharp
public Inno.UI.UiRenderFrame Inno.Adapter.UI.RmlUi.RmlUiBackend.Render(Inno.UI.UiContextHandle context)
```

Records value rendering for the current frame.

**Parameter `context`:** The context that supplies state and services for this operation.

**Returns:** The validated ui render frame that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/runtime/Inno.Adapter.UI.RmlUi/RmlUiBackend.cs#L484).

## `SetAttribute`

<a id="api-4fc50982f9be30e9"></a>
<!-- api: M:Inno.Adapter.UI.RmlUi.RmlUiBackend.SetAttribute(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle,System.String,System.String,System.String) 0206eba4b51639ae3c7b6d0a6eb1d3a980759a231efb18dca6cfbd127f900ecd -->

```csharp
public bool Inno.Adapter.UI.RmlUi.RmlUiBackend.SetAttribute(Inno.UI.UiContextHandle context, Inno.UI.UiDocumentHandle document, string elementId, string name, string value)
```

Updates the attribute state and applies the resulting invariants.

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `document`:** The document consumed by set attribute; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `elementId`:** The element id text validated by the set attribute operation.

**Parameter `name`:** The human-readable name used for presentation and diagnostics.

**Parameter `value`:** The concrete value read or transformed by this operation.

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/runtime/Inno.Adapter.UI.RmlUi/RmlUiBackend.cs#L279).

## `SetClass`

<a id="api-9c54894f2dd7efa7"></a>
<!-- api: M:Inno.Adapter.UI.RmlUi.RmlUiBackend.SetClass(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle,System.String,System.String,System.Boolean) 849c111394867dee441c96121342d4eb59b38f954f67fad87cac364559ce1a1e -->

```csharp
public bool Inno.Adapter.UI.RmlUi.RmlUiBackend.SetClass(Inno.UI.UiContextHandle context, Inno.UI.UiDocumentHandle document, string elementId, string className, bool active)
```

Updates the class state and applies the resulting invariants.

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `document`:** The document consumed by set class; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `elementId`:** The element id text validated by the set class operation.

**Parameter `className`:** The class name text validated by the set class operation.

**Parameter `active`:** Whether active behavior is enabled while set class executes.

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/runtime/Inno.Adapter.UI.RmlUi/RmlUiBackend.cs#L323).

## `SetContent`

<a id="api-12ab29b986d8f426"></a>
<!-- api: M:Inno.Adapter.UI.RmlUi.RmlUiBackend.SetContent(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle,System.String,Inno.UI.UiDocumentFragment) 65b6dc586c058f859896a0b6fe31c02afb8c070be8427dbbee7a9b5f811e052f -->

```csharp
public bool Inno.Adapter.UI.RmlUi.RmlUiBackend.SetContent(Inno.UI.UiContextHandle context, Inno.UI.UiDocumentHandle document, string elementId, Inno.UI.UiDocumentFragment content)
```

Updates the content state and applies the resulting invariants.

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `document`:** The document consumed by set content; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `elementId`:** The element id text validated by the set content operation.

**Parameter `content`:** The content consumed by set content; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/runtime/Inno.Adapter.UI.RmlUi/RmlUiBackend.cs#L238).

## `SetText`

<a id="api-8fdafb1ac40c9da5"></a>
<!-- api: M:Inno.Adapter.UI.RmlUi.RmlUiBackend.SetText(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle,System.String,System.String) 7cf9706959bf764644e81d0bfdcc55d0dfb5e533c6514a197a6b30ee768b6c3e -->

```csharp
public bool Inno.Adapter.UI.RmlUi.RmlUiBackend.SetText(Inno.UI.UiContextHandle context, Inno.UI.UiDocumentHandle document, string elementId, string text)
```

Updates the text state and applies the resulting invariants.

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `document`:** The document consumed by set text; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `elementId`:** The element id text validated by the set text operation.

**Parameter `text`:** The text text validated by the set text operation.

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/runtime/Inno.Adapter.UI.RmlUi/RmlUiBackend.cs#L205).

## `SetViewport`

<a id="api-2fbea93a9f0604c0"></a>
<!-- api: M:Inno.Adapter.UI.RmlUi.RmlUiBackend.SetViewport(Inno.UI.UiContextHandle,System.Int32,System.Int32,System.Single) 8e317dff8c3ccc244f8839070f598ce89f79e8595819d0bbaaa6c2d528d2583c -->

```csharp
public void Inno.Adapter.UI.RmlUi.RmlUiBackend.SetViewport(Inno.UI.UiContextHandle context, int width, int height, float density)
```

Updates the viewport state and applies the resulting invariants.

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `width`:** The width in logical units or pixels required by this operation.

**Parameter `height`:** The height in logical units or pixels required by this operation.

**Parameter `density`:** The density consumed by set viewport; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/runtime/Inno.Adapter.UI.RmlUi/RmlUiBackend.cs#L97).

## `ShowDocument`

<a id="api-77aca56c50a2ab58"></a>
<!-- api: M:Inno.Adapter.UI.RmlUi.RmlUiBackend.ShowDocument(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle) 9195cac9b689bca0c79c69581e7ed7efd6486b526095d7071fa6d5a6a0b7334a -->

```csharp
public void Inno.Adapter.UI.RmlUi.RmlUiBackend.ShowDocument(Inno.UI.UiContextHandle context, Inno.UI.UiDocumentHandle document)
```

Makes the selected document visible in its owning UI context.

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `document`:** The document consumed by show document; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/runtime/Inno.Adapter.UI.RmlUi/RmlUiBackend.cs#L145).

## `Update`

<a id="api-7690fa2e3b8d843e"></a>
<!-- api: M:Inno.Adapter.UI.RmlUi.RmlUiBackend.Update(Inno.UI.UiContextHandle,Inno.UI.UiInputSnapshot) 21e17e3caf1c5043c5e652067c8e77c4c47f4a98179361fb1b25d213750893a2 -->

```csharp
public void Inno.Adapter.UI.RmlUi.RmlUiBackend.Update(Inno.UI.UiContextHandle context, Inno.UI.UiInputSnapshot input)
```

Recomputes owned state from the current validated inputs.

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `input`:** The input consumed by update; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/runtime/Inno.Adapter.UI.RmlUi/RmlUiBackend.cs#L444).

## `capabilities`

<a id="api-0c97b92dccb9d373"></a>
<!-- api: P:Inno.Adapter.UI.RmlUi.RmlUiBackend.capabilities 595b308a4cd9997c637cd17e43c8e3e21f7540af6a391f88c7aa9d748e79e4b5 -->

```csharp
public Inno.UI.UiBackendCapabilities Inno.Adapter.UI.RmlUi.RmlUiBackend.capabilities { get; }
```

Gets the immutable feature and limit set reported by the active graphics backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/runtime/Inno.Adapter.UI.RmlUi/RmlUiBackend.cs#L40).

## `implementationId`

<a id="api-90d47899cecb71c0"></a>
<!-- api: P:Inno.Adapter.UI.RmlUi.RmlUiBackend.implementationId f8541b3a8c29ae4d9554bf9770a953c0235c34f6e35fd38cce5c9f238d8d5bdb -->

```csharp
public string Inno.Adapter.UI.RmlUi.RmlUiBackend.implementationId { get; }
```

Gets the implementation id text used by the current instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/runtime/Inno.Adapter.UI.RmlUi/RmlUiBackend.cs#L35).
