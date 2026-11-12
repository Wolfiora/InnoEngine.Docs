---
title: "Vector2Int"
description: "Reference for Vector2Int in Inno.Core.Mathematics."
uid: api.inno.core.mathematics.runtime-script.9c8acd485fe44fc8
kind: api
owners:
  - Inno.Core.Mathematics
apiSurface: runtime-script
contracts:
  - project.inno-core-mathematics#numeric-and-layout-contract
  - manual.scripting.use-script-api
---
# `Vector2Int`

This reference describes `Vector2Int` in `Inno.Core.Mathematics`. Read the [shared contract](../../projects/inno-core-mathematics.md#numeric-and-layout-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Mathematics.Vector2Int>`.

## Members

| Member | Kind |
| --- | --- |
| [`ONE`](#api-5008af4e6f5a9d08) | Field |
| [`UNIT_X`](#api-70a0f68f71c57d84) | Field |
| [`UNIT_Y`](#api-8aafb5afe5a9c1c3) | Field |
| [`x`](#api-4cf997a946bf0904) | Field |
| [`y`](#api-75e8c8a32a16217f) | Field |
| [`ZERO`](#api-ae3a11d1ca9ebeec) | Field |
| [`#ctor`](#api-dc9d82a0b7a82b78) | Method |
| [`Equals`](#api-0def837d174daab3) | Method |
| [`Equals`](#api-677434c2cbc12433) | Method |
| [`GetHashCode`](#api-9b70c30f05a0dae3) | Method |
| [`op_Addition`](#api-4de48ace8bb2b326) | Method |
| [`op_Division`](#api-de2727db9c7cd5e3) | Method |
| [`op_Equality`](#api-006945a43814c1bc) | Method |
| [`op_Explicit`](#api-022f6aed3a8275e1) | Method |
| [`op_Explicit`](#api-f397c94c1b386c68) | Method |
| [`op_Inequality`](#api-1e27c83adcfd612d) | Method |
| [`op_Multiply`](#api-527e6b7197fcfa4a) | Method |
| [`op_Multiply`](#api-b34ff59e22a18435) | Method |
| [`op_Subtraction`](#api-eef7630fa13b9fc5) | Method |
| [`op_UnaryNegation`](#api-bb18a4567ba87bb7) | Method |
| [`ToString`](#api-21551db99a42be49) | Method |

## Type declaration

<a id="api-9c8acd485fe44fc8"></a>
<!-- api: T:InnoEngine.Mathematics.Vector2Int db51ce3f1eaad01424b6aa557f435829923f9aaa71961cc2216c23f972759cdd -->

```csharp
public struct InnoEngine.Mathematics.Vector2Int : System.IEquatable<InnoEngine.Mathematics.Vector2Int>
```

Represents a mutable vector2int value with component-wise arithmetic semantics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2Int.cs#L11).

## `ONE`

<a id="api-5008af4e6f5a9d08"></a>
<!-- api: F:InnoEngine.Mathematics.Vector2Int.ONE 88eaec7945ea6e81e968b30bb80fb2be2c36685c113eb636ccd0ae54d5e47bf4 -->

```csharp
public static readonly InnoEngine.Mathematics.Vector2Int InnoEngine.Mathematics.Vector2Int.ONE
```

A value whose components are all one.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2Int.cs#L47).

## `UNIT_X`

<a id="api-70a0f68f71c57d84"></a>
<!-- api: F:InnoEngine.Mathematics.Vector2Int.UNIT_X 615d671ea5d55e5049bde09b65042aa3fddf76505355ea80e360e0fb56a09ec4 -->

```csharp
public static readonly InnoEngine.Mathematics.Vector2Int InnoEngine.Mathematics.Vector2Int.UNIT_X
```

A unit value aligned with the x axis.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2Int.cs#L51).

## `UNIT_Y`

<a id="api-8aafb5afe5a9c1c3"></a>
<!-- api: F:InnoEngine.Mathematics.Vector2Int.UNIT_Y 0ff855bb699c6584b90dbff9f06fc86b60235e8d46b1c128fa372532ece0f226 -->

```csharp
public static readonly InnoEngine.Mathematics.Vector2Int InnoEngine.Mathematics.Vector2Int.UNIT_Y
```

A unit value aligned with the y axis.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2Int.cs#L55).

## `x`

<a id="api-4cf997a946bf0904"></a>
<!-- api: F:InnoEngine.Mathematics.Vector2Int.x a03471c8fa80b01f10fa754ac709af170978db507ca273857e268c3c876f7919 -->

```csharp
public int InnoEngine.Mathematics.Vector2Int.x
```

The horizontal or first component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2Int.cs#L16).

## `y`

<a id="api-75e8c8a32a16217f"></a>
<!-- api: F:InnoEngine.Mathematics.Vector2Int.y 6eae917dc06da1755b8febcdffbe7da0233a3c6a85cfac7e2f60712080fa333a -->

```csharp
public int InnoEngine.Mathematics.Vector2Int.y
```

The vertical or second component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2Int.cs#L20).

## `ZERO`

<a id="api-ae3a11d1ca9ebeec"></a>
<!-- api: F:InnoEngine.Mathematics.Vector2Int.ZERO 4026a0ba02895b6c6687a785f79c250f153e0855f7aef96565cecf4a33f5c92e -->

```csharp
public static readonly InnoEngine.Mathematics.Vector2Int InnoEngine.Mathematics.Vector2Int.ZERO
```

A value whose components are all zero.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2Int.cs#L43).

## `#ctor`

<a id="api-dc9d82a0b7a82b78"></a>
<!-- api: M:InnoEngine.Mathematics.Vector2Int.#ctor(System.Int32,System.Int32) 3258b4b9594991253e209fd0302bff9fa7f9de293ca09e1a557797dabcb51e0f -->

```csharp
public InnoEngine.Mathematics.Vector2Int.Vector2Int(int x, int y)
```

Creates a vector from explicit component values.

**Parameter `x`:** The horizontal or first component.

**Parameter `y`:** The vertical or second component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2Int.cs#L31).

## `Equals`

<a id="api-0def837d174daab3"></a>
<!-- api: M:InnoEngine.Mathematics.Vector2Int.Equals(InnoEngine.Mathematics.Vector2Int) 060c4c3888cc42fbf738b075bc2cd56a17c4263af7e8eae31399d0497bb653d4 -->

```csharp
public bool InnoEngine.Mathematics.Vector2Int.Equals(InnoEngine.Mathematics.Vector2Int other)
```

Determines whether this value and the supplied value represent the same logical state.

**Parameter `other`:** The strongly typed value compared with this value.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2Int.cs#L242).

## `Equals`

<a id="api-677434c2cbc12433"></a>
<!-- api: M:InnoEngine.Mathematics.Vector2Int.Equals(System.Object) e542b3714d61ac2fc813327981e30fe82caeaf1a8b542497af514e4aae14849e -->

```csharp
public override bool InnoEngine.Mathematics.Vector2Int.Equals(object? obj)
```

Determines whether this value and the supplied value represent the same logical state.

**Parameter `obj`:** The object compared with this value.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2Int.cs#L231).

## `GetHashCode`

<a id="api-9b70c30f05a0dae3"></a>
<!-- api: M:InnoEngine.Mathematics.Vector2Int.GetHashCode 4d617e0e5cce912d50a6114f01bc730e3697ea90701d9caf107e14e849f75941 -->

```csharp
public override int InnoEngine.Mathematics.Vector2Int.GetHashCode()
```

Computes a hash code consistent with the implemented equality contract.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2Int.cs#L250).

## `op_Addition`

<a id="api-4de48ace8bb2b326"></a>
<!-- api: M:InnoEngine.Mathematics.Vector2Int.op_Addition(InnoEngine.Mathematics.Vector2Int,InnoEngine.Mathematics.Vector2Int) 172133278dc082d141f551be7ae8f694b641eb0d20030982148643e594a97ddd -->

```csharp
public static InnoEngine.Mathematics.Vector2Int InnoEngine.Mathematics.Vector2Int.operator +(InnoEngine.Mathematics.Vector2Int a, InnoEngine.Mathematics.Vector2Int b)
```

Adds the supplied values component by component.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** The validated vector2int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2Int.cs#L71).

## `op_Division`

<a id="api-de2727db9c7cd5e3"></a>
<!-- api: M:InnoEngine.Mathematics.Vector2Int.op_Division(InnoEngine.Mathematics.Vector2Int,System.Int32) afb6bc7f4d43e290657842dd4dd03709fd548920ec6087293fd4d4a00d4e5574 -->

```csharp
public static InnoEngine.Mathematics.Vector2Int InnoEngine.Mathematics.Vector2Int.operator /(InnoEngine.Mathematics.Vector2Int v, int scalar)
```

Divides the supplied value by the scalar divisor component by component.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Parameter `scalar`:** The scalar applied to every component.

**Returns:** The validated vector2int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2Int.cs#L155).

## `op_Equality`

<a id="api-006945a43814c1bc"></a>
<!-- api: M:InnoEngine.Mathematics.Vector2Int.op_Equality(InnoEngine.Mathematics.Vector2Int,InnoEngine.Mathematics.Vector2Int) 78b566f73529272a9b42f54ce4f2bfee6a723fb2fd5ea1cf7f872f8c4f4f590b -->

```csharp
public static bool InnoEngine.Mathematics.Vector2Int.operator ==(InnoEngine.Mathematics.Vector2Int a, InnoEngine.Mathematics.Vector2Int b)
```

Determines whether the supplied values are equal under the type's equality tolerance.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2Int.cs#L173).

## `op_Explicit`

<a id="api-022f6aed3a8275e1"></a>
<!-- api: M:InnoEngine.Mathematics.Vector2Int.op_Explicit(InnoEngine.Mathematics.Vector2)~InnoEngine.Mathematics.Vector2Int 58d18e225d44af7367eca48957128a17e3092c3a52dfd3f1c3c7e49136f5bc15 -->

```csharp
public static InnoEngine.Mathematics.Vector2Int.explicit operator InnoEngine.Mathematics.Vector2Int(InnoEngine.Mathematics.Vector2 v)
```

Converts the supplied value to `InnoEngine.Mathematics.Vector2Int`.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Returns:** The validated vector2int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2Int.cs#L219).

## `op_Explicit`

<a id="api-f397c94c1b386c68"></a>
<!-- api: M:InnoEngine.Mathematics.Vector2Int.op_Explicit(InnoEngine.Mathematics.Vector2Int)~InnoEngine.Mathematics.Vector2 1f10ae8b17a2794f4e8ee8219b294af2d34a3a31514d6a4505c534163ce23885 -->

```csharp
public static InnoEngine.Mathematics.Vector2Int.explicit operator InnoEngine.Mathematics.Vector2(InnoEngine.Mathematics.Vector2Int v)
```

Converts the supplied value to `InnoEngine.Mathematics.Vector2`.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Returns:** The validated vector2 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2Int.cs#L207).

## `op_Inequality`

<a id="api-1e27c83adcfd612d"></a>
<!-- api: M:InnoEngine.Mathematics.Vector2Int.op_Inequality(InnoEngine.Mathematics.Vector2Int,InnoEngine.Mathematics.Vector2Int) 0df77d1c33ac4f77b2902578c547acfa26125f49c865a74444fd6d295950e139 -->

```csharp
public static bool InnoEngine.Mathematics.Vector2Int.operator !=(InnoEngine.Mathematics.Vector2Int a, InnoEngine.Mathematics.Vector2Int b)
```

Determines whether the supplied values differ under the type's equality tolerance.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2Int.cs#L191).

## `op_Multiply`

<a id="api-527e6b7197fcfa4a"></a>
<!-- api: M:InnoEngine.Mathematics.Vector2Int.op_Multiply(InnoEngine.Mathematics.Vector2Int,System.Int32) e15dba2c3d908f7a06aaaf9bcf7fe18d2aa75057dea8a0a29ccd0171ef017320 -->

```csharp
public static InnoEngine.Mathematics.Vector2Int InnoEngine.Mathematics.Vector2Int.operator *(InnoEngine.Mathematics.Vector2Int v, int scalar)
```

Multiplies the supplied values according to their algebraic contract.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Parameter `scalar`:** The scalar applied to every component.

**Returns:** The validated vector2int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2Int.cs#L119).

## `op_Multiply`

<a id="api-b34ff59e22a18435"></a>
<!-- api: M:InnoEngine.Mathematics.Vector2Int.op_Multiply(System.Int32,InnoEngine.Mathematics.Vector2Int) 0fff41f014ca84e473ef0f349bd28caaf53cb56e5f6d2549245b61501709ffed -->

```csharp
public static InnoEngine.Mathematics.Vector2Int InnoEngine.Mathematics.Vector2Int.operator *(int scalar, InnoEngine.Mathematics.Vector2Int v)
```

Multiplies the supplied values according to their algebraic contract.

**Parameter `scalar`:** The scalar applied to every component.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Returns:** The validated vector2int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2Int.cs#L137).

## `op_Subtraction`

<a id="api-eef7630fa13b9fc5"></a>
<!-- api: M:InnoEngine.Mathematics.Vector2Int.op_Subtraction(InnoEngine.Mathematics.Vector2Int,InnoEngine.Mathematics.Vector2Int) f80d72d69c6fbf3292223652e862d36083f14a875e94d0bf08eb565bc23e5482 -->

```csharp
public static InnoEngine.Mathematics.Vector2Int InnoEngine.Mathematics.Vector2Int.operator -(InnoEngine.Mathematics.Vector2Int a, InnoEngine.Mathematics.Vector2Int b)
```

Subtracts or negates the supplied value component by component.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** The validated vector2int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2Int.cs#L89).

## `op_UnaryNegation`

<a id="api-bb18a4567ba87bb7"></a>
<!-- api: M:InnoEngine.Mathematics.Vector2Int.op_UnaryNegation(InnoEngine.Mathematics.Vector2Int) afadb58491ca80e27ecd56699a0865cb893e84ce6553fd1f2552516e7e89b9fc -->

```csharp
public static InnoEngine.Mathematics.Vector2Int InnoEngine.Mathematics.Vector2Int.operator -(InnoEngine.Mathematics.Vector2Int v)
```

Subtracts or negates the supplied value component by component.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Returns:** The validated vector2int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2Int.cs#L104).

## `ToString`

<a id="api-21551db99a42be49"></a>
<!-- api: M:InnoEngine.Mathematics.Vector2Int.ToString e0531cb029ab6d10261b2cae9fb9bbb5e40dac00ca0d5f89ca62a741a95b981a -->

```csharp
public override string InnoEngine.Mathematics.Vector2Int.ToString()
```

Formats this value as a human-readable component list.

**Returns:** The validated text representation owned by the caller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2Int.cs#L258).
