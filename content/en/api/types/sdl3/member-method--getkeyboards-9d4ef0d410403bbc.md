---
title: "SDLContext.RawApi — Method: GetKeyboards"
description: "Exact Method: GetKeyboards contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.9d4ef0d410403bbc
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetKeyboards

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetKeyboards`

<a id="api-da17a4c045f32ed2"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetKeyboards(System.Int32*) 4642e0bcb5fb74fa65281b1ff18ba48f4472e222b962728c2403e98b88ce3341 -->

```csharp
public uint* Inno.Native.Sdl3.SDLContext.RawApi.GetKeyboards(int* count)
```

Get a list of currently connected keyboards.
Note that this will include any device or virtual driver that includes
keyboard functionality, including some mice, KVM switches, motherboard
power buttons, etc. You should wait for input from a device before you
consider it actively in use.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetKeyboardNameForID

**See also:** SDL_HasKeyboard

**Parameter `count`:** a pointer filled in with the number of keyboards returned, may
be NULL.

**Returns:** a 0 terminated array of keyboards instance IDs or NULL on failure;
call SDL_GetError() for more information. This should be freed
with SDL_free() when it is no longer needed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L48025).
