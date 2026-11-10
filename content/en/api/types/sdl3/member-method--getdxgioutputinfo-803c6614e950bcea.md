---
title: "SDLContext.RawApi — Method: GetDxgiOutputInfo"
description: "Exact Method: GetDxgiOutputInfo contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.803c6614e950bcea
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetDxgiOutputInfo

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetDxgiOutputInfo`

<a id="api-a18a9ae4ecdbdb33"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetDxgiOutputInfo(System.UInt32,System.Int32*,System.Int32*) 3ceff8240a096f9ce7203094228f3740da7364c8b91f6c0e4fdea5a9768e2938 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetDxgiOutputInfo(uint displayID, int* adapterIndex, int* outputIndex)
```

Get the DXGI Adapter and Output indices for the specified display.
The DXGI Adapter and Output indices can be passed to `EnumAdapters` and
`EnumOutputs` respectively to get the objects required to create a DX10 or
DX11 device and swap chain.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `displayID`:** the instance of the display to query.

**Parameter `adapterIndex`:** a pointer to be filled in with the adapter index.

**Parameter `outputIndex`:** a pointer to be filled in with the output index.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L22179).
