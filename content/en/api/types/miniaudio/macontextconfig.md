---
title: "MaContextConfig"
description: "Reference for MaContextConfig in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.a7d8513cb95e5b6d
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaContextConfig`

This reference describes `MaContextConfig` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`AllocationCallbacks`](#api-b5bf9860d8f9964d) | Field |
| [`Alsa`](#api-b40e5174d61d6aa2) | Field |
| [`Coreaudio`](#api-2950b54dcb554991) | Field |
| [`Custom`](#api-16b90042aa60d0d5) | Field |
| [`Dsound`](#api-67841793dd037793) | Field |
| [`Jack`](#api-eb819b5636b6d806) | Field |
| [`PLog`](#api-4c3e576e67e97c44) | Field |
| [`Pulse`](#api-7d1ef842a3c7fc34) | Field |
| [`PUserData`](#api-6bd9d636a81927fc) | Field |
| [`ThreadPriority`](#api-9794028f2816f9be) | Field |
| [`ThreadStackSize`](#api-f2aaddcd83b3d219) | Field |

## Type declaration

<a id="api-a7d8513cb95e5b6d"></a>
<!-- api: T:Inno.Native.MiniAudio.MaContextConfig cf0419d1f092d2697a7c4a5b630aaaabc9fdb370f64b2ed0b4cdfeed3219cd97 -->

```csharp
public struct Inno.Native.MiniAudio.MaContextConfig
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18084).

## `AllocationCallbacks`

<a id="api-b5bf9860d8f9964d"></a>
<!-- api: F:Inno.Native.MiniAudio.MaContextConfig.AllocationCallbacks cd999d35e14696f65628e530663d80a25acbfd63ccda7454cdade09d49a52661 -->

```csharp
public Inno.Native.MiniAudio.MaAllocationCallbacks Inno.Native.MiniAudio.MaContextConfig.AllocationCallbacks
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18095).

## `Alsa`

<a id="api-b40e5174d61d6aa2"></a>
<!-- api: F:Inno.Native.MiniAudio.MaContextConfig.Alsa 76cf222473996fc2a4c84a8b996f0f3498fb50d6c174562478b3c82a4831faa1 -->

```csharp
public Inno.Native.MiniAudio.MaContextConfigAnonymousStructF1f40026491482be Inno.Native.MiniAudio.MaContextConfig.Alsa
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18099).

## `Coreaudio`

<a id="api-2950b54dcb554991"></a>
<!-- api: F:Inno.Native.MiniAudio.MaContextConfig.Coreaudio bbab47e3548ec69f0dbffa211405c84ae362a2ab04e4251993dba9a0dbe0ff23 -->

```csharp
public Inno.Native.MiniAudio.MaContextConfigAnonymousStruct08a33c5ec23b1778 Inno.Native.MiniAudio.MaContextConfig.Coreaudio
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18103).

## `Custom`

<a id="api-16b90042aa60d0d5"></a>
<!-- api: F:Inno.Native.MiniAudio.MaContextConfig.Custom 427d5e78740b36179a486d7439fc087e1065b0ae0c4b0cbcb37f7e839cc2904e -->

```csharp
public Inno.Native.MiniAudio.MaBackendCallbacks Inno.Native.MiniAudio.MaContextConfig.Custom
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18107).

## `Dsound`

<a id="api-67841793dd037793"></a>
<!-- api: F:Inno.Native.MiniAudio.MaContextConfig.Dsound 314b6479f3fdcdc27ff4fb83d2a0230542d4eb2a203f729509641d000b589fe5 -->

```csharp
public Inno.Native.MiniAudio.MaContextConfigAnonymousStruct00e51610ebc07e2e Inno.Native.MiniAudio.MaContextConfig.Dsound
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18097).

## `Jack`

<a id="api-eb819b5636b6d806"></a>
<!-- api: F:Inno.Native.MiniAudio.MaContextConfig.Jack 54bea9a50130e474743cf4eb32651c808832a7f21c1e9c487907fcb3a89b055c -->

```csharp
public Inno.Native.MiniAudio.MaContextConfigAnonymousStruct0a3d2e36aff1fcc4 Inno.Native.MiniAudio.MaContextConfig.Jack
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18105).

## `PLog`

<a id="api-4c3e576e67e97c44"></a>
<!-- api: F:Inno.Native.MiniAudio.MaContextConfig.PLog f40f527d8b622d7263668855357180921fc0d4364703b6a119f065dd717de4b5 -->

```csharp
public Inno.Native.MiniAudio.MaLog* Inno.Native.MiniAudio.MaContextConfig.PLog
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18087).

## `Pulse`

<a id="api-7d1ef842a3c7fc34"></a>
<!-- api: F:Inno.Native.MiniAudio.MaContextConfig.Pulse 50ba1da4794b9b01ec70996e620e5718510a299a25feeb492979fa4a1062d93d -->

```csharp
public Inno.Native.MiniAudio.MaContextConfigAnonymousStruct19d6b955fc41f1eb Inno.Native.MiniAudio.MaContextConfig.Pulse
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18101).

## `PUserData`

<a id="api-6bd9d636a81927fc"></a>
<!-- api: F:Inno.Native.MiniAudio.MaContextConfig.PUserData 2372abc6b952f500ec9a43fd3c71872aa24c818029a87d133ba4f7670548b6e5 -->

```csharp
public void* Inno.Native.MiniAudio.MaContextConfig.PUserData
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18093).

## `ThreadPriority`

<a id="api-9794028f2816f9be"></a>
<!-- api: F:Inno.Native.MiniAudio.MaContextConfig.ThreadPriority 34891c65026915798957f268f78221bcd59839d68b706112905ed15cf6d10654 -->

```csharp
public Inno.Native.MiniAudio.MaThreadPriority Inno.Native.MiniAudio.MaContextConfig.ThreadPriority
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18089).

## `ThreadStackSize`

<a id="api-f2aaddcd83b3d219"></a>
<!-- api: F:Inno.Native.MiniAudio.MaContextConfig.ThreadStackSize a2dd59f0fbcac3d8c3368e4999fdb6b2162c4636af0858b6038970149d06cc24 -->

```csharp
public ulong Inno.Native.MiniAudio.MaContextConfig.ThreadStackSize
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L18091).
