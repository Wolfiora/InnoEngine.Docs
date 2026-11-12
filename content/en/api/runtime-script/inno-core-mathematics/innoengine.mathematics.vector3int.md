---
title: "Vector3Int"
description: "Reference for Vector3Int in Inno.Core.Mathematics."
uid: api.inno.core.mathematics.runtime-script.d9a5c3dbaaf1d329
kind: api
owners:
  - Inno.Core.Mathematics
apiSurface: runtime-script
contracts:
  - project.inno-core-mathematics#numeric-and-layout-contract
  - manual.scripting.use-script-api
---
# `Vector3Int`

This reference describes `Vector3Int` in `Inno.Core.Mathematics`. Read the [shared contract](../../projects/inno-core-mathematics.md#numeric-and-layout-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Mathematics.Vector3Int>`.

## Members

| Member | Kind |
| --- | --- |
| [`BACK`](#api-52c389526c8450a9) | Field |
| [`DOWN`](#api-9168956b0955b5c1) | Field |
| [`FORWARD`](#api-90f7343ed648f3ad) | Field |
| [`LEFT`](#api-062da97bae7dcb19) | Field |
| [`ONE`](#api-c4a7edda0b653c8e) | Field |
| [`RIGHT`](#api-e0ac61d441dfac67) | Field |
| [`UP`](#api-75f79049b33b1715) | Field |
| [`x`](#api-d9b50e580aef2130) | Field |
| [`y`](#api-be08351418907af0) | Field |
| [`z`](#api-a0a0bf0c29fb8465) | Field |
| [`ZERO`](#api-1b441fdd147b9fa7) | Field |
| [`#ctor`](#api-ae5965efb8cd9f2a) | Method |
| [`Equals`](#api-1bb62c1c22ed53c9) | Method |
| [`Equals`](#api-c1c7ca87e529041f) | Method |
| [`GetHashCode`](#api-3ce8e94a2ef660f3) | Method |
| [`op_Addition`](#api-7191ba0cf1cb5fb9) | Method |
| [`op_Division`](#api-09b10ebf19e56276) | Method |
| [`op_Equality`](#api-bf46df4aff687406) | Method |
| [`op_Explicit`](#api-97f3ff457db4c52d) | Method |
| [`op_Explicit`](#api-2b655c2a9202fd09) | Method |
| [`op_Inequality`](#api-ee544fb003c28dc3) | Method |
| [`op_Multiply`](#api-e6fd6f967effb517) | Method |
| [`op_Multiply`](#api-ef6ea7fc67e4e2cc) | Method |
| [`op_Subtraction`](#api-5f94fa75a5fd5f2b) | Method |
| [`op_UnaryNegation`](#api-f49c528da2960631) | Method |
| [`ToString`](#api-1faf958aa57993e6) | Method |

## Type declaration

<a id="api-d9a5c3dbaaf1d329"></a>
<!-- api: T:InnoEngine.Mathematics.Vector3Int a0bac4691751796c166808486b7ff47ca31aac6f929367c5953c2c4d382d59b4 -->

```csharp
public struct InnoEngine.Mathematics.Vector3Int : System.IEquatable<InnoEngine.Mathematics.Vector3Int>
```

Represents a mutable vector3int value with component-wise arithmetic semantics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3Int.cs#L11).

## `BACK`

<a id="api-52c389526c8450a9"></a>
<!-- api: F:InnoEngine.Mathematics.Vector3Int.BACK 0f5a11f2f23fcf36b04f85903fa8b6c4a028b5e9a9cb2bec299a619b92c2ff23 -->

```csharp
public static readonly InnoEngine.Mathematics.Vector3Int InnoEngine.Mathematics.Vector3Int.BACK
```

The back value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3Int.cs#L79).

## `DOWN`

<a id="api-9168956b0955b5c1"></a>
<!-- api: F:InnoEngine.Mathematics.Vector3Int.DOWN 1448566040fba02609002fe0a8d4319c0dfac16e11c25adfa90dede5872f34ff -->

```csharp
public static readonly InnoEngine.Mathematics.Vector3Int InnoEngine.Mathematics.Vector3Int.DOWN
```

The down value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3Int.cs#L63).

## `FORWARD`

<a id="api-90f7343ed648f3ad"></a>
<!-- api: F:InnoEngine.Mathematics.Vector3Int.FORWARD 963723956a4f26373fdc7c8d2455d7cc4830c2b5e06f79addbb07729aea2c034 -->

```csharp
public static readonly InnoEngine.Mathematics.Vector3Int InnoEngine.Mathematics.Vector3Int.FORWARD
```

The forward value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3Int.cs#L75).

## `LEFT`

<a id="api-062da97bae7dcb19"></a>
<!-- api: F:InnoEngine.Mathematics.Vector3Int.LEFT 8cb68a9e3154dd5587da76f395ed571979fc121934bc9e9fc41647ce17a11a08 -->

```csharp
public static readonly InnoEngine.Mathematics.Vector3Int InnoEngine.Mathematics.Vector3Int.LEFT
```

The left value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3Int.cs#L67).

## `ONE`

<a id="api-c4a7edda0b653c8e"></a>
<!-- api: F:InnoEngine.Mathematics.Vector3Int.ONE c1fb464131d12dd4bfdf2510cede91351e912f7c69c445e0a7fefce02c088533 -->

```csharp
public static readonly InnoEngine.Mathematics.Vector3Int InnoEngine.Mathematics.Vector3Int.ONE
```

A value whose components are all one.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3Int.cs#L55).

## `RIGHT`

<a id="api-e0ac61d441dfac67"></a>
<!-- api: F:InnoEngine.Mathematics.Vector3Int.RIGHT 930b0f1a34450f053323f6518b38952b31e05995dd8428a4d8a4c296ee8ff227 -->

```csharp
public static readonly InnoEngine.Mathematics.Vector3Int InnoEngine.Mathematics.Vector3Int.RIGHT
```

The right value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3Int.cs#L71).

## `UP`

<a id="api-75f79049b33b1715"></a>
<!-- api: F:InnoEngine.Mathematics.Vector3Int.UP c4e4d6a1776e9a687e0d23ae587c73ed6c307ff2dfdd5a2edc78b2a560e8ada7 -->

```csharp
public static readonly InnoEngine.Mathematics.Vector3Int InnoEngine.Mathematics.Vector3Int.UP
```

The up value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3Int.cs#L59).

## `x`

<a id="api-d9b50e580aef2130"></a>
<!-- api: F:InnoEngine.Mathematics.Vector3Int.x 5b9a35d2e6468efe2e7bc787af05835122b3beca5d7254d8ee4f38438abdc19d -->

```csharp
public int InnoEngine.Mathematics.Vector3Int.x
```

The horizontal or first component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3Int.cs#L16).

## `y`

<a id="api-be08351418907af0"></a>
<!-- api: F:InnoEngine.Mathematics.Vector3Int.y f773fec494d4eebc2d82df9e1842a9983ecede2b843f0dda2af60dd6ca29aef4 -->

```csharp
public int InnoEngine.Mathematics.Vector3Int.y
```

The vertical or second component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3Int.cs#L20).

## `z`

<a id="api-a0a0bf0c29fb8465"></a>
<!-- api: F:InnoEngine.Mathematics.Vector3Int.z a7c704a695ad94fd83006fecade44aa56f38a4aef48502650962296f78bf1f52 -->

```csharp
public int InnoEngine.Mathematics.Vector3Int.z
```

The depth or third component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3Int.cs#L24).

## `ZERO`

<a id="api-1b441fdd147b9fa7"></a>
<!-- api: F:InnoEngine.Mathematics.Vector3Int.ZERO eea5de6091a2ae7223a6a3e2986a12035bbbb570bb6ae4074f1f51b451d5a1e5 -->

```csharp
public static readonly InnoEngine.Mathematics.Vector3Int InnoEngine.Mathematics.Vector3Int.ZERO
```

A value whose components are all zero.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3Int.cs#L51).

## `#ctor`

<a id="api-ae5965efb8cd9f2a"></a>
<!-- api: M:InnoEngine.Mathematics.Vector3Int.#ctor(System.Int32,System.Int32,System.Int32) 9fb1257ac873789a9d2db520bea641b4eac03810eed8e989bcb9c269ed072e7e -->

```csharp
public InnoEngine.Mathematics.Vector3Int.Vector3Int(int x, int y, int z)
```

Creates a vector from explicit component values.

**Parameter `x`:** The horizontal or first component.

**Parameter `y`:** The vertical or second component.

**Parameter `z`:** The depth or third component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3Int.cs#L38).

## `Equals`

<a id="api-1bb62c1c22ed53c9"></a>
<!-- api: M:InnoEngine.Mathematics.Vector3Int.Equals(InnoEngine.Mathematics.Vector3Int) 78c8717fbbf72d4f639abed56d8bc09c39708b3860746d958d90a09f6e259b0e -->

```csharp
public bool InnoEngine.Mathematics.Vector3Int.Equals(InnoEngine.Mathematics.Vector3Int other)
```

Determines whether this value and the supplied value represent the same logical state.

**Parameter `other`:** The strongly typed value compared with this value.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3Int.cs#L263).

## `Equals`

<a id="api-c1c7ca87e529041f"></a>
<!-- api: M:InnoEngine.Mathematics.Vector3Int.Equals(System.Object) e076967e75c79cb7bfa913039492cdb48b77735917d399d7d80485bbed215664 -->

```csharp
public override bool InnoEngine.Mathematics.Vector3Int.Equals(object? obj)
```

Determines whether this value and the supplied value represent the same logical state.

**Parameter `obj`:** The object compared with this value.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3Int.cs#L252).

## `GetHashCode`

<a id="api-3ce8e94a2ef660f3"></a>
<!-- api: M:InnoEngine.Mathematics.Vector3Int.GetHashCode 8f83bde64b419c8606f038653d43948a6a19659b053b277eb3fe0e8ef7e31550 -->

```csharp
public override int InnoEngine.Mathematics.Vector3Int.GetHashCode()
```

Computes a hash code consistent with the implemented equality contract.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3Int.cs#L271).

## `op_Addition`

<a id="api-7191ba0cf1cb5fb9"></a>
<!-- api: M:InnoEngine.Mathematics.Vector3Int.op_Addition(InnoEngine.Mathematics.Vector3Int,InnoEngine.Mathematics.Vector3Int) 65e5b4230319e5a25bda0c95aa25aec320185c95752a1a2e1aa5f0c7bf193208 -->

```csharp
public static InnoEngine.Mathematics.Vector3Int InnoEngine.Mathematics.Vector3Int.operator +(InnoEngine.Mathematics.Vector3Int a, InnoEngine.Mathematics.Vector3Int b)
```

Adds the supplied values component by component.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** The validated vector3int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3Int.cs#L94).

## `op_Division`

<a id="api-09b10ebf19e56276"></a>
<!-- api: M:InnoEngine.Mathematics.Vector3Int.op_Division(InnoEngine.Mathematics.Vector3Int,System.Int32) 82ffcb35520aca08a48059792fb8fa912792ff68eb136437fdf5172330902990 -->

```csharp
public static InnoEngine.Mathematics.Vector3Int InnoEngine.Mathematics.Vector3Int.operator /(InnoEngine.Mathematics.Vector3Int v, int scalar)
```

Divides the supplied value by the scalar divisor component by component.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Parameter `scalar`:** The scalar applied to every component.

**Returns:** The validated vector3int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3Int.cs#L178).

## `op_Equality`

<a id="api-bf46df4aff687406"></a>
<!-- api: M:InnoEngine.Mathematics.Vector3Int.op_Equality(InnoEngine.Mathematics.Vector3Int,InnoEngine.Mathematics.Vector3Int) bf637ec997cf09945fb15e6cf162b9eb2dec8a2f5d944efded8e04c90e10462e -->

```csharp
public static bool InnoEngine.Mathematics.Vector3Int.operator ==(InnoEngine.Mathematics.Vector3Int a, InnoEngine.Mathematics.Vector3Int b)
```

Determines whether the supplied values are equal under the type's equality tolerance.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3Int.cs#L196).

## `op_Explicit`

<a id="api-97f3ff457db4c52d"></a>
<!-- api: M:InnoEngine.Mathematics.Vector3Int.op_Explicit(InnoEngine.Mathematics.Vector3)~InnoEngine.Mathematics.Vector3Int a4fa0658c2038ef9a7053f7269c79740ddc5ccbe8a8385f5ba0dab09cb5e3166 -->

```csharp
public static InnoEngine.Mathematics.Vector3Int.explicit operator InnoEngine.Mathematics.Vector3Int(InnoEngine.Mathematics.Vector3 v)
```

Converts the supplied value to `InnoEngine.Mathematics.Vector3Int`.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Returns:** The validated vector3int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3Int.cs#L241).

## `op_Explicit`

<a id="api-2b655c2a9202fd09"></a>
<!-- api: M:InnoEngine.Mathematics.Vector3Int.op_Explicit(InnoEngine.Mathematics.Vector3Int)~InnoEngine.Mathematics.Vector3 1297f3970665433f07e27c7fec26c4802e9b86c442014908f1405a65a75bceca -->

```csharp
public static InnoEngine.Mathematics.Vector3Int.explicit operator InnoEngine.Mathematics.Vector3(InnoEngine.Mathematics.Vector3Int v)
```

Converts the supplied value to `InnoEngine.Mathematics.Vector3`.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Returns:** The validated vector3 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3Int.cs#L229).

## `op_Inequality`

<a id="api-ee544fb003c28dc3"></a>
<!-- api: M:InnoEngine.Mathematics.Vector3Int.op_Inequality(InnoEngine.Mathematics.Vector3Int,InnoEngine.Mathematics.Vector3Int) 571f517dd36496addb9b60124c75bef2eff357dbb52c77024c5f10a01052c659 -->

```csharp
public static bool InnoEngine.Mathematics.Vector3Int.operator !=(InnoEngine.Mathematics.Vector3Int a, InnoEngine.Mathematics.Vector3Int b)
```

Determines whether the supplied values differ under the type's equality tolerance.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3Int.cs#L214).

## `op_Multiply`

<a id="api-e6fd6f967effb517"></a>
<!-- api: M:InnoEngine.Mathematics.Vector3Int.op_Multiply(InnoEngine.Mathematics.Vector3Int,System.Int32) b60c159f8ed265b126596ada84435b0ef737cf750b716283704ed936ded26f6c -->

```csharp
public static InnoEngine.Mathematics.Vector3Int InnoEngine.Mathematics.Vector3Int.operator *(InnoEngine.Mathematics.Vector3Int v, int scalar)
```

Multiplies the supplied values according to their algebraic contract.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Parameter `scalar`:** The scalar applied to every component.

**Returns:** The validated vector3int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3Int.cs#L142).

## `op_Multiply`

<a id="api-ef6ea7fc67e4e2cc"></a>
<!-- api: M:InnoEngine.Mathematics.Vector3Int.op_Multiply(System.Int32,InnoEngine.Mathematics.Vector3Int) 0b83c8dfb3b986398a2110dfd1596a19b76e9f239182e8edcb13070078127848 -->

```csharp
public static InnoEngine.Mathematics.Vector3Int InnoEngine.Mathematics.Vector3Int.operator *(int scalar, InnoEngine.Mathematics.Vector3Int v)
```

Multiplies the supplied values according to their algebraic contract.

**Parameter `scalar`:** The scalar applied to every component.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Returns:** The validated vector3int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3Int.cs#L160).

## `op_Subtraction`

<a id="api-5f94fa75a5fd5f2b"></a>
<!-- api: M:InnoEngine.Mathematics.Vector3Int.op_Subtraction(InnoEngine.Mathematics.Vector3Int,InnoEngine.Mathematics.Vector3Int) 1e6e4b090adc95bd1106cfde00d71222f0ef184ff646dc92010889ab1cbccc6c -->

```csharp
public static InnoEngine.Mathematics.Vector3Int InnoEngine.Mathematics.Vector3Int.operator -(InnoEngine.Mathematics.Vector3Int a, InnoEngine.Mathematics.Vector3Int b)
```

Subtracts or negates the supplied value component by component.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** The validated vector3int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3Int.cs#L112).

## `op_UnaryNegation`

<a id="api-f49c528da2960631"></a>
<!-- api: M:InnoEngine.Mathematics.Vector3Int.op_UnaryNegation(InnoEngine.Mathematics.Vector3Int) 2fc43c7a804487f2437581595e63872520157e7b6c89f828e9dacbc7fb438a4b -->

```csharp
public static InnoEngine.Mathematics.Vector3Int InnoEngine.Mathematics.Vector3Int.operator -(InnoEngine.Mathematics.Vector3Int v)
```

Subtracts or negates the supplied value component by component.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Returns:** The validated vector3int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3Int.cs#L127).

## `ToString`

<a id="api-1faf958aa57993e6"></a>
<!-- api: M:InnoEngine.Mathematics.Vector3Int.ToString f7e1dde3354f781616689c2a20b44476930fd24ceed7332aa629425b02dd344c -->

```csharp
public override string InnoEngine.Mathematics.Vector3Int.ToString()
```

Formats this value as a human-readable component list.

**Returns:** The validated text representation owned by the caller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3Int.cs#L279).
