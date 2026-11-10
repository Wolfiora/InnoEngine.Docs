---
title: "SDLContext.RawApi — Method: StartTextInput"
description: "Exact Method: StartTextInput contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.77f1bd84ac105af8
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: StartTextInput

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `StartTextInput`

<a id="api-6d0202c205ce6075"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.StartTextInput(Inno.Native.Sdl3.SDLWindow*) 358a4717e5dde45ed74268c64d2d380da3363d463315ab43969b80efa7645349 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.StartTextInput(Inno.Native.Sdl3.SDLWindow* window)
```

Start accepting Unicode text input events in a window.
This function will enable text input (SDL_EVENT_TEXT_INPUT and
SDL_EVENT_TEXT_EDITING events) in the specified window. Please use this
function paired with SDL_StopTextInput().
Text input events are not received by default.
On some platforms using this function shows the screen keyboard and/or
activates an IME, which can prevent some key press events from being passed
through.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetTextInputArea

**See also:** SDL_StartTextInputWithProperties

**See also:** SDL_StopTextInput

**See also:** SDL_TextInputActive

**Parameter `window`:** the window to enable text input.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L41733).
