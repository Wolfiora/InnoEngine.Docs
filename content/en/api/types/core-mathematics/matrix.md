---
title: "Matrix"
description: "Reference for Matrix in Inno.Core.Mathematics."
uid: api.inno.core.mathematics.950d79d89205df55
kind: api
owners:
  - Inno.Core.Mathematics
apiSurface: source-clr
contracts:
  - project.inno-core-mathematics#numeric-and-layout-contract
---
# `Matrix`

This reference describes `Matrix` in `Inno.Core.Mathematics`. Read the [shared contract](../../projects/inno-core-mathematics.md#numeric-and-layout-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Core.Mathematics.Matrix>`.

## Members

| Member | Kind |
| --- | --- |
| [`m11`](#api-bf13b26945bb7b34) | Field |
| [`m12`](#api-f891796f7ed5ecc0) | Field |
| [`m13`](#api-a4d3f7038c6f49e3) | Field |
| [`m14`](#api-6d9a758792fe35af) | Field |
| [`m21`](#api-c17b265812897554) | Field |
| [`m22`](#api-bd5918122bd8f919) | Field |
| [`m23`](#api-2109985f66272c79) | Field |
| [`m24`](#api-511e8c0ffc1f5852) | Field |
| [`m31`](#api-bae52ecc61173309) | Field |
| [`m32`](#api-81821a9ac8da2801) | Field |
| [`m33`](#api-8930f1a00f61936f) | Field |
| [`m34`](#api-9e5454a53c1801b1) | Field |
| [`m41`](#api-0ba1305e77f4daf6) | Field |
| [`m42`](#api-d4dec827d9cac8c3) | Field |
| [`m43`](#api-e4e431aa2bac03d0) | Field |
| [`m44`](#api-8086bbb473ed6b4a) | Field |
| [`#ctor`](#api-1eaf6f6c2d0a0f9f) | Method |
| [`CopyToColumnMajor`](#api-86da0ea80e561984) | Method |
| [`CreateFromQuaternion`](#api-2646ee207a053b51) | Method |
| [`CreateLookAt`](#api-78ba2114fd8a465e) | Method |
| [`CreateLookAtRH`](#api-f2f68774ee72bd1d) | Method |
| [`CreateOrthographic`](#api-f5e52e6176cc868b) | Method |
| [`CreateOrthographicOffCenter`](#api-d95149c0e6dcbb9f) | Method |
| [`CreatePerspectiveFieldOfView`](#api-83c5ce127b9782b4) | Method |
| [`CreatePerspectiveFieldOfViewRH`](#api-f3e92fdb4ed2815a) | Method |
| [`CreateRotationX`](#api-2789eddb740ad67c) | Method |
| [`CreateRotationY`](#api-b22f184c35d883df) | Method |
| [`CreateRotationZ`](#api-62b187af472ef0ca) | Method |
| [`CreateScale`](#api-f6d39e3bf26e022d) | Method |
| [`CreateScale`](#api-d73c1d4e3c476b8e) | Method |
| [`CreateScale`](#api-62f04472249e1632) | Method |
| [`CreateTranslation`](#api-ebd49a0013d96662) | Method |
| [`CreateTranslation`](#api-689b931179e99fc5) | Method |
| [`Decompose`](#api-41f824891c650f17) | Method |
| [`Determinant`](#api-011514641fd67d5c) | Method |
| [`Equals`](#api-638f041da3a05b0d) | Method |
| [`Equals`](#api-61bbca1e8c9240a7) | Method |
| [`Extract2DTransform`](#api-51689fe1b32b17cd) | Method |
| [`GetHashCode`](#api-82ebcf7845fe418f) | Method |
| [`Invert`](#api-eddd6e4f6954b9ff) | Method |
| [`Multiply`](#api-852e2fe4ea25720a) | Method |
| [`op_Equality`](#api-d13b043c1ef65a0e) | Method |
| [`op_Implicit`](#api-ea36689577ce8a90) | Method |
| [`op_Implicit`](#api-8496cb2be2fce01b) | Method |
| [`op_Inequality`](#api-e33264b7b7ed382d) | Method |
| [`op_Multiply`](#api-8629e14ef6b9c707) | Method |
| [`ToColumnMajorArray`](#api-ec59cdcf4a561c10) | Method |
| [`ToString`](#api-c2cc24fbfba36478) | Method |
| [`Transpose`](#api-070bdd8487f3e797) | Method |
| [`identity`](#api-d9fe49cba23012b9) | Property |

## Type declaration

<a id="api-950d79d89205df55"></a>
<!-- api: T:Inno.Core.Mathematics.Matrix f8c4f81d926ee2be607d6c24582419d7c76e87b40842a44741e508a7774edc47 -->

```csharp
public struct Inno.Core.Mathematics.Matrix : System.IEquatable<Inno.Core.Mathematics.Matrix>
```

Represents a mutable four-by-four transformation matrix using column-vector multiplication.

**Constraints:** Conventions used by this type:


- **Column-vector math**: points/vectors are treated as column vectors on the right: `v' = M * v`.
- **Translation is stored in the last column**: (m14, m24, m34).
- Matrix multiplication follows standard form: `C = A * B` (apply B then A in column-vector convention: `A * (B * v)`).



Note on handedness:
    This `Inno.Core.Mathematics.Matrix` type is **handedness-agnostic**. Handedness is determined by the specific factory
    (e.g. `Inno.Core.Mathematics.Matrix.CreateLookAt(Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Vector3)` and `Inno.Core.Mathematics.Matrix.CreatePerspectiveFieldOfView(System.Single,System.Single,System.Single,System.Single)` are currently **left-handed**).
    If your engine convention is right-handed (-Z forward), add/use explicit RH variants (e.g. CreateLookAtRH / CreatePerspectiveFieldOfViewRH).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L27).

## `m11`

<a id="api-bf13b26945bb7b34"></a>
<!-- api: F:Inno.Core.Mathematics.Matrix.m11 51f5627d365cfbb4d2d4b897569eccdee532f38597d63f497395d15b9b5058aa -->

```csharp
public float Inno.Core.Mathematics.Matrix.m11
```

Row 1, Column 1.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L34).

## `m12`

<a id="api-f891796f7ed5ecc0"></a>
<!-- api: F:Inno.Core.Mathematics.Matrix.m12 6f5f4c3489d80d35f1b45f452533d777c6882b00e9c35e8cd0ec1f86138ba6e6 -->

```csharp
public float Inno.Core.Mathematics.Matrix.m12
```

Row 1, Column 2.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L38).

## `m13`

<a id="api-a4d3f7038c6f49e3"></a>
<!-- api: F:Inno.Core.Mathematics.Matrix.m13 827a0146501fae17ff549cf2c2631861f112b47c2e7830417d122a56483d232c -->

```csharp
public float Inno.Core.Mathematics.Matrix.m13
```

Row 1, Column 3.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L42).

## `m14`

<a id="api-6d9a758792fe35af"></a>
<!-- api: F:Inno.Core.Mathematics.Matrix.m14 98a9640dccaec4f6c8b4b7de60306b9e81de67fa439c0c12db6868345f8b59b7 -->

```csharp
public float Inno.Core.Mathematics.Matrix.m14
```

Row 1, Column 4.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L46).

## `m21`

<a id="api-c17b265812897554"></a>
<!-- api: F:Inno.Core.Mathematics.Matrix.m21 b2c3499153a0494345ebe6860effb2f5a44007b14c51e842968a6d920a2c2dc4 -->

```csharp
public float Inno.Core.Mathematics.Matrix.m21
```

Row 2, Column 1.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L51).

## `m22`

<a id="api-bd5918122bd8f919"></a>
<!-- api: F:Inno.Core.Mathematics.Matrix.m22 86ce6aeff5ecca52bf483dd460f3a996cca1d932426c6e54e54c90e45c195e83 -->

```csharp
public float Inno.Core.Mathematics.Matrix.m22
```

Row 2, Column 2.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L55).

## `m23`

<a id="api-2109985f66272c79"></a>
<!-- api: F:Inno.Core.Mathematics.Matrix.m23 eda4fda3f7f3bdf5955bc292c314fe8971c8e4f9812bd9202903b311e9d9f177 -->

```csharp
public float Inno.Core.Mathematics.Matrix.m23
```

Row 2, Column 3.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L59).

## `m24`

<a id="api-511e8c0ffc1f5852"></a>
<!-- api: F:Inno.Core.Mathematics.Matrix.m24 6a50bca14848ff2d6e1bc11fde84249c6a9f90cc57fea6eab0508dbcdc0628d2 -->

```csharp
public float Inno.Core.Mathematics.Matrix.m24
```

Row 2, Column 4.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L63).

## `m31`

<a id="api-bae52ecc61173309"></a>
<!-- api: F:Inno.Core.Mathematics.Matrix.m31 a9a6c4b33451537b19ad8ab15531a0bfc57f4fbad2fea431ac5772b44bd52d11 -->

```csharp
public float Inno.Core.Mathematics.Matrix.m31
```

Row 3, Column 1.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L68).

## `m32`

<a id="api-81821a9ac8da2801"></a>
<!-- api: F:Inno.Core.Mathematics.Matrix.m32 c402b19cd2a88f1e614e1c4bb47d07c299794b7c131ed0735a516dd3b2b424bd -->

```csharp
public float Inno.Core.Mathematics.Matrix.m32
```

Row 3, Column 2.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L72).

## `m33`

<a id="api-8930f1a00f61936f"></a>
<!-- api: F:Inno.Core.Mathematics.Matrix.m33 99c3efe410d20d2b4b718d216a2e2e8d5fa50b2f53643d93cac210eab065780c -->

```csharp
public float Inno.Core.Mathematics.Matrix.m33
```

Row 3, Column 3.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L76).

## `m34`

<a id="api-9e5454a53c1801b1"></a>
<!-- api: F:Inno.Core.Mathematics.Matrix.m34 1fb32784091a117a42f8e01cc879d9207dc78a8e6f9212d361bfe0b1278b8668 -->

```csharp
public float Inno.Core.Mathematics.Matrix.m34
```

Row 3, Column 4.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L80).

## `m41`

<a id="api-0ba1305e77f4daf6"></a>
<!-- api: F:Inno.Core.Mathematics.Matrix.m41 713187958b7a19f52db6324d16b6f4f144e2949b4616bc0bb39a074f0dbd9fb3 -->

```csharp
public float Inno.Core.Mathematics.Matrix.m41
```

Row 4, Column 1 (translation X component for affine transforms).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L85).

## `m42`

<a id="api-d4dec827d9cac8c3"></a>
<!-- api: F:Inno.Core.Mathematics.Matrix.m42 fa46183ae9a4e82d1857dd10b26f474075eed366f7effcf749cd74b6bda7557a -->

```csharp
public float Inno.Core.Mathematics.Matrix.m42
```

Row 4, Column 2 (translation Y component for affine transforms).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L89).

## `m43`

<a id="api-e4e431aa2bac03d0"></a>
<!-- api: F:Inno.Core.Mathematics.Matrix.m43 572ffc12e000e4d5ff702f1aa286029d46800d7c44bba918b88df490f87bb812 -->

```csharp
public float Inno.Core.Mathematics.Matrix.m43
```

Row 4, Column 3 (translation Z component for affine transforms).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L93).

## `m44`

<a id="api-8086bbb473ed6b4a"></a>
<!-- api: F:Inno.Core.Mathematics.Matrix.m44 e43aa758178aad78c88f07a2ab1c9c6414b69c1e1ef7f271152b21b2765eae31 -->

```csharp
public float Inno.Core.Mathematics.Matrix.m44
```

Row 4, Column 4.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L97).

## `#ctor`

<a id="api-1eaf6f6c2d0a0f9f"></a>
<!-- api: M:Inno.Core.Mathematics.Matrix.#ctor(System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single) c0f91c767e7a9208d6e5c8229c57d54d042afb97314efdbfb95e20a9731db542 -->

```csharp
public Inno.Core.Mathematics.Matrix.Matrix(float m11, float m12, float m13, float m14, float m21, float m22, float m23, float m24, float m31, float m32, float m33, float m34, float m41, float m42, float m43, float m44)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L154).

## `CopyToColumnMajor`

<a id="api-86da0ea80e561984"></a>
<!-- api: M:Inno.Core.Mathematics.Matrix.CopyToColumnMajor(System.Single[],System.Int32) f5e571d0fef6abc904d3f3a358fd723a69bd435e374dbb2a3e29bc5ee932d3de -->

```csharp
public void Inno.Core.Mathematics.Matrix.CopyToColumnMajor(float[] destination, int startIndex = 0)
```

Copies matrix elements into an array in column-major order.
Useful for APIs like bgfx that expect column-major float[16].

**Parameter `destination`:** Destination array.

**Parameter `startIndex`:** Start index in the destination array.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L859).

## `CreateFromQuaternion`

<a id="api-2646ee207a053b51"></a>
<!-- api: M:Inno.Core.Mathematics.Matrix.CreateFromQuaternion(Inno.Core.Mathematics.Quaternion) a1b19a200257264e64c83dc21744774810015c3f23fd4dff08bb34b3b82db11f -->

```csharp
public static Inno.Core.Mathematics.Matrix Inno.Core.Mathematics.Matrix.CreateFromQuaternion(Inno.Core.Mathematics.Quaternion q)
```

Creates a rotation matrix from a quaternion.

**Parameter `q`:** Source quaternion.

**Returns:** A rotation matrix.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L347).

## `CreateLookAt`

<a id="api-78ba2114fd8a465e"></a>
<!-- api: M:Inno.Core.Mathematics.Matrix.CreateLookAt(Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Vector3) 9020fc2d849707afc635a4facb7fc947e89fee719a0536d81fdd65a716994df6 -->

```csharp
public static Inno.Core.Mathematics.Matrix Inno.Core.Mathematics.Matrix.CreateLookAt(Inno.Core.Mathematics.Vector3 eye, Inno.Core.Mathematics.Vector3 target, Inno.Core.Mathematics.Vector3 up)
```

Creates a left-handed view matrix that looks from `eye` to `target`.

**Parameter `eye`:** Camera position in world space.

**Parameter `target`:** Target position in world space.

**Parameter `up`:** Up direction in world space.

**Returns:** A view matrix.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L531).

## `CreateLookAtRH`

<a id="api-f2f68774ee72bd1d"></a>
<!-- api: M:Inno.Core.Mathematics.Matrix.CreateLookAtRH(Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Vector3) 4a32f683ee4b8ea9fa2f7caa0a9d38eea4857a761b14adc1c1fec3da58300968 -->

```csharp
public static Inno.Core.Mathematics.Matrix Inno.Core.Mathematics.Matrix.CreateLookAtRH(Inno.Core.Mathematics.Vector3 eye, Inno.Core.Mathematics.Vector3 target, Inno.Core.Mathematics.Vector3 up)
```

Creates a right-handed view matrix that looks from `eye` to `target`.

**Parameter `eye`:** The eye consumed by create look at rh; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `target`:** The existing target that receives the validated result.

**Parameter `up`:** The up consumed by create look at rh; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated matrix that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L563).

## `CreateOrthographic`

<a id="api-f5e52e6176cc868b"></a>
<!-- api: M:Inno.Core.Mathematics.Matrix.CreateOrthographic(System.Single,System.Single,System.Single,System.Single) 6946bb58236ba3bf70aa782111c716f18491fb4f86297ff403ace03216a2424b -->

```csharp
public static Inno.Core.Mathematics.Matrix Inno.Core.Mathematics.Matrix.CreateOrthographic(float width, float height, float near, float far)
```

Creates an orthographic projection matrix (depth range 0..1).

**Parameter `width`:** View width.

**Parameter `height`:** View height.

**Parameter `near`:** Near plane in camera space.

**Parameter `far`:** Far plane in camera space.

**Returns:** An orthographic projection matrix.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L450).

## `CreateOrthographicOffCenter`

<a id="api-d95149c0e6dcbb9f"></a>
<!-- api: M:Inno.Core.Mathematics.Matrix.CreateOrthographicOffCenter(System.Single,System.Single,System.Single,System.Single,System.Single,System.Single) 889eb4b8640287d135a6584f6334b92a051592b20ac9ca8739c096b407489b91 -->

```csharp
public static Inno.Core.Mathematics.Matrix Inno.Core.Mathematics.Matrix.CreateOrthographicOffCenter(float left, float right, float bottom, float top, float near, float far)
```

Creates an off-center orthographic projection matrix (depth range 0..1).

**Parameter `left`:** Left plane.

**Parameter `right`:** Right plane.

**Parameter `bottom`:** Bottom plane.

**Parameter `top`:** Top plane.

**Parameter `near`:** Near plane.

**Parameter `far`:** Far plane.

**Returns:** An orthographic projection matrix.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L489).

## `CreatePerspectiveFieldOfView`

<a id="api-83c5ce127b9782b4"></a>
<!-- api: M:Inno.Core.Mathematics.Matrix.CreatePerspectiveFieldOfView(System.Single,System.Single,System.Single,System.Single) 622d434c95b575a24a0c3a3a54e797ab3bdfbfdcda5a6d7fe73c38000821853c -->

```csharp
public static Inno.Core.Mathematics.Matrix Inno.Core.Mathematics.Matrix.CreatePerspectiveFieldOfView(float fov, float aspect, float near, float far)
```

Creates a left-handed, perspective projection matrix ( depth range 0..1).

**Parameter `fov`:** Vertical field of view in radians.

**Parameter `aspect`:** Viewport aspect ratio (width / height).

**Parameter `near`:** Near plane distance (positive).

**Parameter `far`:** Far plane distance (positive).

**Returns:** A perspective projection matrix.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L382).

## `CreatePerspectiveFieldOfViewRH`

<a id="api-f3e92fdb4ed2815a"></a>
<!-- api: M:Inno.Core.Mathematics.Matrix.CreatePerspectiveFieldOfViewRH(System.Single,System.Single,System.Single,System.Single) fc5ec78119f5a59cfd0c05b150c0d345136718962c4a407e7aa5c95f75f16836 -->

```csharp
public static Inno.Core.Mathematics.Matrix Inno.Core.Mathematics.Matrix.CreatePerspectiveFieldOfViewRH(float fov, float aspect, float near, float far)
```

Creates a right-handed, perspective projection matrix (depth range 0..1).

**Parameter `fov`:** The fov consumed by create perspective field of view rh; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `aspect`:** The aspect consumed by create perspective field of view rh; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `near`:** The near consumed by create perspective field of view rh; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `far`:** The far consumed by create perspective field of view rh; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated matrix that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L416).

## `CreateRotationX`

<a id="api-2789eddb740ad67c"></a>
<!-- api: M:Inno.Core.Mathematics.Matrix.CreateRotationX(System.Single) 4cc10711c53912f34cf599cb6c45b51bf4f842c74c1f2a834b938416cf13f63a -->

```csharp
public static Inno.Core.Mathematics.Matrix Inno.Core.Mathematics.Matrix.CreateRotationX(float radians)
```

Creates a rotation matrix around the X axis (radians).

**Parameter `radians`:** Rotation angle in radians.

**Returns:** A rotation matrix.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L287).

## `CreateRotationY`

<a id="api-b22f184c35d883df"></a>
<!-- api: M:Inno.Core.Mathematics.Matrix.CreateRotationY(System.Single) 116d47223b43081eb08952506911d60baa55369ee6fe032af4f95bd254a35ad7 -->

```csharp
public static Inno.Core.Mathematics.Matrix Inno.Core.Mathematics.Matrix.CreateRotationY(float radians)
```

Creates a rotation matrix around the Y axis (radians).

**Parameter `radians`:** Rotation angle in radians.

**Returns:** A rotation matrix.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L307).

## `CreateRotationZ`

<a id="api-62b187af472ef0ca"></a>
<!-- api: M:Inno.Core.Mathematics.Matrix.CreateRotationZ(System.Single) 3503e046ce2828ab665b99beae4e137ae6ab37f6fa8e0e609d5fe2be38f0644c -->

```csharp
public static Inno.Core.Mathematics.Matrix Inno.Core.Mathematics.Matrix.CreateRotationZ(float radians)
```

Creates a rotation matrix around the Z axis (radians).

**Parameter `radians`:** Rotation angle in radians.

**Returns:** A rotation matrix.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L327).

## `CreateScale`

<a id="api-f6d39e3bf26e022d"></a>
<!-- api: M:Inno.Core.Mathematics.Matrix.CreateScale(Inno.Core.Mathematics.Vector3) f667e1acf9d0940ed68079cff0b8f359e5d33abe0f1d8c9a5322459d7454bfe4 -->

```csharp
public static Inno.Core.Mathematics.Matrix Inno.Core.Mathematics.Matrix.CreateScale(Inno.Core.Mathematics.Vector3 v)
```

Creates a non-uniform scale matrix.

**Returns:** A scale matrix.

**Parameter `v`:** The concrete value read or transformed by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L276).

## `CreateScale`

<a id="api-d73c1d4e3c476b8e"></a>
<!-- api: M:Inno.Core.Mathematics.Matrix.CreateScale(System.Single,System.Single,System.Single) ce453e7c929ec014cc82ecbb2d0fef747572d342284218acfeb0f3c6c6c484e6 -->

```csharp
public static Inno.Core.Mathematics.Matrix Inno.Core.Mathematics.Matrix.CreateScale(float x, float y, float z)
```

Creates a non-uniform scale matrix.

**Parameter `x`:** Scale factor on X axis.

**Parameter `y`:** Scale factor on Y axis.

**Parameter `z`:** Scale factor on Z axis.

**Returns:** A scale matrix.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L255).

## `CreateScale`

<a id="api-62f04472249e1632"></a>
<!-- api: M:Inno.Core.Mathematics.Matrix.CreateScale(System.Single) 0c81dd30ef226b7b19bc8abb3a2aa80857f92bdbe945d1317d63b6f9ccce2aa5 -->

```csharp
public static Inno.Core.Mathematics.Matrix Inno.Core.Mathematics.Matrix.CreateScale(float scale)
```

Creates a uniform scale matrix.

**Returns:** A scale matrix.

**Parameter `scale`:** The scale consumed by create scale; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L238).

## `CreateTranslation`

<a id="api-ebd49a0013d96662"></a>
<!-- api: M:Inno.Core.Mathematics.Matrix.CreateTranslation(Inno.Core.Mathematics.Vector3) 4718de89624217daf37836435337d617a6cc516d85493ef5bb785e9b50b03e20 -->

```csharp
public static Inno.Core.Mathematics.Matrix Inno.Core.Mathematics.Matrix.CreateTranslation(Inno.Core.Mathematics.Vector3 v)
```

Creates a translation matrix.

**Returns:** A translation matrix.

**Parameter `v`:** The concrete value read or transformed by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L227).

## `CreateTranslation`

<a id="api-689b931179e99fc5"></a>
<!-- api: M:Inno.Core.Mathematics.Matrix.CreateTranslation(System.Single,System.Single,System.Single) 08cf4049ae26b8b96581ab5d59415ce414b600f2a85b516223751c953c86a382 -->

```csharp
public static Inno.Core.Mathematics.Matrix Inno.Core.Mathematics.Matrix.CreateTranslation(float x, float y, float z)
```

Creates a translation matrix.

**Parameter `x`:** Translation on X axis.

**Parameter `y`:** Translation on Y axis.

**Parameter `z`:** Translation on Z axis.

**Returns:** A translation matrix whose translation resides in (m14, m24, m34).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L206).

## `Decompose`

<a id="api-41f824891c650f17"></a>
<!-- api: M:Inno.Core.Mathematics.Matrix.Decompose(Inno.Core.Mathematics.Matrix,Inno.Core.Mathematics.Vector3@,Inno.Core.Mathematics.Quaternion@,Inno.Core.Mathematics.Vector3@) 8dbfa616c3db36bcd2145062f02365f5401946075fdfd44c120b278a4fe07cf4 -->

```csharp
public static bool Inno.Core.Mathematics.Matrix.Decompose(Inno.Core.Mathematics.Matrix m, out Inno.Core.Mathematics.Vector3 scale, out Inno.Core.Mathematics.Quaternion rotation, out Inno.Core.Mathematics.Vector3 translation)
```

Decomposes a matrix into scale, rotation and translation.

**Parameter `m`:** The transformation matrix applied to the supplied value.

**Parameter `scale`:** Receives basis-column lengths, with the X sign negated for a negative determinant.

**Parameter `rotation`:** Receives the rotation derived from normalized basis columns, or identity when a scale is too small.

**Parameter `translation`:** Receives the last-column XYZ translation.

**Returns:** False when a basis-column length is at most the default tolerance; otherwise true.
Success does not certify that a matrix with shear or perspective is a pure TRS transform.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L710).

## `Determinant`

<a id="api-011514641fd67d5c"></a>
<!-- api: M:Inno.Core.Mathematics.Matrix.Determinant(Inno.Core.Mathematics.Matrix) fa785072421ccc06cee5ad97e55d6d0dd95aa17e7324486f9f647645ff54fde1 -->

```csharp
public static float Inno.Core.Mathematics.Matrix.Determinant(Inno.Core.Mathematics.Matrix m)
```

Returns the determinant of the matrix.

**Parameter `m`:** The transformation matrix applied to the supplied value.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L668).

## `Equals`

<a id="api-638f041da3a05b0d"></a>
<!-- api: M:Inno.Core.Mathematics.Matrix.Equals(Inno.Core.Mathematics.Matrix) b77aa6718c62bbf775274e5deaab0d75cc18696da4fdd4717cb3a027f452b51f -->

```csharp
public bool Inno.Core.Mathematics.Matrix.Equals(Inno.Core.Mathematics.Matrix other)
```

Determines whether this instance is equal to another matrix.

**Parameter `other`:** Other matrix.

**Returns:** `true` if equal.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L1031).

## `Equals`

<a id="api-61bbca1e8c9240a7"></a>
<!-- api: M:Inno.Core.Mathematics.Matrix.Equals(System.Object) 9d94353b3c1705bbd375626f6adc5708041fd3bb4f26ab159de2676f91cc9807 -->

```csharp
public override bool Inno.Core.Mathematics.Matrix.Equals(object? obj)
```

Determines whether this instance and the supplied value represent the same logical state.

**Returns:** `true` when both values represent the same logical state; otherwise, `false`.

**Parameter `obj`:** The object to compare with this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L1042).

## `Extract2DTransform`

<a id="api-51689fe1b32b17cd"></a>
<!-- api: M:Inno.Core.Mathematics.Matrix.Extract2DTransform(Inno.Core.Mathematics.Matrix) b125b5742d14ec5fd89dc8419827d87f41153e77935f654232f003b24fa952c1 -->

```csharp
public static Inno.Core.Mathematics.Matrix Inno.Core.Mathematics.Matrix.Extract2DTransform(Inno.Core.Mathematics.Matrix m)
```

Extracts the 2D-affine portion of a matrix (XY basis + XY translation).

**Parameter `m`:** Source matrix.

**Returns:** A matrix representing the 2D transform embedded in `m`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L758).

## `GetHashCode`

<a id="api-82ebcf7845fe418f"></a>
<!-- api: M:Inno.Core.Mathematics.Matrix.GetHashCode d839d6f095e4f1ecabf09ee8791657c2d9a2c73451cc44b9e6654d6bfc0515f4 -->

```csharp
public override int Inno.Core.Mathematics.Matrix.GetHashCode()
```

Computes a hash code from the fields that participate in logical equality.

**Returns:** A hash code consistent with the implemented equality contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L1050).

## `Invert`

<a id="api-eddd6e4f6954b9ff"></a>
<!-- api: M:Inno.Core.Mathematics.Matrix.Invert(Inno.Core.Mathematics.Matrix) cca982af4e6be7c96b0edcd0360f145f0818e12995e306cfa6d1ee90b4ebedf1 -->

```csharp
public static Inno.Core.Mathematics.Matrix Inno.Core.Mathematics.Matrix.Invert(Inno.Core.Mathematics.Matrix m)
```

Returns the inverse, or identity when the absolute determinant is below the default tolerance.

**Parameter `m`:** Source matrix.

**Returns:** Inverse matrix, or `Inno.Core.Mathematics.Matrix.identity` when the absolute determinant is less than `Inno.Core.Mathematics.MathHelper.C_TOLERANCE`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L796).

## `Multiply`

<a id="api-852e2fe4ea25720a"></a>
<!-- api: M:Inno.Core.Mathematics.Matrix.Multiply(Inno.Core.Mathematics.Matrix,Inno.Core.Mathematics.Matrix) 10e77bba15d6a21dd098993e1d4a222251a05bf3be80b52bd791139408f4d779 -->

```csharp
public static Inno.Core.Mathematics.Matrix Inno.Core.Mathematics.Matrix.Multiply(Inno.Core.Mathematics.Matrix a, Inno.Core.Mathematics.Matrix b)
```

Multiplies two matrices using standard matrix multiplication.

**Parameter `a`:** Left operand.

**Parameter `b`:** Right operand.

**Returns:** The product matrix `a * b`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L597).

## `op_Equality`

<a id="api-d13b043c1ef65a0e"></a>
<!-- api: M:Inno.Core.Mathematics.Matrix.op_Equality(Inno.Core.Mathematics.Matrix,Inno.Core.Mathematics.Matrix) 190d42a96acb216a39d52cf845d1cb89027f3133543b6e37291fca10c8c0ac15 -->

```csharp
public static bool Inno.Core.Mathematics.Matrix.operator ==(Inno.Core.Mathematics.Matrix matrix1, Inno.Core.Mathematics.Matrix matrix2)
```

Tests matrices for approximate equality (per-element).

**Parameter `matrix1`:** First matrix.

**Parameter `matrix2`:** Second matrix.

**Returns:** `true` if all elements are approximately equal.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L937).

## `op_Implicit`

<a id="api-ea36689577ce8a90"></a>
<!-- api: M:Inno.Core.Mathematics.Matrix.op_Implicit(Inno.Core.Mathematics.Matrix)~System.Numerics.Matrix4x4 a59efe744dabc0ce3ab6f6eb8925e25026a14be2d3277e912b5b8ed7936216ab -->

```csharp
public static Inno.Core.Mathematics.Matrix.implicit operator System.Numerics.Matrix4x4(Inno.Core.Mathematics.Matrix m)
```

Converts to `System.Numerics.Matrix4x4` preserving element order.
System.Numerics assumes row-major with row vectors, so transpose as needed for column-vector usage.

**Parameter `m`:** Source matrix.

**Returns:** The validated system.numerics.matrix4x4 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L987).

## `op_Implicit`

<a id="api-8496cb2be2fce01b"></a>
<!-- api: M:Inno.Core.Mathematics.Matrix.op_Implicit(System.Numerics.Matrix4x4)~Inno.Core.Mathematics.Matrix dc1f1f99b498f9b9f216e36772a3bf96c2b93b9b42991c5288ad549243cdb399 -->

```csharp
public static Inno.Core.Mathematics.Matrix.implicit operator Inno.Core.Mathematics.Matrix(System.Numerics.Matrix4x4 m)
```

Converts from `System.Numerics.Matrix4x4` preserving element order.
System.Numerics assumes row-major with row vectors, so transpose as needed for column-vector usage.

**Parameter `m`:** Source matrix.

**Returns:** The validated matrix that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L1007).

## `op_Inequality`

<a id="api-e33264b7b7ed382d"></a>
<!-- api: M:Inno.Core.Mathematics.Matrix.op_Inequality(Inno.Core.Mathematics.Matrix,Inno.Core.Mathematics.Matrix) 4cdd609badb776ad1f9d0c308dd37a708abaedb6ddfc2a2f7e6b9feeddb8e217 -->

```csharp
public static bool Inno.Core.Mathematics.Matrix.operator !=(Inno.Core.Mathematics.Matrix a, Inno.Core.Mathematics.Matrix b)
```

Tests matrices for inequality.

**Parameter `a`:** First matrix.

**Parameter `b`:** Second matrix.

**Returns:** `true` if matrices are not equal.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L972).

## `op_Multiply`

<a id="api-8629e14ef6b9c707"></a>
<!-- api: M:Inno.Core.Mathematics.Matrix.op_Multiply(Inno.Core.Mathematics.Matrix,Inno.Core.Mathematics.Matrix) a8ccefebd2229475b8a663785128520fd8655a01e9ee08198240bf1fe9de784d -->

```csharp
public static Inno.Core.Mathematics.Matrix Inno.Core.Mathematics.Matrix.operator *(Inno.Core.Mathematics.Matrix a, Inno.Core.Mathematics.Matrix b)
```

Multiplies two matrices.

**Parameter `a`:** Left operand.

**Parameter `b`:** Right operand.

**Returns:** The product matrix.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L920).

## `ToColumnMajorArray`

<a id="api-ec59cdcf4a561c10"></a>
<!-- api: M:Inno.Core.Mathematics.Matrix.ToColumnMajorArray 578b4f57cd7d26882daf0a48fa2044345a786961dce26cf20e8009896f6a095e -->

```csharp
public float[] Inno.Core.Mathematics.Matrix.ToColumnMajorArray()
```

Returns a new array containing matrix elements in column-major order.

**Returns:** An immutable snapshot of the values selected by the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L897).

## `ToString`

<a id="api-c2cc24fbfba36478"></a>
<!-- api: M:Inno.Core.Mathematics.Matrix.ToString 84cd7211d22a24ecd50ecf9b1c617026f1a888cb9fcdd75c7eba540b27d0aa96 -->

```csharp
public override string Inno.Core.Mathematics.Matrix.ToString()
```

Returns a multi-line string representation of the matrix in row-major layout.

**Returns:** The human-readable representation of this value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L1065).

## `Transpose`

<a id="api-070bdd8487f3e797"></a>
<!-- api: M:Inno.Core.Mathematics.Matrix.Transpose(Inno.Core.Mathematics.Matrix) c66eba804a443df3cd42ab029ac36fe42fa285020f4513c9dc4a25a363fefe7c -->

```csharp
public static Inno.Core.Mathematics.Matrix Inno.Core.Mathematics.Matrix.Transpose(Inno.Core.Mathematics.Matrix a)
```

Returns the transpose of a matrix.

**Parameter `a`:** Source matrix.

**Returns:** Transposed matrix.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L777).

## `identity`

<a id="api-d9fe49cba23012b9"></a>
<!-- api: P:Inno.Core.Mathematics.Matrix.identity 49c5877d597a1258c9d921e01afc9547ec6e10cb8195ac1f899fc130f098f7d9 -->

```csharp
public static Inno.Core.Mathematics.Matrix Inno.Core.Mathematics.Matrix.identity { get; }
```

Gets the identity matrix.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Matrix.cs#L181).
