---
title: "SDLVirtualJoystickDesc"
description: "Reference for SDLVirtualJoystickDesc in Inno.Native.Sdl3."
uid: api.inno.native.sdl3.4b454f7de9fa867a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
---
# `SDLVirtualJoystickDesc`

This reference describes `SDLVirtualJoystickDesc` in `Inno.Native.Sdl3`. Read the [shared contract](../../projects/inno-native-sdl3.md#shared-abi-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`AxisMask`](#api-02ad3b55ba0ea897) | Field |
| [`ButtonMask`](#api-0452ad426228b1b3) | Field |
| [`Cleanup`](#api-da16c04f5cc47294) | Field |
| [`Name`](#api-39283cf6fea2d4f9) | Field |
| [`Naxes`](#api-ac338cb0fa0ad9f8) | Field |
| [`Nballs`](#api-1f7ff56331f5f760) | Field |
| [`Nbuttons`](#api-c6116a9cbf2bd43f) | Field |
| [`Nhats`](#api-07a35b5675ecc7ff) | Field |
| [`Nsensors`](#api-506df0913508e902) | Field |
| [`Ntouchpads`](#api-43f88c4650a58f97) | Field |
| [`Padding`](#api-55f240bc7f5c0702) | Field |
| [`Padding2`](#api-ad831aaf09339f18) | Field |
| [`ProductId`](#api-b0fe5a3fd33afa41) | Field |
| [`Rumble`](#api-f7093c2c57921f65) | Field |
| [`RumbleTriggers`](#api-254dab5e36e08dff) | Field |
| [`SendEffect`](#api-322e24547ebcad9f) | Field |
| [`Sensors`](#api-814b49f460a4ba54) | Field |
| [`SetLed`](#api-41758ba65c9118c8) | Field |
| [`SetPlayerIndex`](#api-9b3f382974aeb80d) | Field |
| [`SetSensorsEnabled`](#api-91d2f639296db824) | Field |
| [`Touchpads`](#api-ccd6ad3f08a671db) | Field |
| [`Type`](#api-d7e3f8acce30d604) | Field |
| [`Update`](#api-63f61a26e53216ae) | Field |
| [`Userdata`](#api-33f5ea0c28abb9b9) | Field |
| [`VendorId`](#api-9526670416badc41) | Field |
| [`Version`](#api-1652a7b7fce7f2f9) | Field |

## Type declaration

<a id="api-4b454f7de9fa867a"></a>
<!-- api: T:Inno.Native.Sdl3.SDLVirtualJoystickDesc 4f30cd3f6ca390f38700a1568904e1e3d699ef537a65a8a2a2046abc3c2f46d3 -->

```csharp
public struct Inno.Native.Sdl3.SDLVirtualJoystickDesc
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L60042).

## `AxisMask`

<a id="api-02ad3b55ba0ea897"></a>
<!-- api: F:Inno.Native.Sdl3.SDLVirtualJoystickDesc.AxisMask 68b6eb9f72f4a825b1436935078fe12a076252fbef7e26908bb70f2a3f1fbca6 -->

```csharp
public uint Inno.Native.Sdl3.SDLVirtualJoystickDesc.AxisMask
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L60071).

## `ButtonMask`

<a id="api-0452ad426228b1b3"></a>
<!-- api: F:Inno.Native.Sdl3.SDLVirtualJoystickDesc.ButtonMask 0c19346d6212cefc8bbc710de363179db8e95bd9248d07a27dc7ddc446c119c2 -->

```csharp
public uint Inno.Native.Sdl3.SDLVirtualJoystickDesc.ButtonMask
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L60069).

## `Cleanup`

<a id="api-da16c04f5cc47294"></a>
<!-- api: F:Inno.Native.Sdl3.SDLVirtualJoystickDesc.Cleanup 056175661828b7c1ca016d4739b5acf335c9f8df17497a6e6b88e3dadac93418 -->

```csharp
public delegate* unmanaged[Cdecl]<void*, void> Inno.Native.Sdl3.SDLVirtualJoystickDesc.Cleanup
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L60095).

## `Name`

<a id="api-39283cf6fea2d4f9"></a>
<!-- api: F:Inno.Native.Sdl3.SDLVirtualJoystickDesc.Name 6cbea6a6791e7d4e501e9774284315471bc7ef985592619779b372f459fc83e2 -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLVirtualJoystickDesc.Name
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L60073).

## `Naxes`

<a id="api-ac338cb0fa0ad9f8"></a>
<!-- api: F:Inno.Native.Sdl3.SDLVirtualJoystickDesc.Naxes d51f5a598647ac5c4476bd0f9b3e387e1fae86c44fe1136f19ac24d436635b21 -->

```csharp
public ushort Inno.Native.Sdl3.SDLVirtualJoystickDesc.Naxes
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L60055).

## `Nballs`

<a id="api-1f7ff56331f5f760"></a>
<!-- api: F:Inno.Native.Sdl3.SDLVirtualJoystickDesc.Nballs 9a1525e8576ea9f59977c495cb32f1f61fd9ead83e1fa1851168247e5d8dcac4 -->

```csharp
public ushort Inno.Native.Sdl3.SDLVirtualJoystickDesc.Nballs
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L60059).

## `Nbuttons`

<a id="api-c6116a9cbf2bd43f"></a>
<!-- api: F:Inno.Native.Sdl3.SDLVirtualJoystickDesc.Nbuttons cf908ed1c06c320010a430edd3913a49a04bf72c6e8ec64f51d53710f8313774 -->

```csharp
public ushort Inno.Native.Sdl3.SDLVirtualJoystickDesc.Nbuttons
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L60057).

## `Nhats`

<a id="api-07a35b5675ecc7ff"></a>
<!-- api: F:Inno.Native.Sdl3.SDLVirtualJoystickDesc.Nhats ea2575b4d6a47523a7b19870341b0eb371444b589d0aab87c631d2c114d40f70 -->

```csharp
public ushort Inno.Native.Sdl3.SDLVirtualJoystickDesc.Nhats
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L60061).

## `Nsensors`

<a id="api-506df0913508e902"></a>
<!-- api: F:Inno.Native.Sdl3.SDLVirtualJoystickDesc.Nsensors 49b14d54684d1578fc273de656a46312e2a9a393333b59bcf153092ffc2dd9d6 -->

```csharp
public ushort Inno.Native.Sdl3.SDLVirtualJoystickDesc.Nsensors
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L60065).

## `Ntouchpads`

<a id="api-43f88c4650a58f97"></a>
<!-- api: F:Inno.Native.Sdl3.SDLVirtualJoystickDesc.Ntouchpads c5c540a3f43330c212a5272fd363c33d6d8441a99866b593bb0e9c22a836428b -->

```csharp
public ushort Inno.Native.Sdl3.SDLVirtualJoystickDesc.Ntouchpads
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L60063).

## `Padding`

<a id="api-55f240bc7f5c0702"></a>
<!-- api: F:Inno.Native.Sdl3.SDLVirtualJoystickDesc.Padding 97b7a4c58a2c61fefc804a44fe265c9cffe9b8cfdd58cd2a9c1737116f4c6bbf -->

```csharp
public ushort Inno.Native.Sdl3.SDLVirtualJoystickDesc.Padding
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L60049).

## `Padding2`

<a id="api-ad831aaf09339f18"></a>
<!-- api: F:Inno.Native.Sdl3.SDLVirtualJoystickDesc.Padding2 e623c7e86e853edee578a499f91d785bc2bb08ecb8feaa1c3deefe459c787d33 -->

```csharp
public Inno.Native.Sdl3.NativeArray_fe89134a4aa024c6 Inno.Native.Sdl3.SDLVirtualJoystickDesc.Padding2
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L60067).

## `ProductId`

<a id="api-b0fe5a3fd33afa41"></a>
<!-- api: F:Inno.Native.Sdl3.SDLVirtualJoystickDesc.ProductId c69f03febb6fd81174e7d47de545f8e8d175756a19391e86468b0c4a0fe3029f -->

```csharp
public ushort Inno.Native.Sdl3.SDLVirtualJoystickDesc.ProductId
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L60053).

## `Rumble`

<a id="api-f7093c2c57921f65"></a>
<!-- api: F:Inno.Native.Sdl3.SDLVirtualJoystickDesc.Rumble 5f807c0f9b91556242b232edf062481be68d3effa2e4c7c404933ab7dd8730af -->

```csharp
public delegate* unmanaged[Cdecl]<void*, ushort, ushort, byte> Inno.Native.Sdl3.SDLVirtualJoystickDesc.Rumble
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L60085).

## `RumbleTriggers`

<a id="api-254dab5e36e08dff"></a>
<!-- api: F:Inno.Native.Sdl3.SDLVirtualJoystickDesc.RumbleTriggers eecc8c2d4db66357572b9e1157c61918631d7a127841753bd815c15bf5149718 -->

```csharp
public delegate* unmanaged[Cdecl]<void*, ushort, ushort, byte> Inno.Native.Sdl3.SDLVirtualJoystickDesc.RumbleTriggers
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L60087).

## `SendEffect`

<a id="api-322e24547ebcad9f"></a>
<!-- api: F:Inno.Native.Sdl3.SDLVirtualJoystickDesc.SendEffect edf0ccd44ed4f13720655b561d4825f5d7ad280efc8cbe761c387d0429dcbd5a -->

```csharp
public delegate* unmanaged[Cdecl]<void*, void*, int, byte> Inno.Native.Sdl3.SDLVirtualJoystickDesc.SendEffect
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L60091).

## `Sensors`

<a id="api-814b49f460a4ba54"></a>
<!-- api: F:Inno.Native.Sdl3.SDLVirtualJoystickDesc.Sensors 5cca124e2a5039cd1e57f6fd61126af21eda81ad561617cc551573d674601349 -->

```csharp
public Inno.Native.Sdl3.SDLVirtualJoystickSensorDesc* Inno.Native.Sdl3.SDLVirtualJoystickDesc.Sensors
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L60077).

## `SetLed`

<a id="api-41758ba65c9118c8"></a>
<!-- api: F:Inno.Native.Sdl3.SDLVirtualJoystickDesc.SetLed 238cea9c62ae6d82b2a8e8f5a9512da07473a40bc3d9a04db45f5069af201330 -->

```csharp
public delegate* unmanaged[Cdecl]<void*, byte, byte, byte, byte> Inno.Native.Sdl3.SDLVirtualJoystickDesc.SetLed
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L60089).

## `SetPlayerIndex`

<a id="api-9b3f382974aeb80d"></a>
<!-- api: F:Inno.Native.Sdl3.SDLVirtualJoystickDesc.SetPlayerIndex dd38e11a1f52e927e04898100b5416db665192826e096ee66d8e0366597480d0 -->

```csharp
public delegate* unmanaged[Cdecl]<void*, int, void> Inno.Native.Sdl3.SDLVirtualJoystickDesc.SetPlayerIndex
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L60083).

## `SetSensorsEnabled`

<a id="api-91d2f639296db824"></a>
<!-- api: F:Inno.Native.Sdl3.SDLVirtualJoystickDesc.SetSensorsEnabled 188da959b0d646f9203c25dc597877d45cc247110fac76bb2dcf42ac6b9964ab -->

```csharp
public delegate* unmanaged[Cdecl]<void*, byte, byte> Inno.Native.Sdl3.SDLVirtualJoystickDesc.SetSensorsEnabled
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L60093).

## `Touchpads`

<a id="api-ccd6ad3f08a671db"></a>
<!-- api: F:Inno.Native.Sdl3.SDLVirtualJoystickDesc.Touchpads 41a3e53030c844bf4250d3bfea7319b9366fa8589aabe6804ae72f47beeafd47 -->

```csharp
public Inno.Native.Sdl3.SDLVirtualJoystickTouchpadDesc* Inno.Native.Sdl3.SDLVirtualJoystickDesc.Touchpads
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L60075).

## `Type`

<a id="api-d7e3f8acce30d604"></a>
<!-- api: F:Inno.Native.Sdl3.SDLVirtualJoystickDesc.Type e8eccf6c8cc29925923593ba6f730729612131c66c04722c574577f061bf45f1 -->

```csharp
public ushort Inno.Native.Sdl3.SDLVirtualJoystickDesc.Type
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L60047).

## `Update`

<a id="api-63f61a26e53216ae"></a>
<!-- api: F:Inno.Native.Sdl3.SDLVirtualJoystickDesc.Update 10667515a2269ab7608f1da9a48050e5c14ec53cafdea34709ba8b30f8ac2e40 -->

```csharp
public delegate* unmanaged[Cdecl]<void*, void> Inno.Native.Sdl3.SDLVirtualJoystickDesc.Update
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L60081).

## `Userdata`

<a id="api-33f5ea0c28abb9b9"></a>
<!-- api: F:Inno.Native.Sdl3.SDLVirtualJoystickDesc.Userdata bb60e690acbfae13c4b177ff7d3cc3c5bb6d0e5e6540f27f3c15563bd849b995 -->

```csharp
public void* Inno.Native.Sdl3.SDLVirtualJoystickDesc.Userdata
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L60079).

## `VendorId`

<a id="api-9526670416badc41"></a>
<!-- api: F:Inno.Native.Sdl3.SDLVirtualJoystickDesc.VendorId 76ec4491f4b3973c94670c0fc1dfc07a4621badc2e3e232be68f7a17e82a2fef -->

```csharp
public ushort Inno.Native.Sdl3.SDLVirtualJoystickDesc.VendorId
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L60051).

## `Version`

<a id="api-1652a7b7fce7f2f9"></a>
<!-- api: F:Inno.Native.Sdl3.SDLVirtualJoystickDesc.Version c1c935c8ae552ed51745b772b3f09f19a4ef42e75fa8897e824b32aea9783a65 -->

```csharp
public uint Inno.Native.Sdl3.SDLVirtualJoystickDesc.Version
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L60045).
