---
title: Persistent and runtime identity tests
description: Verify detached identities, explicit registration and runtime domain isolation.
uid: project.inno-core-identity-tests
kind: project
owners:
  - Inno.Core.Identity.Tests
---
# Persistent and runtime identity tests

`Inno.Core.Identity.Tests` verifies the [Identity contracts](../../../architecture/projects/inno-core-identity.md) through their public entry points. Use this page to locate relevant assertions; it is not a report that these tests passed for your current change.

## Behavior covered

The allocator tests distinguish reading an identity from registering an object, initialize a detached persistent identity without a false unregister event, and resolve explicit persistent overrides. Equal numeric runtime IDs from different domains must remain distinct.

## Environment and execution

The project declares the `domain` validation layer. Use [the shared validation workflow](../../validate-change.md) to select its actual dependencies and environment. Inspect the [pinned project file](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/core/Inno.Core.Identity.Tests/Inno.Core.Identity.Tests.csproj) for package and project references.

A focused diagnostic from the engine root is:

```powershell
dotnet test tests/core/Inno.Core.Identity.Tests/Inno.Core.Identity.Tests.csproj --configuration Debug --disable-build-servers -m:1 -nodeReuse:false
```

Use `--filter FullyQualifiedName~MethodName` to investigate one case. A filtered run does not replace the obligations in the validation plan. Restore the declared SDK, packages and any tool/process prerequisites before executing; preserve cancellation, thread and cleanup requirements.

## Scenario reference

These representative methods are preserved from the original reference and checked against the pinned source. The linked files contain all assertions and parameterized cases.

### Identity Allocator

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/core/Inno.Core.Identity.Tests/IdentityAllocatorTests.cs). Representative entry points:

- `GetIdentity_DoesNotAutoRegisterObject`
- `InitializePersistentIdentity_AssignsDetachedIdentityWithoutUnregisterEvent`
- `Register_AndGet_ByRuntimeId_AndPersistentId_AndExplicitPersistentOverride`
- `RuntimeIdentity_RejectsAnEqualNumericIdFromAnotherDomain`

## Extend safely

Follow [the shared suite-maintenance guidance](../../validate-change.md#extend-a-suite-safely). Preserve this suite's owner-thread, resource-release and failure assertions when adding cases.
