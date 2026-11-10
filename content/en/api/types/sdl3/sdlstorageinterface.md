---
title: "SDLStorageInterface"
description: "Reference for SDLStorageInterface in Inno.Native.Sdl3."
uid: api.inno.native.sdl3.7b27690967096bab
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
---
# `SDLStorageInterface`

This reference describes `SDLStorageInterface` in `Inno.Native.Sdl3`. Read the [shared contract](../../projects/inno-native-sdl3.md#shared-abi-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`Close`](#api-0e6eadefb1d27244) | Field |
| [`Copy`](#api-2920c98214129c53) | Field |
| [`Enumerate`](#api-0f20852a7ff5802c) | Field |
| [`Info`](#api-7a7d837b098ce8f8) | Field |
| [`Mkdir`](#api-d06e19328ca2ebda) | Field |
| [`ReadFile`](#api-a07d80e22e2763b2) | Field |
| [`Ready`](#api-f2d2289214c8d123) | Field |
| [`Remove`](#api-e7f165f7abaf2d5c) | Field |
| [`Rename`](#api-051f0cf698240742) | Field |
| [`SpaceRemaining`](#api-7f37bcf9e9369d04) | Field |
| [`Version`](#api-924257e18df5b71e) | Field |
| [`WriteFile`](#api-55dc28785484e254) | Field |

## Type declaration

<a id="api-7b27690967096bab"></a>
<!-- api: T:Inno.Native.Sdl3.SDLStorageInterface bd98758c96e1014674983cfcbc2e1b7ee0164926497331198831a74057de3ea6 -->

```csharp
public struct Inno.Native.Sdl3.SDLStorageInterface
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L59473).

## `Close`

<a id="api-0e6eadefb1d27244"></a>
<!-- api: F:Inno.Native.Sdl3.SDLStorageInterface.Close 7827a96c46f5263bfe4bfc4ef976cf10ad35c64af54662690d21201788f95d57 -->

```csharp
public delegate* unmanaged[Cdecl]<void*, byte> Inno.Native.Sdl3.SDLStorageInterface.Close
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L59478).

## `Copy`

<a id="api-2920c98214129c53"></a>
<!-- api: F:Inno.Native.Sdl3.SDLStorageInterface.Copy 7317a688ece25470d3e08df2bd3fbf228fcdd1d57cfb52dd0beb936089109756 -->

```csharp
public delegate* unmanaged[Cdecl]<void*, sbyte*, sbyte*, byte> Inno.Native.Sdl3.SDLStorageInterface.Copy
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L59496).

## `Enumerate`

<a id="api-0f20852a7ff5802c"></a>
<!-- api: F:Inno.Native.Sdl3.SDLStorageInterface.Enumerate 3a8b422b4bcd27fceb71bb41bd2935fd09322ae426ac4460edf94c3843a5fa88 -->

```csharp
public delegate* unmanaged[Cdecl]<void*, sbyte*, delegate* unmanaged[Cdecl]<void*, sbyte*, sbyte*, Inno.Native.Sdl3.SDLEnumerationResult>, void*, byte> Inno.Native.Sdl3.SDLStorageInterface.Enumerate
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L59482).

## `Info`

<a id="api-7a7d837b098ce8f8"></a>
<!-- api: F:Inno.Native.Sdl3.SDLStorageInterface.Info 5e62c7e392373d03e8b18901ecff256c2133b6d3ba5149aea5a0de7729355034 -->

```csharp
public delegate* unmanaged[Cdecl]<void*, sbyte*, Inno.Native.Sdl3.SDLPathInfo*, byte> Inno.Native.Sdl3.SDLStorageInterface.Info
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L59484).

## `Mkdir`

<a id="api-d06e19328ca2ebda"></a>
<!-- api: F:Inno.Native.Sdl3.SDLStorageInterface.Mkdir 6606efe01a66c38730e272f066f00a1e1360d983cc3778366bd37e50242526f5 -->

```csharp
public delegate* unmanaged[Cdecl]<void*, sbyte*, byte> Inno.Native.Sdl3.SDLStorageInterface.Mkdir
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L59490).

## `ReadFile`

<a id="api-a07d80e22e2763b2"></a>
<!-- api: F:Inno.Native.Sdl3.SDLStorageInterface.ReadFile c4c77fa79e69d2b3ecdba28db09eebdd3854d4d90c25189ac6cc383ac762a361 -->

```csharp
public delegate* unmanaged[Cdecl]<void*, sbyte*, void*, ulong, byte> Inno.Native.Sdl3.SDLStorageInterface.ReadFile
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L59486).

## `Ready`

<a id="api-f2d2289214c8d123"></a>
<!-- api: F:Inno.Native.Sdl3.SDLStorageInterface.Ready 678c4d165702090d92b3e93f9fd0c5551605d45e913a1f2dfdb9d3991717d6c5 -->

```csharp
public delegate* unmanaged[Cdecl]<void*, byte> Inno.Native.Sdl3.SDLStorageInterface.Ready
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L59480).

## `Remove`

<a id="api-e7f165f7abaf2d5c"></a>
<!-- api: F:Inno.Native.Sdl3.SDLStorageInterface.Remove 16bd93af8266d0e0814447eb02e9df7ee7899dacf4ecb5e0770a040befa38b80 -->

```csharp
public delegate* unmanaged[Cdecl]<void*, sbyte*, byte> Inno.Native.Sdl3.SDLStorageInterface.Remove
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L59492).

## `Rename`

<a id="api-051f0cf698240742"></a>
<!-- api: F:Inno.Native.Sdl3.SDLStorageInterface.Rename cd68ab5094ce14dc73432ebd56be118d7ea74f8851c1f58593dd8331f2fe3745 -->

```csharp
public delegate* unmanaged[Cdecl]<void*, sbyte*, sbyte*, byte> Inno.Native.Sdl3.SDLStorageInterface.Rename
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L59494).

## `SpaceRemaining`

<a id="api-7f37bcf9e9369d04"></a>
<!-- api: F:Inno.Native.Sdl3.SDLStorageInterface.SpaceRemaining 1b1abbf2c0f86cf8d3755f166452b319fdaf2dc6665d90eb058b241e65394e95 -->

```csharp
public delegate* unmanaged[Cdecl]<void*, ulong> Inno.Native.Sdl3.SDLStorageInterface.SpaceRemaining
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L59498).

## `Version`

<a id="api-924257e18df5b71e"></a>
<!-- api: F:Inno.Native.Sdl3.SDLStorageInterface.Version 2ee56fc8a4c3ba4f3c1ca4d6fb237e62b9a50f596d5344abf9da7098fb0bf7b7 -->

```csharp
public uint Inno.Native.Sdl3.SDLStorageInterface.Version
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L59476).

## `WriteFile`

<a id="api-55dc28785484e254"></a>
<!-- api: F:Inno.Native.Sdl3.SDLStorageInterface.WriteFile c9e71b240640d9bc23b0a1ff421ef12218eb5290474a065841e50318f1c277fa -->

```csharp
public delegate* unmanaged[Cdecl]<void*, sbyte*, void*, ulong, byte> Inno.Native.Sdl3.SDLStorageInterface.WriteFile
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L59488).
