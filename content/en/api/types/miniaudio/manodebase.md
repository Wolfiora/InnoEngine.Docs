---
title: "MaNodeBase"
description: "Reference for MaNodeBase in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.1c48bb6c0af61e7e
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaNodeBase`

This reference describes `MaNodeBase` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`CachedDataCapInFramesPerBus`](#api-f5c3f0afc85548e0) | Field |
| [`CachedFrameCountIn`](#api-5b71d71f17ef8857) | Field |
| [`CachedFrameCountOut`](#api-89765ea64fa90c71) | Field |
| [`ConsumedFrameCountIn`](#api-f20631690a33e626) | Field |
| [`InputBusCount`](#api-6ac01784770f7e7d) | Field |
| [`InputBuses`](#api-907343bc0391050f) | Field |
| [`LocalTime`](#api-b40751ca5e97ce46) | Field |
| [`OutputBusCount`](#api-7baf516bb45c8b2d) | Field |
| [`OutputBuses`](#api-7f6a1f3f3d45a6fb) | Field |
| [`OwnsHeap`](#api-a2fcb1905622fd8d) | Field |
| [`PCachedData`](#api-42a4609cbc567515) | Field |
| [`PHeap`](#api-512c1da4e98837a1) | Field |
| [`PInputBuses`](#api-e1d1efc131f66010) | Field |
| [`PNodeGraph`](#api-13cdfeee9b70b32d) | Field |
| [`POutputBuses`](#api-13bbf8c3d76b6ba5) | Field |
| [`State`](#api-88ced94fb4a50c71) | Field |
| [`StateTimes`](#api-0940190a2a01cf07) | Field |
| [`Vtable`](#api-a25b9cc698f23ed9) | Field |

## Type declaration

<a id="api-1c48bb6c0af61e7e"></a>
<!-- api: T:Inno.Native.MiniAudio.MaNodeBase 2bda87174fe935741958249b31ed204f28a912436a8819684c660520c89536df -->

```csharp
public struct Inno.Native.MiniAudio.MaNodeBase
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22232).

## `CachedDataCapInFramesPerBus`

<a id="api-f5c3f0afc85548e0"></a>
<!-- api: F:Inno.Native.MiniAudio.MaNodeBase.CachedDataCapInFramesPerBus f00bdf8ba977a90eff58bf253ab559f6389ffa0500e7feced9a4035dc4752e34 -->

```csharp
public ushort Inno.Native.MiniAudio.MaNodeBase.CachedDataCapInFramesPerBus
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22249).

## `CachedFrameCountIn`

<a id="api-5b71d71f17ef8857"></a>
<!-- api: F:Inno.Native.MiniAudio.MaNodeBase.CachedFrameCountIn c29ccd0542ce62c9a6902fb28c259f74299ecf9293d9e68a4730216c52caa858 -->

```csharp
public ushort Inno.Native.MiniAudio.MaNodeBase.CachedFrameCountIn
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22253).

## `CachedFrameCountOut`

<a id="api-89765ea64fa90c71"></a>
<!-- api: F:Inno.Native.MiniAudio.MaNodeBase.CachedFrameCountOut d6b931658c1ea6af10f76d68d1ec65c4853f060ce4cb3337be61f83860c86710 -->

```csharp
public ushort Inno.Native.MiniAudio.MaNodeBase.CachedFrameCountOut
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22251).

## `ConsumedFrameCountIn`

<a id="api-f20631690a33e626"></a>
<!-- api: F:Inno.Native.MiniAudio.MaNodeBase.ConsumedFrameCountIn 4c0225359aba52265a964be013b2caad4568d17c3a6f1083188c9d7ca3b75ec5 -->

```csharp
public ushort Inno.Native.MiniAudio.MaNodeBase.ConsumedFrameCountIn
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22255).

## `InputBusCount`

<a id="api-6ac01784770f7e7d"></a>
<!-- api: F:Inno.Native.MiniAudio.MaNodeBase.InputBusCount e38a08bcaa6d24435f9ebb99421129bec1cc2cf6dff2a048dbd1dbc626f9fe8d -->

```csharp
public uint Inno.Native.MiniAudio.MaNodeBase.InputBusCount
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22239).

## `InputBuses`

<a id="api-907343bc0391050f"></a>
<!-- api: F:Inno.Native.MiniAudio.MaNodeBase.InputBuses e7eb5dbfcea9f3b2ba30180d5232a69d11148e537c27ee2fa59daa06b2b087b2 -->

```csharp
public Inno.Native.MiniAudio.NativeArray_5cecd9fb8864fb43 Inno.Native.MiniAudio.MaNodeBase.InputBuses
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22263).

## `LocalTime`

<a id="api-b40751ca5e97ce46"></a>
<!-- api: F:Inno.Native.MiniAudio.MaNodeBase.LocalTime e3019c1e92bfdc91a188abfc902295be5d074ac8e16600fdd0cd59713f3c8617 -->

