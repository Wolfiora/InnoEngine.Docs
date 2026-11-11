---
title: "ShaderIrBuilder"
description: "Reference for ShaderIrBuilder in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.6dd41edfcf5f18fb
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderIrBuilder`

This reference describes `ShaderIrBuilder` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-347e4e9b4919a659) | Method |
| [`AtomicAddStorage`](#api-677da49d6f83433c) | Method |
| [`Binary`](#api-8bb6840e447f091b) | Method |
| [`Branch`](#api-0ff6f3aa24663f29) | Method |
| [`Build`](#api-2361a178eb9bbc60) | Method |
| [`Call`](#api-2450fd7507fb85bd) | Method |
| [`Constant`](#api-0ad8c5324a09f61d) | Method |
| [`Constant`](#api-7c1d70d412bb2899) | Method |
| [`Constant`](#api-c4121fc74baacc9e) | Method |
| [`Constant`](#api-431a4b97c5b4777c) | Method |
| [`Construct`](#api-124b406c9689a936) | Method |
| [`Discard`](#api-9b5980d374196bbb) | Method |
| [`Extract`](#api-9967e84aa69324e6) | Method |
| [`Input`](#api-479382e7741e0ba3) | Method |
| [`LoadStorage`](#api-46a1d6229ce98d44) | Method |
| [`Loop`](#api-ea80416ce2c31f40) | Method |
| [`Sample`](#api-3d172abc38efb1ac) | Method |
| [`SampleLevel`](#api-a43e56619e638e5f) | Method |
| [`Select`](#api-f754d69d904712f4) | Method |
| [`StoreStorage`](#api-a4cd8f6099165794) | Method |

## Type declaration

<a id="api-6dd41edfcf5f18fb"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderIrBuilder 54f32aba84ca0548851621cee4349b839685308034a2a59e3dded6b6335a2a1f -->

```csharp
public sealed class Inno.Rendering.Shaders.ShaderIrBuilder
```

Builds typed shader IR instructions for graph compilation.

Builds typed instructions and structured regions. No API accepts an arbitrary backend expression or complete stage source.
This builder is transient and belongs to one lowering operation, never to a persisted document or runtime frame.

Builds typed shader IR instructions for graph compilation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBuilder.ControlFlow.cs#L11).

## `#ctor`

<a id="api-347e4e9b4919a659"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderIrBuilder.#ctor c87ff1608534e9055a4673fdd7f88de13c4aa6c26ec8693a74ae87d38dd24dba -->

```csharp
public Inno.Rendering.Shaders.ShaderIrBuilder.ShaderIrBuilder()
```

Creates an independent typed region builder and value identity scope.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBuilder.cs#L26).

## `AtomicAddStorage`

<a id="api-677da49d6f83433c"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderIrBuilder.AtomicAddStorage(Inno.Rendering.Shaders.ShaderIrValue,Inno.Rendering.Shaders.ShaderIrValue,Inno.Rendering.Shaders.ShaderIrValue) d02951c210068d4d0f736f92cb98134e3a0b434257534aef962e7faeccbb573b -->

```csharp
public Inno.Rendering.Shaders.ShaderIrValue Inno.Rendering.Shaders.ShaderIrBuilder.AtomicAddStorage(Inno.Rendering.Shaders.ShaderIrValue resource, Inno.Rendering.Shaders.ShaderIrValue index, Inno.Rendering.Shaders.ShaderIrValue value)
```

Atomically adds to a scalar integer buffer element and returns its previous value.

**Parameter `resource`:** A read-write int or uint storage buffer.

**Parameter `index`:** Unsigned element index.

**Parameter `value`:** Addition operand matching the buffer element type.

**Returns:** The original scalar value observed by the atomic operation.

**Throws `System.ArgumentException`:** The resource is not an appropriate read-write integer buffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBuilder.Resources.cs#L140).

## `Binary`

<a id="api-8bb6840e447f091b"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderIrBuilder.Binary(Inno.Rendering.Shaders.ShaderIrOperation,Inno.Rendering.Shaders.ShaderIrValue,Inno.Rendering.Shaders.ShaderIrValue) f0fc27475f3d9835e234512c69a680ad62c246b7f9174b92d6b6a50935381407 -->

```csharp
public Inno.Rendering.Shaders.ShaderIrValue Inno.Rendering.Shaders.ShaderIrBuilder.Binary(Inno.Rendering.Shaders.ShaderIrOperation operation, Inno.Rendering.Shaders.ShaderIrValue left, Inno.Rendering.Shaders.ShaderIrValue right)
```

