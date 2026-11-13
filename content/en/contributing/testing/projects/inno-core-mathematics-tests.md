---
title: Vector and matrix tests
description: Verify geometric identities and compound rotation conventions.
uid: project.inno-core-mathematics-tests
kind: project
owners:
  - Inno.Core.Mathematics.Tests
---
# Vector and matrix tests

`Inno.Core.Mathematics.Tests` verifies the [Mathematics contracts](../../../architecture/projects/inno-core-mathematics.md) through their public entry points. Use this page to locate relevant assertions; it is not a report that these tests passed for your current change.

## Behavior covered

The tests cover quaternion rotation preserving vector length, compound XYZ Euler round trips, length-squared agreement with the dot product, and cross-product orthogonality. These are numerical contracts; they do not certify a rendering backend or GPU convention.

## Environment and execution

The project declares the `domain` validation layer. Use [the shared validation workflow](../../validate-change.md) to select its actual dependencies and environment. Inspect the [pinned project file](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/core/Inno.Core.Mathematics.Tests/Inno.Core.Mathematics.Tests.csproj) for package and project references.

A focused diagnostic from the engine root is:

```powershell
dotnet test tests/core/Inno.Core.Mathematics.Tests/Inno.Core.Mathematics.Tests.csproj --configuration Debug --disable-build-servers -m:1 -nodeReuse:false
```

Use `--filter FullyQualifiedName~MethodName` to investigate one case. A filtered run does not replace the obligations in the validation plan. Restore the declared SDK, packages and any tool/process prerequisites before executing; preserve cancellation, thread and cleanup requirements.

## Scenario reference

These representative methods are preserved from the original reference and checked against the pinned source. The linked files contain all assertions and parameterized cases.

### Vector Matrix

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/core/Inno.Core.Mathematics.Tests/VectorMatrixTests.cs). Representative entry points:

- `Vector2QuaternionTransform_PreservesLengthForZRotation`
- `EulerAnglesXYZ_RoundTripsCompoundRotation`
- `Vector2_LengthSquared_MatchesDot`
- `Vector3_Cross_IsOrthogonal`

## Extend safely

Follow [the shared suite-maintenance guidance](../../validate-change.md#extend-a-suite-safely). Preserve this suite's owner-thread, resource-release and failure assertions when adding cases.
