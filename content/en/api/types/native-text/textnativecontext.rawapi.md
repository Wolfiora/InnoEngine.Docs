---
title: "TextNativeContext.RawApi"
description: "Reference for TextNativeContext.RawApi in Inno.Native.Text."
uid: api.inno.native.text.c0906d9eccae2b84
kind: api
owners:
  - Inno.Native.Text
apiSurface: source-clr
contracts:
  - project.inno-native-text#native-lifetime-contract
---
# `TextNativeContext.RawApi`

This reference describes `TextNativeContext.RawApi` in `Inno.Native.Text`. Read the [shared contract](../../projects/inno-native-text.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`BgcsInnoTextErrorMessage`](#api-dd314985c63d0dcb) | Method |
| [`BgcsInnoTextErrorRelease`](#api-b125fc44dd90806f) | Method |
| [`CreateRuntime`](#api-42bf5edeb6bde86b) | Method |
| [`DestroyRuntime`](#api-1e8a307edc0b5416) | Method |
| [`GetMetrics`](#api-451c132bd6915522) | Method |
| [`LoadFont`](#api-88fe4466dbb4624f) | Method |
| [`RasterizeGlyph`](#api-0481f502896ea4b6) | Method |
| [`ReleaseFont`](#api-a364b2a35742c307) | Method |
| [`ResultMessage`](#api-e42f27d633962207) | Method |
| [`ShapeUtf8`](#api-b71efc41f900434e) | Method |

## Type declaration

<a id="api-c0906d9eccae2b84"></a>
<!-- api: T:Inno.Native.Text.TextNativeContext.RawApi c538104bc27f6bdfca6b89f586aa52aad6965420cfdd2ce629469722d95c40bb -->

```csharp
public sealed class Inno.Native.Text.TextNativeContext.RawApi
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/backends/Text/native/Inno.Native.Text/Generated/Bindings.cs#L159).

## `BgcsInnoTextErrorMessage`

<a id="api-dd314985c63d0dcb"></a>
<!-- api: M:Inno.Native.Text.TextNativeContext.RawApi.BgcsInnoTextErrorMessage(Inno.Native.Text.BgcsInnoTextError*) 1be357b1b9dc091858a6693bcb4fc7dd7562a8fef43410cdf0c039b9f0495d9f -->

```csharp
public sbyte* Inno.Native.Text.TextNativeContext.RawApi.BgcsInnoTextErrorMessage(Inno.Native.Text.BgcsInnoTextError* error)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/backends/Text/native/Inno.Native.Text/Generated/Bindings.cs#L237).

## `BgcsInnoTextErrorRelease`

<a id="api-b125fc44dd90806f"></a>
<!-- api: M:Inno.Native.Text.TextNativeContext.RawApi.BgcsInnoTextErrorRelease(Inno.Native.Text.BgcsInnoTextError*) f1cded0a00f90be2d953cfc2b06c0eabe32299340892c07bd0ce6bc4b09b07fc -->

```csharp
public void Inno.Native.Text.TextNativeContext.RawApi.BgcsInnoTextErrorRelease(Inno.Native.Text.BgcsInnoTextError* error)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/backends/Text/native/Inno.Native.Text/Generated/Bindings.cs#L229).

## `CreateRuntime`

<a id="api-42bf5edeb6bde86b"></a>
<!-- api: M:Inno.Native.Text.TextNativeContext.RawApi.CreateRuntime(Inno.Native.Text.InnoTextFontAdapterRuntime**,Inno.Native.Text.BgcsInnoTextError**) aaa1582b8c0d36e2793cbbaf88474ba7dd0f7713b4b1b085317708d5a3e9b839 -->

```csharp
public int Inno.Native.Text.TextNativeContext.RawApi.CreateRuntime(Inno.Native.Text.InnoTextFontAdapterRuntime** bgcs_result, Inno.Native.Text.BgcsInnoTextError** bgcs_error)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/backends/Text/native/Inno.Native.Text/Generated/Bindings.cs#L205).

## `DestroyRuntime`

<a id="api-1e8a307edc0b5416"></a>
<!-- api: M:Inno.Native.Text.TextNativeContext.RawApi.DestroyRuntime(Inno.Native.Text.InnoTextFontAdapterRuntime*,Inno.Native.Text.BgcsInnoTextError**) fbeadbe49eb2577677de7c914d9d5890116f38d907a1f44b07e6195fa1231fd4 -->

```csharp
public int Inno.Native.Text.TextNativeContext.RawApi.DestroyRuntime(Inno.Native.Text.InnoTextFontAdapterRuntime* bgcs_self, Inno.Native.Text.BgcsInnoTextError** bgcs_error)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/backends/Text/native/Inno.Native.Text/Generated/Bindings.cs#L221).

## `GetMetrics`

<a id="api-451c132bd6915522"></a>
<!-- api: M:Inno.Native.Text.TextNativeContext.RawApi.GetMetrics(Inno.Native.Text.InnoTextFontAdapterRuntime*,System.UInt64,System.Single,Inno.Native.Text.InnoTextFontAdapterMetricsNative*,Inno.Native.Text.Result*,Inno.Native.Text.BgcsInnoTextError**) d9ae9aa663c274878b07368683a91adae482d96d8ccffe19bc33bfb2516b848e -->

```csharp
public int Inno.Native.Text.TextNativeContext.RawApi.GetMetrics(Inno.Native.Text.InnoTextFontAdapterRuntime* bgcs_self, ulong font_handle, float font_size, Inno.Native.Text.InnoTextFontAdapterMetricsNative* metrics, Inno.Native.Text.Result* bgcs_result, Inno.Native.Text.BgcsInnoTextError** bgcs_error)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/backends/Text/native/Inno.Native.Text/Generated/Bindings.cs#L165).

## `LoadFont`

<a id="api-88fe4466dbb4624f"></a>
<!-- api: M:Inno.Native.Text.TextNativeContext.RawApi.LoadFont(Inno.Native.Text.InnoTextFontAdapterRuntime*,System.Byte*,System.UInt32,System.Int32,System.UInt64*,Inno.Native.Text.Result*,Inno.Native.Text.BgcsInnoTextError**) 886267b334e6fe763a700deae077dc7062f0d72481974d12fb1d1679cfb10728 -->

```csharp
public int Inno.Native.Text.TextNativeContext.RawApi.LoadFont(Inno.Native.Text.InnoTextFontAdapterRuntime* bgcs_self, byte* data, uint length, int face_index, ulong* font_handle, Inno.Native.Text.Result* bgcs_result, Inno.Native.Text.BgcsInnoTextError** bgcs_error)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/backends/Text/native/Inno.Native.Text/Generated/Bindings.cs#L173).

## `RasterizeGlyph`

<a id="api-0481f502896ea4b6"></a>
<!-- api: M:Inno.Native.Text.TextNativeContext.RawApi.RasterizeGlyph(Inno.Native.Text.InnoTextFontAdapterRuntime*,System.UInt64,System.UInt32,System.Single,System.Byte*,System.UInt32,Inno.Native.Text.InnoTextFontAdapterBitmapNative*,Inno.Native.Text.Result*,Inno.Native.Text.BgcsInnoTextError**) 1bcfd597bacf12d6e4b57b280201a81b66cbfa7dc24d959bf27239009008cd30 -->

```csharp
public int Inno.Native.Text.TextNativeContext.RawApi.RasterizeGlyph(Inno.Native.Text.InnoTextFontAdapterRuntime* bgcs_self, ulong font_handle, uint glyph_id, float font_size, byte* pixels, uint pixel_capacity, Inno.Native.Text.InnoTextFontAdapterBitmapNative* bitmap, Inno.Native.Text.Result* bgcs_result, Inno.Native.Text.BgcsInnoTextError** bgcs_error)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/backends/Text/native/Inno.Native.Text/Generated/Bindings.cs#L181).

## `ReleaseFont`

<a id="api-a364b2a35742c307"></a>
<!-- api: M:Inno.Native.Text.TextNativeContext.RawApi.ReleaseFont(Inno.Native.Text.InnoTextFontAdapterRuntime*,System.UInt64,Inno.Native.Text.Result*,Inno.Native.Text.BgcsInnoTextError**) 34c0eb0dac2402e86f93adbe095dfa89bcb3f6cd00acdebac081a0ebbf587e97 -->

```csharp
public int Inno.Native.Text.TextNativeContext.RawApi.ReleaseFont(Inno.Native.Text.InnoTextFontAdapterRuntime* bgcs_self, ulong font_handle, Inno.Native.Text.Result* bgcs_result, Inno.Native.Text.BgcsInnoTextError** bgcs_error)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/backends/Text/native/Inno.Native.Text/Generated/Bindings.cs#L189).

## `ResultMessage`

<a id="api-e42f27d633962207"></a>
<!-- api: M:Inno.Native.Text.TextNativeContext.RawApi.ResultMessage(Inno.Native.Text.Result,System.SByte**,Inno.Native.Text.BgcsInnoTextError**) 13a769d973e9d950e9467d4a04d6f9be0120881a14230e7076de71c9c391cf29 -->

```csharp
public int Inno.Native.Text.TextNativeContext.RawApi.ResultMessage(Inno.Native.Text.Result result, sbyte** bgcs_result, Inno.Native.Text.BgcsInnoTextError** bgcs_error)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/backends/Text/native/Inno.Native.Text/Generated/Bindings.cs#L197).

## `ShapeUtf8`

<a id="api-b71efc41f900434e"></a>
<!-- api: M:Inno.Native.Text.TextNativeContext.RawApi.ShapeUtf8(Inno.Native.Text.InnoTextFontAdapterRuntime*,System.UInt64,System.SByte*,System.UInt32,System.Single,Inno.Native.Text.Direction,System.SByte*,System.SByte*,Inno.Native.Text.InnoTextFontAdapterGlyphNative*,System.UInt32,System.UInt32*,Inno.Native.Text.Result*,Inno.Native.Text.BgcsInnoTextError**) ea7df91ae4acaf743ac6d1ca603feecd6a5f1a95daaffd97e6ebccf4b1692281 -->

```csharp
public int Inno.Native.Text.TextNativeContext.RawApi.ShapeUtf8(Inno.Native.Text.InnoTextFontAdapterRuntime* bgcs_self, ulong font_handle, sbyte* text, uint text_length, float font_size, Inno.Native.Text.Direction direction, sbyte* language, sbyte* script, Inno.Native.Text.InnoTextFontAdapterGlyphNative* glyphs, uint glyph_capacity, uint* glyph_count, Inno.Native.Text.Result* bgcs_result, Inno.Native.Text.BgcsInnoTextError** bgcs_error)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/backends/Text/native/Inno.Native.Text/Generated/Bindings.cs#L213).