Applies an explicitly typed binary arithmetic or scalar comparison operation.

**Parameter `operation`:** Add, Subtract, Multiply, Divide, Minimum, Maximum, Equal or LessThan.

**Parameter `left`:** Left operand from this builder.

**Parameter `right`:** Right operand of the same complete type.

**Returns:** The result; comparisons produce a scalar Boolean.

**Throws `System.ArgumentException`:** Operands belong to another builder, differ in type, or the operation is invalid for them.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBuilder.cs#L140).

## `Branch`

<a id="api-0ff6f3aa24663f29"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderIrBuilder.Branch(Inno.Rendering.Shaders.ShaderIrValue,System.Func{Inno.Rendering.Shaders.ShaderIrBuilder,System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Rendering.Shaders.ShaderIrValue}},System.Func{Inno.Rendering.Shaders.ShaderIrBuilder,System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Rendering.Shaders.ShaderIrValue}}) 3a096808eab560fbfbb13c1d5234b23f6eaa43de965df7e0b9da51094fa45357 -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<string, Inno.Rendering.Shaders.ShaderIrValue> Inno.Rendering.Shaders.ShaderIrBuilder.Branch(Inno.Rendering.Shaders.ShaderIrValue condition, System.Func<Inno.Rendering.Shaders.ShaderIrBuilder, System.Collections.Generic.IReadOnlyDictionary<string, Inno.Rendering.Shaders.ShaderIrValue>> whenTrue, System.Func<Inno.Rendering.Shaders.ShaderIrBuilder, System.Collections.Generic.IReadOnlyDictionary<string, Inno.Rendering.Shaders.ShaderIrValue>> whenFalse)
```

Builds a real conditional: only the selected region executes, including its memory and source-call effects.

**Parameter `condition`:** Scalar Boolean visible in this region.

**Parameter `whenTrue`:** Transient callback building the true region and its named outputs.

**Parameter `whenFalse`:** Transient callback building the false region with exactly matching output names/types.

**Returns:** Values merged into the enclosing scope; empty output maps represent effect-only branches.

**Throws `System.ArgumentException`:** The condition or branch output contracts are incompatible.

**Throws `System.InvalidOperationException`:** A callback mutates the enclosing scope or declares a nested stage input.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBuilder.ControlFlow.cs#L34).

## `Build`

<a id="api-2361a178eb9bbc60"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderIrBuilder.Build(System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Rendering.Shaders.ShaderIrValue}) bc7a77cdd9dd78f92ead0ed9676127147affa38ac387e1c593d99ad4908d0759 -->

```csharp
public Inno.Rendering.Shaders.ShaderIrBlock Inno.Rendering.Shaders.ShaderIrBuilder.Build(System.Collections.Generic.IReadOnlyDictionary<string, Inno.Rendering.Shaders.ShaderIrValue> outputs)
```

Freezes the current region without pruning unused calls or retaining this mutable builder.

**Parameter `outputs`:** Named values returned by the enclosing region.

**Returns:** An immutable block unaffected by later builder changes.

**Throws `System.ArgumentException`:** An output name is empty or a value belongs to another builder.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBuilder.cs#L364).

## `Call`

<a id="api-2450fd7507fb85bd"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderIrBuilder.Call(Inno.Rendering.Shaders.ShaderSourceModuleAnalysis,System.String,System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Rendering.Shaders.ShaderIrValue}) 3ad74d11485f67845befc3f09b109331408f9a40f82d01ec5d1bf93d95b713c8 -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<string, Inno.Rendering.Shaders.ShaderIrValue> Inno.Rendering.Shaders.ShaderIrBuilder.Call(Inno.Rendering.Shaders.ShaderSourceModuleAnalysis module, string implementationId, System.Collections.Generic.IReadOnlyDictionary<string, Inno.Rendering.Shaders.ShaderIrValue> inputs)
```

Calls a validated source implementation using semantic parameter names, preserving all call side effects.

**Parameter `module`:** A module whose selected implementations and variants share the same interface.

**Parameter `implementationId`:** The exact implementation/configuration selected by the target.

**Parameter `inputs`:** Exactly the input/inout parameters by public name; output-only parameters are not supplied.

**Returns:** Named results: `return`, followed by `output.<name>` for out/inout parameters.

