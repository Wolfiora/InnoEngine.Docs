---
title: "SDLContext.RawApi — Method: StartTextInputWithProperties"
description: "Exact Method: StartTextInputWithProperties contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.0d42c5c245b5f0fc
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: StartTextInputWithProperties

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `StartTextInputWithProperties`

<a id="api-a08f95ab0d9e77a9"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.StartTextInputWithProperties(Inno.Native.Sdl3.SDLWindow*,System.UInt32) bb1c32458a7e1639cc9315c900c6a6dc9ebaf9fabc46818aad62b14e0e9b1589 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.StartTextInputWithProperties(Inno.Native.Sdl3.SDLWindow* window, uint props)
```

Start accepting Unicode text input events in a window, with properties
describing the input.
This function will enable text input (SDL_EVENT_TEXT_INPUT and
SDL_EVENT_TEXT_EDITING events) in the specified window. Please use this
function paired with SDL_StopTextInput().
Text input events are not received by default.
On some platforms using this function shows the screen keyboard and/or
activates an IME, which can prevent some key press events from being passed
through.
These are the supported properties:
- `SDL_PROP_TEXTINPUT_TYPE_NUMBER` - an SDL_TextInputType value that
describes text being input, defaults to SDL_TEXTINPUT_TYPE_TEXT.
- `SDL_PROP_TEXTINPUT_CAPITALIZATION_NUMBER` - an SDL_Capitalization value
that describes how text should be capitalized, defaults to
SDL_CAPITALIZE_SENTENCES for normal text entry, SDL_CAPITALIZE_WORDS for
SDL_TEXTINPUT_TYPE_TEXT_NAME, and SDL_CAPITALIZE_NONE for e-mail
addresses, usernames, and passwords.
- `SDL_PROP_TEXTINPUT_AUTOCORRECT_BOOLEAN` - true to enable auto completion
and auto correction, defaults to true.
- `SDL_PROP_TEXTINPUT_MULTILINE_BOOLEAN` - true if multiple lines of text
are allowed. This defaults to true if SDL_HINT_RETURN_KEY_HIDES_IME is
"0" or is not set, and defaults to false if SDL_HINT_RETURN_KEY_HIDES_IME
is "1".
On Android you can directly specify the input type:
- `SDL_PROP_TEXTINPUT_ANDROID_INPUTTYPE_NUMBER` - the text input type to
use, overriding other properties. This is documented at
https://developer.android.com/reference/android/text/InputType

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetTextInputArea

**See also:** SDL_StartTextInput

**See also:** SDL_StopTextInput

**See also:** SDL_TextInputActive

**Parameter `window`:** the window to enable text input.

**Parameter `props`:** the properties to use.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L33890).
