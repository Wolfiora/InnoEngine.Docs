---
title: "UI"
description: "Reference for UI in Inno.UI."
uid: api.inno.ui.415278d026b1bc06
kind: api
owners:
  - Inno.UI
apiSurface: source-clr
contracts:
  - project.inno-ui#document-and-frame-contract
---
# `UI`

This reference describes `UI` in `Inno.UI`. Read the [shared contract](../../projects/inno-ui.md#document-and-frame-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`CloseDocument`](#api-c417c2ed80e005c4) | Method |
| [`CreateContext`](#api-534c98b625b6ed3d) | Method |
| [`DestroyContext`](#api-76f18a47e12111a9) | Method |
| [`DrainEvents`](#api-3f5d64dae61e5f60) | Method |
| [`HideDocument`](#api-eccf65f1fd30c82d) | Method |
| [`LoadDocument`](#api-dc12c7275da39ba8) | Method |
| [`LoadDocument`](#api-40f3ae3ddd7a1a67) | Method |
| [`RegisterTexture`](#api-efd4d7199962fc14) | Method |
| [`Render`](#api-c3f57658d738885c) | Method |
| [`SetAttribute`](#api-a35051587eb9d6cf) | Method |
| [`SetClass`](#api-5316f4c2542866f2) | Method |
| [`SetContent`](#api-cd313432ab3f341c) | Method |
| [`SetText`](#api-716e3868fb0ae5bd) | Method |
| [`SetViewport`](#api-918e0e123b9e0352) | Method |
| [`ShowDocument`](#api-041cb234d473b8f0) | Method |
| [`Update`](#api-eda728afbae27c38) | Method |
| [`Update`](#api-185400bde0552e3e) | Method |

## Type declaration

<a id="api-415278d026b1bc06"></a>
<!-- api: T:Inno.UI.UI ddf125ee7c5b9b90f60d0d291ac787a7d5e7ee6a88a582cd40465ebca5250d76 -->

```csharp
public static class Inno.UI.UI
```

Provides script-friendly retained-mode UI operations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UI.cs#L39).

## `CloseDocument`

<a id="api-c417c2ed80e005c4"></a>
<!-- api: M:Inno.UI.UI.CloseDocument(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle) 2db0598569dc4549bb692aeac0180662a46bbbe03bac2fc8a64fe766e0cad206 -->

```csharp
public static void Inno.UI.UI.CloseDocument(Inno.UI.UiContextHandle context, Inno.UI.UiDocumentHandle document)
```

Closes one document.

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `document`:** The document consumed by close document; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UI.cs#L151).

## `CreateContext`

<a id="api-534c98b625b6ed3d"></a>
<!-- api: M:Inno.UI.UI.CreateContext(Inno.UI.UiContextOptions) e87075d88a12e63009e4ee843f808a3424ae4167590b9423dbb487d357cc90f2 -->

```csharp
public static Inno.UI.UiContextHandle Inno.UI.UI.CreateContext(Inno.UI.UiContextOptions options)
```

Creates one independent UI context.

**Parameter `options`:** The validated configuration that controls this operation.

**Returns:** The validated ui context handle that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UI.cs#L50).

## `DestroyContext`

<a id="api-76f18a47e12111a9"></a>
<!-- api: M:Inno.UI.UI.DestroyContext(Inno.UI.UiContextHandle) 548162742f8461a0f9a884a9815b6f6bc362f7d9e62d2a73882bc69fd6a10ec6 -->

```csharp
public static void Inno.UI.UI.DestroyContext(Inno.UI.UiContextHandle context)
```

Destroys one UI context and all owned documents.

**Parameter `context`:** The context that supplies state and services for this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UI.cs#L57).

## `DrainEvents`

<a id="api-3f5d64dae61e5f60"></a>
<!-- api: M:Inno.UI.UI.DrainEvents(Inno.UI.UiContextHandle) d6e1e1d53526d236f95a3efbaddd4dd5280501ed934ba84c68cc18b4311ddc2d -->

```csharp
public static System.Collections.Generic.IReadOnlyList<Inno.UI.UiEvent> Inno.UI.UI.DrainEvents(Inno.UI.UiContextHandle context)
```

Drains document events queued by preceding updates.

**Parameter `context`:** The context that supplies state and services for this operation.

**Returns:** An immutable snapshot of the values selected by the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UI.cs#L321).

## `HideDocument`

<a id="api-eccf65f1fd30c82d"></a>
<!-- api: M:Inno.UI.UI.HideDocument(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle) 669dbcdaae231af3cb7c88decdc05664f73360f87a0453c83a59b33b86cefdb7 -->

```csharp
public static void Inno.UI.UI.HideDocument(Inno.UI.UiContextHandle context, Inno.UI.UiDocumentHandle document)
```

Hides one document.

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `document`:** The document consumed by hide document; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UI.cs#L137).

## `LoadDocument`

<a id="api-dc12c7275da39ba8"></a>
<!-- api: M:Inno.UI.UI.LoadDocument(Inno.UI.UiContextHandle,Inno.UI.UiDocumentAsset) d42730a4a8b9b7f10dc35c3b526f35d81f70a6447583bd1e6cf84cd005caea72 -->

```csharp
public static Inno.UI.UiDocumentHandle Inno.UI.UI.LoadDocument(Inno.UI.UiContextHandle context, Inno.UI.UiDocumentAsset document)
```

Loads one imported document compatible with the selected backend.

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `document`:** The document consumed by load document; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated ui document handle that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UI.cs#L109).

## `LoadDocument`

<a id="api-40f3ae3ddd7a1a67"></a>
<!-- api: M:Inno.UI.UI.LoadDocument(Inno.UI.UiContextHandle,Inno.UI.UiDocumentSource) ceb97e851b172e3143da7244917f6cb015e1bd6b8fa6a2cde78c61a6e0455f3e -->

```csharp
public static Inno.UI.UiDocumentHandle Inno.UI.UI.LoadDocument(Inno.UI.UiContextHandle context, Inno.UI.UiDocumentSource source)
```

Loads one explicitly tagged in-memory document.

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `source`:** The source value or location read by this operation.

**Returns:** The validated ui document handle that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UI.cs#L92).

## `RegisterTexture`

<a id="api-efd4d7199962fc14"></a>
<!-- api: M:Inno.UI.UI.RegisterTexture(Inno.UI.UiContextHandle,System.String,Inno.UI.UiTextureData) 98a3e4a1413e61d006b3376bd7d494f55d970d0c9eeef202e471ef1432f69727 -->

```csharp
public static void Inno.UI.UI.RegisterTexture(Inno.UI.UiContextHandle context, string source, Inno.UI.UiTextureData texture)
```

Registers one named RGBA8 texture source.

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `source`:** The source value or location read by this operation.

**Parameter `texture`:** The texture consumed by register texture; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UI.cs#L276).

## `Render`

<a id="api-c3f57658d738885c"></a>
<!-- api: M:Inno.UI.UI.Render(Inno.UI.UiContextHandle) d46500e9aac8b1e86875c6c154d904cb8878a316929f1bb531d35d90b853b05e -->

```csharp
public static Inno.UI.UiRenderFrame Inno.UI.UI.Render(Inno.UI.UiContextHandle context)
```

Builds an immutable frame of incremental resources and ordered draws.

**Parameter `context`:** The context that supplies state and services for this operation.

**Returns:** The validated ui render frame that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UI.cs#L311).

## `SetAttribute`

<a id="api-a35051587eb9d6cf"></a>
<!-- api: M:Inno.UI.UI.SetAttribute(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle,System.String,System.String,System.String) 54c13d3989ab10be717eecf31c10701eafc18d2a2539ffb98468c7bb6a87b1c9 -->

```csharp
public static bool Inno.UI.UI.SetAttribute(Inno.UI.UiContextHandle context, Inno.UI.UiDocumentHandle document, string elementId, string name, string value)
```

Sets one element attribute.

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `document`:** The document consumed by set attribute; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `elementId`:** The element id text validated by the set attribute operation.

**Parameter `name`:** The human-readable name used for presentation and diagnostics.

**Parameter `value`:** The concrete value read or transformed by this operation.

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UI.cs#L227).

## `SetClass`

<a id="api-5316f4c2542866f2"></a>
<!-- api: M:Inno.UI.UI.SetClass(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle,System.String,System.String,System.Boolean) 1d1bdbb029e2b0b1eef592b2bdd23b493c5a3d80c2f6a66c3fa1a708052b63f5 -->

```csharp
public static bool Inno.UI.UI.SetClass(Inno.UI.UiContextHandle context, Inno.UI.UiDocumentHandle document, string elementId, string className, bool active)
```

Activates or deactivates one element class.

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `document`:** The document consumed by set class; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `elementId`:** The element id text validated by the set class operation.

**Parameter `className`:** The class name text validated by the set class operation.

**Parameter `active`:** Whether active behavior is enabled while set class executes.

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UI.cs#L256).

## `SetContent`

<a id="api-cd313432ab3f341c"></a>
<!-- api: M:Inno.UI.UI.SetContent(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle,System.String,Inno.UI.UiDocumentFragment) ea1c9389c73cdacb547d99f0751c091935e55745c6ad7a73f24d488534b6c9c1 -->

```csharp
public static bool Inno.UI.UI.SetContent(Inno.UI.UiContextHandle context, Inno.UI.UiDocumentHandle document, string elementId, Inno.UI.UiDocumentFragment fragment)
```

Replaces an element's children with an explicitly tagged source-language fragment.

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `document`:** The document consumed by set content; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `elementId`:** The element id text validated by the set content operation.

**Parameter `fragment`:** The fragment consumed by set content; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UI.cs#L199).

## `SetText`

<a id="api-716e3868fb0ae5bd"></a>
<!-- api: M:Inno.UI.UI.SetText(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle,System.String,System.String) fe5739dc644a3ecbf4f03e8e2ebfd5f44fecb66492cfd2fde495392c1c297930 -->

```csharp
public static bool Inno.UI.UI.SetText(Inno.UI.UiContextHandle context, Inno.UI.UiDocumentHandle document, string elementId, string text)
```

Replaces an element's children with plain Unicode text.

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `document`:** The document consumed by set text; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `elementId`:** The element id text validated by the set text operation.

**Parameter `text`:** The text text validated by the set text operation.

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UI.cs#L174).

## `SetViewport`

<a id="api-918e0e123b9e0352"></a>
<!-- api: M:Inno.UI.UI.SetViewport(Inno.UI.UiContextHandle,System.Int32,System.Int32,System.Single) 3a7e76120b1a9cd4a12c00666ee523c1a9350a005ccf097de49d4c406f8fcc74 -->

```csharp
public static void Inno.UI.UI.SetViewport(Inno.UI.UiContextHandle context, int width, int height, float density = 1)
```

Changes one context's pixel dimensions and density.

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `width`:** The width in logical units or pixels required by this operation.

**Parameter `height`:** The height in logical units or pixels required by this operation.

**Parameter `density`:** The density consumed by set viewport; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UI.cs#L73).

## `ShowDocument`

<a id="api-041cb234d473b8f0"></a>
<!-- api: M:Inno.UI.UI.ShowDocument(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle) a1ce373dcd6b9670aab28f26e37e55eb4a73492da41c61bebc210a220ee97a64 -->

```csharp
public static void Inno.UI.UI.ShowDocument(Inno.UI.UiContextHandle context, Inno.UI.UiDocumentHandle document)
```

Shows one document.

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `document`:** The document consumed by show document; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UI.cs#L123).

## `Update`

<a id="api-eda728afbae27c38"></a>
<!-- api: M:Inno.UI.UI.Update(Inno.UI.UiContextHandle,Inno.UI.UiInputSnapshot) 907f5c7fe5e43d018adfa95f843dde5184355f613694d0249533e25094f2985e -->

```csharp
public static void Inno.UI.UI.Update(Inno.UI.UiContextHandle context, Inno.UI.UiInputSnapshot input)
```

Advances one context with explicitly routed viewport-local input.

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `input`:** The input consumed by update; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UI.cs#L298).

## `Update`

<a id="api-185400bde0552e3e"></a>
<!-- api: M:Inno.UI.UI.Update(Inno.UI.UiContextHandle) 20e39b79b33355c58a144cafa68f2b945d22d4afc8ad60d8833489c15cd6a6ef -->

```csharp
public static void Inno.UI.UI.Update(Inno.UI.UiContextHandle context)
```

Processes current-frame input and advances one context.

**Parameter `context`:** The context that supplies state and services for this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UI.cs#L288).
