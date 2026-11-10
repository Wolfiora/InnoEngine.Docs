---
title: "SDLContext.RawApi — Method: AddHintCallback"
description: "Exact Method: AddHintCallback contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.3137a0b2f20552f7
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: AddHintCallback

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `AddHintCallback`

<a id="api-c6696ca6825a19a4"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.AddHintCallback(System.SByte*,,System.Void*) e7d36bdf58c4649b95dc62235e568942b9c075c865579e7d50da0526696de06d -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.AddHintCallback(sbyte* name, delegate* unmanaged[Cdecl]<void*, sbyte*, sbyte*, sbyte*, void> callback, void* userdata)
```

Add a function to watch a particular hint.
The callback function is called _during_ this function, to provide it an
initial value, and again each time the hint's value changes.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_RemoveHintCallback

**Parameter `name`:** the hint to watch.

**Parameter `callback`:** An SDL_HintCallback function that will be called when the
hint value changes.

**Parameter `userdata`:** a pointer to pass to the callback function.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L44459).
