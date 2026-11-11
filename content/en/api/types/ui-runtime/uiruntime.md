---
title: "UiRuntime"
description: "Reference for UiRuntime in Inno.UI.Runtime."
uid: api.inno.ui.runtime.7f1ed2e5b166efaa
kind: api
owners:
  - Inno.UI.Runtime
apiSurface: source-clr
contracts:
  - project.inno-ui-runtime#session-and-font-ownership
---
# `UiRuntime`

This reference describes `UiRuntime` in `Inno.UI.Runtime`. Read the [shared contract](../../projects/inno-ui-runtime.md#session-and-font-ownership) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Runtime.Contracts.RuntimeSubsystem`.

**Direct interfaces:** `Inno.UI.IUiService`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b831e283edce0c50) | Method |
| [`CloseDocument`](#api-f04ab27bb5fac9c8) | Method |
| [`CreateContext`](#api-cec8b469ab7d0fc9) | Method |
| [`DestroyContext`](#api-8ff0b9edfcb1f80f) | Method |
| [`DrainEvents`](#api-b91a22edc173566b) | Method |
| [`EnterExecutionScope`](#api-d8b6ac13f94c9561) | Method |
| [`HasElementAtPoint`](#api-4e0befbb4a8df8ae) | Method |
| [`HideDocument`](#api-9bf29f6ab2c95d84) | Method |
| [`LoadDocument`](#api-5b97c1ff0b323e1d) | Method |
| [`LoadDocument`](#api-7383570aea6c1a56) | Method |
| [`OnBeginFrame`](#api-921fb1be94023a67) | Method |
| [`OnStop`](#api-2947eac38c077bd2) | Method |
| [`RegisterTexture`](#api-a0079f9c6b070081) | Method |
| [`Render`](#api-aa7fc284b05d4113) | Method |
| [`SetAttribute`](#api-91ef9237f8f2d6e5) | Method |
| [`SetClass`](#api-85a74a0bbe4f96b9) | Method |
| [`SetContent`](#api-a31b5b82adb56f07) | Method |
| [`SetText`](#api-9f5161281c420b7a) | Method |
| [`SetViewport`](#api-860ec0f4dcc725fb) | Method |
| [`ShowDocument`](#api-e5314467e8d711a6) | Method |
| [`Update`](#api-06f897ac3fab910e) | Method |
| [`Update`](#api-739afc3c6fc0508f) | Method |

## Type declaration

<a id="api-7f1ed2e5b166efaa"></a>
<!-- api: T:Inno.UI.Runtime.UiRuntime 80b56c6fe1c3f1e7dff932dcfa0977cc7a04a016640a29610ae975d65725612c -->

```csharp
public sealed class Inno.UI.Runtime.UiRuntime : Inno.Runtime.Contracts.RuntimeSubsystem, Inno.UI.IUiService
```

Owns retained UI contexts, imported font leases, and current-frame input for one runtime session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Runtime/UiRuntime.cs#L19).

## `#ctor`

<a id="api-b831e283edce0c50"></a>
<!-- api: M:Inno.UI.Runtime.UiRuntime.#ctor(Inno.UI.IUiBackend,Inno.Assets.IAssetArtifactLookup) 8349efde0718568b31d90b6a196b79b8a6cbb0ac197f634d4918a8f67993671e -->

```csharp
public Inno.UI.Runtime.UiRuntime.UiRuntime(Inno.UI.IUiBackend backend, Inno.Assets.IAssetArtifactLookup artifacts)
```

Creates a UI runtime and assumes ownership of its backend.

**Parameter `backend`:** The retained-mode UI backend.

**Parameter `artifacts`:** The immutable asset artifact lookup.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Runtime/UiRuntime.cs#L37).

## `CloseDocument`

<a id="api-f04ab27bb5fac9c8"></a>
<!-- api: M:Inno.UI.Runtime.UiRuntime.CloseDocument(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle) cdcfdb677fd3cd6723dfc85a39c8105d0d54170ecb088e2ddcf4913297f99b01 -->

```csharp
public void Inno.UI.Runtime.UiRuntime.CloseDocument(Inno.UI.UiContextHandle context, Inno.UI.UiDocumentHandle document)
```

Closes the selected document and releases its retained state.

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `document`:** The document consumed by close document; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Runtime/UiRuntime.cs#L254).

## `CreateContext`

<a id="api-cec8b469ab7d0fc9"></a>
<!-- api: M:Inno.UI.Runtime.UiRuntime.CreateContext(Inno.UI.UiContextOptions) 7a36709c8f0a0e7ee75d54b290b59f3ec54f1483a4b9a0a6222cdd5b67e637de -->

```csharp
public Inno.UI.UiContextHandle Inno.UI.Runtime.UiRuntime.CreateContext(Inno.UI.UiContextOptions options)
```

Creates a context using this implementation's validated inputs.

**Parameter `options`:** The validated configuration that controls this operation.

**Returns:** The validated ui context handle that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Runtime/UiRuntime.cs#L78).

## `DestroyContext`

<a id="api-8ff0b9edfcb1f80f"></a>
<!-- api: M:Inno.UI.Runtime.UiRuntime.DestroyContext(Inno.UI.UiContextHandle) b6cd78f0b10a0f8f7871699ee08858a7a36cd138ac5c337194b2c48d5b9b9e9a -->

```csharp
public void Inno.UI.Runtime.UiRuntime.DestroyContext(Inno.UI.UiContextHandle context)
```

Destroys the context after its in-flight references retire.

**Parameter `context`:** The context that supplies state and services for this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Runtime/UiRuntime.cs#L90).

## `DrainEvents`

<a id="api-b91a22edc173566b"></a>
<!-- api: M:Inno.UI.Runtime.UiRuntime.DrainEvents(Inno.UI.UiContextHandle) 8f9c102f5d5689955d1db3eb64ac3ac078f247cfe41e6d01e194970ddc307ce7 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.UI.UiEvent> Inno.UI.Runtime.UiRuntime.DrainEvents(Inno.UI.UiContextHandle context)
```

Returns and clears events emitted by this UI context.

**Parameter `context`:** The context that supplies state and services for this operation.

**Returns:** An immutable snapshot of the values selected by the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Runtime/UiRuntime.cs#L488).

## `EnterExecutionScope`

<a id="api-d8b6ac13f94c9561"></a>
<!-- api: M:Inno.UI.Runtime.UiRuntime.EnterExecutionScope 18228ecde9cacfaf57618ccec9aab96a1d0c2bf1118849a5b91ff345f7c4fca2 -->

```csharp
public System.IDisposable Inno.UI.Runtime.UiRuntime.EnterExecutionScope()
```

Binds this runtime to the current asynchronous execution context.

**Returns:** The caller-owned binding scope.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Runtime/UiRuntime.cs#L63).

## `HasElementAtPoint`

<a id="api-4e0befbb4a8df8ae"></a>
<!-- api: M:Inno.UI.Runtime.UiRuntime.HasElementAtPoint(Inno.UI.UiContextHandle,Inno.Core.Mathematics.Vector2) 1ba17df3afc24eca603701fc3c28ed3419c58a6ff611ffffbb440c39349ee51e -->

```csharp
public bool Inno.UI.Runtime.UiRuntime.HasElementAtPoint(Inno.UI.UiContextHandle context, Inno.Core.Mathematics.Vector2 position)
```

Tests whether an interactive document element occupies the supplied point.

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `position`:** The position consumed by has element at point; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Runtime/UiRuntime.cs#L419).

## `HideDocument`

<a id="api-9bf29f6ab2c95d84"></a>
<!-- api: M:Inno.UI.Runtime.UiRuntime.HideDocument(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle) f67f765aeeccf5851cd3854510b40f72bbf4bce88fedc5f5bea11db7f7c43507 -->

```csharp
public void Inno.UI.Runtime.UiRuntime.HideDocument(Inno.UI.UiContextHandle context, Inno.UI.UiDocumentHandle document)
```

Hides the selected document while retaining its state.

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `document`:** The document consumed by hide document; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Runtime/UiRuntime.cs#L237).

## `LoadDocument`

<a id="api-5b97c1ff0b323e1d"></a>
<!-- api: M:Inno.UI.Runtime.UiRuntime.LoadDocument(Inno.UI.UiContextHandle,Inno.UI.UiDocumentAsset) 03e2c25ecd5f609116e76752391ee8a99ae94029c0eeba93d600cd6d1f7de932 -->

```csharp
public Inno.UI.UiDocumentHandle Inno.UI.Runtime.UiRuntime.LoadDocument(Inno.UI.UiContextHandle context, Inno.UI.UiDocumentAsset document)
```

Loads a document into the specified independent UI context.

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `document`:** The document consumed by load document; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated ui document handle that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Runtime/UiRuntime.cs#L161).

## `LoadDocument`

<a id="api-7383570aea6c1a56"></a>
<!-- api: M:Inno.UI.Runtime.UiRuntime.LoadDocument(Inno.UI.UiContextHandle,Inno.UI.UiDocumentSource) 236c71373039a6b059d9cce772eb4d6d45a8da52cab178d5b2d94273fc788fbc -->

```csharp
public Inno.UI.UiDocumentHandle Inno.UI.Runtime.UiRuntime.LoadDocument(Inno.UI.UiContextHandle context, Inno.UI.UiDocumentSource source)
```

Loads a document into the specified independent UI context.

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `source`:** The source value or location read by this operation.

**Returns:** The validated ui document handle that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Runtime/UiRuntime.cs#L139).

## `OnBeginFrame`

<a id="api-921fb1be94023a67"></a>
<!-- api: M:Inno.UI.Runtime.UiRuntime.OnBeginFrame(Inno.Runtime.Contracts.RuntimeFrame) 27b4988a382abbed830f83b3c7be6145374b79cafc06b712e702cd129329d5f0 -->

```csharp
protected override void Inno.UI.Runtime.UiRuntime.OnBeginFrame(Inno.Runtime.Contracts.RuntimeFrame frame)
```

Captures the input service snapshot and binds script-facing UI for the complete runtime frame.

**Parameter `frame`:** The current runtime frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Runtime/UiRuntime.cs#L51).

## `OnStop`

<a id="api-2947eac38c077bd2"></a>
<!-- api: M:Inno.UI.Runtime.UiRuntime.OnStop b3a3ec4cf07ca6bf0c2e5861e8f7aa22aea6e506e9e873835e6c1c9480c36f3a -->

```csharp
protected override void Inno.UI.Runtime.UiRuntime.OnStop()
```

Releases native UI state before releasing retained font artifacts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Runtime/UiRuntime.cs#L497).

## `RegisterTexture`

<a id="api-a0079f9c6b070081"></a>
<!-- api: M:Inno.UI.Runtime.UiRuntime.RegisterTexture(Inno.UI.UiContextHandle,System.String,Inno.UI.UiTextureData) 31c188f1bb2f841a6dbd6b75aa8daddd282cdc443187c7f8f6ceea42ca17f871 -->

```csharp
public void Inno.UI.Runtime.UiRuntime.RegisterTexture(Inno.UI.UiContextHandle context, string source, Inno.UI.UiTextureData texture)
```

Registers a named RGBA texture source for UI document drawing.

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `source`:** The source value or location read by this operation.

**Parameter `texture`:** The texture consumed by register texture; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Runtime/UiRuntime.cs#L398).

## `Render`

<a id="api-aa7fc284b05d4113"></a>
<!-- api: M:Inno.UI.Runtime.UiRuntime.Render(Inno.UI.UiContextHandle) a1d60e83147610c40f8e98351724d1a24c3c54c790d485fe9a8391d8795de393 -->

```csharp
public Inno.UI.UiRenderFrame Inno.UI.Runtime.UiRuntime.Render(Inno.UI.UiContextHandle context)
```

Records value rendering for the current frame.

**Parameter `context`:** The context that supplies state and services for this operation.

**Returns:** The validated ui render frame that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Runtime/UiRuntime.cs#L473).

## `SetAttribute`

<a id="api-91ef9237f8f2d6e5"></a>
<!-- api: M:Inno.UI.Runtime.UiRuntime.SetAttribute(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle,System.String,System.String,System.String) 7ac81b855ca09db517838083926fc08bd40180a178ed7db5f43d4ec1ca209213 -->

```csharp
public bool Inno.UI.Runtime.UiRuntime.SetAttribute(Inno.UI.UiContextHandle context, Inno.UI.UiDocumentHandle document, string elementId, string name, string value)
```

Updates the attribute state and applies the resulting invariants.

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `document`:** The document consumed by set attribute; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `elementId`:** The element id text validated by the set attribute operation.

**Parameter `name`:** The human-readable name used for presentation and diagnostics.

**Parameter `value`:** The concrete value read or transformed by this operation.

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Runtime/UiRuntime.cs#L343).

## `SetClass`

<a id="api-85a74a0bbe4f96b9"></a>
<!-- api: M:Inno.UI.Runtime.UiRuntime.SetClass(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle,System.String,System.String,System.Boolean) bd697e69bc302c77429fd39e31cce3154ca6b5de3348f0978db5b0732e2ccb7f -->

```csharp
public bool Inno.UI.Runtime.UiRuntime.SetClass(Inno.UI.UiContextHandle context, Inno.UI.UiDocumentHandle document, string elementId, string className, bool active)
```

Updates the class state and applies the resulting invariants.

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `document`:** The document consumed by set class; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `elementId`:** The element id text validated by the set class operation.

**Parameter `className`:** The class name text validated by the set class operation.

**Parameter `active`:** Whether active behavior is enabled while set class executes.

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Runtime/UiRuntime.cs#L375).

## `SetContent`

<a id="api-a31b5b82adb56f07"></a>
<!-- api: M:Inno.UI.Runtime.UiRuntime.SetContent(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle,System.String,Inno.UI.UiDocumentFragment) b3a7361656ad28783c72c14f79fc08e3990af33ac0884572000613de07df7b1a -->

```csharp
public bool Inno.UI.Runtime.UiRuntime.SetContent(Inno.UI.UiContextHandle context, Inno.UI.UiDocumentHandle document, string elementId, Inno.UI.UiDocumentFragment content)
```

Updates the content state and applies the resulting invariants.

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `document`:** The document consumed by set content; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `elementId`:** The element id text validated by the set content operation.

**Parameter `content`:** The content consumed by set content; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Runtime/UiRuntime.cs#L311).

## `SetText`

<a id="api-9f5161281c420b7a"></a>
<!-- api: M:Inno.UI.Runtime.UiRuntime.SetText(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle,System.String,System.String) 1c61300576d4ba93ff8bfb1ff9ab75f40d92af9e32e8ae989461d4262c31d9f1 -->

```csharp
public bool Inno.UI.Runtime.UiRuntime.SetText(Inno.UI.UiContextHandle context, Inno.UI.UiDocumentHandle document, string elementId, string text)
```

Updates the text state and applies the resulting invariants.

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `document`:** The document consumed by set text; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `elementId`:** The element id text validated by the set text operation.

**Parameter `text`:** The text text validated by the set text operation.

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Runtime/UiRuntime.cs#L283).

## `SetViewport`

<a id="api-860ec0f4dcc725fb"></a>
<!-- api: M:Inno.UI.Runtime.UiRuntime.SetViewport(Inno.UI.UiContextHandle,System.Int32,System.Int32,System.Single) 518e6fd393cbd8e0d3b39aaa72d327bdba114ec4571d567f5721d5c08b26cdd0 -->

```csharp
public void Inno.UI.Runtime.UiRuntime.SetViewport(Inno.UI.UiContextHandle context, int width, int height, float density = 1)
```

Updates the viewport state and applies the resulting invariants.

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `width`:** The width in logical units or pixels required by this operation.

**Parameter `height`:** The height in logical units or pixels required by this operation.

**Parameter `density`:** The density consumed by set viewport; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Runtime/UiRuntime.cs#L117).

## `ShowDocument`

<a id="api-e5314467e8d711a6"></a>
<!-- api: M:Inno.UI.Runtime.UiRuntime.ShowDocument(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle) cb35a5434ad25cae9b4ce892d831c5146c015cd6c979634f28f4d6592e9784b0 -->

```csharp
public void Inno.UI.Runtime.UiRuntime.ShowDocument(Inno.UI.UiContextHandle context, Inno.UI.UiDocumentHandle document)
```

Makes the selected document visible in its owning UI context.

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `document`:** The document consumed by show document; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Runtime/UiRuntime.cs#L220).

## `Update`

<a id="api-06f897ac3fab910e"></a>
<!-- api: M:Inno.UI.Runtime.UiRuntime.Update(Inno.UI.UiContextHandle,Inno.UI.UiInputSnapshot) d06e0b5d54c5f8dd04c9fa79ae06f58bb6779b7480e32fe996840a464b65c76f -->

```csharp
public void Inno.UI.Runtime.UiRuntime.Update(Inno.UI.UiContextHandle context, Inno.UI.UiInputSnapshot input)
```

Advances one UI context with input routed from its rendered view.

**Parameter `context`:** The context that owns the active document.

**Parameter `input`:** Input mapped into the context's local pixel coordinates.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Runtime/UiRuntime.cs#L456).

## `Update`

<a id="api-739afc3c6fc0508f"></a>
<!-- api: M:Inno.UI.Runtime.UiRuntime.Update(Inno.UI.UiContextHandle) d41e622cb05dd8633a477d4219153dd2fe90a2c4352f77200a3981ce1ddec369 -->

```csharp
public void Inno.UI.Runtime.UiRuntime.Update(Inno.UI.UiContextHandle context)
```

Recomputes owned state from the current validated inputs.

**Parameter `context`:** The context that supplies state and services for this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Runtime/UiRuntime.cs#L433).
