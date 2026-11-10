---
title: "EditorDropStatus"
description: "Reference for EditorDropStatus in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.a1ec64775e5e0f67
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `EditorDropStatus`

This reference describes `EditorDropStatus` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Editor.Interactions.EditorDropStatus>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-4a51487ff4828ebc) | Method |
| [`Accept`](#api-39a644805516446d) | Method |
| [`Equals`](#api-e49c02be39ef2b27) | Method |
| [`Equals`](#api-6dfa4e22d2a6d870) | Method |
| [`GetHashCode`](#api-bd715a3d5cbf0439) | Method |
| [`op_Equality`](#api-48cea816f5c41a6c) | Method |
| [`op_Inequality`](#api-91ac93d64536c33e) | Method |
| [`ToString`](#api-d7bf44e91332a5ed) | Method |
| [`canDrop`](#api-3283ad3054fdcade) | Property |
| [`rejected`](#api-3c7dbacfd0af2dfd) | Property |
| [`visual`](#api-ffb659bdcf55ce6d) | Property |

## Type declaration

<a id="api-a1ec64775e5e0f67"></a>
<!-- api: T:Inno.Editor.Interactions.EditorDropStatus 976b5303b57aa7874a745ad12d274630bf2b8a1d40717da3729e86233bcef2e0 -->

```csharp
public readonly record struct Inno.Editor.Interactions.EditorDropStatus : System.IEquatable<Inno.Editor.Interactions.EditorDropStatus>
```

Describes whether and how a target accepts the active drag.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropStatus.cs#L6).

## `#ctor`

<a id="api-4a51487ff4828ebc"></a>
<!-- api: M:Inno.Editor.Interactions.EditorDropStatus.#ctor(System.Boolean,Inno.Editor.Interactions.EditorDropVisual) 9867f9861a7046ca83b53c3225e40070d11eb0f3cd4fffb542f783095e35cfa8 -->

```csharp
public Inno.Editor.Interactions.EditorDropStatus.EditorDropStatus(bool canDrop, Inno.Editor.Interactions.EditorDropVisual visual)
```

Creates the compatibility and presentation state of a potential drop target.

**Parameter `canDrop`:** Whether the active source may be delivered to the target.

**Parameter `visual`:** The standard visual requested for the target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropStatus.cs#L17).

## `Accept`

<a id="api-39a644805516446d"></a>
<!-- api: M:Inno.Editor.Interactions.EditorDropStatus.Accept(Inno.Editor.Interactions.EditorDropVisual) 3916b8a1d6415c7dd01f40efcfcbbac9f88ffa43aa1a3ed253b565be9efd3b02 -->

```csharp
public static Inno.Editor.Interactions.EditorDropStatus Inno.Editor.Interactions.EditorDropStatus.Accept(Inno.Editor.Interactions.EditorDropVisual visual = Inno.Editor.Interactions.EditorDropVisual.Highlight)
```

Creates an accepted drop status with the requested standard target visual.

**Parameter `visual`:** The standard visual drawn while the compatible source hovers the target.

**Returns:** An accepted drop status.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropStatus.cs#L49).

## `Equals`

<a id="api-e49c02be39ef2b27"></a>
<!-- api: M:Inno.Editor.Interactions.EditorDropStatus.Equals(Inno.Editor.Interactions.EditorDropStatus) 22d56b94cdc312df5caaefee1d4c9e8a9e6f4fbe4b02e6d9db670521331b7335 -->

```csharp
public bool Inno.Editor.Interactions.EditorDropStatus.Equals(Inno.Editor.Interactions.EditorDropStatus other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropStatus.cs#L6).

## `Equals`

<a id="api-6dfa4e22d2a6d870"></a>
<!-- api: M:Inno.Editor.Interactions.EditorDropStatus.Equals(System.Object) e68d1287a219db1374a619d88c464be35e851b9548f0e5ad10e2dd103f19f3e7 -->

```csharp
public override bool Inno.Editor.Interactions.EditorDropStatus.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropStatus.cs#L6).

## `GetHashCode`

<a id="api-bd715a3d5cbf0439"></a>
<!-- api: M:Inno.Editor.Interactions.EditorDropStatus.GetHashCode d260f9955203785a4cc62390f8cb6015b82de59e1b9f8b4972ead119d6337483 -->

```csharp
public override int Inno.Editor.Interactions.EditorDropStatus.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropStatus.cs#L6).

## `op_Equality`

<a id="api-48cea816f5c41a6c"></a>
<!-- api: M:Inno.Editor.Interactions.EditorDropStatus.op_Equality(Inno.Editor.Interactions.EditorDropStatus,Inno.Editor.Interactions.EditorDropStatus) 912aab6e1ae790cc06ac103c8fd4b7161276fbc4910f49b4e300f83bf1c07f5f -->

```csharp
public static bool Inno.Editor.Interactions.EditorDropStatus.operator ==(Inno.Editor.Interactions.EditorDropStatus left, Inno.Editor.Interactions.EditorDropStatus right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropStatus.cs#L6).

## `op_Inequality`

<a id="api-91ac93d64536c33e"></a>
<!-- api: M:Inno.Editor.Interactions.EditorDropStatus.op_Inequality(Inno.Editor.Interactions.EditorDropStatus,Inno.Editor.Interactions.EditorDropStatus) 21a3bb653e6ed0ed97db602033f867080e42a9f841d7425b6e3c39bff21935f4 -->

```csharp
public static bool Inno.Editor.Interactions.EditorDropStatus.operator !=(Inno.Editor.Interactions.EditorDropStatus left, Inno.Editor.Interactions.EditorDropStatus right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropStatus.cs#L6).

## `ToString`

<a id="api-d7bf44e91332a5ed"></a>
<!-- api: M:Inno.Editor.Interactions.EditorDropStatus.ToString c9b73f49e716e1aa7b9084de3fdefa2545861cc9b2059c42c5df07df3515578c -->

```csharp
public override string Inno.Editor.Interactions.EditorDropStatus.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropStatus.cs#L6).

## `canDrop`

<a id="api-3283ad3054fdcade"></a>
<!-- api: P:Inno.Editor.Interactions.EditorDropStatus.canDrop 436b68a7e3dc5d6f0378d36b14b2a168a9870fe9a7179f98bcdfb6dad84c4de8 -->

```csharp
public bool Inno.Editor.Interactions.EditorDropStatus.canDrop { get; }
```

Gets whether the active source may be dropped.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropStatus.cs#L28).

## `rejected`

<a id="api-3c7dbacfd0af2dfd"></a>
<!-- api: P:Inno.Editor.Interactions.EditorDropStatus.rejected f0a6f328111fa78bcafcfcf5b7abbd0e50f798193853f89663b3b13ad06a8072 -->

```csharp
public static Inno.Editor.Interactions.EditorDropStatus Inno.Editor.Interactions.EditorDropStatus.rejected { get; }
```

Gets an incompatible drop status.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropStatus.cs#L38).

## `visual`

<a id="api-ffb659bdcf55ce6d"></a>
<!-- api: P:Inno.Editor.Interactions.EditorDropStatus.visual fc56bbb889e290aaaa253876b1bd3190e13e31c69bb97470ecc2c21ecf400b35 -->

```csharp
public Inno.Editor.Interactions.EditorDropVisual Inno.Editor.Interactions.EditorDropStatus.visual { get; }
```

Gets the standard target visual.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropStatus.cs#L33).
