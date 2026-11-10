---
title: "EditorHistoryPayload"
description: "Reference for EditorHistoryPayload in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.8ad6c774847c38c1
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `EditorHistoryPayload`

This reference describes `EditorHistoryPayload` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`Dispose`](#api-996f241e2253adf2) | Method |
| [`FromBytes`](#api-199ef3a291ed67fb) | Method |
| [`ReadBytes`](#api-197849f49e24d7c5) | Method |
| [`isStoredOnDisk`](#api-39019b82987048f0) | Property |
| [`length`](#api-3b7d0f52a2f07516) | Property |

## Type declaration

<a id="api-8ad6c774847c38c1"></a>
<!-- api: T:Inno.Editor.Interactions.EditorHistoryPayload 0f02daea6d2742bff929309656bfe99d186ef77fc721a4fdd0d88991dd74be80 -->

```csharp
public sealed class Inno.Editor.Interactions.EditorHistoryPayload : System.IDisposable
```

Owns immutable neutral bytes used by a reload-safe editor history change.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryPayload.cs#L9).

## `Dispose`

<a id="api-996f241e2253adf2"></a>
<!-- api: M:Inno.Editor.Interactions.EditorHistoryPayload.Dispose f7ab20b5148f1826e2ab111c9de34f1c6b6cee247bb9db077d9042b9c29f2faf -->

```csharp
public void Inno.Editor.Interactions.EditorHistoryPayload.Dispose()
```

Releases the resident or temporary disk storage owned by this payload.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryPayload.cs#L90).

## `FromBytes`

<a id="api-199ef3a291ed67fb"></a>
<!-- api: M:Inno.Editor.Interactions.EditorHistoryPayload.FromBytes(System.ReadOnlySpan{System.Byte}) 8cb66b9bebc75a79ffa3847602f722674ee77f7667ade758fa52876d62a59849 -->

```csharp
public static Inno.Editor.Interactions.EditorHistoryPayload Inno.Editor.Interactions.EditorHistoryPayload.FromBytes(System.ReadOnlySpan<byte> bytes)
```

Creates an immutable history payload by copying the supplied bytes.

**Parameter `bytes`:** The neutral bytes to retain for future Undo and Redo transitions.

**Returns:** A new independently owned payload.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryPayload.cs#L55).

## `ReadBytes`

<a id="api-197849f49e24d7c5"></a>
<!-- api: M:Inno.Editor.Interactions.EditorHistoryPayload.ReadBytes f21243c933b199a975a06bbc00d3137adbdf0f911e1eeb0cd83985df54f5e3a0 -->

```csharp
public byte[] Inno.Editor.Interactions.EditorHistoryPayload.ReadBytes()
```

Reads the complete immutable payload into a newly allocated byte array.

**Returns:** A copy of the payload bytes.

**Throws `System.ObjectDisposedException`:** Thrown after the payload has been disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryPayload.cs#L66).

## `isStoredOnDisk`

<a id="api-39019b82987048f0"></a>
<!-- api: P:Inno.Editor.Interactions.EditorHistoryPayload.isStoredOnDisk aa49cff6b93d315cc37fde207ee5da3819c6a12851d8e12f4fc392db0a932bd0 -->

```csharp
public bool Inno.Editor.Interactions.EditorHistoryPayload.isStoredOnDisk { get; }
```

Gets whether the payload is retained in the temporary disk store instead of resident memory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryPayload.cs#L40).

## `length`

<a id="api-3b7d0f52a2f07516"></a>
<!-- api: P:Inno.Editor.Interactions.EditorHistoryPayload.length d8a53f50234edc30e54904909e9522fcab6dd2b2dd322ce36045bd12e783f77e -->

```csharp
public long Inno.Editor.Interactions.EditorHistoryPayload.length { get; }
```

Gets the number of immutable bytes represented by this payload.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryPayload.cs#L35).
