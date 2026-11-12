---
title: "UI"
description: "Reference for UI in Inno.UI."
uid: api.inno.ui.runtime-script.e3f5c1e5224944c3
kind: api
owners:
  - Inno.UI
apiSurface: runtime-script
contracts:
  - project.inno-ui#document-and-frame-contract
  - manual.scripting.use-script-api
---
# `UI`

This reference describes `UI` in `Inno.UI`. Read the [shared contract](../../projects/inno-ui.md#document-and-frame-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`CloseDocument`](#api-ba9a6bb43e6e1012) | Method |
| [`CreateContext`](#api-31f0ec9e23fcd90b) | Method |
| [`DestroyContext`](#api-c9946dd4256203b1) | Method |
| [`DrainEvents`](#api-14a9bd81eaa476f2) | Method |
| [`HideDocument`](#api-f7b8c92ea7bfc24c) | Method |
| [`LoadDocument`](#api-2037f13c0054eee6) | Method |
| [`LoadDocument`](#api-685b04f1e41d78fc) | Method |
| [`RegisterTexture`](#api-ef47927c942a92aa) | Method |
| [`Render`](#api-684d844b76f6744c) | Method |
| [`SetAttribute`](#api-3e477f7200790921) | Method |
| [`SetClass`](#api-5f62223b5018b9de) | Method |
| [`SetContent`](#api-783634dfe73db3b6) | Method |
| [`SetText`](#api-a3e4e6c2436530b2) | Method |
| [`SetViewport`](#api-fa51eb078eecce97) | Method |
| [`ShowDocument`](#api-6d92d4c3cc2616f4) | Method |
| [`Update`](#api-6f6c0661f7fd58aa) | Method |
| [`Update`](#api-56fb8364a03f6cb0) | Method |

## Type declaration

<a id="api-e3f5c1e5224944c3"></a>
<!-- api: T:InnoEngine.UI.UI fe9f502baea672005d3cd440940eb6ad98669efc7e9260438accff1ead2e2c5b -->

```csharp
public static class InnoEngine.UI.UI
```

Provides script-friendly retained-mode UI operations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UI.cs#L39).

## `CloseDocument`

<a id="api-ba9a6bb43e6e1012"></a>
<!-- api: M:InnoEngine.UI.UI.CloseDocument(InnoEngine.UI.UiContextHandle,InnoEngine.UI.UiDocumentHandle) 7373942332c67ee4c2ef91fab4babdf3a831af77dcc616c7ecd17c98f47715af -->

```csharp
public static void InnoEngine.UI.UI.CloseDocument(InnoEngine.UI.UiContextHandle context, InnoEngine.UI.UiDocumentHandle document)
```

Closes one document.

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `document`:** The document consumed by close document; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UI.cs#L151).

## `CreateContext`

<a id="api-31f0ec9e23fcd90b"></a>
<!-- api: M:InnoEngine.UI.UI.CreateContext(InnoEngine.UI.UiContextOptions) 5cc9a00a3c5813659eac823308f79201c355061e65bde770e94b3b8093ccc707 -->

```csharp
public static InnoEngine.UI.UiContextHandle InnoEngine.UI.UI.CreateContext(InnoEngine.UI.UiContextOptions options)
```

Creates one independent UI context.

**Parameter `options`:** The validated configuration that controls this operation.

**Returns:** The validated ui context handle that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UI.cs#L50).

## `DestroyContext`

<a id="api-c9946dd4256203b1"></a>
<!-- api: M:InnoEngine.UI.UI.DestroyContext(InnoEngine.UI.UiContextHandle) 507e12e03f2fdc9a2e32b8808bbf4c877702f418f24b79ead73bebbfde796c80 -->

```csharp
public static void InnoEngine.UI.UI.DestroyContext(InnoEngine.UI.UiContextHandle context)
```

Destroys one UI context and all owned documents.

**Parameter `context`:** The context that supplies state and services for this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UI.cs#L57).

## `DrainEvents`

<a id="api-14a9bd81eaa476f2"></a>
<!-- api: M:InnoEngine.UI.UI.DrainEvents(InnoEngine.UI.UiContextHandle) 5b878c50a6f14bc91f4d8489d307848c779df42652f7b04c06e47c58d633c4f1 -->

```csharp
public static System.Collections.Generic.IReadOnlyList<InnoEngine.UI.UiEvent> InnoEngine.UI.UI.DrainEvents(InnoEngine.UI.UiContextHandle context)
```

Drains document events queued by preceding updates.

**Parameter `context`:** The context that supplies state and services for this operation.

**Returns:** An immutable snapshot of the values selected by the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UI.cs#L321).

## `HideDocument`

<a id="api-f7b8c92ea7bfc24c"></a>
<!-- api: M:InnoEngine.UI.UI.HideDocument(InnoEngine.UI.UiContextHandle,InnoEngine.UI.UiDocumentHandle) aba830e5216d617b15d6cad3ef74cfbd11df0a36bc5620b5200dde96f0106495 -->

```csharp
public static void InnoEngine.UI.UI.HideDocument(InnoEngine.UI.UiContextHandle context, InnoEngine.UI.UiDocumentHandle document)
```

Hides one document.

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `document`:** The document consumed by hide document; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UI.cs#L137).

## `LoadDocument`

<a id="api-2037f13c0054eee6"></a>
<!-- api: M:InnoEngine.UI.UI.LoadDocument(InnoEngine.UI.UiContextHandle,InnoEngine.UI.UiDocumentAsset) 91aab9e0994fee3540dc0668e64734ce81eba185e8f5a99f61a43784d3d858eb -->

```csharp
public static InnoEngine.UI.UiDocumentHandle InnoEngine.UI.UI.LoadDocument(InnoEngine.UI.UiContextHandle context, InnoEngine.UI.UiDocumentAsset document)
```

Loads one imported document compatible with the selected backend.

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `document`:** The document consumed by load document; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated ui document handle that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UI.cs#L109).

## `LoadDocument`

<a id="api-685b04f1e41d78fc"></a>
<!-- api: M:InnoEngine.UI.UI.LoadDocument(InnoEngine.UI.UiContextHandle,InnoEngine.UI.UiDocumentSource) 03aba625938da2bdb44495a84c488ab58814f0564e9b6c531d467b0b00c29210 -->

```csharp
public static InnoEngine.UI.UiDocumentHandle InnoEngine.UI.UI.LoadDocument(InnoEngine.UI.UiContextHandle context, InnoEngine.UI.UiDocumentSource source)
```

Loads one explicitly tagged in-memory document.

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `source`:** The source value or location read by this operation.

**Returns:** The validated ui document handle that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UI.cs#L92).

## `RegisterTexture`

<a id="api-ef47927c942a92aa"></a>
<!-- api: M:InnoEngine.UI.UI.RegisterTexture(InnoEngine.UI.UiContextHandle,System.String,InnoEngine.UI.UiTextureData) 105140d9e3115f1cd5e7ba63e37938e34ba55ac07d198d6713a4851b87b75ca4 -->

```csharp
public static void InnoEngine.UI.UI.RegisterTexture(InnoEngine.UI.UiContextHandle context, string source, InnoEngine.UI.UiTextureData texture)
```

Registers one named RGBA8 texture source.

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `source`:** The source value or location read by this operation.

**Parameter `texture`:** The texture consumed by register texture; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UI.cs#L276).

## `Render`

<a id="api-684d844b76f6744c"></a>
<!-- api: M:InnoEngine.UI.UI.Render(InnoEngine.UI.UiContextHandle) 7b25bffbd3d51c49ccf334a42f071ab6344262bd96f16ea47a02c4e3bb4367a5 -->

```csharp
public static InnoEngine.UI.UiRenderFrame InnoEngine.UI.UI.Render(InnoEngine.UI.UiContextHandle context)
```

Builds an immutable frame of incremental resources and ordered draws.

**Parameter `context`:** The context that supplies state and services for this operation.

**Returns:** The validated ui render frame that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UI.cs#L311).

## `SetAttribute`

<a id="api-3e477f7200790921"></a>
<!-- api: M:InnoEngine.UI.UI.SetAttribute(InnoEngine.UI.UiContextHandle,InnoEngine.UI.UiDocumentHandle,System.String,System.String,System.String) e4d9951acc7829b7b1f08f97459d4e774d4fb6ffe460ac4032b25e20c6934248 -->

```csharp
public static bool InnoEngine.UI.UI.SetAttribute(InnoEngine.UI.UiContextHandle context, InnoEngine.UI.UiDocumentHandle document, string elementId, string name, string value)
```

Sets one element attribute.

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `document`:** The document consumed by set attribute; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `elementId`:** The element id text validated by the set attribute operation.

**Parameter `name`:** The human-readable name used for presentation and diagnostics.

**Parameter `value`:** The concrete value read or transformed by this operation.

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UI.cs#L227).

## `SetClass`

<a id="api-5f62223b5018b9de"></a>
<!-- api: M:InnoEngine.UI.UI.SetClass(InnoEngine.UI.UiContextHandle,InnoEngine.UI.UiDocumentHandle,System.String,System.String,System.Boolean) e3581a3470f0ec7a8a03344b1614d650bc9fade226d4ee11016ee2e7419e359d -->

```csharp
public static bool InnoEngine.UI.UI.SetClass(InnoEngine.UI.UiContextHandle context, InnoEngine.UI.UiDocumentHandle document, string elementId, string className, bool active)
```

Activates or deactivates one element class.

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `document`:** The document consumed by set class; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `elementId`:** The element id text validated by the set class operation.

**Parameter `className`:** The class name text validated by the set class operation.

**Parameter `active`:** Whether active behavior is enabled while set class executes.

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UI.cs#L256).

## `SetContent`

<a id="api-783634dfe73db3b6"></a>
<!-- api: M:InnoEngine.UI.UI.SetContent(InnoEngine.UI.UiContextHandle,InnoEngine.UI.UiDocumentHandle,System.String,InnoEngine.UI.UiDocumentFragment) 301ead9cbc78f9a389a7375c3a19ef6f3f3b6e21e70db4fb9f450c942bfff607 -->

```csharp
public static bool InnoEngine.UI.UI.SetContent(InnoEngine.UI.UiContextHandle context, InnoEngine.UI.UiDocumentHandle document, string elementId, InnoEngine.UI.UiDocumentFragment fragment)
```

Replaces an element's children with an explicitly tagged source-language fragment.

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `document`:** The document consumed by set content; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `elementId`:** The element id text validated by the set content operation.

**Parameter `fragment`:** The fragment consumed by set content; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UI.cs#L199).

## `SetText`

<a id="api-a3e4e6c2436530b2"></a>
<!-- api: M:InnoEngine.UI.UI.SetText(InnoEngine.UI.UiContextHandle,InnoEngine.UI.UiDocumentHandle,System.String,System.String) 975670ccd9fb6b4299b0af92e9756aa27515ba1020333aa5c1ca2ec6226ad0d7 -->

```csharp
public static bool InnoEngine.UI.UI.SetText(InnoEngine.UI.UiContextHandle context, InnoEngine.UI.UiDocumentHandle document, string elementId, string text)
```

Replaces an element's children with plain Unicode text.

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `document`:** The document consumed by set text; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `elementId`:** The element id text validated by the set text operation.

**Parameter `text`:** The text text validated by the set text operation.

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UI.cs#L174).

## `SetViewport`

<a id="api-fa51eb078eecce97"></a>
<!-- api: M:InnoEngine.UI.UI.SetViewport(InnoEngine.UI.UiContextHandle,System.Int32,System.Int32,System.Single) 1e8b7d3f71ffac2022397289a2c5381e464e96ffe506cbc65ea18d3204b28983 -->

```csharp
public static void InnoEngine.UI.UI.SetViewport(InnoEngine.UI.UiContextHandle context, int width, int height, float density = 1)
```

Changes one context's pixel dimensions and density.

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `width`:** The width in logical units or pixels required by this operation.

**Parameter `height`:** The height in logical units or pixels required by this operation.

**Parameter `density`:** The density consumed by set viewport; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UI.cs#L73).

## `ShowDocument`

<a id="api-6d92d4c3cc2616f4"></a>
<!-- api: M:InnoEngine.UI.UI.ShowDocument(InnoEngine.UI.UiContextHandle,InnoEngine.UI.UiDocumentHandle) 0e0e6e93eb5e25b8374fa3383855fcf87f29c544f34a7812f327cb36ccd00978 -->

```csharp
public static void InnoEngine.UI.UI.ShowDocument(InnoEngine.UI.UiContextHandle context, InnoEngine.UI.UiDocumentHandle document)
```

Shows one document.

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `document`:** The document consumed by show document; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UI.cs#L123).

## `Update`

<a id="api-6f6c0661f7fd58aa"></a>
<!-- api: M:InnoEngine.UI.UI.Update(InnoEngine.UI.UiContextHandle,InnoEngine.UI.UiInputSnapshot) e6f703308ea869c0c1e04f284171888170ed5fff8b3fb50edae6972b2485f9a6 -->

```csharp
public static void InnoEngine.UI.UI.Update(InnoEngine.UI.UiContextHandle context, InnoEngine.UI.UiInputSnapshot input)
```

Advances one context with explicitly routed viewport-local input.

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `input`:** The input consumed by update; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UI.cs#L298).

## `Update`

<a id="api-56fb8364a03f6cb0"></a>
<!-- api: M:InnoEngine.UI.UI.Update(InnoEngine.UI.UiContextHandle) e293734092b0aa76e749dd53003a1d1487b1b34229445ffe3b01a87844966312 -->

```csharp
public static void InnoEngine.UI.UI.Update(InnoEngine.UI.UiContextHandle context)
```

Processes current-frame input and advances one context.

**Parameter `context`:** The context that supplies state and services for this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UI.cs#L288).
