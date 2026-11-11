---
title: "UiMeshHandle"
description: "Reference for UiMeshHandle in Inno.UI."
uid: api.inno.ui.015e55fcad5b2368
kind: api
owners:
  - Inno.UI
apiSurface: source-clr
contracts:
  - project.inno-ui#document-and-frame-contract
---
# `UiMeshHandle`

This reference describes `UiMeshHandle` in `Inno.UI`. Read the [shared contract](../../projects/inno-ui.md#document-and-frame-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.UI.UiMeshHandle>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-f0dfc167befd83a7) | Method |
| [`Deconstruct`](#api-e6a63ee936a4e08b) | Method |
| [`Equals`](#api-dbe7fbecb0f3c059) | Method |
| [`Equals`](#api-e25001db7f781a29) | Method |
| [`GetHashCode`](#api-2a74305d11d8a817) | Method |
| [`op_Equality`](#api-c1e81f1a998afee6) | Method |
| [`op_Inequality`](#api-2f4b9cbffb36d86f) | Method |
| [`ToString`](#api-858b8bd9815ac75c) | Method |
| [`isValid`](#api-d6f5db618581b154) | Property |
| [`value`](#api-a33933d5bd4a04f3) | Property |

## Type declaration

<a id="api-015e55fcad5b2368"></a>
<!-- api: T:Inno.UI.UiMeshHandle 08a65a7afcc04563cf375edba0e722563e7d895ab255135c1d1257ff45fcd3f6 -->

```csharp
public readonly record struct Inno.UI.UiMeshHandle : System.IEquatable<Inno.UI.UiMeshHandle>
```

Identifies one backend-owned immutable mesh generation.

**Parameter `value`:** The concrete value read or transformed by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiIdentifiers.cs#L50).

## `#ctor`

<a id="api-f0dfc167befd83a7"></a>
<!-- api: M:Inno.UI.UiMeshHandle.#ctor(System.UInt64) 6d9b4593602dcac090724dfed6ab28badf0164dcbe612929ae7d20993c3c5e1e -->

```csharp
public Inno.UI.UiMeshHandle.UiMeshHandle(ulong value)
```

Identifies one backend-owned immutable mesh generation.

**Parameter `value`:** The concrete value read or transformed by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiIdentifiers.cs#L50).

## `Deconstruct`

<a id="api-e6a63ee936a4e08b"></a>
<!-- api: M:Inno.UI.UiMeshHandle.Deconstruct(System.UInt64@) b40c41f57236b9e8a3438f73879d77b04b7f94993c1947af147e284c3025deab -->

```csharp
public void Inno.UI.UiMeshHandle.Deconstruct(out ulong value)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiIdentifiers.cs#L50).

## `Equals`

<a id="api-dbe7fbecb0f3c059"></a>
<!-- api: M:Inno.UI.UiMeshHandle.Equals(Inno.UI.UiMeshHandle) fbb94ae3651766f6048b5e3aafb3cba2af172bcdc272626e1f08455f131bbf73 -->

```csharp
public bool Inno.UI.UiMeshHandle.Equals(Inno.UI.UiMeshHandle other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiIdentifiers.cs#L50).

## `Equals`

<a id="api-e25001db7f781a29"></a>
<!-- api: M:Inno.UI.UiMeshHandle.Equals(System.Object) feda83241dd3f1be9f223bd9fd2f9599d2a851ac382aac3e2bc97a2b1f4bbb1c -->

```csharp
public override bool Inno.UI.UiMeshHandle.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiIdentifiers.cs#L50).

## `GetHashCode`

<a id="api-2a74305d11d8a817"></a>
<!-- api: M:Inno.UI.UiMeshHandle.GetHashCode e247f22edc1303c449ec13d96d23ce027929e41b6a9bf04f7afd3e86ae143d1e -->

```csharp
public override int Inno.UI.UiMeshHandle.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiIdentifiers.cs#L50).

## `op_Equality`

<a id="api-c1e81f1a998afee6"></a>
<!-- api: M:Inno.UI.UiMeshHandle.op_Equality(Inno.UI.UiMeshHandle,Inno.UI.UiMeshHandle) 50fc888ebf4895283ab31a5b923a43865de8165eb7cfd57e11f0c320201e7a08 -->

```csharp
public static bool Inno.UI.UiMeshHandle.operator ==(Inno.UI.UiMeshHandle left, Inno.UI.UiMeshHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiIdentifiers.cs#L50).

## `op_Inequality`

<a id="api-2f4b9cbffb36d86f"></a>
<!-- api: M:Inno.UI.UiMeshHandle.op_Inequality(Inno.UI.UiMeshHandle,Inno.UI.UiMeshHandle) e8ae75c593386acca523b1bb1648fddc1ea5f25002a9987bd211664b6d1ea17b -->

```csharp
public static bool Inno.UI.UiMeshHandle.operator !=(Inno.UI.UiMeshHandle left, Inno.UI.UiMeshHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiIdentifiers.cs#L50).

## `ToString`

<a id="api-858b8bd9815ac75c"></a>
<!-- api: M:Inno.UI.UiMeshHandle.ToString 2ecf38201f605f3da0b4d0e32119e725a6a6db57eb04d74d5fb2d305e4e55f3f -->

```csharp
public override string Inno.UI.UiMeshHandle.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiIdentifiers.cs#L50).

## `isValid`

<a id="api-d6f5db618581b154"></a>
<!-- api: P:Inno.UI.UiMeshHandle.isValid 1def3081f09c7f58a6a4717f4f6bcffefb36c70179f777ead24c6db2a3b6b17f -->

```csharp
public bool Inno.UI.UiMeshHandle.isValid { get; }
```

Gets whether the handle identifies a mesh.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiIdentifiers.cs#L55).

## `value`

<a id="api-a33933d5bd4a04f3"></a>
<!-- api: P:Inno.UI.UiMeshHandle.value 142971a6de133d32c80bf04ac6c2ee08bf2ea58132a6c6f585b2bf845ad658a8 -->

```csharp
public ulong Inno.UI.UiMeshHandle.value { get; init; }
```

The concrete value read or transformed by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiIdentifiers.cs#L50).
