---
title: Transform positions, directions and colors
description: Use InnoEngine matrix conventions and numeric boundaries without assuming another library's layout or equality rules.
uid: manual.math.transform-values
kind: how-to
owners:
  - Inno.Core.Mathematics
contracts:
  - project.inno-core-mathematics#numeric-and-layout-contract
exampleMode: host
exampleProjects:
  - Inno.Core.Mathematics
---
# Transform positions, directions and colors

InnoEngine supplies its own vectors, matrices, quaternions, rectangles and colors. Their names are familiar, but multiplication direction, interpolation limits, packing and approximate equality must follow these types' actual contracts.

## Compose a transform

Matrices act on column vectors: `transformed = matrix * vector`. In `A * B`, the right-hand transform is applied first. Fields are named by row and column; translation occupies `m14`, `m24` and `m34`.

This complete host helper scales a point, rotates it, then translates it. The caller supplies the transform components; no scene or rendering backend is created.

```csharp
using Inno.Core.Mathematics;

static Vector3 TransformPoint(
    Vector3 localPoint,
    Vector3 position,
    Quaternion rotation,
    Vector3 scale
) {
    Matrix world = Matrix.CreateTranslation(position) *
                   Matrix.CreateFromQuaternion(rotation) *
                   Matrix.CreateScale(scale);
    return Vector3.Transform(localPoint, world);
}
```

`Vector3.Transform` uses an implicit homogeneous coordinate of one and returns XYZ without a perspective divide. `TransformNormal` applies only the upper-left linear 3×3 part: it neither normalizes nor computes the inverse transpose needed for a general nonuniform-scale surface normal. Prepare the appropriate normal matrix yourself.

For homogeneous projection, transform a `Vector4` and use `ProjectToVector3` when appropriate. Its zero-`w` case returns XYZ unchanged; it is not an error signal or proof of a valid projected point.

## Match camera and interop conventions

`CreateLookAt` and `CreatePerspectiveFieldOfView` use left-handed conventions. Their `RH` counterparts use right-handed conventions. Choose the matching camera/projection pair; the matrix container itself has no universal handedness.

Implicit conversion to or from `System.Numerics.Matrix4x4` preserves element positions. It does not automatically convert row-vector semantics to InnoEngine's column-vector semantics. Apply the required transpose at an explicit interoperability boundary.

Use `CopyToColumnMajor` or `ToColumnMajorArray` only when the receiving graphics contract requires column-major upload. `CopyToColumnMajor` validates the destination range. A C# struct's field order is not sufficient evidence for a backend's shader layout.

## Choose rotations and interpolation deliberately

Quaternion APIs without `Degrees` use radians. Pair XYZ conversion functions with XYZ, and ZYX with ZYX. XYZ uses the `Rx * Ry * Rz` convention. Equivalent rotations can have different Euler values, especially near singularities; do not treat an Euler representation as a unique persistent identity.

| Operation | Interpolation factor |
| --- | --- |
| `MathHelper.Lerp`, `MathHelper.LerpUnclamped`, `Vector2.Lerp` | Not clamped. |
| `Vector3.Lerp`, `Vector4.Lerp`, `Vector4Int.Lerp` | Clamped to `[0, 1]`; the integer result truncates components. |

Read the selected quaternion/scalar method's own contract for other interpolation behavior. An overload's name alone does not establish extrapolation semantics.

Zero-length vector normalization returns zero; safe normalization has its explicit epsilon boundary. Near-zero quaternion normalization/inversion uses identity. `Matrix.Invert` returns identity when the absolute determinant is below `1e-6`; it does not return a success flag. `Decompose` rejects basis-column lengths at or below that tolerance, but success does not prove that shear or perspective was absent. Validate finite inputs and the domain's expected transform class before relying on these fallbacks.

## Treat numeric equality as an algorithm choice

Floating-point vector equality uses approximate comparison, while hash codes use raw components. Approximate equality is not a sound default key-equivalence relation for a hash table. Use explicit quantization or an equality/hash policy appropriate to your domain. Integer vectors use exact equality; float-to-integer casts do not supply a domain-specific rounding rule.

Rectangle point containment includes the left/top boundary and excludes the right/bottom boundary. Touching edges do not form a positive-area intersection. Define valid extents before calling overlap/union operations; the rectangle value is not a geometric validation service.

## Convert color channels explicitly

`Color` construction clamps channel values, but its public mutable fields can later bypass that clamp. Keep channels finite and within `[0, 1]` before byte conversion. `ToBytes` multiplies by 255 and truncates; it does not clamp arbitrary field writes.

Despite its name, the current `ToUInt32ARGB` method returns the numeric layout **`0xAABBGGRR`**: red occupies the least-significant byte. On a little-endian host those bytes appear as RGBA. Check the receiving API's numeric/byte-order contract instead of assuming ARGB from the name.

The value type does not label a color space, perform gamma conversion, or distinguish straight and premultiplied alpha. Those obligations belong to the rendering or UI boundary. See [UI render ownership](../../extending/ui-render-frames.md) for one concrete premultiplied resource path.

Browse the [Mathematics reference](../../api/projects/inno-core-mathematics.md) for the full vector, quaternion, matrix, rectangle, color and scalar operations. The declared Runtime script namespace is `InnoEngine.Mathematics`; this host example and CLR reference do not certify every projected API.
