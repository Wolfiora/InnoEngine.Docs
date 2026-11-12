---
title: "ImGuiInputTextFlags"
description: "Reference for ImGuiInputTextFlags in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.editor-script.6e8046777a12450e
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
---
# `ImGuiInputTextFlags`

This reference describes `ImGuiInputTextFlags` in `Inno.Editor.ImGui`. Read the [shared contract](../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`AllowTabInput`](#api-415415a5c9180781) | Field |
| [`AlwaysOverwrite`](#api-33d50c65275fea13) | Field |
| [`AutoSelectAll`](#api-3ed7df443c12af0f) | Field |
| [`CallbackAlways`](#api-b49880cc262b11bb) | Field |
| [`CallbackCharFilter`](#api-591803c76d9d8cce) | Field |
| [`CallbackCompletion`](#api-df84b5239cea68ec) | Field |
| [`CallbackEdit`](#api-495c4be6a69a8fc4) | Field |
| [`CallbackHistory`](#api-4dd681999bc2985f) | Field |
| [`CallbackResize`](#api-5f2541b96d7b64c0) | Field |
| [`CharsDecimal`](#api-362116022826d6c8) | Field |
| [`CharsHexadecimal`](#api-08ac6c9e99b9ed45) | Field |
| [`CharsNoBlank`](#api-e7f1eb7c084b542e) | Field |
| [`CharsScientific`](#api-0e20c971924f1d37) | Field |
| [`CharsUppercase`](#api-90afe1a92d900ead) | Field |
| [`CtrlEnterForNewLine`](#api-f48bb84b2f193111) | Field |
| [`DisplayEmptyRefVal`](#api-4afa0aecf2f94950) | Field |
| [`ElideLeft`](#api-c478a088f3202d5e) | Field |
| [`EnterReturnsTrue`](#api-8d09467b326b1ad0) | Field |
| [`EscapeClearsAll`](#api-59ebf7e7b9f47943) | Field |
| [`NoHorizontalScroll`](#api-c2ac5ec40452ef35) | Field |
| [`None`](#api-692052ec7241c517) | Field |
| [`NoUndoRedo`](#api-ccdca908ae18f9fe) | Field |
| [`ParseEmptyRefVal`](#api-d77336d82ca9aec5) | Field |
| [`Password`](#api-7a0ad4ca3cbb5e9f) | Field |
| [`ReadOnly`](#api-261185d84c0fa2cb) | Field |
| [`WordWrap`](#api-94e5ff2dc55fcbc7) | Field |

## Type declaration

<a id="api-6e8046777a12450e"></a>
<!-- api: T:InnoEditor.ImGui.ImGuiInputTextFlags 3083e9750c20c484d92007cebe036fb5cb4f25623190ec6f0f360e8aeefa59e2 -->

```csharp
public enum InnoEditor.ImGui.ImGuiInputTextFlags : int
```

Defines the supported input text flags choices at the Editor presentation boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiInputTextFlags.cs#L8).

## `AllowTabInput`

<a id="api-415415a5c9180781"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiInputTextFlags.AllowTabInput 947a079f2e82ed09cabd6d3baf677b84649dd29de3920ed3ef39b5e5a66ec5c4 -->

```csharp
InnoEditor.ImGui.ImGuiInputTextFlags.AllowTabInput = 32
```

Pressing TAB input a '\t' character into the text field


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiInputTextFlags.cs#L37).

## `AlwaysOverwrite`

<a id="api-33d50c65275fea13"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiInputTextFlags.AlwaysOverwrite 92481785faae4604b3158e20c6132c0351d4d1f712ec43489a3e7d7ffb7d8550 -->

```csharp
InnoEditor.ImGui.ImGuiInputTextFlags.AlwaysOverwrite = 2048
```

Overwrite mode


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiInputTextFlags.cs#L61).

## `AutoSelectAll`

<a id="api-3ed7df443c12af0f"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiInputTextFlags.AutoSelectAll 7c4ada3dcbf3270cd2df384dea77132e49d612748e6d8c748f4e7e514979bb73 -->

```csharp
InnoEditor.ImGui.ImGuiInputTextFlags.AutoSelectAll = 4096
```

Select entire text when first taking mouse focus


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiInputTextFlags.cs#L65).

## `CallbackAlways`

<a id="api-b49880cc262b11bb"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiInputTextFlags.CallbackAlways 48a8e8aa2d20247d6c1765a3cf299ccfcd7010705be3d90c0f53256d10195e09 -->

```csharp
InnoEditor.ImGui.ImGuiInputTextFlags.CallbackAlways = 1048576
```

Callback on each iteration. User code may query cursor position, modify text buffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiInputTextFlags.cs#L97).

## `CallbackCharFilter`

<a id="api-591803c76d9d8cce"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiInputTextFlags.CallbackCharFilter f0f0c6f6292807aa7c1b79dfac98e7cb79e46ff9600999678e0bc69ed5930a12 -->

```csharp
InnoEditor.ImGui.ImGuiInputTextFlags.CallbackCharFilter = 2097152
```

Callback on character inputs to replace or discard them. Modify 'EventChar' to replace or discard, or return 1 in callback to discard.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiInputTextFlags.cs#L101).

## `CallbackCompletion`

<a id="api-df84b5239cea68ec"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiInputTextFlags.CallbackCompletion 7bce7539cc12fef047ab1cd4bfacc193a243db8c5a86a84713ca0acc17057d08 -->

```csharp
InnoEditor.ImGui.ImGuiInputTextFlags.CallbackCompletion = 262144
```

Callback on pressing TAB (for completion handling)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiInputTextFlags.cs#L89).

## `CallbackEdit`

<a id="api-495c4be6a69a8fc4"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiInputTextFlags.CallbackEdit f3dc68b0776e292ba86e048314b93a592e9d6667f459489ecfc4fd407c8b7c09 -->

```csharp
InnoEditor.ImGui.ImGuiInputTextFlags.CallbackEdit = 8388608
```

Callback on any edit. Note that InputText() already returns true on edit + you can always use IsItemEdited(). The callback is useful to manipulate the underlying buffer while focus is active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiInputTextFlags.cs#L109).

## `CallbackHistory`

<a id="api-4dd681999bc2985f"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiInputTextFlags.CallbackHistory 4f336ed991b24b9a90885282e3d4bdced405b564a63fe6b0c7dcfffd64a3a41e -->

```csharp
InnoEditor.ImGui.ImGuiInputTextFlags.CallbackHistory = 524288
```

Callback on pressing Up/Down arrows (for history handling)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiInputTextFlags.cs#L93).

## `CallbackResize`

<a id="api-5f2541b96d7b64c0"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiInputTextFlags.CallbackResize f3b4477a68423e35d99731b1e51a58f234793d79cc8d35914f4ec3ffc335b056 -->

```csharp
InnoEditor.ImGui.ImGuiInputTextFlags.CallbackResize = 4194304
```

Callback on buffer capacity changes request (beyond 'buf_size' parameter value), allowing the string to grow. Notify when the string wants to be resized (for string types which hold a cache of their Size). You will be provided a new BufSize in the callback and NEED to honor it. (see misc/cpp/imgui_stdlib.h for an example of using this)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiInputTextFlags.cs#L105).

## `CharsDecimal`

<a id="api-362116022826d6c8"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiInputTextFlags.CharsDecimal 50bde8e4a22164b6aaf190f1c2df4396f1f8e0bb50fd68bae1e40e7056026acb -->

```csharp
InnoEditor.ImGui.ImGuiInputTextFlags.CharsDecimal = 1
```

Allow 0123456789.+-*/


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiInputTextFlags.cs#L17).

## `CharsHexadecimal`

<a id="api-08ac6c9e99b9ed45"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiInputTextFlags.CharsHexadecimal 149bdd82e06ea76d9b8cb3cd69c2a493bff4c3a7967d43269a98823bf71fd3fa -->

```csharp
InnoEditor.ImGui.ImGuiInputTextFlags.CharsHexadecimal = 2
```

Allow 0123456789ABCDEFabcdef


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiInputTextFlags.cs#L21).

## `CharsNoBlank`

<a id="api-e7f1eb7c084b542e"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiInputTextFlags.CharsNoBlank 454ab5835b88e5758f498326f66ccad92b32d50624e5bd7873430cb9a3fcff3d -->

```csharp
InnoEditor.ImGui.ImGuiInputTextFlags.CharsNoBlank = 16
```

Filter out spaces, tabs


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiInputTextFlags.cs#L33).

## `CharsScientific`

<a id="api-0e20c971924f1d37"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiInputTextFlags.CharsScientific e92ea50bcc7a9575ee0ef342a7c383e5de8631e7b81c85a44ea5f4e0745e59fc -->

```csharp
InnoEditor.ImGui.ImGuiInputTextFlags.CharsScientific = 4
```

Allow 0123456789.+-*/eE (Scientific notation input)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiInputTextFlags.cs#L25).

## `CharsUppercase`

<a id="api-90afe1a92d900ead"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiInputTextFlags.CharsUppercase 8865e20428e4043b424fd24d662c3909010fc311f79e674d7e883be878587e91 -->

```csharp
InnoEditor.ImGui.ImGuiInputTextFlags.CharsUppercase = 8
```

Turn a..z into A..Z


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiInputTextFlags.cs#L29).

## `CtrlEnterForNewLine`

<a id="api-f48bb84b2f193111"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiInputTextFlags.CtrlEnterForNewLine 1b0cd08ec293a89bd0941aafcbea2c587ecc7ef2a532fbba1626c30eed16ead1 -->

```csharp
InnoEditor.ImGui.ImGuiInputTextFlags.CtrlEnterForNewLine = 256
```

In multi-line mode, validate with Enter, add new line with Ctrl+Enter (default is opposite: validate with Ctrl+Enter, add line with Enter).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiInputTextFlags.cs#L49).

## `DisplayEmptyRefVal`

<a id="api-4afa0aecf2f94950"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiInputTextFlags.DisplayEmptyRefVal fcff158093b7d5c3f8e1bb5e1373a6be181952a5db2883b91cbc8cd3784cda80 -->

```csharp
InnoEditor.ImGui.ImGuiInputTextFlags.DisplayEmptyRefVal = 16384
```

InputFloat(), InputInt(), InputScalar() etc. only: when value is zero, do not display it. Generally used with ImGuiInputTextFlags_ParseEmptyRefVal.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiInputTextFlags.cs#L73).

## `ElideLeft`

<a id="api-c478a088f3202d5e"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiInputTextFlags.ElideLeft db5d92375ae837023bb0310c13deaeb935c87794032c6dc9a5f5203cfdf8a9a9 -->

```csharp
InnoEditor.ImGui.ImGuiInputTextFlags.ElideLeft = 131072
```

When text doesn't fit, elide left side to ensure right side stays visible. Useful for path/filenames. Single-line only!


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiInputTextFlags.cs#L85).

## `EnterReturnsTrue`

<a id="api-8d09467b326b1ad0"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiInputTextFlags.EnterReturnsTrue a3622e3c9808089fa9bc59a7c1c69e188b430dcd1a5dc1366c979cb9c15d2bf0 -->

```csharp
InnoEditor.ImGui.ImGuiInputTextFlags.EnterReturnsTrue = 64
```

Return 'true' when Enter is pressed (as opposed to every time the value was modified). Consider using IsItemDeactivatedAfterEdit() instead!


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiInputTextFlags.cs#L41).

## `EscapeClearsAll`

<a id="api-59ebf7e7b9f47943"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiInputTextFlags.EscapeClearsAll c82b2d70903592f7a1757f8ac56e4ab1d36147b003765a540b1a98cf77b998fb -->

```csharp
InnoEditor.ImGui.ImGuiInputTextFlags.EscapeClearsAll = 128
```

Escape key clears content if not empty, and deactivate otherwise (contrast to default behavior of Escape to revert)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiInputTextFlags.cs#L45).

## `NoHorizontalScroll`

<a id="api-c2ac5ec40452ef35"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiInputTextFlags.NoHorizontalScroll 31140188735f9243ac95e0da3a2f5feaf23dde5969aaaf66af9c0f4b3f938216 -->

```csharp
InnoEditor.ImGui.ImGuiInputTextFlags.NoHorizontalScroll = 32768
```

Disable following the cursor horizontally


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiInputTextFlags.cs#L77).

## `None`

<a id="api-692052ec7241c517"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiInputTextFlags.None af417b44c9af126d5f95e41854c70e25103a923d38cce280e60771752d40a059 -->

```csharp
InnoEditor.ImGui.ImGuiInputTextFlags.None = 0
```

Uses the ordinary behavior without additional options.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiInputTextFlags.cs#L13).

## `NoUndoRedo`

<a id="api-ccdca908ae18f9fe"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiInputTextFlags.NoUndoRedo 3002ca51d508597733794a83a3ce4498c2b3e614bf3d59285b67201998a48318 -->

```csharp
InnoEditor.ImGui.ImGuiInputTextFlags.NoUndoRedo = 65536
```

Disable undo/redo. Note that input text owns the text data while active, if you want to provide your own undo/redo stack you need e.g. to call ClearActiveID().


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiInputTextFlags.cs#L81).

## `ParseEmptyRefVal`

<a id="api-d77336d82ca9aec5"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiInputTextFlags.ParseEmptyRefVal effb5701faa6ac8f51e51e6d939950890d859f1fb88ffc7093736c9627c3737a -->

```csharp
InnoEditor.ImGui.ImGuiInputTextFlags.ParseEmptyRefVal = 8192
```

InputFloat(), InputInt(), InputScalar() etc. only: parse empty string as zero value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiInputTextFlags.cs#L69).

## `Password`

<a id="api-7a0ad4ca3cbb5e9f"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiInputTextFlags.Password 00a9aca64007a20943efe839c43ea54af0363e843cea648b6466845bc108bbef -->

```csharp
InnoEditor.ImGui.ImGuiInputTextFlags.Password = 1024
```

Password mode, display all characters as '*', disable copy


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiInputTextFlags.cs#L57).

## `ReadOnly`

<a id="api-261185d84c0fa2cb"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiInputTextFlags.ReadOnly 8dce0f299ea8f3751855de73eb79b783f5096d084ed2c50015b867727a66adfd -->

```csharp
InnoEditor.ImGui.ImGuiInputTextFlags.ReadOnly = 512
```

Read-only mode


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiInputTextFlags.cs#L53).

## `WordWrap`

<a id="api-94e5ff2dc55fcbc7"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiInputTextFlags.WordWrap 3bcec15b9b4b4429e337d93eb9d1bb718fce665bef85c2a119a2cd6a1befc517 -->

```csharp
InnoEditor.ImGui.ImGuiInputTextFlags.WordWrap = 16777216
```

InputTextMultiline(): word-wrap lines that are too long.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiInputTextFlags.cs#L113).
