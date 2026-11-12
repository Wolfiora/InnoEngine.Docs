---
title: Inno.Core.Mathematics
description: Engine vector, matrix, quaternion, rectangle and color values with explicit numeric and interoperability conventions.
uid: project.inno-core-mathematics
kind: project
owners:
  - Inno.Core.Mathematics
---
# Inno.Core.Mathematics

This project provides mutable float/integer vectors, quaternions, 4×4 matrices, rectangles, colors and scalar/SIMD helpers. It supplies numeric operations without choosing scene ownership, a graphics backend or a color-management policy.

Start with [transforming positions, directions and colors](../../manual/math/transform-values.md) for a task-oriented explanation of multiplication, upload, projection and packing.

## Numeric and layout contract

Matrices multiply column vectors; `A * B` applies B first. Translation occupies the last column. Default look-at/perspective factories are left-handed; `RH` variants are explicit. System.Numerics matrix conversions preserve element placement, not transform convention. Use explicit column-major export when the backend requires it.

Position transformation does not divide by homogeneous W. `TransformNormal` omits translation but does not compute inverse transpose or normalize. `ProjectToVector3` leaves XYZ unchanged for zero W. Quaternion units default to radians; preserve the selected XYZ/ZYX convention and do not assume Euler uniqueness.

Float equality can use tolerance while hashes use raw components; do not assume approximate-equal values form valid hash keys. Integer casts do not define a domain rounding policy. Interpolation clamping differs by API: Vector2/scalar Lerp allows extrapolation, while Vector3/Vector4/Vector4Int Lerp clamps.

Small-scale decomposition returns false, and near-singular inversion returns identity rather than a success indicator. Validate finite inputs and expected TRS/affine structure. Rectangle point containment excludes the maximum boundary. Numeric structs do not enforce all domain invariants through public field writes.

Color construction clamps channels, but byte conversion assumes already normalized finite fields. `ToUInt32ARGB` currently produces numeric `0xAABBGGRR`; it does not perform color-space or alpha-convention conversion. SIMD acceleration is an implementation choice, not a new ownership or precision contract.

The Runtime script export declarations select the main math types under `InnoEngine.Mathematics`; the lower-level `SimdMath` helper is an internal implementation detail, not a public API. This CLR inventory is not a script compilation or platform execution certificate.

## API reference

Browse the [exact types and member contracts](../types/core-mathematics/index.md) in the selected CLR surface. Each declaration links to its captured source and preserves its shared constraints.

## Logical script references

The compiler-selected script declarations are separate from this project's host CLR surface. Read the script calling guide and the associated module contracts before using a projected member.

- [Runtime script API](../runtime-script/inno-core-mathematics/index.md)
