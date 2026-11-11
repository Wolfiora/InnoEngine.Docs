---
title: "UiNativeContext.RawApi"
description: "Reference for UiNativeContext.RawApi in Inno.Native.UI."
uid: api.inno.native.ui.a38141ba0e7b125a
kind: api
owners:
  - Inno.Native.UI
apiSurface: source-clr
contracts:
  - project.inno-native-ui#abi-and-ownership-contract
---
# `UiNativeContext.RawApi`

This reference describes `UiNativeContext.RawApi` in `Inno.Native.UI`. Read the [shared contract](../../projects/inno-native-ui.md#abi-and-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`BgcsInnoRmluiErrorMessage`](#api-a362ffaada7c8689) | Method |
| [`BgcsInnoRmluiErrorRelease`](#api-7ec5d82ff4d26bc1) | Method |
| [`ClearEvents`](#api-83ea297bbd38636e) | Method |
| [`CloseDocument`](#api-5c58ec687dd1b9df) | Method |
| [`CopyCommands`](#api-57c9719d5baf6b5f) | Method |
| [`CopyEventTargetId`](#api-b8d5fc9eb1adbeb6) | Method |
| [`CopyMeshIndices`](#api-42ae656fc7cb5c85) | Method |
| [`CopyMeshVertices`](#api-3c48cff10b33035e) | Method |
| [`CopyReleasedMeshes`](#api-2c4fad6ee3d1f47b) | Method |
| [`CopyReleasedTextures`](#api-e3efa47dc92daa6a) | Method |
| [`CopyTexturePixels`](#api-8831d85bb497ea40) | Method |
| [`CreateContext`](#api-d0c61c9a1682d5b5) | Method |
| [`CreateRuntime`](#api-4a508bc8798f2ade) | Method |
| [`DestroyContext`](#api-0f632cd3ddb870f1) | Method |
| [`DestroyRuntime`](#api-c9e3f25a24e22fe8) | Method |
| [`FinishFrame`](#api-5b8f529d32dd6b43) | Method |
| [`GetEventCount`](#api-9510cbc8a546595d) | Method |
| [`GetEventInfo`](#api-a33aa8aba489a7a0) | Method |
| [`GetMeshInfo`](#api-0f077fc88cb87a2a) | Method |
| [`GetTextureInfo`](#api-8bd865b83c74be81) | Method |
| [`HasElementAtPoint`](#api-e9081d9ea46717f2) | Method |
| [`HideDocument`](#api-5ddc5d1fc7fb292c) | Method |
| [`LoadDocument`](#api-fee3372bf58f69af) | Method |
| [`LoadFont`](#api-2b09e1b982ca891d) | Method |
| [`ProcessKey`](#api-e8bfa5c5e3cd2268) | Method |
| [`ProcessMouseButton`](#api-a8870e2b14ed6a4d) | Method |
| [`ProcessMouseMove`](#api-e8e37ea651671637) | Method |
| [`ProcessMouseWheel`](#api-a61a7d61f4162d14) | Method |
| [`ProcessText`](#api-54c1361e290ab73e) | Method |
| [`RegisterTexture`](#api-6cd63b9c9063eb00) | Method |
| [`Render`](#api-b1a345719b691682) | Method |
| [`SetAttribute`](#api-4e727ac8ae6fd495) | Method |
| [`SetClass`](#api-753103148f25a7dc) | Method |
| [`SetInnerMarkup`](#api-375d83bfdbc81e00) | Method |
| [`SetViewport`](#api-a8a3a33c67aa489a) | Method |
| [`ShowDocument`](#api-9788b1e05fd14801) | Method |
| [`Update`](#api-abcd307dd41fea97) | Method |

## Type declaration

<a id="api-a38141ba0e7b125a"></a>
<!-- api: T:Inno.Native.UI.UiNativeContext.RawApi e0f413b31854f28056c28e7528ea2f6c5d1c7ce93dee6d1223951f7fb4b61120 -->

```csharp
public sealed class Inno.Native.UI.UiNativeContext.RawApi
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L247).

## `BgcsInnoRmluiErrorMessage`

<a id="api-a362ffaada7c8689"></a>
<!-- api: M:Inno.Native.UI.UiNativeContext.RawApi.BgcsInnoRmluiErrorMessage(Inno.Native.UI.BgcsInnoRmluiError*) c965eb131b036a6dcd7312bbb0ed43996c93da6900072486c75b48d51c72a738 -->

```csharp
public sbyte* Inno.Native.UI.UiNativeContext.RawApi.BgcsInnoRmluiErrorMessage(Inno.Native.UI.BgcsInnoRmluiError* error)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L541).

## `BgcsInnoRmluiErrorRelease`

<a id="api-7ec5d82ff4d26bc1"></a>
<!-- api: M:Inno.Native.UI.UiNativeContext.RawApi.BgcsInnoRmluiErrorRelease(Inno.Native.UI.BgcsInnoRmluiError*) 6a2e905d8b6b0a885cdf5141865963e7bb3ad70c65aca044b5eeb49ac7ffb596 -->

```csharp
public void Inno.Native.UI.UiNativeContext.RawApi.BgcsInnoRmluiErrorRelease(Inno.Native.UI.BgcsInnoRmluiError* error)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L533).

## `ClearEvents`

<a id="api-83ea297bbd38636e"></a>
<!-- api: M:Inno.Native.UI.UiNativeContext.RawApi.ClearEvents(Inno.Native.UI.InnoUIRmlUiAdapterRuntime*,System.UInt64,Inno.Native.UI.Result*,Inno.Native.UI.BgcsInnoRmluiError**) 52acde26c07b6d31618987314f7e834af660926c06899e575b20d8411d726bea -->

```csharp
public int Inno.Native.UI.UiNativeContext.RawApi.ClearEvents(Inno.Native.UI.InnoUIRmlUiAdapterRuntime* bgcs_self, ulong context, Inno.Native.UI.Result* bgcs_result, Inno.Native.UI.BgcsInnoRmluiError** bgcs_error)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L253).

## `CloseDocument`

<a id="api-5c58ec687dd1b9df"></a>
<!-- api: M:Inno.Native.UI.UiNativeContext.RawApi.CloseDocument(Inno.Native.UI.InnoUIRmlUiAdapterRuntime*,System.UInt64,System.UInt64,Inno.Native.UI.Result*,Inno.Native.UI.BgcsInnoRmluiError**) 09f7882c39bda1934ae52add32da9834e404366016fad35325a1297f575bbb3f -->

```csharp
public int Inno.Native.UI.UiNativeContext.RawApi.CloseDocument(Inno.Native.UI.InnoUIRmlUiAdapterRuntime* bgcs_self, ulong context, ulong document, Inno.Native.UI.Result* bgcs_result, Inno.Native.UI.BgcsInnoRmluiError** bgcs_error)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L261).

## `CopyCommands`

<a id="api-57c9719d5baf6b5f"></a>
<!-- api: M:Inno.Native.UI.UiNativeContext.RawApi.CopyCommands(Inno.Native.UI.InnoUIRmlUiAdapterRuntime*,System.UInt64,Inno.Native.UI.InnoUIRmlUiAdapterDrawCommandNative*,System.UInt64,Inno.Native.UI.Result*,Inno.Native.UI.BgcsInnoRmluiError**) baac29adcb39bd08c686e6bfb3e4dccce97a9da9d858a673f0d14305e187a712 -->

```csharp
public int Inno.Native.UI.UiNativeContext.RawApi.CopyCommands(Inno.Native.UI.InnoUIRmlUiAdapterRuntime* bgcs_self, ulong context, Inno.Native.UI.InnoUIRmlUiAdapterDrawCommandNative* commands, ulong command_capacity, Inno.Native.UI.Result* bgcs_result, Inno.Native.UI.BgcsInnoRmluiError** bgcs_error)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L269).

## `CopyEventTargetId`

<a id="api-b8d5fc9eb1adbeb6"></a>
<!-- api: M:Inno.Native.UI.UiNativeContext.RawApi.CopyEventTargetId(Inno.Native.UI.InnoUIRmlUiAdapterRuntime*,System.UInt64,System.UInt64,System.SByte*,System.UInt64,Inno.Native.UI.Result*,Inno.Native.UI.BgcsInnoRmluiError**) 48edd25a3b7d70146c5db462a03861813e6c459252f4c71418c09a522f5114f3 -->

```csharp
public int Inno.Native.UI.UiNativeContext.RawApi.CopyEventTargetId(Inno.Native.UI.InnoUIRmlUiAdapterRuntime* bgcs_self, ulong context, ulong index, sbyte* target_id, ulong target_capacity, Inno.Native.UI.Result* bgcs_result, Inno.Native.UI.BgcsInnoRmluiError** bgcs_error)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L277).

## `CopyMeshIndices`

<a id="api-42ae656fc7cb5c85"></a>
<!-- api: M:Inno.Native.UI.UiNativeContext.RawApi.CopyMeshIndices(Inno.Native.UI.InnoUIRmlUiAdapterRuntime*,System.UInt64,System.UInt64,System.UInt32*,System.UInt64,Inno.Native.UI.Result*,Inno.Native.UI.BgcsInnoRmluiError**) fe08e08dae1cb7303eb3ae099f260152f46afeb72851b2f871128367f77291da -->

```csharp
public int Inno.Native.UI.UiNativeContext.RawApi.CopyMeshIndices(Inno.Native.UI.InnoUIRmlUiAdapterRuntime* bgcs_self, ulong context, ulong mesh, uint* indices, ulong index_capacity, Inno.Native.UI.Result* bgcs_result, Inno.Native.UI.BgcsInnoRmluiError** bgcs_error)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L285).

## `CopyMeshVertices`

<a id="api-3c48cff10b33035e"></a>
<!-- api: M:Inno.Native.UI.UiNativeContext.RawApi.CopyMeshVertices(Inno.Native.UI.InnoUIRmlUiAdapterRuntime*,System.UInt64,System.UInt64,Inno.Native.UI.InnoUIRmlUiAdapterVertexNative*,System.UInt64,Inno.Native.UI.Result*,Inno.Native.UI.BgcsInnoRmluiError**) c2fa8fa334762a5afb2f73e91c38f31853362320d8e16c7161985f74b156a1c9 -->

```csharp
public int Inno.Native.UI.UiNativeContext.RawApi.CopyMeshVertices(Inno.Native.UI.InnoUIRmlUiAdapterRuntime* bgcs_self, ulong context, ulong mesh, Inno.Native.UI.InnoUIRmlUiAdapterVertexNative* vertices, ulong vertex_capacity, Inno.Native.UI.Result* bgcs_result, Inno.Native.UI.BgcsInnoRmluiError** bgcs_error)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L293).

## `CopyReleasedMeshes`

<a id="api-2c4fad6ee3d1f47b"></a>
<!-- api: M:Inno.Native.UI.UiNativeContext.RawApi.CopyReleasedMeshes(Inno.Native.UI.InnoUIRmlUiAdapterRuntime*,System.UInt64,System.UInt64*,System.UInt64,Inno.Native.UI.Result*,Inno.Native.UI.BgcsInnoRmluiError**) d25f382ce46691b3b49ec37e1d861662b7f8cdb5f4bcfac204f4ebbbc84b746f -->

```csharp
public int Inno.Native.UI.UiNativeContext.RawApi.CopyReleasedMeshes(Inno.Native.UI.InnoUIRmlUiAdapterRuntime* bgcs_self, ulong context, ulong* meshes, ulong mesh_capacity, Inno.Native.UI.Result* bgcs_result, Inno.Native.UI.BgcsInnoRmluiError** bgcs_error)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L301).

## `CopyReleasedTextures`

<a id="api-e3efa47dc92daa6a"></a>
<!-- api: M:Inno.Native.UI.UiNativeContext.RawApi.CopyReleasedTextures(Inno.Native.UI.InnoUIRmlUiAdapterRuntime*,System.UInt64,System.UInt64*,System.UInt64,Inno.Native.UI.Result*,Inno.Native.UI.BgcsInnoRmluiError**) da819c5ab179441dee3237da427ce6eee4d2420baafd5d6d69e709e90c473150 -->

```csharp
public int Inno.Native.UI.UiNativeContext.RawApi.CopyReleasedTextures(Inno.Native.UI.InnoUIRmlUiAdapterRuntime* bgcs_self, ulong context, ulong* textures, ulong texture_capacity, Inno.Native.UI.Result* bgcs_result, Inno.Native.UI.BgcsInnoRmluiError** bgcs_error)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L309).

## `CopyTexturePixels`

<a id="api-8831d85bb497ea40"></a>
<!-- api: M:Inno.Native.UI.UiNativeContext.RawApi.CopyTexturePixels(Inno.Native.UI.InnoUIRmlUiAdapterRuntime*,System.UInt64,System.UInt64,System.Byte*,System.UInt64,Inno.Native.UI.Result*,Inno.Native.UI.BgcsInnoRmluiError**) 804048f4507cbe7b67ac033271e458b84315735e34c3ef89eca1b7592f39525a -->

```csharp
public int Inno.Native.UI.UiNativeContext.RawApi.CopyTexturePixels(Inno.Native.UI.InnoUIRmlUiAdapterRuntime* bgcs_self, ulong context, ulong texture, byte* pixels, ulong pixel_capacity, Inno.Native.UI.Result* bgcs_result, Inno.Native.UI.BgcsInnoRmluiError** bgcs_error)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L317).

## `CreateContext`

<a id="api-d0c61c9a1682d5b5"></a>
<!-- api: M:Inno.Native.UI.UiNativeContext.RawApi.CreateContext(Inno.Native.UI.InnoUIRmlUiAdapterRuntime*,System.SByte*,System.Int32,System.Int32,System.Single,System.UInt64*,Inno.Native.UI.Result*,Inno.Native.UI.BgcsInnoRmluiError**) dd5479a921fc0536a85ce6e3a4c31a79386d6cbf0a147bb0c6db72a70f002d25 -->

```csharp
public int Inno.Native.UI.UiNativeContext.RawApi.CreateContext(Inno.Native.UI.InnoUIRmlUiAdapterRuntime* bgcs_self, sbyte* name, int width, int height, float density, ulong* context, Inno.Native.UI.Result* bgcs_result, Inno.Native.UI.BgcsInnoRmluiError** bgcs_error)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L325).

## `CreateRuntime`

<a id="api-4a508bc8798f2ade"></a>
<!-- api: M:Inno.Native.UI.UiNativeContext.RawApi.CreateRuntime(Inno.Native.UI.InnoUIRmlUiAdapterRuntime**,Inno.Native.UI.BgcsInnoRmluiError**) 95ef96521ae047a656c71f23a180218cbda1213e4812d76b6cf01afeb7715cac -->

```csharp
public int Inno.Native.UI.UiNativeContext.RawApi.CreateRuntime(Inno.Native.UI.InnoUIRmlUiAdapterRuntime** bgcs_result, Inno.Native.UI.BgcsInnoRmluiError** bgcs_error)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L469).

## `DestroyContext`

<a id="api-0f632cd3ddb870f1"></a>
<!-- api: M:Inno.Native.UI.UiNativeContext.RawApi.DestroyContext(Inno.Native.UI.InnoUIRmlUiAdapterRuntime*,System.UInt64,Inno.Native.UI.Result*,Inno.Native.UI.BgcsInnoRmluiError**) 022ce3e3913a752fd416f1ad78a0d1a4d0c1913a8feff34c0c22f64109b776b7 -->

```csharp
public int Inno.Native.UI.UiNativeContext.RawApi.DestroyContext(Inno.Native.UI.InnoUIRmlUiAdapterRuntime* bgcs_self, ulong context, Inno.Native.UI.Result* bgcs_result, Inno.Native.UI.BgcsInnoRmluiError** bgcs_error)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L333).

## `DestroyRuntime`

<a id="api-c9e3f25a24e22fe8"></a>
<!-- api: M:Inno.Native.UI.UiNativeContext.RawApi.DestroyRuntime(Inno.Native.UI.InnoUIRmlUiAdapterRuntime*,Inno.Native.UI.BgcsInnoRmluiError**) 35d48a3047265ae8d94e6aa94563b8b77cca9d30fc7f7cff2dea2bb71cee4c21 -->

```csharp
public int Inno.Native.UI.UiNativeContext.RawApi.DestroyRuntime(Inno.Native.UI.InnoUIRmlUiAdapterRuntime* bgcs_self, Inno.Native.UI.BgcsInnoRmluiError** bgcs_error)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L525).

## `FinishFrame`

<a id="api-5b8f529d32dd6b43"></a>
<!-- api: M:Inno.Native.UI.UiNativeContext.RawApi.FinishFrame(Inno.Native.UI.InnoUIRmlUiAdapterRuntime*,System.UInt64,Inno.Native.UI.Result*,Inno.Native.UI.BgcsInnoRmluiError**) 4ed2f7d391b40e997217e4ba74b4789fd06c43c78ee85ccc8c9f00367685eaa1 -->

```csharp
public int Inno.Native.UI.UiNativeContext.RawApi.FinishFrame(Inno.Native.UI.InnoUIRmlUiAdapterRuntime* bgcs_self, ulong context, Inno.Native.UI.Result* bgcs_result, Inno.Native.UI.BgcsInnoRmluiError** bgcs_error)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L341).

## `GetEventCount`

<a id="api-9510cbc8a546595d"></a>
<!-- api: M:Inno.Native.UI.UiNativeContext.RawApi.GetEventCount(Inno.Native.UI.InnoUIRmlUiAdapterRuntime*,System.UInt64,System.UInt64*,Inno.Native.UI.Result*,Inno.Native.UI.BgcsInnoRmluiError**) 4ebf0c951e7d0aefa04b774b9b199430f178f1d022e5783fdf20788738487bf1 -->

```csharp
public int Inno.Native.UI.UiNativeContext.RawApi.GetEventCount(Inno.Native.UI.InnoUIRmlUiAdapterRuntime* bgcs_self, ulong context, ulong* count, Inno.Native.UI.Result* bgcs_result, Inno.Native.UI.BgcsInnoRmluiError** bgcs_error)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L349).

## `GetEventInfo`

<a id="api-a33aa8aba489a7a0"></a>
<!-- api: M:Inno.Native.UI.UiNativeContext.RawApi.GetEventInfo(Inno.Native.UI.InnoUIRmlUiAdapterRuntime*,System.UInt64,System.UInt64,Inno.Native.UI.InnoUIRmlUiAdapterEventInfoNative*,Inno.Native.UI.Result*,Inno.Native.UI.BgcsInnoRmluiError**) 8305bfd091b4880933c5dee4da52eabc29a4a396ce4b57ca2f43175add0b6539 -->

```csharp
public int Inno.Native.UI.UiNativeContext.RawApi.GetEventInfo(Inno.Native.UI.InnoUIRmlUiAdapterRuntime* bgcs_self, ulong context, ulong index, Inno.Native.UI.InnoUIRmlUiAdapterEventInfoNative* event_info, Inno.Native.UI.Result* bgcs_result, Inno.Native.UI.BgcsInnoRmluiError** bgcs_error)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L357).

## `GetMeshInfo`

<a id="api-0f077fc88cb87a2a"></a>
<!-- api: M:Inno.Native.UI.UiNativeContext.RawApi.GetMeshInfo(Inno.Native.UI.InnoUIRmlUiAdapterRuntime*,System.UInt64,System.UInt64,Inno.Native.UI.InnoUIRmlUiAdapterMeshInfoNative*,Inno.Native.UI.Result*,Inno.Native.UI.BgcsInnoRmluiError**) b04f04e2dfd8022f1f206ec9524634dc885cb90a32e54b4dd8452fe487d4cc92 -->

```csharp
public int Inno.Native.UI.UiNativeContext.RawApi.GetMeshInfo(Inno.Native.UI.InnoUIRmlUiAdapterRuntime* bgcs_self, ulong context, ulong index, Inno.Native.UI.InnoUIRmlUiAdapterMeshInfoNative* mesh, Inno.Native.UI.Result* bgcs_result, Inno.Native.UI.BgcsInnoRmluiError** bgcs_error)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L365).

## `GetTextureInfo`

<a id="api-8bd865b83c74be81"></a>
<!-- api: M:Inno.Native.UI.UiNativeContext.RawApi.GetTextureInfo(Inno.Native.UI.InnoUIRmlUiAdapterRuntime*,System.UInt64,System.UInt64,Inno.Native.UI.InnoUIRmlUiAdapterTextureInfoNative*,Inno.Native.UI.Result*,Inno.Native.UI.BgcsInnoRmluiError**) ffbc8e5be9fe20f7dc89b4a694c681a0dd4eaf2be0b52b169c2451f1505f5b98 -->

```csharp
public int Inno.Native.UI.UiNativeContext.RawApi.GetTextureInfo(Inno.Native.UI.InnoUIRmlUiAdapterRuntime* bgcs_self, ulong context, ulong index, Inno.Native.UI.InnoUIRmlUiAdapterTextureInfoNative* texture, Inno.Native.UI.Result* bgcs_result, Inno.Native.UI.BgcsInnoRmluiError** bgcs_error)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L373).

## `HasElementAtPoint`

<a id="api-e9081d9ea46717f2"></a>
<!-- api: M:Inno.Native.UI.UiNativeContext.RawApi.HasElementAtPoint(Inno.Native.UI.InnoUIRmlUiAdapterRuntime*,System.UInt64,System.Int32,System.Int32,System.Byte*,Inno.Native.UI.Result*,Inno.Native.UI.BgcsInnoRmluiError**) abc329f23a217dcc85456151634325e7414eaffb9bfeae4f7306bb477aec5a0b -->

```csharp
public int Inno.Native.UI.UiNativeContext.RawApi.HasElementAtPoint(Inno.Native.UI.InnoUIRmlUiAdapterRuntime* bgcs_self, ulong context, int x, int y, byte* hit, Inno.Native.UI.Result* bgcs_result, Inno.Native.UI.BgcsInnoRmluiError** bgcs_error)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L381).

## `HideDocument`

<a id="api-5ddc5d1fc7fb292c"></a>
<!-- api: M:Inno.Native.UI.UiNativeContext.RawApi.HideDocument(Inno.Native.UI.InnoUIRmlUiAdapterRuntime*,System.UInt64,System.UInt64,Inno.Native.UI.Result*,Inno.Native.UI.BgcsInnoRmluiError**) 2d0b8a5dbe4845296858699cc01f54519d070b7878902fe5ad0f4d1de20a073c -->

```csharp
public int Inno.Native.UI.UiNativeContext.RawApi.HideDocument(Inno.Native.UI.InnoUIRmlUiAdapterRuntime* bgcs_self, ulong context, ulong document, Inno.Native.UI.Result* bgcs_result, Inno.Native.UI.BgcsInnoRmluiError** bgcs_error)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L389).

## `LoadDocument`

<a id="api-fee3372bf58f69af"></a>
<!-- api: M:Inno.Native.UI.UiNativeContext.RawApi.LoadDocument(Inno.Native.UI.InnoUIRmlUiAdapterRuntime*,System.UInt64,System.SByte*,System.SByte*,System.UInt64*,Inno.Native.UI.Result*,Inno.Native.UI.BgcsInnoRmluiError**) b0ffa19757beccd14675a5a9fdb0cfaed99cd3a7087a6a738a02a9844cda4735 -->

```csharp
public int Inno.Native.UI.UiNativeContext.RawApi.LoadDocument(Inno.Native.UI.InnoUIRmlUiAdapterRuntime* bgcs_self, ulong context, sbyte* markup, sbyte* source_url, ulong* document, Inno.Native.UI.Result* bgcs_result, Inno.Native.UI.BgcsInnoRmluiError** bgcs_error)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L397).

## `LoadFont`

<a id="api-2b09e1b982ca891d"></a>
<!-- api: M:Inno.Native.UI.UiNativeContext.RawApi.LoadFont(Inno.Native.UI.InnoUIRmlUiAdapterRuntime*,System.Byte*,System.UInt64,System.SByte*,System.Int32,System.Int32,System.Byte,Inno.Native.UI.Result*,Inno.Native.UI.BgcsInnoRmluiError**) ace6c7249556ead7cac14c3780ff4cbc2d2d3e3efb4d8d7c86534a9e1c668a32 -->

```csharp
public int Inno.Native.UI.UiNativeContext.RawApi.LoadFont(Inno.Native.UI.InnoUIRmlUiAdapterRuntime* bgcs_self, byte* data, ulong data_length, sbyte* family, int style, int weight, byte fallback, Inno.Native.UI.Result* bgcs_result, Inno.Native.UI.BgcsInnoRmluiError** bgcs_error)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L405).

## `ProcessKey`

<a id="api-e8bfa5c5e3cd2268"></a>
<!-- api: M:Inno.Native.UI.UiNativeContext.RawApi.ProcessKey(Inno.Native.UI.InnoUIRmlUiAdapterRuntime*,System.UInt64,System.Int32,System.Byte,System.Int32,Inno.Native.UI.Result*,Inno.Native.UI.BgcsInnoRmluiError**) e3a5ce0fdb8867c3fa35e4a0b7884cc7f0b29c2626799432007d362535007509 -->

```csharp
public int Inno.Native.UI.UiNativeContext.RawApi.ProcessKey(Inno.Native.UI.InnoUIRmlUiAdapterRuntime* bgcs_self, ulong context, int key, byte down, int modifiers, Inno.Native.UI.Result* bgcs_result, Inno.Native.UI.BgcsInnoRmluiError** bgcs_error)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L413).

## `ProcessMouseButton`

<a id="api-a8870e2b14ed6a4d"></a>
<!-- api: M:Inno.Native.UI.UiNativeContext.RawApi.ProcessMouseButton(Inno.Native.UI.InnoUIRmlUiAdapterRuntime*,System.UInt64,System.Int32,System.Byte,System.Int32,Inno.Native.UI.Result*,Inno.Native.UI.BgcsInnoRmluiError**) a4049369db5b18a6d029d4b54f72b8ef24926bbff2232689550c23fff13e729a -->

```csharp
public int Inno.Native.UI.UiNativeContext.RawApi.ProcessMouseButton(Inno.Native.UI.InnoUIRmlUiAdapterRuntime* bgcs_self, ulong context, int button, byte down, int modifiers, Inno.Native.UI.Result* bgcs_result, Inno.Native.UI.BgcsInnoRmluiError** bgcs_error)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L421).

## `ProcessMouseMove`

<a id="api-e8e37ea651671637"></a>
<!-- api: M:Inno.Native.UI.UiNativeContext.RawApi.ProcessMouseMove(Inno.Native.UI.InnoUIRmlUiAdapterRuntime*,System.UInt64,System.Int32,System.Int32,System.Int32,Inno.Native.UI.Result*,Inno.Native.UI.BgcsInnoRmluiError**) e35b8e4fd8e194312f932071c47ccc76f374bf50a5edb7ea5bd0f1efb487b4f6 -->

```csharp
public int Inno.Native.UI.UiNativeContext.RawApi.ProcessMouseMove(Inno.Native.UI.InnoUIRmlUiAdapterRuntime* bgcs_self, ulong context, int x, int y, int modifiers, Inno.Native.UI.Result* bgcs_result, Inno.Native.UI.BgcsInnoRmluiError** bgcs_error)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L429).

## `ProcessMouseWheel`

<a id="api-a61a7d61f4162d14"></a>
<!-- api: M:Inno.Native.UI.UiNativeContext.RawApi.ProcessMouseWheel(Inno.Native.UI.InnoUIRmlUiAdapterRuntime*,System.UInt64,System.Single,System.Single,System.Int32,Inno.Native.UI.Result*,Inno.Native.UI.BgcsInnoRmluiError**) b1a417774f138a944407a834453c1ad7c304036ab88d43722a95551bb7bd9f56 -->

```csharp
public int Inno.Native.UI.UiNativeContext.RawApi.ProcessMouseWheel(Inno.Native.UI.InnoUIRmlUiAdapterRuntime* bgcs_self, ulong context, float x, float y, int modifiers, Inno.Native.UI.Result* bgcs_result, Inno.Native.UI.BgcsInnoRmluiError** bgcs_error)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L437).

## `ProcessText`

<a id="api-54c1361e290ab73e"></a>
<!-- api: M:Inno.Native.UI.UiNativeContext.RawApi.ProcessText(Inno.Native.UI.InnoUIRmlUiAdapterRuntime*,System.UInt64,System.SByte*,Inno.Native.UI.Result*,Inno.Native.UI.BgcsInnoRmluiError**) d531a0cb4a01de4ff33f52726564f198b3ffb6d3b2dc0ded8bc8c646de9c25b7 -->

```csharp
public int Inno.Native.UI.UiNativeContext.RawApi.ProcessText(Inno.Native.UI.InnoUIRmlUiAdapterRuntime* bgcs_self, ulong context, sbyte* text, Inno.Native.UI.Result* bgcs_result, Inno.Native.UI.BgcsInnoRmluiError** bgcs_error)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L445).

## `RegisterTexture`

<a id="api-6cd63b9c9063eb00"></a>
<!-- api: M:Inno.Native.UI.UiNativeContext.RawApi.RegisterTexture(Inno.Native.UI.InnoUIRmlUiAdapterRuntime*,System.UInt64,System.SByte*,System.Int32,System.Int32,System.Byte*,System.UInt64,Inno.Native.UI.Result*,Inno.Native.UI.BgcsInnoRmluiError**) 505a275513e2abddf16415c9c11cd371a389f4d87d311bc443710a3f5e64c6d0 -->

```csharp
public int Inno.Native.UI.UiNativeContext.RawApi.RegisterTexture(Inno.Native.UI.InnoUIRmlUiAdapterRuntime* bgcs_self, ulong context, sbyte* source, int width, int height, byte* pixels, ulong pixel_capacity, Inno.Native.UI.Result* bgcs_result, Inno.Native.UI.BgcsInnoRmluiError** bgcs_error)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L453).

## `Render`

<a id="api-b1a345719b691682"></a>
<!-- api: M:Inno.Native.UI.UiNativeContext.RawApi.Render(Inno.Native.UI.InnoUIRmlUiAdapterRuntime*,System.UInt64,Inno.Native.UI.InnoUIRmlUiAdapterFrameInfoNative*,Inno.Native.UI.Result*,Inno.Native.UI.BgcsInnoRmluiError**) 90106ff41aa6437f444f03e4b9b9084f86c2411499fc8131e66576e5bbf5b35b -->

```csharp
public int Inno.Native.UI.UiNativeContext.RawApi.Render(Inno.Native.UI.InnoUIRmlUiAdapterRuntime* bgcs_self, ulong context, Inno.Native.UI.InnoUIRmlUiAdapterFrameInfoNative* frame, Inno.Native.UI.Result* bgcs_result, Inno.Native.UI.BgcsInnoRmluiError** bgcs_error)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L461).

## `SetAttribute`

<a id="api-4e727ac8ae6fd495"></a>
<!-- api: M:Inno.Native.UI.UiNativeContext.RawApi.SetAttribute(Inno.Native.UI.InnoUIRmlUiAdapterRuntime*,System.UInt64,System.UInt64,System.SByte*,System.SByte*,System.SByte*,System.Byte*,Inno.Native.UI.Result*,Inno.Native.UI.BgcsInnoRmluiError**) eeab440cf01d1f49f40a9ba265251697e9c130d1e0d45bbf44653285e694546e -->

```csharp
public int Inno.Native.UI.UiNativeContext.RawApi.SetAttribute(Inno.Native.UI.InnoUIRmlUiAdapterRuntime* bgcs_self, ulong context, ulong document, sbyte* element_id, sbyte* name, sbyte* value, byte* changed, Inno.Native.UI.Result* bgcs_result, Inno.Native.UI.BgcsInnoRmluiError** bgcs_error)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L477).

## `SetClass`

<a id="api-753103148f25a7dc"></a>
<!-- api: M:Inno.Native.UI.UiNativeContext.RawApi.SetClass(Inno.Native.UI.InnoUIRmlUiAdapterRuntime*,System.UInt64,System.UInt64,System.SByte*,System.SByte*,System.Byte,System.Byte*,Inno.Native.UI.Result*,Inno.Native.UI.BgcsInnoRmluiError**) 3ba0ed82b2e0140755fe2fed94b0b2ce930a1c0bd21db3cf2077b6f2dcd6f678 -->

```csharp
public int Inno.Native.UI.UiNativeContext.RawApi.SetClass(Inno.Native.UI.InnoUIRmlUiAdapterRuntime* bgcs_self, ulong context, ulong document, sbyte* element_id, sbyte* class_name, byte active, byte* changed, Inno.Native.UI.Result* bgcs_result, Inno.Native.UI.BgcsInnoRmluiError** bgcs_error)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L485).

## `SetInnerMarkup`

<a id="api-375d83bfdbc81e00"></a>
<!-- api: M:Inno.Native.UI.UiNativeContext.RawApi.SetInnerMarkup(Inno.Native.UI.InnoUIRmlUiAdapterRuntime*,System.UInt64,System.UInt64,System.SByte*,System.SByte*,System.Byte*,Inno.Native.UI.Result*,Inno.Native.UI.BgcsInnoRmluiError**) e4e457cb3a792d64f5275b74db3b1b13d24b1df963e6058b90ce5ed7a8c72b75 -->

```csharp
public int Inno.Native.UI.UiNativeContext.RawApi.SetInnerMarkup(Inno.Native.UI.InnoUIRmlUiAdapterRuntime* bgcs_self, ulong context, ulong document, sbyte* element_id, sbyte* markup, byte* changed, Inno.Native.UI.Result* bgcs_result, Inno.Native.UI.BgcsInnoRmluiError** bgcs_error)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L493).

## `SetViewport`

<a id="api-a8a3a33c67aa489a"></a>
<!-- api: M:Inno.Native.UI.UiNativeContext.RawApi.SetViewport(Inno.Native.UI.InnoUIRmlUiAdapterRuntime*,System.UInt64,System.Int32,System.Int32,System.Single,Inno.Native.UI.Result*,Inno.Native.UI.BgcsInnoRmluiError**) 6215c918172d7203ff0a4b65b44e08b85c5ca7c56acc669d82a98d019c5b2b1d -->

```csharp
public int Inno.Native.UI.UiNativeContext.RawApi.SetViewport(Inno.Native.UI.InnoUIRmlUiAdapterRuntime* bgcs_self, ulong context, int width, int height, float density, Inno.Native.UI.Result* bgcs_result, Inno.Native.UI.BgcsInnoRmluiError** bgcs_error)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L501).

## `ShowDocument`

<a id="api-9788b1e05fd14801"></a>
<!-- api: M:Inno.Native.UI.UiNativeContext.RawApi.ShowDocument(Inno.Native.UI.InnoUIRmlUiAdapterRuntime*,System.UInt64,System.UInt64,Inno.Native.UI.Result*,Inno.Native.UI.BgcsInnoRmluiError**) 23f9ad83a60a2811b76d312816f1481714d336913701ff74ab1cf3ed9395adb5 -->

```csharp
public int Inno.Native.UI.UiNativeContext.RawApi.ShowDocument(Inno.Native.UI.InnoUIRmlUiAdapterRuntime* bgcs_self, ulong context, ulong document, Inno.Native.UI.Result* bgcs_result, Inno.Native.UI.BgcsInnoRmluiError** bgcs_error)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L509).

## `Update`

<a id="api-abcd307dd41fea97"></a>
<!-- api: M:Inno.Native.UI.UiNativeContext.RawApi.Update(Inno.Native.UI.InnoUIRmlUiAdapterRuntime*,System.UInt64,Inno.Native.UI.Result*,Inno.Native.UI.BgcsInnoRmluiError**) 442781c339430d7bfdc7609f8062c1e8bb9d22ae733c86cb4c0c71b93e71bbe7 -->

```csharp
public int Inno.Native.UI.UiNativeContext.RawApi.Update(Inno.Native.UI.InnoUIRmlUiAdapterRuntime* bgcs_self, ulong context, Inno.Native.UI.Result* bgcs_result, Inno.Native.UI.BgcsInnoRmluiError** bgcs_error)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L517).
