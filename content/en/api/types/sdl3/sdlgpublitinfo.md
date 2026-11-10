---
title: "SDLGPUBlitInfo"
description: "Reference for SDLGPUBlitInfo in Inno.Native.Sdl3."
uid: api.inno.native.sdl3.bdc08f467029a7f6
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
---
# `SDLGPUBlitInfo`

This reference describes `SDLGPUBlitInfo` in `Inno.Native.Sdl3`. Read the [shared contract](../../projects/inno-native-sdl3.md#shared-abi-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`ClearColor`](#api-ced264f119073f55) | Field |
| [`Cycle`](#api-612331c85dc2d651) | Field |
| [`Destination`](#api-0582b80b3a842409) | Field |
| [`Filter`](#api-e8f76ddff7113016) | Field |
| [`FlipMode`](#api-4032df9a7cc17eab) | Field |
| [`LoadOp`](#api-98c5ac9518c05df6) | Field |
| [`Padding1`](#api-68acb939abaee135) | Field |
| [`Padding2`](#api-04416342950f72d3) | Field |
| [`Padding3`](#api-370346dba7c62aa0) | Field |
| [`Source`](#api-5df08f93df8fe0ce) | Field |

## Type declaration

<a id="api-bdc08f467029a7f6"></a>
<!-- api: T:Inno.Native.Sdl3.SDLGPUBlitInfo 5e0826a31cb2a89fcc0cfcd6ab0dff3444e4546f4edd4218cb91adc9695eb736 -->

```csharp
public struct Inno.Native.Sdl3.SDLGPUBlitInfo
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L55157).

## `ClearColor`

<a id="api-ced264f119073f55"></a>
<!-- api: F:Inno.Native.Sdl3.SDLGPUBlitInfo.ClearColor 71f88b95228c2a266e9bfd6c96c22553710f9e437effe6956bd97213de4e7b22 -->

```csharp
public Inno.Native.Sdl3.SDLFColor Inno.Native.Sdl3.SDLGPUBlitInfo.ClearColor
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L55166).

## `Cycle`

<a id="api-612331c85dc2d651"></a>
<!-- api: F:Inno.Native.Sdl3.SDLGPUBlitInfo.Cycle 3ba65142612bbac0aab46a9ce190215f305bb5fd9cf2c9d20e3fc156ef2bd168 -->

```csharp
public byte Inno.Native.Sdl3.SDLGPUBlitInfo.Cycle
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L55172).

## `Destination`

<a id="api-0582b80b3a842409"></a>
<!-- api: F:Inno.Native.Sdl3.SDLGPUBlitInfo.Destination f19564b596097298cc51be0d4ebe1c96f9c23e2463dbfce0612ed8c7f824002e -->

```csharp
public Inno.Native.Sdl3.SDLGPUBlitRegion Inno.Native.Sdl3.SDLGPUBlitInfo.Destination
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L55162).

## `Filter`

<a id="api-e8f76ddff7113016"></a>
<!-- api: F:Inno.Native.Sdl3.SDLGPUBlitInfo.Filter 47d143330f096ce26b8503b4d6c91767ad1ffd3ff0a945e9f4e34dc0b43e9144 -->

```csharp
public Inno.Native.Sdl3.SDLGPUFilter Inno.Native.Sdl3.SDLGPUBlitInfo.Filter
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L55170).

## `FlipMode`

<a id="api-4032df9a7cc17eab"></a>
<!-- api: F:Inno.Native.Sdl3.SDLGPUBlitInfo.FlipMode ee8fcead0e79fb00db78680eb115cdf19fee91e8bf4870887628ce8de72ebffc -->

```csharp
public Inno.Native.Sdl3.SDLFlipMode Inno.Native.Sdl3.SDLGPUBlitInfo.FlipMode
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L55168).

## `LoadOp`

<a id="api-98c5ac9518c05df6"></a>
<!-- api: F:Inno.Native.Sdl3.SDLGPUBlitInfo.LoadOp 5e93a331cec493cb834263897d633a5208173e0484bd1b5261ae1a9fbca797b3 -->

```csharp
public Inno.Native.Sdl3.SDLGPULoadOp Inno.Native.Sdl3.SDLGPUBlitInfo.LoadOp
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L55164).

## `Padding1`

<a id="api-68acb939abaee135"></a>
<!-- api: F:Inno.Native.Sdl3.SDLGPUBlitInfo.Padding1 8da221ecc372431156f8f14cb9a0d46ecb46d8d450e2fccc7748bcaa22970fca -->

```csharp
public byte Inno.Native.Sdl3.SDLGPUBlitInfo.Padding1
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L55174).

## `Padding2`

<a id="api-04416342950f72d3"></a>
<!-- api: F:Inno.Native.Sdl3.SDLGPUBlitInfo.Padding2 ab48213d20d461c60fd095e6a0ae421215eedd33c64ce91cd12b8af4c95f3a0c -->

```csharp
public byte Inno.Native.Sdl3.SDLGPUBlitInfo.Padding2
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L55176).

## `Padding3`

<a id="api-370346dba7c62aa0"></a>
<!-- api: F:Inno.Native.Sdl3.SDLGPUBlitInfo.Padding3 cf4ebe5322aad7f502134c0eabbc32babd331d4556cfe43635175da47e202e17 -->

```csharp
public byte Inno.Native.Sdl3.SDLGPUBlitInfo.Padding3
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L55178).

## `Source`

<a id="api-5df08f93df8fe0ce"></a>
<!-- api: F:Inno.Native.Sdl3.SDLGPUBlitInfo.Source 4b76d6610e21dcf8cf3b26823b1547f70b191649ff5239a7f22f6fe6aa573ccc -->

```csharp
public Inno.Native.Sdl3.SDLGPUBlitRegion Inno.Native.Sdl3.SDLGPUBlitInfo.Source
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L55160).
