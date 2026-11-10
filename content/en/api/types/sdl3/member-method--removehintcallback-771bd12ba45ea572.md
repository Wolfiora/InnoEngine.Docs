---
title: "SDLContext.RawApi — Method: RemoveHintCallback"
description: "Exact Method: RemoveHintCallback contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.771bd12ba45ea572
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: RemoveHintCallback

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `RemoveHintCallback`

<a id="api-5222e839b61c7c80"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.RemoveHintCallback(System.SByte*,,System.Void*) af9b8140a39fd3fda8308124594ab610f548b8221daa653b32c54c94f8fb1227 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.RemoveHintCallback(sbyte* name, delegate* unmanaged[Cdecl]<void*, sbyte*, sbyte*, sbyte*, void> callback, void* userdata)
```

Remove a function watching a particular hint.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_AddHintCallback

**Parameter `name`:** the hint being watched.

**Parameter `callback`:** an SDL_HintCallback function that will be called when the
hint value changes.

**Parameter `userdata`:** a pointer being passed to the callback function.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L17878).
