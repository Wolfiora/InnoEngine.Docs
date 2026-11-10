---
title: "SDLContext.RawApi — Method: HidFreeEnumeration"
description: "Exact Method: HidFreeEnumeration contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.47dd5d5ace589a5b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: HidFreeEnumeration

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HidFreeEnumeration`

<a id="api-d5e4e6e3ebcfa03e"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.HidFreeEnumeration(Inno.Native.Sdl3.SDLHidDeviceInfo*) a6cb735164446cbe1ce7cde66803817eaf7dbed053170450ba4c3d0ec4d7f0f0 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.HidFreeEnumeration(Inno.Native.Sdl3.SDLHidDeviceInfo* devs)
```

Free an enumeration linked list.
This function frees a linked list created by SDL_hid_enumerate().

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `devs`:** pointer to a list of struct_device returned from
SDL_hid_enumerate().


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L36966).
