---
title: "MaGainer"
description: "Reference for MaGainer in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.2d7e85ff9035c383
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaGainer`

This reference describes `MaGainer` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`Config`](#api-9c759bc819b86dfd) | Field |
| [`MasterVolume`](#api-5afb539587b345ed) | Field |
| [`OwnsHeap`](#api-42f4d31dfc9b5842) | Field |
| [`PHeap`](#api-ad6250780c5d088c) | Field |
| [`PNewGains`](#api-a19089fddeaedbd6) | Field |
| [`POldGains`](#api-0e568e221000b97d) | Field |
| [`T`](#api-877d2dbe3f568da5) | Field |

## Type declaration

<a id="api-2d7e85ff9035c383"></a>
<!-- api: T:Inno.Native.MiniAudio.MaGainer 054210d14ce5ce88dab7789de12ad0cadc1e9160c70e65c54d387971d4fae2fa -->

```csharp
public struct Inno.Native.MiniAudio.MaGainer
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20707).

## `Config`

<a id="api-9c759bc819b86dfd"></a>
<!-- api: F:Inno.Native.MiniAudio.MaGainer.Config 846c98cc65a76d046bd4ad801c84bb27fd16555a6cb85464c115705a27802698 -->

```csharp
public Inno.Native.MiniAudio.MaGainerConfig Inno.Native.MiniAudio.MaGainer.Config
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20710).

## `MasterVolume`

<a id="api-5afb539587b345ed"></a>
<!-- api: F:Inno.Native.MiniAudio.MaGainer.MasterVolume 2a8cd3a654804bb608ccb548e64b880b92fd53773c45425e2c8d453c11e14346 -->

```csharp
public float Inno.Native.MiniAudio.MaGainer.MasterVolume
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20714).

## `OwnsHeap`

<a id="api-42f4d31dfc9b5842"></a>
<!-- api: F:Inno.Native.MiniAudio.MaGainer.OwnsHeap f2f60be742165b17985bd8413c58429e4157b765cf5bfdbf581a1c30230017ff -->

```csharp
public uint Inno.Native.MiniAudio.MaGainer.OwnsHeap
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20722).

## `PHeap`

<a id="api-ad6250780c5d088c"></a>
<!-- api: F:Inno.Native.MiniAudio.MaGainer.PHeap 1c9f0e96de9f3fdffd161ff44cc97b4d518a1df2f88513ae0cb92a66345084aa -->

```csharp
public void* Inno.Native.MiniAudio.MaGainer.PHeap
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20720).

## `PNewGains`

<a id="api-a19089fddeaedbd6"></a>
<!-- api: F:Inno.Native.MiniAudio.MaGainer.PNewGains a227c59c70978f4930ea810b5491193dfd78c2bae73073f1efed2e0a4787a5d0 -->

```csharp
public float* Inno.Native.MiniAudio.MaGainer.PNewGains
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20718).

## `POldGains`

<a id="api-0e568e221000b97d"></a>
<!-- api: F:Inno.Native.MiniAudio.MaGainer.POldGains 674f9d0c0c7aef9ad78b58a614530b6bbb05716428c37622c79e51ba77b5fc27 -->

```csharp
public float* Inno.Native.MiniAudio.MaGainer.POldGains
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20716).

## `T`

<a id="api-877d2dbe3f568da5"></a>
<!-- api: F:Inno.Native.MiniAudio.MaGainer.T 25253ad555ff97be137612c21399e15bc6a73250ca4e4b9bacc980da48e2151f -->

```csharp
public uint Inno.Native.MiniAudio.MaGainer.T
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L20712).