**Throws `System.ArgumentException`:** The module failed, implementation is absent, or input names/types do not match.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBuilder.cs#L315).

## `Constant`

<a id="api-0ad8c5324a09f61d"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderIrBuilder.Constant(System.Boolean) 60eecd0a11b7ef202ce8ef93814b700aa59200168abda89c8c75939e33cb5afe -->

```csharp
public Inno.Rendering.Shaders.ShaderIrValue Inno.Rendering.Shaders.ShaderIrBuilder.Constant(bool value)
```

Produces a scalar Boolean constant.

**Parameter `value`:** Scalar Boolean value.

**Returns:** A bool-typed intermediate value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBuilder.cs#L120).

## `Constant`

<a id="api-7c1d70d412bb2899"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderIrBuilder.Constant(System.Int32) dd769709564278ca8dd1cbc3a47ddb4a92c4a345eda86a437429ad54d2cb14aa -->

```csharp
public Inno.Rendering.Shaders.ShaderIrValue Inno.Rendering.Shaders.ShaderIrBuilder.Constant(int value)
```

Produces an exact signed 32-bit integer constant.

**Parameter `value`:** Scalar integer value.

**Returns:** An int-typed intermediate value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBuilder.cs#L98).

## `Constant`

<a id="api-c4121fc74baacc9e"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderIrBuilder.Constant(System.Single) 621212347a9a05c5b393e9a3319365659fed84a457f67f5a96ed31d10b6fbb2d -->

```csharp
public Inno.Rendering.Shaders.ShaderIrValue Inno.Rendering.Shaders.ShaderIrBuilder.Constant(float value)
```

Produces a finite, exact 32-bit floating-point constant.

**Parameter `value`:** Finite scalar value, including signed zero.

**Returns:** A float-typed intermediate value.

**Throws `System.ArgumentOutOfRangeException`:** The value is NaN or infinite.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBuilder.cs#L82).

## `Constant`

<a id="api-431a4b97c5b4777c"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderIrBuilder.Constant(System.UInt32) 52cb976e2c57ce689bbed5974bb5b960d12b32303e00d5f2048372b2622d5b8c -->

```csharp
public Inno.Rendering.Shaders.ShaderIrValue Inno.Rendering.Shaders.ShaderIrBuilder.Constant(uint value)
```

Produces an exact unsigned 32-bit integer constant.

**Parameter `value`:** Scalar unsigned integer value.

**Returns:** A uint-typed intermediate value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBuilder.cs#L109).

## `Construct`

<a id="api-124b406c9689a936"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderIrBuilder.Construct(Inno.Rendering.Shaders.ShaderSourceType,Inno.Rendering.Shaders.ShaderIrValue[]) 57315bcbf6c8ca0befa27a2c5523dcb47a72ebff57f9f025dbddf31630ae404e -->

```csharp
public Inno.Rendering.Shaders.ShaderIrValue Inno.Rendering.Shaders.ShaderIrBuilder.Construct(Inno.Rendering.Shaders.ShaderSourceType type, params Inno.Rendering.Shaders.ShaderIrValue[] members)
```

Constructs a complete vector, column-major matrix, structure or fixed array from typed members.

**Parameter `type`:** The complete aggregate type.

**Parameter `members`:** Scalar vector/matrix components, declaration-ordered structure fields, or array elements.

**Returns:** A value of the requested type.

**Throws `System.ArgumentException`:** The type is not an aggregate or members have incorrect count or types.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBuilder.cs#L217).

## `Discard`

<a id="api-9b5980d374196bbb"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderIrBuilder.Discard(Inno.Rendering.Shaders.ShaderIrValue) 95c1e152888cb608a0ca246cf39c62b70506103b2cbb556156a0e5179a1e2ac0 -->

```csharp
public void Inno.Rendering.Shaders.ShaderIrBuilder.Discard(Inno.Rendering.Shaders.ShaderIrValue condition)
```

Discards a fragment when the Boolean condition is true; other stages reject this instruction.

**Parameter `condition`:** Scalar Boolean from this block.

**Throws `System.ArgumentException`:** The condition is not a Boolean or belongs to another builder.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBuilder.Resources.cs#L165).

## `Extract`

<a id="api-9967e84aa69324e6"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderIrBuilder.Extract(Inno.Rendering.Shaders.ShaderIrValue,System.Int32) 91949e027012c7f9e15e65f42498218be6f4d84192a393187ae511a1f37d1ab7 -->

