---
title: "SDLContext.RawApi — Method: SetWindowModal"
description: "Exact Method: SetWindowModal contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.f2e35ebdb1af3535
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetWindowModal

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetWindowModal`

<a id="api-648c098ce3b85464"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetWindowModal(Inno.Native.Sdl3.SDLWindow*,System.Byte) dcadc8ef247135a57fdaccf89d313c99b3006b74cfc60c283858e6e8ae23e149 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetWindowModal(Inno.Native.Sdl3.SDLWindow* window, byte modal)
```

Toggle the state of the window as modal.
To enable modal status on a window, the window must currently be the child
window of a parent, or toggling modal status on will fail.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetWindowParent

**See also:** SDL_WINDOW_MODAL

**Parameter `window`:** the window on which to set the modal state.

**Parameter `modal`:** true to toggle modal status on, false to toggle it off.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L21408).
