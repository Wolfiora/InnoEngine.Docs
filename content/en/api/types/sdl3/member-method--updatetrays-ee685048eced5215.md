---
title: "SDLContext.RawApi — Method: UpdateTrays"
description: "Exact Method: UpdateTrays contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.ee685048eced5215
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: UpdateTrays

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `UpdateTrays`

<a id="api-d5dc3e2579305e3e"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.UpdateTrays 6d906779716fe8bdd356d772b3be1c025a2f2efffe042afbf6b88382ecb59a66 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.UpdateTrays()
```

Update the trays.
This is called automatically by the event loop and is only needed if you're
using trays but aren't handling SDL events.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L36789).