```csharp
public ulong Inno.Native.MiniAudio.MaNodeBase.LocalTime
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22261).

## `OutputBusCount`

<a id="api-7baf516bb45c8b2d"></a>
<!-- api: F:Inno.Native.MiniAudio.MaNodeBase.OutputBusCount d3f4667501b3b418923d84d46b1bcd1ef8feb68f923fae78fb32a8c6859e73ff -->

```csharp
public uint Inno.Native.MiniAudio.MaNodeBase.OutputBusCount
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22241).

## `OutputBuses`

<a id="api-7f6a1f3f3d45a6fb"></a>
<!-- api: F:Inno.Native.MiniAudio.MaNodeBase.OutputBuses 44939af1f961e980aad45a8d55f55087d603963ed98dbad4bb7ed30c380965e4 -->

```csharp
public Inno.Native.MiniAudio.NativeArray_d14c56c076b259b5 Inno.Native.MiniAudio.MaNodeBase.OutputBuses
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22265).

## `OwnsHeap`

<a id="api-a2fcb1905622fd8d"></a>
<!-- api: F:Inno.Native.MiniAudio.MaNodeBase.OwnsHeap 9275333e7ad03a84330281fbfb6e1680df09af146fec46988272b21a89fbee68 -->

```csharp
public uint Inno.Native.MiniAudio.MaNodeBase.OwnsHeap
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22269).

## `PCachedData`

<a id="api-42a4609cbc567515"></a>
<!-- api: F:Inno.Native.MiniAudio.MaNodeBase.PCachedData 5a140d551f6bd458a3af154f1533e0732016d90ab41c7e1bd7532cfe8c16f4e7 -->

```csharp
public float* Inno.Native.MiniAudio.MaNodeBase.PCachedData
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22247).

## `PHeap`

<a id="api-512c1da4e98837a1"></a>
<!-- api: F:Inno.Native.MiniAudio.MaNodeBase.PHeap 110d2a2d654f1d77f642c1453aa6f84787ec48bb2f92225786f55e35e20d6434 -->

```csharp
public void* Inno.Native.MiniAudio.MaNodeBase.PHeap
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22267).

## `PInputBuses`

<a id="api-e1d1efc131f66010"></a>
<!-- api: F:Inno.Native.MiniAudio.MaNodeBase.PInputBuses 00695b80cd6ac51c1bb6fb5e280a64fdb91ceb66aa8788b43b60658fef62c927 -->

```csharp
public Inno.Native.MiniAudio.MaNodeInputBus* Inno.Native.MiniAudio.MaNodeBase.PInputBuses
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22243).

## `PNodeGraph`

<a id="api-13cdfeee9b70b32d"></a>
<!-- api: F:Inno.Native.MiniAudio.MaNodeBase.PNodeGraph 26c7ceaebf8b6587504c56a462422cf60fdc29d5983800af2096c703609b2f90 -->

```csharp
public Inno.Native.MiniAudio.MaNodeGraph* Inno.Native.MiniAudio.MaNodeBase.PNodeGraph
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22235).

## `POutputBuses`

<a id="api-13bbf8c3d76b6ba5"></a>
<!-- api: F:Inno.Native.MiniAudio.MaNodeBase.POutputBuses fda4958e02ca13d9273e759b858a116bd0f5603b14a860f044d4e1c75b49ee5a -->

```csharp
public Inno.Native.MiniAudio.MaNodeOutputBus* Inno.Native.MiniAudio.MaNodeBase.POutputBuses
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22245).

## `State`

<a id="api-88ced94fb4a50c71"></a>
<!-- api: F:Inno.Native.MiniAudio.MaNodeBase.State 51e3dbf1e28a104c7568ff7535e28d971baa15e5afb546fe56cf008f890ec82b -->

```csharp
public Inno.Native.MiniAudio.MaNodeState Inno.Native.MiniAudio.MaNodeBase.State
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22257).

## `StateTimes`

<a id="api-0940190a2a01cf07"></a>
<!-- api: F:Inno.Native.MiniAudio.MaNodeBase.StateTimes 9461906831c795708613c6e60ecd222a37559fd69801c3bb04308e61e321c964 -->

```csharp
public Inno.Native.MiniAudio.NativeArray_3561217d0d8daa30 Inno.Native.MiniAudio.MaNodeBase.StateTimes
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22259).

## `Vtable`

<a id="api-a25b9cc698f23ed9"></a>
<!-- api: F:Inno.Native.MiniAudio.MaNodeBase.Vtable dc2bfa57612c7d0b5b2f26c181e2cd5baa41bbfce6684097b15a96192c995637 -->

```csharp
public Inno.Native.MiniAudio.MaNodeVtable* Inno.Native.MiniAudio.MaNodeBase.Vtable
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22237).
