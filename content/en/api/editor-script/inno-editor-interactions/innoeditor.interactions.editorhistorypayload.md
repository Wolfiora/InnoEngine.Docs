---
title: "EditorHistoryPayload"
description: "Reference for EditorHistoryPayload in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.ca182a2a24df1f98
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# `EditorHistoryPayload`

This reference describes `EditorHistoryPayload` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-7fc35a505b1477cc) | Method |
| [`Dispose`](#api-67aa4780776a603f) | Method |
| [`FromBytes`](#api-4897ed0815e94cb7) | Method |
| [`ReadBytes`](#api-b4054c733bbe48d0) | Method |
| [`isStoredOnDisk`](#api-291ad69e0a799164) | Property |
| [`length`](#api-84a03b883b52b280) | Property |

## Type declaration

<a id="api-ca182a2a24df1f98"></a>
<!-- api: T:InnoEditor.Interactions.EditorHistoryPayload 40b1a2321e112248b3548a80de6ba5efab2e1c3601bfd5778ef013541f334b6e -->

```csharp
public sealed class InnoEditor.Interactions.EditorHistoryPayload : System.IDisposable
```

Owns immutable neutral bytes used by a reload-safe editor history change.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryPayload.cs#L9).

## `#ctor`

<a id="api-7fc35a505b1477cc"></a>
<!-- api: M:InnoEditor.Interactions.EditorHistoryPayload.#ctor 3692a6eac42bb343c52a198be6838733d92b335d7e78fb58733d37d7848f16ab -->

```csharp
public InnoEditor.Interactions.EditorHistoryPayload.EditorHistoryPayload()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryPayload.cs#L9).

## `Dispose`

<a id="api-67aa4780776a603f"></a>
<!-- api: M:InnoEditor.Interactions.EditorHistoryPayload.Dispose 87eba0e30ffde4a8f692adec8cc75451a308d5f0c33569e15b8279d6cf1b6096 -->

```csharp
public void InnoEditor.Interactions.EditorHistoryPayload.Dispose()
```

Releases the resident or temporary disk storage owned by this payload.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryPayload.cs#L90).

## `FromBytes`

<a id="api-4897ed0815e94cb7"></a>
<!-- api: M:InnoEditor.Interactions.EditorHistoryPayload.FromBytes(System.ReadOnlySpan{System.Byte}) 398345425233b4ac85054532548200284e921fac964ee3ec4bb6543d7d8169a0 -->

```csharp
public static InnoEditor.Interactions.EditorHistoryPayload InnoEditor.Interactions.EditorHistoryPayload.FromBytes(System.ReadOnlySpan<byte> bytes)
```

Creates an immutable history payload by copying the supplied bytes.

**Parameter `bytes`:** The neutral bytes to retain for future Undo and Redo transitions.

**Returns:** A new independently owned payload.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryPayload.cs#L55).

## `ReadBytes`

<a id="api-b4054c733bbe48d0"></a>
<!-- api: M:InnoEditor.Interactions.EditorHistoryPayload.ReadBytes 13aedce2c265cc4ecd878965b3e4043677ebb6223570fb1977c75a2b17c8f5a1 -->

```csharp
public byte[] InnoEditor.Interactions.EditorHistoryPayload.ReadBytes()
```

Reads the complete immutable payload into a newly allocated byte array.

**Returns:** A copy of the payload bytes.

**Throws `System.ObjectDisposedException`:** Thrown after the payload has been disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryPayload.cs#L66).

## `isStoredOnDisk`

<a id="api-291ad69e0a799164"></a>
<!-- api: P:InnoEditor.Interactions.EditorHistoryPayload.isStoredOnDisk add9ef25325b3ba0ccf0788178bb0828daf0a41491105d08cb08dc08fa19aaa3 -->

```csharp
public bool InnoEditor.Interactions.EditorHistoryPayload.isStoredOnDisk { get; }
```

Gets whether the payload is retained in the temporary disk store instead of resident memory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryPayload.cs#L40).

## `length`

<a id="api-84a03b883b52b280"></a>
<!-- api: P:InnoEditor.Interactions.EditorHistoryPayload.length e807305febfeb944aaaeec1489b09c3b9a2fb2664b57f7ea8757d1c9a556e154 -->

```csharp
public long InnoEditor.Interactions.EditorHistoryPayload.length { get; }
```

Gets the number of immutable bytes represented by this payload.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryPayload.cs#L35).