```csharp
public Inno.Rendering.Shaders.ShaderIrValue Inno.Rendering.Shaders.ShaderIrBuilder.Extract(Inno.Rendering.Shaders.ShaderIrValue value, int memberIndex)
```

Extracts one static component, structure member or array element without source-language member syntax.

**Parameter `value`:** Aggregate value from this builder.

**Parameter `memberIndex`:** Zero-based member index; a matrix index selects a column vector.

**Returns:** The precisely typed selected member.

**Throws `System.ArgumentException`:** The input is not an aggregate.

**Throws `System.ArgumentOutOfRangeException`:** The member index is outside the aggregate layout.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBuilder.cs#L262).

## `Input`

<a id="api-479382e7741e0ba3"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderIrBuilder.Input(System.String,Inno.Rendering.Shaders.ShaderSourceType) a092f7ccdb57be90a36c7cafdcf263cac4f9754116fd05054db3d0edf22e9004 -->

```csharp
public Inno.Rendering.Shaders.ShaderIrValue Inno.Rendering.Shaders.ShaderIrBuilder.Input(string name, Inno.Rendering.Shaders.ShaderSourceType type)
```

Reads a named input from the enclosing typed function or stage interface.

**Parameter `name`:** Stable interface identity; it is not emitted as native source verbatim.

**Parameter `type`:** Complete non-void input type.

**Returns:** The shared input value for this name and type.

**Throws `System.ArgumentException`:** The name is empty, type is void, or this input was already declared with another type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBuilder.cs#L49).

## `LoadStorage`

<a id="api-46a1d6229ce98d44"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderIrBuilder.LoadStorage(Inno.Rendering.Shaders.ShaderIrValue,Inno.Rendering.Shaders.ShaderIrValue) 30f27945707a3a4d88c78b06905575760b758f597fc5082021ff70602a9312d7 -->

```csharp
public Inno.Rendering.Shaders.ShaderIrValue Inno.Rendering.Shaders.ShaderIrBuilder.LoadStorage(Inno.Rendering.Shaders.ShaderIrValue resource, Inno.Rendering.Shaders.ShaderIrValue coordinate)
```

Loads a storage value at this exact point in the block's memory-effect sequence.

**Parameter `resource`:** A readable typed storage input.

**Parameter `coordinate`:** uint buffer index; int2 image coordinate, or int3 for an image array/volume.

**Returns:** The declared buffer element or float4 image value.

**Throws `System.ArgumentException`:** The resource is write-only or the coordinate is incompatible.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBuilder.Resources.cs#L83).

## `Loop`

