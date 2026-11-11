---
title: "ImGuiInputTextFlags"
description: "Reference for ImGuiInputTextFlags in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.d9c2a04e58fb6253
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
---
# `ImGuiInputTextFlags`

This reference describes `ImGuiInputTextFlags` in `Inno.Editor.ImGui`. Read the [shared contract](../../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`AllowTabInput`](#api-b10080c57c15ff83) | Field |
| [`AlwaysOverwrite`](#api-39dbb3249e285f03) | Field |
| [`AutoSelectAll`](#api-2c9b55d335ae22f9) | Field |
| [`CallbackAlways`](#api-9430aa712107f775) | Field |
| [`CallbackCharFilter`](#api-3d7d0a42eec32595) | Field |
| [`CallbackCompletion`](#api-8ff341201ef10227) | Field |
| [`CallbackEdit`](#api-42dd65080417596f) | Field |
| [`CallbackHistory`](#api-3828af08c031b2b4) | Field |
| [`CallbackResize`](#api-5950789377094941) | Field |
| [`CharsDecimal`](#api-a086c5cb8997ba4f) | Field |
| [`CharsHexadecimal`](#api-03924e7b44a0e4b2) | Field |
| [`CharsNoBlank`](#api-e71dbf9065cb6602) | Field |
| [`CharsScientific`](#api-ebf498bb4bc07511) | Field |
| [`CharsUppercase`](#api-7a1316709c03eb86) | Field |
| [`CtrlEnterForNewLine`](#api-ee27af7030982745) | Field |
| [`DisplayEmptyRefVal`](#api-caf550462cfaeeae) | Field |
| [`ElideLeft`](#api-8d6fc687a3f19ef4) | Field |
| [`EnterReturnsTrue`](#api-f9d63254d6ea5cdd) | Field |
| [`EscapeClearsAll`](#api-f3d1fb2bdf977255) | Field |
| [`NoHorizontalScroll`](#api-b3d475f5ec6bffa1) | Field |
| [`None`](#api-ef6e1046e9872fd8) | Field |
| [`NoUndoRedo`](#api-7c7b2bfa29b65598) | Field |
| [`ParseEmptyRefVal`](#api-c668d8e77207dcea) | Field |
| [`Password`](#api-55ec24ea1e2c0710) | Field |
| [`ReadOnly`](#api-1b09d5fc40b4115e) | Field |
| [`WordWrap`](#api-e8f76797aead6b51) | Field |

## Type declaration

<a id="api-d9c2a04e58fb6253"></a>
<!-- api: T:Inno.Editor.ImGui.ImGuiInputTextFlags a8632b57c031e3e4252a51caf679bc906d87da2eaa624ee2253d4a5775484626 -->

```csharp
public enum Inno.Editor.ImGui.ImGuiInputTextFlags : int
```

Defines the supported input text flags choices at the Editor presentation boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiInputTextFlags.cs#L8).

## `AllowTabInput`

<a id="api-b10080c57c15ff83"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiInputTextFlags.AllowTabInput 4ab9c12d36916cc6f05c1de0d001f52c76a331447981d14d8355c0142656ea08 -->

```csharp
Inno.Editor.ImGui.ImGuiInputTextFlags.AllowTabInput = 32
```

Pressing TAB input a '\t' character into the text field


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiInputTextFlags.cs#L37).

## `AlwaysOverwrite`

<a id="api-39dbb3249e285f03"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiInputTextFlags.AlwaysOverwrite af9219a295ae4a48834e8cf6f06a5687ae759086e816a0193f2615ea639b0fa6 -->

```csharp
Inno.Editor.ImGui.ImGuiInputTextFlags.AlwaysOverwrite = 2048
```

Overwrite mode


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiInputTextFlags.cs#L61).

## `AutoSelectAll`

<a id="api-2c9b55d335ae22f9"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiInputTextFlags.AutoSelectAll 3c59229bc5893dd1930b8c0d485f236f09e69f27d2c433b3754f818cd3736869 -->

```csharp
Inno.Editor.ImGui.ImGuiInputTextFlags.AutoSelectAll = 4096
```

Select entire text when first taking mouse focus


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiInputTextFlags.cs#L65).

## `CallbackAlways`

<a id="api-9430aa712107f775"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiInputTextFlags.CallbackAlways 6bb72b0598408cdcac80a8ec8d08f76878764795567d20e82bb9173816567791 -->

```csharp
Inno.Editor.ImGui.ImGuiInputTextFlags.CallbackAlways = 1048576
```

Callback on each iteration. User code may query cursor position, modify text buffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiInputTextFlags.cs#L97).

## `CallbackCharFilter`

<a id="api-3d7d0a42eec32595"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiInputTextFlags.CallbackCharFilter 9e778fa21ab1b90a94b36779650cefe839608448777c28d43f3a77d1bf740363 -->

```csharp
Inno.Editor.ImGui.ImGuiInputTextFlags.CallbackCharFilter = 2097152
```

Callback on character inputs to replace or discard them. Modify 'EventChar' to replace or discard, or return 1 in callback to discard.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiInputTextFlags.cs#L101).

## `CallbackCompletion`

<a id="api-8ff341201ef10227"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiInputTextFlags.CallbackCompletion adc1a248ef190cedc94b50473b39ab603ff81a1ca0520e2fa4050efb76e25526 -->

```csharp
Inno.Editor.ImGui.ImGuiInputTextFlags.CallbackCompletion = 262144
```

Callback on pressing TAB (for completion handling)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiInputTextFlags.cs#L89).

## `CallbackEdit`

<a id="api-42dd65080417596f"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiInputTextFlags.CallbackEdit f996c1286a75bead2de5ba960d1e769df97e4a2c79a32f9d679f150db2052072 -->

```csharp
Inno.Editor.ImGui.ImGuiInputTextFlags.CallbackEdit = 8388608
```

Callback on any edit. Note that InputText() already returns true on edit + you can always use IsItemEdited(). The callback is useful to manipulate the underlying buffer while focus is active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiInputTextFlags.cs#L109).

## `CallbackHistory`

<a id="api-3828af08c031b2b4"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiInputTextFlags.CallbackHistory 4f14afa09295645fc83d7d788afd76849ce80a618af95de8341dd65d21075cad -->

```csharp
Inno.Editor.ImGui.ImGuiInputTextFlags.CallbackHistory = 524288
```

Callback on pressing Up/Down arrows (for history handling)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiInputTextFlags.cs#L93).

## `CallbackResize`

<a id="api-5950789377094941"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiInputTextFlags.CallbackResize 3a92911038280bb5148d59631f3af2c805ee3639eadc73f97b29ae447e4642c8 -->

```csharp
Inno.Editor.ImGui.ImGuiInputTextFlags.CallbackResize = 4194304
```

Callback on buffer capacity changes request (beyond 'buf_size' parameter value), allowing the string to grow. Notify when the string wants to be resized (for string types which hold a cache of their Size). You will be provided a new BufSize in the callback and NEED to honor it. (see misc/cpp/imgui_stdlib.h for an example of using this)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiInputTextFlags.cs#L105).

## `CharsDecimal`

<a id="api-a086c5cb8997ba4f"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiInputTextFlags.CharsDecimal 72e440a15e6147710991ae404f4bf2d380e98e9050be9f348849f90cc8727683 -->

```csharp
Inno.Editor.ImGui.ImGuiInputTextFlags.CharsDecimal = 1
```

Allow 0123456789.+-*/


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiInputTextFlags.cs#L17).

## `CharsHexadecimal`

<a id="api-03924e7b44a0e4b2"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiInputTextFlags.CharsHexadecimal bac55aac220620b0dbb16fb49ae1228e2341994fc04fc32616accf447a8a29d5 -->

```csharp
Inno.Editor.ImGui.ImGuiInputTextFlags.CharsHexadecimal = 2
```

Allow 0123456789ABCDEFabcdef


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiInputTextFlags.cs#L21).

## `CharsNoBlank`

<a id="api-e71dbf9065cb6602"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiInputTextFlags.CharsNoBlank 56921dafe81e5d174690f1b7e3df9eb23bf18a5360ed8bc249978fcddcfbe8ed -->

```csharp
Inno.Editor.ImGui.ImGuiInputTextFlags.CharsNoBlank = 16
```

Filter out spaces, tabs


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiInputTextFlags.cs#L33).

## `CharsScientific`

<a id="api-ebf498bb4bc07511"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiInputTextFlags.CharsScientific 024a19ed36a1c0b24c1e1be4b2b16da77ad556a8436a04f0a51c59371a552f7e -->

```csharp
Inno.Editor.ImGui.ImGuiInputTextFlags.CharsScientific = 4
```

Allow 0123456789.+-*/eE (Scientific notation input)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiInputTextFlags.cs#L25).

## `CharsUppercase`

<a id="api-7a1316709c03eb86"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiInputTextFlags.CharsUppercase ec0f4f63b0ea9526bd43030f2cfcf8bee70f4010ec31ab11f5d27c735cb3aa85 -->

```csharp
Inno.Editor.ImGui.ImGuiInputTextFlags.CharsUppercase = 8
```

Turn a..z into A..Z


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiInputTextFlags.cs#L29).

## `CtrlEnterForNewLine`

<a id="api-ee27af7030982745"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiInputTextFlags.CtrlEnterForNewLine da089f4b5982445ec352fdca0751cbd26e5c89ba1cc3e5f72d495ac65b6324c1 -->

```csharp
Inno.Editor.ImGui.ImGuiInputTextFlags.CtrlEnterForNewLine = 256
```

In multi-line mode, validate with Enter, add new line with Ctrl+Enter (default is opposite: validate with Ctrl+Enter, add line with Enter).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiInputTextFlags.cs#L49).

## `DisplayEmptyRefVal`

<a id="api-caf550462cfaeeae"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiInputTextFlags.DisplayEmptyRefVal 0a8a2966c05d12bed8ad9ad22f8401a95801abc8eb1cbd2903d7d476b1c13799 -->

```csharp
Inno.Editor.ImGui.ImGuiInputTextFlags.DisplayEmptyRefVal = 16384
```

InputFloat(), InputInt(), InputScalar() etc. only: when value is zero, do not display it. Generally used with ImGuiInputTextFlags_ParseEmptyRefVal.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiInputTextFlags.cs#L73).

## `ElideLeft`

<a id="api-8d6fc687a3f19ef4"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiInputTextFlags.ElideLeft 2e22d499468a7639b84534e43e2a6a64a4476c58544003010ffd9a6bfa5437e8 -->

```csharp
Inno.Editor.ImGui.ImGuiInputTextFlags.ElideLeft = 131072
```

When text doesn't fit, elide left side to ensure right side stays visible. Useful for path/filenames. Single-line only!


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiInputTextFlags.cs#L85).

## `EnterReturnsTrue`

<a id="api-f9d63254d6ea5cdd"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiInputTextFlags.EnterReturnsTrue 33802496549034db38839b0448b830f7c7882f79906704378e42d493b7ba2410 -->

```csharp
Inno.Editor.ImGui.ImGuiInputTextFlags.EnterReturnsTrue = 64
```

Return 'true' when Enter is pressed (as opposed to every time the value was modified). Consider using IsItemDeactivatedAfterEdit() instead!


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiInputTextFlags.cs#L41).

## `EscapeClearsAll`

<a id="api-f3d1fb2bdf977255"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiInputTextFlags.EscapeClearsAll d3519c0558b6f4420d057247e0ab14a9ad3f02da0d2b68ce48e41f0c88276e40 -->

```csharp
Inno.Editor.ImGui.ImGuiInputTextFlags.EscapeClearsAll = 128
```

Escape key clears content if not empty, and deactivate otherwise (contrast to default behavior of Escape to revert)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiInputTextFlags.cs#L45).

## `NoHorizontalScroll`

<a id="api-b3d475f5ec6bffa1"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiInputTextFlags.NoHorizontalScroll 1b83f2a824a37a0ee89db7eb3f0e584c42fda6686b7b893e2be878c2678b250b -->

```csharp
Inno.Editor.ImGui.ImGuiInputTextFlags.NoHorizontalScroll = 32768
```

Disable following the cursor horizontally


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiInputTextFlags.cs#L77).

## `None`

<a id="api-ef6e1046e9872fd8"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiInputTextFlags.None 3257416428775c4d263a6cee63674f57590ba7e27e77a9dec72b7a78ff6df7f9 -->

```csharp
Inno.Editor.ImGui.ImGuiInputTextFlags.None = 0
```

Uses the ordinary behavior without additional options.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiInputTextFlags.cs#L13).

## `NoUndoRedo`

<a id="api-7c7b2bfa29b65598"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiInputTextFlags.NoUndoRedo 205f624ae6581ed85059eeb701d53f95331bc694cf2bb1ffd0f931347923351d -->

```csharp
Inno.Editor.ImGui.ImGuiInputTextFlags.NoUndoRedo = 65536
```

Disable undo/redo. Note that input text owns the text data while active, if you want to provide your own undo/redo stack you need e.g. to call ClearActiveID().


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiInputTextFlags.cs#L81).

## `ParseEmptyRefVal`

<a id="api-c668d8e77207dcea"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiInputTextFlags.ParseEmptyRefVal c83a21d5e2148c8302e1a0ca0f802364c1f6723c20b561996d0261ba2ed6ec84 -->

```csharp
Inno.Editor.ImGui.ImGuiInputTextFlags.ParseEmptyRefVal = 8192
```

InputFloat(), InputInt(), InputScalar() etc. only: parse empty string as zero value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiInputTextFlags.cs#L69).

## `Password`

<a id="api-55ec24ea1e2c0710"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiInputTextFlags.Password dda7cd7d747acb7a1f7d1870baa6245241adf588becd44ea207e95b101958f78 -->

```csharp
Inno.Editor.ImGui.ImGuiInputTextFlags.Password = 1024
```

Password mode, display all characters as '*', disable copy


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiInputTextFlags.cs#L57).

## `ReadOnly`

<a id="api-1b09d5fc40b4115e"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiInputTextFlags.ReadOnly 284d4461188f23d52e5b87124421b7c19c0f0e9be4408a23fb3724324894d2ac -->

```csharp
Inno.Editor.ImGui.ImGuiInputTextFlags.ReadOnly = 512
```

Read-only mode


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiInputTextFlags.cs#L53).

## `WordWrap`

<a id="api-e8f76797aead6b51"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiInputTextFlags.WordWrap 3c1350d69538a1023d5802d83b3d1904bdcad4abfa12b1db3a63166f6e9e6992 -->

```csharp
Inno.Editor.ImGui.ImGuiInputTextFlags.WordWrap = 16777216
```

InputTextMultiline(): word-wrap lines that are too long.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiInputTextFlags.cs#L113).
