---
title: "MaSlotAllocator"
description: "Reference for MaSlotAllocator in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.f9ee0b16ac433536
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaSlotAllocator`

This reference describes `MaSlotAllocator` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`Capacity`](#api-bc548c2258adb49a) | Field |
| [`Count`](#api-c6283ceb33fd832a) | Field |
| [`OwnsHeap`](#api-3228fc4711208965) | Field |
| [`PGroups`](#api-ed0ab0f32cbd54c6) | Field |
| [`PHeap`](#api-06d53109000aa0b4) | Field |
| [`PSlots`](#api-d0b3915562d799bd) | Field |

## Type declaration

<a id="api-f9ee0b16ac433536"></a>
<!-- api: T:Inno.Native.MiniAudio.MaSlotAllocator ef7f60dfc2064cfdcd6765b97fb15b5de127c42f21dd9b933874912eb01d1883 -->

```csharp
public struct Inno.Native.MiniAudio.MaSlotAllocator
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24034).

## `Capacity`

<a id="api-bc548c2258adb49a"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSlotAllocator.Capacity 3c9a1df30431d566bca600bcc3375d6c21ad28121ad588138d64232f723b755a -->

```csharp
public uint Inno.Native.MiniAudio.MaSlotAllocator.Capacity
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24043).

## `Count`

<a id="api-c6283ceb33fd832a"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSlotAllocator.Count afe311c497ad5fb004ec54359eedda411b62947e1ae428671a4a9391bd01b715 -->

```csharp
public uint Inno.Native.MiniAudio.MaSlotAllocator.Count
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24041).

## `OwnsHeap`

<a id="api-3228fc4711208965"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSlotAllocator.OwnsHeap d593eca2c54342cb209d59eef358e4f91280055c3929909c24d32797a340fb3c -->

```csharp
public uint Inno.Native.MiniAudio.MaSlotAllocator.OwnsHeap
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24045).

## `PGroups`

<a id="api-ed0ab0f32cbd54c6"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSlotAllocator.PGroups 1dbb57d6ee0cc1dbad63d43ac858b97d29a4aecc79cd9be1be14699b58f90f08 -->

```csharp
public Inno.Native.MiniAudio.MaSlotAllocatorGroup* Inno.Native.MiniAudio.MaSlotAllocator.PGroups
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24037).

## `PHeap`

<a id="api-06d53109000aa0b4"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSlotAllocator.PHeap 0d2d0b6605dd1654e55a88441ea221ebd8a19168dfb0f18d0b08b42a0e8d050a -->

```csharp
public void* Inno.Native.MiniAudio.MaSlotAllocator.PHeap
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24047).

## `PSlots`

<a id="api-d0b3915562d799bd"></a>
<!-- api: F:Inno.Native.MiniAudio.MaSlotAllocator.PSlots 24b6d1a8631cbe76c111a606f983eeaa63c8620bb65890d60af986f94b1be482 -->

```csharp
public uint* Inno.Native.MiniAudio.MaSlotAllocator.PSlots
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L24039).