<a id="api-ea80416ce2c31f40"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderIrBuilder.Loop(Inno.Rendering.Shaders.ShaderIrValue,System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Rendering.Shaders.ShaderIrValue},System.Func{Inno.Rendering.Shaders.ShaderIrBuilder,Inno.Rendering.Shaders.ShaderIrValue,System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Rendering.Shaders.ShaderIrValue},System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Rendering.Shaders.ShaderIrValue}}) bfbed6b7f195be14f654aa01a7b2f202713dfa94596b9dcb5784d76b88b905bf -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<string, Inno.Rendering.Shaders.ShaderIrValue> Inno.Rendering.Shaders.ShaderIrBuilder.Loop(Inno.Rendering.Shaders.ShaderIrValue iterations, System.Collections.Generic.IReadOnlyDictionary<string, Inno.Rendering.Shaders.ShaderIrValue> initialState, System.Func<Inno.Rendering.Shaders.ShaderIrBuilder, Inno.Rendering.Shaders.ShaderIrValue, System.Collections.Generic.IReadOnlyDictionary<string, Inno.Rendering.Shaders.ShaderIrValue>, System.Collections.Generic.IReadOnlyDictionary<string, Inno.Rendering.Shaders.ShaderIrValue>> body)
```

Builds a counted loop; each iteration receives the preceding iteration's complete carried state.

**Parameter `iterations`:** Unsigned iteration count, evaluated once before entering the loop.

**Parameter `initialState`:** Named values used before the first iteration and returned unchanged for zero iterations.

**Parameter `body`:** Transient callback receiving its builder, uint iteration index and typed carried values.

**Returns:** Final carried values in the enclosing scope; an empty state map permits effect-only loops.

**Throws `System.ArgumentException`:** The count is not uint or the body's output state changes names or types.

**Throws `System.InvalidOperationException`:** The body mutates the enclosing builder.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBuilder.ControlFlow.cs#L82).

## `Sample`

<a id="api-3d172abc38efb1ac"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderIrBuilder.Sample(Inno.Rendering.Shaders.ShaderIrValue,Inno.Rendering.Shaders.ShaderIrValue) b113f3ac79262eccf707ef22184d4d16775f54a66fc682874dcec5103e4b2a0f -->

```csharp
public Inno.Rendering.Shaders.ShaderIrValue Inno.Rendering.Shaders.ShaderIrBuilder.Sample(Inno.Rendering.Shaders.ShaderIrValue texture, Inno.Rendering.Shaders.ShaderIrValue coordinate)
```

Samples a texture using implicit derivatives; the enclosing stage must be Fragment.

**Parameter `texture`:** A sampled 2D, 2D-array, 3D or cube texture.

**Parameter `coordinate`:** float2 for 2D, or float3 for an array, volume or cube.

**Returns:** The sampled float4 value.

**Throws `System.ArgumentException`:** Operands have incompatible types or owners.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBuilder.Resources.cs#L26).

## `SampleLevel`

<a id="api-a43e56619e638e5f"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderIrBuilder.SampleLevel(Inno.Rendering.Shaders.ShaderIrValue,Inno.Rendering.Shaders.ShaderIrValue,Inno.Rendering.Shaders.ShaderIrValue) f2f9d7aa9e7260df2d8a15967d265078574324f8ff1287391efa7dec12820ab8 -->

```csharp
public Inno.Rendering.Shaders.ShaderIrValue Inno.Rendering.Shaders.ShaderIrBuilder.SampleLevel(Inno.Rendering.Shaders.ShaderIrValue texture, Inno.Rendering.Shaders.ShaderIrValue coordinate, Inno.Rendering.Shaders.ShaderIrValue level)
```

Samples a texture at an explicit floating-point mip level without implicit derivatives.

**Parameter `texture`:** A sampled 2D, 2D-array, 3D or cube texture.

**Parameter `coordinate`:** float2 for 2D, or float3 for an array, volume or cube.

**Parameter `level`:** Scalar floating-point mip level.

**Returns:** The sampled float4 value.

**Throws `System.ArgumentException`:** Operands have incompatible types or owners.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBuilder.Resources.cs#L54).

## `Select`

<a id="api-f754d69d904712f4"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderIrBuilder.Select(Inno.Rendering.Shaders.ShaderIrValue,Inno.Rendering.Shaders.ShaderIrValue,Inno.Rendering.Shaders.ShaderIrValue) 8dd299f0595a86e09e89e5cda5646dc5911c30fb7a1380b8b45b4d76afd3867f -->

```csharp
public Inno.Rendering.Shaders.ShaderIrValue Inno.Rendering.Shaders.ShaderIrBuilder.Select(Inno.Rendering.Shaders.ShaderIrValue condition, Inno.Rendering.Shaders.ShaderIrValue whenTrue, Inno.Rendering.Shaders.ShaderIrValue whenFalse)
```

Selects between equal typed values without conditionally executing their producers.

**Parameter `condition`:** Scalar Boolean condition from this builder.

**Parameter `whenTrue`:** Value selected when true.

**Parameter `whenFalse`:** Value selected when false.

**Returns:** A value with the selected operands' complete type.

**Throws `System.ArgumentException`:** The condition is not bool or selected value types differ.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBuilder.cs#L185).

## `StoreStorage`

<a id="api-a4cd8f6099165794"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderIrBuilder.StoreStorage(Inno.Rendering.Shaders.ShaderIrValue,Inno.Rendering.Shaders.ShaderIrValue,Inno.Rendering.Shaders.ShaderIrValue) 658b6a9e7d9e30912eee85a5c37479d2403f579f7e732b02f40ca0235914bd29 -->

```csharp
public void Inno.Rendering.Shaders.ShaderIrBuilder.StoreStorage(Inno.Rendering.Shaders.ShaderIrValue resource, Inno.Rendering.Shaders.ShaderIrValue coordinate, Inno.Rendering.Shaders.ShaderIrValue value)
```

Stores a storage value without pruning unused writes or reordering surrounding memory operations.

**Parameter `resource`:** A writable typed storage input.

**Parameter `coordinate`:** uint buffer index; int2 image coordinate, or int3 for an image array/volume.

**Parameter `value`:** Exactly the declared element or image value type.

**Throws `System.ArgumentException`:** The resource is read-only or operands have incompatible types.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBuilder.Resources.cs#L110).
