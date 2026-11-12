---
title: "EditorViewportNavigationProfileId"
description: "Reference for EditorViewportNavigationProfileId in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.editor-script.e3da3b9e8019a6b2
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: editor-script
contracts:
  - project.inno-editor-rendering
  - manual.scripting.use-script-api
---
# `EditorViewportNavigationProfileId`

This reference describes `EditorViewportNavigationProfileId` in `Inno.Editor.Rendering`. Read the [shared contract](../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEditor.Rendering.EditorViewportNavigationProfileId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-7d8ba2f610bd45e1) | Method |
| [`Equals`](#api-ada3158d0361771e) | Method |
| [`Equals`](#api-3e9ac960c64c89a9) | Method |
| [`GetHashCode`](#api-e5f89ca8a436c018) | Method |
| [`op_Equality`](#api-d315ed4e128711cb) | Method |
| [`op_Inequality`](#api-61c58a450d432539) | Method |
| [`ToString`](#api-f697627aec811e99) | Method |
| [`isValid`](#api-ae6b93fe3f4a5e63) | Property |
| [`value`](#api-e7808605e83d67cd) | Property |

## Type declaration

<a id="api-e3da3b9e8019a6b2"></a>
<!-- api: T:InnoEditor.Rendering.EditorViewportNavigationProfileId 8ba4fc3708fcdc81a31ebdf6d8261a4ca1730b5f0d79c1921a26dcfd19071f4d -->

```csharp
public readonly struct InnoEditor.Rendering.EditorViewportNavigationProfileId : System.IEquatable<InnoEditor.Rendering.EditorViewportNavigationProfileId>
```

Identifies a provider-defined navigation profile across reload generations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L89).

## `#ctor`

<a id="api-7d8ba2f610bd45e1"></a>
<!-- api: M:InnoEditor.Rendering.EditorViewportNavigationProfileId.#ctor(System.String) 5c9d1a88c1a735dc38cdd4cb756c0b4e64730b09e789ff1cef932279a0803510 -->

```csharp
public InnoEditor.Rendering.EditorViewportNavigationProfileId.EditorViewportNavigationProfileId(string value)
```

Creates a stable profile identifier.

**Parameter `value`:** Globally stable profile identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L97).

## `Equals`

<a id="api-ada3158d0361771e"></a>
<!-- api: M:InnoEditor.Rendering.EditorViewportNavigationProfileId.Equals(InnoEditor.Rendering.EditorViewportNavigationProfileId) f3e95b2b492aa89d8abfc79afb9b80ef15ce003917491614ddd64dc16dce99d0 -->

```csharp
public bool InnoEditor.Rendering.EditorViewportNavigationProfileId.Equals(InnoEditor.Rendering.EditorViewportNavigationProfileId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L89).

## `Equals`

<a id="api-3e9ac960c64c89a9"></a>
<!-- api: M:InnoEditor.Rendering.EditorViewportNavigationProfileId.Equals(System.Object) 3ef3c849b5b50d20d1d55961d0793b663b217dbfcb42569188eec0d986970a2a -->

```csharp
public override bool InnoEditor.Rendering.EditorViewportNavigationProfileId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L89).

## `GetHashCode`

<a id="api-e5f89ca8a436c018"></a>
<!-- api: M:InnoEditor.Rendering.EditorViewportNavigationProfileId.GetHashCode 8e86070c44d35a58c7235ab17f5d83ac7e9a608fa81b7f93e10fcd2f2ed14b40 -->

```csharp
public override int InnoEditor.Rendering.EditorViewportNavigationProfileId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L89).

## `op_Equality`

<a id="api-d315ed4e128711cb"></a>
<!-- api: M:InnoEditor.Rendering.EditorViewportNavigationProfileId.op_Equality(InnoEditor.Rendering.EditorViewportNavigationProfileId,InnoEditor.Rendering.EditorViewportNavigationProfileId) b8d6de1ef389c59bd8a1a1b85a2a93017f21d7c90e292b1d49280deb7916d710 -->

```csharp
public static bool InnoEditor.Rendering.EditorViewportNavigationProfileId.operator ==(InnoEditor.Rendering.EditorViewportNavigationProfileId left, InnoEditor.Rendering.EditorViewportNavigationProfileId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L89).

## `op_Inequality`

<a id="api-61c58a450d432539"></a>
<!-- api: M:InnoEditor.Rendering.EditorViewportNavigationProfileId.op_Inequality(InnoEditor.Rendering.EditorViewportNavigationProfileId,InnoEditor.Rendering.EditorViewportNavigationProfileId) 95e230a43536a0b77d74100b0fffcaf4ae9b65f518d676376febc5441283c4e3 -->

```csharp
public static bool InnoEditor.Rendering.EditorViewportNavigationProfileId.operator !=(InnoEditor.Rendering.EditorViewportNavigationProfileId left, InnoEditor.Rendering.EditorViewportNavigationProfileId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L89).

## `ToString`

<a id="api-f697627aec811e99"></a>
<!-- api: M:InnoEditor.Rendering.EditorViewportNavigationProfileId.ToString 686148d421ff9cc2caf3e360efe116385cdcc7065a7f0d4c298b2bb1f024decc -->

```csharp
public override string InnoEditor.Rendering.EditorViewportNavigationProfileId.ToString()
```

Formats this value as a human-readable representation.

**Returns:** The human-readable representation of this value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L119).

## `isValid`

<a id="api-ae6b93fe3f4a5e63"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportNavigationProfileId.isValid 097305767449a57978e6999826f9a9ebcd5d1e9d48814cb28b86fb3d5c2c7978 -->

```csharp
public bool InnoEditor.Rendering.EditorViewportNavigationProfileId.isValid { get; }
```

Gets whether this identifier contains a usable value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L111).

## `value`

<a id="api-e7808605e83d67cd"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportNavigationProfileId.value d60d1bd9307e501ccfbce809bda0e935992ef0c9749b24582f792ab2bc8dbe11 -->

```csharp
public string InnoEditor.Rendering.EditorViewportNavigationProfileId.value { get; }
```

Gets the stable profile identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L106).
