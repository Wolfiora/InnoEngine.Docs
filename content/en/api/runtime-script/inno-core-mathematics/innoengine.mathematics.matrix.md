---
title: "Matrix"
description: "Reference for Matrix in Inno.Core.Mathematics."
uid: api.inno.core.mathematics.runtime-script.2a3e30d2fc986231
kind: api
owners:
  - Inno.Core.Mathematics
apiSurface: runtime-script
contracts:
  - project.inno-core-mathematics#numeric-and-layout-contract
  - manual.scripting.use-script-api
---
# `Matrix`

This reference describes `Matrix` in `Inno.Core.Mathematics`. Read the [shared contract](../../projects/inno-core-mathematics.md#numeric-and-layout-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Mathematics.Matrix>`.

## Members

| Member | Kind |
| --- | --- |
| [`m11`](#api-75259568805879aa) | Field |
| [`m12`](#api-085823e147b499a8) | Field |
| [`m13`](#api-88e70c90551414b2) | Field |
| [`m14`](#api-db80c6ce6b13be70) | Field |
| [`m21`](#api-5a8e1e33cb20fd57) | Field |
| [`m22`](#api-56241bed12039939) | Field |
| [`m23`](#api-b57b73ec1cd69f0d) | Field |
| [`m24`](#api-1a7afbb2a73834bd) | Field |
| [`m31`](#api-551b810e756fb96d) | Field |
| [`m32`](#api-944c2dc06e1b3fa0) | Field |
| [`m33`](#api-a2ad4423801b1e12) | Field |
| [`m34`](#api-c5ddc8b613634e3c) | Field |
| [`m41`](#api-1a7da8ed256af80f) | Field |
| [`m42`](#api-2749c537728d3030) | Field |
| [`m43`](#api-8de08fa8e2af6d58) | Field |
| [`m44`](#api-6742a763f8858e5b) | Field |
| [`#ctor`](#api-1568872c3400a6fd) | Method |
| [`CopyToColumnMajor`](#api-6f105ca26eb3482e) | Method |
| [`CreateFromQuaternion`](#api-f1d995a50fc11f6b) | Method |
| [`CreateLookAt`](#api-279474d700b7cc77) | Method |
| [`CreateLookAtRH`](#api-e4622c78fcea9a15) | Method |
| [`CreateOrthographic`](#api-1243162576599775) | Method |
| [`CreateOrthographicOffCenter`](#api-595061bead75db9b) | Method |
| [`CreatePerspectiveFieldOfView`](#api-c613f5d6bd0979f6) | Method |
| [`CreatePerspectiveFieldOfViewRH`](#api-aed61c9309f38411) | Method |
| [`CreateRotationX`](#api-be2390d694ffcfa2) | Method |
| [`CreateRotationY`](#api-e0f2efb000dcff6a) | Method |
| [`CreateRotationZ`](#api-5ccf074eef112e00) | Method |
| [`CreateScale`](#api-4286764d6d0a09e5) | Method |
| [`CreateScale`](#api-1aa6a3d58b267422) | Method |
| [`CreateScale`](#api-469577bbe01ff05b) | Method |
| [`CreateTranslation`](#api-4c1101a4eee7be2c) | Method |
| [`CreateTranslation`](#api-f76254697ee86ad8) | Method |
| [`Decompose`](#api-ce76cb1289975ee4) | Method |
| [`Determinant`](#api-477fb8d3d4aa0c4e) | Method |
| [`Equals`](#api-7a18cdcd941b88e0) | Method |
| [`Equals`](#api-4b665fcf62f6149e) | Method |
| [`Extract2DTransform`](#api-68c57466b17a25d1) | Method |
| [`GetHashCode`](#api-c281f8c1f66f3d10) | Method |
| [`Invert`](#api-89a7eefc5f571a0c) | Method |
| [`Multiply`](#api-3803f7f611ea7078) | Method |
| [`op_Equality`](#api-90725b0c37de978e) | Method |
| [`op_Implicit`](#api-43f2a329e0dd12a0) | Method |
| [`op_Implicit`](#api-e2814e181a12822e) | Method |
| [`op_Inequality`](#api-9ca1ded3d1e8ad6e) | Method |
| [`op_Multiply`](#api-20ef45273441f758) | Method |
| [`ToColumnMajorArray`](#api-cce191ae0eabebd4) | Method |
| [`ToString`](#api-0443146d17924e17) | Method |
| [`Transpose`](#api-6fb932379366d873) | Method |
| [`identity`](#api-fc28e4c4d64b2e25) | Property |

## Type declaration

<a id="api-2a3e30d2fc986231"></a>
<!-- api: T:InnoEngine.Mathematics.Matrix 5ce043a1e9ef698512ea2b08445a47cdf7ab4d64181a1a3a50e757976691e238 -->

```csharp
public struct InnoEngine.Mathematics.Matrix : System.IEquatable<InnoEngine.Mathematics.Matrix>
```

Represents a mutable four-by-four transformation matrix using column-vector multiplication.

**Constraints:** Conventions used by this type:


- **Column-vector math**: points/vectors are treated as column vectors on the right: `v' = M * v`.
- **Translation is stored in the last column**: (m14, m24, m34).
- Matrix multiplication follows standard form: `C = A * B` (apply B then A in column-vector convention: `A * (B * v)`).



Note on handedness:
            This `InnoEngine.Mathematics.Matrix` type is **handedness-agnostic**. Handedness is determined by the specific factory
            (e.g. `InnoEngine.Mathematics.Matrix.CreateLookAt(InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Vector3)` and `InnoEngine.Mathematics.Matrix.CreatePerspectiveFieldOfView(System.Single,System.Single,System.Single,System.Single)` are currently **left-handed**).
            If your engine convention is right-handed (-Z forward), add/use explicit RH variants (e.g. CreateLookAtRH / CreatePerspectiveFieldOfViewRH).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L27).

## `m11`

<a id="api-75259568805879aa"></a>
<!-- api: F:InnoEngine.Mathematics.Matrix.m11 e9efee4ec5c5ed20efc644790780ef9ab43acd7e1da58df8c053e62916cc9c6c -->

```csharp
public float InnoEngine.Mathematics.Matrix.m11
```

Row 1, Column 1.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L34).

## `m12`

<a id="api-085823e147b499a8"></a>
<!-- api: F:InnoEngine.Mathematics.Matrix.m12 586e87ab73e8943cc30bf09830c9f77c7ab616e5c651439d22ff157d81e52250 -->

```csharp
public float InnoEngine.Mathematics.Matrix.m12
```

Row 1, Column 2.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L38).

## `m13`

<a id="api-88e70c90551414b2"></a>
<!-- api: F:InnoEngine.Mathematics.Matrix.m13 1127cfbf41c259b011542f797b3d5831ac60d8831d8ddc162f97e4cebd0bd471 -->

```csharp
public float InnoEngine.Mathematics.Matrix.m13
```

Row 1, Column 3.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L42).

## `m14`

<a id="api-db80c6ce6b13be70"></a>
<!-- api: F:InnoEngine.Mathematics.Matrix.m14 d845e6e81462f96070407efc059fba3b34e9fa73e61c98dcd462d96203e99e1a -->

```csharp
public float InnoEngine.Mathematics.Matrix.m14
```

Row 1, Column 4.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L46).

## `m21`

<a id="api-5a8e1e33cb20fd57"></a>
<!-- api: F:InnoEngine.Mathematics.Matrix.m21 11d98604400382c9750f9c3d37a035d43e6390c5a12be9bdd79575798ce35a16 -->

```csharp
public float InnoEngine.Mathematics.Matrix.m21
```

Row 2, Column 1.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L51).

## `m22`

<a id="api-56241bed12039939"></a>
<!-- api: F:InnoEngine.Mathematics.Matrix.m22 4deb7e93027ec334e7693f234627587cd3fdd55ba322a2a841d3a485c967f5c4 -->

```csharp
public float InnoEngine.Mathematics.Matrix.m22
```

Row 2, Column 2.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L55).

## `m23`

<a id="api-b57b73ec1cd69f0d"></a>
<!-- api: F:InnoEngine.Mathematics.Matrix.m23 86ec2f6c65d40e57a7a861084a27a4bf5cd21a129cb634f2d01a002af88d6150 -->

```csharp
public float InnoEngine.Mathematics.Matrix.m23
```

Row 2, Column 3.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L59).

## `m24`

<a id="api-1a7afbb2a73834bd"></a>
<!-- api: F:InnoEngine.Mathematics.Matrix.m24 78a5dbb1208bd47965ffb5f855d84b3288eea1ce61046d40b1d714b0bd6a3271 -->

```csharp
public float InnoEngine.Mathematics.Matrix.m24
```

Row 2, Column 4.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L63).

## `m31`

<a id="api-551b810e756fb96d"></a>
<!-- api: F:InnoEngine.Mathematics.Matrix.m31 6e95a791b1953912e4ef2c874b75f652ebf554740be6a588e24f6d7471f05bf7 -->

```csharp
public float InnoEngine.Mathematics.Matrix.m31
```

Row 3, Column 1.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L68).

## `m32`

<a id="api-944c2dc06e1b3fa0"></a>
<!-- api: F:InnoEngine.Mathematics.Matrix.m32 bea7b91c2abdc7005fe8e235d3d40c38afac2f6ca9c2118c658d2791a3437dbe -->

```csharp
public float InnoEngine.Mathematics.Matrix.m32
```

Row 3, Column 2.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L72).

## `m33`

<a id="api-a2ad4423801b1e12"></a>
<!-- api: F:InnoEngine.Mathematics.Matrix.m33 99cb1bd0ac6f3f48e7d7987812010a4df3558dbfe5bb5d22961803671b2debc7 -->

```csharp
public float InnoEngine.Mathematics.Matrix.m33
```

Row 3, Column 3.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L76).

## `m34`

<a id="api-c5ddc8b613634e3c"></a>
<!-- api: F:InnoEngine.Mathematics.Matrix.m34 d645fa126dc73fe61fa84a5cd1ca12b91482c5baa789f917536feeff50da6e61 -->

```csharp
public float InnoEngine.Mathematics.Matrix.m34
```

Row 3, Column 4.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L80).

## `m41`

<a id="api-1a7da8ed256af80f"></a>
<!-- api: F:InnoEngine.Mathematics.Matrix.m41 eeda904190438b0a9df7e2b7ed06f425149da1abb0caa37f601a9debd452308b -->

```csharp
public float InnoEngine.Mathematics.Matrix.m41
```

Row 4, Column 1 (translation X component for affine transforms).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L85).

## `m42`

<a id="api-2749c537728d3030"></a>
<!-- api: F:InnoEngine.Mathematics.Matrix.m42 2168e73f321e53d8e417d4637c185b9aa9575ff26c12db652bada7b84efcf799 -->

```csharp
public float InnoEngine.Mathematics.Matrix.m42
```

Row 4, Column 2 (translation Y component for affine transforms).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L89).

## `m43`

<a id="api-8de08fa8e2af6d58"></a>
<!-- api: F:InnoEngine.Mathematics.Matrix.m43 20e07284d748418fa4d9a9b6bed905a5fd54291bda4f9a66655cd7bc9e5b1f7b -->

```csharp
public float InnoEngine.Mathematics.Matrix.m43
```

Row 4, Column 3 (translation Z component for affine transforms).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L93).

## `m44`

<a id="api-6742a763f8858e5b"></a>
<!-- api: F:InnoEngine.Mathematics.Matrix.m44 fe9162e393ea8bd4a9bbba2d0fb0a7ab30991bb315095836611095df081be87d -->

```csharp
public float InnoEngine.Mathematics.Matrix.m44
```

Row 4, Column 4.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L97).

## `#ctor`

<a id="api-1568872c3400a6fd"></a>
<!-- api: M:InnoEngine.Mathematics.Matrix.#ctor(System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single) 8f37f5cfd9078f9f7534eca065ab20cb564e61ab226783f957ad93fd5764b232 -->

```csharp
public InnoEngine.Mathematics.Matrix.Matrix(float m11, float m12, float m13, float m14, float m21, float m22, float m23, float m24, float m31, float m32, float m33, float m34, float m41, float m42, float m43, float m44)
```

Initializes a 4x4 matrix with explicit row-major elements.

**Parameter `m11`:** Row 1, Column 1.

**Parameter `m12`:** Row 1, Column 2.

**Parameter `m13`:** Row 1, Column 3.

**Parameter `m14`:** Row 1, Column 4.

**Parameter `m21`:** Row 2, Column 1.

**Parameter `m22`:** Row 2, Column 2.

**Parameter `m23`:** Row 2, Column 3.

**Parameter `m24`:** Row 2, Column 4.

**Parameter `m31`:** Row 3, Column 1.

**Parameter `m32`:** Row 3, Column 2.

**Parameter `m33`:** Row 3, Column 3.

**Parameter `m34`:** Row 3, Column 4.

**Parameter `m41`:** Row 4, Column 1.

**Parameter `m42`:** Row 4, Column 2.

**Parameter `m43`:** Row 4, Column 3.

**Parameter `m44`:** Row 4, Column 4.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L154).

## `CopyToColumnMajor`

<a id="api-6f105ca26eb3482e"></a>
<!-- api: M:InnoEngine.Mathematics.Matrix.CopyToColumnMajor(System.Single[],System.Int32) eb409b4a4747cfba65aea7de76452bc25a597e951381cadf061e7cb188b781bf -->

```csharp
public void InnoEngine.Mathematics.Matrix.CopyToColumnMajor(float[] destination, int startIndex = 0)
```

Copies matrix elements into an array in column-major order.
Useful for APIs like bgfx that expect column-major float[16].

**Parameter `destination`:** Destination array.

**Parameter `startIndex`:** Start index in the destination array.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L859).

## `CreateFromQuaternion`

<a id="api-f1d995a50fc11f6b"></a>
<!-- api: M:InnoEngine.Mathematics.Matrix.CreateFromQuaternion(InnoEngine.Mathematics.Quaternion) f62131dad02976692b36b62ec9e8c1f1c885d9e8e00c96145f10ccb03139cbb0 -->

```csharp
public static InnoEngine.Mathematics.Matrix InnoEngine.Mathematics.Matrix.CreateFromQuaternion(InnoEngine.Mathematics.Quaternion q)
```

Creates a rotation matrix from a quaternion.

**Parameter `q`:** Source quaternion.

**Returns:** A rotation matrix.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L347).

## `CreateLookAt`

<a id="api-279474d700b7cc77"></a>
<!-- api: M:InnoEngine.Mathematics.Matrix.CreateLookAt(InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Vector3) d0427fcb9b2eb9a628ed9a51dac74f8b4090e022ad3a449fb3c3fb5fdb1c7f35 -->

```csharp
public static InnoEngine.Mathematics.Matrix InnoEngine.Mathematics.Matrix.CreateLookAt(InnoEngine.Mathematics.Vector3 eye, InnoEngine.Mathematics.Vector3 target, InnoEngine.Mathematics.Vector3 up)
```

Creates a left-handed view matrix that looks from `eye` to `target`.

**Parameter `eye`:** Camera position in world space.

**Parameter `target`:** Target position in world space.

**Parameter `up`:** Up direction in world space.

**Returns:** A view matrix.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L531).

## `CreateLookAtRH`

<a id="api-e4622c78fcea9a15"></a>
<!-- api: M:InnoEngine.Mathematics.Matrix.CreateLookAtRH(InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Vector3) a4f55cf3628224c18261bee5ed746dbe93433c9a2fb31170f7e25dbebb94311e -->

```csharp
public static InnoEngine.Mathematics.Matrix InnoEngine.Mathematics.Matrix.CreateLookAtRH(InnoEngine.Mathematics.Vector3 eye, InnoEngine.Mathematics.Vector3 target, InnoEngine.Mathematics.Vector3 up)
```

Creates a right-handed view matrix that looks from `eye` to `target`.

**Parameter `eye`:** The eye consumed by create look at rh; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `target`:** The existing target that receives the validated result.

**Parameter `up`:** The up consumed by create look at rh; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated matrix that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L563).

## `CreateOrthographic`

<a id="api-1243162576599775"></a>
<!-- api: M:InnoEngine.Mathematics.Matrix.CreateOrthographic(System.Single,System.Single,System.Single,System.Single) 9276224a0c87348bf52f80a4a211eed653291f7c19730206e26fff2ba078ecca -->

```csharp
public static InnoEngine.Mathematics.Matrix InnoEngine.Mathematics.Matrix.CreateOrthographic(float width, float height, float near, float far)
```

Creates an orthographic projection matrix (depth range 0..1).

**Parameter `width`:** View width.

**Parameter `height`:** View height.

**Parameter `near`:** Near plane in camera space.

**Parameter `far`:** Far plane in camera space.

**Returns:** An orthographic projection matrix.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L450).

## `CreateOrthographicOffCenter`

<a id="api-595061bead75db9b"></a>
<!-- api: M:InnoEngine.Mathematics.Matrix.CreateOrthographicOffCenter(System.Single,System.Single,System.Single,System.Single,System.Single,System.Single) 203429a480596c303547ed0905e5175d9ac34d3c1f0e082e42443eba1c454bb2 -->

```csharp
public static InnoEngine.Mathematics.Matrix InnoEngine.Mathematics.Matrix.CreateOrthographicOffCenter(float left, float right, float bottom, float top, float near, float far)
```

Creates an off-center orthographic projection matrix (depth range 0..1).

**Parameter `left`:** Left plane.

**Parameter `right`:** Right plane.

**Parameter `bottom`:** Bottom plane.

**Parameter `top`:** Top plane.

**Parameter `near`:** Near plane.

**Parameter `far`:** Far plane.

**Returns:** An orthographic projection matrix.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L489).

## `CreatePerspectiveFieldOfView`

<a id="api-c613f5d6bd0979f6"></a>
<!-- api: M:InnoEngine.Mathematics.Matrix.CreatePerspectiveFieldOfView(System.Single,System.Single,System.Single,System.Single) d77e779b8fe3292d66ba946bd14c23ffa8d55a579a95ea0f4dd16a6fac7e32f4 -->

```csharp
public static InnoEngine.Mathematics.Matrix InnoEngine.Mathematics.Matrix.CreatePerspectiveFieldOfView(float fov, float aspect, float near, float far)
```

Creates a left-handed, perspective projection matrix ( depth range 0..1).

**Parameter `fov`:** Vertical field of view in radians.

**Parameter `aspect`:** Viewport aspect ratio (width / height).

**Parameter `near`:** Near plane distance (positive).

**Parameter `far`:** Far plane distance (positive).

**Returns:** A perspective projection matrix.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L382).

## `CreatePerspectiveFieldOfViewRH`

<a id="api-aed61c9309f38411"></a>
<!-- api: M:InnoEngine.Mathematics.Matrix.CreatePerspectiveFieldOfViewRH(System.Single,System.Single,System.Single,System.Single) dc2f0614c6112b897b7301054e7334641eedfbd6ed493c5b36d54d4b14287e83 -->

```csharp
public static InnoEngine.Mathematics.Matrix InnoEngine.Mathematics.Matrix.CreatePerspectiveFieldOfViewRH(float fov, float aspect, float near, float far)
```

Creates a right-handed, perspective projection matrix (depth range 0..1).

**Parameter `fov`:** The fov consumed by create perspective field of view rh; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `aspect`:** The aspect consumed by create perspective field of view rh; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `near`:** The near consumed by create perspective field of view rh; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `far`:** The far consumed by create perspective field of view rh; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated matrix that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L416).

## `CreateRotationX`

<a id="api-be2390d694ffcfa2"></a>
<!-- api: M:InnoEngine.Mathematics.Matrix.CreateRotationX(System.Single) 2c0a7c1b2898b0ca741401989557296a3348f94babc709bd982f7d2213547ac3 -->

```csharp
public static InnoEngine.Mathematics.Matrix InnoEngine.Mathematics.Matrix.CreateRotationX(float radians)
```

Creates a rotation matrix around the X axis (radians).

**Parameter `radians`:** Rotation angle in radians.

**Returns:** A rotation matrix.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L287).

## `CreateRotationY`

<a id="api-e0f2efb000dcff6a"></a>
<!-- api: M:InnoEngine.Mathematics.Matrix.CreateRotationY(System.Single) c4d4140fd028b8824366b5b2d78de06012f18e898e7b24e5f6f980e59d765a8d -->

```csharp
public static InnoEngine.Mathematics.Matrix InnoEngine.Mathematics.Matrix.CreateRotationY(float radians)
```

Creates a rotation matrix around the Y axis (radians).

**Parameter `radians`:** Rotation angle in radians.

**Returns:** A rotation matrix.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L307).

## `CreateRotationZ`

<a id="api-5ccf074eef112e00"></a>
<!-- api: M:InnoEngine.Mathematics.Matrix.CreateRotationZ(System.Single) 3f2117449c9a25ce71562bedfcead1d2bdeb5fff891bf980af282fec01ab6321 -->

```csharp
public static InnoEngine.Mathematics.Matrix InnoEngine.Mathematics.Matrix.CreateRotationZ(float radians)
```

Creates a rotation matrix around the Z axis (radians).

**Parameter `radians`:** Rotation angle in radians.

**Returns:** A rotation matrix.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L327).

## `CreateScale`

<a id="api-4286764d6d0a09e5"></a>
<!-- api: M:InnoEngine.Mathematics.Matrix.CreateScale(InnoEngine.Mathematics.Vector3) 5c92fa96d972b00437f146bde2f247453ecb2165483e63d10d8672d319089166 -->

```csharp
public static InnoEngine.Mathematics.Matrix InnoEngine.Mathematics.Matrix.CreateScale(InnoEngine.Mathematics.Vector3 v)
```

Creates a non-uniform scale matrix.

**Returns:** A scale matrix.

**Parameter `v`:** The concrete value read or transformed by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L276).

## `CreateScale`

<a id="api-1aa6a3d58b267422"></a>
<!-- api: M:InnoEngine.Mathematics.Matrix.CreateScale(System.Single,System.Single,System.Single) 5b09d9cee167a48eb5f760905288f603e876b09bed234c0520c9d96316ad2780 -->

```csharp
public static InnoEngine.Mathematics.Matrix InnoEngine.Mathematics.Matrix.CreateScale(float x, float y, float z)
```

Creates a non-uniform scale matrix.

**Parameter `x`:** Scale factor on X axis.

**Parameter `y`:** Scale factor on Y axis.

**Parameter `z`:** Scale factor on Z axis.

**Returns:** A scale matrix.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L255).

## `CreateScale`

<a id="api-469577bbe01ff05b"></a>
<!-- api: M:InnoEngine.Mathematics.Matrix.CreateScale(System.Single) 072551281f8d3c9b524322bad8a40db46ae47c604c2b4470e00a39cab52604bb -->

```csharp
public static InnoEngine.Mathematics.Matrix InnoEngine.Mathematics.Matrix.CreateScale(float scale)
```

Creates a uniform scale matrix.

**Returns:** A scale matrix.

**Parameter `scale`:** The scale consumed by create scale; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L238).

## `CreateTranslation`

<a id="api-4c1101a4eee7be2c"></a>
<!-- api: M:InnoEngine.Mathematics.Matrix.CreateTranslation(InnoEngine.Mathematics.Vector3) bae790de3ca871342a1ef51b2a1f9faf16c41dbba567325fc077cd7b6534ccba -->

```csharp
public static InnoEngine.Mathematics.Matrix InnoEngine.Mathematics.Matrix.CreateTranslation(InnoEngine.Mathematics.Vector3 v)
```

Creates a translation matrix.

**Returns:** A translation matrix.

**Parameter `v`:** The concrete value read or transformed by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L227).

## `CreateTranslation`

<a id="api-f76254697ee86ad8"></a>
<!-- api: M:InnoEngine.Mathematics.Matrix.CreateTranslation(System.Single,System.Single,System.Single) ed6e613758cff123de6d935223d294e18d07bd004580ae551338fc2c808ab6ad -->

```csharp
public static InnoEngine.Mathematics.Matrix InnoEngine.Mathematics.Matrix.CreateTranslation(float x, float y, float z)
```

Creates a translation matrix.

**Parameter `x`:** Translation on X axis.

**Parameter `y`:** Translation on Y axis.

**Parameter `z`:** Translation on Z axis.

**Returns:** A translation matrix whose translation resides in (m14, m24, m34).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L206).

## `Decompose`

<a id="api-ce76cb1289975ee4"></a>
<!-- api: M:InnoEngine.Mathematics.Matrix.Decompose(InnoEngine.Mathematics.Matrix,InnoEngine.Mathematics.Vector3@,InnoEngine.Mathematics.Quaternion@,InnoEngine.Mathematics.Vector3@) 39b6a0e4bf681efdec368f48f31bdfcf74eb9cdc751a34e786721eb449c8f1de -->

```csharp
public static bool InnoEngine.Mathematics.Matrix.Decompose(InnoEngine.Mathematics.Matrix m, out InnoEngine.Mathematics.Vector3 scale, out InnoEngine.Mathematics.Quaternion rotation, out InnoEngine.Mathematics.Vector3 translation)
```

Decomposes a matrix into scale, rotation and translation.

**Parameter `m`:** The transformation matrix applied to the supplied value.

**Parameter `scale`:** Receives basis-column lengths, with the X sign negated for a negative determinant.

**Parameter `rotation`:** Receives the rotation derived from normalized basis columns, or identity when a scale is too small.

**Parameter `translation`:** Receives the last-column XYZ translation.

**Returns:** False when a basis-column length is at most the default tolerance; otherwise true.
Success does not certify that a matrix with shear or perspective is a pure TRS transform.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L710).

## `Determinant`

<a id="api-477fb8d3d4aa0c4e"></a>
<!-- api: M:InnoEngine.Mathematics.Matrix.Determinant(InnoEngine.Mathematics.Matrix) 908f033d093853db8d044ecd894525873d5140729988cd25cf059c8674cc80d1 -->

```csharp
public static float InnoEngine.Mathematics.Matrix.Determinant(InnoEngine.Mathematics.Matrix m)
```

Returns the determinant of the matrix.

**Parameter `m`:** The transformation matrix applied to the supplied value.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L668).

## `Equals`

<a id="api-7a18cdcd941b88e0"></a>
<!-- api: M:InnoEngine.Mathematics.Matrix.Equals(InnoEngine.Mathematics.Matrix) cf9bfb5348d64f93ba1570747d03fe3189434b49c91f8119e2c9815b4f44037f -->

```csharp
public bool InnoEngine.Mathematics.Matrix.Equals(InnoEngine.Mathematics.Matrix other)
```

Determines whether this instance is equal to another matrix.

**Parameter `other`:** Other matrix.

**Returns:** `true` if equal.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L1031).

## `Equals`

<a id="api-4b665fcf62f6149e"></a>
<!-- api: M:InnoEngine.Mathematics.Matrix.Equals(System.Object) 2c28cdbb5f2dbeaf234e36e91993cc51211e602199219abffab26a12e56aebee -->

```csharp
public override bool InnoEngine.Mathematics.Matrix.Equals(object? obj)
```

Determines whether this instance and the supplied value represent the same logical state.

**Returns:** `true` when both values represent the same logical state; otherwise, `false`.

**Parameter `obj`:** The object to compare with this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L1042).

## `Extract2DTransform`

<a id="api-68c57466b17a25d1"></a>
<!-- api: M:InnoEngine.Mathematics.Matrix.Extract2DTransform(InnoEngine.Mathematics.Matrix) 40020f0b46e1aa9ae08c0bac22347f989dad9d95aa594bfbdae5ef9a139d4ec0 -->

```csharp
public static InnoEngine.Mathematics.Matrix InnoEngine.Mathematics.Matrix.Extract2DTransform(InnoEngine.Mathematics.Matrix m)
```

Extracts the 2D-affine portion of a matrix (XY basis + XY translation).

**Parameter `m`:** Source matrix.

**Returns:** A matrix representing the 2D transform embedded in `m`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L758).

## `GetHashCode`

<a id="api-c281f8c1f66f3d10"></a>
<!-- api: M:InnoEngine.Mathematics.Matrix.GetHashCode 1b5bce0d4fed6b24f3ead6664e5c235cb63d1ddda9c26377ea039cec66c68ee8 -->

```csharp
public override int InnoEngine.Mathematics.Matrix.GetHashCode()
```

Computes a hash code from the fields that participate in logical equality.

**Returns:** A hash code consistent with the implemented equality contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L1050).

## `Invert`

<a id="api-89a7eefc5f571a0c"></a>
<!-- api: M:InnoEngine.Mathematics.Matrix.Invert(InnoEngine.Mathematics.Matrix) 49cae27b5c258264a6a52117158e2e40df30d3274bf80472d0e2716de7f2661d -->

```csharp
public static InnoEngine.Mathematics.Matrix InnoEngine.Mathematics.Matrix.Invert(InnoEngine.Mathematics.Matrix m)
```

Returns the inverse, or identity when the absolute determinant is below the default tolerance.

**Parameter `m`:** Source matrix.

**Returns:** Inverse matrix, or `InnoEngine.Mathematics.Matrix.identity` when the absolute determinant is less than `InnoEngine.Mathematics.MathHelper.C_TOLERANCE`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L796).

## `Multiply`

<a id="api-3803f7f611ea7078"></a>
<!-- api: M:InnoEngine.Mathematics.Matrix.Multiply(InnoEngine.Mathematics.Matrix,InnoEngine.Mathematics.Matrix) 5045bb1c37fc6f937331e181a4291d76d1b580be813dd72d653b29f10aebb3b4 -->

```csharp
public static InnoEngine.Mathematics.Matrix InnoEngine.Mathematics.Matrix.Multiply(InnoEngine.Mathematics.Matrix a, InnoEngine.Mathematics.Matrix b)
```

Multiplies two matrices using standard matrix multiplication.

**Parameter `a`:** Left operand.

**Parameter `b`:** Right operand.

**Returns:** The product matrix `a * b`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L597).

## `op_Equality`

<a id="api-90725b0c37de978e"></a>
<!-- api: M:InnoEngine.Mathematics.Matrix.op_Equality(InnoEngine.Mathematics.Matrix,InnoEngine.Mathematics.Matrix) 7a117889a54ab0de2af56d2cd330c3ff3cd48b2fec323c1beb08a048ad46f2ad -->

```csharp
public static bool InnoEngine.Mathematics.Matrix.operator ==(InnoEngine.Mathematics.Matrix matrix1, InnoEngine.Mathematics.Matrix matrix2)
```

Tests matrices for approximate equality (per-element).

**Parameter `matrix1`:** First matrix.

**Parameter `matrix2`:** Second matrix.

**Returns:** `true` if all elements are approximately equal.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L937).

## `op_Implicit`

<a id="api-43f2a329e0dd12a0"></a>
<!-- api: M:InnoEngine.Mathematics.Matrix.op_Implicit(InnoEngine.Mathematics.Matrix)~System.Numerics.Matrix4x4 c53f7f47f7406e479df1c803d950fcf5f86c52286078a602ac7c39ebe7bdf11c -->

```csharp
public static InnoEngine.Mathematics.Matrix.implicit operator System.Numerics.Matrix4x4(InnoEngine.Mathematics.Matrix m)
```

Converts to `System.Numerics.Matrix4x4` preserving element order.
System.Numerics assumes row-major with row vectors, so transpose as needed for column-vector usage.

**Parameter `m`:** Source matrix.

**Returns:** The validated system.numerics.matrix4x4 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L987).

## `op_Implicit`

<a id="api-e2814e181a12822e"></a>
<!-- api: M:InnoEngine.Mathematics.Matrix.op_Implicit(System.Numerics.Matrix4x4)~InnoEngine.Mathematics.Matrix 47c6100336c1b920cb43a0f331f91cf0f42c80db98771645812c206c2c8c9d88 -->

```csharp
public static InnoEngine.Mathematics.Matrix.implicit operator InnoEngine.Mathematics.Matrix(System.Numerics.Matrix4x4 m)
```

Converts from `System.Numerics.Matrix4x4` preserving element order.
System.Numerics assumes row-major with row vectors, so transpose as needed for column-vector usage.

**Parameter `m`:** Source matrix.

**Returns:** The validated matrix that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L1007).

## `op_Inequality`

<a id="api-9ca1ded3d1e8ad6e"></a>
<!-- api: M:InnoEngine.Mathematics.Matrix.op_Inequality(InnoEngine.Mathematics.Matrix,InnoEngine.Mathematics.Matrix) 5df2950e7df747bb0f42270ed1f50c5d9426347c8c1c40b0df83af9a6618b562 -->

```csharp
public static bool InnoEngine.Mathematics.Matrix.operator !=(InnoEngine.Mathematics.Matrix a, InnoEngine.Mathematics.Matrix b)
```

Tests matrices for inequality.

**Parameter `a`:** First matrix.

**Parameter `b`:** Second matrix.

**Returns:** `true` if matrices are not equal.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L972).

## `op_Multiply`

<a id="api-20ef45273441f758"></a>
<!-- api: M:InnoEngine.Mathematics.Matrix.op_Multiply(InnoEngine.Mathematics.Matrix,InnoEngine.Mathematics.Matrix) 46c1c56c8d6913c806dacbe8efd64c71eac4dd8da17bfbe47ae1ca2bf532d97c -->

```csharp
public static InnoEngine.Mathematics.Matrix InnoEngine.Mathematics.Matrix.operator *(InnoEngine.Mathematics.Matrix a, InnoEngine.Mathematics.Matrix b)
```

Multiplies two matrices.

**Parameter `a`:** Left operand.

**Parameter `b`:** Right operand.

**Returns:** The product matrix.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L920).

## `ToColumnMajorArray`

<a id="api-cce191ae0eabebd4"></a>
<!-- api: M:InnoEngine.Mathematics.Matrix.ToColumnMajorArray 33fe7981f0a88a15102bbdaa701cea024e5ed1cf4103f2b659bcf856bae8edfb -->

```csharp
public float[] InnoEngine.Mathematics.Matrix.ToColumnMajorArray()
```

Returns a new array containing matrix elements in column-major order.

**Returns:** An immutable snapshot of the values selected by the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L897).

## `ToString`

<a id="api-0443146d17924e17"></a>
<!-- api: M:InnoEngine.Mathematics.Matrix.ToString aae88b8dd06c560939c195d063f4744e24115a95f68b101fe28df84c27cb5e3c -->

```csharp
public override string InnoEngine.Mathematics.Matrix.ToString()
```

Returns a multi-line string representation of the matrix in row-major layout.

**Returns:** The human-readable representation of this value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L1065).

## `Transpose`

<a id="api-6fb932379366d873"></a>
<!-- api: M:InnoEngine.Mathematics.Matrix.Transpose(InnoEngine.Mathematics.Matrix) f8d29f6eb45a86f9ec0a19ea71acac181b2e139b974328af19cc38616d84835b -->

```csharp
public static InnoEngine.Mathematics.Matrix InnoEngine.Mathematics.Matrix.Transpose(InnoEngine.Mathematics.Matrix a)
```

Returns the transpose of a matrix.

**Parameter `a`:** Source matrix.

**Returns:** Transposed matrix.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L777).

## `identity`

<a id="api-fc28e4c4d64b2e25"></a>
<!-- api: P:InnoEngine.Mathematics.Matrix.identity 125943065ea893d1b2268a4d0cf16e100065a950bde0b833cdf756c33bc84435 -->

```csharp
public static InnoEngine.Mathematics.Matrix InnoEngine.Mathematics.Matrix.identity { get; }
```

Gets the identity matrix.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L181).
